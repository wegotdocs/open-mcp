# @open-mcp/currency_exchange_teststage_org_exchanger_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "currency_exchange_teststage_org_exchanger_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/currency_exchange_teststage_org_exchanger_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/currency_exchange_teststage_org_exchanger_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add currency_exchange_teststage_org_exchanger_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add currency_exchange_teststage_org_exchanger_api \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add currency_exchange_teststage_org_exchanger_api \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "currency_exchange_teststage_org_exchanger_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/currency_exchange_teststage_org_exchanger_api"],
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

### getcandleshistory

**Environment variables**

No environment variables required

**Input schema**

- `symbols` (array)
- `providers` (array)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `interval` (string)
- `cursor` (string)

### register

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)

### auth

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)

### refreshtime

**Environment variables**

No environment variables required

**Input schema**

- `customerId` (integer)
- `desiredCapacity` (object)

### getexchangerates

**Environment variables**

No environment variables required

**Input schema**

- `pageable` (object)

### updateexchangerates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gethighestexchangerate

**Environment variables**

No environment variables required

**Input schema**

- `currency` (string)

### getchronologicalhistory

**Environment variables**

No environment variables required

**Input schema**

- `currency` (string)
- `from` (string)
- `to` (string)
- `pageable` (object)

### getexchangerates_1

**Environment variables**

No environment variables required

**Input schema**

- `currency` (string)
- `sum` (number)
- `provider` (string)
- `pageable` (object)

### closesession

**Environment variables**

No environment variables required

**Input schema**

- `sessionId` (string)
