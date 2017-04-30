export interface IAction {
    type: string;
    payload?: any;
}

export interface IReducer<T> {
    (state: T, action: IAction): T;
}

export interface IListenerCallback {
    (): void;
}

export interface IUnsubscribeCallback {
    (): void;
}

export class Store<T> {
    private _state: T;
    private _listeners: IListenerCallback[] = [];

    constructor(
        private reducer: IReducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: IAction): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: IListenerCallback) => listener());
    }

    subscribe(listener: IListenerCallback): IUnsubscribeCallback {
        this._listeners.push(listener);
        return () => { // returns an "unsubscribe" function
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }
}