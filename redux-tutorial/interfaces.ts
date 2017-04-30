export interface IAction {
    type: string;
    payload?: any;
}

export interface IReducer<T> {
    (state: T, action: IAction): T
}

export interface IListenerCallback {
    (): void
}

export interface IUnsubscribeCallback {
    (): void
}
