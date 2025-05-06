# @open-mcp/sanity

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "sanity": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/sanity@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/sanity@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add sanity \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add sanity \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add sanity \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "sanity": {
      "command": "npx",
      "args": ["-y", "@open-mcp/sanity"],
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

### getpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `nextCursor` (string)
- `limit` (integer)

### createpermission

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `type` (string)
- `name` (string)
- `title` (string)
- `description` (string)
- `config` (object)

### getpermission

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `permissionName` (string)

### updatepermission

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `permissionName` (string)
- `type` (string)
- `name` (string)
- `title` (string)
- `description` (string)
- `config` (object)

### deletepermission

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `permissionName` (string)

### getmypermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `nextCursor` (string)
- `limit` (integer)

### getuserpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `nextCursor` (string)
- `limit` (integer)

### getusers

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `nextCursor` (string)
- `limit` (integer)
- `includeImpliedRoles` (boolean)

### adddefaultroletousers

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceId` (string)

### getuser

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `sanityUserId` (string)
- `includeImpliedRoles` (boolean)

### removeuser

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `sanityUserId` (string)

### addroletouser

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `sanityUserId` (string)
- `roleName` (string)

### removerolefromuser

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `sanityUserId` (string)
- `roleName` (string)

### getuserpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `sanityUserId` (string)

### getroles

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `includeChildren` (boolean)
- `nextCursor` (string)
- `limit` (integer)
- `includeImpliedRoles` (boolean)

### createrole

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `title` (string)
- `name` (string)
- `description` (string)
- `appliesToUsers` (boolean)
- `appliesToRobots` (boolean)
- `permissions` (array)

### getrole

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `roleName` (string)

### updaterole

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `roleName` (string)
- `title` (string)
- `name` (string)
- `description` (string)
- `appliesToUsers` (boolean)
- `appliesToRobots` (boolean)
- `permissions` (array)

### deleterole

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `roleName` (string)

### getrequests

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `includeChildren` (boolean)

### createrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `note` (string)
- `requestUrl` (string)
- `requestedRole` (string)
- `type` (string)

### acceptrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `requestId` (string)
- `roleNames` (array)

### declinerequest

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `requestId` (string)

### getmyrequests

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getinvites

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `status` (array)
- `includeChildren` (boolean)
- `nextCursor` (string)
- `limit` (integer)

### createinvite

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `email` (string)
- `role` (string)

### revokeinvite

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `inviteId` (string)

### getinvitebytoken

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `inviteToken` (string)

### acceptinvite

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `inviteToken` (string)

### getrobots

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `includeChildren` (boolean)
- `nextCursor` (string)
- `limit` (integer)

### createrobot

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `label` (string)
- `memberships` (array)

### getrobot

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `robotId` (string)

### deleterobot

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `robotId` (string)

### checkuserpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `resourceType` (string)
- `resourceId` (string)
- `permissions` (array)
