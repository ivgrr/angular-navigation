import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { defer, merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-card-item-heading',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCardItemHeadingComponent {
  @ViewChild(TemplateRef, { read: TemplateRef })
  public templateRef!: TemplateRef<any>;
}

@Component({
  selector: 'app-page-card-item-content',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCardItemContentComponent {
  @ViewChild(TemplateRef, { read: TemplateRef })
  public templateRef!: TemplateRef<any>;
}

@Component({
  selector: 'app-page-card-item',
  template: `
    <ng-template>
      <li class="page-card-item">
        <div class="heading">
          <ng-container
            *ngTemplateOutlet="cardItemHeadingComponent.templateRef"
          ></ng-container>
        </div>
        <div class="content">
          <ng-container
            *ngTemplateOutlet="cardItemContentComponent.templateRef"
          ></ng-container>
        </div>
      </li>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCardItemComponent {
  @ViewChild(TemplateRef, { read: TemplateRef })
  public templateRef!: TemplateRef<any>;

  @ContentChild(PageCardItemHeadingComponent, {
    read: PageCardItemHeadingComponent,
  })
  protected cardItemHeadingComponent!: PageCardItemHeadingComponent;

  @ContentChild(PageCardItemContentComponent, {
    read: PageCardItemContentComponent,
  })
  protected cardItemContentComponent!: PageCardItemContentComponent;
}

@Component({
  selector: 'app-page-cards',
  template: `
    <ul class="page-cards">
      <ng-container *ngFor="let cardItem of cardItems | async">
        <ng-container *ngTemplateOutlet="cardItem.templateRef"></ng-container>
      </ng-container>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCardsComponent implements AfterViewInit {
  public cardItems: Observable<PageCardItemComponent[]> = of([]);

  @ContentChildren(PageCardItemComponent, { read: PageCardItemComponent })
  public cardItemsChanges!: QueryList<PageCardItemComponent>;
  constructor(private cd: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.cardItems = merge(
      defer(() => of(this.cardItemsChanges)),
      this.cardItemsChanges.changes
    ).pipe(map(() => this.cardItemsChanges.toArray()));
    this.cd.detectChanges();
  }
}
