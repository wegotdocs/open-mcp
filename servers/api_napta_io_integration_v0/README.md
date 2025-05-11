# @open-mcp/api_napta_io_integration_v0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_napta_io_integration_v0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_napta_io_integration_v0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_napta_io_integration_v0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_napta_io_integration_v0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_napta_io_integration_v0 \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_napta_io_integration_v0 \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_napta_io_integration_v0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_napta_io_integration_v0"],
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

### get_users

**Environment variables**

No environment variables required

**Input schema**

- `pagination[cursor]` (other)
- `pagination[limit]` (integer)
- `id.napta_id[eq]` (other)
- `id.napta_id[in]` (other)
- `id.external_id[eq]` (other)
- `id.external_id[in]` (other)

### put_users

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `group` (string)
- `position` (string)
- `active` (boolean)
- `business_unit` (other)
- `location` (other)
- `description` (other)
- `phone_number` (other)
- `hiring_date` (other)
- `leaving_date` (other)
- `custom_dropdown_fields` (object)
- `custom_text_fields` (object)
- `productive_share` (other)
- `event_timelines` (other)
- `direct_managers` (array)
- `daily_cost_info` (other)
- `hours_per_day` (other)
- `workweek` (other)

### get_projects

**Environment variables**

No environment variables required

**Input schema**

- `pagination[cursor]` (other)
- `pagination[limit]` (integer)
- `id.napta_id[eq]` (other)
- `id.napta_id[in]` (other)
- `id.external_id[eq]` (other)
- `id.external_id[in]` (other)
- `text_fields[{field_name}][in]` (other)

### put_projects

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (other)
- `client` (string)
- `category` (other)
- `status` (other)
- `business_units` (array)
- `estimated_start_date` (other)
- `estimated_end_date` (other)
- `archived` (boolean)
- `locked` (boolean)
- `billing_method` (other)
- `target_margin_rate` (other)
- `man_days_sold` (array)
- `kanban_column` (other)
- `custom_dropdown_fields` (object)
- `custom_text_fields` (object)
- `creator` (other)
- `co_owners` (array)
- `parent_project` (other)
- `fees` (array)
- `sold_budget_info` (other)

### delete_projects

**Environment variables**

No environment variables required

**Input schema**

- `id.napta_id` (other)
- `id.external_id` (other)

### get_time_entries

**Environment variables**

No environment variables required

**Input schema**

- `pagination[cursor]` (other)
- `pagination[limit]` (integer)
- `date[ge]` (other)
- `date[le]` (other)
- `user.napta_id[eq]` (other)
- `user.napta_id[in]` (other)
- `user.external_id[eq]` (other)
- `user.external_id[in]` (other)
- `workload_unit` (string)

### put_time_entries

**Environment variables**

No environment variables required

**Input schema**

- `date` (string)
- `user` (string)
- `project` (string)
- `workload` (string)

### delete_time_entries

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `user.napta_id` (other)
- `user.external_id` (other)
- `project.napta_id` (other)
- `project.external_id` (other)

### get_leaves

**Environment variables**

No environment variables required

**Input schema**

- `pagination[cursor]` (other)
- `pagination[limit]` (integer)
- `start_date[ge]` (other)
- `start_date[le]` (other)
- `end_date[ge]` (other)
- `end_date[le]` (other)
- `user.napta_id[eq]` (other)
- `user.napta_id[in]` (other)
- `user.external_id[eq]` (other)
- `user.external_id[in]` (other)

### put_leaves

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `starts_at_midday` (boolean)
- `ends_at_midday` (boolean)
- `user` (string)
- `category` (other)

### delete_leaves

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `starts_at_midday` (boolean)
- `ends_at_midday` (boolean)
- `user.napta_id` (other)
- `user.external_id` (other)

### get_assignments

**Environment variables**

No environment variables required

**Input schema**

- `pagination[cursor]` (other)
- `pagination[limit]` (integer)
- `id.napta_id[eq]` (other)
- `id.napta_id[in]` (other)
- `id.external_id[eq]` (other)
- `id.external_id[in]` (other)
- `user.napta_id[eq]` (other)
- `user.napta_id[in]` (other)
- `user.external_id[eq]` (other)
- `user.external_id[in]` (other)
- `project.napta_id[eq]` (other)
- `project.napta_id[in]` (other)
- `project.external_id[eq]` (other)
- `project.external_id[in]` (other)
- `simulated[eq]` (other)

### put_assignments

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `simulated` (boolean)
- `status` (other)
- `custom_dropdown_fields` (object)
- `custom_text_fields` (object)
- `user` (string)
- `project` (string)
- `periods` (array)

### delete_assignments

**Environment variables**

No environment variables required

**Input schema**

- `id.napta_id` (other)
- `id.external_id` (other)

### get_currencies

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_currencies

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `label` (other)
- `archived` (boolean)
- `exchange_rate_timeline` (array)
