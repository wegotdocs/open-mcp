# @open-mcp/petstore3_swagger_io_api_v3

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/petstore3_swagger_io_api_v3 add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/petstore3_swagger_io_api_v3 add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/petstore3_swagger_io_api_v3 add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "petstore3_swagger_io_api_v3": {
      "command": "npx",
      "args": ["-y", "@open-mcp/petstore3_swagger_io_api_v3"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/petstore3_swagger_io_api_v3
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/petstore3_swagger_io_api_v3`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### updatepet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.number().int().optional(),
  "name": z.string(),
  "category": z.object({ "id": z.number().int().optional(), "name": z.string().optional() }).optional(),
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
  "category": z.object({ "id": z.number().int().optional(), "name": z.string().optional() }).optional(),
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
