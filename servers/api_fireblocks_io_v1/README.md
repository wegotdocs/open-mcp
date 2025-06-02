# @open-mcp/api_fireblocks_io_v1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_fireblocks_io_v1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_fireblocks_io_v1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_fireblocks_io_v1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_fireblocks_io_v1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_fireblocks_io_v1 \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_fireblocks_io_v1 \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_fireblocks_io_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_fireblocks_io_v1"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getvaultaccounts

**Environment variables**

No environment variables required

**Input schema**

- `namePrefix` (string)
- `nameSuffix` (string)
- `minAmountThreshold` (number)
- `assetId` (string)

### createvaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `hiddenOnUI` (boolean)
- `customerRefId` (string)
- `autoFuel` (boolean)
- `vaultType` (string)
- `autoAssign` (boolean)
- `Idempotency-Key` (string)

### createmultipledepositaddresses

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (integer)
- `assetId` (string)
- `count` (integer)
- `descriptions` (array)
- `vaultAccountToCopyDescFrom` (integer)
- `vaultAccountToCopyDescFromIndex` (integer)
- `Idempotency-Key` (string)

### getcreatemultipledepositaddressesjobstatus

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)

### getpagedvaultaccounts

**Environment variables**

No environment variables required

**Input schema**

- `namePrefix` (string)
- `nameSuffix` (string)
- `minAmountThreshold` (number)
- `assetId` (string)
- `orderBy` (string)
- `before` (string)
- `after` (string)
- `limit` (number)

### getvaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)

### updatevaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `name` (string)
- `Idempotency-Key` (string)

### getassetwallets

**Environment variables**

No environment variables required

**Input schema**

- `totalAmountLargerThan` (number)
- `assetId` (string)
- `orderBy` (string)
- `before` (string)
- `after` (string)
- `limit` (number)

### hidevaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `Idempotency-Key` (string)

### unhidevaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `Idempotency-Key` (string)

### activateassetforvaultaccount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `Idempotency-Key` (string)

### setvaultaccountcustomerrefid

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### setvaultaccountautofuel

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `autoFuel` (boolean)
- `Idempotency-Key` (string)

### getvaultaccountasset

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)

### createvaultaccountasset

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `eosAccountName` (string)
- `Idempotency-Key` (string)

### updatevaultaccountassetbalance

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `Idempotency-Key` (string)

### getvaultaccountassetaddresses

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)

### createvaultaccountassetaddress

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `description` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### getvaultaccountassetaddressespaginated

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `limit` (number)
- `before` (string)
- `after` (string)

### getmaxspendableamount

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `manualSignging` (boolean)

### updatevaultaccountassetaddress

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `addressId` (string)
- `description` (string)
- `Idempotency-Key` (string)

### setcustomerrefidforaddress

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `addressId` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### createlegacyaddress

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `addressId` (string)
- `Idempotency-Key` (string)

### getunspentinputs

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)

### getpublickeyinfo

**Environment variables**

No environment variables required

**Input schema**

- `derivationPath` (array)
- `algorithm` (string)
- `compressed` (boolean)

### getpublickeyinfoforaddress

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `assetId` (string)
- `change` (number)
- `addressIndex` (number)
- `compressed` (boolean)

### getvaultassets

**Environment variables**

No environment variables required

**Input schema**

- `accountNamePrefix` (string)
- `accountNameSuffix` (string)

### getvaultbalancebyasset

**Environment variables**

No environment variables required

**Input schema**

- `assetId` (string)

### freezeworkspace

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### getexchangeaccounts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### addexchangeaccount

**Environment variables**

No environment variables required

**Input schema**

- `exchangeType` (string)
- `name` (string)
- `creds` (string)
- `key` (string)
- `mainAccountId` (string)
- `Idempotency-Key` (string)

### getpagedexchangeaccounts

**Environment variables**

No environment variables required

**Input schema**

- `before` (string)
- `after` (string)
- `limit` (number)

### getexchangeaccount

**Environment variables**

No environment variables required

**Input schema**

- `exchangeAccountId` (string)

### internaltransfer

**Environment variables**

No environment variables required

**Input schema**

- `exchangeAccountId` (string)
- `asset` (string)
- `amount` (string)
- `sourceType` (string)
- `destType` (string)
- `Idempotency-Key` (string)

### convertassets

**Environment variables**

No environment variables required

**Input schema**

