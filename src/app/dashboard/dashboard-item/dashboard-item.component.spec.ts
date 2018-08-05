import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DashboardItemComponent } from './dashboard-item.component';

describe('DashboardItemComponent', () => {
    let component: DashboardItemComponent;
    let fixture: ComponentFixture<DashboardItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
