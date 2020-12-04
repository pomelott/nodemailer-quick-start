export interface CoreEventFunction {
    ([]: Iterable<any>): boolean | Promise<boolean>;
}
export interface CoreEvent {
    [key: string]: {
        [key: string]: CoreEventFunction;
    };
}
export declare type TriggerReturnValueType = boolean | Promise<unknown[] | Array<boolean>>;
declare function register(type: string, mark: string, fn: CoreEventFunction): void;
declare function trigger(type: string, data?: any, mark?: string): TriggerReturnValueType;
declare function gc(type?: string, mark?: string): boolean | undefined;
declare const _default: {
    register: typeof register;
    trigger: typeof trigger;
    gc: typeof gc;
};
export default _default;
