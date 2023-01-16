import { APP_BASE_HREF } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { EMPTY, of } from 'rxjs';
import { Router } from '@angular/router';

const router = jasmine.createSpyObj('Router', ['navigate']);
router.navigate.and.returnValue(of(EMPTY));

const compileComponent = (): void => {
  TestBed.configureTestingModule({
    declarations: [MenuComponent],
    imports: [
      FormsModule,
      RouterTestingModule,
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
    ],
    providers: [
      { provide: Router, useValue: router },
      { provide: APP_BASE_HREF, useValue: '/' },
    ],
  }).compileComponents();
};

fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    compileComponent();
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should navigate to the guides overview page', fakeAsync(() => {
    userEvent.click(screen.getByRole('button', { name: '🧑🏼‍💻 Guides' }));
    tick(1);
    expect(router.navigate).toHaveBeenCalledWith(['/blog/guides']);
  }));

  fit('should navigate to the landing page', fakeAsync(() => {
    userEvent.click(screen.getByRole('button', { name: 'Jan Schumann' }));
    tick(1);
    expect(router.navigate).toHaveBeenCalledWith(['']);
  }));
});
