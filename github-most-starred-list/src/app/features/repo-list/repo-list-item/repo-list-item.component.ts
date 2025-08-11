import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './repo-list-item.component.html',
  styleUrl: './repo-list-item.component.css',
})
export class RepoListItemComponent {
  @Input() item: any;
}
