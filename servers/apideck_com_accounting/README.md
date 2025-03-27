# @open-mcp/apideck_com_accounting

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "apideck_com_accounting": {
      "command": "npx",
      "args": ["-y", "@open-mcp/apideck_com_accounting"],
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

### balancesheetone

### billsall

### billsadd

### billsdelete

### billsone

### billsupdate

### companyinfoone

### creditnotesall

### creditnotesadd

### creditnotesdelete

### creditnotesone

### creditnotesupdate

### customersall

### customersadd

### customersdelete

### customersone

### customersupdate

### invoiceitemsall

### invoiceitemsadd

### invoiceitemsdelete

### invoiceitemsone

### invoiceitemsupdate

### invoicesall

### invoicesadd

### invoicesdelete

### invoicesone

### invoicesupdate

### journalentriesall

### journalentriesadd

### journalentriesdelete

### journalentriesone

### journalentriesupdate

### ledgeraccountsall

### ledgeraccountsadd

### ledgeraccountsdelete

### ledgeraccountsone

### ledgeraccountsupdate

### paymentsall

### paymentsadd

### paymentsdelete

### paymentsone

### paymentsupdate

### profitandlossone

### suppliersall

### suppliersadd

### suppliersdelete

### suppliersone

### suppliersupdate

### taxratesall

### taxratesadd

### taxratesdelete

### taxratesone

### taxratesupdate

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/apideck_com_accounting
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/apideck_com_accounting`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
