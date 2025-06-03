# @open-mcp/_validator

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_validator": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_validator@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_validator@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add _validator \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _validator \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add _validator \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_validator": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_validator"],
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

### validatebyurl

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)
- `resolve` (boolean)
- `resolveFully` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)

### validatebycontent

**Environment variables**

No environment variables required

**Input schema**

- `resolve` (boolean)
- `resolveFully` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)

### reviewbyurl

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)
- `resolve` (boolean)
- `resolveFully` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)

### reviewbycontent

**Environment variables**

No environment variables required

**Input schema**

- `resolve` (boolean)
- `resolveFully` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)

### parsebyurl

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)
- `resolve` (boolean)
- `resolveFully` (boolean)
- `flatten` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)
- `returnFullParseResult` (boolean)

### parsebycontent

**Environment variables**

No environment variables required

**Input schema**

- `resolve` (boolean)
- `resolveFully` (boolean)
- `flatten` (boolean)
- `validateInternalRefs` (boolean)
- `validateExternalRefs` (boolean)
- `resolveRequestBody` (boolean)
- `resolveCombinators` (boolean)
- `allowEmptyStrings` (boolean)
- `legacyYamlDeserialization` (boolean)
- `inferSchemaType` (boolean)
- `jsonSchemaValidation` (boolean)
- `legacyJsonSchemaValidation` (boolean)
- `returnFullParseResult` (boolean)
