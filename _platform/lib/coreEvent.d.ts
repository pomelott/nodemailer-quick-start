export declare type TriggerFnPromise = boolean | Promise<boolean | object>;
export declare type TriggerFnPromiseAll = Array<TriggerFnPromise>;
export declare type TriggerItemFnReturnValue = boolean | {};
export declare type TriggerAllFnResolveSuccessValue = {
    [key: string]: any;
    status?: 0 | 1;
};
export declare type TriggerAllFnResolveValue = TriggerAllFnResolveSuccessValue | boolean;
export declare type TriggerAllFnReturnValue = boolean | TriggerAllFnResolveSuccessValue | Promise<TriggerAllFnResolveValue>;
export interface CoreEventFunction {
    ([]: Iterable<any>): TriggerAllFnReturnValue;
}
export interface CoreEvent {
    [key: string]: {
        [key: string]: CoreEventFunction;
    };
}
declare function register(type: string, mark?: string, fn?: CoreEventFunction): true | undefined;
declare function trigger(type: string, data?: any, mark?: string): TriggerAllFnReturnValue;
declare function gc(type?: string, mark?: string): boolean;
declare const _default: {
    register: typeof register;
    trigger: typeof trigger;
    gc: typeof gc;
};
export default _default;
