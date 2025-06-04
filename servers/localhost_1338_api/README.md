# @open-mcp/localhost_1338_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "localhost_1338_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/localhost_1338_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/localhost_1338_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add localhost_1338_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add localhost_1338_api \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add localhost_1338_api \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "localhost_1338_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/localhost_1338_api"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_clientes

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `pagination[withCount]` (boolean)
- `pagination[page]` (integer)
- `pagination[pageSize]` (integer)
- `pagination[start]` (integer)
- `pagination[limit]` (integer)
- `fields` (string)
- `populate` (string)
- `filters` (object)
- `locale` (string)

### post_clientes

**Environment variables**

- `API_KEY`

**Input schema**

- `data` (object)

### get_clientes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### put_clientes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)
- `data` (object)

### delete_clientes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### get_establecimientos

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `pagination[withCount]` (boolean)
- `pagination[page]` (integer)
- `pagination[pageSize]` (integer)
- `pagination[start]` (integer)
- `pagination[limit]` (integer)
- `fields` (string)
- `populate` (string)
- `filters` (object)
- `locale` (string)

### post_establecimientos

**Environment variables**

- `API_KEY`

**Input schema**

- `data` (object)

### get_establecimientos_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### put_establecimientos_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)
- `data` (object)

### delete_establecimientos_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### get_trasteros

**Environment variables**

- `API_KEY`

**Input schema**

- `sort` (string)
- `pagination[withCount]` (boolean)
- `pagination[page]` (integer)
- `pagination[pageSize]` (integer)
- `pagination[start]` (integer)
- `pagination[limit]` (integer)
- `fields` (string)
- `populate` (string)
- `filters` (object)
- `locale` (string)

### post_trasteros

**Environment variables**

- `API_KEY`

**Input schema**

- `data` (object)

### get_trasteros_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### put_trasteros_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)
- `data` (object)

### delete_trasteros_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (number)

### post_upload

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_upload_id_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_upload_files

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_upload_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### delete_upload_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_connect_provider_

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)

### post_auth_local

**Environment variables**

- `API_KEY`

**Input schema**

- `identifier` (string)
- `password` (string)

### post_auth_local_register

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)
- `email` (string)
- `password` (string)

### get_auth_provider_callback

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)

### post_auth_forgot_password

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)

### post_auth_reset_password

**Environment variables**

- `API_KEY`

**Input schema**

- `password` (string)
- `passwordConfirmation` (string)
- `code` (string)

### post_auth_change_password

**Environment variables**

- `API_KEY`

**Input schema**

- `password` (string)
- `currentPassword` (string)
- `passwordConfirmation` (string)

### get_auth_email_confirmation

**Environment variables**

- `API_KEY`

**Input schema**

- `confirmation` (string)

### post_auth_send_email_confirmation

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)

### get_users_permissions_permissions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_users_permissions_roles

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_users_permissions_roles

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (string)
- `type` (string)
- `permissions` (object)

### get_users_permissions_roles_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### put_users_permissions_roles_role_

**Environment variables**

- `API_KEY`

**Input schema**

- `role` (string)
- `name` (string)
- `description` (string)
- `type` (string)
- `permissions` (object)

### delete_users_permissions_roles_role_

**Environment variables**

- `API_KEY`

**Input schema**

- `role` (string)

### get_users

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_users

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `username` (string)
- `password` (string)

### get_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### put_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `email` (string)
- `username` (string)
- `password` (string)

### delete_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_users_me

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_users_count

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
