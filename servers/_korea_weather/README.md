# @open-mcp/_korea_weather

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/_korea_weather add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/_korea_weather add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/_korea_weather add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_korea_weather": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_korea_weather"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/_korea_weather
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/_korea_weather`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### tool_endpoint_get_current_weather_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_endpoint_list_weather_stations_post

**Environment variables**



**Input schema**

```ts
{}
```

### tool_endpoint_get_weather_forecast_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_endpoint_get_nearest_station_post

**Environment variables**



**Input schema**

```ts
{
  "latitude": z.number(),
  "longitude": z.number()
}
```

### tool_endpoint_get_air_quality_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_endpoint_get_air_quality_by_station_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string(),
  "station_name": z.string().optional()
}
```
