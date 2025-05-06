# @open-mcp/korea-weather

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "korea-weather": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/korea-weather@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/korea-weather@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### tool_get_current_weather_post

**Environment variables**

No environment variables required

**Input schema**

- `location` (string)

### tool_list_weather_stations_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### tool_get_weather_forecast_post

**Environment variables**

No environment variables required

**Input schema**

- `location` (string)

### tool_get_nearest_station_post

**Environment variables**

No environment variables required

**Input schema**

- `latitude` (number)
- `longitude` (number)

### tool_get_air_quality_post

**Environment variables**

No environment variables required

**Input schema**

- `location` (string)

### tool_get_air_quality_by_station_post

**Environment variables**

No environment variables required

**Input schema**

- `location` (string)
- `station_name` (string)
