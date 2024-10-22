# LinkedSignalResourcePlayground

- Created w/v18, updated to 19.0.0.next-10, symlinked to build of PR's branch
- Resources PR: https://github.com/angular/angular/pull/58255
- How to symlink to use the PR's branch: https://github.com/angular/angular/blob/main/contributing-docs/building-and-testing-angular.md#invoking-the-angular-cli
- Example from Armen Vardanyan: https://x.com/Armandotrue/status/1847285255406846124/photo/1
- Linking: https://github.com/crutchcorn/ng-linked-signal-and-resource-demo#installing-the-demo
- CLearing bazel cache if install/build gives you issues (but every other build if I do builds twice just works, idk, WSL things): `rm -rf ~/.cache/bazel/_bazel_${your_username}/cache/repos/v1`
- Random last note: `sudo` when building the node modules for a linked project gave me WSL issues. Don't do that. No issues after removing.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
