# @open-mcp/api_boomi_com_api_rest_v1_accountid_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_boomi_com_api_rest_v1_accountid_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_boomi_com_api_rest_v1_accountid_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_boomi_com_api_rest_v1_accountid_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_boomi_com_api_rest_v1_accountid_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_boomi_com_api_rest_v1_accountid_ \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add api_boomi_com_api_rest_v1_accountid_ \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_boomi_com_api_rest_v1_accountid_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_boomi_com_api_rest_v1_accountid_"],
      "env": {"USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### queryas2connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreas2connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### updateaccountcloudattachmentproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `accountDiskUsage` (integer)
- `as2Workload` (string)
- `atomInputSize` (integer)
- `atomOutputOverflowSize` (integer)
- `atomWorkingOverflowSize` (integer)
- `cloudAccountExecutionLimit` (integer)
- `cloudAccountExecutionWarningOffset` (integer)
- `containerId` (string)
- `downloadRunnerlogs` (boolean)
- `enableAccountDataArchiving` (boolean)
- `enableAtomWorkerWarmup` (boolean)
- `flowControlParallelProcessTypeOverride` (string)
- `httpRequestRate` (integer)
- `httpWorkload` (string)
- `listenerMaxConcurrentExecutions` (integer)
- `maxConnectorTrackDocs` (integer)
- `minNumberofAtomWorkers` (integer)
- `numberofAtomWorkers` (integer)
- `queueIncomingMessageRateLimit` (integer)
- `sessionId` (string)
- `statusCode` (integer)
- `testModeMaxDocBytes` (integer)
- `testModeMaxDocs` (integer)
- `workerElasticScalingThreshold` (integer)
- `workerMaxExecutionTime` (integer)
- `workerMaxGeneralExecutionTime` (integer)
- `workerMaxQueuedExecutions` (integer)
- `workerMaxRunningExecutions` (integer)
- `workerQueuedExecutionTimeout` (integer)

### createaccountcloudattachmentquota

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `cloudId` (string)
- `id` (string)
- `maxAtomAttachment` (integer)

### getaccountcloudattachmentquota

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateaccountcloudattachmentquota

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `accountId` (string)
- `cloudId` (string)
- `b_id` (string)
- `maxAtomAttachment` (integer)

### deleteaccountcloudattachmentquota

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkaccountcloudattachmentquota

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `Resources` (object)
- `accountId` (string)
- `autoSubscribeAlertLevel` (string)
- `defaultGroup` (boolean)
- `id` (string)
- `name` (string)

### getaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Resources` (object)
- `accountId` (string)
- `autoSubscribeAlertLevel` (string)
- `defaultGroup` (boolean)
- `b_id` (string)
- `name` (string)

### bulkaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createaccountgroupaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountGroupId` (string)
- `accountId` (string)
- `id` (string)

### queryaccountgroupaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountgroupaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteaccountgroupaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createaccountgroupuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountGroupId` (string)
- `firstName` (string)
- `id` (string)
- `lastName` (string)
- `notifyUser` (boolean)
- `roleId` (string)
- `userId` (string)

### queryaccountgroupuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountgroupuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteaccountgroupuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getaccountssoconfig

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateaccountssoconfig

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `accountId` (string)
- `assertionEncryption` (boolean)
- `authnContext` (string)
- `authnContextComparison` (string)
- `certInfo` (string)
- `certificate` (array)
- `enabled` (boolean)
- `fedIdFromNameId` (boolean)
- `idpUrl` (string)
- `nameIdPolicy` (string)
- `signoutRedirectUrl` (string)

### deleteaccountssoconfig

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkaccountssoconfig

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createaccountuserfederation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `federationId` (string)
- `id` (string)
- `userId` (string)

### queryaccountuserfederation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountuserfederation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### updateaccountuserfederation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `accountId` (string)
- `federationId` (string)
- `b_id` (string)
- `userId` (string)

### deleteaccountuserfederation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createaccountuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `firstName` (string)
- `id` (string)
- `lastName` (string)
- `notifyUser` (boolean)
- `roleId` (string)
- `userId` (string)

### queryaccountuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteaccountuserrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### queryapiusagecount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreapiusagecount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `capabilities` (array)
- `cloudId` (string)
- `cloudMoleculeId` (string)
- `cloudMoleculeName` (string)
- `cloudName` (string)
- `cloudOwnerName` (string)
- `cluster` (object)
- `createdBy` (string)
- `currentVersion` (string)
- `dateInstalled` (string)
- `forceRestartTime` (integer)
- `hostName` (string)
- `id` (string)
- `instanceId` (string)
- `isCloudAttachment` (boolean)
- `name` (string)
- `purgeHistoryDays` (integer)
- `purgeImmediate` (boolean)
- `status` (string)
- `type` (string)
- `statusDetail` (string)

### getatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `capabilities` (array)
- `cloudId` (string)
- `cloudMoleculeId` (string)
- `cloudMoleculeName` (string)
- `cloudName` (string)
- `cloudOwnerName` (string)
- `cluster` (object)
- `createdBy` (string)
- `currentVersion` (string)
- `dateInstalled` (string)
- `forceRestartTime` (integer)
- `hostName` (string)
- `b_id` (string)
- `instanceId` (string)
- `isCloudAttachment` (boolean)
- `name` (string)
- `purgeHistoryDays` (integer)
- `purgeImmediate` (boolean)
- `status` (string)
- `type` (string)
- `statusDetail` (string)

### deleteatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreatom

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createatomas2artifacts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `logDate` (string)

### queryatomconnectionfieldextensionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreatomconnectionfieldextensionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getatomconnectorversions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkatomconnectorversions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### updateatomcounters

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)
- `counter` (array)

### createatomlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `includeBin` (boolean)
- `logDate` (string)

### updateatompurge

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)

### updateatomsecuritypolicies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)
- `browser` (object)
- `common` (object)
- `runner` (object)
- `worker` (object)

### getatomstartupproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkatomstartupproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createatomworkerlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workerId` (string)

### getauditlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkauditlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryauditlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreauditlog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createbranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `createdBy` (string)
- `createdDate` (string)
- `deleted` (boolean)
- `deploymentId` (string)
- `description` (string)
- `id` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)
- `packageId` (string)
- `parentId` (string)
- `ready` (boolean)
- `stage` (string)

### getbranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatebranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `createdBy` (string)
- `createdDate` (string)
- `deleted` (boolean)
- `deploymentId` (string)
- `description` (string)
- `b_id` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)
- `packageId` (string)
- `parentId` (string)
- `ready` (boolean)
- `stage` (string)

### deletebranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkbranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querybranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorebranch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### post_changelistenerstatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `action` (string)
- `containerId` (string)
- `listenerId` (string)

### executeclearqueue

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `AtomId` (string)
- `DLQ` (boolean)
- `QueueName` (string)
- `SubscriberName` (string)

### getcloud

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkcloud

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querycloud

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecloud

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)

### updatecomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)

### bulkcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createcomponentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `componentId` (string)
- `componentType` (string)
- `id` (string)

### querycomponentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecomponentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletecomponentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createcomponentdiffrequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `CompDiffConfig` (object)
- `componentId` (string)
- `sourceVersion` (integer)
- `targetVersion` (integer)

### getcomponentdiffrequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)

### bulkcomponentdiffrequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createcomponentenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)
- `componentType` (string)
- `environmentId` (string)
- `id` (string)

### querycomponentenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecomponentenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletecomponentenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createcomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `branchId` (string)
- `branchName` (string)
- `componentId` (string)
- `copiedFromComponentId` (string)
- `copiedFromComponentVersion` (integer)
- `createdBy` (string)
- `createdDate` (string)
- `currentVersion` (boolean)
- `deleted` (boolean)
- `folderId` (string)
- `folderName` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)
- `subType` (string)
- `type` (string)
- `version` (integer)

### getcomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatecomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `branchId` (string)
- `branchName` (string)
- `componentId` (string)
- `copiedFromComponentId` (string)
- `copiedFromComponentVersion` (integer)
- `createdBy` (string)
- `createdDate` (string)
- `currentVersion` (boolean)
- `deleted` (boolean)
- `folderId` (string)
- `folderName` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)
- `subType` (string)
- `type` (string)
- `version` (integer)

### deletecomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkcomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querycomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecomponentmetadata

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcomponentreference

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)

### bulkcomponentreference

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querycomponentreference

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecomponentreference

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createconnectionlicensingreport

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### getconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `connectorType` (string)

### bulkconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createconnectordocument

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `genericConnectorRecordId` (string)

### querycustomtrackedfield

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorecustomtrackedfield

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### querydeployedexpiredcertificate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoredeployedexpiredcertificate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createdeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `branchName` (string)
- `componentId` (string)
- `componentType` (string)
- `componentVersion` (integer)
- `deployedBy` (string)
- `deployedDate` (string)
- `deploymentId` (string)
- `environmentId` (string)
- `listenerStatus` (string)
- `message` (string)
- `notes` (string)
- `packageId` (string)
- `packageVersion` (string)
- `version` (integer)

### getdeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deletedeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkdeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querydeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoredeployedpackage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createdeployment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentId` (string)
- `componentType` (string)
- `current` (boolean)
- `deployedBy` (string)
- `deployedOn` (string)
- `digest` (string)
- `environmentId` (string)
- `id` (string)
- `listenerStatus` (string)
- `message` (string)
- `notes` (string)
- `processId` (string)
- `version` (integer)

### getdeployment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkdeployment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querydeployment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoredeployment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### querydocumentcountaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoredocumentcountaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### querydocumentcountaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoredocumentcountaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryedifactconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreedifactconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryedicustomconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreedicustomconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `classification` (string)
- `id` (string)
- `name` (string)
- `parentAccount` (string)
- `parentEnvironment` (string)

### getenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `classification` (string)
- `b_id` (string)
- `name` (string)
- `parentAccount` (string)
- `parentEnvironment` (string)

### deleteenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createenvironmentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `environmentId` (string)
- `id` (string)

### queryenvironmentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteenvironmentatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### queryenvironmentconnectionfieldextensionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentconnectionfieldextensionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getenvironmentextensions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateenvironmentextensions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `PGPCertificates` (object)
- `connections` (object)
- `crossReferences` (object)
- `environmentId` (string)
- `extensionGroupId` (string)
- `b_id` (string)
- `operations` (object)
- `partial` (boolean)
- `processProperties` (object)
- `properties` (object)
- `sharedCommunications` (object)
- `tradingPartners` (object)

### bulkenvironmentextensions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryenvironmentextensions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentextensions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getenvironmentmapextension

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateenvironmentmapextension

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Map` (object)
- `environmentId` (string)
- `extensionGroupId` (string)
- `b_id` (string)
- `mapId` (string)
- `name` (string)
- `processId` (string)

### bulkenvironmentmapextension

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### executeenvironmentmapextension

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Map` (object)
- `environmentId` (string)
- `extensionGroupId` (string)
- `b_id` (string)
- `mapId` (string)
- `name` (string)
- `processId` (string)

### queryenvironmentmapextensionexternalcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentmapextensionexternalcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createenvironmentmapextensionuserdefinedfunction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `Inputs` (object)
- `Mappings` (object)
- `Outputs` (object)
- `Steps` (object)
- `createdBy` (string)
- `createdDate` (string)
- `deleted` (boolean)
- `description` (string)
- `environmentMapExtensionId` (string)
- `id` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)

### getenvironmentmapextensionuserdefinedfunction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateenvironmentmapextensionuserdefinedfunction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Inputs` (object)
- `Mappings` (object)
- `Outputs` (object)
- `Steps` (object)
- `createdBy` (string)
- `createdDate` (string)
- `deleted` (boolean)
- `description` (string)
- `environmentMapExtensionId` (string)
- `b_id` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `name` (string)

