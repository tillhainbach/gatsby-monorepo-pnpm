# DeepFrozen 🥶

Ice-Cool projects, handcrafted in Berlin.

## Repo setup

This repository uses [pnpm](https://pnpm.io) as its package manager.

```sh
npm i -g pnpm
```

## Working with PNPM in monorepos

From the root directory, you can run any command for any packages by passing the
`--filter` options.

```sh

pnpm --filter <package> <command> ...
```

If you want to execute a command for the workspace root, pass the `-w` flag.

```sh
pnpm -w add -D eslint
```

## Naming Conventions

All React components and their files should be PascalCase, however, Gatsby page
files should be kebab-case (this makes it easy to map page-slugs to file names)
