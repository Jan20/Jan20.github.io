import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filterText: string = 'Show Filters';
  public topics: Observable<Set<string>> = this.fetchTopics();

  @Output() private topicSelected = new EventEmitter<string>();

  constructor(
    private readonly blogService: BlogService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public selectTopic(topic: string): void {
    this.topicSelected.emit(topic);
  }

  private fetchTopics(): Observable<Set<string>> {
    return this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('category')),
      map(category => (!category ? 'guides' : category)),
      map(category => this.blogService.getTopics(category))
    );
  }
}
