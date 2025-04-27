# @open-mcp/fakestoreapi_com

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add fakestoreapi_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add fakestoreapi_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add fakestoreapi_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "fakestoreapi_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/fakestoreapi_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/fakestoreapi_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/fakestoreapi_com`
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

### getallproducts

**Environment variables**



**Input schema**

```ts
{}
```

### addproduct

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "title": z.string().optional(),
  "price": z.number().optional(),
  "description": z.string().optional(),
  "category": z.string().optional(),
  "image": z.string().url().optional()
}
```

### getproductbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### updateproduct

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int(),
  "b_id": z.number().int().optional(),
  "title": z.string().optional(),
  "price": z.number().optional(),
  "description": z.string().optional(),
  "category": z.string().optional(),
  "image": z.string().url().optional()
}
```

### deleteproduct

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### getallcarts

**Environment variables**



**Input schema**

```ts
{}
```

### addcart

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "userId": z.number().int().optional(),
  "products": z.array(z.object({ "id": z.number().int().optional(), "title": z.string().optional(), "price": z.number().optional(), "description": z.string().optional(), "category": z.string().optional(), "image": z.string().url().optional() })).optional()
}
```

### getcartbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### updatecart

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int(),
  "b_id": z.number().int().optional(),
  "userId": z.number().int().optional(),
  "products": z.array(z.object({ "id": z.number().int().optional(), "title": z.string().optional(), "price": z.number().optional(), "description": z.string().optional(), "category": z.string().optional(), "image": z.string().url().optional() })).optional()
}
```

### deletecart

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### getallusers

**Environment variables**



**Input schema**

```ts
{}
```

### adduser

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "username": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional()
}
```

### getuserbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### updateuser

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int(),
  "b_id": z.number().int().optional(),
  "username": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional()
}
```

### deleteuser

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int()
}
```

### loginuser

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().optional(),
  "password": z.string().optional()
}
```
