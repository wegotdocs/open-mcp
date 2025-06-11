# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
SESSIONKEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --SESSIONKEY=$SESSIONKEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --SESSIONKEY=$SESSIONKEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --SESSIONKEY=$SESSIONKEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"...","SESSIONKEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `SESSIONKEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getcustomfieldspolicyconditions

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)

### createcustomfieldspolicycondition

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)
- `enabled` (boolean)
- `displayName` (string)
- `severity` (string)
- `priority` (string)
- `channels` (array)
- `scripts` (array)
- `notificationAction` (string)
- `notifyOnReset` (boolean)
- `resetThreshold` (integer)
- `matchAll` (array)
- `matchAny` (array)

### getwindowseventpolicyconditions

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)

### createwindowseventpolicycondition

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)
- `enabled` (boolean)
- `displayName` (string)
- `severity` (string)
- `priority` (string)
- `channels` (array)
- `scripts` (array)
- `notificationAction` (string)
- `notifyOnReset` (boolean)
- `resetThreshold` (integer)
- `source` (string)
- `eventIds` (array)
- `text` (object)
- `occurrence` (object)

### deletepolicycondition

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)
- `condition_id` (string)

### getcustomfieldspolicycondition

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)
- `condition_id` (string)

### getwindowseventpolicycondition

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `policy_id` (integer)
- `condition_id` (string)

### configurewebhook

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `url` (string)
- `activities` (object)
- `expand` (array)
- `headers` (array)

### getorganizations

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `pageSize` (integer)
- `after` (integer)
- `of` (string)

### createorganization

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `templateOrganizationId` (integer)
- `name` (string)
- `description` (string)
- `userData` (object)
- `nodeApprovalMode` (string)
- `tags` (array)
- `fields` (object)
- `locations` (array)
- `policies` (array)

### deletewebhook

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### nodeapprovaloperation

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `mode` (string)
- `devices` (array)

### resetalert

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `uid` (string)

### resetalertsetactivitydata

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `uid` (string)

### uploadtempattachments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)

### archivechecklisttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getchecklisttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistTemplateIds` (string)
- `checklistTemplateName` (string)
- `required` (boolean)
- `includeArchived` (boolean)

### updatechecklisttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createchecklisttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### deletechecklisttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistTemplateId` (integer)

### deletechecklisttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### restorechecklisttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### archiveorganizationchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getclientchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistIds` (string)
- `organizationIds` (string)
- `checklistName` (string)
- `assignedToUserId` (integer)
- `completed` (boolean)
- `required` (boolean)
- `includeArchived` (boolean)

### updateorganizationchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createorganizationchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createorganizationchecklistsfromtemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationId` (integer)

### getclientchecklist

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistId` (integer)

### deleteclientchecklist

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistId` (integer)

### deleteclientchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getclientchecklistsignedurls

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `checklistId` (integer)

### promoteclientchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### promoteclientchecklists_1

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### restoreorganizationchecklists

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### archiveclientdocument

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `clientDocumentId` (integer)

### archivemultipageclientdocuments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createorganizationdocument

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationId` (integer)
- `documentTemplateId` (integer)
- `documentName` (string)
- `documentDescription` (string)
- `fields` (object)

### getclientdocumentswithattributevalues

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `groupBy` (string)
- `organizationIds` (string)
- `templateIds` (string)
- `templateName` (string)
- `documentName` (string)

### createorganizationdocuments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### updateorganizationdocuments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### deleteclientdocument

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `clientDocumentId` (integer)

### getclientdocumentsignedurls

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `clientDocumentId` (integer)

### getorganizationdocuments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationId` (integer)

### restoreclientdocument

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `clientDocumentId` (integer)

