import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-badge',
  imports: [],
  templateUrl: './stat-badge.html'
})
export class StatBadge {
  public statNumber = input(0)
  public statText = input('')
}
