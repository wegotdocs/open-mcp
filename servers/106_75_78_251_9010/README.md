# @open-mcp/106_75_78_251_9010

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "106_75_78_251_9010": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/106_75_78_251_9010@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/106_75_78_251_9010@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
X_TENANT_ID='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add 106_75_78_251_9010 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_TENANT_ID=$X_TENANT_ID
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add 106_75_78_251_9010 \
  .cursor/mcp.json \
  --X_TENANT_ID=$X_TENANT_ID
```

### Other

```bash
npx @open-mcp/config add 106_75_78_251_9010 \
  /path/to/client/config.json \
  --X_TENANT_ID=$X_TENANT_ID
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "106_75_78_251_9010": {
      "command": "npx",
      "args": ["-y", "@open-mcp/106_75_78_251_9010"],
      "env": {"X_TENANT_ID":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `X_TENANT_ID` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### uploadtemplatebatch

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `templateFile` (array)

### testtemplate

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `apiType` (string)
- `body` (string)

### removetemplate

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `templateName` (string)

### downloadtemplate

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `templateName` (string)

### receivestocktakeorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `stocktakeTaskIds` (array)
- `workStationId` (integer)

### executestocktakeorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `orderNos` (array)
- `taskCount` (integer)

### createstocktakeorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `stocktakeType` (string)
- `stocktakeMethod` (string)
- `stocktakeCreateMethod` (string)
- `stocktakeUnitType` (string)
- `includeZeroStock` (boolean)
- `includeEmptySlot` (boolean)
- `shelfCodes` (array)
- `shelfCodeFacePairs` (array)
- `containerCodes` (array)
- `skuIds` (array)
- `stockIds` (array)
- `warehouseAreaId` (integer)
- `warehouseLogicId` (integer)
- `workStationId` (integer)

### cancelstocktakeorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `orderNos` (array)

### unfreezecontainerstock

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `qty` (integer)

### freezecontainerstock

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `qty` (integer)

### close

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### adjust

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### manualclose

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### createrecheckorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### createadjustmentorder

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### execute

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### create

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `containerSpecCode` (string)
- `warehouseAreaId` (integer)
- `emptySlotNum` (integer)
- `warehouseLogicCode` (string)
- `planCount` (integer)
- `workStationId` (integer)
- `containerStatus` (string)
- `emptyContainer` (boolean)
- `locked` (boolean)
- `perPage` (integer)

### cancel

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### querybylpncodeorcustomerorderno

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `identifyNo` (string)
- `warehouseCode` (string)

### forcecompleteaccept

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `inboundPlanOrderId` (integer)

### close_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### accept

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `inboundPlanOrderId` (integer)
- `inboundPlanOrderDetailId` (integer)
- `warehouseCode` (string)
- `batchAttributes` (object)
- `qtyAccepted` (integer)
- `skuId` (integer)
- `qtyAbnormal` (integer)
- `targetContainerId` (integer)
- `targetContainerCode` (string)
- `targetContainerSpecCode` (string)
- `targetContainerSlotCode` (string)
- `targetContainerFace` (string)
- `workStationId` (integer)

### create_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `containerSpecCode` (string)
- `containerCode` (string)
- `locationCode` (string)

### completebyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `acceptOrderId` (integer)

### completebycontainer

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `containerCode` (string)

### cancel_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `acceptOrderId` (integer)
- `acceptOrderDetailId` (integer)

### createorupdate

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `locationCode` (string)
- `locationType` (object)
- `warehouseAreaId` (integer)
- `warehouseCode` (string)

### sendevent

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### resendevent

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `domainEventId` (integer)

### getrulebyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `ruleCode` (string)
- `ruleName` (string)
- `ruleType` (string)
- `splitCondition` (object)
- `queryConditions` (array)
- `sortConditions` (array)
- `enable` (boolean)

### getbyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `ruleCode` (string)
- `ruleName` (string)
- `ruleType` (string)
- `enable` (boolean)
- `details` (array)

### getsystemconfig

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### createorupdate_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `basicConfig` (object)
- `emsConfig` (object)
- `inboundConfig` (object)
- `outboundConfig` (object)
- `outboundAlgoConfig` (object)
- `stockConfig` (object)
- `version` (integer)

### getputawayflowrulebyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `code` (string)
- `name` (string)
- `priority` (integer)
- `enabled` (boolean)
- `warehouseCodes` (array)
- `ownerCodes` (array)
- `customerOrderTypes` (array)
- `productCriterion` (object)
- `batchAttributes` (object)
- `putAwayDirection` (object)

### getbypath

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `pathname` (string)

### refresh

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### getall

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### getbyid_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_5

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `createTime` (integer)
- `createUser` (string)
- `updateUser` (string)
- `updateTime` (integer)
- `id` (integer)
- `code` (string)
- `editable` (boolean)
- `name` (string)
- `description` (string)
- `items` (array)
- `version` (integer)

### getbyid_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_6

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `code` (string)
- `name` (string)
- `ownerCode` (string)
- `skuFirstCategory` (string)
- `enable` (boolean)
- `version` (integer)
- `batchAttributeFieldConfigs` (array)

### parse

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `barcode` (string)
- `ownerCode` (string)
- `knownSkus` (array)
- `businessFlow` (string)
- `executeTime` (string)

### getbyid_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_7

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `code` (string)
- `name` (string)
- `executeTime` (string)
- `businessFlow` (string)
- `ownerCode` (string)
- `brand` (string)
- `enable` (boolean)
- `unionLocation` (string)
- `unionStr` (string)
- `regularExpression` (string)
- `resultFields` (array)
- `version` (integer)

### getnextaddresses

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `country` (string)
- `province` (string)
- `city` (string)
- `district` (string)
- `address` (string)

### executecallback

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### get

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdateworkstation

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `stationCode` (string)
- `stationName` (string)
- `workStationStatus` (string)
- `warehouseCode` (string)
- `warehouseAreaId` (integer)
- `enable` (boolean)
- `workStationMode` (string)
- `allowWorkStationModes` (array)
- `workLocations` (array)
- `putWalls` (array)
- `workStationConfig` (object)
- `position` (object)
- `version` (integer)

### createorupdatestationconfig

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `configId` (integer)
- `workStationId` (integer)
- `inboundStationConfig` (object)
- `pickingStationConfig` (object)
- `stocktakeStationConfig` (object)
- `relocationStationConfig` (object)
- `version` (integer)

### getstationconfig

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `workStationId` (integer)

### getbyid_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_8

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `warehouseName` (string)
- `warehouseType` (string)
- `warehouseAttrType` (string)
- `warehouseLevel` (string)
- `warehouseLabel` (string)
- `businessType` (string)
- `structureType` (string)
- `area` (integer)
- `height` (integer)
- `virtualWarehouse` (boolean)
- `contactorDTO` (object)
- `addressDTO` (object)
- `version` (integer)

### get_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)

### createorupdate_9

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `workStationId` (integer)
- `enablePutAwayRule` (boolean)
- `enableSkuWeighing` (boolean)
- `allowPutAwayOutside` (boolean)
- `disableReceiving` (boolean)
- `warehouseCode` (string)
- `version` (integer)

### enable

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### disable

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_10

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseLogicCode` (string)
- `warehouseAreaId` (string)
- `warehouseLogicName` (string)
- `warehouseCode` (string)
- `remark` (string)
- `deleted` (boolean)
- `deleteTime` (integer)
- `enable` (boolean)
- `version` (integer)

### enable_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### disable_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_11

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseAreaGroupCode` (string)
- `warehouseAreaGroupName` (string)
- `remark` (string)
- `warehouseCode` (string)
- `deleted` (boolean)
- `enable` (boolean)
- `version` (integer)

### enable_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### disable_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_12

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseAreaCode` (string)
- `warehouseCode` (string)
- `warehouseAreaName` (string)
- `warehouseGroupCode` (string)
- `warehouseAreaType` (string)
- `warehouseAreaWorkType` (string)
- `warehouseAreaUse` (string)
- `level` (integer)
- `temperatureLimit` (integer)
- `wetLimit` (integer)
- `deleted` (boolean)
- `enable` (boolean)
- `remark` (string)
- `version` (integer)

### release

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getbyid_5

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_13

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `skuCode` (string)
- `warehouseCode` (string)
- `ownerCode` (string)
- `skuName` (string)
- `style` (string)
- `color` (string)
- `size` (string)
- `brand` (string)
- `weight` (object)
- `volumeDTO` (object)
- `skuAttribute` (object)
- `skuConfig` (object)
- `skuPackage` (object)
- `skuBarcode` (object)
- `skuFirstCategory` (string)

### get_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_14

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `workStationId` (integer)
- `putWallCode` (string)
- `putWallName` (string)
- `containerSpecCode` (string)
- `putWallSlots` (array)
- `location` (string)
- `enable` (boolean)
- `displayOrder` (string)
- `version` (integer)
- `putWallStatus` (string)
- `active` (boolean)
- `taskDispatchRuleId` (integer)

### getbyid_6

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_15

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `ownerCode` (string)
- `ownerName` (string)
- `ownerType` (string)
- `contactorDTO` (object)
- `addressDTO` (object)
- `version` (integer)

### update

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `locationIds` (array)
- `warehouseLogicId` (integer)
- `heat` (string)
- `locationStatus` (string)

### updateaislelocation

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `warehouseAreaId` (integer)
- `locationType` (string)
- `locationDescList` (array)

### getbyaisle

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseAreaId` (integer)
- `aisleCode` (string)

### delete_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### create_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `warehouseAreaId` (integer)
- `locationType` (string)
- `locationDescList` (array)

### get_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `containerSpecCode` (string)
- `warehouseCode` (string)

### getbyid_7

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete_5

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### createorupdate_16

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `warehouseCode` (string)
- `containerSpecCode` (string)
- `containerSpecName` (string)
- `length` (integer)
- `width` (integer)
- `height` (integer)
- `volume` (integer)
- `location` (string)
- `description` (string)
- `containerType` (string)
- `containerSlotSpecs` (array)
- `version` (integer)
- `containerSlotNum` (integer)

### get_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `containerCode` (string)
- `warehouseCode` (string)

### create_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `warehouseCode` (string)
- `containerType` (string)
- `containerSpecCode` (string)
- `containerCodePrefix` (string)
- `startIndex` (integer)
- `indexNumber` (integer)
- `createNumber` (integer)
- `endIndex` (integer)

### changecontainerspec

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `containerId` (integer)
- `containerSpecCode` (string)

### update_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `roleIds` (array)
- `name` (string)
- `account` (string)
- `status` (integer)
- `phone` (string)
- `email` (string)

### updatestatus

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `userId` (integer)
- `status` (integer)

### resetpassword

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### add

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `roleIds` (array)
- `name` (string)
- `account` (string)
- `status` (integer)
- `phone` (string)
- `email` (string)

### containerarrive

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### create_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### update_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `name` (string)
- `code` (string)
- `status` (integer)
- `description` (string)
- `warehouseCodes` (array)

### updaterolemenu

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `menus` (string)
- `roleId` (integer)

### add_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `name` (string)
- `code` (string)
- `status` (integer)
- `description` (string)
- `warehouseCodes` (array)

### sealcallback

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### pickedcallback

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### create_5

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### cancel_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### update_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `systemCode` (string)
- `parentId` (integer)
- `type` (integer)
- `title` (string)
- `description` (string)
- `permissions` (string)
- `component` (string)
- `orderNum` (integer)
- `icon` (string)
- `path` (string)
- `iframeShow` (integer)
- `menuId` (integer)

### updatestatus_1

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `menuId` (integer)
- `enable` (integer)

### add_2

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `systemCode` (string)
- `parentId` (integer)
- `type` (integer)
- `title` (string)
- `description` (string)
- `permissions` (string)
- `component` (string)
- `orderNum` (integer)
- `icon` (string)
- `path` (string)
- `iframeShow` (integer)

### addlist

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### create_6

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### cancel_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `identifyNos` (array)
- `warehouseCode` (string)

### puttedawaycallback

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### executerequest

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `apiType` (string)

### containertaskstatusupdate

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### updateuserinfo

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `name` (string)
- `phone` (string)
- `email` (string)

### searchmenutree

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `pageIndex` (integer)
- `pageSize` (integer)

### updatepassword

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `oldPassword` (string)
- `newPassword` (string)
- `confirmNewPassword` (string)

### feedback

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `rating` (string)
- `comment` (string)
- `contact` (string)

### gettoken

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `grantType` (string)
- `username` (string)
- `password` (string)

### authenticateuser

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `account` (string)
- `password` (string)

### update_4

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `code` (string)
- `name` (string)
- `title` (string)
- `apiType` (string)
- `url` (string)
- `method` (string)
- `encoding` (string)
- `headers` (object)
- `format` (string)
- `auth` (boolean)
- `authUrl` (string)
- `grantType` (string)
- `username` (string)
- `password` (string)
- `secretId` (string)
- `secretKey` (string)
- `tokenName` (string)
- `enabled` (boolean)
- `syncCallback` (boolean)

### add_3

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `code` (string)
- `name` (string)
- `title` (string)
- `apiType` (string)
- `url` (string)
- `method` (string)
- `encoding` (string)
- `headers` (object)
- `format` (string)
- `auth` (boolean)
- `authUrl` (string)
- `grantType` (string)
- `username` (string)
- `password` (string)
- `secretId` (string)
- `secretKey` (string)
- `tokenName` (string)
- `enabled` (boolean)
- `syncCallback` (boolean)

### getapikeybyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### deleteapikey

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getallapikeys

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### createapikey

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `createTime` (integer)
- `createUser` (string)
- `updateUser` (string)
- `updateTime` (integer)
- `id` (integer)
- `apiKeyName` (string)
- `apiKey` (string)

### update_5

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
- `code` (string)
- `paramConverterType` (string)
- `jsParamConverter` (string)
- `templateParamConverter` (string)
- `responseConverterType` (string)
- `jsResponseConverter` (string)
- `templateResponseConverter` (string)

### getuserbyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### deleteuser

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getrole

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### delete_6

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getrolemenu

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getauth

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### logoutuser

**Environment variables**

- `X_TENANT_ID`

**Input schema**

No input parameters

### detail

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### getconfigbycode

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `code` (string)

### delete_7

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)

### deleteapibyid

**Environment variables**

- `X_TENANT_ID`

**Input schema**

- `id` (integer)
