# @open-mcp/6_dot_authentiqio_appspot_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "6_dot_authentiqio_appspot_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/6_dot_authentiqio_appspot_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/6_dot_authentiqio_appspot_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add 6_dot_authentiqio_appspot_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add 6_dot_authentiqio_appspot_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add 6_dot_authentiqio_appspot_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "6_dot_authentiqio_appspot_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/6_dot_authentiqio_appspot_com"],
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

### key_revoke_nosecret

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `phone` (string)
- `code` (string)

### key_register

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### key_revoke

**Environment variables**

No environment variables required

**Input schema**

- `PK` (string)
- `secret` (string)

### key_retrieve

**Environment variables**

No environment variables required

**Input schema**

- `PK` (string)

### head_key_pk_

**Environment variables**

No environment variables required

**Input schema**

- `PK` (string)

### key_update

**Environment variables**

No environment variables required

**Input schema**

- `PK` (string)

### key_bind

**Environment variables**

No environment variables required

**Input schema**

- `PK` (string)

### push_login_request

**Environment variables**

No environment variables required

**Input schema**

- `callback` (string)

### sign_request

**Environment variables**

No environment variables required

**Input schema**

- `test` (integer)

### sign_delete

**Environment variables**

No environment variables required

**Input schema**

- `job` (string)

### sign_retrieve

**Environment variables**

No environment variables required

**Input schema**

- `job` (string)

### sign_retrieve_head

**Environment variables**

No environment variables required

**Input schema**

- `job` (string)

### sign_confirm

**Environment variables**

No environment variables required

**Input schema**

- `job` (string)

### sign_update

**Environment variables**

No environment variables required

**Input schema**

- `job` (string)
