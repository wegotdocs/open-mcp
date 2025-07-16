# @open-mcp/api_taskmanager_com_v1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_taskmanager_com_v1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_taskmanager_com_v1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_taskmanager_com_v1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_taskmanager_com_v1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_taskmanager_com_v1 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_taskmanager_com_v1 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_taskmanager_com_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_taskmanager_com_v1"],
      "env": {"API_KEY":"..."}
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

### gettasks

**Environment variables**

- `API_KEY`

**Input schema**

- `status` (string)
- `limit` (integer)
- `offset` (integer)

### createtask

**Environment variables**

- `API_KEY`

**Input schema**

- `title` (string)
- `description` (string)
- `priority` (string)
- `assigned_to` (string)
- `due_date` (string)
- `tags` (array)

### gettask

**Environment variables**

- `API_KEY`

**Input schema**

- `taskId` (string)

### updatetask

**Environment variables**

- `API_KEY`

**Input schema**

- `taskId` (string)
- `title` (string)
- `description` (string)
- `status` (string)
- `priority` (string)
- `assigned_to` (string)
- `due_date` (string)
- `tags` (array)

### deletetask

**Environment variables**

- `API_KEY`

**Input schema**

- `taskId` (string)

### getusers

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getuserprofile

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (string)

### getusertasks

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (string)
