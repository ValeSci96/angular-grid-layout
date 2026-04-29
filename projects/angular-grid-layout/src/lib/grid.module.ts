import { NgModule } from '@angular/core';
import { KtdGridComponent } from './grid.component';
import { KtdGridItemComponent } from './grid-item/grid-item.component';
import { KtdGridDragHandle } from './directives/drag-handle';
import { KtdGridResizeHandle } from './directives/resize-handle';
import { KtdGridItemPlaceholder } from './directives/placeholder';
import { KtdGridService } from './grid.service';

/**
 * Legacy compatibility wrapper for NgModule-based applications.
 * Prefer importing the standalone components and directives directly.
 */
@NgModule({
    imports: [
        KtdGridComponent,
        KtdGridItemComponent,
        KtdGridDragHandle,
        KtdGridResizeHandle,
        KtdGridItemPlaceholder
    ],
    exports: [
        KtdGridComponent,
        KtdGridItemComponent,
        KtdGridDragHandle,
        KtdGridResizeHandle,
        KtdGridItemPlaceholder
    ],
    providers: [
        KtdGridService
    ]
})
/**
 * @deprecated Prefer the standalone imports from `@katoid/angular-grid-layout`.
 */
export class KtdGridModule {}
