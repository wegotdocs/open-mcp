# @open-mcp/localhost_2025

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "localhost_2025": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/localhost_2025@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/localhost_2025@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add localhost_2025 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add localhost_2025 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add localhost_2025 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "localhost_2025": {
      "command": "npx",
      "args": ["-y", "@open-mcp/localhost_2025"],
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

### getrecord

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### create

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (string)
- `title` (string)
- `content` (string)
- `url` (string)
- `status` (integer)
- `redirectType` (integer)
- `redirectUrl` (string)

### delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### getpagelist

**Environment variables**

- `API_KEY`

**Input schema**

- `pageable` (object)
- `pageDTO` (object)

### completions

**Environment variables**

No environment variables required

**Input schema**

- `model` (string)
- `messages` (array)
- `frequency_penalty` (integer)
- `n` (integer)
- `presence_penalty` (integer)
- `stream` (boolean)
- `temperature` (integer)
- `top_p` (integer)

### upload

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### login

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)
- `grantType` (string)

### getrecord_1

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (string)
- `userId` (string)
- `phoneNumber` (string)
- `name` (string)
- `contractAmount` (number)
- `approvalStatus` (integer)

### create_1

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (string)
- `phoneNumber` (string)
- `name` (string)
- `contractAmount` (number)
- `approvalStatus` (integer)

### delete_1

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### audit

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (string)
- `userId` (string)
- `phoneNumber` (string)
- `name` (string)
- `contractAmount` (number)
- `approvalStatus` (integer)

### getpagelist_1

**Environment variables**

- `API_KEY`

**Input schema**

- `pageable` (object)
- `pageDTO` (object)

### ad

**Environment variables**

No environment variables required

**Input schema**

- `prompt` (string)
- `deviceId` (string)
