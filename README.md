# REMX Graph

This is a subgraph for TheGraph that indexes events coming from the Revenue Splitter contract so that we can produce accounting records for financial traceability.

## Development

1. Make sure the RevenueSplitter ABI in the abis folder is up to date
2. Update `subgraph.yml` to reference the correct contract address and start block
3. Update `schema.graphql` with any new entities or relationships
4. `yarn codegen` => this updates the files in the `generated` folder
5. Update `src/mapping.ts` as needed
6. `yarn build`
7. `yarn deploy`

## Deployments

Our strategy is to maintain each deployed subgraph as a branch from main.  To upgrade any given environment from changes pushed to the `main` branch, follow these steps:

```
$ git checkout <environment>
$ git merge main
$ git push
$ yarn build
$ yarn deploy
```

## Environments

| Chain | Branch | Environment | URL
|--- | ---|--- | ---
| 1 | eth-mainnet | production | remx.xyz
| 137 | polygon | production | remx.xya
| 5 | eth-local | local | _name_.remx.xyz
| 80001 | polygon-local | local | _name_.remx.xyz
| 5 | eth-dev | develop | dev.remx.xyz
| 80001 | polygon-dev | develop | dev.remx.xyz
| 5 | eth-qa | qa | qa.remx.xyz
| 80001 | polygon-qa | qa | qa.remx.xyz

## Production Deployment

The mainnet deployment of the subgraph is kept in the `mainnet` branch.  

> NOTE: Do not merge this branch to main.

```bash
$ git checkout mainnet
$ yarn build
$ yarn deploy
```

To update `mainnet` with changes from main

```
$ git checkout mainnet
$ git merge main
```

