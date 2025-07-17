# @open-mcp/encharge

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "encharge": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/encharge@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/encharge@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add encharge \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add encharge \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add encharge \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "encharge": {
      "command": "npx",
      "args": ["-y", "@open-mcp/encharge"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### createwebhook

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `eventType` (string)
- `targetUrl` (string)

### archivepeople

**Environment variables**

No environment variables required

**Input schema**

- `people` (object)
- `force` (boolean)

### getspecificpeople

**Environment variables**

No environment variables required

**Input schema**

- `people` (object)

### createupdatepeople

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getinfo

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### deletewebhook

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (number)

### getfields

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createfields

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### editfield

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fieldName` (string)
- `name` (string)
- `title` (string)
- `type` (string)
- `format` (string)
- `readOnly` (boolean)
- `tooltip` (string)
- `icon` (string)
- `array` (boolean)
- `canMapFrom` (boolean)
- `firstClassField` (boolean)
- `createdBy` (other)

### deletefield

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fieldName` (string)

### getsegments

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getpeopleinsegment

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `segmentId` (number)
- `limit` (number)
- `offset` (number)
- `attributes` (array)
- `sort` (string)
- `order` (string)

### addtag

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removetag

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### unsubscribeperson

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `email` (string)
- `userId` (string)
- `id` (string)
