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
$ git merge develop
```