- `exchangeAccountId` (string)
- `srcAsset` (string)
- `destAsset` (string)
- `amount` (number)
- `Idempotency-Key` (string)

### getexchangeaccountasset

**Environment variables**

No environment variables required

**Input schema**

- `exchangeAccountId` (string)
- `assetId` (string)

### getexchangeaccountscredentialspublickey

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getfiataccounts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getfiataccount

**Environment variables**

No environment variables required

**Input schema**

- `accountId` (string)

### redeemfundstolinkeddda

**Environment variables**

No environment variables required

**Input schema**

- `accountId` (string)
- `amount` (number)
- `Idempotency-Key` (string)

### depositfundsfromlinkeddda

**Environment variables**

No environment variables required

**Input schema**

- `accountId` (string)
- `amount` (number)
- `Idempotency-Key` (string)

### getnetworkconnections

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createnetworkconnection

**Environment variables**

No environment variables required

**Input schema**

- `localNetworkId` (string)
- `remoteNetworkId` (string)
- `routingPolicy` (object)
- `Idempotency-Key` (string)

### setroutingpolicy

**Environment variables**

No environment variables required

**Input schema**

- `connectionId` (string)
- `routingPolicy` (object)

### checkthirdpartyrouting

**Environment variables**

No environment variables required

**Input schema**

- `connectionId` (string)
- `assetType` (string)

### getnetwork

**Environment variables**

No environment variables required

**Input schema**

- `connectionId` (string)

### deletenetworkconnection

**Environment variables**

No environment variables required

**Input schema**

- `connectionId` (string)

### getnetworkids

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createnetworkid

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `routingPolicy` (object)
- `Idempotency-Key` (string)

### getroutingpolicyassetgroups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### searchnetworkids

**Environment variables**

No environment variables required

**Input schema**

- `search` (string)
- `excludeSelf` (boolean)
- `excludeConnected` (boolean)
- `pageCursor` (string)
- `pageSize` (number)

### getnetworkid

**Environment variables**

No environment variables required

**Input schema**

- `networkId` (string)

### deletenetworkid

**Environment variables**

No environment variables required

**Input schema**

- `networkId` (string)

### setnetworkidroutingpolicy

**Environment variables**

No environment variables required

**Input schema**

- `networkId` (string)
- `routingPolicy` (object)

### setnetworkiddiscoverability

**Environment variables**

No environment variables required

**Input schema**

- `networkId` (string)
- `isDiscoverable` (boolean)

### setnetworkidname

**Environment variables**

No environment variables required

**Input schema**

- `networkId` (string)
- `name` (string)

### getinternalwallets

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createinternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### getinternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)

### deleteinternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)

### getinternalwalletassetspaginated

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `pageSize` (number)
- `pageCursor` (string)

### setcustomerrefidforinternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### getinternalwalletasset

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)

### createinternalwalletasset

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)
- `address` (string)
- `tag` (string)
- `Idempotency-Key` (string)

### deleteinternalwalletasset

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)

### createsigningkey

**Environment variables**

No environment variables required

**Input schema**

- `signingDeviceKeyId` (string)
- `signedCertPem` (string)
- `agentUserId` (string)
- `proofOfOwnership` (object)
- `Idempotency-Key` (string)

### getsigningkeyslist

**Environment variables**

No environment variables required

**Input schema**

- `pageCursor` (string)
- `pageSize` (number)
- `sortBy` (string)
- `order` (string)
- `vaultAccountId` (number)
- `agentUserId` (string)
- `algorithm` (string)
- `enabled` (boolean)
- `available` (boolean)

### getsigningkey

**Environment variables**

No environment variables required

**Input schema**

- `keyId` (string)

### updatesigningkey

**Environment variables**

No environment variables required

**Input schema**

- `keyId` (string)
- `vaultAccountId` (number)

### setagentid

**Environment variables**

No environment variables required

**Input schema**

- `keyId` (string)
- `agentUserId` (string)

### createvalidationkey

**Environment variables**

No environment variables required

**Input schema**

- `publicKeyPem` (string)
- `daysTillExpired` (number)
- `Idempotency-Key` (string)

### getvalidationkeyslist

**Environment variables**

No environment variables required

**Input schema**

- `pageCursor` (string)
- `pageSize` (number)
- `sortBy` (string)
- `order` (string)

### getvalidationkey

**Environment variables**

No environment variables required

