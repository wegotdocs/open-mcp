# @open-mcp/metatx

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/metatx add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/metatx add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/metatx add-to-client /path/to/client/config.json
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

## Tools

### blockchains_route_blockchains_get

```ts

```

### list_registered_contracts_route_contracts_get

```ts
{
  "blockchain": z.string().optional(),
  "address": z.string().optional(),
  "limit": z.number().int(),
  "offset": z.number().int().optional()
}
```

### register_contract_route_contracts_post

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

```ts
{
  "contract_id": z.string().uuid()
}
```

### update_contract_route_contracts_contract_id_put

```ts
{
  "contract_id": z.string().uuid(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional(),
  "ignore_nulls": z.boolean()
}
```

### delete_contract_route_contracts_contract_id_delete

```ts
{
  "contract_id": z.string().uuid()
}
```

### list_metatx_requesters_route_requesters_get

```ts

```

### list_metatx_requester_holders_route_contracts_contract_id_holder

```ts
{
  "contract_id": z.string().uuid(),
  "extended": z.boolean()
}
```

### add_metatx_requester_holder_route_contracts_contract_id_holders_

```ts
{
  "contract_id": z.string().uuid(),
  "holder_id": z.string().uuid(),
  "holder_type": z.enum(["user","group"]).describe("An enumeration."),
  "permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional()
}
```

### delete_metatx_requester_holder_route_contracts_contract_id_holde

```ts
{
  "contract_id": z.string().uuid(),
  "holder_id": z.string().uuid(),
  "holder_type": z.enum(["user","group"]).describe("An enumeration."),
  "permissions": z.array(z.enum(["admin","create","read","update","delete"]).describe("An enumeration.")).optional()
}
```

### call_request_types_route_requests_types_get

```ts

```

### call_request_types_route_contracts_types_get

```ts

```

### list_requests_route_requests_get

```ts
{
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "caller": z.string(),
  "limit": z.number().int(),
  "offset": z.number().int().optional(),
  "show_expired": z.boolean(),
  "live_after": z.number().int().optional(),
  "authorization": z.string().optional()
}
```

### create_requests_requests_post

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

```ts

```

### check_requests_route_requests_check_get

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

```ts
{
  "request_id": z.string().uuid()
}
```

### complete_call_request_route_requests_request_id_complete_post

```ts
{
  "request_id": z.string().uuid(),
  "tx_hash": z.string(),
  "authorization": z.string().optional()
}
```

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
