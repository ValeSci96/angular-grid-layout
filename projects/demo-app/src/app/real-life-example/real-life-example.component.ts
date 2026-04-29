import { Component, DestroyRef, DOCUMENT, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    KtdGridComponent, KtdGridLayout, KtdGridItemComponent, KtdGridItemPlaceholder, KtdGridDragHandle
} from '@katoid/angular-grid-layout';
import { fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { KtdFooterComponent } from '../components/footer/footer.component';
import { KtdTableSortingComponent } from './table-sorting/table-sorting.component';

@Component({
    selector: 'ktd-real-life-example',
    templateUrl: './real-life-example.component.html',
    styleUrls: ['./real-life-example.component.scss'],
    imports: [KtdGridComponent, KtdGridItemComponent, KtdGridItemPlaceholder, KtdGridDragHandle, KtdTableSortingComponent, KtdFooterComponent]
})
export class KtdRealLifeExampleComponent implements OnInit {
    @ViewChild(KtdGridComponent, {static: true}) grid: KtdGridComponent;
    private readonly destroyRef = inject(DestroyRef);
    readonly document = inject<Document>(DOCUMENT);

    cols = 12;
    rowHeight = 50;
    compactType: 'vertical' | 'horizontal' | null = 'vertical';
    layout: KtdGridLayout = [
        {id: '0', x: 0, y: 5, w: 4, h: 10, minW: 2, minH: 5},
        {id: '1', x: 4, y: 5, w: 4, h: 10, minW: 2, minH: 5},
        {id: '2', x: 2, y: 0, w: 6, h: 5, minW: 4, minH: 4, maxW: 8, maxH: 14},
        {id: '5', x: 8, y: 0, w: 4, h: 5, minW: 2, minH: 3},
        {id: '3', x: 0, y: 0, w: 2, h: 5, minH: 3},
        {id: '4', x: 8, y: 5, w: 4, h: 10, minW: 3, minH: 5, maxH: 12}
    ];

    ngOnInit() {
        merge(
            fromEvent(window, 'resize'),
            fromEvent(window, 'orientationchange')
        ).pipe(
            debounceTime(50),
            takeUntilDestroyed(this.destroyRef)
        ).subscribe(() => {
            this.grid.resize();
        });
    }

}
