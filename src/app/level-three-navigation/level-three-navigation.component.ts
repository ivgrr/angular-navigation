import { Component, Input } from '@angular/core';
import { CardItem } from '../pages';

@Component({
  selector: 'app-level-three-navigation',
  templateUrl: './level-three-navigation.component.html',
})
export class LevelThreeNavigationComponent {
  @Input() children!: CardItem[];
  @Input() firstChildPath!: string;
  @Input() firstChildIcon!: string | undefined;
}