**Input schema**

- `keyId` (string)

### disablevalidationkey

**Environment variables**

No environment variables required

**Input schema**

- `keyId` (string)
- `enabled` (boolean)

### getmpckeyslist

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getmpckeyslistbyuser

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### getexternalwallets

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createexternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### getexternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)

### deleteexternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)

### setexternalwalletcustomerrefid

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `customerRefId` (string)
- `Idempotency-Key` (string)

### getexternalwalletasset

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)

### addassettoexternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)
- `Idempotency-Key` (string)

### removeassetfromexternalwallet

**Environment variables**

No environment variables required

**Input schema**

- `walletId` (string)
- `assetId` (string)

### getcontracts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createcontract

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `Idempotency-Key` (string)

### getcontract

**Environment variables**

No environment variables required

**Input schema**

- `contractId` (string)

### deletecontract

**Environment variables**

No environment variables required

**Input schema**

- `contractId` (string)

### getcontractasset

**Environment variables**

No environment variables required

**Input schema**

- `contractId` (string)
- `assetId` (string)

### addcontractasset

**Environment variables**

No environment variables required

**Input schema**

- `contractId` (string)
- `assetId` (string)
- `address` (string)
- `tag` (string)
- `Idempotency-Key` (string)

### deletecontractasset

**Environment variables**

No environment variables required

**Input schema**

- `contractId` (string)
- `assetId` (string)

### listassets

**Environment variables**

No environment variables required

**Input schema**

- `blockchainId` (string)
- `assetClass` (string)
- `symbol` (string)
- `scope` (string)
- `deprecated` (boolean)
- `ids` (array)
- `pageCursor` (string)
- `pageSize` (number)
- `Idempotency-Key` (string)

### registernewasset

**Environment variables**

No environment variables required

**Input schema**

- `blockchainId` (string)
- `address` (string)
- `symbol` (string)
- `Idempotency-Key` (string)

