import {IAction, IListenerCallback, IReducer, IUnsubscribeCallback} from "./interfaces";

export class Store<T> {
    private _state: T;
    private _listeners: IListenerCallback[] = []

    constructor(
        private reducer: IReducer<T>,
        initialState: T
    ) {
        this._state = initialState
    }

    getState(): T {
        return this._state
    }

    dispatch(action: IAction): void {
        this._state = this.reducer(this._state, action)
        this._listeners.forEach((listener: IListenerCallback) => listener())
    }

    subscribe(listener: IListenerCallback): IUnsubscribeCallback {
        this._listeners.push(listener)

        return () => {
            this._listeners = this._listeners.filter(l => l !== listener)
        }
    }
}