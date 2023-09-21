import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SharedModule } from '../shared/shared.module';
import { guidesRoutes } from './guides.routing';
import { GuidesComponent } from './guides/guides.component';

@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(guidesRoutes),
    SharedModule,
    PageTitleComponent,
    PostListComponent,
  ],
  exports: [],
})
export class GuidesModule {}