### restoremultipageclientdocuments

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### updateorganizationdocument

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationId` (integer)
- `clientDocumentId` (integer)
- `documentName` (string)
- `documentDescription` (string)
- `fields` (object)

### archivedocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `documentTemplateId` (integer)

### archivedocumenttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getdocumenttemplateswithattributes

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `templateName` (string)
- `includeTechnicianRoles` (boolean)

### createdocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getdocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `documentTemplateId` (integer)
- `includeTechnicianRoles` (boolean)

### updatedocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `documentTemplateId` (integer)

### deletedocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `documentTemplateId` (integer)

### restoredocumenttemplate

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `documentTemplateId` (integer)

### restoredocumenttemplates

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### batchupdatetags

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `assetType` (string)

### gettags

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createtag

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### updatetag

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `tagId` (integer)

### deletetag

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `tagId` (integer)

### deletetags

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### mergetags

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### settagsforasset

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `assetType` (string)
- `assetId` (integer)

### archiveknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### archiveknowledgebasefolders

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### updateknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### deleteknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### deleteknowledgebasefolders

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### downloadknowledgebasearticle

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `articleId` (integer)

### getclientknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationIds` (string)
- `articleName` (string)
- `includeArchived` (boolean)

### getglobalknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `articleName` (string)
- `includeArchived` (boolean)

### getknowledgebasearticlesignedurls

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `articleId` (integer)

### getknowledgebasefoldercontent

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `folderId` (integer)
- `includeArchived` (boolean)

### getknowledgebasefolderpathcontent

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `folderPath` (string)
- `folderId` (integer)
- `organizationId` (integer)

### move

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `folderIds` (array)
- `documentIds` (array)
- `destinationFolderId` (integer)
- `destinationOrganizationId` (integer)

### restoreknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### restoreknowledgebasefolders

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### uploadknowledgebasearticles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getnodeattributesignedurls

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### createrelateditem

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### createrelateditemforentity

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### createrelateditemforentity_1

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### createsecurerelateditemforentity

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### deleterelateditem

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `relatedItemId` (integer)

### deleterelateditems

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### downloadrelateditemattachment

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `relatedItemId` (integer)

### getallrelateditems

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getrelateditemattachmentssignedurls

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)

### getrelateditemsforhostentity

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)
- `entityId` (integer)
- `scope` (string)

### getrelateditemswithentity

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `relEntityType` (string)
- `relEntityId` (integer)

### getrelateditemswithentitytype

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `relatedEntityType` (string)

### getrelateditemswithhostentitytype

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `entityType` (string)

