# @open-mcp/api_val_town

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_val_town \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_val_town \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_val_town \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_val_town": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_val_town"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_val_town
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_val_town`
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

### searchvals

**Environment variables**



**Input schema**

```ts
{
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response"),
  "query": z.string().min(1).max(256).describe("Search query")
}
```

### aliasusername

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("Username of the user who you are looking for")
}
```

### meget

**Environment variables**



**Input schema**

```ts
{}
```

### blobslist

**Environment variables**



**Input schema**

```ts
{
  "prefix": z.string().describe("If specified, only include blobs that start with this string").optional()
}
```

### blobsget

**Environment variables**



**Input schema**

```ts
{
  "key": z.string().min(1).max(512).describe("Key that uniquely identifies this blob")
}
```

### blobsstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "key": z.string().min(1).max(512).describe("Key that uniquely identifies this blob")
}
```

### blobsdelete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "key": z.string().min(1).max(512).describe("Key that uniquely identifies this blob")
}
```

### usersget

**Environment variables**



**Input schema**

```ts
{
  "user_id": z.string().uuid().describe("User Id")
}
```

### sqliteexecute

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "statement": z.union([z.string().describe("Simple SQL statement to run in SQLite"), z.object({ "sql": z.string().describe("SQL statement, with ? placeholders for arguments"), "args": z.union([z.array(z.any().describe("A value to be used as a parameter")), z.record(z.any().describe("A value to be used as a parameter"))]).describe("List of arguments to be used in the given statement") }).describe("A parameterized SQL query. See https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference")])
}
```

### sqlitebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "statements": z.array(z.union([z.string().describe("Simple SQL statement to run in SQLite"), z.object({ "sql": z.string().describe("SQL statement, with ? placeholders for arguments"), "args": z.union([z.array(z.any().describe("A value to be used as a parameter")), z.record(z.any().describe("A value to be used as a parameter"))]).describe("List of arguments to be used in the given statement") }).describe("A parameterized SQL query. See https://docs.turso.tech/sdk/ts/reference#batch-transactions for reference")])),
  "mode": z.enum(["write","read","deferred"]).optional()
}
```

### runget

**Environment variables**



**Input schema**

```ts
{
  "valname": z.string().regex(new RegExp("^[^.]+.[^.]+$")).describe("Name of the val, in concatenated style, like username.valname"),
  "args": z.string().describe("An argument that will be passed to the function as a JavaScript value").optional()
}
```

### runpost

**Environment variables**



**Input schema**

```ts
{
  "valname": z.string().regex(new RegExp("^[^.]+.[^.]+$")).describe("Name of the val, in concatenated style, like username.valname"),
  "args": z.array(z.any()).optional()
}
```

### emailssend

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject": z.string().describe("The subject line of the email").optional(),
  "from": z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]).optional(),
  "headers": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of headers to include the email that you send").optional(),
  "to": z.union([z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]), z.array(z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]))]).describe("A single email or list of emails for one of the address fields").optional(),
  "cc": z.union([z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]), z.array(z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]))]).describe("A single email or list of emails for one of the address fields").optional(),
  "bcc": z.union([z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]), z.array(z.union([z.string(), z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name")]))]).describe("A single email or list of emails for one of the address fields").optional(),
  "text": z.string().describe("Text content of the email, for email clients that may not support HTML").optional(),
  "html": z.string().describe("HTML content of the email. Can be specified alongside text").optional(),
  "attachments": z.array(z.object({ "content": z.string(), "filename": z.string(), "type": z.string().optional(), "disposition": z.string().optional(), "contentId": z.string().optional() })).describe("A list of attachments to add to the email").optional(),
  "replyToList": z.union([z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name"), z.array(z.object({ "name": z.string().optional(), "email": z.string() }).describe("An email address and name"))]).describe("A reply-to list of email addresses").optional()
}
```

### valsget2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val")
}
```

### projectsdelete2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val")
}
```

### valslist2

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}
```

### valscreate2

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-zA-Z][a-zA-Z0-9\\-_]*$")).min(1).max(48),
  "description": z.string().max(64).optional(),
  "privacy": z.enum(["public","unlisted","private"])
}
```

### branchesget2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("Id of a branch")
}
```

### branchesdelete2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("Id of a branch")
}
```

### brancheslist2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}
```

### branchescreate2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-_.]+$")).min(1).max(48),
  "branchId": z.string().uuid().describe("The branch ID to fork from. If this is not specified, the new branch will be forked from main.").optional()
}
```

### valfilesget2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "version": z.number().int().gte(0).describe("Specific branch version to query").optional(),
  "branch_id": z.string().uuid().describe("Id to query").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "recursive": z.boolean().describe("Whether to recursively act on all files in the project"),
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}
```

### filescreate2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("The specified branch of the resource. Defaults to main if not provided.").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory.")
}
```

### filesdelete2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("The specified branch of the resource. Defaults to main if not provided.").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "recursive": z.boolean().describe("Whether to recursively act on all files in the project")
}
```

### filecontentupdate2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "branch_id": z.string().uuid().describe("The specified branch of the resource. Defaults to main if not provided.").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "content": z.string().min(0).max(80000).describe("File and val content. An empty string will create an empty file. When creating a directory, the content should be null or undefined.").optional(),
  "type": z.enum(["file","interval","http","email","script"]).optional(),
  "parent_path": z.union([z.string().describe("Path to the directory you'd like to move this file to (e.g. 'folder1/folder2')"), z.null()]).optional(),
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-_.]+$")).min(1).max(48).optional()
}
```

### filescontentget2

**Environment variables**



**Input schema**

```ts
{
  "val_id": z.string().uuid().describe("Id of a val"),
  "version": z.number().int().gte(0).describe("Specific branch version to query").optional(),
  "branch_id": z.string().uuid().describe("Id to query").optional(),
  "path": z.string().describe("Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string to represent the root directory."),
  "If-Match": z.string().optional(),
  "If-Unmodified-Since": z.string().optional(),
  "If-None-Match": z.string().optional(),
  "If-Modified-Since": z.string().optional(),
  "Cache-Control": z.string().optional()
}
```

### aliasval2

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("Username of the user whose val you are looking for"),
  "val_name": z.string().describe("Name of the val you’re looking for")
}
```

### mevals2

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}
```
