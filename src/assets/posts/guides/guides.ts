import { Post } from "src/app/modules/blog/models/post"; 

export const guides: Post[] = [
    new Post('guides', 'Angular', 'Angular on GitHub Pages ', 'GitHub pages is a free hosting service for static websides, integrated in ones Github account. ', './src/assets/posts/guides/006_angular_apps_on_github_pages/angular_apps_on_github_pages.md', 'assets/posts/guides/006_angular_apps_on_github_pages/thumbnail.png'), 
    new Post('guides', 'Angular', 'Testing Angular Apps ', 'Angular provides a set of tools that can be used to test individual functions,components as well as end-to-end flow. This guide dives into common testing use-cases and tries to highlight best practices. ', './src/assets/posts/guides/003_testing_Angular_apps/testing_Angular_apps.md', 'assets/posts/guides/003_testing_Angular_apps/thumbnail.png'), 
    new Post('guides', 'RxJs', 'RxJS in Angular ', 'RxJS relies heavily on functional programming concepts, as brievly presentend in the following section. ', './src/assets/posts/guides/002_introduction_to_rxjs/introduction_to_rxjs.md', 'assets/posts/guides/002_introduction_to_rxjs/thumbnail.png'), 
    new Post('guides', 'Angular', 'Angular Fundamentals ', 'This guide provides a **brief overview** of creating a **new Angular application**. ', './src/assets/posts/guides/001_angular_fundamentals/angular_fundamentals.md', 'assets/posts/guides/001_angular_fundamentals/thumbnail.png'), 
    new Post('guides', 'Python', 'Pandas Datafames ', 'The following post provides an introduction to Pandas dataframes. ', './src/assets/posts/guides/005_pandas_dataframes/dataframe.md', 'assets/posts/guides/005_pandas_dataframes/thumbnail.png'), 
    new Post('guides', 'Machine Learning', 'Tensorboard ', '## Overview ', './src/assets/posts/guides/004_tensorboard/tensorboard.md', 'assets/posts/guides/004_tensorboard/thumbnail.png'), 
]