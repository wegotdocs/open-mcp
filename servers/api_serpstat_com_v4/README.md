# @open-mcp/api_serpstat_com_v4

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_serpstat_com_v4": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_serpstat_com_v4@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_serpstat_com_v4@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_serpstat_com_v4 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --TOKEN=$TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_serpstat_com_v4 \
  .cursor/mcp.json \
  --TOKEN=$TOKEN
```

### Other

```bash
npx @open-mcp/config add api_serpstat_com_v4 \
  /path/to/client/config.json \
  --TOKEN=$TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_serpstat_com_v4": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_serpstat_com_v4"],
      "env": {"TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### post_v4_token_token_serpstatdomainprocedure_getdomainsinfo

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_v4_token_token_serpstatdomainprocedure_getdomainshistory

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getdomainkeywords

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getcompetitors

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getadkeywords

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_exportpositions

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_erpstatdomainprocedure_getadscompetitors

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### parameters_serpstatdomainprocedure_getadscompetitors

**Environment variables**

- `TOKEN`

**Input schema**

No input parameters

### post_serpstatdomainprocedure_getallregionstraffic

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getdomainurls

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getdomainsintersection

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getdomainsuniqkeywords

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getorganiccompetitorspage

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_getregionscount

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)

### post_serpstatdomainprocedure_gettopurls

**Environment variables**

- `TOKEN`

**Input schema**

- `id` (string)
- `method` (string)
- `params` (object)
