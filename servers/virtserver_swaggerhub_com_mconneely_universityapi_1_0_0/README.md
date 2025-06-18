# @open-mcp/virtserver_swaggerhub_com_mconneely_universityapi_1_0_0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "virtserver_swaggerhub_com_mconneely_universityapi_1_0_0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/virtserver_swaggerhub_com_mconneely_universityapi_1_0_0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/virtserver_swaggerhub_com_mconneely_universityapi_1_0_0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add virtserver_swaggerhub_com_mconneely_universityapi_1_0_0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add virtserver_swaggerhub_com_mconneely_universityapi_1_0_0 \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add virtserver_swaggerhub_com_mconneely_universityapi_1_0_0 \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "virtserver_swaggerhub_com_mconneely_universityapi_1_0_0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/virtserver_swaggerhub_com_mconneely_universityapi_1_0_0"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getallcourses

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createcourse

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `description` (string)
- `credits` (integer)

### getcoursebyid

**Environment variables**

No environment variables required

**Input schema**

- `courseId` (integer)

### updatecourse

**Environment variables**

No environment variables required

**Input schema**

- `courseId` (integer)
- `name` (string)
- `description` (string)
- `credits` (integer)

### deletecourse

**Environment variables**

No environment variables required

**Input schema**

- `courseId` (integer)

### gettimetable

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gettimetablebyid

**Environment variables**

No environment variables required

**Input schema**

- `timetableId` (integer)

### createstudent

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `email` (string)
- `password` (string)

### getstudentbyid

**Environment variables**

No environment variables required

**Input schema**

- `studentId` (integer)
