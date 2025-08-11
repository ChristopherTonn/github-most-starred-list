import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';

@Component({
  selector: 'app-repo-list',
  imports: [CommonModule, RepoListItemComponent],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css',
})
export class RepoListComponent {
  items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
}
