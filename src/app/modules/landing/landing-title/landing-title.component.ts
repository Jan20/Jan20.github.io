import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  PageTitle,
  PageTitleBackground,
} from '../../../components/models/page-title';

@Component({
  selector: 'app-landing-title',
  templateUrl: './landing-title.component.html',
  styleUrls: ['./landing-title.component.scss'],
})
export class LandingTitleComponent {
  readonly pageTitle = new PageTitle(
    "Jan's Engineering Blog",
    "Writing software requires passion, skill, and a considerable amount of time. However, time is our most limited resource, so let's explore techniques helping us to craft great software faster.",
    PageTitleBackground.LANDING
  );

  constructor(private readonly router: Router) {}

  startReading(): void {
    this.router.navigate([`engineering/efficient-terminal-setup`]);
  }
}
