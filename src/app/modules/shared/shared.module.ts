import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './components/post/post.component';
import { SeriesNavigationComponent } from './components/series-navigation/series-navigation.component';
import { BlogService } from './services/blog.service';
import { PostNavigationComponent } from '../../components/post-navigation/post-navigation.component';

@NgModule({
  declarations: [PostComponent, SeriesNavigationComponent],
  providers: [BlogService],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MarkdownModule,
    PostNavigationComponent,
  ],
})
export class SharedModule {}