### getintegritycheckjobs

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ddf` (string)
- `sf` (string)
- `ptf` (string)
- `stf` (string)
- `include` (string)
- `cursor` (string)
- `pageSize` (integer)

### submitintegritycheckjob

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `deviceId` (integer)
- `planUid` (string)

### create

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `clientId` (integer)
- `ticketFormId` (integer)
- `locationId` (integer)
- `nodeId` (integer)
- `subject` (string)
- `description` (object)
- `status` (string)
- `type` (string)
- `cc` (object)
- `assignedAppUserId` (integer)
- `requesterUid` (string)
- `severity` (string)
- `priority` (string)
- `parentTicketId` (integer)
- `tags` (array)
- `attributes` (array)

### createcomment

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `ticketId` (integer)

### getticketbyid

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `ticketId` (integer)

### update

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `ticketId` (integer)
- `version` (integer)
- `clientId` (integer)
- `ticketFormId` (integer)
- `locationId` (integer)
- `nodeId` (integer)
- `subject` (string)
- `status` (string)
- `type` (string)
- `cc` (object)
- `assignedAppUserId` (integer)
- `requesterUid` (string)
- `severity` (string)
- `priority` (string)
- `parentTicketId` (integer)
- `tags` (array)
- `attributes` (array)

### getticketlogentriesbyticketid

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `ticketId` (integer)
- `type` (string)
- `createTime` (string)
- `anchorId` (integer)
- `pageSize` (integer)

### fetchallscangroups

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### fetchscangroupbyid

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `scan-group-id` (integer)

### updatescangroup

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `scan-group-id` (integer)

### updatedevicemaintenance

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `disabledFeatures` (array)
- `start` (number)
- `end` (number)

### canceldevicemaintenance

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### controlwindowsservice

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `serviceId` (string)
- `action` (string)

### getdevice

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### updatedevice

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `displayName` (string)
- `userData` (object)
- `nodeRoleId` (integer)
- `policyId` (integer)
- `organizationId` (integer)
- `locationId` (integer)
- `warranty` (object)

### getdeviceactivejobs

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `lang` (string)
- `tz` (string)

### getdeviceactivities

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `olderThan` (integer)
- `newerThan` (integer)
- `activityType` (string)
- `status` (string)
- `seriesUid` (string)
- `pageSize` (integer)
- `lang` (string)
- `tz` (string)

### getdevicealerts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `lang` (string)
- `tz` (string)

### getdevicediskdrives

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getdeviceinstalledospatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `status` (string)
- `installedBefore` (string)
- `installedAfter` (string)

### getdeviceinstalledsoftwarepatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `impact` (string)
- `status` (string)
- `productIdentifier` (string)
- `installedBefore` (string)
- `installedAfter` (string)

### getdevicelastloggedonuser

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### getdevicelink

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `redirect` (boolean)

### getdevicenetworkinterfaces

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getdevicependingfailedrejectedospatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `status` (string)
- `type` (string)
- `severity` (string)

### getdevicependingfailedrejectedsoftwarepatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `status` (string)
- `productIdentifier` (string)
- `type` (string)
- `impact` (string)

### getdeviceprocessors

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getdeviceservices

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `name` (string)
- `state` (string)

### getdevicesoftware

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getdevicevolumes

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `include` (string)

### getnodecustomfields

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `withInheritance` (boolean)

### updatenodeattributevalues

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getpolicyoverrides

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### resetpolicyoverrides

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### rebootdevices

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `mode` (string)
- `reason` (string)

### removedeviceowner

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### requestscriptingoptions

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `lang` (string)

### runscriptondevice

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `b_id` (integer)
- `uid` (string)
- `parameters` (string)
- `runAs` (string)

### setdeviceowner

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `ownerUid` (string)

### setwindowsserviceconfiguration

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `serviceId` (string)
- `startType` (string)
- `userName` (string)

### submitospatchapply

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### submitospatchscan

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### submitsoftwarepatchapply

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### submitsoftwarepatchscan

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getgroupdeviceids

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getorganizationlocations

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### createlocationfororganization

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `name` (string)
- `address` (string)
- `description` (string)
- `userData` (object)
- `tags` (array)
- `fields` (object)

### getendusers

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `includeRoles` (boolean)

### getinstaller

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `organizationId` (integer)
- `locationId` (integer)
- `installerType` (string)
- `usageLimit` (integer)
- `content` (object)

### getinstallerforlocation

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `location_id` (integer)
- `installer_type` (string)

### getlocationusage

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `locationId` (integer)

### getnodecustomfields_1

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### updatenodeattributevalues_1

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getnodecustomfields_2

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `locationId` (integer)
- `withInheritance` (boolean)

### updatenodeattributevalues_2

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `locationId` (integer)

### getorganization

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### updateorganization

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `userData` (object)
- `nodeApprovalMode` (string)
- `tags` (array)
- `fields` (object)

### getorganizationdevices

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `pageSize` (integer)
- `after` (integer)

### getorganizationlocationusage

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (string)

### updatelocation

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)
- `locationId` (integer)
- `name` (string)
- `address` (string)
- `description` (string)
- `userData` (object)
- `tags` (array)
- `fields` (object)

### updatenoderolepolicyassignmentfororganization

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getantivirusstatusreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `productState` (string)
- `productName` (string)
- `cursor` (string)
- `pageSize` (integer)

### getantivirusthreats

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getcomputersystems

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getcustomfieldsdetailedreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)
- `updatedAfter` (string)
- `fields` (string)
- `showSecureValues` (boolean)

### getcustomfieldsreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)
- `updatedAfter` (string)
- `fields` (string)
- `showSecureValues` (boolean)

### getdevicehealthreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `health` (string)
- `cursor` (string)
- `pageSize` (integer)

### getdeviceusage

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `cursor` (string)
- `pageSize` (integer)
- `includeDeletedDevices` (boolean)

### getdiskdrives

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getinstalledospatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `status` (string)
- `installedBefore` (string)
- `installedAfter` (string)
- `cursor` (string)
- `pageSize` (integer)

### getinstalledsoftwarepatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `type` (string)
- `impact` (string)
- `status` (string)
- `productIdentifier` (string)
- `installedBefore` (string)
- `installedAfter` (string)
- `cursor` (string)
- `pageSize` (integer)

### getlastloggedonusersreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)

### getnetworkinterfaces

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)

### getoperatingsystems

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getpendingfailedrejectedospatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `status` (string)
- `type` (string)
- `severity` (string)
- `cursor` (string)
- `pageSize` (integer)

### getpendingfailedrejectedsoftwarepatches

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `status` (string)
- `productIdentifier` (string)
- `type` (string)
- `impact` (string)
- `cursor` (string)
- `pageSize` (integer)

### getpolicyoverrides_1

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)

### getprocessors

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getraidcontrollerreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getraiddrivereport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)

### getscopedcustomfieldsdetailedreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `cursor` (string)
- `pageSize` (integer)
- `updatedAfter` (string)
- `fields` (string)
- `scopes` (string)
- `showSecureValues` (boolean)

### getscopedcustomfieldsreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `cursor` (string)
- `pageSize` (integer)
- `updatedAfter` (string)
- `fields` (string)
- `scopes` (string)
- `showSecureValues` (boolean)

### getsoftware

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `cursor` (string)
- `pageSize` (integer)
- `installedBefore` (string)
- `installedAfter` (string)

### getvolumes

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ts` (string)
- `cursor` (string)
- `pageSize` (integer)
- `include` (string)