### getasset

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Idempotency-Key` (string)

### setassetprice

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `currency` (string)
- `price` (number)
- `Idempotency-Key` (string)

### listblockchains

**Environment variables**

No environment variables required

**Input schema**

- `protocol` (string)
- `deprecated` (boolean)
- `test` (boolean)
- `ids` (array)
- `pageCursor` (string)
- `pageSize` (number)

### getblockchain

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### gettransactions

**Environment variables**

No environment variables required

**Input schema**

- `before` (string)
- `after` (string)
- `status` (string)
- `orderBy` (string)
- `sort` (string)
- `limit` (integer)
- `sourceType` (string)
- `sourceId` (string)
- `destType` (string)
- `destId` (string)
- `assets` (string)
- `txHash` (string)
- `sourceWalletId` (string)
- `destWalletId` (string)

### createtransaction

**Environment variables**

No environment variables required

**Input schema**

- `operation` (string)
- `note` (string)
- `externalTxId` (string)
- `assetId` (string)
- `source` (object)
- `destination` (object)
- `destinations` (array)
- `amount` (other)
- `treatAsGrossAmount` (boolean)
- `forceSweep` (boolean)
- `feeLevel` (string)
- `fee` (other)
- `priorityFee` (other)
- `failOnLowFee` (boolean)
- `maxFee` (string)
- `gasLimit` (other)
- `gasPrice` (other)
- `networkFee` (other)
- `replaceTxByHash` (string)
- `extraParameters` (object)
- `customerRefId` (string)
- `travelRuleMessage` (object)
- `useGasless` (boolean)
- `X-End-User-Wallet-Id` (string)
- `Idempotency-Key` (string)

### estimatetransactionfee

**Environment variables**

No environment variables required

**Input schema**

- `operation` (string)
- `note` (string)
- `externalTxId` (string)
- `assetId` (string)
- `source` (object)
- `destination` (object)
- `destinations` (array)
- `amount` (other)
- `treatAsGrossAmount` (boolean)
- `forceSweep` (boolean)
- `feeLevel` (string)
- `fee` (other)
- `priorityFee` (other)
- `failOnLowFee` (boolean)
- `maxFee` (string)
- `gasLimit` (other)
- `gasPrice` (other)
- `networkFee` (other)
- `replaceTxByHash` (string)
- `extraParameters` (object)
- `customerRefId` (string)
- `travelRuleMessage` (object)
- `useGasless` (boolean)
- `Idempotency-Key` (string)

### gettransaction

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)

### gettransactionbyexternalid

**Environment variables**

No environment variables required

**Input schema**

- `externalTxId` (string)

### settransactionconfirmationthreshold

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `numOfConfirmations` (number)
- `Idempotency-Key` (string)

### droptransaction

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `b_txId` (string)
- `feeLevel` (string)
- `gasPrice` (string)
- `X-End-User-Wallet-Id` (string)
- `Idempotency-Key` (string)

### canceltransaction

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `X-End-User-Wallet-Id` (string)
- `Idempotency-Key` (string)

### freezetransaction

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `X-End-User-Wallet-Id` (string)
- `Idempotency-Key` (string)

### unfreezetransaction

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `X-End-User-Wallet-Id` (string)
- `Idempotency-Key` (string)

### validateaddress

**Environment variables**

No environment variables required

**Input schema**

- `assetId` (string)
- `address` (string)

### rescantransactionsbeta

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### setconfirmationthresholdbytransactionhash

**Environment variables**

No environment variables required

**Input schema**

- `txHash` (string)
- `numOfConfirmations` (number)
- `Idempotency-Key` (string)

### estimatenetworkfee

**Environment variables**

No environment variables required

**Input schema**

- `assetId` (string)

### getsupportedassets

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createpayout

**Environment variables**

No environment variables required

**Input schema**

- `paymentAccount` (object)
- `instructionSet` (array)
- `Idempotency-Key` (string)

### executepayoutaction

**Environment variables**

No environment variables required

**Input schema**

- `payoutId` (string)
- `Idempotency-Key` (string)

### getpayout

**Environment variables**

No environment variables required

**Input schema**

- `payoutId` (string)

### createflowconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `configName` (string)
- `preScreening` (object)
- `configOperations` (array)
- `externalCorrelationData` (other)
- `Idempotency-Key` (string)

### getflowconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `configId` (string)

### deleteflowconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `configId` (string)

### createflowexecution

**Environment variables**

No environment variables required

**Input schema**

- `configId` (string)
- `preScreening` (object)
- `params` (array)
- `externalCorrelationData` (other)
- `Idempotency-Key` (string)

### getflowexecution

**Environment variables**

No environment variables required

**Input schema**

- `workflowExecutionId` (string)

### launchflowexecution

**Environment variables**

No environment variables required

**Input schema**

- `workflowExecutionId` (string)
- `Idempotency-Key` (string)

### getgasstationinfo

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getgasstationbyassetid

**Environment variables**

No environment variables required

**Input schema**

- `assetId` (string)

### updategasstationconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `gasThreshold` (string)
- `gasCap` (string)
- `maxGasPrice` (string)
- `Idempotency-Key` (string)

### updategasstationconfigurationbyassetid

**Environment variables**

No environment variables required

**Input schema**

- `assetId` (string)
- `gasThreshold` (string)
- `gasCap` (string)
- `maxGasPrice` (string)
- `Idempotency-Key` (string)

### getusergroups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createusergroup

**Environment variables**

No environment variables required

**Input schema**

- `groupName` (string)
- `memberIds` (array)
- `Idempotency-Key` (string)

### getusergroup

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### updateusergroup

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)
- `groupName` (string)
- `memberIds` (array)
- `Idempotency-Key` (string)

### deleteusergroup

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### getusers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getaudits

**Environment variables**

No environment variables required

**Input schema**

- `timePeriod` (string)

### getauditlogs

**Environment variables**

No environment variables required

**Input schema**

- `timePeriod` (string)
- `cursor` (string)

### addoffexchange

**Environment variables**

No environment variables required

**Input schema**

- `transactionRequest` (object)
- `isSrcCollateral` (boolean)
- `Idempotency-Key` (string)

### removeoffexchange

**Environment variables**

No environment variables required

**Input schema**

- `transactionRequest` (object)
- `isDstCollateral` (boolean)
- `Idempotency-Key` (string)

### settleoffexchangetrades

**Environment variables**

No environment variables required

**Input schema**

- `mainExchangeAccountId` (string)
- `Idempotency-Key` (string)

### getoffexchangesettlementtransactions

**Environment variables**

No environment variables required

**Input schema**

- `mainExchangeAccountId` (string)

### getoffexchangecollateralaccounts

**Environment variables**

No environment variables required

**Input schema**

- `mainExchangeAccountId` (string)

### resendwebhooks

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### resendtransactionwebhooks

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `resendCreated` (boolean)
- `resendStatusUpdated` (boolean)
- `Idempotency-Key` (string)

### createwebhook

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)
- `description` (string)
- `events` (array)
- `enabled` (boolean)
- `Idempotency-Key` (string)

### getwebhooks

**Environment variables**

No environment variables required

**Input schema**

- `order` (string)
- `pageCursor` (string)
- `pageSize` (number)

### getwebhook

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)

### updatewebhook

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)
- `url` (string)
- `description` (string)
- `events` (array)
- `enabled` (boolean)

### deletewebhook

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)

### getnotifications

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)
- `order` (string)
- `pageCursor` (string)
- `pageSize` (number)
- `createdStartDate` (string)
- `createdEndDate` (string)
- `statuses` (array)
- `eventTypes` (array)
- `resourceId` (string)

### resendnotificationbyid

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)
- `notificationId` (string)
- `Idempotency-Key` (string)

### resendnotificationsbyresourceid

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)
- `resourceId` (string)
- `excludeStatuses` (array)
- `Idempotency-Key` (string)

### getnotification

**Environment variables**

No environment variables required

**Input schema**

- `webhookId` (string)
- `notificationId` (string)
- `includeData` (boolean)

### getcontracttemplates

**Environment variables**

No environment variables required

**Input schema**

- `limit` (number)
- `offset` (number)
- `pageCursor` (string)
- `pageSize` (number)
- `type` (string)
- `initializationPhase` (string)

### uploadcontracttemplate

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `description` (string)
- `longDescription` (string)
- `bytecode` (string)
- `sourcecode` (string)
- `type` (string)
- `docs` (string)
- `abi` (array)
- `attributes` (string)
- `Idempotency-Key` (string)

### getcontracttemplatebyid

**Environment variables**

No environment variables required

**Input schema**

- `contractTemplateId` (string)

### deletecontracttemplatebyid

**Environment variables**

No environment variables required

**Input schema**

- `contractTemplateId` (string)

### getconstructorbycontracttemplateid

**Environment variables**

No environment variables required

**Input schema**

- `contractTemplateId` (string)
- `withDocs` (boolean)

### getfunctionabibycontracttemplateid

**Environment variables**

No environment variables required

**Input schema**

- `contractTemplateId` (string)
- `functionSignature` (string)

### deploycontract

**Environment variables**

No environment variables required

**Input schema**

- `contractTemplateId` (string)
- `assetId` (string)
- `vaultAccountId` (string)
- `constructorParameters` (array)
- `Idempotency-Key` (string)

### getdeployedcontracts

**Environment variables**

No environment variables required

**Input schema**

- `pageCursor` (string)
- `pageSize` (number)
- `contractAddress` (string)
- `baseAssetId` (string)
- `contractTemplateId` (string)

### getdeployedcontractbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getdeployedcontractbyaddress

**Environment variables**

No environment variables required

**Input schema**

- `contractAddress` (string)
- `assetId` (string)

### fetchcontractabi

**Environment variables**

No environment variables required

**Input schema**

- `baseAssetId` (string)
- `contractAddress` (string)
- `Idempotency-Key` (string)

### addcontractabi

**Environment variables**

No environment variables required

**Input schema**

- `contractAddress` (string)
- `baseAssetId` (string)
- `abi` (array)
- `name` (string)
- `Idempotency-Key` (string)

### issuenewtoken

**Environment variables**

No environment variables required

**Input schema**

- `blockchainId` (string)
- `assetId` (string)
- `vaultAccountId` (string)
- `createParams` (other)
- `displayName` (string)
- `useGasless` (boolean)
- `fee` (string)
- `feeLevel` (string)
- `Idempotency-Key` (string)

### getlinkedtokens

**Environment variables**

No environment variables required

**Input schema**

- `pageCursor` (string)
- `pageSize` (number)
- `status` (other)

### link

**Environment variables**

No environment variables required

**Input schema**

- `type` (string)
- `refId` (string)
- `displayName` (string)
- `baseAssetId` (string)
- `contractAddress` (string)
- `Idempotency-Key` (string)

### createnewcollection

**Environment variables**

No environment variables required

**Input schema**

- `baseAssetId` (string)
- `vaultAccountId` (string)
- `type` (string)
- `name` (string)
- `symbol` (string)
- `adminAddress` (string)
- `displayName` (string)
- `Idempotency-Key` (string)

### getlinkedcollections

**Environment variables**

No environment variables required

**Input schema**

- `pageCursor` (string)
- `pageSize` (number)
- `status` (other)

### getcollectionbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### unlinkcollection

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### fetchcollectiontokendetails

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `tokenId` (string)

### mintcollectiontoken

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `vaultAccountId` (string)
- `to` (string)
- `tokenId` (string)
- `amount` (string)
- `metadataURI` (string)
- `metadata` (string)
- `Idempotency-Key` (string)

### burncollectiontoken

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `vaultAccountId` (string)
- `tokenId` (string)
- `amount` (string)
- `Idempotency-Key` (string)

### unlink

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getlinkedtoken

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getdeployedcontractabi

**Environment variables**

No environment variables required

**Input schema**

- `contractAddress` (string)
- `baseAssetId` (string)
- `Idempotency-Key` (string)

### readcallfunction

**Environment variables**

No environment variables required

**Input schema**

- `contractAddress` (string)
- `baseAssetId` (string)
- `abiFunction` (object)
- `Idempotency-Key` (string)

### writecallfunction

**Environment variables**

No environment variables required

**Input schema**

- `contractAddress` (string)
- `baseAssetId` (string)
- `vaultAccountId` (string)
- `abiFunction` (object)
- `amount` (string)
- `feeLevel` (string)
- `fee` (string)
- `note` (string)
- `useGasless` (boolean)
- `externalId` (string)
- `Idempotency-Key` (string)

### gettransactionreceipt

**Environment variables**

No environment variables required

**Input schema**

- `baseAssetId` (string)
- `txHash` (string)

### getchains

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getchaininfo

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)

### stake

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)
- `vaultAccountId` (string)
- `providerId` (string)
- `stakeAmount` (string)
- `txNote` (string)
- `fee` (string)
- `feeLevel` (string)
- `Idempotency-Key` (string)

### unstake

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)
- `id` (string)
- `fee` (string)
- `feeLevel` (string)
- `txNote` (string)
- `amount` (string)
- `Idempotency-Key` (string)

### withdraw

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)
- `id` (string)
- `fee` (string)
- `feeLevel` (string)
- `txNote` (string)
- `Idempotency-Key` (string)

### claimrewards

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)
- `id` (string)
- `fee` (string)
- `feeLevel` (string)
- `txNote` (string)
- `Idempotency-Key` (string)

### split

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)
- `id` (string)
- `amount` (string)
- `fee` (string)
- `feeLevel` (string)
- `txNote` (string)
- `Idempotency-Key` (string)

### getalldelegations

**Environment variables**

No environment variables required

**Input schema**

- `chainDescriptor` (string)

### getsummary

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getsummarybyvault

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getdelegationbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getproviders

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### approvetermsofservicebyproviderid

**Environment variables**

No environment variables required

**Input schema**

- `providerId` (string)
- `Idempotency-Key` (string)

### setadminquorumthreshold

**Environment variables**

No environment variables required

**Input schema**

- `adminQuorumThreshold` (number)
- `Idempotency-Key` (string)

### updateownershiptokens

**Environment variables**

No environment variables required

**Input schema**

- `blockchainDescriptor` (string)
- `vaultAccountId` (string)
- `Idempotency-Key` (string)

### getownershiptokens

**Environment variables**

No environment variables required

**Input schema**

- `blockchainDescriptor` (string)
- `vaultAccountIds` (string)
- `ncwId` (string)
- `ncwAccountIds` (string)
- `walletType` (string)
- `ids` (string)
- `collectionIds` (string)
- `pageCursor` (string)
- `pageSize` (number)
- `sort` (array)
- `order` (string)
- `status` (string)
- `search` (string)
- `spam` (string)

### listownedtokens

**Environment variables**

No environment variables required

**Input schema**

- `ncwId` (string)
- `walletType` (string)
- `pageCursor` (string)
- `pageSize` (number)
- `sort` (array)
- `order` (string)
- `status` (string)
- `search` (string)
- `spam` (string)

### listownedcollections

**Environment variables**

No environment variables required

**Input schema**

- `ncwId` (string)
- `walletType` (string)
- `search` (string)
- `pageCursor` (string)
- `pageSize` (number)
- `sort` (array)
- `order` (string)
- `status` (string)

### refreshnftmetadata

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Idempotency-Key` (string)

