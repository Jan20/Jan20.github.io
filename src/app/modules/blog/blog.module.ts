import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { FilterComponent } from './components/blog/filter/filter.component';
import { PostComponent } from './components/post/post.component';
import { BlogService } from './services/blog.service';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './components/landing/landing.component';
import { TopicsComponent } from './components/landing/topics/topics.component';
import { SeriesComponent } from './components/series/series.component';
import { LinksComponent } from './components/landing/links/links.component';
import { AboutComponent } from './components/about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { BackButtonComponent } from './components/post/back-button.component/back-button.component';
import { TitleComponent } from './components/landing/title/title.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    FilterComponent,
    LandingComponent,
    TopicsComponent,
    SeriesComponent,
    LinksComponent,
    AboutComponent,
    BackButtonComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCommonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatGridListModule,
    MatButtonModule,
    BlogRoutingModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: LandingComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog/series', component: SeriesComponent },
      { path: 'blog/:category', component: BlogComponent },
      { path: 'blog/:category/:topic', component: BlogComponent },
      { path: 'blog/:category/:topic/:id', component: PostComponent },
    ]),
    MarkdownModule,
  ],
  providers: [BlogService],
  exports: [BlogComponent],
})
export class BlogModule {}
