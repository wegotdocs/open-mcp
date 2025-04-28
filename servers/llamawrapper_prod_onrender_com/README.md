# @open-mcp/llamawrapper_prod_onrender_com

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add llamawrapper_prod_onrender_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add llamawrapper_prod_onrender_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add llamawrapper_prod_onrender_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "llamawrapper_prod_onrender_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/llamawrapper_prod_onrender_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/llamawrapper_prod_onrender_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/llamawrapper_prod_onrender_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### getprotocol

**Environment variables**



**Input schema**

```ts
{
  "slug": z.string().describe("Used to filter protocols by their slug.")
}
```

### getprotocoltvl

**Environment variables**



**Input schema**

```ts
{
  "slug": z.string().describe("Used to filter protocols by their slug.")
}
```

### gettopgainers

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top gainers you want to see. Default to 10."),
  "min_tvl": z.number().describe("The minimum TVL that a protocol should have to be included. Defaults to 100000.").optional(),
  "time_period": z.enum(["hour","day","week"]).describe("The time period in which the change occured. Can be 'hour', 'day', or 'week'. Defaults to 'week'.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter protocols by.").optional()
}
```

### gettopgrowers

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top gainers you want to see. Default to 10."),
  "min_tvl": z.number().describe("The minimum TVL that a protocol should have to be included. Defaults to 100000.").optional(),
  "time_period": z.enum(["hour","day","week"]).describe("The time period in which the change occured. Can be 'hour', 'day', or 'week'. Defaults to 'week'.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter protocols by.").optional()
}
```

### gettoplosers

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top gainers you want to see. Default to 10."),
  "min_tvl": z.number().describe("The minimum TVL that a protocol should have to be included. Defaults to 100000.").optional(),
  "time_period": z.enum(["hour","day","week"]).describe("The time period in which the change occured. Can be 'hour', 'day', or 'week'. Defaults to 'week'.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter protocols by.").optional()
}
```

### gettopshrinkers

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top gainers you want to see. Default to 10."),
  "min_tvl": z.number().describe("The minimum TVL that a protocol should have to be included. Defaults to 100000.").optional(),
  "time_period": z.enum(["hour","day","week"]).describe("The time period in which the change occured. Can be 'hour', 'day', or 'week'. Defaults to 'week'.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter protocols by.").optional()
}
```

### gethistoricalprotocoltvl

**Environment variables**



**Input schema**

```ts
{
  "slug": z.string().describe("Used to filter protocols by their slug.")
}
```

### getslug

**Environment variables**



**Input schema**

```ts
{
  "text": z.string().describe("The text to match against the available slugs.")
}
```

### getprotocolfees

**Environment variables**



**Input schema**

```ts
{
  "defillamaId": z.string().describe("The DefiLlamaID of the protocol"),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the fees were collected. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional()
}
```

### gettopprotocolfees

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top protocols to return. Default to 10.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the fees were collected. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional(),
  "chain": z.string().describe("Name of the blockchain or L2 to filter protocol fees by.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional()
}
```

### getdefillamaid

**Environment variables**



**Input schema**

```ts
{
  "text": z.string().describe("The name of the protocol")
}
```

### getprotocolrevenue

**Environment variables**



**Input schema**

```ts
{
  "defillamaId": z.string().describe("The DefiLlamaID of the protocol"),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the revenue was earned. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional()
}
```

### gettopprotocolrevenue

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top protocols to return. Default to 10.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the revenue was earned. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional(),
  "chain": z.string().describe("Name of the blockchain or L2 to filter protocol revenue by.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional()
}
```

### getchaintvl

**Environment variables**



**Input schema**

```ts
{
  "chain": z.string().describe("Name of the chain or L2 to retrieve TVL for.").optional()
}
```

### getchaintvlchange

**Environment variables**



**Input schema**

```ts
{
  "chain": z.string().describe("Name of the chain or L2 to retrieve TVL change for."),
  "time_period": z.enum(["day","week","month"]).describe("Time period for TVL change calculation. Can be day, week or month.").optional()
}
```

### getnetbridgeflow

**Environment variables**



**Input schema**

```ts
{
  "chain": z.string().describe("Name of the chain or L2 to retrieve net bridge flow for."),
  "time_period": z.enum(["day","week","month"]).describe("Time period for net bridge flow calculation. Can be day, week or month.").optional()
}
```

### getallnetbridgeflows

**Environment variables**



**Input schema**

```ts
{
  "time_period": z.enum(["day","week","month"]).describe("Time period for net bridge flow calculation. Can be day, week or month.").optional()
}
```

### gettopyields

**Environment variables**



**Input schema**

```ts
{
  "num_pools": z.number().int().gte(1).describe("Number of pools to retrieve. Default is 10.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter pools by.").optional(),
  "stablecoin": z.boolean().describe("Flag indicating whether to filter for stablecoin yield pools.").optional(),
  "token": z.string().describe("Token or token pair to filter pools by.").optional(),
  "single_sided": z.boolean().describe("Flag indicating whether to filter for single-sided yield pools.").optional(),
  "outlook": z.enum(["stable","up","down"]).describe("Future outlook for the yield of this pool.").optional()
}
```

### getfeatures

**Environment variables**



**Input schema**

```ts
{}
```

### getfeedbackform

**Environment variables**



**Input schema**

```ts
{}
```

### gettopchaingainers

**Environment variables**



**Input schema**

```ts
{
  "num_chains": z.number().int().describe("The number of top gainers you want to see. Defaults to 5.").optional(),
  "min_tvl": z.number().describe("The minimum TVL that a chain should have to be included. Defaults to 10000.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the change occurred. Can be 'day', 'week', or 'month'. Defaults to 'week'.").optional()
}
```

### gettopchaingrowers

**Environment variables**



**Input schema**

```ts
{
  "num_chains": z.number().int().describe("The number of top gainers you want to see. Defaults to 5.").optional(),
  "min_tvl": z.number().describe("The minimum TVL that a chain should have to be included. Defaults to 10000.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the change occurred. Can be 'day', 'week', or 'month'. Defaults to 'week'.").optional()
}
```

### gettopchainlosers

**Environment variables**



**Input schema**

```ts
{
  "num_chains": z.number().int().describe("The number of top losers you want to see. Defaults to 5.").optional(),
  "min_tvl": z.number().describe("The minimum TVL that a chain should have to be included. Defaults to 10000.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the change occurred. Can be 'day', 'week', or 'month'. Defaults to 'week'.").optional()
}
```

### gettopchainshrinkers

**Environment variables**



**Input schema**

```ts
{
  "num_chains": z.number().int().describe("The number of top losers you want to see. Defaults to 5.").optional(),
  "min_tvl": z.number().describe("The minimum TVL that a chain should have to be included. Defaults to 10000.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the change occurred. Can be 'day', 'week', or 'month'. Defaults to 'week'.").optional()
}
```

### getinteresting

**Environment variables**



**Input schema**

```ts
{
  "time_period": z.enum(["day","week"]).describe("The time period for which to retrieve data. Can be day or week.").optional()
}
```

### getdexvolume

**Environment variables**



**Input schema**

```ts
{
  "defillamaId": z.string().describe("The DefiLlamaID of the protocol"),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the trading volume occured. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional()
}
```

### gettopdexvolume

**Environment variables**



**Input schema**

```ts
{
  "num_protocols": z.number().int().describe("The number of top protocols to return. Default to 10.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the revenue was earned. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional(),
  "chain": z.string().describe("Name of the blockchain or L2 to filter protocol revenue by.").optional()
}
```
