import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { RelatedProfilesData } from 'src/app/navigation/navigation.types';

@Component({
  selector: 'app-related-profiles',
  templateUrl: './related-profiles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedProfilesComponent implements OnInit {
  protected relatedProfilesData!: Observable<RelatedProfilesData[] | undefined>;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {}

  public ngOnInit() {
    this.relatedProfilesData = this.navigationService.getRouteData(
      this.router.url
    );
  }
}
