# NgIDG
This project is about deliver common code for ITIA DIGITAL's projects developed in Google Angular 9+ framework.

## Docs

Website to describe libraries @itia-digital/connect & @itia-digital/mat
To build run:

```console
ng build --prod --output-path docs --base-href angular
```

## Libraries
###@ITIA-DIGITAL/connect
#### Publication
Published at GitHub Packages.

```console
ng build idg-connect --prod && cd dist/idg-connect
npm pack && npm publish --registry=https://npm.pkg.github.com/ITIA-DIGITAL
cd ../../
```

Important: You must be logged in with the correct token in github. (use the token as psw)
```console
npm login --scope=@ITIA-DIGITAL --registry=https://npm.pkg.github.com/
```

#### Build
```console
npm run connect:build
```

###@ITIA-DIGITAL/material
#### Publication
Published at GitHub Packages.

```console
ng build idg-mat --prod && cd dist/idg-mat
npm pack && npm publish --registry=https://npm.pkg.github.com/ITIA-DIGITAL
cd ../../
```

#### Build
```console
npm run mat:build
```

## For developers

Use prettier before commit
```console
prettier --write "**/*.ts"
```

## Angular

```console
Angular CLI: 9.1.3
Node: 13.10.1
OS: darwin x64

Angular: 9.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                            Version
------------------------------------------------------------
@angular-devkit/architect          0.901.3
@angular-devkit/build-angular      0.901.3
@angular-devkit/build-ng-packagr   0.901.3
@angular-devkit/build-optimizer    0.901.3
@angular-devkit/build-webpack      0.901.3
@angular-devkit/core               9.1.3
@angular-devkit/schematics         9.1.3
@angular/cdk                       9.2.1
@angular/flex-layout               9.0.0-beta.29
@angular/material                  9.2.1
@ngtools/webpack                   9.1.3
@schematics/angular                9.1.3
@schematics/update                 0.901.3
ng-packagr                         9.1.1
rxjs                               6.5.5
typescript                         3.8.3
webpack                            4.42.0
```
