# @open-mcp/swagger-petstore

## Installing

First set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add swagger-petstore \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add swagger-petstore \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add swagger-petstore \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "swagger-petstore": {
      "command": "npx",
      "args": ["-y", "@open-mcp/swagger-petstore"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/swagger-petstore
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/swagger-petstore`
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

### updatepet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)
- `name` (string)
- `category` (object)
- `photoUrls` (array)
- `tags` (array)
- `status` (string)

### addpet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)
- `name` (string)
- `category` (object)
- `photoUrls` (array)
- `tags` (array)
- `status` (string)

### findpetsbystatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `status` (string)

### findpetsbytags

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `tags` (array)

### getpetbyid

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `petId` (integer)

### updatepetwithform

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `petId` (integer)
- `name` (string)
- `status` (string)

### deletepet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `petId` (integer)
- `api_key` (string)

### uploadfile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `petId` (integer)
- `additionalMetadata` (string)

### getinventory

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### placeorder

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `petId` (integer)
- `quantity` (integer)
- `shipDate` (string)
- `status` (string)
- `complete` (boolean)

### getorderbyid

**Environment variables**

No environment variables required

**Input schema**

- `orderId` (integer)

### deleteorder

**Environment variables**

No environment variables required

**Input schema**

- `orderId` (integer)

### createuser

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `username` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `password` (string)
- `phone` (string)
- `userStatus` (integer)

### createuserswithlistinput

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### loginuser

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)

### logoutuser

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getuserbyname

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### updateuser

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `id` (integer)
- `b_username` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `password` (string)
- `phone` (string)
- `userStatus` (integer)

### deleteuser

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
