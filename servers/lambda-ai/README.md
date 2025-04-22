# @open-mcp/lambda-ai

## Installing

First set the environment variables as shell variables:

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

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/lambda-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/lambda-ai`
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

### listinstances

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The unique identifier (ID) of the instance")
}
```

### postinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().describe("The unique identifier (ID) of the instance"),
  "name": z.string().min(0).max(64).describe("The new, user-provided name for the instance.").optional()
}
```

### listinstancetypes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### launchinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "region_name": z.enum(["europe-central-1","asia-south-1","australia-east-1","me-west-1","asia-northeast-1","asia-northeast-2","us-east-1","us-west-2","us-west-1","us-south-1","us-west-3","us-midwest-1","us-east-2","us-south-2","us-south-3","us-east-3","us-midwest-2","test-east-1","test-west-1"]).describe("The region into which you want to launch the instance."),
  "instance_type_name": z.string().describe("The type of instance you want to launch. To retrieve a list of available instance types, see\n[List available instance types](#get-/api/v1/instance-types)."),
  "ssh_key_names": z.array(z.string()).describe("The names of the SSH keys you want to use to provide access to the instance.\nCurrently, exactly one SSH key must be specified."),
  "file_system_names": z.array(z.string()).describe("The names of the filesystems you want to attach to the instance.\nCurrently, you can attach only one filesystem during instance creation.\nBy default, no filesystems are attached.").optional(),
  "name": z.string().min(0).max(64).describe("The name you want to assign to your instance. Must be 64 characters or fewer.").optional(),
  "image": z.union([z.object({ "id": z.string() }).describe("Specifies the image to use by its unique identifier."), z.object({ "family": z.string().describe("The family name of the image.") }).describe("Specifies the image to use by its family name.")]).describe("The machine image you want to use. Defaults to the latest Lambda Stack image.").optional(),
  "user_data": z.string().describe("An instance configuration string specified in a valid\n[cloud-init user-data](https://cloudinit.readthedocs.io/en/latest/explanation/format.html)\nformat. You can use this field to configure your instance on launch. The\nuser data string must be plain text and cannot exceed 1MB in size.").optional()
}
```

### restartinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "instance_ids": z.array(z.string()).describe("The unique identifiers (IDs) of the instances to restart.")
}
```

### terminateinstance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "instance_ids": z.array(z.string()).describe("The unique identifiers (IDs) of the instances to terminate.")
}
```

### listsshkeys

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### addsshkey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string().min(1).max(64).describe("The name of the SSH key."),
  "public_key": z.string().min(1).max(4096).describe("The public key for the SSH key.").optional()
}
```

### deletesshkey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### listfilesystems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### createfilesystem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-zA-Z]+[0-9a-zA-Z-]*$")).min(1).max(60).describe("The name of the filesystem."),
  "region": z.enum(["europe-central-1","asia-south-1","australia-east-1","me-west-1","asia-northeast-1","asia-northeast-2","us-east-1","us-west-2","us-west-1","us-south-1","us-west-3","us-midwest-1","us-east-2","us-south-2","us-south-3","us-east-3","us-midwest-2","test-east-1","test-west-1"]).describe("The region in which you want to create the filesystem.")
}
```

### filesystemdelete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### listimages

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### firewallruleslist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### firewallrulesset

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "data": z.array(z.object({ "protocol": z.enum(["tcp","udp","icmp","all"]).describe("The protocol to which the rule applies."), "port_range": z.array(z.number().int().gte(1).lte(65535)).min(2).max(2).describe("An inclusive range of network ports specified as \`[min, max]\`.\nNot allowed for the \`icmp\` protocol but required for the others.\n\nTo specify a single port, list it twice (for example, \`[22,22]\`).").optional(), "source_network": z.string().describe("The set of source IPv4 addresses from which you want to allow inbound\ntraffic. These addresses must be specified in CIDR notation. You can\nspecify individual public IPv4 CIDR blocks such as \`1.2.3.4\` or\n\`1.2.3.4/32\`, or you can specify \`0.0.0.0/0\` to allow access from any\naddress.\n\nThis value is a string consisting of a public IPv4 address optionally\nfollowed by a slash (/) and an integer mask (the network prefix).\nIf no mask is provided, the API assumes \`/32\` by default."), "description": z.string().min(0).max(128).describe("A human-readable description of the rule.") })).describe("The list of inbound firewall rules.")
}
```
