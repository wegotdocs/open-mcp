# @open-mcp/jira

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "jira": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/jira@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/jira@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add jira \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add jira \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add jira \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "@open-mcp/jira"],
      "env": {"OAUTH2_TOKEN":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getbanner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setbanner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `isDismissible` (boolean)
- `isEnabled` (boolean)
- `message` (string)
- `visibility` (string)

### getcustomfieldsconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (array)
- `fieldContextId` (array)
- `issueId` (integer)
- `projectKeyOrId` (string)
- `issueTypeId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `fieldIdsOrKeys` (array)

### updatemultiplecustomfieldvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `generateChangelog` (boolean)
- `updates` (array)

### getcustomfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldIdOrKey` (string)
- `id` (array)
- `fieldContextId` (array)
- `issueId` (integer)
- `projectKeyOrId` (string)
- `issueTypeId` (string)
- `startAt` (integer)
- `maxResults` (integer)

### updatecustomfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldIdOrKey` (string)
- `configurations` (array)

### updatecustomfieldvalue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldIdOrKey` (string)
- `generateChangelog` (boolean)
- `updates` (array)

### getapplicationproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)
- `permissionLevel` (string)
- `keyFilter` (string)

### getadvancedsettings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setapplicationproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `b_id` (string)
- `value` (string)

### getallapplicationroles

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getapplicationrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### getattachmentcontent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `redirect` (boolean)

### getattachmentmeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getattachmentthumbnail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `redirect` (boolean)
- `fallbackToDefault` (boolean)
- `width` (integer)
- `height` (integer)

### removeattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### expandattachmentforhumans

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### expandattachmentformachines

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getauditrecords

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `filter` (string)
- `from` (string)
- `to` (string)

### getallsystemavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)

### submitbulkdelete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `selectedIssueIdsOrKeys` (array)
- `sendBulkNotification` (boolean)

### getbulkeditablefields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdsOrKeys` (string)
- `searchText` (string)
- `endingBefore` (string)
- `startingAfter` (string)

### submitbulkedit

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `editedFieldsInput` (string)
- `selectedActions` (array)
- `selectedIssueIdsOrKeys` (array)
- `sendBulkNotification` (boolean)

### submitbulkmove

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `sendBulkNotification` (boolean)
- `targetToSourcesMapping` (object)

### getavailabletransitions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdsOrKeys` (string)
- `endingBefore` (string)
- `startingAfter` (string)

### submitbulktransition

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `bulkTransitionInputs` (array)
- `sendBulkNotification` (boolean)

### submitbulkunwatch

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `selectedIssueIdsOrKeys` (array)

### submitbulkwatch

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `selectedIssueIdsOrKeys` (array)

### getbulkoperationprogress

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### getbulkchangelogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldIds` (array)
- `issueIdsOrKeys` (array)
- `maxResults` (integer)
- `nextPageToken` (string)

### getalluserdataclassificationlevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `status` (array)
- `orderBy` (string)

### getcommentsbyids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `ids` (array)

### getcommentpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)

### deletecommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)
- `propertyKey` (string)

### getcommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)
- `propertyKey` (string)

### setcommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)
- `propertyKey` (string)

### findcomponentsforprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdsOrKeys` (array)
- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)
- `query` (string)

### createcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ari` (string)
- `assignee` (string)
- `assigneeType` (string)
- `description` (string)
- `id` (string)
- `isAssigneeTypeValid` (boolean)
- `lead` (string)
- `leadAccountId` (string)
- `leadUserName` (string)
- `metadata` (object)
- `name` (string)
- `project` (string)
- `projectId` (integer)
- `realAssignee` (string)
- `realAssigneeType` (string)
- `self` (string)

### deletecomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `moveIssuesTo` (string)

### getcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatecomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `ari` (string)
- `assignee` (string)
- `assigneeType` (string)
- `description` (string)
- `b_id` (string)
- `isAssigneeTypeValid` (boolean)
- `lead` (string)
- `leadAccountId` (string)
- `leadUserName` (string)
- `metadata` (object)
- `name` (string)
- `project` (string)
- `projectId` (integer)
- `realAssignee` (string)
- `realAssigneeType` (string)
- `self` (string)

### getcomponentrelatedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getselectedtimetrackingimplementation

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### selecttimetrackingimplementation

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)
- `name` (string)
- `url` (string)

### getavailabletimetrackingimplementations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getsharedtimetrackingconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setsharedtimetrackingconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultUnit` (string)
- `timeFormat` (string)
- `workingDaysPerWeek` (number)
- `workingHoursPerDay` (number)

### getcustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getalldashboards

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `filter` (string)
- `startAt` (integer)
- `maxResults` (integer)

### createdashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `extendAdminPermissions` (boolean)
- `description` (string)
- `editPermissions` (array)
- `name` (string)
- `sharePermissions` (array)

### bulkeditdashboards

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `action` (string)
- `changeOwnerDetails` (string)
- `entityIds` (array)
- `extendAdminPermissions` (boolean)
- `permissionDetails` (string)

