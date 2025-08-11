import { Component, Input } from '@angular/core';
import { Repo } from '../../../core/models/repo.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repo-list-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './repo-list-item.component.html',
  styleUrl: './repo-list-item.component.css',
})
export class RepoListItemComponent {
  @Input() repo!: Repo;
}
