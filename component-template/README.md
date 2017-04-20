#CE-UI_COMPONENTS

## Usage with other projects

Install from git: 
```sh
yarn add git+ssh://git@bitbucket.org/recongate-main/ce-ui-components.git
```

update to new version run 
```sh
yarn upgrade git+ssh://git@bitbucket.org/recongate-main/ce-ui-components.git
```


## Development
1. Clone this repo
2. run in the root dir:
```sh
yarn install
yarn hook-install
yarn start
```

## Deployment
1. run: 
```sh
yarn build
```
2. commit and push
3. run: 
```sh
yarn release:[patch|minor|major]
```