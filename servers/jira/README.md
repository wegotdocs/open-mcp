# @open-mcp/jira

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add jira \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=... \
  --USERNAME_PASSWORD_BASE64=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add jira \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=... \
  --USERNAME_PASSWORD_BASE64=...
```

### Other

```bash
npx @open-mcp/config add jira \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=... \
  --USERNAME_PASSWORD_BASE64=...
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

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/jira
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/jira`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### getbanner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setbanner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "isDismissible": z.boolean().describe("Flag indicating if the announcement banner can be dismissed by the user.").optional(),
  "isEnabled": z.boolean().describe("Flag indicating if the announcement banner is enabled or not.").optional(),
  "message": z.string().describe("The text on the announcement banner.").optional(),
  "visibility": z.string().describe("Visibility of the announcement banner. Can be public or private.").optional()
}
```

### getcustomfieldsconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.array(z.number().int()).describe("The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: \`id=10000&id=10001\`. Can't be provided with \`fieldContextId\`, \`issueId\`, \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "fieldContextId": z.array(z.number().int()).describe("The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: \`fieldContextId=10000&fieldContextId=10001\`. Can't be provided with \`id\`, \`issueId\`, \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "issueId": z.number().int().describe("The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "projectKeyOrId": z.string().describe("The ID or key of the project to filter results by. Must be provided with \`issueTypeId\`. Can't be provided with \`issueId\`.").optional(),
  "issueTypeId": z.string().describe("The ID of the issue type to filter results by. Must be provided with \`projectKeyOrId\`. Can't be provided with \`issueId\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "fieldIdsOrKeys": z.array(z.string()).min(1).describe("List of IDs or keys of the custom fields. It can be a mix of IDs and keys in the same query.")
}
```

### updatemultiplecustomfieldvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "generateChangelog": z.boolean().describe("Whether to generate a changelog for this update.").optional(),
  "updates": z.array(z.object({ "customField": z.string().describe("The ID or key of the custom field. For example, \`customfield_10010\`."), "issueIds": z.array(z.number().int()).describe("The list of issue IDs."), "value": z.any().describe("The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:\n\n *  \`string\` the value must be a string.\n *  \`number\` the value must be a number.\n *  \`datetime\` the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, \`\"2023-01-18T12:00:00-03:00\"\` or \`\"2023-01-18T12:00:00.000Z\"\`. However, the milliseconds part is ignored.\n *  \`user\` the value must be an object that contains the \`accountId\` field.\n *  \`group\` the value must be an object that contains the group \`name\` or \`groupId\` field. Because group names can change, we recommend using \`groupId\`.\n\nA list of appropriate values must be provided if the field is of the \`list\` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).") }).strict().describe("A custom field and its new value with a list of issue to update.")).optional()
}
```

### getcustomfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldIdOrKey": z.string().describe("The ID or key of the custom field, for example \`customfield_10000\`."),
  "id": z.array(z.number().int()).describe("The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: \`id=10000&id=10001\`. Can't be provided with \`fieldContextId\`, \`issueId\`, \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "fieldContextId": z.array(z.number().int()).describe("The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: \`fieldContextId=10000&fieldContextId=10001\`. Can't be provided with \`id\`, \`issueId\`, \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "issueId": z.number().int().describe("The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with \`projectKeyOrId\`, or \`issueTypeId\`.").optional(),
  "projectKeyOrId": z.string().describe("The ID or key of the project to filter results by. Must be provided with \`issueTypeId\`. Can't be provided with \`issueId\`.").optional(),
  "issueTypeId": z.string().describe("The ID of the issue type to filter results by. Must be provided with \`projectKeyOrId\`. Can't be provided with \`issueId\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### updatecustomfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldIdOrKey": z.string().describe("The ID or key of the custom field, for example \`customfield_10000\`."),
  "configurations": z.array(z.object({ "configuration": z.any().describe("The field configuration.").optional(), "fieldContextId": z.string().describe("The ID of the field context the configuration is associated with.").readonly(), "id": z.string().describe("The ID of the configuration."), "schema": z.any().describe("The field value schema.").optional() }).strict().describe("Details of the contextual configuration for a custom field.")).min(1).max(1000).describe("The list of custom field configuration details.")
}
```

### updatecustomfieldvalue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldIdOrKey": z.string().describe("The ID or key of the custom field. For example, \`customfield_10010\`."),
  "generateChangelog": z.boolean().describe("Whether to generate a changelog for this update.").optional(),
  "updates": z.array(z.object({ "issueIds": z.array(z.number().int()).describe("The list of issue IDs."), "value": z.any().describe("The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:\n\n *  \`string\` the value must be a string.\n *  \`number\` the value must be a number.\n *  \`datetime\` the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, \`\"2023-01-18T12:00:00-03:00\"\` or \`\"2023-01-18T12:00:00.000Z\"\`. However, the milliseconds part is ignored.\n *  \`user\` the value must be an object that contains the \`accountId\` field.\n *  \`group\` the value must be an object that contains the group \`name\` or \`groupId\` field. Because group names can change, we recommend using \`groupId\`.\n\nA list of appropriate values must be provided if the field is of the \`list\` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).") }).strict().describe("A list of issue IDs and the value to update a custom field to.")).describe("The list of custom field update details.").optional()
}
```

### getapplicationproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key of the application property.").optional(),
  "permissionLevel": z.string().describe("The permission level of all items being returned in the list.").optional(),
  "keyFilter": z.string().describe("When a \`key\` isn't provided, this filters the list of results by the application property \`key\` using a regular expression. For example, using \`jira.lf.*\` will return all application properties with keys that start with *jira.lf.*.").optional()
}
```

### getadvancedsettings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setapplicationproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The key of the application property to update."),
  "b_id": z.string().describe("The ID of the application property.").optional(),
  "value": z.string().describe("The new value.").optional()
}
```

### getallapplicationroles

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getapplicationrole

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.")
}
```

### getattachmentcontent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment."),
  "redirect": z.boolean().describe("Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to \`false\` to avoid making multiple requests to download the attachment.").optional()
}
```

### getattachmentmeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getattachmentthumbnail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment."),
  "redirect": z.boolean().describe("Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to \`false\` to avoid making multiple requests to download the attachment.").optional(),
  "fallbackToDefault": z.boolean().describe("Whether a default thumbnail is returned when the requested thumbnail is not found.").optional(),
  "width": z.number().int().describe("The maximum width to scale the thumbnail to.").optional(),
  "height": z.number().int().describe("The maximum height to scale the thumbnail to.").optional()
}
```

### removeattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment.")
}
```

### getattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment.")
}
```

### expandattachmentforhumans

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment.")
}
```

### expandattachmentformachines

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the attachment.")
}
```

### getauditrecords

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "offset": z.number().int().describe("The number of records to skip before returning the first result.").optional(),
  "limit": z.number().int().describe("The maximum number of results to return.").optional(),
  "filter": z.string().describe("The strings to match with audit field content, space separated.").optional(),
  "from": z.string().describe("The date and time on or after which returned audit records must have been created. If \`to\` is provided \`from\` must be before \`to\` or no audit records are returned.").optional(),
  "to": z.string().describe("The date and time on or before which returned audit results must have been created. If \`from\` is provided \`to\` must be after \`from\` or no audit records are returned.").optional()
}
```

### getallsystemavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["issuetype","project","user","priority"]).describe("The avatar type.")
}
```

### submitbulkdelete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk deleted. These IDs or keys can be from different projects and issue types."),
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being deleted.\n\nIf \`true\`, dispatches a bulk notification email to users about the updates.").optional()
}
```

### getbulkeditablefields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdsOrKeys": z.string().describe("The IDs or keys of the issues to get editable fields from."),
  "searchText": z.string().describe("(Optional)The text to search for in the editable fields.").optional(),
  "endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(),
  "startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional()
}
```

### submitbulkedit

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "editedFieldsInput": z.string(),
  "selectedActions": z.array(z.string()).describe("List of all the field IDs that are to be bulk edited. Each field ID in this list corresponds to a specific attribute of an issue that is set to be modified in the bulk edit operation. The relevant field ID can be obtained by calling the Bulk Edit Get Fields REST API (documentation available on this page itself)."),
  "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk edited. These IDs or keys can be from different projects and issue types."),
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being edited.\n\nIf \`true\`, dispatches a bulk notification email to users about the updates.").optional()
}
```

### submitbulkmove

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being moved.\n\nIf \`true\`, dispatches a bulk notification email to users about the updates.").optional(),
  "targetToSourcesMapping": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object representing the mapping of issues and data related to destination entities, like fields and statuses, that are required during a bulk move.\n\nThe key is a string that is created by concatenating the following three entities in order, separated by commas. The format is \`<project ID or key>,<issueType ID>,<parent ID or key>\`. It should be unique across mappings provided in the payload. If you provide multiple mappings for the same key, only one will be processed. However, the operation won't fail, so the error may be hard to track down.\n\n *  ***Destination project*** (Required): ID or key of the project to which the issues are being moved.\n *  ***Destination issueType*** (Required): ID of the issueType to which the issues are being moved.\n *  ***Destination parent ID or key*** (Optional): ID or key of the issue which will become the parent of the issues being moved. Only required when the destination issueType is a subtask.").optional()
}
```

### getavailabletransitions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdsOrKeys": z.string().describe("Comma (,) separated Ids or keys of the issues to get transitions available for them."),
  "endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(),
  "startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional()
}
```

### submitbulktransition

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "bulkTransitionInputs": z.array(z.object({ "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of all the issue IDs or keys that are to be bulk transitioned."), "transitionId": z.string().describe("The ID of the transition that is to be performed on the issues.") }).strict()).describe("List of objects and each object has two properties:\n\n *  Issues that will be bulk transitioned.\n *  TransitionId that corresponds to a specific transition of issues that share the same workflow."),
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being transitioned.\n\nIf \`true\`, dispatches a bulk notification email to users about the updates.").optional()
}
```

### submitbulkunwatch

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types.")
}
```

### submitbulkwatch

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types.")
}
```

### getbulkoperationprogress

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "taskId": z.string().describe("The ID of the task.")
}
```

### getbulkchangelogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldIds": z.array(z.string().describe("List of field IDs to filter changelogs")).min(0).max(10).describe("List of field IDs to filter changelogs").optional(),
  "issueIdsOrKeys": z.array(z.string().describe("List of issue IDs/keys to fetch changelogs for")).min(1).max(1000).describe("List of issue IDs/keys to fetch changelogs for"),
  "maxResults": z.number().int().gte(1).lte(10000).describe("The maximum number of items to return per page").optional(),
  "nextPageToken": z.string().describe("The cursor for pagination").optional()
}
```

### getalluserdataclassificationlevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "status": z.array(z.enum(["PUBLISHED","ARCHIVED","DRAFT"]).describe("The status of the project classification.")).describe("Optional set of statuses to filter by.").optional(),
  "orderBy": z.enum(["rank","-rank","+rank"]).describe("Ordering of the results by a given field. If not provided, values will not be sorted.").optional()
}
```

### getcommentsbyids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`renderedBody\` Returns the comment body rendered in HTML.\n *  \`properties\` Returns the comment's properties.").optional(),
  "ids": z.array(z.number().int()).describe("The list of comment IDs. A maximum of 1000 IDs can be specified.")
}
```

### getcommentpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "commentId": z.string().describe("The ID of the comment.")
}
```

### deletecommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "commentId": z.string().describe("The ID of the comment."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### getcommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "commentId": z.string().describe("The ID of the comment."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### setcommentproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "commentId": z.string().describe("The ID of the comment."),
  "propertyKey": z.string().describe("The key of the property. The maximum length is 255 characters.")
}
```

### findcomponentsforprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdsOrKeys": z.array(z.string()).describe("The project IDs and/or project keys (case sensitive).").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  \`description\` Sorts by the component description.\n *  \`name\` Sorts by component name.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Components with a matching \`name\` or \`description\` are returned (case insensitive).").optional()
}
```

### createcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ari": z.string().describe("Compass component's ID. Can't be updated. Not required for creating a Project Component.").readonly().optional(),
  "assignee": z.string().optional(),
  "assigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The nominal user type used to determine the assignee for issues created with this component. See \`realAssigneeType\` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:\n\n *  \`PROJECT_LEAD\` the assignee to any issues created with this component is nominally the lead for the project the component is in.\n *  \`COMPONENT_LEAD\` the assignee to any issues created with this component is nominally the lead for the component.\n *  \`UNASSIGNED\` an assignee is not set for issues created with this component.\n *  \`PROJECT_DEFAULT\` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.\n\nDefault value: \`PROJECT_DEFAULT\`.  \nOptional when creating or updating a component.").optional(),
  "description": z.string().describe("The description for the component. Optional when creating or updating a component.").optional(),
  "id": z.string().describe("The unique identifier for the component.").readonly().optional(),
  "isAssigneeTypeValid": z.boolean().describe("Whether a user is associated with \`assigneeType\`. For example, if the \`assigneeType\` is set to \`COMPONENT_LEAD\` but the component lead is not set, then \`false\` is returned.").readonly().optional(),
  "lead": z.string().optional(),
  "leadAccountId": z.string().max(128).describe("The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "leadUserName": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCompass component's metadata. Can't be updated. Not required for creating a Project Component.").optional(),
  "name": z.string().describe("The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.").optional(),
  "project": z.string().describe("The key of the project the component is assigned to. Required when creating a component. Can't be updated.").optional(),
  "projectId": z.number().int().describe("The ID of the project the component is assigned to.").readonly().optional(),
  "realAssignee": z.string().optional(),
  "realAssigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the \`assigneeType\`. For example, \`assigneeType\` is set to \`COMPONENT_LEAD\` but no component lead is set. This property is set to one of the following values:\n\n *  \`PROJECT_LEAD\` when \`assigneeType\` is \`PROJECT_LEAD\` and the project lead has permission to be assigned issues in the project that the component is in.\n *  \`COMPONENT_LEAD\` when \`assignee\`Type is \`COMPONENT_LEAD\` and the component lead has permission to be assigned issues in the project that the component is in.\n *  \`UNASSIGNED\` when \`assigneeType\` is \`UNASSIGNED\` and Jira is configured to allow unassigned issues.\n *  \`PROJECT_DEFAULT\` when none of the preceding cases are true.").readonly().optional(),
  "self": z.string().url().describe("The URL of the component.").readonly().optional()
}
```

### deletecomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the component."),
  "moveIssuesTo": z.string().describe("The ID of the component to replace the deleted component. If this value is null no replacement is made.").optional()
}
```

### getcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the component.")
}
```

### updatecomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the component."),
  "ari": z.string().describe("Compass component's ID. Can't be updated. Not required for creating a Project Component.").readonly().optional(),
  "assignee": z.string().optional(),
  "assigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The nominal user type used to determine the assignee for issues created with this component. See \`realAssigneeType\` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:\n\n *  \`PROJECT_LEAD\` the assignee to any issues created with this component is nominally the lead for the project the component is in.\n *  \`COMPONENT_LEAD\` the assignee to any issues created with this component is nominally the lead for the component.\n *  \`UNASSIGNED\` an assignee is not set for issues created with this component.\n *  \`PROJECT_DEFAULT\` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.\n\nDefault value: \`PROJECT_DEFAULT\`.  \nOptional when creating or updating a component.").optional(),
  "description": z.string().describe("The description for the component. Optional when creating or updating a component.").optional(),
  "b_id": z.string().describe("The unique identifier for the component.").readonly().optional(),
  "isAssigneeTypeValid": z.boolean().describe("Whether a user is associated with \`assigneeType\`. For example, if the \`assigneeType\` is set to \`COMPONENT_LEAD\` but the component lead is not set, then \`false\` is returned.").readonly().optional(),
  "lead": z.string().optional(),
  "leadAccountId": z.string().max(128).describe("The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "leadUserName": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCompass component's metadata. Can't be updated. Not required for creating a Project Component.").optional(),
  "name": z.string().describe("The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.").optional(),
  "project": z.string().describe("The key of the project the component is assigned to. Required when creating a component. Can't be updated.").optional(),
  "projectId": z.number().int().describe("The ID of the project the component is assigned to.").readonly().optional(),
  "realAssignee": z.string().optional(),
  "realAssigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the \`assigneeType\`. For example, \`assigneeType\` is set to \`COMPONENT_LEAD\` but no component lead is set. This property is set to one of the following values:\n\n *  \`PROJECT_LEAD\` when \`assigneeType\` is \`PROJECT_LEAD\` and the project lead has permission to be assigned issues in the project that the component is in.\n *  \`COMPONENT_LEAD\` when \`assignee\`Type is \`COMPONENT_LEAD\` and the component lead has permission to be assigned issues in the project that the component is in.\n *  \`UNASSIGNED\` when \`assigneeType\` is \`UNASSIGNED\` and Jira is configured to allow unassigned issues.\n *  \`PROJECT_DEFAULT\` when none of the preceding cases are true.").readonly().optional(),
  "self": z.string().url().describe("The URL of the component.").readonly().optional()
}
```

### getcomponentrelatedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the component.")
}
```

### getconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getselectedtimetrackingimplementation

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### selecttimetrackingimplementation

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key for the time tracking provider. For example, *JIRA*."),
  "name": z.string().describe("The name of the time tracking provider. For example, *JIRA provided time tracking*.").optional(),
  "url": z.string().describe("The URL of the configuration page for the time tracking provider app. For example, */example/config/url*. This property is only returned if the \`adminPageKey\` property is set in the module descriptor of the time tracking provider app.").readonly().optional()
}
```

### getavailabletimetrackingimplementations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getsharedtimetrackingconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setsharedtimetrackingconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultUnit": z.enum(["minute","hour","day","week"]).describe("The default unit of time applied to logged time."),
  "timeFormat": z.enum(["pretty","days","hours"]).describe("The format that will appear on an issue's *Time Spent* field."),
  "workingDaysPerWeek": z.number().describe("The number of days in a working week."),
  "workingHoursPerDay": z.number().describe("The number of hours in a working day.")
}
```

### getcustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the custom field option.")
}
```

### getalldashboards

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.enum(["my","favourite"]).describe("The filter applied to the list of dashboards. Valid values are:\n\n *  \`favourite\` Returns dashboards the user has marked as favorite.\n *  \`my\` Returns dashboards owned by the user.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### createdashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "extendAdminPermissions": z.boolean().describe("Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)").optional(),
  "description": z.string().describe("The description of the dashboard.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The edit permissions for the dashboard."),
  "name": z.string().describe("The name of the dashboard."),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The share permissions for the dashboard.")
}
```

### bulkeditdashboards

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "action": z.enum(["changeOwner","changePermission","addPermission","removePermission"]).describe("Allowed action for bulk edit shareable entity"),
  "changeOwnerDetails": z.string().optional(),
  "entityIds": z.array(z.number().int()).describe("The id list of shareable entities to be changed."),
  "extendAdminPermissions": z.boolean().describe("Whether the actions are executed by users with Administer Jira global permission.").optional(),
  "permissionDetails": z.string().optional()
}
```

### getallavailabledashboardgadgets

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getdashboardspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardName": z.string().describe("String used to perform a case-insensitive partial match with \`name\`.").optional(),
  "accountId": z.string().max(128).describe("User account ID used to return dashboards with the matching \`owner.accountId\`. This parameter cannot be used with the \`owner\` parameter.").optional(),
  "owner": z.string().describe("This parameter is deprecated because of privacy changes. Use \`accountId\` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching \`owner.name\`. This parameter cannot be used with the \`accountId\` parameter.").optional(),
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended. Group name used to return dashboards that are shared with a group that matches \`sharePermissions.group.name\`. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("Group ID used to return dashboards that are shared with a group that matches \`sharePermissions.group.groupId\`. This parameter cannot be used with the \`groupname\` parameter.").optional(),
  "projectId": z.number().int().describe("Project ID used to returns dashboards that are shared with a project that matches \`sharePermissions.project.id\`.").optional(),
  "orderBy": z.enum(["description","-description","+description","favorite_count","-favorite_count","+favorite_count","id","-id","+id","is_favorite","-is_favorite","+is_favorite","name","-name","+name","owner","-owner","+owner"]).describe("[Order](#ordering) the results by a field:\n\n *  \`description\` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.\n *  \`favourite_count\` Sorts by dashboard popularity.\n *  \`id\` Sorts by dashboard ID.\n *  \`is_favourite\` Sorts by whether the dashboard is marked as a favorite.\n *  \`name\` Sorts by dashboard name.\n *  \`owner\` Sorts by dashboard owner name.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "status": z.enum(["active","archived","deleted"]).describe("The status to filter by. It may be active, archived or deleted.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`description\` Returns the description of the dashboard.\n *  \`owner\` Returns the owner of the dashboard.\n *  \`viewUrl\` Returns the URL that is used to view the dashboard.\n *  \`favourite\` Returns \`isFavourite\`, an indicator of whether the user has set the dashboard as a favorite.\n *  \`favouritedCount\` Returns \`popularity\`, a count of how many users have set this dashboard as a favorite.\n *  \`sharePermissions\` Returns details of the share permissions defined for the dashboard.\n *  \`editPermissions\` Returns details of the edit permissions defined for the dashboard.\n *  \`isWritable\` Returns whether the current user has permission to edit the dashboard.").optional()
}
```

### getallgadgets

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "moduleKey": z.array(z.string()).describe("The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: \`moduleKey=key:one&moduleKey=key:two\`.").optional(),
  "uri": z.array(z.string()).describe("The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: \`uri=/rest/example/uri/1&uri=/rest/example/uri/2\`.").optional(),
  "gadgetId": z.array(z.number().int()).describe("The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: \`gadgetId=10000&gadgetId=10001\`.").optional()
}
```

### addgadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "color": z.string().describe("The color of the gadget. Should be one of \`blue\`, \`red\`, \`yellow\`, \`green\`, \`cyan\`, \`purple\`, \`gray\`, or \`white\`.").optional(),
  "ignoreUriAndModuleKeyValidation": z.boolean().describe("Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.").optional(),
  "moduleKey": z.string().describe("The module key of the gadget type. Can't be provided with \`uri\`.").optional(),
  "position": z.string().optional(),
  "title": z.string().describe("The title of the gadget.").optional(),
  "uri": z.string().describe("The URI of the gadget type. Can't be provided with \`moduleKey\`.").optional()
}
```

### removegadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "gadgetId": z.number().int().describe("The ID of the gadget.")
}
```

### updategadget

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "gadgetId": z.number().int().describe("The ID of the gadget."),
  "color": z.string().describe("The color of the gadget. Should be one of \`blue\`, \`red\`, \`yellow\`, \`green\`, \`cyan\`, \`purple\`, \`gray\`, or \`white\`.").optional(),
  "position": z.string().optional(),
  "title": z.string().describe("The title of the gadget.").optional()
}
```

### getdashboarditempropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.string().describe("The ID of the dashboard."),
  "itemId": z.string().describe("The ID of the dashboard item.")
}
```

### deletedashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.string().describe("The ID of the dashboard."),
  "itemId": z.string().describe("The ID of the dashboard item."),
  "propertyKey": z.string().describe("The key of the dashboard item property.")
}
```

### getdashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.string().describe("The ID of the dashboard."),
  "itemId": z.string().describe("The ID of the dashboard item."),
  "propertyKey": z.string().describe("The key of the dashboard item property.")
}
```

### setdashboarditemproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dashboardId": z.string().describe("The ID of the dashboard."),
  "itemId": z.string().describe("The ID of the dashboard item."),
  "propertyKey": z.string().describe("The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \"config\", the request body's JSON must be an object with all keys and values as strings.")
}
```

### deletedashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the dashboard.")
}
```

### getdashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the dashboard.")
}
```

### updatedashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the dashboard to update."),
  "extendAdminPermissions": z.boolean().describe("Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)").optional(),
  "description": z.string().describe("The description of the dashboard.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The edit permissions for the dashboard."),
  "name": z.string().describe("The name of the dashboard."),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The share permissions for the dashboard.")
}
```

### copydashboard

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "extendAdminPermissions": z.boolean().describe("Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)").optional(),
  "description": z.string().describe("The description of the dashboard.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The edit permissions for the dashboard."),
  "name": z.string().describe("The name of the dashboard."),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The share permissions for the dashboard.")
}
```

