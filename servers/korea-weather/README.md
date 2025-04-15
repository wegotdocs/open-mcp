# @open-mcp/korea-weather

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add korea-weather \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add korea-weather \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add korea-weather \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "korea-weather": {
      "command": "npx",
      "args": ["-y", "@open-mcp/korea-weather"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/korea-weather
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/korea-weather`
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

### tool_get_current_weather_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_list_weather_stations_post

**Environment variables**



**Input schema**

```ts
{}
```

### tool_get_weather_forecast_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_get_nearest_station_post

**Environment variables**



**Input schema**

```ts
{
  "latitude": z.number(),
  "longitude": z.number()
}
```

### tool_get_air_quality_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string()
}
```

### tool_get_air_quality_by_station_post

**Environment variables**



**Input schema**

```ts
{
  "location": z.string(),
  "station_name": z.string().optional()
}
```
