# @open-mcp/codat_io_commerce

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "codat_io_commerce": {
      "command": "npx",
      "args": ["-y", "@open-mcp/codat_io_commerce"],
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

### list_customers

### parameters_companies_companyid_connections_connectionid_data_com

### list_disputes

### parameters_companies_companyid_connections_connectionid_data_com

### get_company_info

### parameters_companies_companyid_connections_connectionid_data_com

### list_locations

### parameters_companies_companyid_connections_connectionid_data_com

### list_orders

### parameters_companies_companyid_connections_connectionid_data_com

### list_payment_methods

### parameters_companies_companyid_connections_connectionid_data_com

### list_payments

### parameters_companies_companyid_connections_connectionid_data_com

### list_product_categories

### parameters_companies_companyid_connections_connectionid_data_com

### list_products

### parameters_companies_companyid_connections_connectionid_data_com

### get_tax_components

### parameters_companies_companyid_connections_connectionid_data_com

### list_transactions

### parameters_companies_companyid_connections_connectionid_data_com

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/codat_io_commerce
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/codat_io_commerce`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
