import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { SymbolsGroupsData } from 'src/app/navigation/navigation.types';

@Component({
  selector: 'app-symbols-groups',
  templateUrl: './symbols-groups.component.html',
})
export class SymbolsGroupsComponent implements OnInit {
  protected symbolsGroupsData!: Observable<SymbolsGroupsData[] | undefined>;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.symbolsGroupsData = this.navigationService.getRouteData(
      this.router.url
    );
  }
}
