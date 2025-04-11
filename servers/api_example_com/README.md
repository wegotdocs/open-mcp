# @open-mcp/api_example_com

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/api_example_com add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/api_example_com add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/api_example_com add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_example_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_example_com`
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

### _list_people_people_get

**Environment variables**



**Input schema**

```ts
{}
```

### _create_person_people_post

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().min(1).describe("Full name of this person"),
  "address": z.string(),
  "birth": z.string().date().describe("Date of birth, in format YYYY-MM-DD, or Unix timestamp").optional()
}
```

### _get_person_people_person_id_get

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.string()
}
```

### _delete_person_people_person_id_delete

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.string()
}
```

### _update_person_people_person_id_patch

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.string(),
  "name": z.string().min(1).describe("Full name of this person").optional(),
  "address": z.string().optional(),
  "birth": z.string().date().describe("Date of birth, in format YYYY-MM-DD, or Unix timestamp").optional()
}
```
