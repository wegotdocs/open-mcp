# @open-mcp/totoy-ai

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add totoy-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add totoy-ai \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add totoy-ai \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "totoy-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/totoy-ai"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/totoy-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/totoy-ai`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### createexplanation

**Environment variables**

- `API_KEY`

**Input schema**

- `output_language` (string)
- `language_level` (string)
- `source_id` (string)
- `messages` (array)
- `markdown_response` (boolean)

### createknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `instructions` (string)
- `project_id` (string)

### listknowledgebases

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)

### modifyknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)
- `name` (string)
- `instructions` (string)
- `project_id` (string)

### deleteknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)

### chatwithknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)
- `output_language` (string)
- `language_level` (string)
- `messages` (array)
- `markdown_response` (boolean)

### addknowledgebasesources

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)

### listknowledgebasesources

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)

### getknowledgebasesource

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)
- `source_id` (string)

### deleteknowledgebasesource

**Environment variables**

- `API_KEY`

**Input schema**

- `knowledge_base_id` (string)
- `source_id` (string)

### createsource

**Environment variables**

- `API_KEY`

**Input schema**

- `text_content` (string)
- `title` (string)
- `backlink` (string)
- `valid_from` (string)
- `valid_until` (string)
- `project_id` (string)
- `custom_metadata` (object)

### listsources

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getsource

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)

### modifysource

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)
- `text_content` (string)
- `title` (string)
- `backlink` (string)
- `valid_from` (string)
- `valid_until` (string)
- `project_id` (string)
- `custom_metadata` (object)

### deletesource

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)

### getsourcecontent

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)

### createproject

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### listprojects

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getproject

**Environment variables**

- `API_KEY`

**Input schema**

- `project_id` (string)

### modifyproject

**Environment variables**

- `API_KEY`

**Input schema**

- `project_id` (string)
- `name` (string)

### deleteproject

**Environment variables**

- `API_KEY`

**Input schema**

- `project_id` (string)

### getorganization

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createextraction

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (string)
- `document` (string)
- `expand_abbreviations` (boolean)

### createclassification

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (string)
- `document` (string)
