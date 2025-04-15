# @open-mcp/metatx

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add metatx \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add metatx \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=...
```

### Other

```bash
npx @open-mcp/config add metatx \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "metatx": {
      "command": "npx",
      "args": ["-y", "@open-mcp/metatx"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/metatx
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/metatx`
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

### blockchains_route_blockchains_get

**Environment variables**



**Input schema**

```ts
{}
```

### list_registered_contracts_route_contracts_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "blockchain": z.string().optional(),
  "address": z.string().optional(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional()
}
```

### register_contract_route_contracts_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "blockchain": z.string(),
  "address": z.string(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional()
}
```

### get_registered_contract_route_contracts_contract_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid()
}
```

### update_contract_route_contracts_contract_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional(),
  "ignore_nulls": z.boolean().optional()
}
```

### delete_contract_route_contracts_contract_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid()
}
```

### list_metatx_requesters_route_requesters_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### list_metatx_requester_holders_route_contracts_contract_id_holder

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid(),
  "extended": z.boolean().optional()
}
```

### add_metatx_requester_holder_route_contracts_contract_id_holders_

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid(),
  "holder_id": z.string().uuid(),
  "holder_type": z.enum(["user","group"]).describe("An enumeration."),
  "permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional()
}
```

### delete_metatx_requester_holder_route_contracts_contract_id_holde

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid(),
  "holder_id": z.string().uuid(),
  "holder_type": z.enum(["user","group"]).describe("An enumeration."),
  "permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional()
}
```

### call_request_types_route_requests_types_get

**Environment variables**



**Input schema**

```ts
{}
```

### call_request_types_route_contracts_types_get

**Environment variables**



**Input schema**

```ts
{}
```

### list_requests_route_requests_get

**Environment variables**



**Input schema**

```ts
{
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "caller": z.string(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "show_expired": z.boolean().optional(),
  "live_after": z.number().int().optional(),
  "authorization": z.string().optional()
}
```

### create_requests_requests_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "specifications": z.array(z.object({ "caller": z.string(), "method": z.string(), "call_request_type": z.string(), "request_id": z.string(), "parameters": z.record(z.any()) })).optional(),
  "ttl_days": z.number().int().optional(),
  "live_at": z.number().int().optional()
}
```

### delete_requests_requests_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### check_requests_route_requests_check_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "specifications": z.array(z.object({ "caller": z.string(), "method": z.string(), "call_request_type": z.string(), "request_id": z.string(), "parameters": z.record(z.any()) })).optional(),
  "ttl_days": z.number().int().optional(),
  "live_at": z.number().int().optional()
}
```

### get_request_requests_request_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "request_id": z.string().uuid()
}
```

### complete_call_request_route_requests_request_id_complete_post

**Environment variables**



**Input schema**

```ts
{
  "request_id": z.string().uuid(),
  "tx_hash": z.string(),
  "authorization": z.string().optional()
}
```
