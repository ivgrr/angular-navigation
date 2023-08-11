import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';
import { ContractsData } from 'src/app/navigation/navigation.types';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
})
export class ContractsComponent {
  protected contractsData!: Observable<ContractsData[] | undefined>;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {}

  public ngOnInit() {
    this.contractsData = this.navigationService.getRouteData(this.router.url);
  }
}