### getnft

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getnfts

**Environment variables**

No environment variables required

**Input schema**

- `ids` (string)
- `pageCursor` (string)
- `pageSize` (number)
- `sort` (array)
- `order` (string)

### updatetokenownershipstatus

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `status` (string)
- `Idempotency-Key` (string)

### updatetokensownershipstatus

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### updatetokensownershipspam

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### get

**Environment variables**

No environment variables required

**Input schema**

- `order` (string)
- `filter` (object)
- `sort` (string)
- `pageSize` (number)
- `next` (string)

### create

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### submit

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `approve` (boolean)
- `Idempotency-Key` (string)

### remove

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### validatetravelruletransaction

**Environment variables**

No environment variables required

**Input schema**

- `notation` (string)
- `transactionAsset` (string)
- `destination` (string)
- `transactionAmount` (string)
- `originatorVASPdid` (string)
- `originatorEqualsBeneficiary` (boolean)
- `travelRuleBehavior` (boolean)
- `beneficiaryVASPdid` (string)
- `beneficiaryVASPname` (string)
- `beneficiaryName` (string)
- `beneficiaryAccountNumber` (string)
- `beneficiaryAddress` (string)
- `Idempotency-Key` (string)

### validatefulltravelruletransaction

**Environment variables**

No environment variables required

