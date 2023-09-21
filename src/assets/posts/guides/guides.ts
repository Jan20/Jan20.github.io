import { Post } from 'src/app/modules/shared/models/post';

export const Guides: Post[] = [
  new Post(
    'guides',
    'Docker',
    'Containerizing PostgreSQL',
    'Gives step-by-step instructions for containerizing Postgres database.',
    '/assets/posts/guides/010_postgres/010_postgres.md',
    'assets/posts/guides/010_postgres/thumbnail.png',
    '2023-03-25'
  ),
  new Post(
    'guides',
    'Docker',
    'Containerize Flask Apps',
    'This post covers the creation of a container image for a minimal Flask application.',
    '/assets/posts/guides/005_containerize_flask_applications/005_containerize_flask_applications.md',
    'assets/posts/guides/005_containerize_flask_applications/thumbnail.png',
    '2022-06-27',
    'Docker',
    2
  ),
  new Post(
    'guides',
    'Docker',
    'Containerize Angular Apps',
    'This post covers the creation of a container image for a minimal Angular application.',
    '/assets/posts/guides/006_containerize_Angular_applications/006_containerize_Angular_applications.md',
    'assets/posts/guides/006_containerize_Angular_applications/thumbnail.png',
    '2022-06-27',
    'Docker',
    3
  ),
  new Post(
    'guides',
    'Docker',
    'Introduction to Docker',
    'Provides a high-level introduction to Docker an its terminology.',
    '/assets/posts/guides/004_introduction_to_docker/004_introduction_to_docker.md',
    'assets/posts/guides/004_introduction_to_docker/thumbnail.png',
    '2022-06-27',
    'Docker',
    1
  ),
  new Post(
    'guides',
    'Python',
    'Virtual Envs & Dependencies',
    'Gives an introduciton to virtual environments and dependency management in Python.',
    '/assets/posts/guides/008_virtual_envs_and_dependencies/008_virtual_envs_and_dependencies.md',
    'assets/posts/guides/008_virtual_envs_and_dependencies/thumbnail.png',
    '2023-02-06'
  ),
  new Post(
    'guides',
    'Docker',
    'Multi Container Applications',
    'Describes how to build an application based on a minimal Flask backend and Angular frontend',
    '/assets/posts/guides/007_multi_container_applications/007_multi_container_applications.md',
    'assets/posts/guides/007_multi_container_applications/thumbnail.png',
    '2022-06-27',
    'Docker',
    4
  ),
];
