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
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_google_access_token_api_v1_users_user_id_google_access_token

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)

### login_api_v1_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)

### logout_api_v1_auth_logout_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### register_api_v1_auth_register_post

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `email` (string)
- `password` (string)

### get_session_api_v1_auth_session_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### login_google_api_v1_auth_login_google_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### auth_google_api_v1_auth_google_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### oauth_callback_api_v1_auth_oauth_callback_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `state` (other)

### auth_success_api_v1_auth_success_get

**Environment variables**

No environment variables required

**Input schema**

- `session_token` (other)

### webhook_handler_api_v1_webhooks_composio_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### sync_drive_handler_api_v1_webhooks_sync_drive_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### sync_gmail_handler_api_v1_webhooks_sync_gmail_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_handler_api_v1_webhooks_gmail_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### handle_subscription_api_v1_subscriptions_gmail_post

**Environment variables**

No environment variables required

**Input schema**

- `service` (string)
- `user_id` (string)

### get_email_analyses_api_v1_email_analysis_get

**Environment variables**

No environment variables required

**Input schema**

- `skip` (integer)
- `limit` (integer)
- `priority_level` (other)
- `assigned_label` (other)
- `user_id` (string)

### get_email_analysis_api_v1_email_analysis_analysis_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `analysis_id` (string)

### update_email_analysis_api_v1_email_analysis_analysis_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `analysis_id` (string)
- `assigned_label` (other)
- `priority_level` (other)
- `suggested_action` (other)
- `confidence_score` (other)

### get_analysis_by_email_id_api_v1_email_analysis_email_email_id_ge

**Environment variables**

- `API_KEY`

**Input schema**

- `email_id` (string)

### get_analysis_stats_api_v1_email_analysis_stats_summary_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### handle_sse_api_v1_markitdown_sse_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### handle_sse_api_v1_excel_sse_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### query_session_api_v1_excel_sessions_session_id_query_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### upload_excel_file_api_v1_excel_upload_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### upload_file_api_v1_s3_upload_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### handle_sse_api_v1_notebook_sse_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### health_check_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters
