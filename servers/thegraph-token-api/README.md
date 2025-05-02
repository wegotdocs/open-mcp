# @open-mcp/thegraph-token-api

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add thegraph-token-api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add thegraph-token-api \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add thegraph-token-api \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
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

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getbalancesevmbyaddress

**Environment variables**

- `API_KEY`

**Input schema**

- `address` (string)
- `network_id` (string)
- `contract` (string)
- `limit` (integer)
- `page` (integer)

### gettransfersevm

**Environment variables**

- `API_KEY`

**Input schema**

- `network_id` (string)
- `from` (string)
- `to` (string)
- `contract` (string)
- `startTime` (number)
- `endTime` (number)
- `orderBy` (string)
- `transaction_id` (string)
- `limit` (integer)
- `page` (integer)

### gettokensevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

- `contract` (string)
- `network_id` (string)

### getholdersevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

- `contract` (string)
- `network_id` (string)
- `order_by` (string)
- `limit` (integer)
- `page` (integer)

### getswapsevm

**Environment variables**

No environment variables required

**Input schema**

- `network_id` (string)
- `pool` (string)
- `caller` (string)
- `sender` (string)
- `recipient` (string)
- `protocol` (string)
- `startTime` (number)
- `endTime` (number)
- `orderBy` (string)
- `transaction_id` (string)
- `limit` (integer)
- `page` (integer)

### getpoolsevm

**Environment variables**

No environment variables required

**Input schema**

- `network_id` (string)
- `pool` (string)
- `factory` (string)
- `token` (string)
- `symbol` (string)
- `protocol` (string)

### getohlcpoolsevmbypool

**Environment variables**

- `API_KEY`

**Input schema**

- `pool` (string)
- `network_id` (string)
- `interval` (string)
- `startTime` (number)
- `endTime` (number)
- `limit` (integer)
- `page` (integer)

### getohlcpricesevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

- `contract` (string)
- `network_id` (string)
- `interval` (string)
- `startTime` (number)
- `endTime` (number)
- `limit` (integer)
- `page` (integer)

### gethistoricalbalancesevmbyaddress

**Environment variables**

- `API_KEY`

**Input schema**

- `address` (string)
- `interval` (string)
- `network_id` (string)
- `contracts` (array)
- `startTime` (number)
- `endTime` (number)
- `limit` (integer)
- `page` (integer)

### gethealth

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getversion

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getnetworks

**Environment variables**

No environment variables required

**Input schema**

No input parameters
