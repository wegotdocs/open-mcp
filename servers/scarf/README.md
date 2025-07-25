# @open-mcp/scarf

## Using the remote server

Add the following URL to your MCP client using the Streamable HTTP transport:

```
https://scarf.server.open-mcp.org/latest/mcp
```

The full JSON config looks like this:

```json
{
  "mcpServers": {
    "scarf": {
      "transport": "streamableHttp",
      "url": "https://scarf.server.open-mcp.org/latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://scarf.server.open-mcp.org/latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add scarf \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add scarf \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add scarf \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "scarf": {
      "command": "npx",
      "args": ["-y", "@open-mcp/scarf"],
      "env": { "API_KEY": "..." }
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### exportentityaggregates

**Environment variables**

- `API_KEY`

**Input schema**

- `owner` (string)
- `start_date` (string)
- `end_date` (string)
- `query` (string)
- `rollup` (array)
- `breakdown` (array)
- `filter_id` (string)

### getpackagebyname

**Environment variables**

- `API_KEY`

**Input schema**

- `owner` (string)
- `package_type` (string)
- `package_name` (string)

### getuserinformation

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)
