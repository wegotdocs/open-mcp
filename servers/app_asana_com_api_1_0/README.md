# @open-mcp/app_asana_com_api_1_0

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=... \
  --OAUTH2_TOKEN=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  .cursor/mcp.json \
  --API_KEY=... \
  --OAUTH2_TOKEN=...
```

### Other

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  /path/to/client/config.json \
  --API_KEY=... \
  --OAUTH2_TOKEN=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "app_asana_com_api_1_0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/app_asana_com_api_1_0"],
      "env": {"API_KEY":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/app_asana_com_api_1_0
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/app_asana_com_api_1_0`
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

### parameters_allocations_allocation_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_by","created_by.name","effort","effort.type","effort.value","end_date","parent","parent.name","resource_subtype","start_date"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_by","created_by.name","effort","effort.type","effort.value","end_date","parent","parent.name","resource_subtype","start_date"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deleteallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_allocations

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getallocations

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Globally unique identifier for the project to filter allocations by.").optional(),
  "assignee": z.string().describe("Globally unique identifier for the user or placeholder the allocation is assigned to.").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_by","created_by.name","effort","effort.type","effort.value","end_date","offset","parent","parent.name","path","resource_subtype","start_date","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_by","created_by.name","effort","effort.type","effort.value","end_date","parent","parent.name","resource_subtype","start_date"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_attachments_attachment_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getattachment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["connected_to_app","created_at","download_url","host","name","parent","parent.created_by","parent.name","parent.resource_subtype","permanent_url","resource_subtype","size","view_url"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### deleteattachment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_attachments

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getattachmentsforobject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "parent": z.string().describe("Globally unique identifier for object to fetch statuses from. Must be a GID for a \`project\`, \`project_brief\`, or \`task\`."),
  "opt_fields": z.array(z.enum(["connected_to_app","created_at","download_url","host","name","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permanent_url","resource_subtype","size","uri","view_url"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createattachmentforobject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["connected_to_app","created_at","download_url","host","name","parent","parent.created_by","parent.name","parent.resource_subtype","permanent_url","resource_subtype","size","view_url"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces_workspace_gid_audit_log_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getauditlogevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_batch

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createbatchrequest

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["body","headers","status_code"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA request object for use in a batch request.").optional()
}
```

### parameters_projects_project_gid_custom_field_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getcustomfieldsettingsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["custom_field","custom_field.asana_created_field","custom_field.created_by","custom_field.created_by.name","custom_field.currency_code","custom_field.custom_label","custom_field.custom_label_position","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.default_access_level","custom_field.description","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.format","custom_field.has_notifications_enabled","custom_field.id_prefix","custom_field.is_formula_field","custom_field.is_global_to_workspace","custom_field.is_value_read_only","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.people_value","custom_field.people_value.name","custom_field.precision","custom_field.privacy_setting","custom_field.representation_type","custom_field.resource_subtype","custom_field.text_value","custom_field.type","is_important","offset","parent","parent.name","path","project","project.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolios_portfolio_gid_custom_field_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getcustomfieldsettingsforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["custom_field","custom_field.asana_created_field","custom_field.created_by","custom_field.created_by.name","custom_field.currency_code","custom_field.custom_label","custom_field.custom_label_position","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.default_access_level","custom_field.description","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.format","custom_field.has_notifications_enabled","custom_field.id_prefix","custom_field.is_formula_field","custom_field.is_global_to_workspace","custom_field.is_value_read_only","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.people_value","custom_field.people_value.name","custom_field.precision","custom_field.privacy_setting","custom_field.representation_type","custom_field.resource_subtype","custom_field.text_value","custom_field.type","is_important","offset","parent","parent.name","path","project","project.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_custom_fields

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","default_access_level","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","id_prefix","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","privacy_setting","representation_type","resource_subtype","text_value","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_custom_fields_custom_field_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","default_access_level","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","id_prefix","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","privacy_setting","representation_type","resource_subtype","text_value","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatecustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","default_access_level","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","id_prefix","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","people_value","people_value.name","precision","privacy_setting","representation_type","resource_subtype","text_value","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deletecustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_workspaces_workspace_gid_custom_fields

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getcustomfieldsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["asana_created_field","created_by","created_by.name","currency_code","custom_label","custom_label_position","date_value","date_value.date","date_value.date_time","default_access_level","description","display_value","enabled","enum_options","enum_options.color","enum_options.enabled","enum_options.name","enum_value","enum_value.color","enum_value.enabled","enum_value.name","format","has_notifications_enabled","id_prefix","is_formula_field","is_global_to_workspace","is_value_read_only","multi_enum_values","multi_enum_values.color","multi_enum_values.enabled","multi_enum_values.name","name","number_value","offset","path","people_value","people_value.name","precision","privacy_setting","representation_type","resource_subtype","text_value","type","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_custom_fields_custom_field_gid_enum_options

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createenumoptionforcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","enabled","name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_custom_fields_custom_field_gid_enum_options_insert

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### insertenumoptionforcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","enabled","name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_enum_options_enum_option_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### updateenumoption

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","enabled","name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nEnum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.\n\nYou can add enum options to a custom field by using the \`POST /custom_fields/custom_field_gid/enum_options\` endpoint.\n\n**It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the \`enabled\` field to false with the \`PUT /enum_options/enum_option_gid\` endpoint. Other attributes can be updated similarly.\n\nOn creation of an enum option, \`enabled\` is always set to \`true\`, meaning the enum option is a selectable value for the custom field. Setting \`enabled=false\` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.\n\nEnum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using \`insert_before\` or \`insert_after\` to reference an existing enum option. Only one of \`insert_before\` and \`insert_after\` can be provided when creating a new enum option.\n\nAn enum options list can be reordered with the \`POST /custom_fields/custom_field_gid/enum_options/insert\` endpoint.").optional()
}
```

### parameters_custom_types

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getcustomtypes

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["name","offset","path","status_options","status_options.color","status_options.completion_state","status_options.enabled","status_options.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["action","change","change.action","change.added_value","change.field","change.new_value","change.removed_value","created_at","parent","parent.name","resource","resource.name","type","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_goal_relationships_goal_relationship_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getgoalrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updategoalrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### getgoalrelationships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_pretty": z.boolean().describe("Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "supported_goal": z.string().describe("Globally unique identifier for the supported goal in the goal relationship."),
  "resource_subtype": z.string().describe("If provided, filter to goal relationships with a given resource_subtype.").optional(),
  "opt_fields": z.array(z.enum(["contribution_weight","offset","path","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_goals_goal_gid_addsupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addsupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["contribution_weight","resource_subtype","supported_goal","supported_goal.name","supported_goal.owner","supported_goal.owner.name","supporting_resource","supporting_resource.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_goals_goal_gid_removesupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removesupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_goals_goal_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getgoal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updategoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deletegoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_goals

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getgoals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "portfolio": z.string().describe("Globally unique identifier for supporting portfolio.").optional(),
  "project": z.string().describe("Globally unique identifier for supporting project.").optional(),
  "task": z.string().describe("Globally unique identifier for supporting task.").optional(),
  "is_workspace_level": z.boolean().describe("Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.").optional(),
  "team": z.string().describe("Globally unique identifier for the team.").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace.").optional(),
  "time_periods": z.array(z.string()).describe("Globally unique identifiers for the time periods.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","offset","owner","owner.name","path","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### creategoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_goals_goal_gid_setmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### creategoalmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA generic Asana Resource, containing a globally unique identifier.").optional()
}
```

### parameters_goals_goal_gid_setmetriccurrentvalue

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### updategoalmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA generic Asana Resource, containing a globally unique identifier.").optional()
}
```

### parameters_goals_goal_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_goals_goal_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_goals_goal_gid_parentgoals

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getparentgoalsforgoal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_jobs_job_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getjob

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Globally unique identifier for \`goal\`, \`project\`, \`portfolio\`, or \`custom_field\`.").optional(),
  "member": z.string().describe("Globally unique identifier for \`team\` or \`user\`.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["offset","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.string().optional()
}
```

### parameters_memberships_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### updatemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### deletemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_organization_exports

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createorganizationexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","download_url","organization","organization.name","state"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn *organization_export* request starts a job to export the complete data of the given Organization.").optional()
}
```

### parameters_organization_exports_organization_export_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getorganizationexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","download_url","organization","organization.name","state"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolio_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getportfoliomemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["access_level","offset","path","portfolio","portfolio.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolio_memberships_portfolio_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getportfoliomembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["access_level","portfolio","portfolio.name","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolios_portfolio_gid_portfolio_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getportfoliomembershipsforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["access_level","offset","path","portfolio","portfolio.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolios

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getportfolios

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "workspace": z.string().describe("The workspace or organization to filter portfolios on."),
  "owner": z.string().describe("The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.").optional(),
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","offset","owner","owner.name","path","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","owner","owner.name","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_portfolios_portfolio_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getportfolio

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","owner","owner.name","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","owner","owner.name","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deleteportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_portfolios_portfolio_gid_items

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getitemsforportfolio

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_portfolios_portfolio_gid_additem

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### additemforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_portfolios_portfolio_gid_removeitem

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removeitemforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_portfolios_portfolio_gid_addcustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addcustomfieldsettingforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_portfolios_portfolio_gid_removecustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removecustomfieldsettingforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_portfolios_portfolio_gid_addmembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addmembersforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","owner","owner.name","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_portfolios_portfolio_gid_removemembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removemembersforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","created_at","created_by","created_by.name","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","due_on","members","members.name","name","owner","owner.name","permalink_url","privacy_setting","project_templates","project_templates.name","public","start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_project_briefs_project_brief_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["html_text","permalink_url","project","project.name","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["html_text","permalink_url","project","project.name","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deleteprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_projects_project_gid_project_briefs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["html_text","permalink_url","project","project.name","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_project_memberships_project_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["access_level","member","member.name","parent","parent.name","project","project.name","user","user.name","write_access"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_projects_project_gid_project_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectmembershipsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["access_level","member","member.name","offset","parent","parent.name","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_project_statuses_project_status_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["author","author.name","color","created_at","created_by","created_by.name","html_text","modified_at","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### deleteprojectstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_projects_project_gid_project_statuses

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectstatusesforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "project_gid": z.string().describe("Globally unique identifier for the project."),
  "opt_pretty": z.boolean().describe("Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["author","author.name","color","created_at","created_by","created_by.name","html_text","modified_at","offset","path","text","title","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createprojectstatusforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["author","author.name","color","created_at","created_by","created_by.name","html_text","modified_at","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_project_templates_project_template_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojecttemplate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","description","html_description","name","owner","public","requested_dates","requested_dates.description","requested_dates.name","requested_roles","requested_roles.name","team","team.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### deleteprojecttemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_project_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojecttemplates

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("The workspace to filter results on.").optional(),
  "team": z.string().describe("The team to filter projects on.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["color","description","html_description","name","offset","owner","path","public","requested_dates","requested_dates.description","requested_dates.name","requested_roles","requested_roles.name","team","team.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams_team_gid_project_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojecttemplatesforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["color","description","html_description","name","offset","owner","path","public","requested_dates","requested_dates.description","requested_dates.name","requested_roles","requested_roles.name","team","team.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_project_templates_project_template_gid_instantiatepro

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### instantiateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojects

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "workspace": z.string().describe("The workspace or organization to filter projects on.").optional(),
  "team": z.string().describe("The team to filter projects on.").optional(),
  "archived": z.boolean().describe("Only return projects whose \`archived\` field takes on the value of this parameter.").optional(),
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_projects_project_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deleteproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_projects_project_gid_duplicate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### duplicateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams_team_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectsforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "archived": z.boolean().describe("Only return projects whose \`archived\` field takes on the value of this parameter.").optional(),
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createprojectforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_workspaces_workspace_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getprojectsforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "archived": z.boolean().describe("Only return projects whose \`archived\` field takes on the value of this parameter.").optional(),
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createprojectforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_projects_project_gid_addcustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addcustomfieldsettingforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["custom_field","custom_field.asana_created_field","custom_field.created_by","custom_field.created_by.name","custom_field.currency_code","custom_field.custom_label","custom_field.custom_label_position","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.default_access_level","custom_field.description","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.format","custom_field.has_notifications_enabled","custom_field.id_prefix","custom_field.is_formula_field","custom_field.is_global_to_workspace","custom_field.is_value_read_only","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.people_value","custom_field.people_value.name","custom_field.precision","custom_field.privacy_setting","custom_field.representation_type","custom_field.resource_subtype","custom_field.text_value","custom_field.type","is_important","parent","parent.name","project","project.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_removecustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removecustomfieldsettingforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_task_counts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettaskcountsforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["num_completed_milestones","num_completed_tasks","num_incomplete_milestones","num_incomplete_tasks","num_milestones","num_tasks"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_projects_project_gid_addmembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addmembersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_removemembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removemembersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addfollowersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removefollowersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","owner","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_saveastemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### projectsaveastemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_rule_triggers_rule_trigger_gid_run

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### triggerrule

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_sections_section_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getsection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","name","project","project.name","projects","projects.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatesection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","name","project","project.name","projects","projects.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### deletesection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_projects_project_gid_sections

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getsectionsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["created_at","name","offset","path","project","project.name","projects","projects.name","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createsectionforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","name","project","project.name","projects","projects.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_sections_section_gid_addtask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addtaskforsection

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_sections_insert

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### insertsectionforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_status_updates_status_update_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","parent","parent.name","resource_subtype","status_type","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### deletestatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_status_updates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getstatusesforobject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "parent": z.string().describe("Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal."),
  "created_since": z.string().datetime({ offset: true }).describe("Only return statuses that have been created since the given time.").optional(),
  "opt_fields": z.array(z.enum(["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","offset","parent","parent.name","path","resource_subtype","status_type","text","title","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createstatusforobject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["author","author.name","created_at","created_by","created_by.name","hearted","hearts","hearts.user","hearts.user.name","html_text","liked","likes","likes.user","likes.user.name","modified_at","num_hearts","num_likes","parent","parent.name","resource_subtype","status_type","text","title"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_stories_story_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getstory

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_at","created_by","created_by.name","custom_field","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.id_prefix","custom_field.is_formula_field","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.representation_type","custom_field.text_value","custom_field.type","dependency","dependency.created_by","dependency.name","dependency.resource_subtype","duplicate_of","duplicate_of.created_by","duplicate_of.name","duplicate_of.resource_subtype","duplicated_from","duplicated_from.created_by","duplicated_from.name","duplicated_from.resource_subtype","follower","follower.name","hearted","hearts","hearts.user","hearts.user.name","html_text","is_editable","is_edited","is_pinned","liked","likes","likes.user","likes.user.name","new_approval_status","new_date_value","new_dates","new_dates.due_at","new_dates.due_on","new_dates.start_on","new_enum_value","new_enum_value.color","new_enum_value.enabled","new_enum_value.name","new_multi_enum_values","new_multi_enum_values.color","new_multi_enum_values.enabled","new_multi_enum_values.name","new_name","new_number_value","new_people_value","new_people_value.name","new_resource_subtype","new_section","new_section.name","new_text_value","num_hearts","num_likes","old_approval_status","old_date_value","old_dates","old_dates.due_at","old_dates.due_on","old_dates.start_on","old_enum_value","old_enum_value.color","old_enum_value.enabled","old_enum_value.name","old_multi_enum_values","old_multi_enum_values.color","old_multi_enum_values.enabled","old_multi_enum_values.name","old_name","old_number_value","old_people_value","old_people_value.name","old_resource_subtype","old_section","old_section.name","old_text_value","previews","previews.fallback","previews.footer","previews.header","previews.header_link","previews.html_text","previews.text","previews.title","previews.title_link","project","project.name","resource_subtype","source","sticker_name","story","story.created_at","story.created_by","story.created_by.name","story.resource_subtype","story.text","tag","tag.name","target","target.created_by","target.name","target.resource_subtype","task","task.created_by","task.name","task.resource_subtype","text","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatestory

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_at","created_by","created_by.name","custom_field","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.id_prefix","custom_field.is_formula_field","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.representation_type","custom_field.text_value","custom_field.type","dependency","dependency.created_by","dependency.name","dependency.resource_subtype","duplicate_of","duplicate_of.created_by","duplicate_of.name","duplicate_of.resource_subtype","duplicated_from","duplicated_from.created_by","duplicated_from.name","duplicated_from.resource_subtype","follower","follower.name","hearted","hearts","hearts.user","hearts.user.name","html_text","is_editable","is_edited","is_pinned","liked","likes","likes.user","likes.user.name","new_approval_status","new_date_value","new_dates","new_dates.due_at","new_dates.due_on","new_dates.start_on","new_enum_value","new_enum_value.color","new_enum_value.enabled","new_enum_value.name","new_multi_enum_values","new_multi_enum_values.color","new_multi_enum_values.enabled","new_multi_enum_values.name","new_name","new_number_value","new_people_value","new_people_value.name","new_resource_subtype","new_section","new_section.name","new_text_value","num_hearts","num_likes","old_approval_status","old_date_value","old_dates","old_dates.due_at","old_dates.due_on","old_dates.start_on","old_enum_value","old_enum_value.color","old_enum_value.enabled","old_enum_value.name","old_multi_enum_values","old_multi_enum_values.color","old_multi_enum_values.enabled","old_multi_enum_values.name","old_name","old_number_value","old_people_value","old_people_value.name","old_resource_subtype","old_section","old_section.name","old_text_value","previews","previews.fallback","previews.footer","previews.header","previews.header_link","previews.html_text","previews.text","previews.title","previews.title_link","project","project.name","resource_subtype","source","sticker_name","story","story.created_at","story.created_by","story.created_by.name","story.resource_subtype","story.text","tag","tag.name","target","target.created_by","target.name","target.resource_subtype","task","task.created_by","task.name","task.resource_subtype","text","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA story represents an activity associated with an object in the Asana system.").optional()
}
```

### deletestory

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_tasks_task_gid_stories

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getstoriesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_at","created_by","created_by.name","custom_field","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.id_prefix","custom_field.is_formula_field","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.representation_type","custom_field.text_value","custom_field.type","dependency","dependency.created_by","dependency.name","dependency.resource_subtype","duplicate_of","duplicate_of.created_by","duplicate_of.name","duplicate_of.resource_subtype","duplicated_from","duplicated_from.created_by","duplicated_from.name","duplicated_from.resource_subtype","follower","follower.name","hearted","hearts","hearts.user","hearts.user.name","html_text","is_editable","is_edited","is_pinned","liked","likes","likes.user","likes.user.name","new_approval_status","new_date_value","new_dates","new_dates.due_at","new_dates.due_on","new_dates.start_on","new_enum_value","new_enum_value.color","new_enum_value.enabled","new_enum_value.name","new_multi_enum_values","new_multi_enum_values.color","new_multi_enum_values.enabled","new_multi_enum_values.name","new_name","new_number_value","new_people_value","new_people_value.name","new_resource_subtype","new_section","new_section.name","new_text_value","num_hearts","num_likes","offset","old_approval_status","old_date_value","old_dates","old_dates.due_at","old_dates.due_on","old_dates.start_on","old_enum_value","old_enum_value.color","old_enum_value.enabled","old_enum_value.name","old_multi_enum_values","old_multi_enum_values.color","old_multi_enum_values.enabled","old_multi_enum_values.name","old_name","old_number_value","old_people_value","old_people_value.name","old_resource_subtype","old_section","old_section.name","old_text_value","path","previews","previews.fallback","previews.footer","previews.header","previews.header_link","previews.html_text","previews.text","previews.title","previews.title_link","project","project.name","resource_subtype","source","sticker_name","story","story.created_at","story.created_by","story.created_by.name","story.resource_subtype","story.text","tag","tag.name","target","target.created_by","target.name","target.resource_subtype","task","task.created_by","task.name","task.resource_subtype","text","type","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createstoryfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["assignee","assignee.name","created_at","created_by","created_by.name","custom_field","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.id_prefix","custom_field.is_formula_field","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.representation_type","custom_field.text_value","custom_field.type","dependency","dependency.created_by","dependency.name","dependency.resource_subtype","duplicate_of","duplicate_of.created_by","duplicate_of.name","duplicate_of.resource_subtype","duplicated_from","duplicated_from.created_by","duplicated_from.name","duplicated_from.resource_subtype","follower","follower.name","hearted","hearts","hearts.user","hearts.user.name","html_text","is_editable","is_edited","is_pinned","liked","likes","likes.user","likes.user.name","new_approval_status","new_date_value","new_dates","new_dates.due_at","new_dates.due_on","new_dates.start_on","new_enum_value","new_enum_value.color","new_enum_value.enabled","new_enum_value.name","new_multi_enum_values","new_multi_enum_values.color","new_multi_enum_values.enabled","new_multi_enum_values.name","new_name","new_number_value","new_people_value","new_people_value.name","new_resource_subtype","new_section","new_section.name","new_text_value","num_hearts","num_likes","old_approval_status","old_date_value","old_dates","old_dates.due_at","old_dates.due_on","old_dates.start_on","old_enum_value","old_enum_value.color","old_enum_value.enabled","old_enum_value.name","old_multi_enum_values","old_multi_enum_values.color","old_multi_enum_values.enabled","old_multi_enum_values.name","old_name","old_number_value","old_people_value","old_people_value.name","old_resource_subtype","old_section","old_section.name","old_text_value","previews","previews.fallback","previews.footer","previews.header","previews.header_link","previews.html_text","previews.text","previews.title","previews.title_link","project","project.name","resource_subtype","source","sticker_name","story","story.created_at","story.created_by","story.created_by.name","story.resource_subtype","story.text","tag","tag.name","target","target.created_by","target.name","target.resource_subtype","task","task.created_by","task.name","task.resource_subtype","text","type"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA story represents an activity associated with an object in the Asana system.").optional()
}
```

### parameters_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "workspace": z.string().describe("The workspace to filter tags on.").optional(),
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","offset","path","permalink_url","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createtag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","permalink_url","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_tags_tag_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","permalink_url","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","permalink_url","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deletetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_tasks_task_gid_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettagsfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","offset","path","permalink_url","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces_workspace_gid_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettagsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","offset","path","permalink_url","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createtagforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["color","created_at","followers","followers.name","name","notes","permalink_url","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_task_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasktemplates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "project": z.string().describe("The project to filter task templates on.").optional(),
  "opt_fields": z.array(z.enum(["created_at","created_by","name","project","template"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_task_templates_task_template_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasktemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","created_by","name","project","template"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### deletetasktemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_task_templates_task_template_gid_instantiatetask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### instantiatetask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "assignee": z.string().describe("The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.\n*Note: If you specify \`assignee\`, you must also specify the \`workspace\` to filter on.*").optional(),
  "project": z.string().describe("The project to filter tasks on.").optional(),
  "section": z.string().describe("The section to filter tasks on.").optional(),
  "workspace": z.string().describe("The workspace to filter tasks on.\n*Note: If you specify \`workspace\`, you must also specify the \`assignee\` to filter on.*").optional(),
  "completed_since": z.string().datetime({ offset: true }).describe("Only return tasks that are either incomplete or that have been completed since this time.").optional(),
  "modified_since": z.string().datetime({ offset: true }).describe("Only return tasks that have been modified since the given time.\n\n*Note: A task is considered “modified” if any of its properties\nchange, or associations between it and other objects are modified\n(e.g.  a task being added to a project). A task is not considered\nmodified just because another object it is associated with (e.g. a\nsubtask) is modified. Actions that count as modifying the task\ninclude assigning, renaming, completing, and adding stories.*").optional(),
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createtask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_tasks_task_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### deletetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_tasks_task_gid_duplicate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### duplicatetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_projects_project_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasksforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_sections_section_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasksforsection

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_tags_tag_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasksfortag

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_user_task_lists_user_task_list_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettasksforusertasklist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_tasks_task_gid_subtasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getsubtasksfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createsubtaskfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_tasks_task_gid_setparent

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### setparentfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_dependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getdependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_tasks_task_gid_adddependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### adddependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_removedependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removedependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_dependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getdependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_tasks_task_gid_adddependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### adddependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of dependent tasks.").optional()
}
```

### parameters_tasks_task_gid_removedependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removedependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of dependent tasks.").optional()
}
```

### parameters_tasks_task_gid_addproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addprojectfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_removeproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removeprojectfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_addtag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addtagfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_removetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removetagfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### addfollowersfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_tasks_task_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removefollowerfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_workspaces_workspace_gid_tasks_custom_id_custom_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettaskforcustomid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_workspaces_workspace_gid_tasks_search

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### searchtasksforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","created_by","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.default_access_level","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.privacy_setting","custom_fields.representation_type","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","custom_type","custom_type.name","custom_type_status_option","custom_type_status_option.name","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","parent","parent.created_by","parent.name","parent.resource_subtype","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_team_memberships_team_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteammembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","team","team.name","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteammemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "team": z.string().describe("Globally unique identifier for the team.").optional(),
  "user": z.string().describe("A string identifying a user. This can either be the string \"me\", an email, or the gid of a user. This parameter must be used with the workspace parameter.").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace. This parameter must be used with the user parameter.").optional(),
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","offset","path","team","team.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams_team_gid_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteammembershipsforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","offset","path","team","team.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteammembershipsforuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "workspace": z.string().describe("Globally unique identifier for the workspace."),
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","offset","path","team","team.name","uri","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### createteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","organization","organization.name","permalink_url","team_content_management_access_level","team_member_removal_access_level","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_teams_team_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","organization","organization.name","permalink_url","team_content_management_access_level","team_member_removal_access_level","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","organization","organization.name","permalink_url","team_content_management_access_level","team_member_removal_access_level","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.string().optional()
}
```

### parameters_workspaces_workspace_gid_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteamsforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","offset","organization","organization.name","path","permalink_url","team_content_management_access_level","team_member_removal_access_level","uri","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getteamsforuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","offset","organization","organization.name","path","permalink_url","team_content_management_access_level","team_member_removal_access_level","uri","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams_team_gid_adduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### adduserforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["is_admin","is_guest","is_limited_access","team","team.name","user","user.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA user identification object for specification with the addUser/removeUser endpoints.").optional()
}
```

### parameters_teams_team_gid_removeuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removeuserforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA user identification object for specification with the addUser/removeUser endpoints.").optional()
}
```

### parameters_time_periods_time_period_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettimeperiod

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["display_name","end_on","parent","parent.display_name","parent.end_on","parent.period","parent.start_on","period","start_on"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_time_periods

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettimeperiods

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "start_on": z.string().date().describe("ISO 8601 date string").optional(),
  "end_on": z.string().date().describe("ISO 8601 date string").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace."),
  "opt_fields": z.array(z.enum(["display_name","end_on","offset","parent","parent.display_name","parent.end_on","parent.period","parent.start_on","path","period","start_on","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_tasks_task_gid_time_tracking_entries

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettimetrackingentriesfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["attributable_to","attributable_to.name","created_by","created_by.name","duration_minutes","entered_on","offset","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createtimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["attributable_to","attributable_to.name","created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_time_tracking_entries_time_tracking_entry_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### gettimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["attributable_to","attributable_to.name","created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatetimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["attributable_to","attributable_to.name","created_at","created_by","created_by.name","duration_minutes","entered_on","task","task.created_by","task.name","task.resource_subtype"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### deletetimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_workspaces_workspace_gid_typeahead

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### typeaheadforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.literal("name")).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_user_task_lists_user_task_list_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getusertasklist

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["name","owner","workspace"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_user_task_list

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getusertasklistforuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["name","owner","workspace"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getusers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email","name","offset","path","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","uri","workspaces","workspaces.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_favorites

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getfavoritesforuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["name","offset","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_teams_team_gid_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getusersforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces_workspace_gid_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getusersforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_webhooks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getwebhooks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "workspace": z.string().describe("The workspace to query for webhooks in."),
  "resource": z.string().describe("Only return webhooks for the given resource.").optional(),
  "opt_fields": z.array(z.enum(["active","created_at","delivery_retry_count","failure_deletion_timestamp","filters","filters.action","filters.fields","filters.resource_subtype","last_failure_at","last_failure_content","last_success_at","next_attempt_after","offset","path","resource","resource.name","target","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### createwebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["active","created_at","delivery_retry_count","failure_deletion_timestamp","filters","filters.action","filters.fields","filters.resource_subtype","last_failure_at","last_failure_content","last_success_at","next_attempt_after","resource","resource.name","target"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_webhooks_webhook_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getwebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["active","created_at","delivery_retry_count","failure_deletion_timestamp","filters","filters.action","filters.fields","filters.resource_subtype","last_failure_at","last_failure_content","last_success_at","next_attempt_after","resource","resource.name","target"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updatewebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["active","created_at","delivery_retry_count","failure_deletion_timestamp","filters","filters.action","filters.fields","filters.resource_subtype","last_failure_at","last_failure_content","last_success_at","next_attempt_after","resource","resource.name","target"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### deletewebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_workspace_memberships_workspace_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspacemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","is_active","is_admin","is_guest","is_view_only","user","user.name","user_task_list","user_task_list.name","user_task_list.owner","user_task_list.workspace","vacation_dates","vacation_dates.end_on","vacation_dates.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_users_user_gid_workspace_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspacemembershipsforuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","is_active","is_admin","is_guest","is_view_only","offset","path","uri","user","user.name","user_task_list","user_task_list.name","user_task_list.owner","user_task_list.workspace","vacation_dates","vacation_dates.end_on","vacation_dates.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces_workspace_gid_workspace_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspacemembershipsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["created_at","is_active","is_admin","is_guest","is_view_only","offset","path","uri","user","user.name","user_task_list","user_task_list.name","user_task_list.owner","user_task_list.workspace","vacation_dates","vacation_dates.end_on","vacation_dates.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspaces

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email_domains","is_organization","name","offset","path","uri"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### parameters_workspaces_workspace_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email_domains","is_organization","name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}
```

### updateworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email_domains","is_organization","name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.").optional()
}
```

### parameters_workspaces_workspace_gid_adduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### adduserforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "opt_fields": z.array(z.enum(["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA user identification object for specification with the addUser/removeUser endpoints.").optional()
}
```

### parameters_workspaces_workspace_gid_removeuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removeuserforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA user identification object for specification with the addUser/removeUser endpoints.").optional()
}
```

### parameters_workspaces_workspace_gid_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### getworkspaceevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```