### getallavailabledashboardgadgets

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getdashboardspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardName` (string)
- `accountId` (string)
- `owner` (string)
- `groupname` (string)
- `groupId` (string)
- `projectId` (integer)
- `orderBy` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `status` (string)
- `expand` (string)

### getallgadgets

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (integer)
- `moduleKey` (array)
- `uri` (array)
- `gadgetId` (array)

### addgadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (integer)
- `color` (string)
- `ignoreUriAndModuleKeyValidation` (boolean)
- `moduleKey` (string)
- `position` (string)
- `title` (string)
- `uri` (string)

### removegadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (integer)
- `gadgetId` (integer)

### updategadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (integer)
- `gadgetId` (integer)
- `color` (string)
- `position` (string)
- `title` (string)

### getdashboarditempropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `itemId` (string)

### deletedashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `itemId` (string)
- `propertyKey` (string)

### getdashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `itemId` (string)
- `propertyKey` (string)

### setdashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `itemId` (string)
- `propertyKey` (string)

### deletedashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getdashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatedashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `extendAdminPermissions` (boolean)
- `description` (string)
- `editPermissions` (array)
- `name` (string)
- `sharePermissions` (array)

### copydashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `extendAdminPermissions` (boolean)
- `description` (string)
- `editPermissions` (array)
- `name` (string)
- `sharePermissions` (array)

### getpolicy

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpolicies

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (string)

### getevents

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### analyseexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `check` (string)
- `contextVariables` (object)
- `expressions` (array)

### evaluatejiraexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `context` (string)
- `expression` (string)

### evaluatejsisjiraexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `context` (string)
- `expression` (string)

### getfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createcustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)
- `searcherKey` (string)
- `type` (string)

### removeassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `associationContexts` (array)
- `fields` (array)

### createassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `associationContexts` (array)
- `fields` (array)

### getfieldspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `type` (array)
- `id` (array)
- `query` (string)
- `orderBy` (string)
- `expand` (string)
- `projectIds` (array)

### gettrashedfieldspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `query` (string)
- `expand` (string)
- `orderBy` (string)

### updatecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `description` (string)
- `name` (string)
- `searcherKey` (string)

### getcontextsforfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `isAnyIssueType` (boolean)
- `isGlobalContext` (boolean)
- `contextId` (array)
- `startAt` (integer)
- `maxResults` (integer)

### createcustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `description` (string)
- `id` (string)
- `issueTypeIds` (array)
- `name` (string)
- `projectIds` (array)

### getdefaultvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (array)
- `startAt` (integer)
- `maxResults` (integer)

### setdefaultvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `defaultValues` (array)

### getissuetypemappingsforcontexts

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (array)
- `startAt` (integer)
- `maxResults` (integer)

### getcustomfieldcontextsforprojectsandissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `mappings` (array)

### getprojectcontextmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (array)
- `startAt` (integer)
- `maxResults` (integer)

### deletecustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)

### updatecustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `description` (string)
- `name` (string)

### addissuetypestocontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `issueTypeIds` (array)

### removeissuetypesfromcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `issueTypeIds` (array)

### getoptionsforcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `optionId` (integer)
- `onlyOptions` (boolean)
- `startAt` (integer)
- `maxResults` (integer)

### createcustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `options` (array)

### updatecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `options` (array)

### reordercustomfieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `after` (string)
- `customFieldOptionIds` (array)
- `position` (string)

### deletecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `optionId` (integer)

### replacecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `optionId` (integer)
- `contextId` (integer)
- `replaceWith` (integer)
- `jql` (string)

### assignprojectstocustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `projectIds` (array)

### removecustomfieldcontextfromprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `contextId` (integer)
- `projectIds` (array)

### getcontextsforfielddeprecated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `startAt` (integer)
- `maxResults` (integer)

### getscreensforfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `expand` (string)

### getallissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `startAt` (integer)
- `maxResults` (integer)

### createissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `config` (object)
- `properties` (object)
- `value` (string)

### getselectableissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `projectId` (integer)

### getvisibleissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `projectId` (integer)

### deleteissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `optionId` (integer)

### getissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `optionId` (integer)

### updateissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `optionId` (integer)
- `config` (object)
- `id` (integer)
- `properties` (object)
- `value` (string)

### replaceissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldKey` (string)
- `optionId` (integer)
- `replaceWith` (integer)
- `jql` (string)
- `overrideScreenSecurity` (boolean)
- `overrideEditableFlag` (boolean)

### deletecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### restorecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### trashcustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getallfieldconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `isDefault` (boolean)
- `query` (string)

### createfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)

### deletefieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updatefieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `description` (string)
- `name` (string)

### getfieldconfigurationitems

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `startAt` (integer)
- `maxResults` (integer)

### updatefieldconfigurationitems

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `fieldConfigurationItems` (array)

### getallfieldconfigurationschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)

### createfieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)

### getfieldconfigurationschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `fieldConfigurationSchemeId` (array)

### getfieldconfigurationschemeprojectmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `projectId` (array)

### assignfieldconfigurationschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldConfigurationSchemeId` (string)
- `projectId` (string)

### deletefieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updatefieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `description` (string)
- `name` (string)

### setfieldconfigurationschememapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `mappings` (array)

### removeissuetypesfromglobalfieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueTypeIds` (array)

### createfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `overrideSharePermissions` (boolean)
- `approximateLastUsed` (string)
- `description` (string)
- `editPermissions` (array)
- `favourite` (boolean)
- `favouritedCount` (integer)
- `id` (string)
- `jql` (string)
- `name` (string)
- `owner` (string)
- `searchUrl` (string)
- `self` (string)
- `sharePermissions` (array)
- `sharedUsers` (string)
- `subscriptions` (string)
- `viewUrl` (string)

### getdefaultsharescope

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setdefaultsharescope

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `scope` (string)

### getfavouritefilters

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)

### getmyfilters

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `includeFavourites` (boolean)

### getfilterspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `filterName` (string)
- `accountId` (string)
- `owner` (string)
- `groupname` (string)
- `groupId` (string)
- `projectId` (integer)
- `id` (array)
- `orderBy` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `expand` (string)
- `overrideSharePermissions` (boolean)
- `isSubstringMatch` (boolean)

### deletefilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `expand` (string)
- `overrideSharePermissions` (boolean)

### updatefilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `expand` (string)
- `overrideSharePermissions` (boolean)
- `approximateLastUsed` (string)
- `description` (string)
- `editPermissions` (array)
- `favourite` (boolean)
- `favouritedCount` (integer)
- `b_id` (string)
- `jql` (string)
- `name` (string)
- `owner` (string)
- `searchUrl` (string)
- `self` (string)
- `sharePermissions` (array)
- `sharedUsers` (string)
- `subscriptions` (string)
- `viewUrl` (string)

### resetcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### setcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `columns` (array)

### deletefavouriteforfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `expand` (string)

### setfavouriteforfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `expand` (string)

### changefilterowner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `accountId` (string)

### getsharepermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### addsharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `accountId` (string)
- `groupId` (string)
- `groupname` (string)
- `projectId` (string)
- `projectRoleId` (string)
- `rights` (integer)
- `type` (string)

### deletesharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `permissionId` (integer)

### getsharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `permissionId` (integer)

### removegroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `groupname` (string)
- `groupId` (string)
- `swapGroup` (string)
- `swapGroupId` (string)

### getgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `groupname` (string)
- `groupId` (string)
- `expand` (string)

### creategroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### bulkgetgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `groupId` (array)
- `groupName` (array)
- `accessType` (string)
- `applicationKey` (string)

### getusersfromgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `groupname` (string)
- `groupId` (string)
- `includeInactiveUsers` (boolean)
- `startAt` (integer)
- `maxResults` (integer)

### removeuserfromgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `groupname` (string)
- `groupId` (string)
- `username` (string)
- `accountId` (string)

### addusertogroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `groupname` (string)
- `groupId` (string)
- `accountId` (string)
- `name` (string)

### findgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `query` (string)
- `exclude` (array)
- `excludeId` (array)
- `maxResults` (integer)
- `caseInsensitive` (boolean)
- `userName` (string)

### findusersandgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `maxResults` (integer)
- `showAvatar` (boolean)
- `fieldId` (string)
- `projectId` (array)
- `issueTypeId` (array)
- `avatarSize` (string)
- `caseInsensitive` (boolean)
- `excludeConnectAddons` (boolean)

### getlicense

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `updateHistory` (boolean)
- `fields` (object)
- `historyMetadata` (string)
- `properties` (array)
- `transition` (string)
- `update` (object)

### archiveissuesasync

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jql` (string)

### archiveissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdsOrKeys` (array)

### createissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueUpdates` (array)

### bulkfetchissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `fields` (array)
- `fieldsByKeys` (boolean)
- `issueIdsOrKeys` (array)
- `properties` (array)

### getcreateissuemeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIds` (array)
- `projectKeys` (array)
- `issuetypeIds` (array)
- `issuetypeNames` (array)
- `expand` (string)

### getcreateissuemetaissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)

### getcreateissuemetaissuetypeid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `issueTypeId` (string)
- `startAt` (integer)
- `maxResults` (integer)

### getissuelimitreport

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `isReturningKeys` (boolean)

### getissuepickerresource

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `currentJQL` (string)
- `currentIssueKey` (string)
- `currentProjectId` (string)
- `showSubTasks` (boolean)
- `showSubTaskParent` (boolean)

### bulksetissuespropertieslist

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `entitiesIds` (array)
- `properties` (object)

### bulksetissuepropertiesbyissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issues` (array)

### bulkdeleteissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `currentValue` (other)
- `entityIds` (array)

### bulksetissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `expression` (string)
- `filter` (string)
- `value` (other)

### unarchiveissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdsOrKeys` (array)

### getiswatchingissuebulk

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIds` (array)

### deleteissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `deleteSubtasks` (string)

### getissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `fields` (array)
- `fieldsByKeys` (boolean)
- `expand` (string)
- `properties` (array)
- `updateHistory` (boolean)
- `failFast` (boolean)

### editissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `notifyUsers` (boolean)
- `overrideScreenSecurity` (boolean)
- `overrideEditableFlag` (boolean)
- `returnIssue` (boolean)
- `expand` (string)
- `fields` (object)
- `historyMetadata` (string)
- `properties` (array)
- `transition` (string)
- `update` (object)

### assignissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `accountId` (string)
- `accountType` (string)
- `active` (boolean)
- `applicationRoles` (string)
- `avatarUrls` (string)
- `displayName` (string)
- `emailAddress` (string)
- `expand` (string)
- `groups` (string)
- `key` (string)
- `locale` (string)
- `name` (string)
- `self` (string)
- `timeZone` (string)

### addattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### getchangelogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)

### getchangelogsbyids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `changelogIds` (array)

### getcomments

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)
- `expand` (string)

### addcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `expand` (string)
- `author` (string)
- `body` (other)
- `created` (string)
- `id` (string)
- `jsdAuthorCanSeeRequest` (boolean)
- `jsdPublic` (boolean)
- `properties` (array)
- `renderedBody` (string)
- `self` (string)
- `updateAuthor` (string)
- `updated` (string)
- `visibility` (string)

### deletecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)

### getcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)
- `expand` (string)

### updatecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)
- `notifyUsers` (boolean)
- `overrideEditableFlag` (boolean)
- `expand` (string)
- `author` (string)
- `body` (other)
- `created` (string)
- `b_id` (string)
- `jsdAuthorCanSeeRequest` (boolean)
- `jsdPublic` (boolean)
- `properties` (array)
- `renderedBody` (string)
- `self` (string)
- `updateAuthor` (string)
- `updated` (string)
- `visibility` (string)

### geteditissuemeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `overrideScreenSecurity` (boolean)
- `overrideEditableFlag` (boolean)

### notify

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `htmlBody` (string)
- `restrict` (string)
- `subject` (string)
- `textBody` (string)
- `to` (string)

### getissuepropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### deleteissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `propertyKey` (string)

### getissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `propertyKey` (string)

### setissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `propertyKey` (string)

### deleteremoteissuelinkbyglobalid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `globalId` (string)

### getremoteissuelinks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `globalId` (string)

### createorupdateremoteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `application` (string)
- `globalId` (string)
- `object` (string)
- `relationship` (string)

### deleteremoteissuelinkbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `linkId` (string)

### getremoteissuelinkbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `linkId` (string)

### updateremoteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `linkId` (string)
- `application` (string)
- `globalId` (string)
- `object` (string)
- `relationship` (string)

### gettransitions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `expand` (string)
- `transitionId` (string)
- `skipRemoteOnlyCondition` (boolean)
- `includeUnavailableTransitions` (boolean)
- `sortByOpsBarAndStatus` (boolean)

### dotransition

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `fields` (object)
- `historyMetadata` (string)
- `properties` (array)
- `transition` (string)
- `update` (object)

### removevote

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### getvotes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### addvote

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### removewatcher

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `username` (string)
- `accountId` (string)

### getissuewatchers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### addwatcher

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)

### bulkdeleteworklogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `adjustEstimate` (string)
- `overrideEditableFlag` (boolean)
- `ids` (array)

### getissueworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `startedAfter` (integer)
- `startedBefore` (integer)
- `expand` (string)

### addworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `notifyUsers` (boolean)
- `adjustEstimate` (string)
- `newEstimate` (string)
- `reduceBy` (string)
- `expand` (string)
- `overrideEditableFlag` (boolean)
- `author` (string)
- `comment` (other)
- `created` (string)
- `id` (string)
- `issueId` (string)
- `properties` (array)
- `self` (string)
- `started` (string)
- `timeSpent` (string)
- `timeSpentSeconds` (integer)
- `updateAuthor` (string)
- `updated` (string)
- `visibility` (string)

### bulkmoveworklogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `adjustEstimate` (string)
- `overrideEditableFlag` (boolean)
- `ids` (array)
- `b_issueIdOrKey` (string)

### deleteworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)
- `notifyUsers` (boolean)
- `adjustEstimate` (string)
- `newEstimate` (string)
- `increaseBy` (string)
- `overrideEditableFlag` (boolean)

### getworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)
- `expand` (string)

### updateworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `id` (string)
- `notifyUsers` (boolean)
- `adjustEstimate` (string)
- `newEstimate` (string)
- `expand` (string)
- `overrideEditableFlag` (boolean)
- `author` (string)
- `comment` (other)
- `created` (string)
- `b_id` (string)
- `issueId` (string)
- `properties` (array)
- `self` (string)
- `started` (string)
- `timeSpent` (string)
- `timeSpentSeconds` (integer)
- `updateAuthor` (string)
- `updated` (string)
- `visibility` (string)

### getworklogpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `worklogId` (string)

### deleteworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `worklogId` (string)
- `propertyKey` (string)

### getworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `worklogId` (string)
- `propertyKey` (string)

### setworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIdOrKey` (string)
- `worklogId` (string)
- `propertyKey` (string)

### linkissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `comment` (object)
- `inwardIssue` (object)
- `outwardIssue` (object)
- `type` (object)

### deleteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `linkId` (string)

### getissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `linkId` (string)

### getissuelinktypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `inward` (string)
- `name` (string)
- `outward` (string)
- `self` (string)

### deleteissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueLinkTypeId` (string)

### getissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueLinkTypeId` (string)

### updateissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueLinkTypeId` (string)
- `id` (string)
- `inward` (string)
- `name` (string)
- `outward` (string)
- `self` (string)

### exportarchivedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `archivedBy` (array)
- `archivedDateRange` (object)
- `issueTypes` (array)
- `projects` (array)
- `reporters` (array)

### getissuesecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `levels` (array)
- `name` (string)

### getsecuritylevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `schemeId` (array)
- `onlyDefault` (boolean)

### setdefaultlevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultValues` (array)

### getsecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `schemeId` (array)
- `levelId` (array)
- `expand` (string)

### searchprojectsusingsecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `issueSecuritySchemeId` (array)
- `projectId` (array)

### associateschemestoprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `oldToNewSecurityLevelMappings` (array)
- `projectId` (string)
- `schemeId` (string)

### searchsecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `projectId` (array)

### getissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updateissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `description` (string)
- `name` (string)

### getissuesecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueSecuritySchemeId` (integer)
- `startAt` (integer)
- `maxResults` (integer)
- `issueSecurityLevelId` (array)
- `expand` (string)

### deletesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)

### addsecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `levels` (array)

### removelevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `levelId` (string)
- `replaceWith` (string)

### updatesecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `levelId` (string)
- `description` (string)
- `name` (string)

### addsecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `levelId` (string)
- `members` (array)

### removememberfromsecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `levelId` (string)
- `memberId` (string)

### getissuealltypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `hierarchyLevel` (integer)
- `name` (string)
- `type` (string)

### getissuetypesforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (integer)
- `level` (integer)

### deleteissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `alternativeIssueTypeId` (string)

### getissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `avatarId` (integer)
- `description` (string)
- `name` (string)

### getalternativeissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createissuetypeavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `x` (integer)
- `y` (integer)
- `size` (integer)

### getissuetypepropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeId` (string)

### deleteissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeId` (string)
- `propertyKey` (string)

### getissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeId` (string)
- `propertyKey` (string)

### setissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeId` (string)
- `propertyKey` (string)

### getallissuetypeschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `orderBy` (string)
- `expand` (string)
- `queryString` (string)

### createissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultIssueTypeId` (string)
- `description` (string)
- `issueTypeIds` (array)
- `name` (string)

### getissuetypeschemesmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `issueTypeSchemeId` (array)

### getissuetypeschemeforprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `projectId` (array)

### assignissuetypeschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (string)
- `projectId` (string)

### deleteissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (integer)

### updateissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (integer)
- `defaultIssueTypeId` (string)
- `description` (string)
- `name` (string)

### addissuetypestoissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (integer)
- `issueTypeIds` (array)

### reorderissuetypesinissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (integer)
- `after` (string)
- `issueTypeIds` (array)
- `position` (string)

### removeissuetypefromissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeSchemeId` (integer)
- `issueTypeId` (integer)

### getissuetypescreenschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `queryString` (string)
- `orderBy` (string)
- `expand` (string)

### createissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `issueTypeMappings` (array)
- `name` (string)

### getissuetypescreenschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `issueTypeScreenSchemeId` (array)

### getissuetypescreenschemeprojectassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `projectId` (array)

### assignissuetypescreenschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)
- `projectId` (string)

### deleteissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)

### updateissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)
- `description` (string)
- `name` (string)

### appendmappingsforissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)
- `issueTypeMappings` (array)

### updatedefaultscreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)
- `screenSchemeId` (string)

### removemappingsfromissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (string)
- `issueTypeIds` (array)

### getprojectsforissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueTypeScreenSchemeId` (integer)
- `startAt` (integer)
- `maxResults` (integer)
- `query` (string)

### getautocomplete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getautocompletepost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `includeCollapsedFields` (boolean)
- `projectIds` (array)

### getfieldautocompleteforquerystring

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldName` (string)
- `fieldValue` (string)
- `predicateName` (string)
- `predicateValue` (string)

### getprecomputations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `functionKey` (array)
- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)

### updateprecomputations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `skipNotFoundPrecomputations` (boolean)
- `values` (array)

### getprecomputationsbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orderBy` (string)
- `precomputationIDs` (array)

### matchissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `issueIds` (array)
- `jqls` (array)

### parsejqlqueries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `validation` (string)
- `queries` (array)

