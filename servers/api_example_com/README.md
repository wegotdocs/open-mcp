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

### single_point_data_request_api_temporal_hourly_point_get

**Environment variables**



**Input schema**

```ts
{
  "start": z.number().int().describe("This is the start time for the data request formatted as YYYYMMDD."),
  "end": z.number().int().describe("This is the end time for the data request formatted as YYYYMMDD."),
  "latitude": z.number().describe("This is the point latitude value."),
  "longitude": z.number().describe("This is the point longitude value."),
  "community": z.enum(["ag","sb","re"]).describe("The user community to return units for."),
  "parameters": z.string().describe("A comma delimited list of the parameter abbreviations."),
  "format": z.enum(["csv","json","ascii","netcdf","epw","epw_csv","xarray","sam","srw"]).describe("The response objects output format.").optional(),
  "user": z.string().describe("A user name for identification purposes.").optional(),
  "header": z.boolean().describe("To show or hide the header files of CSV and ASCII formats.").optional(),
  "time-standard": z.enum(["lst","utc"]).describe("The time standard to return timestamps for.").optional(),
  "site-elevation": z.number().describe("The custom site elevation in meters to produce the corrected atmospheric pressure adjusted for elevation.").optional(),
  "wind-elevation": z.number().describe("The custom wind elevation in meters to produce the wind speed adjusted for elevation.").optional(),
  "wind-surface": z.string().describe("The definable surface type to adjusted the wind speed.").optional()
}
```

### configuration_settings_request_api_temporal_hourly_configuration

**Environment variables**



**Input schema**

```ts
{}
```
