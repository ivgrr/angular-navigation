import { Component, Input } from '@angular/core';

export interface CardItem {
  title: string;
  icon?: string;
  path: string;
  children?: CardItem[];
}

@Component({
  selector: 'app-level-three-navigation',
  templateUrl: './level-three-navigation.component.html',
})
export class LevelThreeNavigationComponent {
  @Input() children!: CardItem[];
  @Input() firstChildPath!: string;
  @Input() firstChildIcon!: string | undefined;
}
