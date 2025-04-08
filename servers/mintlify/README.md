# @open-mcp/mintlify

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/mintlify add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/mintlify add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/mintlify add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "mintlify": {
      "command": "npx",
      "args": ["-y", "@open-mcp/mintlify"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/mintlify
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/mintlify`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### get_plants

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("The maximum number of results to return").optional()
}
```

### post_plants

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_plants_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().describe("ID of plant to delete")
}
```
