# ReactJS Boilerplate

> ReactJS boilerplate with configuration

### Features

1. Webpack setup development and production
2. Jest and enzyme test setup
3. Travis CI integration
4. Automatic deploy on surge.sh
5. Eslint
6. Prettier

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd React-boilerplate
$ yarn install
$ yarn run dev
```

For production environments...

```sh
$ cd React-boilerplate
$ yarn install
$ yarn run build
```

For run test cases

```sh
$ yarn run test
$ yarn run test -u // For any UI change
$ yarn run test:coverage // Check coverage of test cases
$ yarn run test:watch // Watch test cases
```

VS Code Prettier Configuration

```sh
$ "editor.formatOnSave": true,
$ "javascript.editor.formatOnSave": false,
```

#### Automatic deploy

##### Surge

```sh
$ Add these lines in .travis.yml file
deploy:
  provider: surge
  skip_cleanup: true
  domain: [domain-name].surge.sh
  project: ./build/
on:
  branch: master
$ Add Environment variables SURGE_TOKEN and SURGE_LOGIN in surge.sh project settings
```

Github pages

```sh
$ Add these lines in .travis.yml file
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: folder_name/  # or remove this line to upload from root of repo
  on:
    branch: master
$ Add Environment variables GITHUB_TOKEN in surge.sh project settings
```

## License

MIT