### getwindowsservicesreport

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `name` (string)
- `state` (string)
- `cursor` (string)
- `pageSize` (integer)

### getpolicies

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### createpolicy

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `mode` (string)
- `templatePolicyId` (integer)
- `parentPolicyId` (integer)
- `name` (string)
- `description` (string)
- `nodeClass` (string)
- `enabled` (boolean)

### getactivejobs

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `jobType` (string)
- `df` (string)
- `lang` (string)
- `tz` (string)

### getactivities

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `class` (string)
- `before` (string)
- `after` (string)
- `olderThan` (integer)
- `newerThan` (integer)
- `type` (string)
- `status` (string)
- `user` (string)
- `seriesUid` (string)
- `df` (string)
- `pageSize` (integer)
- `lang` (string)
- `tz` (string)
- `sourceConfigUid` (string)

### getalerts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `sourceType` (string)
- `df` (string)
- `lang` (string)
- `tz` (string)

### getautomationscripts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `lang` (string)

### getdeviceglobalcustomfields

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `scopes` (string)

### getdevices

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `pageSize` (integer)
- `after` (integer)

### getdevicesdetailed

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `pageSize` (integer)
- `after` (integer)

### getenablednotificationchannels

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getgroups

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getlocations

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `pageSize` (integer)
- `after` (integer)

### getnoderoles

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getnotificationchannels

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getorganizationsdetailed

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `pageSize` (integer)
- `after` (integer)
- `of` (string)

### getscheduledtasks

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getsoftwareproducts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getusers

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `userType` (string)
- `includeRoles` (boolean)

### search

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `q` (string)
- `limit` (integer)

### getbackupjobs

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `df` (string)
- `ddf` (string)
- `sf` (string)
- `ptf` (string)
- `stf` (string)
- `include` (string)
- `cursor` (string)
- `pageSize` (integer)

### getticketattributes

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getcontacts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getticketformbyid

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `id` (integer)

### getticketforms

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getallstatuses

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getboards

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

No input parameters

### getticketsbyboard

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `boardId` (integer)
- `sortBy` (array)
- `filters` (array)
- `pageSize` (integer)
- `searchCriteria` (string)
- `includeColumns` (array)
- `lastCursorId` (integer)

### getalluserandcontacts

**Environment variables**

- `API_KEY`
- `SESSIONKEY`

**Input schema**

- `pageSize` (integer)
- `anchorNaturalId` (integer)
- `searchCriteria` (string)
- `userType` (string)
- `clientId` (integer)
