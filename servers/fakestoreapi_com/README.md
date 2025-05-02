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

- `toolName` (string)
- `jsonPointers` (array)

### getallproducts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### addproduct

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `title` (string)
- `price` (number)
- `description` (string)
- `category` (string)
- `image` (string)

### getproductbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### updateproduct

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `title` (string)
- `price` (number)
- `description` (string)
- `category` (string)
- `image` (string)

### deleteproduct

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getallcarts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### addcart

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `userId` (integer)
- `products` (array)

### getcartbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### updatecart

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `userId` (integer)
- `products` (array)

### deletecart

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getallusers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### adduser

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `username` (string)
- `email` (string)
- `password` (string)

### getuserbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### updateuser

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `username` (string)
- `email` (string)
- `password` (string)

### deleteuser

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### loginuser

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)
