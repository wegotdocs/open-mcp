# @open-mcp/backstage-catalog

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add backstage-catalog \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add backstage-catalog \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add backstage-catalog \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "backstage-catalog": {
      "command": "npx",
      "args": ["-y", "@open-mcp/backstage-catalog"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/backstage-catalog
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/backstage-catalog`
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

### refreshentity

**Environment variables**

- `API_KEY`

**Input schema**

- `authorizationToken` (string)
- `entityRef` (string)

### getentities

**Environment variables**

- `API_KEY`

**Input schema**

- `fields` (array)
- `limit` (integer)
- `filter` (array)
- `offset` (integer)
- `after` (string)
- `order` (array)

### getentitybyuid

**Environment variables**

- `API_KEY`

**Input schema**

- `uid` (string)

### deleteentitybyuid

**Environment variables**

- `API_KEY`

**Input schema**

- `uid` (string)

### getentitybyname

**Environment variables**

- `API_KEY`

**Input schema**

- `kind` (string)
- `namespace` (string)
- `name` (string)

### getentityancestrybyname

**Environment variables**

- `API_KEY`

**Input schema**

- `kind` (string)
- `namespace` (string)
- `name` (string)

### getentitiesbyrefs

**Environment variables**

- `API_KEY`

**Input schema**

- `filter` (array)
- `entityRefs` (array)
- `fields` (array)

### getentitiesbyquery

**Environment variables**

- `API_KEY`

**Input schema**

- `fields` (array)
- `limit` (integer)
- `offset` (integer)
- `orderField` (array)
- `cursor` (string)
- `filter` (array)
- `fullTextFilterTerm` (string)
- `fullTextFilterFields` (array)

### getentityfacets

**Environment variables**

- `API_KEY`

**Input schema**

- `facet` (array)
- `filter` (array)

### createlocation

**Environment variables**

- `API_KEY`

**Input schema**

- `dryRun` (string)
- `target` (string)
- `type` (string)

### getlocations

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getlocation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### deletelocation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### getlocationbyentity

**Environment variables**

- `API_KEY`

**Input schema**

- `kind` (string)
- `namespace` (string)
- `name` (string)

### analyzelocation

**Environment variables**

- `API_KEY`

**Input schema**

- `catalogFileName` (string)
- `location` (object)

### validateentity

**Environment variables**

- `API_KEY`

**Input schema**

- `location` (string)
- `entity` (object)
