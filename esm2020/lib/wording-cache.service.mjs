import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WordingCacheService {
    constructor() {
        this.cache = new Map();
    }
    get(key) {
        return this.cache.has(key) ? this.cache.get(key) : null;
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    has(key) {
        return this.cache.has(key);
    }
    clear(key) {
        if (key)
            this.cache.delete(key);
        else
            this.cache.clear();
    }
}
WordingCacheService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
WordingCacheService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WordingCacheService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGluZy1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvd29yZGluZy1saWJyYXJ5L3NyYy9saWIvd29yZGluZy1jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUI7UUFFUSxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWEsQ0FBQztJQUZyQixDQUFDO0lBSWpCLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFRO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBWTtRQUNoQixJQUFJLEdBQUc7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDOztpSEFyQlUsbUJBQW1CO3FIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV29yZGluZ0NhY2hlU2VydmljZTxUPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSkgPyB0aGlzLmNhY2hlLmdldChrZXkpISA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlLnNldChrZXksIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcihrZXk/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChrZXkpIHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICBlbHNlIHRoaXMuY2FjaGUuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIl19