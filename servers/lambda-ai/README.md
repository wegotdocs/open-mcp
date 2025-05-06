# @open-mcp/lambda-ai

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "lambda-ai": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/lambda-ai@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/lambda-ai@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add lambda-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add lambda-ai \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add lambda-ai \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "lambda-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/lambda-ai"],
      "env": {"API_KEY":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### listinstances

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)

### listinstancetypes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### launchinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `region_name` (string)
- `instance_type_name` (string)
- `ssh_key_names` (array)
- `file_system_names` (array)
- `hostname` (string)
- `name` (string)
- `image` (other)
- `user_data` (string)
- `tags` (array)

### restartinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `instance_ids` (array)

### terminateinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `instance_ids` (array)

### listsshkeys

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### addsshkey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `public_key` (string)

### deletesshkey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### listfilesystems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### createfilesystem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `region` (string)

### filesystemdelete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### listimages

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### firewallruleslist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### firewallrulesset

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `data` (array)