**Input schema**

- `notation` (string)
- `originatorVASPdid` (string)
- `beneficiaryVASPdid` (string)
- `transactionAsset` (string)
- `transactionAmount` (string)
- `originatorVASPname` (string)
- `beneficiaryVASPname` (string)
- `transactionBlockchainInfo` (string)
- `originator` (string)
- `beneficiary` (string)
- `encrypted` (string)
- `protocol` (string)
- `skipBeneficiaryDataValidation` (boolean)
- `travelRuleBehavior` (boolean)
- `originatorRef` (string)
- `beneficiaryRef` (string)
- `travelRuleBehaviorRef` (string)
- `originatorProof` (string)
- `beneficiaryProof` (string)
- `beneficiaryDid` (string)
- `originatorDid` (string)
- `isNonCustodial` (boolean)
- `notificationEmail` (string)
- `pii` (string)
- `pii_url` (string)
- `Idempotency-Key` (string)

### getvaspbydid

**Environment variables**

No environment variables required

**Input schema**

- `did` (string)
- `fields` (string)

### getvasps

**Environment variables**

No environment variables required

**Input schema**

- `order` (string)
- `per_page` (number)
- `page` (number)
- `fields` (string)
- `q` (string)
- `reviewValue` (string)

### updatevasp

**Environment variables**

