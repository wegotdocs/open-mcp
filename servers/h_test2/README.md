# @open-mcp/h_test2

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "h_test2": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/h_test2@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/h_test2@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add h_test2 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add h_test2 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add h_test2 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "h_test2": {
      "command": "npx",
      "args": ["-y", "@open-mcp/h_test2"],
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

### processvoicecommand

**Environment variables**

- `API_KEY`

**Input schema**

- `text` (string)
- `userId` (string)
- `context` (object)

### controldevice

**Environment variables**

- `API_KEY`

**Input schema**

- `deviceId` (string)
- `action` (string)
- `parameters` (object)

### controldevicegroup

**Environment variables**

- `API_KEY`

**Input schema**

- `action` (string)
- `deviceIds` (array)
- `parameters` (object)

### listdevices

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### executescene

**Environment variables**

- `API_KEY`

**Input schema**

- `sceneName` (string)
- `parameters` (object)
