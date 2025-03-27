# @open-mcp/interactivebrokers_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "interactivebrokers_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/interactivebrokers_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### get_accounts

### parameters_accounts_account_order_impact

### post_accounts_account_order_impact

### get_accounts_account_orders

### parameters_accounts_account_orders

### post_accounts_account_orders

### delete_accounts_account_orders_customerorderid_

### get_accounts_account_orders_customerorderid_

### parameters_accounts_account_orders_customerorderid_

### put_accounts_account_orders_customerorderid_

### get_accounts_account_positions

### get_accounts_account_summary

### get_accounts_account_trades

### parameters_accounts_account_trades

### get_marketdata_exchange_components

### get_marketdata_snapshot

### post_oauth_access_token

### post_oauth_live_session_token

### post_oauth_request_token

### get_secdef

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/interactivebrokers_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/interactivebrokers_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
