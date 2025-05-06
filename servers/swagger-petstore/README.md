# @open-mcp/swagger-petstore

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "swagger-petstore": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/swagger-petstore@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/swagger-petstore@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider
- `API_KEY` - gets sent to the API provider

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
