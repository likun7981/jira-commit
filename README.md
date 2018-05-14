# jira-commit
> a simple commit repo with cz-cli 
    

[![npm version](https://img.shields.io/npm/v/jira-commit.svg?style=flat-square)](https://www.npmjs.org/package/jira-commit)
[![Build Status](https://img.shields.io/travis/likun7981/jira-commit.svg?style=flat-square)](https://travis-ci.org/likun7981/jira-commit)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## install
```
$ yarn add --dev gcz
```

## Usage

You can use `gcz` like `git commit`
  
  
With package.json
```json
"scripts":{
  "cz":"gcz"
}
```

```
$ npm run cz -a
```

Global use 

```
$ npm i -g gcz
$ gcz -a
```

You can use `gcz-guard` to prevent default `git commit` with git hook `pre-commit`([husky](https://github.com/typicode/husky))

```json
"script":{
  "precommit": "gcz-guard"
}
```

You can configure conventional by `package.json`-`gczConventional` property