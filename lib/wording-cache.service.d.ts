import * as i0 from "@angular/core";
export declare class WordingCacheService {
    constructor();
    private cache;
    get<T>(key: string): T | null;
    set(key: string, value: any): void;
    has(key: string): boolean;
    clear(key?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordingCacheService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WordingCacheService>;
}
