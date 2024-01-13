import { Post } from 'src/app/modules/shared/models/post';

export const guides: Post[] = [
  new Post(
    '010_postgres',
    'Docker',
    'Containerizing PostgreSQL',
    'Gives step-by-step instructions for containerizing Postgres database.',
    '/guides/010_postgres/010_postgres.md',
    'assets/posts/guides/010_postgres/thumbnail.svg',
    '2023-03-25',
    '/Users/jan/Developer/blog/src/assets/posts/guides/010_postgres/010_postgres.md'
  ),
  new Post(
    '005_containerize_flask_applications',
    'Docker',
    'Containerize Flask Apps',
    'This post covers the creation of a container image for a minimal Flask application.',
    '/guides/005_containerize_flask_applications/005_containerize_flask_applications.md',
    'assets/posts/guides/005_containerize_flask_applications/thumbnail.svg',
    '2022-06-27',
    '/Users/jan/Developer/blog/src/assets/posts/guides/005_containerize_flask_applications/005_containerize_flask_applications.md',
    'Docker',
    2
  ),
  new Post(
    '006_containerize_Angular_applications',
    'Docker',
    'Containerize Angular Apps',
    'This post covers the creation of a container image for a minimal Angular application.',
    '/guides/006_containerize_Angular_applications/006_containerize_Angular_applications.md',
    'assets/posts/guides/006_containerize_Angular_applications/thumbnail.svg',
    '2022-06-27',
    '/Users/jan/Developer/blog/src/assets/posts/guides/006_containerize_Angular_applications/006_containerize_Angular_applications.md',
    'Docker',
    3
  ),
  new Post(
    '004_introduction_to_docker',
    'Docker',
    'Introduction to Docker',
    'Provides a high-level introduction to Docker an its terminology.',
    '/guides/004_introduction_to_docker/004_introduction_to_docker.md',
    'assets/posts/guides/004_introduction_to_docker/thumbnail.svg',
    '2022-06-27',
    '/Users/jan/Developer/blog/src/assets/posts/guides/004_introduction_to_docker/004_introduction_to_docker.md',
    'Docker',
    1
  ),
  new Post(
    '008_virtual_envs_and_dependencies',
    'Python',
    'Virtual Envs & Dependencies',
    'Gives an introduciton to virtual environments and dependency management in Python.',
    '/guides/008_virtual_envs_and_dependencies/008_virtual_envs_and_dependencies.md',
    'assets/posts/guides/008_virtual_envs_and_dependencies/thumbnail.svg',
    '2023-02-06',
    '/Users/jan/Developer/blog/src/assets/posts/guides/008_virtual_envs_and_dependencies/008_virtual_envs_and_dependencies.md'
  ),
  new Post(
    '007_multi_container_applications',
    'Docker',
    'Multi Container Applications',
    'Describes how to build an application based on a minimal Flask backend and Angular frontend',
    '/guides/007_multi_container_applications/007_multi_container_applications.md',
    'assets/posts/guides/007_multi_container_applications/thumbnail.svg',
    '2022-06-27',
    '/Users/jan/Developer/blog/src/assets/posts/guides/007_multi_container_applications/007_multi_container_applications.md',
    'Docker',
    4
  ),
];