### getpolicy

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpolicies

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ids": z.string().describe("A list of up to 50 project identifiers. This parameter accepts a comma-separated list.").optional()
}
```

### getevents

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### analyseexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "check": z.enum(["syntax","type","complexity"]).describe("The check to perform:\n\n *  \`syntax\` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.\n *  \`type\` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.\n *  \`complexity\` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute.").optional(),
  "contextVariables": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nContext variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as \`issue\` or \`project\`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.").optional(),
  "expressions": z.array(z.string().describe("The list of Jira expressions to analyse.")).describe("The list of Jira expressions to analyse.")
}
```

### evaluatejiraexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts \`meta.complexity\` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.").optional(),
  "context": z.string().optional(),
  "expression": z.string().describe("The Jira expression to evaluate.")
}
```

### evaluatejsisjiraexpression

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts \`meta.complexity\` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.").optional(),
  "context": z.string().optional(),
  "expression": z.string().describe("The Jira expression to evaluate.")
}
```

### getfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createcustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the custom field, which is displayed in Jira.").optional(),
  "name": z.string().describe("The name of the custom field, which is displayed in Jira. This is not the unique identifier."),
  "searcherKey": z.enum(["com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:daterange","com.atlassian.jira.plugin.system.customfieldtypes:datetimerange","com.atlassian.jira.plugin.system.customfieldtypes:exactnumber","com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher","com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher","com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher","com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:numberrange","com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:textsearcher","com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher","com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"]).describe("The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.  \nThe search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):\n\n *  \`cascadingselect\`: \`cascadingselectsearcher\`\n *  \`datepicker\`: \`daterange\`\n *  \`datetime\`: \`datetimerange\`\n *  \`float\`: \`exactnumber\` or \`numberrange\`\n *  \`grouppicker\`: \`grouppickersearcher\`\n *  \`importid\`: \`exactnumber\` or \`numberrange\`\n *  \`labels\`: \`labelsearcher\`\n *  \`multicheckboxes\`: \`multiselectsearcher\`\n *  \`multigrouppicker\`: \`multiselectsearcher\`\n *  \`multiselect\`: \`multiselectsearcher\`\n *  \`multiuserpicker\`: \`userpickergroupsearcher\`\n *  \`multiversion\`: \`versionsearcher\`\n *  \`project\`: \`projectsearcher\`\n *  \`radiobuttons\`: \`multiselectsearcher\`\n *  \`readonlyfield\`: \`textsearcher\`\n *  \`select\`: \`multiselectsearcher\`\n *  \`textarea\`: \`textsearcher\`\n *  \`textfield\`: \`textsearcher\`\n *  \`url\`: \`exacttextsearcher\`\n *  \`userpicker\`: \`userpickergroupsearcher\`\n *  \`version\`: \`versionsearcher\`\n\nIf no searcher is provided, the field isn't searchable. However, [Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) have a searcher set automatically, so are always searchable.").optional(),
  "type": z.string().describe("The type of the custom field. These built-in custom field types are available:\n\n *  \`cascadingselect\`: Enables values to be selected from two levels of select lists (value: \`com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect\`)\n *  \`datepicker\`: Stores a date using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:datepicker\`)\n *  \`datetime\`: Stores a date with a time component (value: \`com.atlassian.jira.plugin.system.customfieldtypes:datetime\`)\n *  \`float\`: Stores and validates a numeric (floating point) input (value: \`com.atlassian.jira.plugin.system.customfieldtypes:float\`)\n *  \`grouppicker\`: Stores a user group using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:grouppicker\`)\n *  \`importid\`: A read-only field that stores the ID the issue had in the system it was imported from (value: \`com.atlassian.jira.plugin.system.customfieldtypes:importid\`)\n *  \`labels\`: Stores labels (value: \`com.atlassian.jira.plugin.system.customfieldtypes:labels\`)\n *  \`multicheckboxes\`: Stores multiple values using checkboxes (value: \`\`)\n *  \`multigrouppicker\`: Stores multiple user groups using a picker control (value: \`\`)\n *  \`multiselect\`: Stores multiple values using a select list (value: \`com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes\`)\n *  \`multiuserpicker\`: Stores multiple users using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker\`)\n *  \`multiversion\`: Stores multiple versions from the versions available in a project using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:multiversion\`)\n *  \`project\`: Stores a project from a list of projects that the user is permitted to view (value: \`com.atlassian.jira.plugin.system.customfieldtypes:project\`)\n *  \`radiobuttons\`: Stores a value using radio buttons (value: \`com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons\`)\n *  \`readonlyfield\`: Stores a read-only text value, which can only be populated via the API (value: \`com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield\`)\n *  \`select\`: Stores a value from a configurable list of options (value: \`com.atlassian.jira.plugin.system.customfieldtypes:select\`)\n *  \`textarea\`: Stores a long text string using a multiline text area (value: \`com.atlassian.jira.plugin.system.customfieldtypes:textarea\`)\n *  \`textfield\`: Stores a text string using a single-line text box (value: \`com.atlassian.jira.plugin.system.customfieldtypes:textfield\`)\n *  \`url\`: Stores a URL (value: \`com.atlassian.jira.plugin.system.customfieldtypes:url\`)\n *  \`userpicker\`: Stores a user using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:userpicker\`)\n *  \`version\`: Stores a version using a picker control (value: \`com.atlassian.jira.plugin.system.customfieldtypes:version\`)\n\nTo create a field based on a [Forge custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-), use the ID of the Forge custom field type as the value. For example, \`ari:cloud:ecosystem::extension/e62f20a2-4b61-4dbe-bfb9-9a88b5e3ac84/548c5df1-24aa-4f7c-bbbb-3038d947cb05/static/my-cf-type-key\`.")
}
```

### removeassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "associationContexts": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Field association for example PROJECT\\_ID.")).describe("Contexts to associate/unassociate the fields with."),
  "fields": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Identifier for a field for example FIELD\\_ID.")).describe("Fields to associate/unassociate with projects.")
}
```

### createassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "associationContexts": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Field association for example PROJECT\\_ID.")).describe("Contexts to associate/unassociate the fields with."),
  "fields": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Identifier for a field for example FIELD\\_ID.")).describe("Fields to associate/unassociate with projects.")
}
```

### getfieldspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "type": z.array(z.enum(["custom","system"])).describe("The type of fields to search.").optional(),
  "id": z.array(z.string()).describe("The IDs of the custom fields to return or, where \`query\` is specified, filter.").optional(),
  "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(),
  "orderBy": z.enum(["contextsCount","-contextsCount","+contextsCount","lastUsed","-lastUsed","+lastUsed","name","-name","+name","screensCount","-screensCount","+screensCount","projectsCount","-projectsCount","+projectsCount"]).describe("[Order](#ordering) the results by:\n\n *  \`contextsCount\` sorts by the number of contexts related to a field\n *  \`lastUsed\` sorts by the date when the value of the field last changed\n *  \`name\` sorts by the field name\n *  \`screensCount\` sorts by the number of screens related to a field").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`key\` returns the key for each field\n *  \`stableId\` returns the stableId for each field\n *  \`lastUsed\` returns the date when the value of the field last changed\n *  \`screensCount\` returns the number of screens related to a field\n *  \`contextsCount\` returns the number of contexts related to a field\n *  \`isLocked\` returns information about whether the field is locked\n *  \`searcherKey\` returns the searcher key for each custom field").optional(),
  "projectIds": z.array(z.number().int()).optional()
}
```

### gettrashedfieldspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).optional(),
  "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(),
  "expand": z.enum(["name","-name","+name","trashDate","-trashDate","+trashDate","plannedDeletionDate","-plannedDeletionDate","+plannedDeletionDate","projectsCount","-projectsCount","+projectsCount"]).optional(),
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  \`name\` sorts by the field name\n *  \`trashDate\` sorts by the date the field was moved to the trash\n *  \`plannedDeletionDate\` sorts by the planned deletion date").optional()
}
```

### updatecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "description": z.string().describe("The description of the custom field. The maximum length is 40000 characters.").optional(),
  "name": z.string().describe("The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters.").optional(),
  "searcherKey": z.enum(["com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:daterange","com.atlassian.jira.plugin.system.customfieldtypes:datetimerange","com.atlassian.jira.plugin.system.customfieldtypes:exactnumber","com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher","com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher","com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher","com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:numberrange","com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:textsearcher","com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher","com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"]).describe("The searcher that defines the way the field is searched in Jira. It can be set to \`null\`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):\n\n *  \`cascadingselect\`: \`cascadingselectsearcher\`\n *  \`datepicker\`: \`daterange\`\n *  \`datetime\`: \`datetimerange\`\n *  \`float\`: \`exactnumber\` or \`numberrange\`\n *  \`grouppicker\`: \`grouppickersearcher\`\n *  \`importid\`: \`exactnumber\` or \`numberrange\`\n *  \`labels\`: \`labelsearcher\`\n *  \`multicheckboxes\`: \`multiselectsearcher\`\n *  \`multigrouppicker\`: \`multiselectsearcher\`\n *  \`multiselect\`: \`multiselectsearcher\`\n *  \`multiuserpicker\`: \`userpickergroupsearcher\`\n *  \`multiversion\`: \`versionsearcher\`\n *  \`project\`: \`projectsearcher\`\n *  \`radiobuttons\`: \`multiselectsearcher\`\n *  \`readonlyfield\`: \`textsearcher\`\n *  \`select\`: \`multiselectsearcher\`\n *  \`textarea\`: \`textsearcher\`\n *  \`textfield\`: \`textsearcher\`\n *  \`url\`: \`exacttextsearcher\`\n *  \`userpicker\`: \`userpickergroupsearcher\`\n *  \`version\`: \`versionsearcher\`").optional()
}
```

### getcontextsforfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "isAnyIssueType": z.boolean().describe("Whether to return contexts that apply to all issue types.").optional(),
  "isGlobalContext": z.boolean().describe("Whether to return contexts that apply to all projects.").optional(),
  "contextId": z.array(z.number().int()).describe("The list of context IDs. To include multiple contexts, separate IDs with ampersand: \`contextId=10000&contextId=10001\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### createcustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "description": z.string().describe("The description of the context.").optional(),
  "id": z.string().describe("The ID of the context.").readonly().optional(),
  "issueTypeIds": z.array(z.string()).describe("The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.").optional(),
  "name": z.string().describe("The name of the context."),
  "projectIds": z.array(z.string()).describe("The list of project IDs associated with the context. If the list is empty, the context is global.").optional()
}
```

### getdefaultvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field, for example \`customfield\\_10000\`."),
  "contextId": z.array(z.number().int()).describe("The IDs of the contexts.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### setdefaultvalues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "defaultValues": z.array(z.record(z.never()).and(z.object({ "cascadingOptionId": z.string().describe("The ID of the default cascading option.").optional(), "contextId": z.string().describe("The ID of the context."), "optionId": z.string().describe("The ID of the default option."), "type": z.string() }).describe("The default value for a cascading select custom field."))).optional()
}
```

### getissuetypemappingsforcontexts

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.array(z.number().int()).describe("The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, \`contextId=10001&contextId=10002\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### getcustomfieldcontextsforprojectsandissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "mappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "projectId": z.string().describe("The ID of the project.") }).strict().describe("The project and issue type mapping.")).describe("The project and issue type mappings.")
}
```

### getprojectcontextmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field, for example \`customfield\\_10000\`."),
  "contextId": z.array(z.number().int()).describe("The list of context IDs. To include multiple context, separate IDs with ampersand: \`contextId=10000&contextId=10001\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### deletecustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context.")
}
```

### updatecustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "description": z.string().describe("The description of the custom field context. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the custom field context. The name must be unique. The maximum length is 255 characters.").optional()
}
```

### addissuetypestocontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}
```

### removeissuetypesfromcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}
```

### getoptionsforcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "optionId": z.number().int().describe("The ID of the option.").optional(),
  "onlyOptions": z.boolean().describe("Whether only options are returned.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### createcustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "optionId": z.string().describe("For cascading options, the ID of a parent option.").optional(), "value": z.string().describe("The value of the custom field option.") }).strict().describe("Details of a custom field option to create.")).describe("Details of options to create.").optional()
}
```

### updatecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "id": z.string().describe("The ID of the custom field option."), "value": z.string().describe("The value of the custom field option.").optional() }).strict().describe("Details of a custom field option for a context.")).describe("Details of the options to update.").optional()
}
```

### reordercustomfieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "after": z.string().describe("The ID of the custom field option or cascading option to place the moved options after. Required if \`position\` isn't provided.").optional(),
  "customFieldOptionIds": z.array(z.string()).describe("A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both."),
  "position": z.enum(["First","Last"]).describe("The position the custom field options should be moved to. Required if \`after\` isn't provided.").optional()
}
```

### deletecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context from which an option should be deleted."),
  "optionId": z.number().int().describe("The ID of the option to delete.")
}
```

### replacecustomfieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "optionId": z.number().int().describe("The ID of the option to be deselected."),
  "contextId": z.number().int().describe("The ID of the context."),
  "replaceWith": z.number().int().describe("The ID of the option that will replace the currently selected option.").optional(),
  "jql": z.string().describe("A JQL query that specifies the issues to be updated. For example, *project=10000*.").optional()
}
```

### assignprojectstocustomfieldcontext

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "projectIds": z.array(z.string()).describe("The IDs of projects.")
}
```

### removecustomfieldcontextfromprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "projectIds": z.array(z.string()).describe("The IDs of projects.")
}
```

### getcontextsforfielddeprecated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the field to return contexts for."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### getscreensforfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the field to return screens for."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts \`tab\` which returns details about the screen tabs the field is used in.").optional()
}
```

### getallissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### createissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the projects the option is available in.").optional(),
  "properties": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.").optional(),
  "value": z.string().describe("The option's name, which is displayed in Jira.")
}
```

### getselectableissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.number().int().describe("Filters the results to options that are only available in the specified project.").optional()
}
```

### getvisibleissuefieldoptions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.number().int().describe("Filters the results to options that are only available in the specified project.").optional()
}
```

### deleteissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "optionId": z.number().int().describe("The ID of the option to be deleted.")
}
```

### getissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "optionId": z.number().int().describe("The ID of the option to be returned.")
}
```

### updateissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "optionId": z.number().int().describe("The ID of the option to be updated."),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the projects the option is available in.").optional(),
  "id": z.number().int().describe("The unique identifier for the option. This is only unique within the select field's set of options."),
  "properties": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module.").optional(),
  "value": z.string().describe("The option's name, which is displayed in Jira.")
}
```

### replaceissuefieldoption

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the \`fieldKey\` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the \`jiraIssueFields\` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in \`key\`. For example, \`\"key\": \"teams-add-on__team-issue-field\"\`"),
  "optionId": z.number().int().describe("The ID of the option to be deselected."),
  "replaceWith": z.number().int().describe("The ID of the option that will replace the currently selected option.").optional(),
  "jql": z.string().describe("A JQL query that specifies the issues to be updated. For example, *project=10000*.").optional(),
  "overrideScreenSecurity": z.boolean().describe("Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional()
}
```

### deletecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of a custom field.")
}
```

### restorecustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of a custom field.")
}
```

### trashcustomfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of a custom field.")
}
```

### getallfieldconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional(),
  "isDefault": z.boolean().describe("If *true* returns default field configurations only.").optional(),
  "query": z.string().describe("The query string used to match against field configuration names and descriptions.").optional()
}
```

### createfieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().max(255).describe("The description of the field configuration.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration. Must be unique.")
}
```

### deletefieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration.")
}
```

### updatefieldconfiguration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration."),
  "description": z.string().max(255).describe("The description of the field configuration.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration. Must be unique.")
}
```

### getfieldconfigurationitems

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### updatefieldconfigurationitems

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration."),
  "fieldConfigurationItems": z.array(z.object({ "description": z.string().describe("The description of the field within the field configuration.").optional(), "id": z.string().describe("The ID of the field within the field configuration."), "isHidden": z.boolean().describe("Whether the field is hidden in the field configuration.").optional(), "isRequired": z.boolean().describe("Whether the field is required in the field configuration.").optional(), "renderer": z.string().describe("The renderer type for the field within the field configuration.").optional() }).strict().describe("A field within a field configuration.")).describe("Details of fields in a field configuration.")
}
```

### getallfieldconfigurationschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional()
}
```

### createfieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().max(1024).describe("The description of the field configuration scheme.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration scheme. The name must be unique.")
}
```

### getfieldconfigurationschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "fieldConfigurationSchemeId": z.array(z.number().int()).min(1).max(50).describe("The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: \`fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001\`.").optional()
}
```

### getfieldconfigurationschemeprojectmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.array(z.number().int()).describe("The list of project IDs. To include multiple projects, separate IDs with ampersand: \`projectId=10000&projectId=10001\`.")
}
```

### assignfieldconfigurationschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldConfigurationSchemeId": z.string().describe("The ID of the field configuration scheme. If the field configuration scheme ID is \`null\`, the operation assigns the default field configuration scheme.").optional(),
  "projectId": z.string().describe("The ID of the project.")
}
```

### deletefieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration scheme.")
}
```

### updatefieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "description": z.string().max(1024).describe("The description of the field configuration scheme.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration scheme. The name must be unique.")
}
```

### setfieldconfigurationschememapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "mappings": z.array(z.object({ "fieldConfigurationId": z.string().describe("The ID of the field configuration."), "issueTypeId": z.string().describe("The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request.") }).strict().describe("The field configuration to issue type mapping.")).describe("Field configuration to issue type mappings.")
}
```

### removeissuetypesfromglobalfieldconfigurationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs.")
}
```

### createfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "approximateLastUsed": z.string().datetime({ offset: true }).describe("\\[Experimental\\] Approximate last used time. Returns the date and time when the filter was last used. Returns \`null\` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.").readonly().optional(),
  "description": z.string().describe("A description of the filter.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that can edit the filter.").optional(),
  "favourite": z.boolean().describe("Whether the filter is selected as a favorite.").optional(),
  "favouritedCount": z.number().int().describe("The count of how many users have selected this filter as a favorite, including the filter owner.").readonly().optional(),
  "id": z.string().describe("The unique identifier for the filter.").readonly().optional(),
  "jql": z.string().describe("The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.").optional(),
  "name": z.string().describe("The name of the filter. Must be unique."),
  "owner": z.string().optional(),
  "searchUrl": z.string().url().describe("A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.").readonly().optional(),
  "self": z.string().url().describe("The URL of the filter.").readonly().optional(),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that the filter is shared with.").optional(),
  "sharedUsers": z.string().optional(),
  "subscriptions": z.string().optional(),
  "viewUrl": z.string().url().describe("A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.").readonly().optional()
}
```

### getdefaultsharescope

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setdefaultsharescope

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "scope": z.enum(["GLOBAL","AUTHENTICATED","PRIVATE"]).describe("The scope of the default sharing for new filters and dashboards:\n\n *  \`AUTHENTICATED\` Shared with all logged-in users.\n *  \`GLOBAL\` Shared with all logged-in users. This shows as \`AUTHENTICATED\` in the response.\n *  \`PRIVATE\` Not shared with any users.")
}
```

### getfavouritefilters

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional()
}
```

### getmyfilters

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional(),
  "includeFavourites": z.boolean().describe("Include the user's favorite filters in the response.").optional()
}
```

### getfilterspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filterName": z.string().describe("String used to perform a case-insensitive partial match with \`name\`.").optional(),
  "accountId": z.string().min(0).max(128).describe("User account ID used to return filters with the matching \`owner.accountId\`. This parameter cannot be used with \`owner\`.").optional(),
  "owner": z.string().describe("This parameter is deprecated because of privacy changes. Use \`accountId\` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching \`owner.name\`. This parameter cannot be used with \`accountId\`.").optional(),
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches \`sharePermissions.group.groupname\`. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("Group ID used to returns filters that are shared with a group that matches \`sharePermissions.group.groupId\`. This parameter cannot be used with the \`groupname\` parameter.").optional(),
  "projectId": z.number().int().describe("Project ID used to returns filters that are shared with a project that matches \`sharePermissions.project.id\`.").optional(),
  "id": z.array(z.number().int()).describe("The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`. Do not exceed 200 filter IDs.").optional(),
  "orderBy": z.enum(["description","-description","+description","favourite_count","-favourite_count","+favourite_count","id","-id","+id","is_favourite","-is_favourite","+is_favourite","name","-name","+name","owner","-owner","+owner","is_shared","-is_shared","+is_shared"]).describe("[Order](#ordering) the results by a field:\n\n *  \`description\` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.\n *  \`favourite_count\` Sorts by the count of how many users have this filter as a favorite.\n *  \`is_favourite\` Sorts by whether the filter is marked as a favorite.\n *  \`id\` Sorts by filter ID.\n *  \`name\` Sorts by filter name.\n *  \`owner\` Sorts by the ID of the filter owner.\n *  \`is_shared\` Sorts by whether the filter is shared.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`description\` Returns the description of the filter.\n *  \`favourite\` Returns an indicator of whether the user has set the filter as a favorite.\n *  \`favouritedCount\` Returns a count of how many users have set this filter as a favorite.\n *  \`jql\` Returns the JQL query that the filter uses.\n *  \`owner\` Returns the owner of the filter.\n *  \`searchUrl\` Returns a URL to perform the filter's JQL query.\n *  \`sharePermissions\` Returns the share permissions defined for the filter.\n *  \`editPermissions\` Returns the edit permissions defined for the filter.\n *  \`isWritable\` Returns whether the current user has permission to edit the filter.\n *  \`approximateLastUsed\` \\[Experimental\\] Returns the approximate date and time when the filter was last evaluated.\n *  \`subscriptions\` Returns the users that are subscribed to the filter.\n *  \`viewUrl\` Returns a URL to view the filter.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "isSubstringMatch": z.boolean().describe("When \`true\` this will perform a case-insensitive substring match for the provided \`filterName\`. When \`false\` the filter name will be searched using [full text search syntax](https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-using-the-text-field/).").optional()
}
```

### deletefilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter to delete.")
}
```

### getfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter to return."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional()
}
```

### updatefilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter to update."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "approximateLastUsed": z.string().datetime({ offset: true }).describe("\\[Experimental\\] Approximate last used time. Returns the date and time when the filter was last used. Returns \`null\` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.").readonly().optional(),
  "description": z.string().describe("A description of the filter.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that can edit the filter.").optional(),
  "favourite": z.boolean().describe("Whether the filter is selected as a favorite.").optional(),
  "favouritedCount": z.number().int().describe("The count of how many users have selected this filter as a favorite, including the filter owner.").readonly().optional(),
  "b_id": z.string().describe("The unique identifier for the filter.").readonly().optional(),
  "jql": z.string().describe("The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.").optional(),
  "name": z.string().describe("The name of the filter. Must be unique."),
  "owner": z.string().optional(),
  "searchUrl": z.string().url().describe("A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.").readonly().optional(),
  "self": z.string().url().describe("The URL of the filter.").readonly().optional(),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  \`user\` Shared with a user.\n *  \`group\` Shared with a group. If set in a request, then specify \`sharePermission.group\` as well.\n *  \`project\` Shared with a project. If set in a request, then specify \`sharePermission.project\` as well.\n *  \`projectRole\` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with \`projectId\` and \`projectRoleId\`.\n *  \`global\` Shared globally. If set in a request, no other \`sharePermission\` properties need to be specified.\n *  \`loggedin\` Shared with all logged-in users. Note: This value is set in a request by specifying \`authenticated\` as the \`type\`.\n *  \`project-unknown\` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that the filter is shared with.").optional(),
  "sharedUsers": z.string().optional(),
  "subscriptions": z.string().optional(),
  "viewUrl": z.string().url().describe("A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.").readonly().optional()
}
```

### resetcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter.")
}
```

### getcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter.")
}
```

### setcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "columns": z.array(z.string()).optional()
}
```

### deletefavouriteforfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional()
}
```

### setfavouriteforfilter

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`sharedUsers\` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify \`sharedUsers\`, then the \`sharedUsers\` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 users, use \`?expand=sharedUsers[1001:2000]\`.\n *  \`subscriptions\` Returns the users that are subscribed to the filter. If you don't specify \`subscriptions\`, the \`subscriptions\` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append \`[start-index:end-index]\` to the expand request. For example, to access the next 1000 subscriptions, use \`?expand=subscriptions[1001:2000]\`.").optional()
}
```

### changefilterowner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter to update."),
  "accountId": z.string().describe("The account ID of the new owner.")
}
```

### getsharepermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter.")
}
```

### addsharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "accountId": z.string().describe("The user account ID that the filter is shared with. For a request, specify the \`accountId\` property for the user.").optional(),
  "groupId": z.string().describe("The ID of the group, which uniquely identifies the group across all Atlassian products.For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. Cannot be provided with \`groupname\`.").optional(),
  "groupname": z.string().describe("The name of the group to share the filter with. Set \`type\` to \`group\`. Please note that the name of a group is mutable, to reliably identify a group use \`groupId\`.").optional(),
  "projectId": z.string().describe("The ID of the project to share the filter with. Set \`type\` to \`project\`.").optional(),
  "projectRoleId": z.string().describe("The ID of the project role to share the filter with. Set \`type\` to \`projectRole\` and the \`projectId\` for the project that the role is in.").optional(),
  "rights": z.number().int().describe("The rights for the share permission.").optional(),
  "type": z.enum(["user","project","group","projectRole","global","authenticated"]).describe("The type of the share permission.Specify the type as follows:\n\n *  \`user\` Share with a user.\n *  \`group\` Share with a group. Specify \`groupname\` as well.\n *  \`project\` Share with a project. Specify \`projectId\` as well.\n *  \`projectRole\` Share with a project role in a project. Specify \`projectId\` and \`projectRoleId\` as well.\n *  \`global\` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.\n *  \`authenticated\` Share with all logged-in users. This shows as \`loggedin\` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.")
}
```

### deletesharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "permissionId": z.number().int().describe("The ID of the share permission.")
}
```

### getsharepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the filter."),
  "permissionId": z.number().int().describe("The ID of the share permission.")
}
```

### removegroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupname": z.string().optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the \`groupname\` parameter.").optional(),
  "swapGroup": z.string().describe("As a group's name can change, use of \`swapGroupId\` is recommended to identify a group.  \nThe group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the \`swapGroupId\` parameter.").optional(),
  "swapGroupId": z.string().describe("The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the \`swapGroup\` parameter.").optional()
}
```

### getgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the \`groupName\` parameter.").optional(),
  "expand": z.string().describe("List of fields to expand.").optional()
}
```

### creategroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string().describe("The name of the group.")
}
```

### bulkgetgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "groupId": z.array(z.string()).describe("The ID of a group. To specify multiple IDs, pass multiple \`groupId\` parameters. For example, \`groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5\`.").optional(),
  "groupName": z.array(z.string()).describe("The name of a group. To specify multiple names, pass multiple \`groupName\` parameters. For example, \`groupName=administrators&groupName=jira-software-users\`.").optional(),
  "accessType": z.string().describe("The access level of a group. Valid values: 'site-admin', 'admin', 'user'.").optional(),
  "applicationKey": z.string().describe("The application key of the product user groups to search for. Valid values: 'jira-servicedesk', 'jira-software', 'jira-product-discovery', 'jira-core'.").optional()
}
```

### getusersfromgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the \`groupName\` parameter.").optional(),
  "includeInactiveUsers": z.boolean().describe("Include inactive users.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page (number should be between 1 and 50).").optional()
}
```

### removeuserfromgroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the \`groupName\` parameter.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.")
}
```

### addusertogroup

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupname": z.string().describe("As a group's name can change, use of \`groupId\` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the \`groupId\` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the \`groupName\` parameter.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "name": z.string().describe("This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### findgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().describe("This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).").optional(),
  "query": z.string().describe("The string to find in group names.").optional(),
  "exclude": z.array(z.string()).describe("As a group's name can change, use of \`excludeGroupIds\` is recommended to identify a group.  \nA group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, \`exclude=group1&exclude=group2\`. This parameter cannot be used with the \`excludeGroupIds\` parameter.").optional(),
  "excludeId": z.array(z.string()).describe("A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, \`excludeId=group1-id&excludeId=group2-id\`. This parameter cannot be used with the \`excludeGroups\` parameter.").optional(),
  "maxResults": z.number().int().describe("The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property \`jira.ajax.autocomplete.limit\`.").optional(),
  "caseInsensitive": z.boolean().describe("Whether the search for groups should be case insensitive.").optional(),
  "userName": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### findusersandgroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("The search string."),
  "maxResults": z.number().int().describe("The maximum number of items to return in each list.").optional(),
  "showAvatar": z.boolean().describe("Whether the user avatar should be returned. If an invalid value is provided, the default value is used.").optional(),
  "fieldId": z.string().describe("The custom field ID of the field this request is for.").optional(),
  "projectId": z.array(z.string()).describe("The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, \`projectId=10000&projectId=10001\`. This parameter is only used when \`fieldId\` is present.").optional(),
  "issueTypeId": z.array(z.string()).describe("The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, \`issueTypeId=10000&issueTypeId=10001\`. Special values, such as \`-1\` (all standard issue types) and \`-2\` (all subtask issue types), are supported. This parameter is only used when \`fieldId\` is present.").optional(),
  "avatarSize": z.enum(["xsmall","xsmall@2x","xsmall@3x","small","small@2x","small@3x","medium","medium@2x","medium@3x","large","large@2x","large@3x","xlarge","xlarge@2x","xlarge@3x","xxlarge","xxlarge@2x","xxlarge@3x","xxxlarge","xxxlarge@2x","xxxlarge@3x"]).describe("The size of the avatar to return. If an invalid value is provided, the default value is used.").optional(),
  "caseInsensitive": z.boolean().describe("Whether the search for groups should be case insensitive.").optional(),
  "excludeConnectAddons": z.boolean().describe("Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.").optional()
}
```

### getlicense

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "updateHistory": z.boolean().describe("Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen.").optional(),
  "fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nList of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use \`update\`. Fields included in here cannot be included in \`update\`.").optional(),
  "historyMetadata": z.string().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(),
  "transition": z.string().optional(),
  "update": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in \`fields\`.").optional()
}
```

### archiveissuesasync

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "jql": z.string().optional()
}
```

### archiveissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdsOrKeys": z.array(z.string()).optional()
}
```

### createissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueUpdates": z.array(z.object({ "fields": z.record(z.any()).describe("List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use \`update\`. Fields included in here cannot be included in \`update\`.").optional(), "historyMetadata": z.string().optional(), "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(), "transition": z.string().optional(), "update": z.record(z.array(z.object({ "add": z.any().describe("The value to add to the field.").optional(), "copy": z.any().describe("The field value to copy from another issue.").optional(), "edit": z.any().describe("The value to edit in the field.").optional(), "remove": z.any().describe("The value to removed from the field.").optional(), "set": z.any().describe("The value to set in the field.").optional() }).strict().describe("Details of an operation to perform on a field."))).describe("A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in \`fields\`.").optional() }).catchall(z.any()).describe("Details of an issue update request.")).optional()
}
```

### bulkfetchissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string()).describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where \`expand\` is specified, \`expand\` is defined as a list of values. The expand options are:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`operations\` Returns all possible operations for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Instead of \`fields\`, returns \`versionedRepresentations\` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nThe default is \`*navigable\`.\n\nExamples:\n\n *  \`summary,comment\` Returns the summary and comments fields only.\n *  \`-description\` Returns all navigable (default) fields except description.\n *  \`*all,-comment\` Returns all fields except comments.\n\nMultiple \`fields\` parameters can be included in a request.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is \`false\`.").optional(),
  "issueIdsOrKeys": z.array(z.string()).describe("An array of issue IDs or issue keys to fetch. You can mix issue IDs and keys in the same query."),
  "properties": z.array(z.string()).describe("A list of issue property keys of issue properties to be included in the results. A maximum of 5 issue property keys can be specified.").optional()
}
```

### getcreateissuemeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIds": z.array(z.string()).describe("List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, \`projectIds=10000,10001&projectIds=10020,10021\`. This parameter may be provided with \`projectKeys\`.").optional(),
  "projectKeys": z.array(z.string()).describe("List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, \`projectKeys=proj1,proj2&projectKeys=proj3\`. This parameter may be provided with \`projectIds\`.").optional(),
  "issuetypeIds": z.array(z.string()).describe("List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, \`issuetypeIds=10000,10001&issuetypeIds=10020,10021\`. This parameter may be provided with \`issuetypeNames\`.").optional(),
  "issuetypeNames": z.array(z.string()).describe("List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, \`issuetypeNames=name1,name2&issuetypeNames=name3\`. This parameter may be provided with \`issuetypeIds\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts \`projects.issuetypes.fields\`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the \`fields\` and \`update\` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).").optional()
}
```

### getcreateissuemetaissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or key of the project."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(200).describe("The maximum number of items to return per page.").optional()
}
```

### getcreateissuemetaissuetypeid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or key of the project."),
  "issueTypeId": z.string().describe("The issuetype ID."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(200).describe("The maximum number of items to return per page.").optional()
}
```

### getissuelimitreport

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "isReturningKeys": z.boolean().describe("Return issue keys instead of issue ids in the response.\n\nUsage: Add \`?isReturningKeys=true\` to the end of the path to request issue keys.").optional()
}
```

### getissuepickerresource

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A string to match against text fields in the issue such as title, description, or comments.").optional(),
  "currentJQL": z.string().describe("A JQL query defining a list of issues to search for the query term. Note that \`username\` and \`userkey\` cannot be used as search terms for this parameter, due to privacy reasons. Use \`accountId\` instead.").optional(),
  "currentIssueKey": z.string().describe("The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.").optional(),
  "currentProjectId": z.string().describe("The ID of a project that suggested issues must belong to.").optional(),
  "showSubTasks": z.boolean().describe("Indicate whether to include subtasks in the suggestions list.").optional(),
  "showSubTaskParent": z.boolean().describe("When \`currentIssueKey\` is a subtask, whether to include the parent issue in the suggestions if it matches the query.").optional()
}
```

### bulksetissuespropertieslist

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "entitiesIds": z.array(z.number().int()).min(1).max(10000).describe("A list of entity property IDs.").optional(),
  "properties": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA list of entity property keys and values.").optional()
}
```

### bulksetissuepropertiesbyissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issues": z.array(z.object({ "issueID": z.number().int().describe("The ID of the issue.").optional(), "properties": z.record(z.object({ "array": z.boolean().optional(), "bigDecimal": z.boolean().optional(), "bigInteger": z.boolean().optional(), "bigIntegerValue": z.number().int().optional(), "binary": z.boolean().optional(), "binaryValue": z.array(z.string()).optional(), "boolean": z.boolean().optional(), "booleanValue": z.boolean().optional(), "containerNode": z.boolean().optional(), "decimalValue": z.number().optional(), "double": z.boolean().optional(), "doubleValue": z.number().optional(), "elements": z.record(z.any()).optional(), "fieldNames": z.record(z.any()).optional(), "fields": z.record(z.any()).optional(), "floatingPointNumber": z.boolean().optional(), "int": z.boolean().optional(), "intValue": z.number().int().optional(), "integralNumber": z.boolean().optional(), "long": z.boolean().optional(), "longValue": z.number().int().optional(), "missingNode": z.boolean().optional(), "null": z.boolean().optional(), "number": z.boolean().optional(), "numberType": z.enum(["INT","LONG","BIG_INTEGER","FLOAT","DOUBLE","BIG_DECIMAL"]).optional(), "numberValue": z.number().optional(), "object": z.boolean().optional(), "pojo": z.boolean().optional(), "textValue": z.string().optional(), "textual": z.boolean().optional(), "valueAsBoolean": z.boolean().optional(), "valueAsDouble": z.number().optional(), "valueAsInt": z.number().int().optional(), "valueAsLong": z.number().int().optional(), "valueAsText": z.string().optional(), "valueNode": z.boolean().optional() }).strict()).describe("Entity properties to set on the issue. The maximum length of an issue property value is 32768 characters.").optional() }).strict().describe("An issue ID with entity property values. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.")).describe("A list of issue IDs and their respective properties.").optional()
}
```

### bulkdeleteissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the property."),
  "currentValue": z.any().describe("The value of properties to perform the bulk operation on.").optional(),
  "entityIds": z.array(z.number().int()).describe("List of issues to perform the bulk delete operation on.").optional()
}
```

### bulksetissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the property. The maximum length is 255 characters."),
  "expression": z.string().describe("EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are \`issue\` and \`user\`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored.").optional(),
  "filter": z.string().optional(),
  "value": z.any().describe("The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.").optional()
}
```

### unarchiveissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdsOrKeys": z.array(z.string()).optional()
}
```

### getiswatchingissuebulk

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIds": z.array(z.string()).describe("The list of issue IDs.")
}
```

### deleteissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "deleteSubtasks": z.enum(["true","false"]).describe("Whether the issue's subtasks are deleted when the issue is deleted.").optional()
}
```

### getissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "fields": z.array(z.string()).describe("A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  \`summary,comment\` Returns only the summary and comments fields.\n *  \`-description\` Returns all (default) fields except description.\n *  \`*navigable,-comment\` Returns all navigable fields except comment.\n\nThis parameter may be specified multiple times. For example, \`fields=field1,field2& fields=field3\`.\n\nNote: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Whether fields in \`fields\` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the \`fields\` parameter is ignored.").optional(),
  "properties": z.array(z.string()).describe("A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:\n\n *  \`*all\` Returns all issue properties.\n *  Any issue property key, prefixed with a minus to exclude.\n\nExamples:\n\n *  \`*all\` Returns all properties.\n *  \`*all,-prop1\` Returns all properties except \`prop1\`.\n *  \`prop1,prop2\` Returns \`prop1\` and \`prop2\` properties.\n\nThis parameter may be specified multiple times. For example, \`properties=prop1,prop2& properties=prop3\`.").optional(),
  "updateHistory": z.boolean().describe("Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) \`lastViewed\` field.").optional(),
  "failFast": z.boolean().describe("Whether to fail the request quickly in case of an error while loading fields for an issue. For \`failFast=true\`, if one field fails, the entire operation fails. For \`failFast=false\`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s).").optional()
}
```

### editissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "notifyUsers": z.boolean().describe("Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.").optional(),
  "overrideScreenSecurity": z.boolean().describe("Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "returnIssue": z.boolean().describe("Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get).").optional(),
  "expand": z.string().describe("The Get issue API expand parameter to use in the response if the \`returnIssue\` parameter is \`true\`.").optional(),
  "fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nList of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use \`update\`. Fields included in here cannot be included in \`update\`.").optional(),
  "historyMetadata": z.string().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(),
  "transition": z.string().optional(),
  "update": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in \`fields\`.").optional()
}
```

### assignissue

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue to be assigned."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.").optional(),
  "accountType": z.enum(["atlassian","app","customer","unknown"]).describe("The user account type. Can take the following values:\n\n *  \`atlassian\` regular Atlassian user account\n *  \`app\` system account used for Connect applications and OAuth to represent external systems\n *  \`customer\` Jira Service Desk account representing an external service desk").readonly().optional(),
  "active": z.boolean().describe("Whether the user is active.").readonly().optional(),
  "applicationRoles": z.string().optional(),
  "avatarUrls": z.string().optional(),
  "displayName": z.string().describe("The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.").readonly().optional(),
  "emailAddress": z.string().describe("The email address of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(),
  "expand": z.string().describe("Expand options that include additional user details in the response.").readonly().optional(),
  "groups": z.string().optional(),
  "key": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "locale": z.string().describe("The locale of the user. Depending on the user’s privacy setting, this may be returned as null.").readonly().optional(),
  "name": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "self": z.string().url().describe("The URL of the user.").readonly().optional(),
  "timeZone": z.string().describe("The time zone specified in the user's profile. If the user's time zone is not visible to the current user (due to user's profile setting), or if a time zone has not been set, the instance's default time zone will be returned.").readonly().optional()
}
```

### addattachment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue that attachments are added to.")
}
```

### getchangelogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### getchangelogsbyids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "changelogIds": z.array(z.number().int()).describe("The list of changelog IDs.")
}
```

### getcomments

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["created","-created","+created"]).describe("[Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts \`renderedBody\`, which returns the comment body rendered in HTML.").optional()
}
```

### addcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts \`renderedBody\`, which returns the comment body rendered in HTML.").optional(),
  "author": z.string().optional(),
  "body": z.any().describe("The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).").optional(),
  "created": z.string().datetime({ offset: true }).describe("The date and time at which the comment was created.").readonly().optional(),
  "id": z.string().describe("The ID of the comment.").readonly().optional(),
  "jsdAuthorCanSeeRequest": z.boolean().describe("Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.").readonly().optional(),
  "jsdPublic": z.boolean().describe("Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.").readonly().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("A list of comment properties. Optional on create and update.").optional(),
  "renderedBody": z.string().describe("The rendered version of the comment.").readonly().optional(),
  "self": z.string().describe("The URL of the comment.").readonly().optional(),
  "updateAuthor": z.string().optional(),
  "updated": z.string().datetime({ offset: true }).describe("The date and time at which the comment was updated last.").readonly().optional(),
  "visibility": z.string().optional()
}
```

### deletecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the comment.")
}
```

### getcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the comment."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts \`renderedBody\`, which returns the comment body rendered in HTML.").optional()
}
```

### updatecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the comment."),
  "notifyUsers": z.boolean().describe("Whether users are notified when a comment is updated.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts \`renderedBody\`, which returns the comment body rendered in HTML.").optional(),
  "author": z.string().optional(),
  "body": z.any().describe("The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).").optional(),
  "created": z.string().datetime({ offset: true }).describe("The date and time at which the comment was created.").readonly().optional(),
  "b_id": z.string().describe("The ID of the comment.").readonly().optional(),
  "jsdAuthorCanSeeRequest": z.boolean().describe("Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.").readonly().optional(),
  "jsdPublic": z.boolean().describe("Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.").readonly().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("A list of comment properties. Optional on create and update.").optional(),
  "renderedBody": z.string().describe("The rendered version of the comment.").readonly().optional(),
  "self": z.string().describe("The URL of the comment.").readonly().optional(),
  "updateAuthor": z.string().optional(),
  "updated": z.string().datetime({ offset: true }).describe("The date and time at which the comment was updated last.").readonly().optional(),
  "visibility": z.string().optional()
}
```

### geteditissuemeta

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "overrideScreenSecurity": z.boolean().describe("Whether hidden fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether non-editable fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional()
}
```

### notify

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("ID or key of the issue that the notification is sent for."),
  "htmlBody": z.string().describe("The HTML body of the email notification for the issue.").optional(),
  "restrict": z.string().optional(),
  "subject": z.string().describe("The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.").optional(),
  "textBody": z.string().describe("The plain text body of the email notification for the issue.").optional(),
  "to": z.string().optional()
}
```

### getissuepropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The key or ID of the issue.")
}
```

### deleteissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The key or ID of the issue."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### getissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The key or ID of the issue."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### setissueproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "propertyKey": z.string().describe("The key of the issue property. The maximum length is 255 characters.")
}
```

### deleteremoteissuelinkbyglobalid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "globalId": z.string().describe("The global ID of a remote issue link.")
}
```

### getremoteissuelinks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "globalId": z.string().describe("The global ID of the remote issue link.").optional()
}
```

### createorupdateremoteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "application": z.string().optional(),
  "globalId": z.string().describe("An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: \`appId=456&pageId=123\`.\n\nSetting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.\n\nThe maximum length is 255 characters.").optional(),
  "object": z.string(),
  "relationship": z.string().describe("Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.").optional()
}
```

### deleteremoteissuelinkbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "linkId": z.string().describe("The ID of a remote issue link.")
}
```

### getremoteissuelinkbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "linkId": z.string().describe("The ID of the remote issue link.")
}
```

### updateremoteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "linkId": z.string().describe("The ID of the remote issue link."),
  "application": z.string().optional(),
  "globalId": z.string().describe("An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: \`appId=456&pageId=123\`.\n\nSetting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.\n\nThe maximum length is 255 characters.").optional(),
  "object": z.string(),
  "relationship": z.string().describe("Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.").optional()
}
```

### gettransitions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts \`transitions.fields\`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the \`fields\` and \`update\` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).").optional(),
  "transitionId": z.string().describe("The ID of the transition.").optional(),
  "skipRemoteOnlyCondition": z.boolean().describe("Whether transitions with the condition *Hide From User Condition* are included in the response.").optional(),
  "includeUnavailableTransitions": z.boolean().describe("Whether details of transitions that fail a condition are included in the response").optional(),
  "sortByOpsBarAndStatus": z.boolean().describe("Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.").optional()
}
```

### dotransition

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nList of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use \`update\`. Fields included in here cannot be included in \`update\`.").optional(),
  "historyMetadata": z.string().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of issue properties to be add or update.").optional(),
  "transition": z.string().optional(),
  "update": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in \`fields\`.").optional()
}
```

### removevote

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}
```

### getvotes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}
```

### addvote

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}
```

### removewatcher

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.").optional()
}
```

### getissuewatchers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}
```

### addwatcher

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}
```

### bulkdeleteworklogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "adjustEstimate": z.enum(["leave","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  \`leave\` Leaves the estimate unchanged.\n *  \`auto\` Reduces the estimate by the aggregate value of \`timeSpent\` across all worklogs being deleted.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional(),
  "ids": z.array(z.number().int()).describe("A list of worklog IDs.")
}
```

### getissueworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "startedAfter": z.number().int().describe("The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.").optional(),
  "startedBefore": z.number().int().describe("The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts\`properties\`, which returns worklog properties.").optional()
}
```

### addworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key the issue."),
  "notifyUsers": z.boolean().describe("Whether users watching the issue are notified by email.").optional(),
  "adjustEstimate": z.enum(["new","leave","manual","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  \`new\` Sets the estimate to a specific value, defined in \`newEstimate\`.\n *  \`leave\` Leaves the estimate unchanged.\n *  \`manual\` Reduces the estimate by amount specified in \`reduceBy\`.\n *  \`auto\` Reduces the estimate by the value of \`timeSpent\` in the worklog.").optional(),
  "newEstimate": z.string().describe("The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when \`adjustEstimate\` is \`new\`.").optional(),
  "reduceBy": z.string().describe("The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when \`adjustEstimate\` is \`manual\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts \`properties\`, which returns worklog properties.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.").optional(),
  "author": z.string().optional(),
  "comment": z.any().describe("A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.").optional(),
  "created": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was created.").readonly().optional(),
  "id": z.string().describe("The ID of the worklog record.").readonly().optional(),
  "issueId": z.string().describe("The ID of the issue this worklog is for.").readonly().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of properties for the worklog. Optional when creating or updating a worklog.").optional(),
  "self": z.string().url().describe("The URL of the worklog item.").readonly().optional(),
  "started": z.string().datetime({ offset: true }).describe("The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.").optional(),
  "timeSpent": z.string().describe("The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if \`timeSpentSeconds\` isn't provided. Optional when updating a worklog. Cannot be provided if \`timeSpentSecond\` is provided.").optional(),
  "timeSpentSeconds": z.number().int().describe("The time in seconds spent working on the issue. Required when creating a worklog if \`timeSpent\` isn't provided. Optional when updating a worklog. Cannot be provided if \`timeSpent\` is provided.").optional(),
  "updateAuthor": z.string().optional(),
  "updated": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was last updated.").readonly().optional(),
  "visibility": z.string().optional()
}
```

### bulkmoveworklogs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string(),
  "adjustEstimate": z.enum(["leave","auto"]).describe("Defines how to update the issues' time estimate, the options are:\n\n *  \`leave\` Leaves the estimate unchanged.\n *  \`auto\` Reduces the estimate by the aggregate value of \`timeSpent\` across all worklogs being moved in the source issue, and increases it in the destination issue.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the work log entry should be moved to and from the issues even if the issues are not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional(),
  "ids": z.array(z.number().int()).describe("A list of worklog IDs.").optional(),
  "b_issueIdOrKey": z.string().describe("The issue id or key of the destination issue").optional()
}
```

### deleteworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "notifyUsers": z.boolean().describe("Whether users watching the issue are notified by email.").optional(),
  "adjustEstimate": z.enum(["new","leave","manual","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  \`new\` Sets the estimate to a specific value, defined in \`newEstimate\`.\n *  \`leave\` Leaves the estimate unchanged.\n *  \`manual\` Increases the estimate by amount specified in \`increaseBy\`.\n *  \`auto\` Reduces the estimate by the value of \`timeSpent\` in the worklog.").optional(),
  "newEstimate": z.string().describe("The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when \`adjustEstimate\` is \`new\`.").optional(),
  "increaseBy": z.string().describe("The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when \`adjustEstimate\` is \`manual\`.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional()
}
```

### getworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts\n\n\`properties\`, which returns worklog properties.").optional()
}
```

### updateworklog

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "notifyUsers": z.boolean().describe("Whether users watching the issue are notified by email.").optional(),
  "adjustEstimate": z.enum(["new","leave","manual","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  \`new\` Sets the estimate to a specific value, defined in \`newEstimate\`.\n *  \`leave\` Leaves the estimate unchanged.\n *  \`auto\` Updates the estimate by the difference between the original and updated value of \`timeSpent\` or \`timeSpentSeconds\`.").optional(),
  "newEstimate": z.string().describe("The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when \`adjustEstimate\` is \`new\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts \`properties\`, which returns worklog properties.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.").optional(),
  "author": z.string().optional(),
  "comment": z.any().describe("A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.").optional(),
  "created": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was created.").readonly().optional(),
  "b_id": z.string().describe("The ID of the worklog record.").readonly().optional(),
  "issueId": z.string().describe("The ID of the issue this worklog is for.").readonly().optional(),
  "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("Details of properties for the worklog. Optional when creating or updating a worklog.").optional(),
  "self": z.string().url().describe("The URL of the worklog item.").readonly().optional(),
  "started": z.string().datetime({ offset: true }).describe("The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.").optional(),
  "timeSpent": z.string().describe("The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if \`timeSpentSeconds\` isn't provided. Optional when updating a worklog. Cannot be provided if \`timeSpentSecond\` is provided.").optional(),
  "timeSpentSeconds": z.number().int().describe("The time in seconds spent working on the issue. Required when creating a worklog if \`timeSpent\` isn't provided. Optional when updating a worklog. Cannot be provided if \`timeSpent\` is provided.").optional(),
  "updateAuthor": z.string().optional(),
  "updated": z.string().datetime({ offset: true }).describe("The datetime on which the worklog was last updated.").readonly().optional(),
  "visibility": z.string().optional()
}
```

### getworklogpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "worklogId": z.string().describe("The ID of the worklog.")
}
```

### deleteworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "worklogId": z.string().describe("The ID of the worklog."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### getworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "worklogId": z.string().describe("The ID of the worklog."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### setworklogproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "worklogId": z.string().describe("The ID of the worklog."),
  "propertyKey": z.string().describe("The key of the issue property. The maximum length is 255 characters.")
}
```

### linkissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "comment": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA comment.").optional(),
  "inwardIssue": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe ID or key of a linked issue."),
  "outwardIssue": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe ID or key of a linked issue."),
  "type": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThis object is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-3-issueLinkType-get).\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it defines and reports on issue link types.")
}
```

### deleteissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "linkId": z.string().describe("The ID of the issue link.")
}
```

### getissuelink

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "linkId": z.string().describe("The ID of the issue link.")
}
```

### getissuelinktypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when \`name\` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only.").optional(),
  "inward": z.string().describe("The description of the issue link type inward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "name": z.string().describe("The name of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when \`id\` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "outward": z.string().describe("The description of the issue link type outward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "self": z.string().url().describe("The URL of the issue link type. Read only.").readonly().optional()
}
```

### deleteissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueLinkTypeId": z.string().describe("The ID of the issue link type.")
}
```

### getissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueLinkTypeId": z.string().describe("The ID of the issue link type.")
}
```

### updateissuelinktype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueLinkTypeId": z.string().describe("The ID of the issue link type."),
  "id": z.string().describe("The ID of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when \`name\` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only.").optional(),
  "inward": z.string().describe("The description of the issue link type inward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "name": z.string().describe("The name of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when \`id\` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "outward": z.string().describe("The description of the issue link type outward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(),
  "self": z.string().url().describe("The URL of the issue link type. Read only.").readonly().optional()
}
```

### exportarchivedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "archivedBy": z.array(z.string()).describe("List archived issues archived by a specified account ID.").optional(),
  "archivedDateRange": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nList issues archived within a specified date range.").optional(),
  "issueTypes": z.array(z.string()).describe("List archived issues with a specified issue type ID.").optional(),
  "projects": z.array(z.string()).describe("List archived issues with a specified project key.").optional(),
  "reporters": z.array(z.string()).describe("List archived issues where the reporter is a specified account ID.").optional()
}
```

### getissuesecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().max(255).describe("The description of the issue security scheme.").optional(),
  "levels": z.array(z.object({ "description": z.string().max(4000).describe("The description of the issue security scheme level.").optional(), "isDefault": z.boolean().describe("Specifies whether the level is the default level. False by default.").optional(), "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g \`reporter\`, \`group\`, \`user\`, \`projectrole\`, \`applicationRole\`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional(), "name": z.string().max(255).describe("The name of the issue security scheme level. Must be unique.") }).strict()).describe("The list of scheme levels which should be added to the security scheme.").optional(),
  "name": z.string().max(60).describe("The name of the issue security scheme. Must be unique (case-insensitive).")
}
```

### getsecuritylevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: \`id=10000&id=10001\`.").optional(),
  "schemeId": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: \`schemeId=10000&schemeId=10001\`.").optional(),
  "onlyDefault": z.boolean().describe("When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false.").optional()
}
```

### setdefaultlevels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultValues": z.array(z.object({ "defaultLevelId": z.string().describe("The ID of the issue security level to set as default for the specified scheme. Providing null will reset the default level."), "issueSecuritySchemeId": z.string().describe("The ID of the issue security scheme to set default level for.") }).catchall(z.any()).describe("Details of scheme and new default level.")).describe("List of objects with issue security scheme ID and new default level ID.")
}
```

### getsecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: \`id=10000&id=10001\`.").optional(),
  "schemeId": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: \`schemeId=10000&schemeId=10001\`.").optional(),
  "levelId": z.array(z.string()).describe("The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: \`levelId=10000&levelId=10001\`.").optional(),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`all\` Returns all expandable information\n *  \`field\` Returns information about the custom field granted the permission\n *  \`group\` Returns information about the group that is granted the permission\n *  \`projectRole\` Returns information about the project role granted the permission\n *  \`user\` Returns information about the user who is granted the permission").optional()
}
```

### searchprojectsusingsecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "issueSecuritySchemeId": z.array(z.string()).describe("The list of security scheme IDs to be filtered out.").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs to be filtered out.").optional()
}
```

### associateschemestoprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "oldToNewSecurityLevelMappings": z.array(z.object({ "newLevelId": z.string().describe("The new issue security level ID. Providing null will clear the assigned old level from issues."), "oldLevelId": z.string().describe("The old issue security level ID. Providing null will remap all issues without any assigned levels.") }).strict()).describe("The list of scheme levels which should be remapped to new levels of the issue security scheme.").optional(),
  "projectId": z.string().describe("The ID of the project."),
  "schemeId": z.string().describe("The ID of the issue security scheme. Providing null will clear the association with the issue security scheme.")
}
```

### searchsecurityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: \`id=10000&id=10001\`.").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: \`projectId=10000&projectId=10001\`.").optional()
}
```

### getissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.")
}
```

### updateissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue security scheme."),
  "description": z.string().max(255).describe("The description of the security scheme scheme.").optional(),
  "name": z.string().max(60).describe("The name of the security scheme scheme. Must be unique.").optional()
}
```

### getissuesecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueSecuritySchemeId": z.number().int().describe("The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "issueSecurityLevelId": z.array(z.string()).describe("The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: \`issueSecurityLevelId=10000&issueSecurityLevelId=10001\`.").optional(),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional()
}
```

### deletesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme.")
}
```

### addsecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levels": z.array(z.object({ "description": z.string().max(4000).describe("The description of the issue security scheme level.").optional(), "isDefault": z.boolean().describe("Specifies whether the level is the default level. False by default.").optional(), "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g \`reporter\`, \`group\`, \`user\`, \`projectrole\`, \`applicationRole\`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional(), "name": z.string().max(255).describe("The name of the issue security scheme level. Must be unique.") }).strict()).describe("The list of scheme levels which should be added to the security scheme.").optional()
}
```

### removelevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levelId": z.string().describe("The ID of the issue security level to remove."),
  "replaceWith": z.string().describe("The ID of the issue security level that will replace the currently selected level.").optional()
}
```

### updatesecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme level belongs to."),
  "levelId": z.string().describe("The ID of the issue security level to update."),
  "description": z.string().max(255).describe("The description of the issue security scheme level.").optional(),
  "name": z.string().max(60).describe("The name of the issue security scheme level. Must be unique.").optional()
}
```

### addsecuritylevelmembers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levelId": z.string().describe("The ID of the issue security level."),
  "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g \`reporter\`, \`group\`, \`user\`, \`projectrole\`, \`applicationRole\`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional()
}
```

### removememberfromsecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levelId": z.string().describe("The ID of the issue security level."),
  "memberId": z.string().describe("The ID of the issue security level member to be removed.")
}
```

### getissuealltypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the issue type.").optional(),
  "hierarchyLevel": z.number().int().describe("The hierarchy level of the issue type. Use:\n\n *  \`-1\` for Subtask.\n *  \`0\` for Base.\n\nDefaults to \`0\`.").optional(),
  "name": z.string().describe("The unique name for the issue type. The maximum length is 60 characters."),
  "type": z.enum(["subtask","standard"]).describe("Deprecated. Use \`hierarchyLevel\` instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.\n\nWhether the issue type is \`subtype\` or \`standard\`. Defaults to \`standard\`.").optional()
}
```

### getissuetypesforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.number().int().describe("The ID of the project."),
  "level": z.number().int().describe("The level of the issue type to filter by. Use:\n\n *  \`-1\` for Subtask.\n *  \`0\` for Base.\n *  \`1\` for Epic.").optional()
}
```

### deleteissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue type."),
  "alternativeIssueTypeId": z.string().describe("The ID of the replacement issue type.").optional()
}
```

### getissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue type.")
}
```

### updateissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue type."),
  "avatarId": z.number().int().describe("The ID of an issue type avatar.").optional(),
  "description": z.string().describe("The description of the issue type.").optional(),
  "name": z.string().describe("The unique name for the issue type. The maximum length is 60 characters.").optional()
}
```

### getalternativeissuetypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue type.")
}
```

### createissuetypeavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue type."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.")
}
```

### getissuetypepropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeId": z.string().describe("The ID of the issue type.")
}
```

### deleteissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.")
}
```

### getissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.")
}
```

### setissuetypeproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the issue type property. The maximum length is 255 characters.")
}
```

### getallissuetypeschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  \`name\` Sorts by issue type scheme name.\n *  \`id\` Sorts by issue type scheme ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`projects\` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.\n *  \`issueTypes\` For each issue type schemes, returns information about the issueTypes the issue type scheme have.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with issue type scheme name.").optional()
}
```

### createissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme. This ID must be included in \`issueTypeIds\`.").optional(),
  "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(),
  "issueTypeIds": z.array(z.string()).describe("The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required."),
  "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.")
}
```

### getissuetypeschemesmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "issueTypeSchemeId": z.array(z.number().int()).describe("The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`issueTypeSchemeId=10000&issueTypeSchemeId=10001\`.").optional()
}
```

### getissuetypeschemeforprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.array(z.number().int()).describe("The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, \`projectId=10000&projectId=10001\`.")
}
```

### assignissuetypeschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.string().describe("The ID of the issue type scheme."),
  "projectId": z.string().describe("The ID of the project.")
}
```

### deleteissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme.")
}
```

### updateissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme.").optional(),
  "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(),
  "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.").optional()
}
```

### addissuetypestoissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}
```

### reorderissuetypesinissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "after": z.string().describe("The ID of the issue type to place the moved issue types after. Required if \`position\` isn't provided.").optional(),
  "issueTypeIds": z.array(z.string()).describe("A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move."),
  "position": z.enum(["First","Last"]).describe("The position the issue types should be moved to. Required if \`after\` isn't provided.").optional()
}
```

### removeissuetypefromissuetypescheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "issueTypeId": z.number().int().describe("The ID of the issue type.")
}
```

### getissuetypescreenschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with issue type screen scheme name.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  \`name\` Sorts by issue type screen scheme name.\n *  \`id\` Sorts by issue type screen scheme ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts \`projects\` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to.").optional()
}
```

### createissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(),
  "issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme."),
  "name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.")
}
```

### getissuetypescreenschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "issueTypeScreenSchemeId": z.array(z.number().int()).describe("The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: \`issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001\`.").optional()
}
```

### getissuetypescreenschemeprojectassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.array(z.number().int()).describe("The list of project IDs. To include multiple projects, separate IDs with ampersand: \`projectId=10000&projectId=10001\`.")
}
```

### assignissuetypescreenschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme.").optional(),
  "projectId": z.string().describe("The ID of the project.").optional()
}
```

### deleteissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme.")
}
```

### updateissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.").optional()
}
```

### appendmappingsforissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created.")
}
```

### updatedefaultscreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "screenSchemeId": z.string().describe("The ID of the screen scheme.")
}
```

### removemappingsfromissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}
```

### getprojectsforissuetypescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueTypeScreenSchemeId": z.number().int().describe("The ID of the issue type screen scheme."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "query": z.string().optional()
}
```

### getautocomplete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getautocompletepost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "includeCollapsedFields": z.boolean().describe("Include collapsed fields for fields that have non-unique names.").optional(),
  "projectIds": z.array(z.number().int()).describe("List of project IDs used to filter the visible field details returned.").optional()
}
```

### getfieldautocompleteforquerystring

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldName": z.string().describe("The name of the field.").optional(),
  "fieldValue": z.string().describe("The partial field item name entered by the user.").optional(),
  "predicateName": z.string().describe("The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.").optional(),
  "predicateValue": z.string().describe("The partial predicate item name entered by the user.").optional()
}
```

### getprecomputations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "functionKey": z.array(z.string()).describe("The function key in format:\n\n *  Forge: \`ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]\`\n *  Connect: \`[App key]__[Module key]\`").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  \`functionKey\` Sorts by the functionKey.\n *  \`used\` Sorts by the used timestamp.\n *  \`created\` Sorts by the created timestamp.\n *  \`updated\` Sorts by the updated timestamp.").optional()
}
```

### updateprecomputations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "skipNotFoundPrecomputations": z.boolean().optional(),
  "values": z.array(z.object({ "error": z.string().describe("The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.").optional(), "id": z.string().describe("The id of the precomputation to update."), "value": z.string().describe("The new value of the precomputation.").optional() }).strict().describe("Precomputation id and its new value.")).optional()
}
```

### getprecomputationsbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  \`functionKey\` Sorts by the functionKey.\n *  \`used\` Sorts by the used timestamp.\n *  \`created\` Sorts by the created timestamp.\n *  \`updated\` Sorts by the updated timestamp.").optional(),
  "precomputationIDs": z.array(z.string()).optional()
}
```

### matchissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "issueIds": z.array(z.number().int().describe("A list of issue IDs.")).describe("A list of issue IDs."),
  "jqls": z.array(z.string().describe("A list of JQL queries.")).describe("A list of JQL queries.")
}
```

### parsejqlqueries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "validation": z.enum(["strict","warn","none"]).describe("How to validate the JQL query and treat the validation results. Validation options include:\n\n *  \`strict\` Returns all errors. If validation fails, the query structure is not returned.\n *  \`warn\` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.\n *  \`none\` No validation is performed. If JQL query is correctly formed, the query structure is returned."),
  "queries": z.array(z.string().min(1)).describe("A list of queries to parse.")
}
```

### migratequeries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "queryStrings": z.array(z.string()).describe("A list of queries with user identifiers. Maximum of 100 queries.").optional()
}
```

### sanitisejqlqueries

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "queries": z.array(z.object({ "accountId": z.string().max(128).nullable().describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(), "query": z.string().describe("The query to sanitize.") }).strict().describe("The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.")).describe("The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries.")
}
```

### getalllabels

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### getapproximatelicensecount

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getapproximateapplicationlicensecount

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "applicationKey": z.enum(["jira-core","jira-product-discovery","jira-software","jira-servicedesk"]).describe("The ID of the application, represents a specific version of Jira.")
}
```

### getmypermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKey": z.string().describe("The key of project. Ignored if \`projectId\` is provided.").optional(),
  "projectId": z.string().describe("The ID of project.").optional(),
  "issueKey": z.string().describe("The key of the issue. Ignored if \`issueId\` is provided.").optional(),
  "issueId": z.string().describe("The ID of the issue.").optional(),
  "permissions": z.string().describe("A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).").optional(),
  "projectUuid": z.string().optional(),
  "projectConfigurationUuid": z.string().optional(),
  "commentId": z.string().describe("The ID of the comment.").optional()
}
```

### removepreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key of the preference.")
}
```

### getpreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key of the preference.")
}
```

### setpreference

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The key of the preference. The maximum length is 255 characters.")
}
```

### deletelocale

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getlocale

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setlocale

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "locale": z.string().describe("The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\\_US represents a locale of English (United States). Required on create.").optional()
}
```

### getcurrentuser

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`groups\` Returns all groups, including nested groups, the user belongs to.\n *  \`applicationRoles\` Returns the application roles the user is assigned to.").optional()
}
```

### getnotificationschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of notification schemes IDs to be filtered by").optional(),
  "projectId": z.array(z.string()).describe("The list of projects IDs to be filtered by").optional(),
  "onlyDefault": z.boolean().describe("When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`all\` Returns all expandable information\n *  \`field\` Returns information about any custom fields assigned to receive an event\n *  \`group\` Returns information about any groups assigned to receive an event\n *  \`notificationSchemeEvents\` Returns a list of event associations. This list is returned for all expandable information\n *  \`projectRole\` Returns information about any project roles assigned to receive an event\n *  \`user\` Returns information about any users assigned to receive an event").optional()
}
```

### createnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().max(4000).describe("The description of the notification scheme.").optional(),
  "name": z.string().max(255).describe("The name of the notification scheme. Must be unique (case-insensitive)."),
  "notificationSchemeEvents": z.array(z.object({ "event": z.string(), "notifications": z.array(z.object({ "notificationType": z.string().describe("The notification type, e.g \`CurrentAssignee\`, \`Group\`, \`EmailAddress\`."), "parameter": z.string().describe("The value corresponding to the specified notification type.").optional() }).catchall(z.any()).describe("Details of a notification within a notification scheme.")).describe("The list of notifications mapped to a specified event.") }).catchall(z.any()).describe("Details of a notification scheme event.")).describe("The list of notifications which should be added to the notification scheme.").optional()
}
```

### getnotificationschemetoprojectmappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "notificationSchemeId": z.array(z.string()).describe("The list of notifications scheme IDs to be filtered out").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs to be filtered out").optional()
}
```

### getnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`all\` Returns all expandable information\n *  \`field\` Returns information about any custom fields assigned to receive an event\n *  \`group\` Returns information about any groups assigned to receive an event\n *  \`notificationSchemeEvents\` Returns a list of event associations. This list is returned for all expandable information\n *  \`projectRole\` Returns information about any project roles assigned to receive an event\n *  \`user\` Returns information about any users assigned to receive an event").optional()
}
```

### updatenotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the notification scheme."),
  "description": z.string().max(4000).describe("The description of the notification scheme.").optional(),
  "name": z.string().max(255).describe("The name of the notification scheme. Must be unique.").optional()
}
```

### addnotifications

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the notification scheme."),
  "notificationSchemeEvents": z.array(z.object({ "event": z.string(), "notifications": z.array(z.object({ "notificationType": z.string().describe("The notification type, e.g \`CurrentAssignee\`, \`Group\`, \`EmailAddress\`."), "parameter": z.string().describe("The value corresponding to the specified notification type.").optional() }).catchall(z.any()).describe("Details of a notification within a notification scheme.")).describe("The list of notifications mapped to a specified event.") }).catchall(z.any()).describe("Details of a notification scheme event.")).describe("The list of notifications which should be added to the notification scheme.")
}
```

### deletenotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "notificationSchemeId": z.string().describe("The ID of the notification scheme.")
}
```

### removenotificationfromnotificationscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "notificationSchemeId": z.string().describe("The ID of the notification scheme."),
  "notificationId": z.string().describe("The ID of the notification.")
}
```

### getallpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbulkpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().describe("The account ID of a user.").optional(),
  "globalPermissions": z.array(z.string()).describe("Global permissions to look up.").optional(),
  "projectPermissions": z.array(z.object({ "issues": z.array(z.number().int()).describe("List of issue IDs.").optional(), "permissions": z.array(z.string()).describe("List of project permissions."), "projects": z.array(z.number().int()).describe("List of project IDs.").optional() }).strict().describe("Details of project permissions and associated issues and projects to look up.")).describe("Project permissions with associated projects and issues to look up.").optional()
}
```

### getpermittedprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "permissions": z.array(z.string()).describe("A list of permission keys.")
}
```

### getallpermissionschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional()
}
```

### createpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional(),
  "description": z.string().describe("A description for the permission scheme.").optional(),
  "b_expand": z.string().describe("The expand options available for the permission scheme.").readonly().optional(),
  "id": z.number().int().describe("The ID of the permission scheme.").readonly().optional(),
  "name": z.string().describe("The name of the permission scheme. Must be unique."),
  "permissions": z.array(z.object({ "holder": z.string().optional(), "id": z.number().int().describe("The ID of the permission granted details.").readonly().optional(), "permission": z.string().describe("The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.").optional(), "self": z.string().url().describe("The URL of the permission granted details.").readonly().optional() }).catchall(z.any()).describe("Details about a permission granted to a user or group.")).describe("The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information.").optional(),
  "scope": z.string().optional(),
  "self": z.string().url().describe("The URL of the permission scheme.").readonly().optional()
}
```

### deletepermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme being deleted.")
}
```

### getpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme to return."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional()
}
```

### updatepermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme to update."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional(),
  "description": z.string().describe("A description for the permission scheme.").optional(),
  "b_expand": z.string().describe("The expand options available for the permission scheme.").readonly().optional(),
  "id": z.number().int().describe("The ID of the permission scheme.").readonly().optional(),
  "name": z.string().describe("The name of the permission scheme. Must be unique."),
  "permissions": z.array(z.object({ "holder": z.string().optional(), "id": z.number().int().describe("The ID of the permission granted details.").readonly().optional(), "permission": z.string().describe("The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.").optional(), "self": z.string().url().describe("The URL of the permission granted details.").readonly().optional() }).catchall(z.any()).describe("Details about a permission granted to a user or group.")).describe("The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information.").optional(),
  "scope": z.string().optional(),
  "self": z.string().url().describe("The URL of the permission scheme.").readonly().optional()
}
```

### getpermissionschemegrants

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`user\` Returns information about the user who is granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`all\` Returns all expandable information.").optional()
}
```

### createpermissiongrant

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme in which to create a new permission grant."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`user\` Returns information about the user who is granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`all\` Returns all expandable information.").optional(),
  "holder": z.string().optional(),
  "id": z.number().int().describe("The ID of the permission granted details.").readonly().optional(),
  "permission": z.string().describe("The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.").optional(),
  "self": z.string().url().describe("The URL of the permission granted details.").readonly().optional()
}
```

### deletepermissionschemeentity

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme to delete the permission grant from."),
  "permissionId": z.number().int().describe("The ID of the permission grant to delete.")
}
```

### getpermissionschemegrant

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the permission scheme."),
  "permissionId": z.number().int().describe("The ID of the permission grant."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional()
}
```

### getplans

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "includeTrashed": z.boolean().describe("Whether to include trashed plans in the results.").optional(),
  "includeArchived": z.boolean().describe("Whether to include archived plans in the results.").optional(),
  "cursor": z.string().describe("The cursor to start from. If not provided, the first page will be returned.").optional(),
  "maxResults": z.number().int().describe("The maximum number of plans to return per page. The maximum value is 50. The default value is 50.").optional()
}
```

### createplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "useGroupId": z.boolean().describe("Whether to accept group IDs instead of group names. Group names are deprecated.").optional(),
  "crossProjectReleases": z.array(z.object({ "name": z.string().describe("The cross-project release name."), "releaseIds": z.array(z.number().int()).describe("The IDs of the releases to include in the cross-project release.").optional() }).strict()).describe("The cross-project releases to include in the plan.").optional(),
  "customFields": z.array(z.object({ "customFieldId": z.number().int().describe("The custom field ID."), "filter": z.boolean().describe("Allows filtering issues based on their values for the custom field.").optional() }).strict()).describe("The custom fields for the plan.").optional(),
  "exclusionRules": z.string().optional(),
  "issueSources": z.array(z.object({ "type": z.enum(["Board","Project","Filter"]).describe("The issue source type. This must be \"Board\", \"Project\" or \"Filter\"."), "value": z.number().int().describe("The issue source value. This must be a board ID if the type is \"Board\", a project ID if the type is \"Project\" or a filter ID if the type is \"Filter\".") }).strict()).describe("The issue sources to include in the plan."),
  "leadAccountId": z.string().describe("The account ID of the plan lead.").optional(),
  "name": z.string().min(1).max(255).describe("The plan name."),
  "permissions": z.array(z.object({ "holder": z.string(), "type": z.enum(["View","Edit"]).describe("The permission type. This must be \"View\" or \"Edit\".") }).strict()).describe("The permissions for the plan.").optional(),
  "scheduling": z.string()
}
```

### getplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "useGroupId": z.boolean().describe("Whether to return group IDs instead of group names. Group names are deprecated.").optional()
}
```

### updateplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "useGroupId": z.boolean().describe("Whether to accept group IDs instead of group names. Group names are deprecated.").optional()
}
```

### archiveplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan.")
}
```

### duplicateplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "name": z.string().describe("The plan name.")
}
```

### getteams

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "cursor": z.string().describe("The cursor to start from. If not provided, the first page will be returned.").optional(),
  "maxResults": z.number().int().describe("The maximum number of plan teams to return per page. The maximum value is 50. The default value is 50.").optional()
}
```

### addatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "capacity": z.number().describe("The capacity for the Atlassian team.").optional(),
  "id": z.string().describe("The Atlassian team ID."),
  "issueSourceId": z.number().int().describe("The ID of the issue source for the Atlassian team.").optional(),
  "planningStyle": z.enum(["Scrum","Kanban"]).describe("The planning style for the Atlassian team. This must be \"Scrum\" or \"Kanban\"."),
  "sprintLength": z.number().int().describe("The sprint length for the Atlassian team.").optional()
}
```

### removeatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "atlassianTeamId": z.string().describe("The ID of the Atlassian team.")
}
```

### getatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "atlassianTeamId": z.string().describe("The ID of the Atlassian team.")
}
```

### updateatlassianteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "atlassianTeamId": z.string().describe("The ID of the Atlassian team.")
}
```

### createplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "capacity": z.number().describe("The capacity for the plan-only team.").optional(),
  "issueSourceId": z.number().int().describe("The ID of the issue source for the plan-only team.").optional(),
  "memberAccountIds": z.array(z.string()).describe("The account IDs of the plan-only team members.").optional(),
  "name": z.string().min(1).max(255).describe("The plan-only team name."),
  "planningStyle": z.enum(["Scrum","Kanban"]).describe("The planning style for the plan-only team. This must be \"Scrum\" or \"Kanban\"."),
  "sprintLength": z.number().int().describe("The sprint length for the plan-only team.").optional()
}
```

### deleteplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "planOnlyTeamId": z.number().int().describe("The ID of the plan-only team.")
}
```

### getplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "planOnlyTeamId": z.number().int().describe("The ID of the plan-only team.")
}
```

### updateplanonlyteam

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan."),
  "planOnlyTeamId": z.number().int().describe("The ID of the plan-only team.")
}
```

### trashplan

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "planId": z.number().int().describe("The ID of the plan.")
}
```

### getpriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "avatarId": z.number().int().describe("The ID for the avatar for the priority. Either the iconUrl or avatarId must be defined, but not both. This parameter is nullable and will become mandatory once the iconUrl parameter is deprecated.").optional(),
  "description": z.string().max(255).nullable().describe("The description of the priority.").optional(),
  "iconUrl": z.enum(["/images/icons/priorities/blocker.png","/images/icons/priorities/critical.png","/images/icons/priorities/high.png","/images/icons/priorities/highest.png","/images/icons/priorities/low.png","/images/icons/priorities/lowest.png","/images/icons/priorities/major.png","/images/icons/priorities/medium.png","/images/icons/priorities/minor.png","/images/icons/priorities/trivial.png","/images/icons/priorities/blocker_new.png","/images/icons/priorities/critical_new.png","/images/icons/priorities/high_new.png","/images/icons/priorities/highest_new.png","/images/icons/priorities/low_new.png","/images/icons/priorities/lowest_new.png","/images/icons/priorities/major_new.png","/images/icons/priorities/medium_new.png","/images/icons/priorities/minor_new.png","/images/icons/priorities/trivial_new.png"]).nullable().describe("The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Either the iconUrl or avatarId must be defined, but not both.").optional(),
  "name": z.string().max(60).describe("The name of the priority. Must be unique."),
  "statusColor": z.string().describe("The status color of the priority in 3-digit or 6-digit hexadecimal format.")
}
```

### setdefaultpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the new default issue priority. Must be an existing ID or null. Setting this to null erases the default priority setting.")
}
```

### movepriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "after": z.string().describe("The ID of the priority. Required if \`position\` isn't provided.").optional(),
  "ids": z.array(z.string()).describe("The list of issue IDs to be reordered. Cannot contain duplicates nor after ID."),
  "position": z.string().describe("The position for issue priorities to be moved to. Required if \`after\` isn't provided.").optional()
}
```

### searchpriorities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=2&id=3\`.").optional(),
  "projectId": z.array(z.string()).describe("The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`projectId=10010&projectId=10111\`.").optional(),
  "priorityName": z.string().describe("The name of priority to search for.").optional(),
  "onlyDefault": z.boolean().describe("Whether only the default priority is returned.").optional(),
  "expand": z.string().describe("Use \`schemes\` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority.").optional()
}
```

### deletepriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue priority.")
}
```

### getpriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue priority.")
}
```

### updatepriority

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue priority."),
  "avatarId": z.number().int().describe("The ID for the avatar for the priority. This parameter is nullable and both iconUrl and avatarId cannot be defined.").optional(),
  "description": z.string().max(255).nullable().describe("The description of the priority.").optional(),
  "iconUrl": z.enum(["/images/icons/priorities/blocker.png","/images/icons/priorities/critical.png","/images/icons/priorities/high.png","/images/icons/priorities/highest.png","/images/icons/priorities/low.png","/images/icons/priorities/lowest.png","/images/icons/priorities/major.png","/images/icons/priorities/medium.png","/images/icons/priorities/minor.png","/images/icons/priorities/trivial.png","/images/icons/priorities/blocker_new.png","/images/icons/priorities/critical_new.png","/images/icons/priorities/high_new.png","/images/icons/priorities/highest_new.png","/images/icons/priorities/low_new.png","/images/icons/priorities/lowest_new.png","/images/icons/priorities/major_new.png","/images/icons/priorities/medium_new.png","/images/icons/priorities/minor_new.png","/images/icons/priorities/trivial_new.png"]).nullable().describe("The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Both iconUrl and avatarId cannot be defined.").optional(),
  "name": z.string().max(60).nullable().describe("The name of the priority. Must be unique.").optional(),
  "statusColor": z.string().nullable().describe("The status color of the priority in 3-digit or 6-digit hexadecimal format.").optional()
}
```

### getpriorityschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "priorityId": z.array(z.number().int()).describe("A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, \`priorityId=10000&priorityId=10001\`.").optional(),
  "schemeId": z.array(z.number().int()).describe("A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`schemeId=10000&schemeId=10001\`.").optional(),
  "schemeName": z.string().describe("The name of scheme to search for.").optional(),
  "onlyDefault": z.boolean().describe("Whether only the default priority is returned.").optional(),
  "orderBy": z.enum(["name","+name","-name"]).describe("The ordering to return the priority schemes by.").optional(),
  "expand": z.string().describe("A comma separated list of additional information to return. \"priorities\" will return priorities associated with the priority scheme. \"projects\" will return projects associated with the priority scheme. \`expand=priorities,projects\`.").optional()
}
```

### createpriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultPriorityId": z.number().int().describe("The ID of the default priority for the priority scheme."),
  "description": z.string().max(4000).describe("The description of the priority scheme.").optional(),
  "mappings": z.string().optional(),
  "name": z.string().max(255).describe("The name of the priority scheme. Must be unique."),
  "priorityIds": z.array(z.number().int()).describe("The IDs of priorities in the scheme."),
  "projectIds": z.array(z.number().int()).describe("The IDs of projects that will use the priority scheme.").optional()
}
```

### suggestedprioritiesformappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "maxResults": z.number().int().describe("The maximum number of results that could be on the page.").optional(),
  "priorities": z.string().optional(),
  "projects": z.string().optional(),
  "schemeId": z.number().int().describe("The id of the priority scheme.").optional(),
  "startAt": z.number().int().describe("The index of the first item returned on the page.").optional()
}
```

### getavailableprioritiesbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "query": z.string().describe("The string to query priorities on by name.").optional(),
  "schemeId": z.string().describe("The priority scheme ID."),
  "exclude": z.array(z.string()).describe("A list of priority IDs to exclude from the results.").optional()
}
```

### deletepriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The priority scheme ID.")
}
```

### updatepriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.number().int().describe("The ID of the priority scheme."),
  "defaultPriorityId": z.number().int().describe("The default priority of the scheme.").optional(),
  "description": z.string().max(4000).describe("The description of the priority scheme.").optional(),
  "mappings": z.string().optional(),
  "name": z.string().max(255).describe("The name of the priority scheme. Must be unique.").optional(),
  "priorities": z.string().optional(),
  "projects": z.string().optional()
}
```

### getprioritiesbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The priority scheme ID."),
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional()
}
```

### getprojectsbypriorityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemeId": z.string().describe("The priority scheme ID."),
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "projectId": z.array(z.number().int()).describe("The project IDs to filter by. For example, \`projectId=10000&projectId=10001\`.").optional(),
  "query": z.string().describe("The string to query projects on by name.").optional()
}
```

### getallprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  \`description\` Returns the project description.\n *  \`issueTypes\` Returns all issue types associated with the project.\n *  \`lead\` Returns information about the project lead.\n *  \`projectKeys\` Returns all project keys associated with the project.").optional(),
  "recent": z.number().int().describe("Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.").optional(),
  "properties": z.array(z.string()).describe("A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional()
}
```

### createproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "assigneeType": z.enum(["PROJECT_LEAD","UNASSIGNED"]).describe("The default assignee when creating issues for this project.").optional(),
  "avatarId": z.number().int().describe("An integer value for the project's avatar.").optional(),
  "categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.").optional(),
  "description": z.string().describe("A brief description of the project.").optional(),
  "fieldConfigurationScheme": z.number().int().describe("The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-3-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key.").optional(),
  "issueSecurityScheme": z.number().int().describe("The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.").optional(),
  "issueTypeScheme": z.number().int().describe("The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-3-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key.").optional(),
  "issueTypeScreenScheme": z.number().int().describe("The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-3-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key.").optional(),
  "key": z.string().describe("Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters."),
  "lead": z.string().describe("This parameter is deprecated because of privacy changes. Use \`leadAccountId\` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either \`lead\` or \`leadAccountId\` must be set when creating a project. Cannot be provided with \`leadAccountId\`.").optional(),
  "leadAccountId": z.string().max(128).describe("The account ID of the project lead. Either \`lead\` or \`leadAccountId\` must be set when creating a project. Cannot be provided with \`lead\`.").optional(),
  "name": z.string().describe("The name of the project."),
  "notificationScheme": z.number().int().describe("The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.").optional(),
  "permissionScheme": z.number().int().describe("The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.").optional(),
  "projectTemplateKey": z.enum(["com.pyxis.greenhopper.jira:gh-simplified-agility-kanban","com.pyxis.greenhopper.jira:gh-simplified-agility-scrum","com.pyxis.greenhopper.jira:gh-simplified-basic","com.pyxis.greenhopper.jira:gh-simplified-kanban-classic","com.pyxis.greenhopper.jira:gh-simplified-scrum-classic","com.pyxis.greenhopper.jira:gh-cross-team-template","com.pyxis.greenhopper.jira:gh-cross-team-planning-template","com.atlassian.servicedesk:simplified-it-service-management","com.atlassian.servicedesk:simplified-it-service-management-basic","com.atlassian.servicedesk:simplified-it-service-management-operations","com.atlassian.servicedesk:simplified-general-service-desk","com.atlassian.servicedesk:simplified-general-service-desk-it","com.atlassian.servicedesk:simplified-general-service-desk-business","com.atlassian.servicedesk:simplified-internal-service-desk","com.atlassian.servicedesk:simplified-external-service-desk","com.atlassian.servicedesk:simplified-hr-service-desk","com.atlassian.servicedesk:simplified-facilities-service-desk","com.atlassian.servicedesk:simplified-legal-service-desk","com.atlassian.servicedesk:simplified-marketing-service-desk","com.atlassian.servicedesk:simplified-finance-service-desk","com.atlassian.servicedesk:simplified-analytics-service-desk","com.atlassian.servicedesk:simplified-design-service-desk","com.atlassian.servicedesk:simplified-sales-service-desk","com.atlassian.servicedesk:simplified-halp-service-desk","com.atlassian.servicedesk:simplified-blank-project-it","com.atlassian.servicedesk:simplified-blank-project-business","com.atlassian.servicedesk:next-gen-it-service-desk","com.atlassian.servicedesk:next-gen-hr-service-desk","com.atlassian.servicedesk:next-gen-legal-service-desk","com.atlassian.servicedesk:next-gen-marketing-service-desk","com.atlassian.servicedesk:next-gen-facilities-service-desk","com.atlassian.servicedesk:next-gen-general-service-desk","com.atlassian.servicedesk:next-gen-general-it-service-desk","com.atlassian.servicedesk:next-gen-general-business-service-desk","com.atlassian.servicedesk:next-gen-analytics-service-desk","com.atlassian.servicedesk:next-gen-finance-service-desk","com.atlassian.servicedesk:next-gen-design-service-desk","com.atlassian.servicedesk:next-gen-sales-service-desk","com.atlassian.jira-core-project-templates:jira-core-simplified-content-management","com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval","com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking","com.atlassian.jira-core-project-templates:jira-core-simplified-process-control","com.atlassian.jira-core-project-templates:jira-core-simplified-procurement","com.atlassian.jira-core-project-templates:jira-core-simplified-project-management","com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment","com.atlassian.jira-core-project-templates:jira-core-simplified-task-"]).describe("A predefined configuration for a project. The type of the \`projectTemplateKey\` must match with the type of the \`projectTypeKey\`.").optional(),
  "projectTypeKey": z.enum(["software","service_desk","business"]).describe("The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type.").optional(),
  "url": z.string().describe("A link to information about this project, such as project documentation").optional(),
  "workflowScheme": z.number().int().describe("The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-3-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key.").optional()
}
```

### createprojectwithcustomtemplate

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nProject Details").optional(),
  "template": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe specific request object for creating a project with template.").optional()
}
```

### getrecent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  \`description\` Returns the project description.\n *  \`projectKeys\` Returns all project keys associated with a project.\n *  \`lead\` Returns information about the project lead.\n *  \`issueTypes\` Returns all issue types associated with the project.\n *  \`url\` Returns the URL associated with the project.\n *  \`permissions\` Returns the permissions associated with the project.\n *  \`insight\` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.\n *  \`*\` Returns the project with all available expand options.").optional(),
  "properties": z.array(z.record(z.never())).describe("EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored.").optional()
}
```

### searchprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["category","-category","+category","key","-key","+key","name","-name","+name","owner","-owner","+owner","issueCount","-issueCount","+issueCount","lastIssueUpdatedDate","-lastIssueUpdatedDate","+lastIssueUpdatedDate","archivedDate","+archivedDate","-archivedDate","deletedDate","+deletedDate","-deletedDate"]).describe("[Order](#ordering) the results by a field.\n\n *  \`category\` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).\n *  \`issueCount\` Sorts by the total number of issues in each project.\n *  \`key\` Sorts by project key.\n *  \`lastIssueUpdatedTime\` Sorts by the last issue update time.\n *  \`name\` Sorts by project name.\n *  \`owner\` Sorts by project lead.\n *  \`archivedDate\` EXPERIMENTAL. Sorts by project archived date.\n *  \`deletedDate\` EXPERIMENTAL. Sorts by project deleted date.").optional(),
  "id": z.array(z.number().int()).describe("The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`. Up to 50 project IDs can be provided.").optional(),
  "keys": z.array(z.string()).describe("The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, \`keys=PA&keys=PB\`. Up to 50 project keys can be provided.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Projects with a matching \`key\` or \`name\` are returned (case insensitive).").optional(),
  "typeKey": z.string().describe("Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are \`business\`, \`service_desk\`, and \`software\`.").optional(),
  "categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.").optional(),
  "action": z.enum(["view","browse","edit","create"]).describe("Filter results by projects for which the user can:\n\n *  \`view\` the project, meaning that they have one of the following permissions:\n    \n     *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  \`browse\` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n *  \`edit\` the project, meaning that they have one of the following permissions:\n    \n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  \`create\` the project, meaning that they have the *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue is created.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  \`description\` Returns the project description.\n *  \`projectKeys\` Returns all project keys associated with a project.\n *  \`lead\` Returns information about the project lead.\n *  \`issueTypes\` Returns all issue types associated with the project.\n *  \`url\` Returns the URL associated with the project.\n *  \`insight\` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.").optional(),
  "status": z.array(z.enum(["live","archived","deleted"])).describe("EXPERIMENTAL. Filter results by project status:\n\n *  \`live\` Search live projects.\n *  \`archived\` Search archived projects.\n *  \`deleted\` Search deleted projects, those in the recycle bin.").optional(),
  "properties": z.array(z.record(z.never())).describe("EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional(),
  "propertyQuery": z.string().describe("EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of \`nested\` from \`{\"something\":{\"nested\":1,\"other\":2}}\` use \`[thepropertykey].something.nested=1\`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that \`thepropertykey\` is only returned when included in \`properties\`.").optional()
}
```

### getallprojecttypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getallaccessibleprojecttypes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getprojecttypebykey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectTypeKey": z.enum(["software","service_desk","business","product_discovery"]).describe("The key of the project type.")
}
```

### getaccessibleprojecttypebykey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectTypeKey": z.enum(["software","service_desk","business","product_discovery"]).describe("The key of the project type.")
}
```

### deleteproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "enableUndo": z.boolean().describe("Whether this project is placed in the Jira recycle bin where it will be available for restoration.").optional()
}
```

### getproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  \`description\` The project description.\n *  \`issueTypes\` The issue types associated with the project.\n *  \`lead\` The project lead.\n *  \`projectKeys\` All project keys associated with the project.\n *  \`issueTypeHierarchy\` The project issue type hierarchy.").optional(),
  "properties": z.array(z.string()).describe("A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional()
}
```

### updateproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  \`description\` The project description.\n *  \`issueTypes\` The issue types associated with the project.\n *  \`lead\` The project lead.\n *  \`projectKeys\` All project keys associated with the project.").optional(),
  "assigneeType": z.enum(["PROJECT_LEAD","UNASSIGNED"]).describe("The default assignee when creating issues for this project.").optional(),
  "avatarId": z.number().int().describe("An integer value for the project's avatar.").optional(),
  "categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. To remove the project category from the project, set the value to \`-1.\`").optional(),
  "description": z.string().describe("A brief description of the project.").optional(),
  "issueSecurityScheme": z.number().int().describe("The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.").optional(),
  "key": z.string().describe("Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.").optional(),
  "lead": z.string().describe("This parameter is deprecated because of privacy changes. Use \`leadAccountId\` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Cannot be provided with \`leadAccountId\`.").optional(),
  "leadAccountId": z.string().max(128).describe("The account ID of the project lead. Cannot be provided with \`lead\`.").optional(),
  "name": z.string().describe("The name of the project.").optional(),
  "notificationScheme": z.number().int().describe("The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.").optional(),
  "permissionScheme": z.number().int().describe("The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.").optional(),
  "releasedProjectKeys": z.array(z.string()).describe("Previous project keys to be released from the current project. Released keys must belong to the current project and not contain the current project key").optional(),
  "url": z.string().describe("A link to information about this project, such as project documentation").optional()
}
```

### archiveproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### updateprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
  "fileName": z.string().describe("The file name of the avatar icon. Returned for system avatars.").readonly().optional(),
  "id": z.string().describe("The ID of the avatar."),
  "isDeletable": z.boolean().describe("Whether the avatar can be deleted.").readonly().optional(),
  "isSelected": z.boolean().describe("Whether the avatar is used in Jira. For example, shown as a project's avatar.").readonly().optional(),
  "isSystemAvatar": z.boolean().describe("Whether the avatar is a system avatar.").readonly().optional(),
  "owner": z.string().describe("The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.").readonly().optional(),
  "urls": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe list of avatar icon URLs.").optional()
}
```

### deleteprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or (case-sensitive) key."),
  "id": z.number().int().describe("The ID of the avatar.")
}
```

### createprojectavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.").optional()
}
```

### getallprojectavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project.")
}
```

### removedefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case-sensitive).")
}
```

### getdefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case-sensitive).")
}
```

### updatedefaultprojectclassification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case-sensitive)."),
  "id": z.string().describe("The ID of the project classification.")
}
```

### getprojectcomponentspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","issueCount","-issueCount","+issueCount","lead","-lead","+lead","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  \`description\` Sorts by the component description.\n *  \`issueCount\` Sorts by the count of issues associated with the component.\n *  \`lead\` Sorts by the user key of the component's project lead.\n *  \`name\` Sorts by component name.").optional(),
  "componentSource": z.enum(["jira","compass","auto"]).describe("The source of the components to return. Can be \`jira\` (default), \`compass\` or \`auto\`. When \`auto\` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to \`jira\`.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Components with a matching \`name\` or \`description\` are returned (case insensitive).").optional()
}
```

### getprojectcomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "componentSource": z.enum(["jira","compass","auto"]).describe("The source of the components to return. Can be \`jira\` (default), \`compass\` or \`auto\`. When \`auto\` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to \`jira\`.").optional()
}
```

### deleteprojectasynchronously

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### getfeaturesforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project.")
}
```

### togglefeatureforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
  "featureKey": z.string().describe("The key of the feature."),
  "state": z.enum(["ENABLED","DISABLED","COMING_SOON"]).describe("The feature state.").optional()
}
```

### getprojectpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### deleteprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "propertyKey": z.string().describe("The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.")
}
```

### getprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "propertyKey": z.string().describe("The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.")
}
```

### setprojectproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "propertyKey": z.string().describe("The key of the project property. The maximum length is 255 characters.")
}
```

### restore

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### getprojectroles

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### deleteactor

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "user": z.string().describe("The user account ID of the user to remove from the project role.").optional(),
  "group": z.string().describe("The name of the group to remove from the project role. This parameter cannot be used with the \`groupId\` parameter. As a group's name can change, use of \`groupId\` is recommended.").optional(),
  "groupId": z.string().describe("The ID of the group to remove from the project role. This parameter cannot be used with the \`group\` parameter.").optional()
}
```

### getprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "excludeInactiveUsers": z.boolean().describe("Exclude inactive users.").optional()
}
```

### addactorusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "group": z.array(z.string()).describe("The name of the group to add. This parameter cannot be used with the \`groupId\` parameter. As a group's name can change, use of \`groupId\` is recommended.").optional(),
  "groupId": z.array(z.string()).describe("The ID of the group to add. This parameter cannot be used with the \`group\` parameter.").optional(),
  "user": z.array(z.string()).describe("The user account ID of the user to add.").optional()
}
```

### setactors

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "categorisedActors": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe actors to add to the project role.\n\nAdd groups using:\n\n *  \`atlassian-group-role-actor\` and a list of group names.\n *  \`atlassian-group-role-actor-id\` and a list of group IDs.\n\nAs a group's name can change, use of \`atlassian-group-role-actor-id\` is recommended. For example, \`\"atlassian-group-role-actor-id\":[\"eef79f81-0b89-4fca-a736-4be531a10869\",\"77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\"]\`.\n\nAdd users using \`atlassian-user-role-actor\` and a list of account IDs. For example, \`\"atlassian-user-role-actor\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]\`.").optional(),
  "b_id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.").readonly().optional()
}
```

### getprojectroledetails

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "currentMember": z.boolean().describe("Whether the roles should be filtered to include only those the user is assigned to.").optional(),
  "excludeConnectAddons": z.boolean().optional()
}
```

### getallstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}
```

### getprojectversionspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "orderBy": z.enum(["description","-description","+description","name","-name","+name","releaseDate","-releaseDate","+releaseDate","sequence","-sequence","+sequence","startDate","-startDate","+startDate"]).describe("[Order](#ordering) the results by a field:\n\n *  \`description\` Sorts by version description.\n *  \`name\` Sorts by version name.\n *  \`releaseDate\` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.\n *  \`sequence\` Sorts by the order of appearance in the user interface.\n *  \`startDate\` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.").optional(),
  "query": z.string().describe("Filter the results using a literal string. Versions with matching \`name\` or \`description\` are returned (case insensitive).").optional(),
  "status": z.string().describe("A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are \`released\`, \`unreleased\`, and \`archived\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`issuesstatus\` Returns the number of issues in each status category for each version.\n *  \`operations\` Returns actions that can be performed on the specified version.\n *  \`driver\` Returns the Atlassian account ID of the version driver.\n *  \`approvers\` Returns a list containing the approvers for this version.").optional()
}
```

### getprojectversions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts \`operations\`, which returns actions that can be performed on the version.").optional()
}
```

### getprojectemail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.number().int().describe("The project ID.")
}
```

### updateprojectemail

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.number().int().describe("The project ID."),
  "emailAddress": z.string().describe("The email address.").optional(),
  "emailAddressStatus": z.array(z.string()).describe("When using a custom domain, the status of the email address.").optional()
}
```

### gethierarchy

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.number().int().describe("The ID of the project.")
}
```

### getprojectissuesecurityscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive).")
}
```

### getnotificationschemeforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`all\` Returns all expandable information\n *  \`field\` Returns information about any custom fields assigned to receive an event\n *  \`group\` Returns information about any groups assigned to receive an event\n *  \`notificationSchemeEvents\` Returns a list of event associations. This list is returned for all expandable information\n *  \`projectRole\` Returns information about any project roles assigned to receive an event\n *  \`user\` Returns information about any users assigned to receive an event").optional()
}
```

### getassignedpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional()
}
```

### assignpermissionscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:\n\n *  \`all\` Returns all expandable information.\n *  \`field\` Returns information about the custom field granted the permission.\n *  \`group\` Returns information about the group that is granted the permission.\n *  \`permissions\` Returns all permission grants for each permission scheme.\n *  \`projectRole\` Returns information about the project role granted the permission.\n *  \`user\` Returns information about the user who is granted the permission.").optional(),
  "id": z.number().int().describe("The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to get a list of permission scheme IDs.")
}
```

### getsecuritylevelsforproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive).")
}
```

### getallprojectcategories

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the project category.").optional(),
  "id": z.string().describe("The ID of the project category.").readonly().optional(),
  "name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(),
  "self": z.string().url().describe("The URL of the project category.").readonly().optional()
}
```

### removeprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("ID of the project category to delete.")
}
```

### getprojectcategorybyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project category.")
}
```

### updateprojectcategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int(),
  "description": z.string().describe("The description of the project category.").optional(),
  "b_id": z.string().describe("The ID of the project category.").readonly().optional(),
  "name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(),
  "self": z.string().url().describe("The URL of the project category.").readonly().optional()
}
```

### validateprojectkey

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The project key.").optional()
}
```

### getvalidprojectkey

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().describe("The project key.").optional()
}
```

### getvalidprojectname

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string().describe("The project name.")
}
```

### getresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().max(255).describe("The description of the resolution.").optional(),
  "name": z.string().max(60).describe("The name of the resolution. Must be unique (case-insensitive).")
}
```

### setdefaultresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting.")
}
```

### moveresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "after": z.string().describe("The ID of the resolution. Required if \`position\` isn't provided.").optional(),
  "ids": z.array(z.string()).describe("The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID."),
  "position": z.string().describe("The position for issue resolutions to be moved to. Required if \`after\` isn't provided.").optional()
}
```

### searchresolutions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of resolutions IDs to be filtered out").optional(),
  "onlyDefault": z.boolean().describe("When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false").optional()
}
```

### deleteresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue resolution."),
  "replaceWith": z.string().describe("The ID of the issue resolution that will replace the currently selected resolution.")
}
```

### getresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue resolution value.")
}
```

### updateresolution

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue resolution."),
  "description": z.string().max(255).describe("The description of the resolution.").optional(),
  "name": z.string().max(60).describe("The name of the resolution. Must be unique.")
}
```

### getallprojectroles

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.").optional(),
  "name": z.string().describe("The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.").optional()
}
```

### deleteprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "swap": z.number().int().describe("The ID of the project role that will replace the one being deleted. The swap will attempt to swap the role in schemes (notifications, permissions, issue security), workflows, worklogs and comments.").optional()
}
```

### getprojectrolebyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.")
}
```

### partialupdateprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "description": z.string().describe("A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.").optional(),
  "name": z.string().describe("The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.").optional()
}
```

### fullyupdateprojectrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "description": z.string().describe("A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.").optional(),
  "name": z.string().describe("The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.").optional()
}
```

### deleteprojectroleactorsfromrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "user": z.string().describe("The user account ID of the user to remove as a default actor.").optional(),
  "groupId": z.string().describe("The group ID of the group to be removed as a default actor. This parameter cannot be used with the \`group\` parameter.").optional(),
  "group": z.string().describe("The group name of the group to be removed as a default actor.This parameter cannot be used with the \`groupId\` parameter. As a group's name can change, use of \`groupId\` is recommended.").optional()
}
```

### getprojectroleactorsforrole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.")
}
```

### addprojectroleactorstorole

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "group": z.array(z.string()).describe("The name of the group to add as a default actor. This parameter cannot be used with the \`groupId\` parameter. As a group's name can change,use of \`groupId\` is recommended. This parameter accepts a comma-separated list. For example, \`\"group\":[\"project-admin\", \"jira-developers\"]\`.").optional(),
  "groupId": z.array(z.string()).describe("The ID of the group to add as a default actor. This parameter cannot be used with the \`group\` parameter This parameter accepts a comma-separated list. For example, \`\"groupId\":[\"77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\", \"0c011f85-69ed-49c4-a801-3b18d0f771bc\"]\`.").optional(),
  "user": z.array(z.string()).describe("The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, \`\"user\":[\"5b10a2844c20165700ede21g\", \"5b109f2e9729b51b54dc274d\"]\`.").optional()
}
```

### getscreens

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with screen name.").optional(),
  "scope": z.array(z.enum(["GLOBAL","TEMPLATE","PROJECT"])).describe("The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, \`scope=GLOBAL&scope=PROJECT\`.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  \`id\` Sorts by screen ID.\n *  \`name\` Sorts by screen name.").optional()
}
```

### createscreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the screen. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen. The name must be unique. The maximum length is 255 characters.")
}
```

### addfieldtodefaultscreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fieldId": z.string().describe("The ID of the field.")
}
```

### getbulkscreentabs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.array(z.number().int()).describe("The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, \`screenId=10000&screenId=10001\`.").optional(),
  "tabId": z.array(z.number().int()).describe("The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, \`tabId=10000&tabId=10001\`.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResult": z.number().int().describe("The maximum number of items to return per page. The maximum number is 100,").optional()
}
```

### deletescreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen.")
}
```

### updatescreen

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "description": z.string().describe("The description of the screen. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen. The name must be unique. The maximum length is 255 characters.").optional()
}
```

### getavailablescreenfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen.")
}
```

### getallscreentabs

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "projectKey": z.string().describe("The key of the project.").optional()
}
```

### addscreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "id": z.number().int().describe("The ID of the screen tab.").readonly().optional(),
  "name": z.string().describe("The name of the screen tab. The maximum length is 255 characters.")
}
```

### deletescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab.")
}
```

### renamescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "id": z.number().int().describe("The ID of the screen tab.").readonly().optional(),
  "name": z.string().describe("The name of the screen tab. The maximum length is 255 characters.")
}
```

### getallscreentabfields

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "projectKey": z.string().describe("The key of the project.").optional()
}
```

### addscreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "fieldId": z.string().describe("The ID of the field to add.")
}
```

### removescreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "id": z.string().describe("The ID of the field.")
}
```

### movescreentabfield

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "id": z.string().describe("The ID of the field."),
  "after": z.string().url().describe("The ID of the screen tab field after which to place the moved screen tab field. Required if \`position\` isn't provided.").optional(),
  "position": z.enum(["Earlier","Later","First","Last"]).describe("The named position to which the screen tab field should be moved. Required if \`after\` isn't provided.").optional()
}
```

### movescreentab

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "pos": z.number().int().describe("The position of tab. The base index is 0.")
}
```

### getscreenschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, \`id=10000&id=10001\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) include additional information in the response. This parameter accepts \`issueTypeScreenSchemes\` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with screen scheme name.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  \`id\` Sorts by screen scheme ID.\n *  \`name\` Sorts by screen scheme name.").optional()
}
```

### createscreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the screen scheme. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen scheme. The name must be unique. The maximum length is 255 characters."),
  "screens": z.string()
}
```

### deletescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenSchemeId": z.string().describe("The ID of the screen scheme.")
}
```

### updatescreenscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "screenSchemeId": z.string().describe("The ID of the screen scheme."),
  "description": z.string().describe("The description of the screen scheme. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen scheme. The name must be unique. The maximum length is 255 characters.").optional(),
  "screens": z.string().optional()
}
```

### searchforissuesusingjql

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "jql": z.string().describe("The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:\n\n *  If no JQL expression is provided, all issues are returned.\n *  \`username\` and \`userkey\` cannot be used as search terms due to privacy reasons. Use \`accountId\` instead.\n *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting \`id\` or \`key\` only.").optional(),
  "validateQuery": z.enum(["strict","warn","none","true","false"]).describe("Determines how to validate the JQL query and treat the validation results. Supported values are:\n\n *  \`strict\` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).\n *  \`warn\` Returns all errors as warnings.\n *  \`none\` No validation is performed.\n *  \`true\` *Deprecated* A legacy synonym for \`strict\`.\n *  \`false\` *Deprecated* A legacy synonym for \`warn\`.\n\nNote: If the JQL is not correctly formed a 400 response code is returned, regardless of the \`validateQuery\` value.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  \`summary,comment\` Returns only the summary and comments fields.\n *  \`-description\` Returns all navigable (default) fields except description.\n *  \`*all,-comment\` Returns all fields except comments.\n\nThis parameter may be specified multiple times. For example, \`fields=field1,field2&fields=field3\`.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`operations\` Returns all possible operations for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Instead of \`fields\`, returns \`versionedRepresentations\` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(),
  "properties": z.array(z.string()).describe("A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, \`properties=prop1,prop2&properties=prop3\`. A maximum of 5 issue property keys can be specified.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID).").optional(),
  "failFast": z.boolean().describe("Whether to fail the request quickly in case of an error while loading fields for an issue. For \`failFast=true\`, if one field fails, the entire operation fails. For \`failFast=false\`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s).").optional()
}
```

### searchforissuesusingjqlpost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string()).describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where \`expand\` is specified, \`expand\` is defined as a list of values. The expand options are:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`operations\` Returns all possible operations for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Instead of \`fields\`, returns \`versionedRepresentations\` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nThe default is \`*navigable\`.\n\nExamples:\n\n *  \`summary,comment\` Returns the summary and comments fields only.\n *  \`-description\` Returns all navigable (default) fields except description.\n *  \`*all,-comment\` Returns all fields except comments.\n\nMultiple \`fields\` parameters can be included in a request.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is \`false\`.").optional(),
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "properties": z.array(z.string()).describe("A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in the page of results (page offset). The base index is \`0\`.").optional(),
  "validateQuery": z.enum(["strict","warn","none","true","false"]).describe("Determines how to validate the JQL query and treat the validation results. Supported values:\n\n *  \`strict\` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).\n *  \`warn\` Returns all errors as warnings.\n *  \`none\` No validation is performed.\n *  \`true\` *Deprecated* A legacy synonym for \`strict\`.\n *  \`false\` *Deprecated* A legacy synonym for \`warn\`.\n\nThe default is \`strict\`.\n\nNote: If the JQL is not correctly formed a 400 response code is returned, regardless of the \`validateQuery\` value.").optional()
}
```

### countissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.").optional()
}
```

### searchforissuesids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Order by clauses are not allowed.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "nextPageToken": z.string().describe("The continuation token to fetch the next page. This token is provided by the response of this endpoint.").optional()
}
```

### searchandreconsileissuesusingjql

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.\n\n *  Example of an unbounded query: \`order by key desc\`.\n *  Example of a bounded query: \`assignee = currentUser() order by key\`.\n\nAdditionally, \`orderBy\` clause can contain a maximum of 7 fields.").optional(),
  "nextPageToken": z.string().describe("The token for a page to fetch that is not the first page. The first page has a \`nextPageToken\` of \`null\`. Use the \`nextPageToken\` to fetch the next page of issues.\n\nNote: The \`nextPageToken\` field is **not included** in the response for the last page, indicating there is no next page.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting \`id\` or \`key\` only. It returns max 5000 issues.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  \`id\` Returns only issue IDs.\n *  Any issue field, prefixed with a minus to exclude.\n\nThe default is \`id\`.\n\nExamples:\n\n *  \`summary,comment\` Returns only the summary and comments fields only.\n *  \`-description\` Returns all navigable (default) fields except description.\n *  \`*all,-comment\` Returns all fields except comments.\n\nMultiple \`fields\` parameters can be included in a request.\n\nNote: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where \`expand\` is specified, \`expand\` is defined as a comma-delimited string of values. The expand options are:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`operations\` Returns all possible operations for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Instead of \`fields\`, returns \`versionedRepresentations\` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.\n\nExamples: \`\"names,changelog\"\` Returns the display name of each field as well as a list of recent updates to an issue.").optional(),
  "properties": z.array(z.string()).describe("A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is \`false\`.").optional(),
  "failFast": z.boolean().describe("Fail this request early if we can't retrieve all field data.").optional(),
  "reconcileIssues": z.array(z.number().int()).describe("Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids").optional()
}
```

### searchandreconsileissuesusingjqlpost

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where \`expand\` is specified, \`expand\` is defined as a comma-delimited string of values. The expand options are:\n\n *  \`renderedFields\` Returns field values rendered in HTML format.\n *  \`names\` Returns the display name of each field.\n *  \`schema\` Returns the schema describing a field type.\n *  \`transitions\` Returns all possible transitions for the issue.\n *  \`operations\` Returns all possible operations for the issue.\n *  \`editmeta\` Returns information about how each field can be edited.\n *  \`changelog\` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  \`versionedRepresentations\` Instead of \`fields\`, returns \`versionedRepresentations\` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.\n\nExamples: \`\"names,changelog\"\` Returns the display name of each field as well as a list of recent updates to an issue.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue. Use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`*all\` Returns all fields.\n *  \`*navigable\` Returns navigable fields.\n *  \`id\` Returns only issue IDs.\n *  Any issue field, prefixed with a dash to exclude.\n\nThe default is \`id\`.\n\nExamples:\n\n *  \`summary,comment\` Returns the summary and comments fields only.\n *  \`*all,-comment\` Returns all fields except comments.\n\nMultiple \`fields\` parameters can be included in a request.\n\nNote: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is \`false\`.").optional(),
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.\n\n *  Example of an unbounded query: \`order by key desc\`.\n *  Example of a bounded query: \`assignee = currentUser() order by key\`.\n\nAdditionally, \`orderBy\` clause can contain a maximum of 7 fields.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting \`id\` or \`key\` only. It returns max 5000 issues.").optional(),
  "nextPageToken": z.string().describe("The token for a page to fetch that is not the first page. The first page has a \`nextPageToken\` of \`null\`. Use the \`nextPageToken\` to fetch the next page of issues.").optional(),
  "properties": z.array(z.string()).describe("A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.").optional(),
  "reconcileIssues": z.array(z.number().int()).describe("Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids").optional()
}
```

### getissuesecuritylevel

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the issue security level.")
}
```

### getserverinfo

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getissuenavigatordefaultcolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### setissuenavigatordefaultcolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "idOrName": z.string().describe("The ID or name of the status.")
}
```

### getstatuscategories

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getstatuscategory

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "idOrKey": z.string().describe("The ID or key of the status category.")
}
```

### deletestatusesbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.array(z.string()).describe("The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items \`1\`, Max items \`50\`")
}
```

### getstatusesbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`usages\` Returns the project and issue types that use the status in their workflow.\n *  \`workflowUsages\` Returns the workflows that use the status.").optional(),
  "id": z.array(z.string()).describe("The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items \`1\`, Max items \`50\`")
}
```

### createstatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "scope": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe scope of the status."),
  "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "name": z.string().max(255).describe("The name of the status."), "statusCategory": z.enum(["TODO","IN_PROGRESS","DONE"]).describe("The category of the status.") }).strict().describe("Details of the status being created.")).describe("Details of the statuses being created.")
}
```

### updatestatuses

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "id": z.string().describe("The ID of the status."), "name": z.string().describe("The name of the status."), "statusCategory": z.enum(["TODO","IN_PROGRESS","DONE"]).describe("The category of the status.") }).catchall(z.any()).describe("Details of the status being updated.")).describe("The list of statuses that will be updated.")
}
```

### search

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`usages\` Returns the project and issue types that use the status in their workflow.\n *  \`workflowUsages\` Returns the workflows that use the status.").optional(),
  "projectId": z.string().describe("The project the status is part of or null for global statuses.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "searchString": z.string().max(255).describe("Term to match status names against or null to search for all statuses in the search scope.").optional(),
  "statusCategory": z.string().describe("Category of the status to filter by. The supported values are: \`TODO\`, \`IN_PROGRESS\`, and \`DONE\`.").optional()
}
```

### getprojectissuetypeusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "statusId": z.string().describe("The statusId to fetch issue type usages for"),
  "projectId": z.string().describe("The projectId to fetch issue type usages for"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### getprojectusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "statusId": z.string().describe("The statusId to fetch project usages for"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### getworkflowusagesforstatus

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "statusId": z.string().describe("The statusId to fetch workflow usages for"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### gettask

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "taskId": z.string().describe("The ID of the task.")
}
```

### canceltask

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "taskId": z.string().describe("The ID of the task.")
}
```

### getuimodifications

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`data\` Returns UI modification data.\n *  \`contexts\` Returns UI modification contexts.").optional()
}
```

### createuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "contexts": z.array(z.object({ "id": z.string().describe("The ID of the UI modification context.").readonly().optional(), "isAvailable": z.boolean().describe("Whether a context is available. For example, when a project is deleted the context becomes unavailable.").readonly().optional(), "issueTypeId": z.string().describe("The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.").optional(), "projectId": z.string().describe("The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.").optional(), "viewType": z.enum(["GIC","IssueView","IssueTransition"]).describe("The view type of the context. Only \`GIC\`(Global Issue Create), \`IssueView\` and \`IssueTransition\` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.").optional() }).strict().describe("The details of a UI modification's context, which define where to activate the UI modification.")).describe("List of contexts of the UI modification. The maximum number of contexts is 1000.").optional(),
  "data": z.string().describe("The data of the UI modification. The maximum size of the data is 50000 characters.").optional(),
  "description": z.string().describe("The description of the UI modification. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the UI modification. The maximum length is 255 characters.")
}
```

### deleteuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "uiModificationId": z.string().describe("The ID of the UI modification.")
}
```

### updateuimodification

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "uiModificationId": z.string().describe("The ID of the UI modification."),
  "contexts": z.array(z.object({ "id": z.string().describe("The ID of the UI modification context.").readonly().optional(), "isAvailable": z.boolean().describe("Whether a context is available. For example, when a project is deleted the context becomes unavailable.").readonly().optional(), "issueTypeId": z.string().describe("The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.").optional(), "projectId": z.string().describe("The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.").optional(), "viewType": z.enum(["GIC","IssueView","IssueTransition"]).describe("The view type of the context. Only \`GIC\`(Global Issue Create), \`IssueView\` and \`IssueTransition\` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.").optional() }).strict().describe("The details of a UI modification's context, which define where to activate the UI modification.")).describe("List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts.").optional(),
  "data": z.string().describe("The data of the UI modification. The maximum size of the data is 50000 characters.").optional(),
  "description": z.string().describe("The description of the UI modification. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the UI modification. The maximum length is 255 characters.").optional()
}
```

### getavatars

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "entityId": z.string().describe("The ID of the item the avatar is associated with.")
}
```

### storeavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "entityId": z.string().describe("The ID of the item the avatar is associated with."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.")
}
```

### deleteavatar

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "owningObjectId": z.string().describe("The ID of the item the avatar is associated with."),
  "id": z.number().int().describe("The ID of the avatar.")
}
```

### getavatarimagebytype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["issuetype","project","priority"]).describe("The icon type of the avatar."),
  "size": z.enum(["xsmall","small","medium","large","xlarge"]).describe("The size of the avatar image. If not provided the default size is returned.").optional(),
  "format": z.enum(["png","svg"]).describe("The format to return the avatar image in. If not provided the original content format is returned.").optional()
}
```

### getavatarimagebyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["issuetype","project","priority"]).describe("The icon type of the avatar."),
  "id": z.number().int().describe("The ID of the avatar."),
  "size": z.enum(["xsmall","small","medium","large","xlarge"]).describe("The size of the avatar image. If not provided the default size is returned.").optional(),
  "format": z.enum(["png","svg"]).describe("The format to return the avatar image in. If not provided the original content format is returned.").optional()
}
```

### getavatarimagebyowner

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.enum(["issuetype","project","priority"]).describe("The icon type of the avatar."),
  "entityId": z.string().describe("The ID of the project or issue type the avatar belongs to."),
  "size": z.enum(["xsmall","small","medium","large","xlarge"]).describe("The size of the avatar image. If not provided the default size is returned.").optional(),
  "format": z.enum(["png","svg"]).describe("The format to return the avatar image in. If not provided the original content format is returned.").optional()
}
```

### removeuser

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*."),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "key": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### getuser

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.").optional(),
  "key": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`groups\` includes all groups and nested groups to which the user belongs.\n *  \`applicationRoles\` includes details of all the applications to which the user has access.").optional()
}
```

### createuser

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "applicationKeys": z.array(z.string()).describe("Deprecated, do not use.").optional(),
  "displayName": z.string().describe("This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.").optional(),
  "emailAddress": z.string().describe("The email address for the user."),
  "key": z.string().describe("This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "name": z.string().describe("This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "password": z.string().describe("This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.").optional(),
  "products": z.array(z.string()).describe("Products the new user has access to. Valid products are: jira-core, jira-servicedesk, jira-product-discovery, jira-software. To create a user without product access, set this field to be an empty array."),
  "self": z.string().describe("The URL of the user.").readonly().optional()
}
```

### findbulkassignableusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes, such as \`displayName\` and \`emailAddress\`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*. Required, unless \`accountId\` is specified.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("A query string that is matched exactly against user \`accountId\`. Required, unless \`query\` is specified.").optional(),
  "projectKeys": z.string().describe("A list of project keys (case sensitive). This parameter accepts a comma-separated list."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### findassignableusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes, such as \`displayName\`, and \`emailAddress\`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*. Required, unless \`username\` or \`accountId\` is specified.").optional(),
  "sessionId": z.string().describe("The sessionId of this request. SessionId is the same until the assignee is set.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("A query string that is matched exactly against user \`accountId\`. Required, unless \`query\` is specified.").optional(),
  "project": z.string().describe("The project ID or project key (case sensitive). Required, unless \`issueKey\` or \`issueId\` is specified.").optional(),
  "issueKey": z.string().describe("The key of the issue. Required, unless \`issueId\` or \`project\` is specified.").optional(),
  "issueId": z.string().describe("The ID of the issue. Required, unless \`issueKey\` or \`project\` is specified.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue.").optional(),
  "actionDescriptorId": z.number().int().describe("The ID of the transition.").optional(),
  "recommend": z.boolean().optional()
}
```

### bulkgetusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "username": z.array(z.string()).describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "key": z.array(z.string()).describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.array(z.string().max(128)).describe("The account ID of a user. To specify multiple users, pass multiple \`accountId\` parameters. For example, \`accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5\`.")
}
```

### bulkgetusersmigration

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "username": z.array(z.string()).describe("Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, \`username=fred&username=barney\`. Required if \`key\` isn't provided. Cannot be provided if \`key\` is present.").optional(),
  "key": z.array(z.string()).describe("Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, \`key=fred&key=barney\`. Required if \`username\` isn't provided. Cannot be provided if \`username\` is present.").optional()
}
```

### resetusercolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### getuserdefaultcolumns

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "username": z.string().describe("This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### setusercolumns

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional()
}
```

### getuseremail

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, \`5b10ac8d82e05b22cc7d4ef5\`.")
}
```

### getuseremailbulk

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.array(z.string().max(128)).describe("The account IDs of the users for which emails are required. An \`accountId\` is an identifier that uniquely identifies the user across all Atlassian products. For example, \`5b10ac8d82e05b22cc7d4ef5\`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).")
}
```

### getusergroups

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*."),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "key": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### getusernavproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the user's property."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional()
}
```

### setusernavproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the nav property. The maximum length is 255 characters."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional()
}
```

### finduserswithallpermissions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes, such as \`displayName\` and \`emailAddress\`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*. Required, unless \`accountId\` is specified.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("A query string that is matched exactly against user \`accountId\`. Required, unless \`query\` is specified.").optional(),
  "permissions": z.string().describe("A comma separated list of permissions. Permissions can be specified as any:\n\n *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).\n *  custom project permission added by Connect apps.\n *  (deprecated) one of the following:\n    \n     *  ASSIGNABLE\\_USER\n     *  ASSIGN\\_ISSUE\n     *  ATTACHMENT\\_DELETE\\_ALL\n     *  ATTACHMENT\\_DELETE\\_OWN\n     *  BROWSE\n     *  CLOSE\\_ISSUE\n     *  COMMENT\\_DELETE\\_ALL\n     *  COMMENT\\_DELETE\\_OWN\n     *  COMMENT\\_EDIT\\_ALL\n     *  COMMENT\\_EDIT\\_OWN\n     *  COMMENT\\_ISSUE\n     *  CREATE\\_ATTACHMENT\n     *  CREATE\\_ISSUE\n     *  DELETE\\_ISSUE\n     *  EDIT\\_ISSUE\n     *  LINK\\_ISSUE\n     *  MANAGE\\_WATCHER\\_LIST\n     *  MODIFY\\_REPORTER\n     *  MOVE\\_ISSUE\n     *  PROJECT\\_ADMIN\n     *  RESOLVE\\_ISSUE\n     *  SCHEDULE\\_ISSUE\n     *  SET\\_ISSUE\\_SECURITY\n     *  TRANSITION\\_ISSUE\n     *  VIEW\\_VERSION\\_CONTROL\n     *  VIEW\\_VOTERS\\_AND\\_WATCHERS\n     *  VIEW\\_WORKFLOW\\_READONLY\n     *  WORKLOG\\_DELETE\\_ALL\n     *  WORKLOG\\_DELETE\\_OWN\n     *  WORKLOG\\_EDIT\\_ALL\n     *  WORKLOG\\_EDIT\\_OWN\n     *  WORK\\_ISSUE"),
  "issueKey": z.string().describe("The issue key for the issue.").optional(),
  "projectKey": z.string().describe("The project key for the project (case sensitive).").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### findusersforpicker

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes, such as \`displayName\`, and \`emailAddress\`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*."),
  "maxResults": z.number().int().describe("The maximum number of items to return. The total number of matched users is returned in \`total\`.").optional(),
  "showAvatar": z.boolean().describe("Include the URI to the user's avatar.").optional(),
  "exclude": z.array(z.string()).describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "excludeAccountIds": z.array(z.string()).describe("A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, \`excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5\`. Cannot be provided with \`exclude\`.").optional(),
  "avatarSize": z.string().optional(),
  "excludeConnectUsers": z.boolean().optional()
}
```

### getuserpropertykeys

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "userKey": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "username": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### deleteuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the user's property."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "userKey": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "username": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### getuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the user's property."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "userKey": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "username": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### setuserproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the user's property. The maximum length is 255 characters."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "userKey": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "username": z.string().describe("This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}
```

### findusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes ( \`displayName\`, and \`emailAddress\`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*. Required, unless \`accountId\` or \`property\` is specified.").optional(),
  "username": z.string().optional(),
  "accountId": z.string().max(128).describe("A query string that is matched exactly against a user \`accountId\`. Required, unless \`query\` or \`property\` is specified.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of filtered results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "property": z.string().describe("A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of \`nested\` from \`{\"something\":{\"nested\":1,\"other\":2}}\` use \`thepropertykey.something.nested=1\`. Required, unless \`accountId\` or \`query\` is specified.").optional()
}
```

### findusersbyquery

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("The search query."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### finduserkeysbyquery

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("The search query."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResult": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### finduserswithbrowsepermission

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "query": z.string().describe("A query string that is matched against user attributes, such as \`displayName\` and \`emailAddress\`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a \`displayName\` of *John Smith* and a user with an \`emailAddress\` of *johnson@example.com*. Required, unless \`accountId\` is specified.").optional(),
  "username": z.string().describe("This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "accountId": z.string().max(128).describe("A query string that is matched exactly against user \`accountId\`. Required, unless \`query\` is specified.").optional(),
  "issueKey": z.string().describe("The issue key for the issue. Required, unless \`projectKey\` is specified.").optional(),
  "projectKey": z.string().describe("The project key for the project (case sensitive). Required, unless \`issueKey\` is specified.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### getallusersdefault

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return.").optional()
}
```

### getallusers

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return.").optional()
}
```

### createversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "approvers": z.array(z.object({ "accountId": z.string().describe("The Atlassian account ID of the approver.").readonly().optional(), "declineReason": z.string().describe("A description of why the user is declining the approval.").readonly().optional(), "description": z.string().describe("A description of what the user is approving within the specified version.").readonly().optional(), "status": z.string().describe("The status of the approval, which can be *PENDING*, *APPROVED*, or *DECLINED*").readonly().optional() }).catchall(z.any()).describe("Contains details about a version approver.")).describe("If the expand option \`approvers\` is used, returns a list containing the approvers for this version.").readonly().optional(),
  "archived": z.boolean().describe("Indicates that the version is archived. Optional when creating or updating a version.").optional(),
  "description": z.string().describe("The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes.").optional(),
  "driver": z.string().describe("If the expand option \`driver\` is used, returns the Atlassian account ID of the driver.").readonly().optional(),
  "expand": z.string().describe("Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`operations\` Returns the list of operations available for this version.\n *  \`issuesstatus\` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.\n *  \`driver\` Returns the Atlassian account ID of the version driver.\n *  \`approvers\` Returns a list containing approvers for this version.\n\nOptional for create and update.").optional(),
  "id": z.string().describe("The ID of the version.").readonly().optional(),
  "issuesStatusForFixVersion": z.string().optional(),
  "moveUnfixedIssuesTo": z.string().url().describe("The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.").optional(),
  "name": z.string().describe("The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.").optional(),
  "operations": z.array(z.object({ "href": z.string().optional(), "iconClass": z.string().optional(), "id": z.string().optional(), "label": z.string().optional(), "styleClass": z.string().optional(), "title": z.string().optional(), "weight": z.number().int().optional() }).strict().describe("Details about the operations available in this version.")).describe("If the expand option \`operations\` is used, returns the list of operations available for this version.").readonly().optional(),
  "overdue": z.boolean().describe("Indicates that the version is overdue.").readonly().optional(),
  "project": z.string().describe("Deprecated. Use \`projectId\`.").optional(),
  "projectId": z.number().int().describe("The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.").optional(),
  "releaseDate": z.string().date().describe("The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(),
  "released": z.boolean().describe("Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.").optional(),
  "self": z.string().url().describe("The URL of the version.").readonly().optional(),
  "startDate": z.string().date().describe("The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(),
  "userReleaseDate": z.string().describe("The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional(),
  "userStartDate": z.string().describe("The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional()
}
```

### deleteversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version."),
  "moveFixIssuesTo": z.string().describe("The ID of the version to update \`fixVersion\` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional(),
  "moveAffectedIssuesTo": z.string().describe("The ID of the version to update \`affectedVersion\` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional()
}
```

### getversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`operations\` Returns the list of operations available for this version.\n *  \`issuesstatus\` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.\n *  \`driver\` Returns the Atlassian account ID of the version driver.\n *  \`approvers\` Returns a list containing the Atlassian account IDs of approvers for this version.").optional()
}
```

### updateversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version."),
  "approvers": z.array(z.object({ "accountId": z.string().describe("The Atlassian account ID of the approver.").readonly().optional(), "declineReason": z.string().describe("A description of why the user is declining the approval.").readonly().optional(), "description": z.string().describe("A description of what the user is approving within the specified version.").readonly().optional(), "status": z.string().describe("The status of the approval, which can be *PENDING*, *APPROVED*, or *DECLINED*").readonly().optional() }).catchall(z.any()).describe("Contains details about a version approver.")).describe("If the expand option \`approvers\` is used, returns a list containing the approvers for this version.").readonly().optional(),
  "archived": z.boolean().describe("Indicates that the version is archived. Optional when creating or updating a version.").optional(),
  "description": z.string().describe("The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes.").optional(),
  "driver": z.string().describe("If the expand option \`driver\` is used, returns the Atlassian account ID of the driver.").readonly().optional(),
  "expand": z.string().describe("Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`operations\` Returns the list of operations available for this version.\n *  \`issuesstatus\` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.\n *  \`driver\` Returns the Atlassian account ID of the version driver.\n *  \`approvers\` Returns a list containing approvers for this version.\n\nOptional for create and update.").optional(),
  "b_id": z.string().describe("The ID of the version.").readonly().optional(),
  "issuesStatusForFixVersion": z.string().optional(),
  "moveUnfixedIssuesTo": z.string().url().describe("The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.").optional(),
  "name": z.string().describe("The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.").optional(),
  "operations": z.array(z.object({ "href": z.string().optional(), "iconClass": z.string().optional(), "id": z.string().optional(), "label": z.string().optional(), "styleClass": z.string().optional(), "title": z.string().optional(), "weight": z.number().int().optional() }).strict().describe("Details about the operations available in this version.")).describe("If the expand option \`operations\` is used, returns the list of operations available for this version.").readonly().optional(),
  "overdue": z.boolean().describe("Indicates that the version is overdue.").readonly().optional(),
  "project": z.string().describe("Deprecated. Use \`projectId\`.").optional(),
  "projectId": z.number().int().describe("The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.").optional(),
  "releaseDate": z.string().date().describe("The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(),
  "released": z.boolean().describe("Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.").optional(),
  "self": z.string().url().describe("The URL of the version.").readonly().optional(),
  "startDate": z.string().date().describe("The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(),
  "userReleaseDate": z.string().describe("The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional(),
  "userStartDate": z.string().describe("The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional()
}
```

### mergeversions

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version to delete."),
  "moveIssuesTo": z.string().describe("The ID of the version to merge into.")
}
```

### moveversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version to be moved."),
  "after": z.string().url().describe("The URL (self link) of the version after which to place the moved version. Cannot be used with \`position\`.").optional(),
  "position": z.enum(["Earlier","Later","First","Last"]).describe("An absolute position in which to place the moved version. Cannot be used with \`after\`.").optional()
}
```

### getversionrelatedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version.")
}
```

### getrelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version.")
}
```

### createrelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "category": z.string().describe("The category of the related work"),
  "issueId": z.number().int().describe("The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.").readonly().optional(),
  "relatedWorkId": z.string().describe("The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.").readonly().optional(),
  "title": z.string().describe("The title of the related work").optional(),
  "url": z.string().url().describe("The URL of the related work. Will be null for the native release note related work item, but is otherwise required.").optional()
}
```

### updaterelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version to update the related work on. For the related work id, pass it to the input JSON."),
  "category": z.string().describe("The category of the related work"),
  "issueId": z.number().int().describe("The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.").readonly().optional(),
  "relatedWorkId": z.string().describe("The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.").readonly().optional(),
  "title": z.string().describe("The title of the related work").optional(),
  "url": z.string().url().describe("The URL of the related work. Will be null for the native release note related work item, but is otherwise required.").optional()
}
```

### deleteandreplaceversion

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version."),
  "customFieldReplacementList": z.array(z.object({ "customFieldId": z.number().int().describe("The ID of the custom field in which to replace the version number.").optional(), "moveTo": z.number().int().describe("The version number to use as a replacement for the deleted version.").optional() }).strict().describe("Details about the replacement for a deleted version.")).describe("An array of custom field IDs (\`customFieldId\`) and version IDs (\`moveTo\`) to update when the fields contain the deleted version.").optional(),
  "moveAffectedIssuesTo": z.number().int().describe("The ID of the version to update \`affectedVersion\` to when the field contains the deleted version.").optional(),
  "moveFixIssuesTo": z.number().int().describe("The ID of the version to update \`fixVersion\` to when the field contains the deleted version.").optional()
}
```

### getversionunresolvedissues

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the version.")
}
```

### deleterelatedwork

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "versionId": z.string().describe("The ID of the version that the target related work belongs to."),
  "relatedWorkId": z.string().describe("The ID of the related work to delete.")
}
```

### deletewebhookbyid

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "webhookIds": z.array(z.number().int().describe("A list of webhook IDs.")).describe("A list of webhook IDs.")
}
```

### getdynamicwebhooksforapp

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### registerdynamicwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "url": z.string().describe("The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered."),
  "webhooks": z.array(z.object({ "events": z.array(z.enum(["jira:issue_created","jira:issue_updated","jira:issue_deleted","comment_created","comment_updated","comment_deleted","issue_property_set","issue_property_deleted"])).describe("The Jira events that trigger the webhook."), "fieldIdsFilter": z.array(z.string().describe("A list of field IDs. When the issue changelog contains any of the fields, the webhook <code>jira:issue_updated</code> is sent. If this parameter is not present, the app is notified about all field updates.")).describe("A list of field IDs. When the issue changelog contains any of the fields, the webhook \`jira:issue_updated\` is sent. If this parameter is not present, the app is notified about all field updates.").optional(), "issuePropertyKeysFilter": z.array(z.string().describe("A list of issue property keys. A change of those issue properties triggers the <code>issue_property_set</code> or <code>issue_property_deleted</code> webhooks. If this parameter is not present, the app is notified about all issue property updates.")).describe("A list of issue property keys. A change of those issue properties triggers the \`issue_property_set\` or \`issue_property_deleted\` webhooks. If this parameter is not present, the app is notified about all issue property updates.").optional(), "jqlFilter": z.string().describe("The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:\n\n *  Fields: \`issueKey\`, \`project\`, \`issuetype\`, \`status\`, \`assignee\`, \`reporter\`, \`issue.property\`, and \`cf[id]\`. For custom fields (\`cf[id]\`), only the epic label custom field is supported.\".\n *  Operators: \`=\`, \`!=\`, \`IN\`, and \`NOT IN\`.") }).strict().describe("A list of webhooks.")).describe("A list of webhooks.")
}
```

### getfailedwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "maxResults": z.number().int().describe("The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.").optional(),
  "after": z.number().int().describe("The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.").optional()
}
```

### refreshwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "webhookIds": z.array(z.number().int().describe("A list of webhook IDs.")).describe("A list of webhook IDs.")
}
```

### getallworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowName": z.string().describe("The name of the workflow to be returned. Only one workflow can be specified.").optional()
}
```

### createworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "description": z.string().describe("The description of the workflow. The maximum length is 1000 characters.").optional(),
  "name": z.string().describe("The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace."),
  "statuses": z.array(z.object({ "id": z.string().describe("The ID of the status."), "properties": z.record(z.string()).describe("The properties of the status.").optional() }).strict().describe("The details of a transition status.")).describe("The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition."),
  "transitions": z.array(z.object({ "description": z.string().describe("The description of the transition. The maximum length is 1000 characters.").optional(), "from": z.array(z.string()).describe("The statuses the transition can start from.").optional(), "name": z.string().describe("The name of the transition. The maximum length is 60 characters."), "properties": z.record(z.string()).describe("The properties of the transition.").optional(), "rules": z.string().optional(), "screen": z.string().optional(), "to": z.string().describe("The status the transition goes to."), "type": z.enum(["global","initial","directed"]).describe("The type of the transition.") }).strict().describe("The details of a workflow transition.")).describe("The transitions of the workflow. For the request to be valid, these transitions must:\n\n *  include one *initial* transition.\n *  not use the same name for a *global* and *directed* transition.\n *  have a unique name for each *global* transition.\n *  have a unique 'to' status for each *global* transition.\n *  have unique names for each transition from a status.\n *  not have a 'from' status on *initial* and *global* transitions.\n *  have a 'from' status on *directed* transitions.\n\nAll the transition statuses must be included in \`statuses\`.")
}
```

### getworkflowtransitionruleconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(50).describe("The maximum number of items to return per page.").optional(),
  "types": z.array(z.enum(["postfunction","condition","validator"])).describe("The types of the transition rules to return."),
  "keys": z.array(z.string()).describe("The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return.").optional(),
  "workflowNames": z.array(z.string().max(50)).describe("The list of workflow names to filter by.").optional(),
  "withTags": z.array(z.string().max(20)).describe("The list of \`tags\` to filter by.").optional(),
  "draft": z.boolean().describe("Whether draft or published workflows are returned. If not provided, both workflow types are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts \`transition\`, which, for each rule, returns information about the transition the rule is assigned to.").optional()
}
```

### updateworkflowtransitionruleconfigurations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflows": z.array(z.object({ "conditions": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of conditions within the workflow.").optional(), "postFunctions": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of post functions within the workflow.").optional(), "validators": z.array(z.object({ "configuration": z.object({ "disabled": z.boolean().describe("Whether the rule is disabled."), "tag": z.string().max(255).describe("A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).").optional(), "value": z.string().describe("Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.") }).strict().describe("A rule configuration."), "id": z.string().describe("The ID of the transition rule."), "key": z.string().describe("The key of the rule, as defined in the Connect or the Forge app descriptor.").readonly(), "transition": z.string().optional() }).strict().describe("A workflow transition rule.")).describe("The list of validators within the workflow.").optional(), "workflowId": z.object({ "draft": z.boolean().describe("Whether the workflow is in the draft state."), "name": z.string().describe("The name of the workflow.") }).strict().describe("Properties that identify a workflow.") }).strict().describe("A workflow with transition rules.")).describe("The list of workflows with transition rules to update.")
}
```

### deleteworkflowtransitionruleconfigurations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflows": z.array(z.object({ "workflowId": z.object({ "draft": z.boolean().describe("Whether the workflow is in the draft state."), "name": z.string().describe("The name of the workflow.") }).strict().describe("Properties that identify a workflow."), "workflowRuleIds": z.array(z.string().describe("The list of connect workflow rule IDs.")).describe("The list of connect workflow rule IDs.") }).strict().describe("Details about a workflow configuration update request.")).describe("The list of workflows with transition rules to delete.")
}
```

### getworkflowspaginated

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "workflowName": z.array(z.string()).describe("The name of a workflow to return. To include multiple workflows, provide an ampersand-separated list. For example, \`workflowName=name1&workflowName=name2\`.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`transitions\` For each workflow, returns information about the transitions inside the workflow.\n *  \`transitions.rules\` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.\n *  \`transitions.properties\` For each workflow transition, returns information about its properties. Transitions are included automatically if this expand is requested.\n *  \`statuses\` For each workflow, returns information about the statuses inside the workflow.\n *  \`statuses.properties\` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.\n *  \`default\` For each workflow, returns information about whether this is the default workflow.\n *  \`schemes\` For each workflow, returns information about the workflow schemes the workflow is assigned to.\n *  \`projects\` For each workflow, returns information about the projects the workflow is assigned to, through workflow schemes.\n *  \`hasDraftWorkflow\` For each workflow, returns information about whether the workflow has a draft version.\n *  \`operations\` For each workflow, returns information about the actions that can be undertaken on the workflow.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with workflow name.").optional(),
  "orderBy": z.enum(["name","-name","+name","created","-created","+created","updated","+updated","-updated"]).describe("[Order](#ordering) the results by a field:\n\n *  \`name\` Sorts by workflow name.\n *  \`created\` Sorts by create time.\n *  \`updated\` Sorts by update time.").optional(),
  "isActive": z.boolean().describe("Filters active and inactive workflows.").optional()
}
```

### deleteworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The name of the transition property to delete, also known as the name of the property."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to \`live\` for inactive workflows or \`draft\` for draft workflows. Active workflows cannot be edited.").optional()
}
```

### getworkflowtransitionproperties

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition."),
  "includeReservedKeys": z.boolean().describe("Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.").optional(),
  "key": z.string().describe("The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.").optional(),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.").optional()
}
```

### createworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The key of the property being added, also known as the name of the property. Set this to the same value as the \`key\` defined in the request body."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.").optional(),
  "id": z.string().describe("The ID of the transition property.").readonly().optional(),
  "b_key": z.string().describe("The key of the transition property. Also known as the name of the transition property.").readonly().optional(),
  "value": z.string().describe("The value of the transition property.")
}
```

### updateworkflowtransitionproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The key of the property being updated, also known as the name of the property. Set this to the same value as the \`key\` defined in the request body."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to \`live\` for inactive workflows or \`draft\` for draft workflows. Active workflows cannot be edited.").optional(),
  "id": z.string().describe("The ID of the transition property.").readonly().optional(),
  "b_key": z.string().describe("The key of the transition property. Also known as the name of the transition property.").readonly().optional(),
  "value": z.string().describe("The value of the transition property.")
}
```

### deleteinactiveworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "entityId": z.string().describe("The entity ID of the workflow.")
}
```

### getworkflowprojectissuetypeusages

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowId": z.string().describe("The workflow ID"),
  "projectId": z.number().int().describe("The project ID"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### getprojectusagesforworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowId": z.string().describe("The workflow ID"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### getworkflowschemeusagesforworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowId": z.string().describe("The workflow ID"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### readworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`workflows.usages\` Returns the project and issue types that each workflow is associated with.\n *  \`statuses.usages\` Returns the project and issue types that each status is associated with.").optional(),
  "useApprovalConfiguration": z.boolean().describe("Return the new field \`approvalConfiguration\` instead of the deprecated status properties for approval configuration.").optional(),
  "projectAndIssueTypes": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "projectId": z.string().describe("The ID of the project.") }).strict().describe("A project and issueType ID pair that identifies a status mapping.")).describe("The list of projects and issue types to query.").optional(),
  "workflowIds": z.array(z.string().describe("The list of workflow IDs to query.")).describe("The list of workflow IDs to query.").optional(),
  "workflowNames": z.array(z.string().describe("The list of workflow names to query.")).describe("The list of workflow names to query.").optional()
}
```

