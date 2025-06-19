# @open-mcp/_api_environment_a_consumer_api_v0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_api_environment_a_consumer_api_v0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_api_environment_a_consumer_api_v0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_api_environment_a_consumer_api_v0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OIDC_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _api_environment_a_consumer_api_v0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OIDC_TOKEN=$OIDC_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _api_environment_a_consumer_api_v0 \
  .cursor/mcp.json \
  --OIDC_TOKEN=$OIDC_TOKEN
```

### Other

```bash
npx @open-mcp/config add _api_environment_a_consumer_api_v0 \
  /path/to/client/config.json \
  --OIDC_TOKEN=$OIDC_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_api_environment_a_consumer_api_v0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_api_environment_a_consumer_api_v0"],
      "env": {"OIDC_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OIDC_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_users_userid_accounts

**Environment variables**

- `OIDC_TOKEN`

**Input schema**

- `userId` (string)
- `active` (boolean)

### get_users_userid_accounts_accountid_number

**Environment variables**

- `OIDC_TOKEN`

**Input schema**

- `userId` (string)
- `accountId` (string)

### get_users_userid_accounts_entitlements

**Environment variables**

- `OIDC_TOKEN`

**Input schema**

- `userId` (string)

### get_users_userid_accounts_accountid_

**Environment variables**

- `OIDC_TOKEN`

**Input schema**

- `userId` (string)
- `accountId` (string)

### put_users_userid_accounts_accountid_name

**Environment variables**

- `OIDC_TOKEN`

**Input schema**

- `userId` (string)
- `accountId` (string)
- `name` (string)