No environment variables required

**Input schema**

- `did` (string)
- `pii_didkey` (string)
- `Idempotency-Key` (string)

### getpostscreeningpolicy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getscreeningpolicy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getvaspforvault

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)

### setvaspforvault

**Environment variables**

No environment variables required

**Input schema**

- `vaultAccountId` (string)
- `vaspDid` (string)
- `Idempotency-Key` (string)

### getscreeningconfiguration

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatetravelruleconfig

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### getamlscreeningconfiguration

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updateamlscreeningconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `Idempotency-Key` (string)

### getamlscreeningpolicy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getamlpostscreeningpolicy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatescreeningconfiguration

**Environment variables**

No environment variables required

**Input schema**

- `disableBypass` (boolean)
- `disableUnfreeze` (boolean)
- `Idempotency-Key` (string)

### retryrejectedtransactionbypassscreeningchecks

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)
- `Idempotency-Key` (string)

### getscreeningfulldetails

**Environment variables**

No environment variables required

**Input schema**

- `txId` (string)

### setotastatus

**Environment variables**

No environment variables required

**Input schema**

- `enabled` (boolean)
- `Idempotency-Key` (string)

### getotastatus

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getworkspacestatus

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getactivepolicy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getdraft

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatedraft

**Environment variables**

No environment variables required

**Input schema**

- `rules` (array)
- `Idempotency-Key` (string)

### publishdraft

**Environment variables**

No environment variables required

**Input schema**

- `draftId` (string)
- `Idempotency-Key` (string)

### publishpolicyrules

**Environment variables**

No environment variables required

**Input schema**

- `rules` (array)
- `Idempotency-Key` (string)

### getconsoleusers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createconsoleuser

**Environment variables**

No environment variables required

**Input schema**

- `firstName` (string)
- `lastName` (string)
- `role` (string)
- `email` (string)
- `Idempotency-Key` (string)

### getapiusers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createapiuser

**Environment variables**

No environment variables required

**Input schema**

- `role` (string)
- `name` (string)
- `csrPem` (string)
- `coSignerSetupType` (string)
- `coSignerSetupIsFirstUser` (boolean)
- `Idempotency-Key` (string)

### resetdevice

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `Idempotency-Key` (string)

### getwhitelistipaddresses

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### createticket

**Environment variables**

No environment variables required

**Input schema**

- `createdByNetworkId` (string)
- `type` (string)
- `expiresIn` (number)
- `terms` (array)
- `externalRefId` (string)
- `note` (string)
- `submit` (boolean)
- `Idempotency-Key` (string)

### searchtickets

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `statuses` (array)
- `networkId` (string)
- `createdByMe` (boolean)
- `expiresAfter` (string)
- `expiresBefore` (string)
- `type` (string)
- `externalRefId` (string)
- `after` (string)
- `limit` (number)

### findticketbyid

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)

### setticketexpiration

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `expiresIn` (number)
- `Idempotency-Key` (string)

### setexternalrefid

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `externalRefId` (string)
- `Idempotency-Key` (string)

### submitticket

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `expiresIn` (number)
- `Idempotency-Key` (string)

### fulfillticket

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `Idempotency-Key` (string)

### funddvpticket

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `fee` (string)
- `feeLevel` (string)
- `note` (string)
- `Idempotency-Key` (string)

### cancelticket

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `Idempotency-Key` (string)

### createticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `asset` (string)
- `amount` (number)
- `fromNetworkId` (string)
- `toNetworkId` (string)
- `Idempotency-Key` (string)

### findtickettermbyid

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)

### updateticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)
- `asset` (string)
- `amount` (number)
- `fromNetworkId` (string)
- `toNetworkId` (string)
- `Idempotency-Key` (string)

### removeticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)

### fundticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)
- `asset` (string)
- `amount` (string)
- `networkConnectionId` (string)
- `srcId` (string)
- `srcType` (string)
- `fee` (string)
- `feeLevel` (string)
- `note` (string)
- `Idempotency-Key` (string)

### approvedvpticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)
- `asset` (string)
- `amount` (string)
- `srcId` (string)
- `fee` (string)
- `feeLevel` (string)
- `note` (string)
- `Idempotency-Key` (string)

### manuallyfundticketterm

**Environment variables**

No environment variables required

**Input schema**

- `ticketId` (string)
- `termId` (string)
- `txHash` (string)
- `Idempotency-Key` (string)

### setusergroups

**Environment variables**

No environment variables required

**Input schema**

- `userGroupIds` (array)
- `Idempotency-Key` (string)

### getsmarttransferusergroups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getsmarttransferstatistic

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getjobs

**Environment variables**

No environment variables required

**Input schema**

- `fromTime` (integer)
- `toTime` (integer)

### getjob

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)

### pausejob

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)
- `Idempotency-Key` (string)

### continuejob

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)
- `Idempotency-Key` (string)

### canceljob

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)
- `Idempotency-Key` (string)

### getjobtasks

**Environment variables**

No environment variables required

**Input schema**

- `jobId` (string)

### getcosigners

**Environment variables**

No environment variables required

**Input schema**

- `order` (string)
- `pageCursor` (string)
- `pageSize` (number)

### addcosigner

**Environment variables**

No environment variables required

**Input schema**

- `apiKeyId` (string)
- `name` (string)
- `existingCosigner` (boolean)
- `Idempotency-Key` (string)

### getcosigner

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)

### renamecosigner

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `name` (string)

### getapikeys

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `order` (string)
- `pageCursor` (string)
- `pageSize` (number)

### getapikey

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `apiKeyId` (string)

### pairapikey

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `apiKeyId` (string)
- `callbackHandler` (object)
- `Idempotency-Key` (string)

### unpairapikey

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `apiKeyId` (string)

### updatecallbackhandler

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `apiKeyId` (string)
- `callbackHandler` (object)

### getrequeststatus

**Environment variables**

No environment variables required

**Input schema**

- `cosignerId` (string)
- `apiKeyId` (string)
- `requestId` (string)