### workflowcapabilities

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowId": z.string().optional(),
  "projectId": z.string().optional(),
  "issueTypeId": z.string().optional()
}
```

### createworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "scope": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe scope of the workflow.").optional(),
  "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "id": z.string().describe("The ID of the status.").optional(), "name": z.string().describe("The name of the status."), "statusCategory": z.enum(["TODO","IN_PROGRESS","DONE"]).describe("The category of the status."), "statusReference": z.string().describe("The reference of the status.") }).catchall(z.any()).describe("Details of the status being updated.")).describe("The statuses to associate with the workflows.").optional(),
  "workflows": z.array(z.object({ "description": z.string().describe("The description of the workflow to create.").optional(), "loopedTransitionContainerLayout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "name": z.string().describe("The name of the workflow to create."), "startPointLayout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "statuses": z.array(z.object({ "approvalConfiguration": z.object({ "active": z.enum(["true","false"]).describe("Whether the approval configuration is active."), "conditionType": z.enum(["number","percent","numberPerPrincipal"]).describe("How the required approval count is calculated. It may be configured to require a specific number of approvals, or approval by a percentage of approvers. If the approvers source field is Approver groups, you can configure how many approvals per group are required for the request to be approved. The number will be the same across all groups."), "conditionValue": z.string().describe("The number or percentage of approvals required for a request to be approved. If \`conditionType\` is \`number\`, the value must be 20 or less. If \`conditionType\` is \`percent\`, the value must be 100 or less."), "exclude": z.array(z.enum(["assignee","reporter"]).nullable().describe("A list of roles that should be excluded as possible approvers.")).nullable().describe("A list of roles that should be excluded as possible approvers.").optional(), "fieldId": z.string().describe("The custom field ID of the \"Approvers\" or \"Approver Groups\" field."), "prePopulatedFieldId": z.string().nullable().describe("The custom field ID of the field used to pre-populate the Approver field. Only supports the \"Affected Services\" field.").optional(), "transitionApproved": z.string().describe("The numeric ID of the transition to be executed if the request is approved."), "transitionRejected": z.string().describe("The numeric ID of the transition to be executed if the request is declined.") }).strict().nullable().describe("The approval configuration of a status within a workflow. Applies only to Jira Service Management approvals.").optional(), "layout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "properties": z.record(z.string().describe("The properties for this status layout.")).describe("The properties for this status layout."), "statusReference": z.string().describe("A unique ID which the status will use to refer to this layout configuration.") }).catchall(z.any()).describe("The statuses associated with this workflow.")).describe("The statuses associated with this workflow."), "transitions": z.array(z.object({ "actions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The post-functions of the transition.").optional(), "conditions": z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.string()).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.string()).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string()).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.").optional(), "customIssueEventId": z.string().describe("The custom event ID of the transition.").optional(), "description": z.string().describe("The description of the transition.").optional(), "id": z.string().describe("The ID of the transition.").optional(), "links": z.array(z.object({ "fromPort": z.number().int().nullable().describe("The port that the transition starts from.").optional(), "fromStatusReference": z.string().nullable().describe("The status that the transition starts from.").optional(), "toPort": z.number().int().nullable().describe("The port that the transition goes to.").optional() }).strict().nullable().describe("The statuses the transition can start from, and the mapping of ports between the statuses.")).describe("The statuses the transition can start from, and the mapping of ports between the statuses.").optional(), "name": z.string().describe("The name of the transition.").optional(), "properties": z.record(z.string().describe("The properties of the transition.")).describe("The properties of the transition.").optional(), "toStatusReference": z.string().describe("The status the transition goes to.").optional(), "transitionScreen": z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.").optional(), "triggers": z.array(z.object({ "id": z.string().describe("The ID of the trigger.").optional(), "parameters": z.record(z.string().describe("The parameters of the trigger.")).describe("The parameters of the trigger."), "ruleKey": z.string().describe("The rule key of the trigger.") }).strict().describe("The trigger configuration associated with a workflow.")).describe("The triggers of the transition.").optional(), "type": z.enum(["INITIAL","GLOBAL","DIRECTED"]).describe("The transition type.").optional(), "validators": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The validators of the transition.").optional() }).catchall(z.any()).describe("The transition update data.")).describe("The transitions of this workflow.") }).strict().describe("The details of the workflows to create.")).describe("The details of the workflows to create.").optional()
}
```

### validatecreateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payload": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe create workflows payload."),
  "validationOptions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe level of validation to return from the API. If no values are provided, the default would return \`WARNING\` and \`ERROR\` level validation results.").optional()
}
```

### searchworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`values.transitions\` Returns the transitions that each workflow is associated with.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with workflow name.").optional(),
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  \`name\` Sorts by workflow name.\n *  \`created\` Sorts by create time.\n *  \`updated\` Sorts by update time.").optional(),
  "scope": z.string().describe("The scope of the workflow. Global for company-managed projects and Project for team-managed projects.").optional(),
  "isActive": z.boolean().describe("Filters active and inactive workflows.").optional()
}
```

### updateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`workflows.usages\` Returns the project and issue types that each workflow is associated with.\n *  \`statuses.usages\` Returns the project and issue types that each status is associated with.").optional(),
  "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "id": z.string().describe("The ID of the status.").optional(), "name": z.string().describe("The name of the status."), "statusCategory": z.enum(["TODO","IN_PROGRESS","DONE"]).describe("The category of the status."), "statusReference": z.string().describe("The reference of the status.") }).catchall(z.any()).describe("Details of the status being updated.")).describe("The statuses to associate with the workflows.").optional(),
  "workflows": z.array(z.object({ "defaultStatusMappings": z.array(z.object({ "newStatusReference": z.string().describe("The new status ID."), "oldStatusReference": z.string().describe("The old status ID.") }).catchall(z.any()).describe("The mapping of old to new status ID.")).describe("The mapping of old to new status ID.").optional(), "description": z.string().describe("The new description for this workflow.").optional(), "id": z.string().describe("The ID of this workflow."), "loopedTransitionContainerLayout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "startPointLayout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "statusMappings": z.array(z.object({ "issueTypeId": z.string().describe("The issue type for the status mapping."), "projectId": z.string().describe("The project for the status mapping."), "statusMigrations": z.array(z.object({ "newStatusReference": z.string().describe("The new status ID."), "oldStatusReference": z.string().describe("The old status ID.") }).catchall(z.any()).describe("The mapping of old to new status ID.")).describe("The list of old and new status ID mappings for the specified project and issue type.") }).catchall(z.any()).describe("The mapping of old to new status ID for a specific project and issue type.")).describe("The mapping of old to new status ID for a specific project and issue type.").optional(), "statuses": z.array(z.object({ "approvalConfiguration": z.object({ "active": z.enum(["true","false"]).describe("Whether the approval configuration is active."), "conditionType": z.enum(["number","percent","numberPerPrincipal"]).describe("How the required approval count is calculated. It may be configured to require a specific number of approvals, or approval by a percentage of approvers. If the approvers source field is Approver groups, you can configure how many approvals per group are required for the request to be approved. The number will be the same across all groups."), "conditionValue": z.string().describe("The number or percentage of approvals required for a request to be approved. If \`conditionType\` is \`number\`, the value must be 20 or less. If \`conditionType\` is \`percent\`, the value must be 100 or less."), "exclude": z.array(z.enum(["assignee","reporter"]).nullable().describe("A list of roles that should be excluded as possible approvers.")).nullable().describe("A list of roles that should be excluded as possible approvers.").optional(), "fieldId": z.string().describe("The custom field ID of the \"Approvers\" or \"Approver Groups\" field."), "prePopulatedFieldId": z.string().nullable().describe("The custom field ID of the field used to pre-populate the Approver field. Only supports the \"Affected Services\" field.").optional(), "transitionApproved": z.string().describe("The numeric ID of the transition to be executed if the request is approved."), "transitionRejected": z.string().describe("The numeric ID of the transition to be executed if the request is declined.") }).strict().nullable().describe("The approval configuration of a status within a workflow. Applies only to Jira Service Management approvals.").optional(), "layout": z.object({ "x": z.number().describe("The x axis location.").optional(), "y": z.number().describe("The y axis location.").optional() }).strict().nullable().describe("The starting point for the statuses in the workflow.").optional(), "properties": z.record(z.string().describe("The properties for this status layout.")).describe("The properties for this status layout."), "statusReference": z.string().describe("A unique ID which the status will use to refer to this layout configuration.") }).catchall(z.any()).describe("The statuses associated with this workflow.")).describe("The statuses associated with this workflow."), "transitions": z.array(z.object({ "actions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The post-functions of the transition.").optional(), "conditions": z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.object({ "conditionGroups": z.array(z.string()).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.string()).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string()).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.")).describe("The nested conditions of the condition group.").optional(), "conditions": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The rules for this condition.").optional(), "operation": z.enum(["ANY","ALL"]).describe("Determines how the conditions in the group are evaluated. Accepts either \`ANY\` or \`ALL\`. If \`ANY\` is used, at least one condition in the group must be true for the group to evaluate to true. If \`ALL\` is used, all conditions in the group must be true for the group to evaluate to true.") }).strict().nullable().describe("The conditions group associated with the transition.").optional(), "customIssueEventId": z.string().describe("The custom event ID of the transition.").optional(), "description": z.string().describe("The description of the transition.").optional(), "id": z.string().describe("The ID of the transition.").optional(), "links": z.array(z.object({ "fromPort": z.number().int().nullable().describe("The port that the transition starts from.").optional(), "fromStatusReference": z.string().nullable().describe("The status that the transition starts from.").optional(), "toPort": z.number().int().nullable().describe("The port that the transition goes to.").optional() }).strict().nullable().describe("The statuses the transition can start from, and the mapping of ports between the statuses.")).describe("The statuses the transition can start from, and the mapping of ports between the statuses.").optional(), "name": z.string().describe("The name of the transition.").optional(), "properties": z.record(z.string().describe("The properties of the transition.")).describe("The properties of the transition.").optional(), "toStatusReference": z.string().describe("The status the transition goes to.").optional(), "transitionScreen": z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.").optional(), "triggers": z.array(z.object({ "id": z.string().describe("The ID of the trigger.").optional(), "parameters": z.record(z.string().describe("The parameters of the trigger.")).describe("The parameters of the trigger."), "ruleKey": z.string().describe("The rule key of the trigger.") }).strict().describe("The trigger configuration associated with a workflow.")).describe("The triggers of the transition.").optional(), "type": z.enum(["INITIAL","GLOBAL","DIRECTED"]).describe("The transition type.").optional(), "validators": z.array(z.object({ "id": z.string().nullable().describe("The ID of the rule.").optional(), "parameters": z.record(z.string().describe("The parameters related to the rule.")).describe("The parameters related to the rule.").optional(), "ruleKey": z.string().describe("The rule key of the rule.") }).strict().nullable().describe("The configuration of the rule.")).describe("The validators of the transition.").optional() }).catchall(z.any()).describe("The transition update data.")).describe("The transitions of this workflow."), "version": z.object({ "id": z.string().describe("The version UUID.").optional(), "versionNumber": z.number().int().describe("The version number.").optional() }).strict().describe("The current version details of this workflow scheme.") }).catchall(z.any()).describe("The details of the workflows to update.")).describe("The details of the workflows to update.").optional()
}
```

### validateupdateworkflows

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payload": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe update workflows payload."),
  "validationOptions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe level of validation to return from the API. If no values are provided, the default would return \`WARNING\` and \`ERROR\` level validation results.").optional()
}
```

### getallworkflowschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}
```

### createworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultWorkflow": z.string().describe("The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If \`defaultWorkflow\` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.").optional(),
  "description": z.string().describe("The description of the workflow scheme.").optional(),
  "draft": z.boolean().describe("Whether the workflow scheme is a draft or not.").readonly().optional(),
  "id": z.number().int().describe("The ID of the workflow scheme.").readonly().optional(),
  "issueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "issueTypes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue types available in Jira.").optional(),
  "lastModified": z.string().describe("The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.").readonly().optional(),
  "lastModifiedUser": z.string().optional(),
  "name": z.string().describe("The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.").optional(),
  "originalDefaultWorkflow": z.string().describe("For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.").readonly().optional(),
  "originalIssueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFor draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "self": z.string().url().readonly().optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:\n\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`false\`: An error is returned, as active workflow schemes cannot be updated.\n *  Update an inactive workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.\n\nDefaults to \`false\`.").optional()
}
```

### getworkflowschemeprojectassociations

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.array(z.number().int()).min(1).max(100).describe("The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, \`projectId=10000&projectId=10001\`.")
}
```

### assignschemetoproject

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "projectId": z.string().describe("The ID of the project."),
  "workflowSchemeId": z.string().describe("The ID of the workflow scheme. If the workflow scheme ID is \`null\`, the operation assigns the default workflow scheme.").optional()
}
```

### readworkflowschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  \`workflows.usages\` Returns the project and issue types that each workflow in the workflow scheme is associated with.").optional(),
  "projectIds": z.array(z.string().nullable().describe("The list of project IDs to query.")).nullable().describe("The list of project IDs to query.").optional(),
  "workflowSchemeIds": z.array(z.string().nullable().describe("The list of workflow scheme IDs to query.")).nullable().describe("The list of workflow scheme IDs to query.").optional()
}
```

### updateschemes

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultWorkflowId": z.string().describe("The ID of the workflow for issue types without having a mapping defined in this workflow scheme. Only used in global-scoped workflow schemes. If the \`defaultWorkflowId\` isn't specified, this is set to *Jira Workflow (jira)*.").optional(),
  "description": z.string().describe("The new description for this workflow scheme."),
  "id": z.string().describe("The ID of this workflow scheme."),
  "name": z.string().describe("The new name for this workflow scheme."),
  "statusMappingsByIssueTypeOverride": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type for this mapping."), "statusMappings": z.array(z.object({ "newStatusId": z.string().describe("The ID of the status in the new workflow."), "oldStatusId": z.string().describe("The ID of the status in the old workflow that isn't present in the new workflow.") }).strict().describe("The list of status mappings.")).describe("The list of status mappings.") }).strict().describe("Overrides, for the selected issue types, any status mappings provided in \`statusMappingsByWorkflows\`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of \`statusMappingsByWorkflows\` and \`statusMappingsByIssueTypeOverride\`.")).describe("Overrides, for the selected issue types, any status mappings provided in \`statusMappingsByWorkflows\`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of \`statusMappingsByWorkflows\` and \`statusMappingsByIssueTypeOverride\`.").optional(),
  "statusMappingsByWorkflows": z.array(z.object({ "newWorkflowId": z.string().describe("The ID of the new workflow."), "oldWorkflowId": z.string().describe("The ID of the old workflow."), "statusMappings": z.array(z.object({ "newStatusId": z.string().describe("The ID of the status in the new workflow."), "oldStatusId": z.string().describe("The ID of the status in the old workflow that isn't present in the new workflow.") }).strict().describe("The list of status mappings.")).describe("The list of status mappings.") }).strict().describe("The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of \`statusMappingsByWorkflows\` and \`statusMappingsByIssueTypeOverride\`.")).describe("The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of \`statusMappingsByWorkflows\` and \`statusMappingsByIssueTypeOverride\`.").optional(),
  "version": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe current version details of this workflow scheme."),
  "workflowsForIssueTypes": z.array(z.object({ "issueTypeIds": z.array(z.string().describe("The issue types assigned to the workflow.")).describe("The issue types assigned to the workflow."), "workflowId": z.string().describe("The ID of the workflow.") }).strict().describe("The explicit association between issue types and a workflow in a workflow scheme.")).describe("Mappings from workflows to issue types.").optional()
}
```

### updateworkflowschememappings

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "defaultWorkflowId": z.string().nullable().describe("The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*.").optional(),
  "id": z.string().describe("The ID of the workflow scheme."),
  "workflowsForIssueTypes": z.array(z.object({ "issueTypeIds": z.array(z.string().describe("The issue types assigned to the workflow.")).describe("The issue types assigned to the workflow."), "workflowId": z.string().describe("The ID of the workflow.") }).strict().describe("The explicit association between issue types and a workflow in a workflow scheme.")).describe("The new workflow to issue type mappings for this workflow scheme.")
}
```

### deleteworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as \`schemeId\`. For example, *schemeId=10301*.")
}
```

### getworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as \`schemeId\`. For example, *schemeId=10301*."),
  "returnDraftIfExists": z.boolean().describe("Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.").optional()
}
```

### updateworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as \`schemeId\`. For example, *schemeId=10301*."),
  "defaultWorkflow": z.string().describe("The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If \`defaultWorkflow\` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.").optional(),
  "description": z.string().describe("The description of the workflow scheme.").optional(),
  "draft": z.boolean().describe("Whether the workflow scheme is a draft or not.").readonly().optional(),
  "b_id": z.number().int().describe("The ID of the workflow scheme.").readonly().optional(),
  "issueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "issueTypes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue types available in Jira.").optional(),
  "lastModified": z.string().describe("The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.").readonly().optional(),
  "lastModifiedUser": z.string().optional(),
  "name": z.string().describe("The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.").optional(),
  "originalDefaultWorkflow": z.string().describe("For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.").readonly().optional(),
  "originalIssueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFor draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "self": z.string().url().readonly().optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:\n\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`false\`: An error is returned, as active workflow schemes cannot be updated.\n *  Update an inactive workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.\n\nDefaults to \`false\`.").optional()
}
```

### createworkflowschemedraftfromparent

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the active workflow scheme that the draft is created from.")
}
```

### deletedefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to \`false\`.").optional()
}
```

### getdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "returnDraftIfExists": z.boolean().describe("Set to \`true\` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.").optional()
}
```

### updatedefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to \`false\`.").optional(),
  "workflow": z.string().describe("The name of the workflow to set as the default workflow.")
}
```

### deleteworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the active workflow scheme that the draft was created from.")
}
```

### getworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the active workflow scheme that the draft was created from.")
}
```

### updateworkflowschemedraft

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the active workflow scheme that the draft was created from."),
  "defaultWorkflow": z.string().describe("The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If \`defaultWorkflow\` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.").optional(),
  "description": z.string().describe("The description of the workflow scheme.").optional(),
  "draft": z.boolean().describe("Whether the workflow scheme is a draft or not.").readonly().optional(),
  "b_id": z.number().int().describe("The ID of the workflow scheme.").readonly().optional(),
  "issueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "issueTypes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe issue types available in Jira.").optional(),
  "lastModified": z.string().describe("The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.").readonly().optional(),
  "lastModifiedUser": z.string().optional(),
  "name": z.string().describe("The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.").optional(),
  "originalDefaultWorkflow": z.string().describe("For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.").readonly().optional(),
  "originalIssueTypeMappings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFor draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(),
  "self": z.string().url().readonly().optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:\n\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.\n *  Update an active workflow scheme with \`updateDraftIfNeeded\` set to \`false\`: An error is returned, as active workflow schemes cannot be updated.\n *  Update an inactive workflow scheme with \`updateDraftIfNeeded\` set to \`true\`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.\n\nDefaults to \`false\`.").optional()
}
```

### deletedraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to.")
}
```

### getdraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to.")
}
```

### updatedraftdefaultworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to \`false\`.").optional(),
  "workflow": z.string().describe("The name of the workflow to set as the default workflow.")
}
```

### deleteworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "issueType": z.string().describe("The ID of the issue type.")
}
```

### getworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "issueType": z.string().describe("The ID of the issue type.")
}
```

### setworkflowschemedraftissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "issueType": z.string().describe("The ID of the issue type."),
  "b_issueType": z.string().describe("The ID of the issue type. Not required if updating the issue type-workflow mapping.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to \`false\`. Only applicable when updating the workflow-issue types mapping.").optional(),
  "workflow": z.string().describe("The name of the workflow.").optional()
}
```

### publishdraftworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "validateOnly": z.boolean().describe("Whether the request only performs a validation.").optional(),
  "statusMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "newStatusId": z.string().describe("The ID of the new status."), "statusId": z.string().describe("The ID of the status.") }).strict().describe("Details about the mapping from a status to a new status for an issue type.")).describe("Mappings of statuses to new statuses for issue types.").optional()
}
```

### deletedraftworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "workflowName": z.string().describe("The name of the workflow.")
}
```

### getdraftworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "workflowName": z.string().describe("The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.").optional()
}
```

### updatedraftworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "workflowName": z.string().describe("The name of the workflow."),
  "defaultMapping": z.boolean().describe("Whether the workflow is the default workflow for the workflow scheme.").optional(),
  "issueTypes": z.array(z.string()).describe("The list of issue type IDs.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to \`false\`.").optional(),
  "workflow": z.string().describe("The name of the workflow. Optional if updating the workflow-issue types mapping.").optional()
}
```

### deleteworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "issueType": z.string().describe("The ID of the issue type."),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to \`false\`.").optional()
}
```

### getworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "issueType": z.string().describe("The ID of the issue type."),
  "returnDraftIfExists": z.boolean().describe("Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.").optional()
}
```

### setworkflowschemeissuetype

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "issueType": z.string().describe("The ID of the issue type."),
  "b_issueType": z.string().describe("The ID of the issue type. Not required if updating the issue type-workflow mapping.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to \`false\`. Only applicable when updating the workflow-issue types mapping.").optional(),
  "workflow": z.string().describe("The name of the workflow.").optional()
}
```

### deleteworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "workflowName": z.string().describe("The name of the workflow."),
  "updateDraftIfNeeded": z.boolean().describe("Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to \`false\`.").optional()
}
```

### getworkflow

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "workflowName": z.string().describe("The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.").optional(),
  "returnDraftIfExists": z.boolean().describe("Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.").optional()
}
```

### updateworkflowmapping

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "workflowName": z.string().describe("The name of the workflow."),
  "defaultMapping": z.boolean().describe("Whether the workflow is the default workflow for the workflow scheme.").optional(),
  "issueTypes": z.array(z.string()).describe("The list of issue type IDs.").optional(),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to \`false\`.").optional(),
  "workflow": z.string().describe("The name of the workflow. Optional if updating the workflow-issue types mapping.").optional()
}
```

### getprojectusagesforworkflowscheme

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "workflowSchemeId": z.string().describe("The workflow scheme ID"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}
```

### getidsofworklogsdeletedsince

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "since": z.number().int().describe("The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.").optional()
}
```

### getworklogsforids

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts \`properties\` that returns the properties of each worklog.").optional(),
  "ids": z.array(z.number().int()).describe("A list of worklog IDs.")
}
```

### getidsofworklogsmodifiedsince

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "since": z.number().int().describe("The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts \`properties\` that returns the properties of each worklog.").optional()
}
```

### addonpropertiesresource_getaddonproperties_get

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "addonKey": z.string().describe("The key of the app, as defined in its descriptor.")
}
```

### addonpropertiesresource_deleteaddonproperty_delete

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "addonKey": z.string().describe("The key of the app, as defined in its descriptor."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### addonpropertiesresource_getaddonproperty_get

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "addonKey": z.string().describe("The key of the app, as defined in its descriptor."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### addonpropertiesresource_putaddonproperty_put

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "addonKey": z.string().describe("The key of the app, as defined in its descriptor."),
  "propertyKey": z.string().describe("The key of the property.")
}
```

### dynamicmodulesresource_removemodules_delete

**Environment variables**



**Input schema**

```ts
{
  "moduleKey": z.array(z.string()).describe("The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.\nFor example, \`moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field\`.\nNonexistent keys are ignored.").optional()
}
```

### dynamicmodulesresource_getmodules_get

**Environment variables**



**Input schema**

```ts
{}
```

### dynamicmodulesresource_registermodules_post

**Environment variables**



**Input schema**

```ts
{
  "modules": z.array(z.record(z.any()).describe("A [Connect module](https://developer.atlassian.com/cloud/jira/platform/about-jira-modules/) in the same format as in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).")).describe("A list of app modules in the same format as the \`modules\` property in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).")
}
```

### appissuefieldvalueupdateresource_updateissuefields_put

**Environment variables**



**Input schema**

```ts
{
  "updateValueList": z.array(z.object({ "_type": z.enum(["StringIssueField","NumberIssueField","RichTextIssueField","SingleSelectIssueField","MultiSelectIssueField","TextIssueField"]).describe("The type of custom field."), "fieldID": z.number().int().describe("The custom field ID."), "issueID": z.number().int().describe("The issue ID."), "number": z.number().describe("The value of number type custom field when \`_type\` is \`NumberIssueField\`.").optional(), "optionID": z.string().describe("The value of single select and multiselect custom field type when \`_type\` is \`SingleSelectIssueField\` or \`MultiSelectIssueField\`.").optional(), "richText": z.string().describe("The value of richText type custom field when \`_type\` is \`RichTextIssueField\`.").optional(), "string": z.string().describe("The value of string type custom field when \`_type\` is \`StringIssueField\`.").optional(), "text": z.string().describe("The value of of text custom field type when \`_type\` is \`TextIssueField\`.").optional() }).describe("A list of custom field details.")).describe("The list of custom field update details.").optional(),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The ID of the transfer.")
}
```

### migrationresource_updateentitypropertiesvalue_put

**Environment variables**



**Input schema**

```ts
{
  "entityType": z.enum(["IssueProperty","CommentProperty","DashboardItemProperty","IssueTypeProperty","ProjectProperty","UserProperty","WorklogProperty","BoardProperty","SprintProperty"]).describe("The type indicating the object that contains the entity properties."),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID.")
}
```

### migrationresource_workflowrulesearch_post

**Environment variables**



**Input schema**

```ts
{
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts \`transition\` which, for each rule, returns information about the transition the rule is assigned to.").optional(),
  "ruleIds": z.array(z.string().uuid().describe("Workflow rule ID.")).min(1).max(10).describe("The list of workflow rule IDs."),
  "workflowEntityId": z.string().uuid().describe("The workflow ID."),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID.")
}
```

### serviceregistryresource_services_get

**Environment variables**



**Input schema**

```ts
{
  "serviceIds": z.array(z.string()).min(1).max(20).describe("The ID of the services (the strings starting with \"b:\" need to be decoded in Base64).")
}
```

### deleteforgeappproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the property.")
}
```

### putforgeappproperty

**Environment variables**

- `OAUTH2_TOKEN`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "propertyKey": z.string().describe("The key of the property.")
}
```
