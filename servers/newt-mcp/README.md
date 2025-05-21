# @open-mcp/newt-mcp

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "newt-mcp": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/newt-mcp@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/newt-mcp@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
SESSION_ID='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add newt-mcp \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --SESSION_ID=$SESSION_ID
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add newt-mcp \
  .cursor/mcp.json \
  --SESSION_ID=$SESSION_ID
```

### Other

```bash
npx @open-mcp/config add newt-mcp \
  /path/to/client/config.json \
  --SESSION_ID=$SESSION_ID
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "newt-mcp": {
      "command": "npx",
      "args": ["-y", "@open-mcp/newt-mcp"],
      "env": {"SESSION_ID":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `SESSION_ID` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### login_api_v1_auth_azure_login_get

**Environment variables**

No environment variables required

**Input schema**

- `next` (string)

### oauth2_redirect_api_v1_auth_azure_oauth2_redirect_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### login_api_v1_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)

### logout_api_v1_auth_logout_get

**Environment variables**

- `SESSION_ID`

**Input schema**

No input parameters

### read_me_api_v1_auth_me_get

**Environment variables**

- `SESSION_ID`

**Input schema**

No input parameters

### update_me_api_v1_auth_me_patch

**Environment variables**

- `SESSION_ID`

**Input schema**

- `name` (other)
- `password` (string)

### create_api_v1_role_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `created` (string)
- `description` (string)
- `id` (string)
- `name` (string)
- `updated` (string)

### search_api_v1_role_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `created_after` (other)
- `created_before` (other)
- `enabled` (other)
- `limit` (integer)
- `name_contains` (other)
- `offset` (integer)
- `updated_after` (other)
- `updated_before` (other)
- `username_contains` (other)

### delete_api_v1_role_role_id_delete

**Environment variables**

- `SESSION_ID`

**Input schema**

- `role_id` (string)

### read_api_v1_role_role_id_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `role_id` (string)

### update_api_v1_role_role_id_patch

**Environment variables**

- `SESSION_ID`

**Input schema**

- `username` (string)
- `description` (other)
- `name` (other)
- `users` (array)
- `scopes` (array)

### create_api_v1_user_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `enabled` (boolean)
- `name` (other)
- `password` (other)
- `username` (string)

### search_api_v1_user_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `created_after` (other)
- `created_before` (other)
- `enabled` (other)
- `limit` (integer)
- `name_contains` (other)
- `offset` (integer)
- `updated_after` (other)
- `updated_before` (other)
- `username_contains` (other)

### delete_api_v1_user_username_delete

**Environment variables**

- `SESSION_ID`

**Input schema**

- `username` (string)

### read_api_v1_user_username_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `username` (string)

### update_api_v1_user_username_patch

**Environment variables**

- `SESSION_ID`

**Input schema**

- `username` (string)
- `name` (other)
- `password` (string)
- `enabled` (other)

### ops_alerts_api_v1_monitor_ops_alerts_get

**Environment variables**

- `SESSION_ID`

**Input schema**

No input parameters

### sbc_health_api_v1_monitor_sbc_health_get

**Environment variables**

- `SESSION_ID`

**Input schema**

No input parameters

### chat_api_v1_aihub_chat_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `session_id` (string)
- `user_message` (string)

### cdr_lookup_api_v1_lookup_cdr_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `end-time` (string)
- `limit` (integer)
- `offset` (integer)
- `query` (string)
- `start-time` (string)

### num_lookup_api_v1_lookup_num_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `count` (integer)
- `did` (string)
- `page` (integer)

### trunk_lookup_api_v1_lookup_trunk_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `name` (string)

### active_cases_api_v1_case_active_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### rep_lookup_api_v1_case_rep_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `case_number` (integer)

### shift_cases_api_v1_case_shift_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `cases` (array)
- `queue` (string)

### case_summary_api_v1_case_summary_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `case` (string)

### trunk_read_api_v1_trunk_get

**Environment variables**

- `SESSION_ID`

**Input schema**

- `trunk` (string)

### trunk_create_api_v1_trunk_post

**Environment variables**

- `SESSION_ID`

**Input schema**

- `Name` (string)
- `CAC` (integer)
- `CPS` (integer)
- `IpSignalingProfile` (string)
- `PacketServiceProfile` (string)
- `IngressIpPrefix` (array)
- `EgressIpPrefix` (array)
- `Zone` (string)

### trunk_update_api_v1_trunk_patch

**Environment variables**

- `SESSION_ID`

**Input schema**

- `name` (string)
- `cac` (other)
- `policy` (other)
- `signaling` (other)
- `services` (other)
- `egressIpPrefix` (other)
- `ingressIpPrefix` (other)

### trunk_delete_api_v1_trunk_delete

**Environment variables**

- `SESSION_ID`

**Input schema**

- `trunk` (string)
