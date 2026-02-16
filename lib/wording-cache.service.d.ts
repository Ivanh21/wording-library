import * as i0 from "@angular/core";
export declare class WordingCacheService<T> {
    constructor();
    private cache;
    get(key: string): T | null;
    set(key: string, value: T): void;
    has(key: string): boolean;
    clear(key?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordingCacheService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WordingCacheService<any>>;
}
