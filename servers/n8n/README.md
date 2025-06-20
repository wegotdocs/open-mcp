# @open-mcp/n8n

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "n8n": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/n8n@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/n8n@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
X_N8N_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add n8n \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_N8N_API_KEY=$X_N8N_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add n8n \
  .cursor/mcp.json \
  --X_N8N_API_KEY=$X_N8N_API_KEY
```

### Other

```bash
npx @open-mcp/config add n8n \
  /path/to/client/config.json \
  --X_N8N_API_KEY=$X_N8N_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["-y", "@open-mcp/n8n"],
      "env": {"X_N8N_API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `X_N8N_API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### post_audit

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `additionalOptions` (object)

### post_credentials

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `type` (string)
- `data` (object)
- `createdAt` (string)
- `updatedAt` (string)

### deletecredential

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### get_credentials_schema_credentialtypename_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `credentialTypeName` (string)

### get_executions

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `includeData` (boolean)
- `status` (string)
- `workflowId` (string)
- `projectId` (string)
- `limit` (number)
- `cursor` (string)

### get_executions_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (number)
- `includeData` (boolean)

### delete_executions_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (number)

### post_tags

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `createdAt` (string)
- `updatedAt` (string)

### get_tags

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `limit` (number)
- `cursor` (string)

### get_tags_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### delete_tags_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### put_tags_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `createdAt` (string)
- `updatedAt` (string)

### post_workflows

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `active` (boolean)
- `createdAt` (string)
- `updatedAt` (string)
- `nodes` (array)
- `connections` (object)
- `settings` (object)
- `staticData` (other)
- `tags` (array)

### get_workflows

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `active` (boolean)
- `tags` (string)
- `name` (string)
- `projectId` (string)
- `excludePinnedData` (boolean)
- `limit` (number)
- `cursor` (string)

### get_workflows_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `excludePinnedData` (boolean)

### delete_workflows_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### put_workflows_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `active` (boolean)
- `createdAt` (string)
- `updatedAt` (string)
- `nodes` (array)
- `connections` (object)
- `settings` (object)
- `staticData` (other)
- `tags` (array)

### post_workflows_id_activate

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### post_workflows_id_deactivate

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### put_workflows_id_transfer

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `destinationProjectId` (string)

### put_credentials_id_transfer

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `destinationProjectId` (string)

### get_workflows_id_tags

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### put_workflows_id_tags

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### get_users

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `limit` (number)
- `cursor` (string)
- `includeRole` (boolean)
- `projectId` (string)

### post_users

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

No input parameters

### get_users_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `includeRole` (boolean)

### delete_users_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### patch_users_id_role

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `newRoleName` (string)

### post_source_control_pull

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `force` (boolean)
- `variables` (object)

### post_variables

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `key` (string)
- `value` (string)
- `type` (string)

### get_variables

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `limit` (number)
- `cursor` (string)

### delete_variables_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)

### put_variables_id_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `key` (string)
- `value` (string)
- `type` (string)

### post_projects

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `type` (string)

### get_projects

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `limit` (number)
- `cursor` (string)

### delete_projects_projectid_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `projectId` (string)

### put_projects_projectid_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `projectId` (string)
- `id` (string)
- `name` (string)
- `type` (string)

### post_projects_projectid_users

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `projectId` (string)
- `relations` (array)

### delete_projects_projectid_users_userid_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `projectId` (string)
- `userId` (string)

### patch_projects_projectid_users_userid_

**Environment variables**

- `X_N8N_API_KEY`

**Input schema**

- `projectId` (string)
- `userId` (string)
- `role` (string)