### deleteenvironmentmapextensionuserdefinedfunction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkenvironmentmapextensionuserdefinedfunction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryenvironmentmapextensionuserdefinedfunctionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentmapextensionuserdefinedfunctionsummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryenvironmentmapextensionssummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentmapextensionssummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `environmentId` (string)
- `id` (string)
- `roleId` (string)

### getenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deleteenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreenvironmentrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryevent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreevent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createexecutionartifacts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `executionId` (string)

### queryexecutionconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreexecutionconnector

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryexecutioncountaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreexecutioncountaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryexecutioncountaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreexecutioncountaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryexecutionrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)
- `QuerySort` (object)

### querymoreexecutionrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createexecutionrequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `DynamicProcessProperties` (object)
- `ProcessProperties` (object)
- `atomId` (string)
- `processId` (string)
- `processName` (string)
- `recordUrl` (string)
- `requestId` (string)

### queryexecutionsummaryrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreexecutionsummaryrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createfolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `PermittedRoles` (object)
- `deleted` (boolean)
- `fullPath` (string)
- `id` (string)
- `name` (string)
- `parentId` (string)
- `parentName` (string)

### getfolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatefolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `PermittedRoles` (object)
- `deleted` (boolean)
- `fullPath` (string)
- `b_id` (string)
- `name` (string)
- `parentId` (string)
- `parentName` (string)

### deletefolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkfolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryfolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorefolder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getgenericconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkgenericconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querygenericconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoregenericconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_getassignableroles

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryhl7connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorehl7connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createinstallertoken

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `cloudId` (string)
- `created` (string)
- `durationMinutes` (integer)
- `expiration` (string)
- `installType` (string)
- `token` (string)

### getintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createintegrationpackatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `id` (string)
- `integrationPackInstanceId` (string)

### queryintegrationpackatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreintegrationpackatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteintegrationpackatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createintegrationpackenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `environmentId` (string)
- `id` (string)
- `integrationPackInstanceId` (string)

### queryintegrationpackenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreintegrationpackenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteintegrationpackenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ProcessId` (array)
- `id` (string)
- `integrationPackId` (string)
- `integrationPackOverrideName` (string)

### getintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deleteintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreintegrationpackinstance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### executejavarollback

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)

### createjavaupgrade

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `JavaUpgradeOptions` (object)
- `atomId` (string)

### createmergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `MergeRequestDetails` (object)
- `createdBy` (string)
- `createdDate` (string)
- `destinationBranchId` (string)
- `destinationBranchName` (string)
- `id` (string)
- `inactiveDate` (string)
- `lockNonce` (integer)
- `lockedBy` (string)
- `lockedDate` (string)
- `mergeRequestAction` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `note` (string)
- `previousStage` (string)
- `priorityBranch` (string)
- `sourceBranchId` (string)
- `sourceBranchName` (string)
- `stage` (string)
- `strategy` (string)

### getmergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatemergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `MergeRequestDetails` (object)
- `createdBy` (string)
- `createdDate` (string)
- `destinationBranchId` (string)
- `destinationBranchName` (string)
- `b_id` (string)
- `inactiveDate` (string)
- `lockNonce` (integer)
- `lockedBy` (string)
- `lockedDate` (string)
- `mergeRequestAction` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `note` (string)
- `previousStage` (string)
- `priorityBranch` (string)
- `sourceBranchId` (string)
- `sourceBranchName` (string)
- `stage` (string)
- `strategy` (string)

### deletemergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkmergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### executemergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `MergeRequestDetails` (object)
- `createdBy` (string)
- `createdDate` (string)
- `destinationBranchId` (string)
- `destinationBranchName` (string)
- `b_id` (string)
- `inactiveDate` (string)
- `lockNonce` (integer)
- `lockedBy` (string)
- `lockedDate` (string)
- `mergeRequestAction` (string)
- `modifiedBy` (string)
- `modifiedDate` (string)
- `note` (string)
- `previousStage` (string)
- `priorityBranch` (string)
- `sourceBranchId` (string)
- `sourceBranchName` (string)
- `stage` (string)
- `strategy` (string)

### querymergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoremergerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createmovequeuerequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `AtomId` (string)
- `DestinationQueue` (object)
- `SourceQueue` (object)

### createnodeoffboard

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `nodeId` (array)

### queryodetteconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreodetteconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryoftp2connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreoftp2connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createpackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `branchName` (string)
- `componentId` (string)
- `componentType` (string)
- `componentVersion` (integer)
- `createdBy` (string)
- `createdDate` (string)
- `deleted` (boolean)
- `fullyPubliclyConsumable` (boolean)
- `notes` (string)
- `packageId` (string)
- `packageVersion` (string)
- `shareable` (boolean)

### getpackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deletepackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkpackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querypackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorepackagedcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpackagedcomponentmanifest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `packageId` (string)

### bulkpackagedcomponentmanifest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### updatepersistedprocessproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Process` (array)
- `atomId` (string)

### getprocess

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkprocess

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryprocess

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreprocess

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createprocessatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `componentType` (string)
- `id` (string)
- `processId` (string)

### queryprocessatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreprocessatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteprocessatomattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createprocessenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `componentType` (string)
- `environmentId` (string)
- `id` (string)
- `processId` (string)

### queryprocessenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreprocessenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteprocessenvironmentattachment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createprocesslog

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `executionId` (string)
- `logLevel` (string)

### getprocessschedulestatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateprocessschedulestatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)
- `enabled` (boolean)
- `b_id` (string)
- `processId` (string)

### bulkprocessschedulestatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryprocessschedulestatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreprocessschedulestatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getprocessschedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateprocessschedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Retry` (object)
- `Schedule` (array)
- `atomId` (string)
- `b_id` (string)
- `processId` (string)

### bulkprocessschedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryprocessschedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreprocessschedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### creatererundocument

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `AllDocuments` (object)
- `SelectedDocuments` (object)
- `originalExecutionId` (string)
- `recordUrl` (string)
- `requestId` (string)

### createrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `Description` (string)
- `Privileges` (object)
- `accountId` (string)
- `id` (string)
- `name` (string)
- `parentId` (string)

### getrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updaterole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Description` (string)
- `Privileges` (object)
- `accountId` (string)
- `b_id` (string)
- `name` (string)
- `parentId` (string)

### deleterole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorerole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryrosettanetconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorerosettanetconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createruntimereleaseschedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `atomId` (string)
- `dayOfWeek` (string)
- `hourOfDay` (integer)
- `scheduleType` (string)
- `timeZone` (string)

### getruntimereleaseschedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateruntimereleaseschedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)
- `dayOfWeek` (string)
- `hourOfDay` (integer)
- `scheduleType` (string)
- `timeZone` (string)

### deleteruntimereleaseschedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkruntimereleaseschedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### get_cancelexecution

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_executeprocess

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_worker

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_sharedwebserverlog

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_accountprovision

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getsharedserverinformation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatesharedserverinformation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `apiType` (string)
- `atomId` (string)
- `auth` (string)
- `authToken` (string)
- `checkForwardedHeaders` (boolean)
- `externalHost` (string)
- `externalHttpPort` (integer)
- `externalHttpsPort` (integer)
- `httpPort` (integer)
- `httpsPort` (integer)
- `internalHost` (string)
- `maxThreads` (integer)
- `minAuth` (string)
- `overrideUrl` (boolean)
- `sslCertificateId` (string)
- `url` (string)

### bulksharedserverinformation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### getsharedwebserver

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatesharedwebserver

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `atomId` (string)
- `cloudTennantGeneral` (object)
- `corsConfiguration` (object)
- `generalSettings` (object)
- `shouldRestartPlugin` (boolean)
- `userManagement` (object)

