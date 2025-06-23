# @open-mcp/xpipe

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "xpipe": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/xpipe@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/xpipe@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add xpipe \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add xpipe \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add xpipe \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "xpipe": {
      "command": "npx",
      "args": ["-y", "@open-mcp/xpipe"],
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

### handshake

**Environment variables**

No environment variables required

**Input schema**

- `auth` (other)
- `client` (object)

### connectionquery

**Environment variables**

- `API_KEY`

**Input schema**

- `categoryFilter` (string)
- `connectionFilter` (string)
- `typeFilter` (string)

### connectioninfo

**Environment variables**

- `API_KEY`

**Input schema**

- `connections` (array)

### connectionadd

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `data` (object)
- `validate` (boolean)
- `category` (string)

### categoryad

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `parent` (string)

### connectionremove

**Environment variables**

- `API_KEY`

**Input schema**

- `connections` (array)

### connectionbrowse

**Environment variables**

- `API_KEY`

**Input schema**

- `directory` (string)
- `connection` (string)

### connectionterminal

**Environment variables**

- `API_KEY`

**Input schema**

- `directory` (string)
- `connection` (string)

### connectiontoggle

**Environment variables**

- `API_KEY`

**Input schema**

- `state` (boolean)
- `connection` (string)

### connectionrefresh

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)

### shellstart

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)

### shellstop

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)

### shellexec

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)
- `command` (string)

### fsdata

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### fsread

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)
- `path` (string)

### fswrite

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)
- `blob` (string)
- `path` (string)

### fsscript

**Environment variables**

- `API_KEY`

**Input schema**

- `connection` (string)
- `blob` (string)

### daemonversion

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
