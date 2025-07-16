# @open-mcp/api_prismacloud_io

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_prismacloud_io": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_prismacloud_io@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_prismacloud_io@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_prismacloud_io \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_prismacloud_io \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_prismacloud_io \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_prismacloud_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_prismacloud_io"],
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

### list_action_plans

**Environment variables**

No environment variables required

**Input schema**

- `x-redlock-auth` (string)

### update_an_action_plan

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `x-redlock-auth` (string)

### update_an_action_plan_feedback

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `x-redlock-auth` (string)

### recommendation_summary_action_plan

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `x-redlock-auth` (string)

### action_plan_related_alerts

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `limit` (integer)
- `next_page_token` (string)
- `x-redlock-auth` (string)

### action_plan_impacted_assets

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `limit` (integer)
- `next_page_token` (string)
- `x-redlock-auth` (string)

### action_plan_notification_service

**Environment variables**

No environment variables required

**Input schema**

- `action-plan-id` (string)
- `x-redlock-auth` (string)

### get_action_plan_names

**Environment variables**

No environment variables required

**Input schema**

- `x-redlock-auth` (string)

### list_action_plans_names

**Environment variables**

No environment variables required

**Input schema**

- `x-redlock-auth` (string)

### action_plan_business_criticality_assets

**Environment variables**

No environment variables required

**Input schema**

- `x-redlock-auth` (string)

### action_plan_set_asset_criticality

**Environment variables**

No environment variables required

**Input schema**

- `x-redlock-auth` (string)

### action_plan_check_asset_criticality

**Environment variables**

No environment variables required

**Input schema**

- `asset-id` (string)
- `x-redlock-auth` (string)
