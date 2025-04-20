# @open-mcp/shot-url

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add shot-url \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add shot-url \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=...
```

### Other

```bash
npx @open-mcp/config add shot-url \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "shot-url": {
      "command": "npx",
      "args": ["-y", "@open-mcp/shot-url"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/shot-url
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/shot-url`
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

### oauthapplicationlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### revokeoauthtoken

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "token": z.string().optional(),
  "token_type_hint": z.string().describe("Enums(access_token,refresh_token)").optional()
}
```

### oauthtokenrequest

**Environment variables**



**Input schema**

```ts
{}
```

### shorturllist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### removeshorturl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("short url key")
}
```

### generateqrcode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("short url request").optional()
}
```

### generateshorturl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("nullable").optional(),
  "url": z.string().optional()
}
```
