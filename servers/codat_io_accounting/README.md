# @open-mcp/codat_io_accounting

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "codat_io_accounting": {
      "command": "npx",
      "args": ["-y", "@open-mcp/codat_io_accounting"],
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

### list_account_transactions

### get_account_transaction

### list_bank_accounts

### parameters_companies_companyid_connections_connectionid_data_ban

### get_bank_account

### parameters_companies_companyid_connections_connectionid_data_ban

### list_bank_account_transactions

### get_bill_attachments

### parameters_companies_companyid_connections_connectionid_data_bil

### get_bill_attachment

### parameters_companies_companyid_connections_connectionid_data_bil

### download_bill_attachment

### parameters_companies_companyid_connections_connectionid_data_bil

### get_customer_attachments

### parameters_companies_companyid_connections_connectionid_data_cus

### get_customer_attachment

### parameters_companies_companyid_connections_connectionid_data_cus

### download_customer_attachment

### parameters_companies_companyid_connections_connectionid_data_cus

### get_direct_costs

### parameters_companies_companyid_connections_connectionid_data_dir

### get_direct_cost

### parameters_companies_companyid_connections_connectionid_data_dir

### list_direct_cost_attachments

### parameters_companies_companyid_connections_connectionid_data_dir

### get_direct_cost_attachment

### parameters_companies_companyid_connections_connectionid_data_dir

### download_direct_cost_attachment

### parameters_companies_companyid_connections_connectionid_data_dir

### get_direct_incomes

### parameters_companies_companyid_connections_connectionid_data_dir

### get_direct_income

### parameters_companies_companyid_connections_connectionid_data_dir

### list_direct_income_attachments

### parameters_companies_companyid_connections_connectionid_data_dir

### get_direct_income_attachment

### parameters_companies_companyid_connections_connectionid_data_dir

### download_direct_income_attachment

### parameters_companies_companyid_connections_connectionid_data_dir

### get_invoice_attachments

### parameters_companies_companyid_connections_connectionid_data_inv

### get_invoice_attachment

### parameters_companies_companyid_connections_connectionid_data_inv

### download_invoice_attachment

### parameters_companies_companyid_connections_connectionid_data_inv

### list_supplier_attachments

### parameters_companies_companyid_connections_connectionid_data_sup

### get_supplier_attachment

### parameters_companies_companyid_connections_connectionid_data_sup

### download_supplier_attachment

### parameters_companies_companyid_connections_connectionid_data_sup

### list_transfers

### parameters_companies_companyid_connections_connectionid_data_tra

### get_transfer

### parameters_companies_companyid_connections_connectionid_data_tra

### get_create_update_bankaccounts_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_bank_account_model

### get_create_update_billcreditnotes_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_billpayments_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_bills_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_chartofaccounts_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_creditnotes_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_customers_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_directcosts_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_directincomes_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_invoices_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_items_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_journalentries_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_journals_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_payments_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_purchaseorders_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_update_suppliers_model

### parameters_companies_companyid_connections_connectionid_options_

### get_create_transfers_model

### parameters_companies_companyid_connections_connectionid_options_

### parameters_companies_companyid_connections_connectionid_push_acc

### create_account

### parameters_companies_companyid_connections_connectionid_push_ban

### create_bank_account

### create_bank_transactions

### parameters_companies_companyid_connections_connectionid_push_ban

### update_bank_account

### parameters_companies_companyid_connections_connectionid_push_bil

### create_bill_credit_note

### parameters_companies_companyid_connections_connectionid_push_bil

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/codat_io_accounting
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/codat_io_accounting`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
