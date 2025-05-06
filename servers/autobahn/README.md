# @open-mcp/autobahn

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "autobahn": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/autobahn@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/autobahn@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


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
