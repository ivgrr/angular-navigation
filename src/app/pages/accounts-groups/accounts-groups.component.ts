import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { AccountsGroupsData } from 'src/app/navigation/navigation.types';

@Component({
  selector: 'app-accounts-groups',
  templateUrl: './accounts-groups.component.html',
})
export class AccountsGroupsComponent implements OnInit {
  protected accountsGroupsData!: Observable<AccountsGroupsData[] | undefined>;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {}

  public ngOnInit() {
    this.accountsGroupsData = this.navigationService.getRouteData(
      this.router.url
    );
  }
}
