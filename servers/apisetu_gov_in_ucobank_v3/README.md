# @open-mcp/apisetu_gov_in_ucobank_v3

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/apisetu_gov_in_ucobank_v3 add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/apisetu_gov_in_ucobank_v3 add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/apisetu_gov_in_ucobank_v3 add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "apisetu_gov_in_ucobank_v3": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apisetu_gov_in_ucobank_v3"],
      "env": {"X_APISETU_APIKEY":"...","X_APISETU_CLIENTID":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `X_APISETU_APIKEY`
- `X_APISETU_CLIENTID`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apisetu_gov_in_ucobank_v3
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apisetu_gov_in_ucobank_v3`
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

### tdcer

**Environment variables**

- `X_APISETU_APIKEY`
- `X_APISETU_CLIENTID`

**Input schema**

```ts
{
  "certificateParameters": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "consentArtifact": z.any().optional(),
  "format": z.literal("pdf").describe("The format of the certificate in response."),
  "txnId": z.string().uuid().describe("A unique transaction id for this request in UUID format. It is used for tracking the request.")
}
```
