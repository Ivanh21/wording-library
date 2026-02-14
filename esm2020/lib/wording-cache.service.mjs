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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGluZy1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvd29yZGluZy1saWJyYXJ5L3NyYy9saWIvd29yZGluZy1jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUI7UUFFUSxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztJQUZ2QixDQUFDO0lBSWpCLEdBQUcsQ0FBSSxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVk7UUFDaEIsSUFBSSxHQUFHO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7aUhBckJVLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdvcmRpbmdDYWNoZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwcml2YXRlIGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuXHJcbiAgZ2V0PFQ+KGtleTogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSkgPyB0aGlzLmNhY2hlLmdldChrZXkpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlLmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoa2V5Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoa2V5KSB0aGlzLmNhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgZWxzZSB0aGlzLmNhY2hlLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==