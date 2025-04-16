# @open-mcp/admin_openbuilder_net_custom

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add admin_openbuilder_net_custom \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add admin_openbuilder_net_custom \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add admin_openbuilder_net_custom \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "admin_openbuilder_net_custom": {
      "command": "npx",
      "args": ["-y", "@open-mcp/admin_openbuilder_net_custom"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/admin_openbuilder_net_custom
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/admin_openbuilder_net_custom`
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

### executecommand

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.number().int().describe("ID del progetto nel database"),
  "command": z.string().describe("Comando SSH da eseguire sul server remoto")
}
```

### executequery

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.number().int().describe("ID del progetto nel database"),
  "query": z.string().describe("Query SQL da eseguire"),
  "params": z.array(z.union([z.string(), z.number(), z.boolean()])).describe("Parametri per query preparate (opzionale)").optional()
}
```

### createrecord

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.number().int().describe("ID del progetto contenente le configurazioni del database"),
  "entity": z.string().describe("Nome dell'entità su cui operare"),
  "datas": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDati da inserire nel record")
}
```

### editrecord

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.number().int().describe("ID del progetto contenente le configurazioni del database"),
  "entity": z.string().describe("Nome dell'entità su cui operare"),
  "id": z.number().int().describe("ID del record da modificare"),
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDati da aggiornare nel record")
}
```

### deleterecord

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.number().int().describe("ID del progetto contenente le configurazioni del database"),
  "entity": z.string().describe("Nome dell'entità su cui operare"),
  "id": z.number().int().describe("ID del record da eliminare")
}
```
