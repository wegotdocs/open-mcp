# @open-mcp/thegraph-token-api

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/thegraph-token-api add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/thegraph-token-api add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/thegraph-token-api add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/thegraph-token-api add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "thegraph-token-api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/thegraph-token-api"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### getbalancesevmbyaddress

### gettransfersevmbyaddress

### getholdersevmbycontract

### gettokensevmbycontract

### getohlcpricesevmbycontract

### gethealth

### getversion

### getnetworks

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/thegraph-token-api
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/thegraph-token-api`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
