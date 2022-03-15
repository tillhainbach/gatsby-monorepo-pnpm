# PNPM + Gatsby Monorepo example

Monorepo for multiple projects, e.g. gatsby-based websites using pnpm
workspaces. The repo is set-up with github-actions, commitlint, eslint,
prettier, typescript for best DX. Eslint and prettier configs are based of
common shareable-config-packages found in the config directory.

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
