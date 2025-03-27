# @open-mcp/codat_io_banking

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "codat_io_banking": {
      "command": "npx",
      "args": ["-y", "@open-mcp/codat_io_banking"],
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

### list_account_balances

### list_accounts

### get_account

### list_transaction_categories

### parameters_companies_companyid_connections_connectionid_data_ban

### get_transaction_category

### parameters_companies_companyid_connections_connectionid_data_ban

### list_transactions

### parameters_companies_companyid_connections_connectionid_data_ban

### get_transaction

### parameters_companies_companyid_connections_connectionid_data_ban

### list_bank_transactions

### parameters_companies_companyid_data_banking_transactions

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/codat_io_banking
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/codat_io_banking`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
