# server-nexus

## command

```bash
nodenv local 16.13.0
yarn init -y
yarn add nexus graphql apollo-server
yarn add --dev typescript ts-node-dev
gibo dump VisualStudio Node > .gitignore
# -> update tsconfig.json
yarn add @prisma/client
yarn add --dev prisma
npx prisma init
npx prisma migrate dev --name init --preview-feature
```

## references

[Tutorial](https://nexusjs.org/docs/getting-started/tutorial)
