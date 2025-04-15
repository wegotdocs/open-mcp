# @open-mcp/epa-lew

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add epa-lew \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add epa-lew \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add epa-lew \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "epa-lew": {
      "command": "npx",
      "args": ["-y", "@open-mcp/epa-lew"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/epa-lew
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/epa-lew`
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

### calculaterfactorget

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().describe("Date of initial earth disturbance provided in ISO 8601 format"),
  "end_date": z.string().describe("Date of final stabilization provided in ISO 8601 format"),
  "location": z.string().describe("Location to be examined for LEW eligibility provided as a GeoJSON point geometry"),
  "X-Api-Key": z.string().describe("API key used to access EPA web service resources. The below default value key is used for testing purposes only. Web service consumers should <a target=\"_blank\" href=\"..\\api_key_signup.html\">obtain their own API key</a>")
}
```

### healthcheck

**Environment variables**



**Input schema**

```ts
{
  "X-Api-Key": z.string().describe("API key used to access EPA web service resources. The below default value key is used for testing purposes only. Web service consumers should <a target=\"_blank\" href=\"..\\api_key_signup.html\">obtain their own API key</a>")
}
```
