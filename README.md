# LinkedSignal + Resource Playground

Note: `linkedSignal` and `resource/rxResource` are currently in experimental release in a prerelease
Angular 19 version. The RFC for resource is coming at some later point.

## How to run this

- This can be run like normal with `ng serve`
- Before there was an officially released build, I learned how to manually run Angular source code. 
See the next section on how to do that like how I did it, as well as a video link to how to do it much
easier than how I did it.
- My intent with this repo if I am not lazy is to extract it to Stackblitz to easily share with others,
  showing off various scenarios to use both these new signal functions.

## How to run Angular source code that isn't in a major/minor/next release

This project was manually linked to Angular in "the hard way". Aka I built it manually, and 
the below points go over the caveats of that. It was a good learning lesson that I want to retain for if
I contribute directly to the docs again. However, as of this sentence's commit, I learned there
is a better way. Check out [Brandon Robert's short video](https://youtu.be/q4jOfQ7TbRg)
on some ways you can easily run current `main` code or even PR code basically right out of the box.

Running current Angular code or PR branches manually, if you really need to:

- Created w/v18, updated to 19.0.0.next-10, symlinked to build of PR's branch
- Resources PR: https://github.com/angular/angular/pull/58255
- How to symlink to use the PR's branch: https://github.com/angular/angular/blob/main/contributing-docs/building-and-testing-angular.md#invoking-the-angular-cli
- Example from Armen Vardanyan: https://x.com/Armandotrue/status/1847285255406846124/photo/1
- Linking: https://github.com/crutchcorn/ng-linked-signal-and-resource-demo#installing-the-demo
- CLearing bazel cache if install/build gives you issues (but every other build if I do builds twice just works, idk, WSL things): `rm -rf ~/.cache/bazel/_bazel_${your_username}/cache/repos/v1`
- Random last note: `sudo` when building the node modules for a linked project gave me WSL issues. Don't do that. No issues after removing.


---

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
