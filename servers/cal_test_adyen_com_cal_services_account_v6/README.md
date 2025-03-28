# @open-mcp/cal_test_adyen_com_cal_services_account_v6

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "cal_test_adyen_com_cal_services_account_v6": {
      "command": "npx",
      "args": ["-y", "@open-mcp/cal_test_adyen_com_cal_services_account_v6"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/cal_test_adyen_com_cal_services_account_v6
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/cal_test_adyen_com_cal_services_account_v6`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
