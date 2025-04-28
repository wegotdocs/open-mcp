# @open-mcp/my-server

## Installing

First set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add my-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add my-server \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add my-server \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/my-server"],
      "env": {"OAUTH2_TOKEN":"...","API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`
- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/my-server
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/my-server`
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

### updatepet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string(),
  "category": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "photoUrls": z.array(z.string()),
  "tags": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().optional() })).optional(),
  "status": z.enum(["available","pending","sold"]).describe("pet status in the store").optional()
}
```

### addpet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string(),
  "category": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "photoUrls": z.array(z.string()),
  "tags": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().optional() })).optional(),
  "status": z.enum(["available","pending","sold"]).describe("pet status in the store").optional()
}
```

### findpetsbystatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "status": z.enum(["available","pending","sold"]).describe("Status values that need to be considered for filter").optional()
}
```

### findpetsbytags

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tags": z.array(z.string()).describe("Tags to filter by").optional()
}
```

### getpetbyid

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "petId": z.number().int().describe("ID of pet to return")
}
```

### updatepetwithform

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "petId": z.number().int().describe("ID of pet that needs to be updated"),
  "name": z.string().describe("Name of pet that needs to be updated").optional(),
  "status": z.string().describe("Status of pet that needs to be updated").optional()
}
```

### deletepet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "petId": z.number().int().describe("Pet id to delete"),
  "api_key": z.string().optional()
}
```

### uploadfile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "petId": z.number().int().describe("ID of pet to update"),
  "additionalMetadata": z.string().describe("Additional Metadata").optional()
}
```

### getinventory

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### placeorder

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "petId": z.number().int().optional(),
  "quantity": z.number().int().optional(),
  "shipDate": z.string().datetime({ offset: true }).optional(),
  "status": z.enum(["placed","approved","delivered"]).describe("Order Status").optional(),
  "complete": z.boolean().optional()
}
```

### getorderbyid

**Environment variables**



**Input schema**

```ts
{
  "orderId": z.number().int().describe("ID of order that needs to be fetched")
}
```

### deleteorder

**Environment variables**



**Input schema**

```ts
{
  "orderId": z.number().int().describe("ID of the order that needs to be deleted")
}
```

### createuser

**Environment variables**



**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "phone": z.string().optional(),
  "userStatus": z.number().int().describe("User Status").optional()
}
```

### createuserswithlistinput

**Environment variables**



**Input schema**

```ts
{}
```

### loginuser

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The user name for login").optional(),
  "password": z.string().describe("The password for login in clear text").optional()
}
```

### logoutuser

**Environment variables**



**Input schema**

```ts
{}
```

### getuserbyname

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The name that needs to be fetched. Use user1 for testing")
}
```

### updateuser

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("name that need to be deleted"),
  "id": z.number().int().optional(),
  "b_username": z.string().optional(),
  "firstName": z.string().optional(),
  "lastName": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional(),
  "phone": z.string().optional(),
  "userStatus": z.number().int().describe("User Status").optional()
}
```

### deleteuser

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The name that needs to be deleted")
}
```