### migratequeries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `queryStrings` (array)

### sanitisejqlqueries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `queries` (array)

### getalllabels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)

### getapproximatelicensecount

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getapproximateapplicationlicensecount

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `applicationKey` (string)

### getmypermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKey` (string)
- `projectId` (string)
- `issueKey` (string)
- `issueId` (string)
- `permissions` (string)
- `projectUuid` (string)
- `projectConfigurationUuid` (string)
- `commentId` (string)

### removepreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### getpreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### setpreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### deletelocale

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getlocale

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setlocale

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `locale` (string)

### getcurrentuser

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)

### getnotificationschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `projectId` (array)
- `onlyDefault` (boolean)
- `expand` (string)

### createnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)
- `notificationSchemeEvents` (array)

### getnotificationschemetoprojectmappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `notificationSchemeId` (array)
- `projectId` (array)

### getnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `expand` (string)

### updatenotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `description` (string)
- `name` (string)

### addnotifications

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `notificationSchemeEvents` (array)

### deletenotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `notificationSchemeId` (string)

### removenotificationfromnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `notificationSchemeId` (string)
- `notificationId` (string)

### getallpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbulkpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `globalPermissions` (array)
- `projectPermissions` (array)

### getpermittedprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `permissions` (array)

### getallpermissionschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)

### createpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `description` (string)
- `b_expand` (string)
- `id` (integer)
- `name` (string)
- `permissions` (array)
- `scope` (string)
- `self` (string)

### deletepermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)

### getpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `expand` (string)

### updatepermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `expand` (string)
- `description` (string)
- `b_expand` (string)
- `id` (integer)
- `name` (string)
- `permissions` (array)
- `scope` (string)
- `self` (string)

### getpermissionschemegrants

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `expand` (string)

### createpermissiongrant

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `expand` (string)
- `holder` (string)
- `id` (integer)
- `permission` (string)
- `self` (string)

### deletepermissionschemeentity

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `permissionId` (integer)

### getpermissionschemegrant

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `permissionId` (integer)
- `expand` (string)

### getplans

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `includeTrashed` (boolean)
- `includeArchived` (boolean)
- `cursor` (string)
- `maxResults` (integer)

### createplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `useGroupId` (boolean)
- `crossProjectReleases` (array)
- `customFields` (array)
- `exclusionRules` (string)
- `issueSources` (array)
- `leadAccountId` (string)
- `name` (string)
- `permissions` (array)
- `scheduling` (string)

### getplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `useGroupId` (boolean)

### updateplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `useGroupId` (boolean)

### archiveplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)

### duplicateplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `name` (string)

### getteams

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `cursor` (string)
- `maxResults` (integer)

### addatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `capacity` (number)
- `id` (string)
- `issueSourceId` (integer)
- `planningStyle` (string)
- `sprintLength` (integer)

### removeatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `atlassianTeamId` (string)

### getatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `atlassianTeamId` (string)

### updateatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `atlassianTeamId` (string)

### createplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `capacity` (number)
- `issueSourceId` (integer)
- `memberAccountIds` (array)
- `name` (string)
- `planningStyle` (string)
- `sprintLength` (integer)

### deleteplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `planOnlyTeamId` (integer)

### getplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `planOnlyTeamId` (integer)

### updateplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)
- `planOnlyTeamId` (integer)

### trashplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `planId` (integer)

### getpriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `avatarId` (integer)
- `description` (string)
- `iconUrl` (string)
- `name` (string)
- `statusColor` (string)

### setdefaultpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### movepriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `after` (string)
- `ids` (array)
- `position` (string)

### searchpriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `projectId` (array)
- `priorityName` (string)
- `onlyDefault` (boolean)
- `expand` (string)

### deletepriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updatepriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `avatarId` (integer)
- `description` (string)
- `iconUrl` (string)
- `name` (string)
- `statusColor` (string)

### getpriorityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `priorityId` (array)
- `schemeId` (array)
- `schemeName` (string)
- `onlyDefault` (boolean)
- `orderBy` (string)
- `expand` (string)

### createpriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultPriorityId` (integer)
- `description` (string)
- `mappings` (string)
- `name` (string)
- `priorityIds` (array)
- `projectIds` (array)

### suggestedprioritiesformappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `maxResults` (integer)
- `priorities` (string)
- `projects` (string)
- `schemeId` (integer)
- `startAt` (integer)

### getavailableprioritiesbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `query` (string)
- `schemeId` (string)
- `exclude` (array)

### deletepriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)

### updatepriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (integer)
- `defaultPriorityId` (integer)
- `description` (string)
- `mappings` (string)
- `name` (string)
- `priorities` (string)
- `projects` (string)

### getprioritiesbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `startAt` (string)
- `maxResults` (string)

### getprojectsbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemeId` (string)
- `startAt` (string)
- `maxResults` (string)
- `projectId` (array)
- `query` (string)

### getallprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `recent` (integer)
- `properties` (array)

### createproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `assigneeType` (string)
- `avatarId` (integer)
- `categoryId` (integer)
- `description` (string)
- `fieldConfigurationScheme` (integer)
- `issueSecurityScheme` (integer)
- `issueTypeScheme` (integer)
- `issueTypeScreenScheme` (integer)
- `key` (string)
- `lead` (string)
- `leadAccountId` (string)
- `name` (string)
- `notificationScheme` (integer)
- `permissionScheme` (integer)
- `projectTemplateKey` (string)
- `projectTypeKey` (string)
- `url` (string)
- `workflowScheme` (integer)

### createprojectwithcustomtemplate

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `details` (object)
- `template` (object)

### getrecent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `properties` (array)

### searchprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)
- `id` (array)
- `keys` (array)
- `query` (string)
- `typeKey` (string)
- `categoryId` (integer)
- `action` (string)
- `expand` (string)
- `status` (array)
- `properties` (array)
- `propertyQuery` (string)

### getallprojecttypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getallaccessibleprojecttypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getprojecttypebykey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectTypeKey` (string)

### getaccessibleprojecttypebykey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectTypeKey` (string)

### deleteproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `enableUndo` (boolean)

### getproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `expand` (string)
- `properties` (array)

### updateproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `expand` (string)
- `assigneeType` (string)
- `avatarId` (integer)
- `categoryId` (integer)
- `description` (string)
- `issueSecurityScheme` (integer)
- `key` (string)
- `lead` (string)
- `leadAccountId` (string)
- `name` (string)
- `notificationScheme` (integer)
- `permissionScheme` (integer)
- `releasedProjectKeys` (array)
- `url` (string)

### archiveproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### updateprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `fileName` (string)
- `id` (string)
- `isDeletable` (boolean)
- `isSelected` (boolean)
- `isSystemAvatar` (boolean)
- `owner` (string)
- `urls` (object)

### deleteprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (integer)

### createprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `x` (integer)
- `y` (integer)
- `size` (integer)

### getallprojectavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### removedefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### getdefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### updatedefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (string)

### getprojectcomponentspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)
- `componentSource` (string)
- `query` (string)

### getprojectcomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `componentSource` (string)

### deleteprojectasynchronously

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### getfeaturesforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### togglefeatureforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `featureKey` (string)
- `state` (string)

### getprojectpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### deleteprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `propertyKey` (string)

### getprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `propertyKey` (string)

### setprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `propertyKey` (string)

### restore

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### getprojectroles

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### deleteactor

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (integer)
- `user` (string)
- `group` (string)
- `groupId` (string)

### getprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (integer)
- `excludeInactiveUsers` (boolean)

### addactorusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (integer)
- `group` (array)
- `groupId` (array)
- `user` (array)

### setactors

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `id` (integer)
- `categorisedActors` (object)
- `b_id` (integer)

### getprojectroledetails

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `currentMember` (boolean)
- `excludeConnectAddons` (boolean)

### getallstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)

### getprojectversionspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `orderBy` (string)
- `query` (string)
- `status` (string)
- `expand` (string)

### getprojectversions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectIdOrKey` (string)
- `expand` (string)

### getprojectemail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (integer)

### updateprojectemail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (integer)
- `emailAddress` (string)
- `emailAddressStatus` (array)

### gethierarchy

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (integer)

### getprojectissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKeyOrId` (string)

### getnotificationschemeforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKeyOrId` (string)
- `expand` (string)

### getassignedpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKeyOrId` (string)
- `expand` (string)

### assignpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKeyOrId` (string)
- `expand` (string)
- `id` (integer)

### getsecuritylevelsforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectKeyOrId` (string)

### getallprojectcategories

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `id` (string)
- `name` (string)
- `self` (string)

### removeprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getprojectcategorybyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updateprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `description` (string)
- `b_id` (string)
- `name` (string)
- `self` (string)

### validateprojectkey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### getvalidprojectkey

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### getvalidprojectname

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### getresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)

### setdefaultresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### moveresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `after` (string)
- `ids` (array)
- `position` (string)

### searchresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (string)
- `maxResults` (string)
- `id` (array)
- `onlyDefault` (boolean)

### deleteresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `replaceWith` (string)

### getresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### updateresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `description` (string)
- `name` (string)

### getallprojectroles

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)

### deleteprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `swap` (integer)

### getprojectrolebyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### partialupdateprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `description` (string)
- `name` (string)

### fullyupdateprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `description` (string)
- `name` (string)

### deleteprojectroleactorsfromrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `user` (string)
- `groupId` (string)
- `group` (string)

### getprojectroleactorsforrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### addprojectroleactorstorole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `group` (array)
- `groupId` (array)
- `user` (array)

### getscreens

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `queryString` (string)
- `scope` (array)
- `orderBy` (string)

### createscreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)

### addfieldtodefaultscreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fieldId` (string)

### getbulkscreentabs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (array)
- `tabId` (array)
- `startAt` (integer)
- `maxResult` (integer)

### deletescreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)

### updatescreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `description` (string)
- `name` (string)

### getavailablescreenfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)

### getallscreentabs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `projectKey` (string)

### addscreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `id` (integer)
- `name` (string)

### deletescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)

### renamescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `id` (integer)
- `name` (string)

### getallscreentabfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `projectKey` (string)

### addscreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `fieldId` (string)

### removescreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `id` (string)

### movescreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `id` (string)
- `after` (string)
- `position` (string)

### movescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenId` (integer)
- `tabId` (integer)
- `pos` (integer)

### getscreenschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `id` (array)
- `expand` (string)
- `queryString` (string)
- `orderBy` (string)

### createscreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)
- `screens` (string)

### deletescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenSchemeId` (string)

### updatescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `screenSchemeId` (string)
- `description` (string)
- `name` (string)
- `screens` (string)

### searchforissuesusingjql

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jql` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `validateQuery` (string)
- `fields` (array)
- `expand` (string)
- `properties` (array)
- `fieldsByKeys` (boolean)
- `failFast` (boolean)

### searchforissuesusingjqlpost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `fields` (array)
- `fieldsByKeys` (boolean)
- `jql` (string)
- `maxResults` (integer)
- `properties` (array)
- `startAt` (integer)
- `validateQuery` (string)

### countissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jql` (string)

### searchforissuesids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jql` (string)
- `maxResults` (integer)
- `nextPageToken` (string)

### searchandreconsileissuesusingjql

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jql` (string)
- `nextPageToken` (string)
- `maxResults` (integer)
- `fields` (array)
- `expand` (string)
- `properties` (array)
- `fieldsByKeys` (boolean)
- `failFast` (boolean)
- `reconcileIssues` (array)

### searchandreconsileissuesusingjqlpost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `fields` (array)
- `fieldsByKeys` (boolean)
- `jql` (string)
- `maxResults` (integer)
- `nextPageToken` (string)
- `properties` (array)
- `reconcileIssues` (array)

### getissuesecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getserverinfo

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getissuenavigatordefaultcolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### setissuenavigatordefaultcolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)

### getstatuscategories

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getstatuscategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrKey` (string)

### deletestatusesbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (array)

### getstatusesbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `id` (array)

### createstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `scope` (object)
- `statuses` (array)

### updatestatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `statuses` (array)

### search

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `projectId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `searchString` (string)
- `statusCategory` (string)

### getprojectissuetypeusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `statusId` (string)
- `projectId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### getprojectusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `statusId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### getworkflowusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `statusId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### gettask

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### canceltask

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### getuimodifications

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `expand` (string)

### createuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `contexts` (array)
- `data` (string)
- `description` (string)
- `name` (string)

### deleteuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `uiModificationId` (string)

### updateuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `uiModificationId` (string)
- `contexts` (array)
- `data` (string)
- `description` (string)
- `name` (string)

### getavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `entityId` (string)

### storeavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `entityId` (string)
- `x` (integer)
- `y` (integer)
- `size` (integer)

### deleteavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `owningObjectId` (string)
- `id` (integer)

### getavatarimagebytype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `size` (string)
- `format` (string)

### getavatarimagebyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `id` (integer)
- `size` (string)
- `format` (string)

### getavatarimagebyowner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `entityId` (string)
- `size` (string)
- `format` (string)

### removeuser

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `username` (string)
- `key` (string)

### getuser

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `username` (string)
- `key` (string)
- `expand` (string)

### createuser

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `applicationKeys` (array)
- `displayName` (string)
- `emailAddress` (string)
- `key` (string)
- `name` (string)
- `password` (string)
- `products` (array)
- `self` (string)

### findbulkassignableusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `username` (string)
- `accountId` (string)
- `projectKeys` (string)
- `startAt` (integer)
- `maxResults` (integer)

### findassignableusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `sessionId` (string)
- `username` (string)
- `accountId` (string)
- `project` (string)
- `issueKey` (string)
- `issueId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `actionDescriptorId` (integer)
- `recommend` (boolean)

### bulkgetusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `username` (array)
- `key` (array)
- `accountId` (array)

### bulkgetusersmigration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `username` (array)
- `key` (array)

### resetusercolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `username` (string)

### getuserdefaultcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `username` (string)

### setusercolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)

### getuseremail

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)

### getuseremailbulk

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (array)

### getusergroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `username` (string)
- `key` (string)

### getusernavproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `accountId` (string)

### setusernavproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `accountId` (string)

### finduserswithallpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `username` (string)
- `accountId` (string)
- `permissions` (string)
- `issueKey` (string)
- `projectKey` (string)
- `startAt` (integer)
- `maxResults` (integer)

### findusersforpicker

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `maxResults` (integer)
- `showAvatar` (boolean)
- `exclude` (array)
- `excludeAccountIds` (array)
- `avatarSize` (string)
- `excludeConnectUsers` (boolean)

### getuserpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accountId` (string)
- `userKey` (string)
- `username` (string)

### deleteuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `accountId` (string)
- `userKey` (string)
- `username` (string)

### getuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `accountId` (string)
- `userKey` (string)
- `username` (string)

### setuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
- `accountId` (string)
- `userKey` (string)
- `username` (string)

### findusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `username` (string)
- `accountId` (string)
- `startAt` (integer)
- `maxResults` (integer)
- `property` (string)

### findusersbyquery

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `startAt` (integer)
- `maxResults` (integer)

### finduserkeysbyquery

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `startAt` (integer)
- `maxResult` (integer)

### finduserswithbrowsepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `username` (string)
- `accountId` (string)
- `issueKey` (string)
- `projectKey` (string)
- `startAt` (integer)
- `maxResults` (integer)

### getallusersdefault

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)

### getallusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)

### createversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `approvers` (array)
- `archived` (boolean)
- `description` (string)
- `driver` (string)
- `expand` (string)
- `id` (string)
- `issuesStatusForFixVersion` (string)
- `moveUnfixedIssuesTo` (string)
- `name` (string)
- `operations` (array)
- `overdue` (boolean)
- `project` (string)
- `projectId` (integer)
- `releaseDate` (string)
- `released` (boolean)
- `self` (string)
- `startDate` (string)
- `userReleaseDate` (string)
- `userStartDate` (string)

### deleteversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `moveFixIssuesTo` (string)
- `moveAffectedIssuesTo` (string)

### getversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (string)

### updateversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `approvers` (array)
- `archived` (boolean)
- `description` (string)
- `driver` (string)
- `expand` (string)
- `b_id` (string)
- `issuesStatusForFixVersion` (string)
- `moveUnfixedIssuesTo` (string)
- `name` (string)
- `operations` (array)
- `overdue` (boolean)
- `project` (string)
- `projectId` (integer)
- `releaseDate` (string)
- `released` (boolean)
- `self` (string)
- `startDate` (string)
- `userReleaseDate` (string)
- `userStartDate` (string)

### mergeversions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `moveIssuesTo` (string)

### moveversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `after` (string)
- `position` (string)

### getversionrelatedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getrelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### createrelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `category` (string)
- `issueId` (integer)
- `relatedWorkId` (string)
- `title` (string)
- `url` (string)

### updaterelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `category` (string)
- `issueId` (integer)
- `relatedWorkId` (string)
- `title` (string)
- `url` (string)

### deleteandreplaceversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `customFieldReplacementList` (array)
- `moveAffectedIssuesTo` (integer)
- `moveFixIssuesTo` (integer)

### getversionunresolvedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### deleterelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `versionId` (string)
- `relatedWorkId` (string)

### deletewebhookbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhookIds` (array)

### getdynamicwebhooksforapp

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)

### registerdynamicwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `url` (string)
- `webhooks` (array)

### getfailedwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `maxResults` (integer)
- `after` (integer)

### refreshwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhookIds` (array)

### getallworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowName` (string)

### createworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `name` (string)
- `statuses` (array)
- `transitions` (array)

### getworkflowtransitionruleconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `types` (array)
- `keys` (array)
- `workflowNames` (array)
- `withTags` (array)
- `draft` (boolean)
- `expand` (string)

### updateworkflowtransitionruleconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflows` (array)

### deleteworkflowtransitionruleconfigurations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflows` (array)

### getworkflowspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `workflowName` (array)
- `expand` (string)
- `queryString` (string)
- `orderBy` (string)
- `isActive` (boolean)

### deleteworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transitionId` (integer)
- `key` (string)
- `workflowName` (string)
- `workflowMode` (string)

### getworkflowtransitionproperties

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transitionId` (integer)
- `includeReservedKeys` (boolean)
- `key` (string)
- `workflowName` (string)
- `workflowMode` (string)

### createworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transitionId` (integer)
- `key` (string)
- `workflowName` (string)
- `workflowMode` (string)
- `id` (string)
- `b_key` (string)
- `value` (string)

### updateworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transitionId` (integer)
- `key` (string)
- `workflowName` (string)
- `workflowMode` (string)
- `id` (string)
- `b_key` (string)
- `value` (string)

### deleteinactiveworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `entityId` (string)

### getworkflowprojectissuetypeusages

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowId` (string)
- `projectId` (integer)
- `nextPageToken` (string)
- `maxResults` (integer)

### getprojectusagesforworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### getworkflowschemeusagesforworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### readworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `useApprovalConfiguration` (boolean)
- `projectAndIssueTypes` (array)
- `workflowIds` (array)
- `workflowNames` (array)

### workflowcapabilities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowId` (string)
- `projectId` (string)
- `issueTypeId` (string)

### createworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `scope` (object)
- `statuses` (array)
- `workflows` (array)

### validatecreateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payload` (object)
- `validationOptions` (object)

### searchworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)
- `expand` (string)
- `queryString` (string)
- `orderBy` (string)
- `scope` (string)
- `isActive` (boolean)

### updateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `statuses` (array)
- `workflows` (array)

### validateupdateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payload` (object)
- `validationOptions` (object)

### getallworkflowschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `startAt` (integer)
- `maxResults` (integer)

### createworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultWorkflow` (string)
- `description` (string)
- `draft` (boolean)
- `id` (integer)
- `issueTypeMappings` (object)
- `issueTypes` (object)
- `lastModified` (string)
- `lastModifiedUser` (string)
- `name` (string)
- `originalDefaultWorkflow` (string)
- `originalIssueTypeMappings` (object)
- `self` (string)
- `updateDraftIfNeeded` (boolean)

### getworkflowschemeprojectassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (array)

### assignschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `projectId` (string)
- `workflowSchemeId` (string)

### readworkflowschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `projectIds` (array)
- `workflowSchemeIds` (array)

### updateschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultWorkflowId` (string)
- `description` (string)
- `id` (string)
- `name` (string)
- `statusMappingsByIssueTypeOverride` (array)
- `statusMappingsByWorkflows` (array)
- `version` (object)
- `workflowsForIssueTypes` (array)

### updateworkflowschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `defaultWorkflowId` (string)
- `id` (string)
- `workflowsForIssueTypes` (array)

### deleteworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `returnDraftIfExists` (boolean)

### updateworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `defaultWorkflow` (string)
- `description` (string)
- `draft` (boolean)
- `b_id` (integer)
- `issueTypeMappings` (object)
- `issueTypes` (object)
- `lastModified` (string)
- `lastModifiedUser` (string)
- `name` (string)
- `originalDefaultWorkflow` (string)
- `originalIssueTypeMappings` (object)
- `self` (string)
- `updateDraftIfNeeded` (boolean)

### createworkflowschemedraftfromparent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### deletedefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `updateDraftIfNeeded` (boolean)

### getdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `returnDraftIfExists` (boolean)

### updatedefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### deleteworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updateworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `defaultWorkflow` (string)
- `description` (string)
- `draft` (boolean)
- `b_id` (integer)
- `issueTypeMappings` (object)
- `issueTypes` (object)
- `lastModified` (string)
- `lastModifiedUser` (string)
- `name` (string)
- `originalDefaultWorkflow` (string)
- `originalIssueTypeMappings` (object)
- `self` (string)
- `updateDraftIfNeeded` (boolean)

### deletedraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### getdraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### updatedraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### deleteworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)

### getworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)

### setworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)
- `b_issueType` (string)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### publishdraftworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `validateOnly` (boolean)
- `statusMappings` (array)

### deletedraftworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)

### getdraftworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)

### updatedraftworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)
- `defaultMapping` (boolean)
- `issueTypes` (array)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### deleteworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)
- `updateDraftIfNeeded` (boolean)

### getworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)
- `returnDraftIfExists` (boolean)

### setworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `issueType` (string)
- `b_issueType` (string)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### deleteworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)
- `updateDraftIfNeeded` (boolean)

### getworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)
- `returnDraftIfExists` (boolean)

### updateworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `workflowName` (string)
- `defaultMapping` (boolean)
- `issueTypes` (array)
- `updateDraftIfNeeded` (boolean)
- `workflow` (string)

### getprojectusagesforworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `workflowSchemeId` (string)
- `nextPageToken` (string)
- `maxResults` (integer)

### getidsofworklogsdeletedsince

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `since` (integer)

### getworklogsforids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (string)
- `ids` (array)

### getidsofworklogsmodifiedsince

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `since` (integer)
- `expand` (string)

### addonpropertiesresource_getaddonproperties_get

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `addonKey` (string)

### addonpropertiesresource_deleteaddonproperty_delete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `addonKey` (string)
- `propertyKey` (string)

### addonpropertiesresource_getaddonproperty_get

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `addonKey` (string)
- `propertyKey` (string)

### addonpropertiesresource_putaddonproperty_put

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `addonKey` (string)
- `propertyKey` (string)

### dynamicmodulesresource_removemodules_delete

**Environment variables**

No environment variables required

**Input schema**

- `moduleKey` (array)

### dynamicmodulesresource_getmodules_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### dynamicmodulesresource_registermodules_post

**Environment variables**

No environment variables required

**Input schema**

- `modules` (array)

### appissuefieldvalueupdateresource_updateissuefields_put

**Environment variables**

No environment variables required

**Input schema**

- `updateValueList` (array)
- `Atlassian-Transfer-Id` (string)

### migrationresource_updateentitypropertiesvalue_put

**Environment variables**

No environment variables required

**Input schema**

- `entityType` (string)
- `Atlassian-Transfer-Id` (string)

### migrationresource_workflowrulesearch_post

**Environment variables**

No environment variables required

**Input schema**

- `expand` (string)
- `ruleIds` (array)
- `workflowEntityId` (string)
- `Atlassian-Transfer-Id` (string)

### serviceregistryresource_services_get

**Environment variables**

No environment variables required

**Input schema**

- `serviceIds` (array)

### deleteforgeappproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)

### putforgeappproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `propertyKey` (string)
