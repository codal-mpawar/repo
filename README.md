# Testing

This Project to display a number of persons id and name.

## Create a new Project

Ensure that you are not already in angular workspace folder. For example, if you have previously created the getting started             workspace, change	to the parent of that folder.
Run new terminal on visual code. then use the commnd to create new project
  - ng new testing
The ng new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing     the Enter or Return key.

## Create class Module

- ng g class Codalite
Create the codalite class in its own file src/app folder. give it id and name properties.

## Create mock-codalite class
	- ng g class mock-codalite
In this class import the Codalite Class and use there properties. and create a one array and set properties id and name.

## create list Component
	- ng g c list
when you run command then generate its css, html ,spec.ts and .ts file. and its function and code in the file.

## Show the list object
Udate the binding in the template to announce the Codalite name in a details layout like this:
	Id Name
	1  |||||
	2  |||||
	3  |||||

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