### bulksharedwebserver

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querythroughputaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorethroughputaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### querythroughputaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorethroughputaccountgroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### querytradacomsconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoretradacomsconnectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createtradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ContactInfo` (object)
- `PartnerCommunication` (object)
- `PartnerCommunicationTypes` (array)
- `PartnerDocumentTypes` (object)
- `PartnerInfo` (object)
- `classification` (string)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)
- `identifier` (string)
- `organizationId` (string)
- `standard` (string)

### gettradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatetradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `ContactInfo` (object)
- `PartnerCommunication` (object)
- `PartnerCommunicationTypes` (array)
- `PartnerDocumentTypes` (object)
- `PartnerInfo` (object)
- `classification` (string)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)
- `identifier` (string)
- `organizationId` (string)
- `standard` (string)

### deletetradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulktradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querytradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoretradingpartnercomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createtradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `DefaultRouting` (object)
- `DocumentRouting` (object)
- `PartnerRouting` (object)
- `TradingPartners` (object)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### gettradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatetradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `DefaultRouting` (object)
- `DocumentRouting` (object)
- `PartnerRouting` (object)
- `TradingPartners` (object)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### deletetradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulktradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querytradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoretradingpartnerprocessinggroup

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### queryx12connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorex12connectorrecord

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### asyncgetaccountcloudattachmentproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### asynctokenaccountcloudattachmentproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asynctokenatomcounters

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asyncgetatomcounters

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### asyncgetatomdiskspace

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### asynctokenatomdiskspace

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asyncgetatomsecuritypolicies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### asynctokenatomsecuritypolicies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asynctokenlistqueues

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asyncgetlistqueues

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### asyncgetlistenerstatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### asynctokenlistenerstatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asynctokenpersistedprocessproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### asyncgetpersistedprocessproperties

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `OrganizationContactInfo` (object)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### getorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `OrganizationContactInfo` (object)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### deleteorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreorganizationcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createsharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `PartnerArchiving` (object)
- `PartnerCommunication` (object)
- `communicationType` (string)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### getsharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatesharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `PartnerArchiving` (object)
- `PartnerCommunication` (object)
- `communicationType` (string)
- `componentId` (string)
- `componentName` (string)
- `deleted` (boolean)
- `description` (string)
- `folderId` (integer)
- `folderName` (string)

### deletesharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulksharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querysharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoresharedcommunicationchannelcomponent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountGroupId` (string)
- `id` (string)
- `installationType` (string)
- `integrationPackId` (string)
- `integrationPackName` (string)

### getaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deleteaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### queryaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymoreaccountgroupintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createpublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `Description` (string)
- `PublisherPackagedComponents` (object)
- `id` (string)
- `installationType` (string)
- `name` (string)
- `operationType` (string)

### getpublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatepublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `Description` (string)
- `PublisherPackagedComponents` (object)
- `b_id` (string)
- `installationType` (string)
- `name` (string)
- `operationType` (string)

### deletepublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkpublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### querypublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `QueryFilter` (object)

### querymorepublisherintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createreleaseintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ReleasePackagedComponents` (object)
- `id` (string)
- `installationType` (string)
- `name` (string)
- `releaseOnDate` (string)
- `releaseSchedule` (string)
- `releaseStatusUrl` (string)
- `requestId` (string)

### updatereleaseintegrationpack

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `ReleasePackagedComponents` (object)
- `b_id` (string)
- `installationType` (string)
- `name` (string)
- `releaseOnDate` (string)
- `releaseSchedule` (string)
- `releaseStatusUrl` (string)
- `requestId` (string)

### getreleaseintegrationpackstatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### bulkreleaseintegrationpackstatus

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `request` (array)
- `type` (string)

### createruntimerestartrequest

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `message` (string)
- `runtimeId` (string)

### refreshsecretsmanager

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `provider` (string)
