# @open-mcp/thegraph-token-api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "thegraph-token-api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/thegraph-token-api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/thegraph-token-api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

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
- `orderDirection` (string)
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
- `orderBy` (string)
- `orderDirection` (string)
- `limit` (integer)
- `page` (integer)

### getswapsevm

**Environment variables**

- `API_KEY`

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
- `orderDirection` (string)
- `transaction_id` (string)
- `limit` (integer)
- `page` (integer)

### getpoolsevm

**Environment variables**

- `API_KEY`

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
