# @open-mcp/api_example_com

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_example_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_example_com`
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

### submit_stock_prediction_api_v1_predictions_submit_stock_predicti

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_predictions_api_v1_predictions_get_all_predictions_get

**Environment variables**



**Input schema**

```ts
{}
```

### test_connection_api_v1_predictions_test_connection_get

**Environment variables**



**Input schema**

```ts
{}
```

### get_leaderboard_api_v1_predictions_leaderboard_get

**Environment variables**



**Input schema**

```ts
{
  "time_window": z.string().describe("Time window for leaderboard").optional()
}
```

### get_user_stats_api_v1_predictions_user_stats_email_get

**Environment variables**



**Input schema**

```ts
{
  "email": z.string(),
  "time_window": z.string().describe("Time window for user stats").optional()
}
```

### get_model_summary_api_v1_predictions_summary_model_name_get

**Environment variables**



**Input schema**

```ts
{
  "model_name": z.string()
}
```

### get_stock_price_api_v1_stockget_price_get

**Environment variables**



**Input schema**

```ts
{
  "symbol": z.string().describe("Stock symbol, e.g., QQQ")
}
```

### get_available_symbols_api_v1_stock_predictions_symbols_get

**Environment variables**



**Input schema**

```ts
{}
```

### get_latest_prediction_api_v1_stock_predictions_latest_get

**Environment variables**



**Input schema**

```ts
{
  "ticker": z.string().describe("股票代码").optional(),
  "date": z.union([z.string(), z.null()]).describe("预测日期，格式: YYYY-MM-DD，默认为最近的交易日").optional()
}
```

### get_prediction_api_v1_stock_predictions_ticker_date_get

**Environment variables**



**Input schema**

```ts
{
  "ticker": z.string(),
  "date": z.string(),
  "start_bar": z.number().int().describe("开始的时间段编号，1表示开盘后15分钟").optional(),
  "end_bar": z.number().int().describe("结束的时间段编号，2表示开盘后30分钟").optional()
}
```

### get_stock_prediction_api_v1_stock_predictions_predictions_ticker

**Environment variables**



**Input schema**

```ts
{
  "ticker": z.string(),
  "date": z.string().optional()
}
```

### root_get

**Environment variables**



**Input schema**

```ts
{}
```

### health_check_health_get

**Environment variables**



**Input schema**

```ts
{}
```
