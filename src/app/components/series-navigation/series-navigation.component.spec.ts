import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { MarkdownModule } from 'ngx-markdown';
import { BehaviorSubject, of } from 'rxjs';
import { DOCKER_GUIDES } from 'src/app/helpers/post-mocks';
import { BlogService } from '../../modules/shared/services/blog.service';
import { SeriesNavigationComponent } from './series-navigation.component';

let component: SeriesNavigationComponent;
let fixture: ComponentFixture<SeriesNavigationComponent>;

const router = jasmine.createSpyObj('Router', ['navigate']);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
router.navigate.and.returnValue(Promise.resolve(true));
router.url = '/guides/containerize_flask_applications';
router.events = new BehaviorSubject(new NavigationEnd(0, '', ''));

const blogService = jasmine.createSpyObj<BlogService>('BlogService', [
  'getPost',
  'getPosts',
]);
blogService.getPost.and.returnValue(of(DOCKER_GUIDES[0]));
blogService.getPosts.and.returnValue(of(DOCKER_GUIDES));

const compileComponent = (): void => {
  TestBed.configureTestingModule({
    declarations: [],
    imports: [
      CommonModule,
      SeriesNavigationComponent,
      HttpClientModule,
      MatCardModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatRippleModule,
      MarkdownModule,
      NoopAnimationsModule,
      MatGridListModule,
      RouterTestingModule,
    ],
    providers: [
      { provide: Router, useValue: router },
      { provide: BlogService, useValue: blogService },
      { provide: ComponentFixtureAutoDetect, useValue: true },
    ],
    teardown: { destroyAfterEach: false },
  }).compileComponents();
};

describe('SeriesNavigationComponent', () => {
  beforeEach(async () => {
    compileComponent();
    fixture = TestBed.createComponent(SeriesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to the containerize Angular application', fakeAsync(() => {
    expect(
      screen.getByRole('heading', { name: 'Introduction to Docker' })
    ).toBeVisible();
    expect(
      screen.getByRole('heading', { name: 'Containerize Angular Apps' })
    ).toBeVisible();
    userEvent.click(
      screen.getByRole('heading', { name: 'Containerize Angular Apps' })
    );
    tick(1);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([
      '/guides/containerize_Angular_applications',
    ]);
  }));
});
