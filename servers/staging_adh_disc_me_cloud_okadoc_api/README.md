# @open-mcp/staging_adh_disc_me_cloud_okadoc_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "staging_adh_disc_me_cloud_okadoc_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/staging_adh_disc_me_cloud_okadoc_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/staging_adh_disc_me_cloud_okadoc_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add staging_adh_disc_me_cloud_okadoc_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add staging_adh_disc_me_cloud_okadoc_api \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add staging_adh_disc_me_cloud_okadoc_api \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "staging_adh_disc_me_cloud_okadoc_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/staging_adh_disc_me_cloud_okadoc_api"],
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

### listproviders

**Environment variables**

No environment variables required

**Input schema**

- `okadoc-auth-key` (string)

### listproviderservices

**Environment variables**

No environment variables required

**Input schema**

- `doctorID` (string)
- `facilityID` (string)
- `okadoc-auth-key` (string)

### findprovideravailabilitiesstg

**Environment variables**

No environment variables required

**Input schema**

- `doctorID` (string)
- `facilityID` (string)
- `from` (string)
- `to` (string)
- `okadoc-auth-key` (string)

### findpatient

**Environment variables**

No environment variables required

**Input schema**

- `document_type_id` (string)
- `patient_document_id` (string)
- `mobile_number` (string)
- `birthday` (string)
- `okadoc-auth-key` (string)

### bookappointmentstgexistingpatient

**Environment variables**

No environment variables required

**Input schema**

- `okadoc-auth-key` (string)

### cancelappointmentstg

**Environment variables**

No environment variables required

**Input schema**

- `okadoc-auth-key` (string)

### rescheduleappointmentstg

**Environment variables**

No environment variables required

**Input schema**

- `okadoc-auth-key` (string)

### updatepaymentstatusstg

**Environment variables**

No environment variables required

**Input schema**

- `okadoc-auth-key` (string)
