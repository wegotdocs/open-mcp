# @open-mcp/thegraph-token-api

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/thegraph-token-api add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/thegraph-token-api add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/thegraph-token-api add-to-client /path/to/client/config.json
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

### getbalancesevmbyaddress

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM wallet address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "contract": z.string().optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}
```

### gettransfersevmbyaddress

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM wallet address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "age": z.number().int().gte(1).lte(180).describe("Indicates how many days have passed since the data's creation or insertion.").optional(),
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by contract address").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}
```

### getholdersevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM contract address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "order_by": z.enum(["asc","desc"]).describe("The order in which to return the results: Ascending (asc) or Descending (desc).").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}
```

### gettokensevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM contract address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional()
}
```

### getohlcpricesevmbycontract

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM contract address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "interval": z.enum(["1h","4h","1d","1w"]).describe("The interval for which to aggregate price data (hourly, 4-hours, daily or weekly).").optional(),
  "startTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
  "endTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}
```

### gethealth

**Environment variables**



**Input schema**

```ts
{}
```

### getversion

**Environment variables**



**Input schema**

```ts
{}
```

### getnetworks

**Environment variables**



**Input schema**

```ts
{}
```
