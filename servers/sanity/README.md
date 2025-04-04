# @open-mcp/sanity

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/sanity add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/sanity add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/sanity add-to-client /path/to/client/config.json
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

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### getpermissions

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.")
}
```

### createpermission

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "type": z.enum(["sanity.document.filter","sanity.document.filter.mode","sanity.organization","sanity.organization.legal","sanity.organization.members","sanity.organization.projects","sanity.organization.roles","sanity.organization.sso","sanity.organization.tokens","sanity.project","sanity.project.cors","sanity.project.datasets","sanity.project.graphql","sanity.project.members","sanity.project.roles","sanity.project.tags","sanity.project.tokens","sanity.project.usage","sanity.project.webhooks"]).describe("The resource for the permission."),
  "name": z.string().describe("The name of the permission resource. A unique identifier for a permission."),
  "title": z.string().describe("A human-readable title of the permission resource. This is used for display purposes."),
  "description": z.string().describe("The description of the permission resource."),
  "config": z.record(z.any()).describe("Some permissions allow for additional configuration when used with document permissions. Accepts a groq filter or a dataset name.").optional()
}
```

### getpermission

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "permissionName": z.string().describe("The name of the permission. This is a unique identifier for the permission.")
}
```

### updatepermission

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "permissionName": z.string().describe("The name of the permission. This is a unique identifier for the permission."),
  "type": z.enum(["sanity.document.filter","sanity.document.filter.mode","sanity.organization","sanity.organization.legal","sanity.organization.members","sanity.organization.projects","sanity.organization.roles","sanity.organization.sso","sanity.organization.tokens","sanity.project","sanity.project.cors","sanity.project.datasets","sanity.project.graphql","sanity.project.members","sanity.project.roles","sanity.project.tags","sanity.project.tokens","sanity.project.usage","sanity.project.webhooks"]).describe("The resource for the permission."),
  "name": z.string().describe("The name of the permission resource. A unique identifier for a permission."),
  "title": z.string().describe("A human-readable title of the permission resource. This is used for display purposes."),
  "description": z.string().describe("The description of the permission resource."),
  "config": z.record(z.any()).describe("Some permissions allow for additional configuration when used with document permissions. Accepts a groq filter or a dataset name.").optional()
}
```

### deletepermission

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "permissionName": z.string().describe("The name of the permission. This is a unique identifier for the permission.")
}
```

### getmypermissions

```ts
{
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.")
}
```

### getuserpermissions

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.")
}
```

### getusers

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page."),
  "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.")
}
```

### adddefaultroletousers

```ts
{
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type.")
}
```

### getuser

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID"),
  "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.")
}
```

### removeuser

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID")
}
```

### addroletouser

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID"),
  "roleName": z.string().describe("The role name.")
}
```

### removerolefromuser

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID"),
  "roleName": z.string().describe("The role name.")
}
```

### getuserpermissions

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID")
}
```

### getroles

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to \`organization\` resources.").optional(),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page."),
  "includeImpliedRoles": z.boolean().describe("Whether to include implied roles in the response.")
}
```

### createrole

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "title": z.string().min(1).max(100),
  "name": z.string().regex(new RegExp("^[a-z0-9-_]+$")),
  "description": z.string(),
  "appliesToUsers": z.boolean(),
  "appliesToRobots": z.boolean(),
  "permissions": z.array(z.object({ "name": z.string().describe("The name of the permission.").optional(), "action": z.enum(["create","read","update","manage","history","editHistory"]).optional(), "params": z.record(z.any()).describe("The parameters for the permission. This is a key-value map of the permission's configuration.").optional() }))
}
```

### getrole

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "roleName": z.string().describe("The role name.")
}
```

### updaterole

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "roleName": z.string().describe("The role name."),
  "title": z.string().min(1).max(100),
  "name": z.string().regex(new RegExp("^[a-z0-9-_]+$")),
  "description": z.string(),
  "appliesToUsers": z.boolean(),
  "appliesToRobots": z.boolean(),
  "permissions": z.array(z.object({ "name": z.string().describe("The name of the permission.").optional(), "action": z.enum(["create","read","update","manage","history","editHistory"]).optional(), "params": z.record(z.any()).describe("The parameters for the permission. This is a key-value map of the permission's configuration.").optional() }))
}
```

### deleterole

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "roleName": z.string().describe("The role name.")
}
```

### getrequests

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to \`organization\` resources.").optional()
}
```

### createrequest

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "note": z.string().optional(),
  "requestUrl": z.string().describe("Optional URL to redirect the user to after their request has been accepted. Do not include PII or other confidential information.\n").optional(),
  "requestedRole": z.string().describe("Optional role requested by the user. The approver can assign a different role, but this is just a suggestion. If the role does not exist, the request will still be created and no validation on the role will be done.\n").optional(),
  "type": z.enum(["access","role"]).describe("The type of request.").optional()
}
```

### acceptrequest

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "requestId": z.string().describe("The ID of the request."),
  "roleNames": z.array(z.string()).optional()
}
```

### declinerequest

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "requestId": z.string().describe("The ID of the request.")
}
```

### getmyrequests

```ts

```

### getinvites

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "status": z.array(z.enum(["pending","accepted","revoked"])).describe("Filter invites by status.").optional(),
  "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to \`organization\` resources.").optional(),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.")
}
```

### createinvite

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "email": z.string(),
  "role": z.string()
}
```

### revokeinvite

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "inviteId": z.string().describe("The invite's unique identifier.")
}
```

### getinvitebytoken

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "inviteToken": z.string().describe("The public token for the invite. This token is shared with the invitee.")
}
```

### acceptinvite

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "inviteToken": z.string().describe("The public token for the invite. This token is shared with the invitee.")
}
```

### getrobots

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "includeChildren": z.boolean().describe("Whether to include children resources in the response. Only applies to \`organization\` resources.").optional(),
  "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.")
}
```

### createrobot

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "label": z.string().describe("A human-readable label for the robot."),
  "memberships": z.array(z.object({ "addedAt": z.string().datetime({ offset: true }).optional(), "resourceType": z.string(), "resourceId": z.string(), "roleNames": z.array(z.string()), "lastSeenAt": z.string().datetime({ offset: true }).nullable().optional(), "resourceUserId": z.string().nullable().describe("An alternative ID for the user in the resource. Only present for project memberships. That is, a user can be assigned to multiple projects, and each project will have a different resourceUserId to reference the same user.").optional() }))
}
```

### getrobot

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "robotId": z.string().describe("The robot's unique identifier.")
}
```

### deleterobot

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "robotId": z.string().describe("The robot's unique identifier.")
}
```

### checkuserpermissions

```ts
{
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "permissions": z.array(z.string()).describe("An array of permissions to check")
}
```

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/sanity
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/sanity`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
