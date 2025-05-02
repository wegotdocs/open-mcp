# @open-mcp/autobahn

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add autobahn \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add autobahn \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add autobahn \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "autobahn": {
      "command": "npx",
      "args": ["-y", "@open-mcp/autobahn"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/autobahn
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/autobahn`
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

### list_autobahnen

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### list_roadworks

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_roadwork

**Environment variables**

No environment variables required

**Input schema**

- `roadworkId` (string)

### list_webcams

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_webcam

**Environment variables**

No environment variables required

**Input schema**

- `webcamId` (string)

### list_parking_lorries

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_parking_lorry

**Environment variables**

No environment variables required

**Input schema**

- `lorryId` (string)

### list_warnings

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_warning

**Environment variables**

No environment variables required

**Input schema**

- `warningId` (string)

### list_closures

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_closure

**Environment variables**

No environment variables required

**Input schema**

- `closureId` (string)

### list_charging_stations

**Environment variables**

No environment variables required

**Input schema**

- `roadId` (string)

### get_charging_station

**Environment variables**

No environment variables required

**Input schema**

- `stationId` (string)
