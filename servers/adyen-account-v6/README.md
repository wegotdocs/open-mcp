# @open-mcp/adyen-account-v6

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/adyen-account-v6 add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/adyen-account-v6 add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/adyen-account-v6 add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/adyen-account-v6 add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "adyen-account-v6": {
      "command": "npx",
      "args": ["-y", "@open-mcp/adyen-account-v6"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","X_API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

## Tools

### post_checkaccountholder

### post_closeaccount

### post_closeaccountholder

### post_closestores

### post_createaccount

### post_createaccountholder

### post_deletebankaccounts

### post_deletelegalarrangements

### post_deletepayoutmethods

### post_deleteshareholders

### post_deletesignatories

### post_getaccountholder

### post_gettaxform

### post_getuploadeddocuments

### post_suspendaccountholder

### post_unsuspendaccountholder

### post_updateaccount

### post_updateaccountholder

### post_updateaccountholderstate

### post_uploaddocument

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/adyen-account-v6
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/adyen-account-v6`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
