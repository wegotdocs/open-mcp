# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### auth_token_authentication_token_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)

### list_accounting_entries_accountingentries_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `reconciled` (boolean)
- `accountingCode` (string)
- `startDate` (string)
- `endDate` (string)
- `startUpdatedAt` (string)
- `endUpdatedAt` (string)
- `limit` (integer)
- `nextPageToken` (string)

### create_accounting_entry_accountingentries_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `accountingCode` (string)
- `counterpartAccountingCode` (string)
- `accountingName` (string)
- `assetAmount` (number)
- `accountingAssetAmount` (number)
- `balance` (number)
- `liabilityAmount` (number)
- `accountingLiabilityAmount` (number)
- `currency` (string)
- `accountingCurrency` (string)
- `contactCustomId` (string)
- `exchangeRate` (number)
- `additionalInfo` (object)
- `description` (string)
- `documentId` (string)
- `transactionsIds` (array)
- `paymentId` (string)
- `date` (string)
- `attributes` (array)
- `customId` (string)
- `type` (string)
- `accountingEntryCode` (string)
- `accountingEntryCodeId` (string)

### delete_accounting_entries_bulk_accountingentries_companyid_delet

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_accounting_entries_bulk_accountingentries_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_accounting_entry_accountingentries_companyid_customid_g

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_accounting_entry_accountingentries_companyid_customid_del

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_accounting_entry_accountingentries_companyid_customid_pat

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `accountingCode` (string)
- `counterpartAccountingCode` (string)
- `accountingName` (string)
- `assetAmount` (number)
- `accountingAssetAmount` (number)
- `balance` (number)
- `liabilityAmount` (number)
- `accountingLiabilityAmount` (number)
- `currency` (string)
- `accountingCurrency` (string)
- `contactCustomId` (string)
- `exchangeRate` (number)
- `additionalInfo` (object)
- `description` (string)
- `documentId` (string)
- `transactionsIds` (array)
- `paymentId` (string)
- `date` (string)
- `attributes` (array)

### create_accounting_entries_bulk_accountingentries_companyid_bulk_

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### delete_accounting_entries_bulk_accountingentries_accountingentry

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_accountings_accounts_accountingaccounts_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `limit` (integer)
- `nextPageToken` (string)

### create_accountings_account_accountingaccounts_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `active` (boolean)
- `type` (string)
- `accountingName` (string)
- `collective` (boolean)
- `additionalInfo` (object)
- `attributes` (array)
- `accountingCode` (string)

### delete_accountings_accounts_bulk_accountingaccounts_companyid_de

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_accountings_accounts_bulk_accountingaccounts_companyid_pa

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_accountings_account_accountingaccounts_companyid_accoun

**Environment variables**

- `API_KEY`

**Input schema**

- `accountingCode` (string)
- `companyId` (string)

### delete_accountings_account_accountingaccounts_companyid_accounti

**Environment variables**

- `API_KEY`

**Input schema**

- `accountingCode` (string)
- `companyId` (string)

### update_accountings_account_accountingaccounts_companyid_accounti

**Environment variables**

- `API_KEY`

**Input schema**

- `accountingCode` (string)
- `companyId` (string)
- `active` (boolean)
- `type` (string)
- `accountingName` (string)
- `collective` (boolean)
- `additionalInfo` (object)
- `attributes` (array)

### create_accountings_accounts_bulk_accountingaccounts_companyid_bu

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_attributes_attributes_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### create_attribute_attributes_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `customId` (string)
- `source` (string)
- `active` (boolean)
- `name` (string)
- `type` (string)
- `required` (boolean)
- `values` (array)

### delete_attributes_bulk_attributes_companyid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_attributes_bulk_attributes_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_attribute_attributes_companyid_customid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_attribute_attributes_companyid_customid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_attribute_attributes_companyid_customid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `name` (string)
- `active` (boolean)
- `values` (array)

### create_attributes_bulk_attributes_companyid_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### add_attribute_values_attributes_companyid_customid_values_bulk_p

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `data` (array)

### remove_attribute_values_attributes_companyid_customid_values_del

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `data` (array)

### list_banks_banks_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### retrieve_bank_banks_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### list_balances_balances_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `productId` (string)
- `startDate` (string)
- `endDate` (string)
- `limit` (integer)
- `nextPageToken` (string)

### retrieve_balance_balances_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### list_companies_companies_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### retrieve_company_companies_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### list_company_users_companies_companyid_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### list_categories_categories_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### get_category_categories_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### list_contacts_contacts_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `limit` (integer)
- `nextPageToken` (string)

### create_contact_contacts_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `tradeName` (string)
- `legalName` (string)
- `taxId` (string)
- `contact` (string)
- `address` (string)
- `contactType` (string)
- `type` (string)
- `accounts` (array)
- `paymentsAccounts` (array)
- `additionalInfo` (object)
- `accountingCode` (string)
- `paymentMethod` (string)
- `paymentTerms` (integer)
- `attributes` (array)
- `customId` (string)

### delete_contacts_bulk_contacts_companyid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_contacts_bulk_contacts_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_contact_contacts_companyid_customid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_contact_contacts_companyid_customid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_contact_contacts_companyid_customid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `tradeName` (string)
- `legalName` (string)
- `taxId` (string)
- `contact` (string)
- `address` (string)
- `contactType` (string)
- `type` (string)
- `accounts` (array)
- `paymentsAccounts` (array)
- `additionalInfo` (object)
- `accountingCode` (string)
- `paymentMethod` (string)
- `paymentTerms` (integer)
- `attributes` (array)

### create_contacts_bulk_contacts_companyid_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_forecasts_forecasts_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `scenarioId` (string)
- `sync` (boolean)
- `operations` (boolean)
- `startDate` (string)
- `endDate` (string)
- `limit` (integer)
- `nextPageToken` (string)

### update_forecasts_bulk_forecasts_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_forecast_forecasts_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### update_forecast_forecasts_companyid_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)
- `additionalInfo` (object)
- `sync` (boolean)

### list_foreign_exchange_rates_foreignexchangerates_get

**Environment variables**

- `API_KEY`

**Input schema**

- `baseCurrency` (string)
- `startDate` (string)
- `endDate` (string)
- `limit` (integer)
- `nextPageToken` (string)

### retrieve_foreign_exchange_rate_foreignexchangerates_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### create_log_logs_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `erp` (string)
- `erpVersion` (string)
- `connectorVersion` (string)
- `level` (string)
- `code` (string)
- `message` (string)

### create_logs_bulk_logs_companyid_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_operations_operations_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `status` (string)
- `sync` (boolean)
- `startIssuanceDate` (string)
- `endIssuanceDate` (string)
- `limit` (integer)
- `nextPageToken` (string)

### create_operation_operations_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `status` (string)
- `paymentDate` (string)
- `chargeAccount` (string)
- `contactAccount` (string)
- `issuanceDate` (string)
- `dueDate` (string)
- `accountingCode` (string)
- `accountingName` (string)
- `operationsCustomIds` (array)
- `concept` (string)
- `amount` (number)
- `accountingAmount` (number)
- `currency` (string)
- `accountingCurrency` (string)
- `exchangeRate` (number)
- `paymentMethod` (string)
- `contact` (object)
- `additionalInfo` (object)
- `invoiceGroupDocumentId` (string)
- `sync` (boolean)
- `attributes` (array)
- `customId` (string)
- `pendingAmount` (number)
- `pendingAccountingAmount` (number)
- `documentId` (string)
- `documentType` (string)

### delete_contacts_bulk_operations_companyid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_operations_bulk_operations_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### read_operation_operations_companyid_customid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_contact_operations_companyid_customid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_operation_operations_companyid_customid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `status` (string)
- `paymentDate` (string)
- `chargeAccount` (string)
- `contactAccount` (string)
- `issuanceDate` (string)
- `dueDate` (string)
- `accountingCode` (string)
- `accountingName` (string)
- `operationsCustomIds` (array)
- `concept` (string)
- `amount` (number)
- `accountingAmount` (number)
- `currency` (string)
- `accountingCurrency` (string)
- `exchangeRate` (number)
- `paymentMethod` (string)
- `contact` (object)
- `additionalInfo` (object)
- `invoiceGroupDocumentId` (string)
- `sync` (boolean)
- `attributes` (array)

### create_operations_bulk_operations_companyid_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### add_attribute_values_operations_companyid_attributes_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### delete_contacts_bulk_operations_companyid_attributes_bulk_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_payments_payments_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `productId` (string)
- `sync` (boolean)
- `registered` (boolean)
- `startDate` (string)
- `endDate` (string)
- `startUpdatedAt` (string)
- `endUpdatedAt` (string)
- `internalAttributes` (boolean)
- `limit` (integer)
- `nextPageToken` (string)

### create_payment_payments_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `method` (string)
- `transactionId` (string)
- `operations` (array)
- `productId` (string)
- `contactCustomId` (string)
- `date` (string)
- `concept` (string)
- `amount` (number)
- `accountingAmount` (number)
- `currency` (string)
- `accountingCurrency` (string)
- `exchangeRate` (number)
- `additionalInfo` (object)
- `attributes` (array)
- `customId` (string)

### delete_payments_bulk_payments_companyid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_payments_bulk_payments_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_payment_payments_companyid_customid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_payment_payments_companyid_customid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_payment_payments_companyid_customid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `sync` (boolean)
- `additionalInfo` (object)
- `error` (string)
- `registered` (boolean)

### create_payments_bulk_payments_companyid_bulk_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_products_products_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `manual` (boolean)

### update_products_bulk_products_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_product_products_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### update_product_products_companyid_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)
- `additionalInfo` (object)
- `accountingCode` (string)

### list_operations_reconcilingitems_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `reconcilingSourceCustomId` (string)
- `reconciled` (boolean)
- `startDate` (string)
- `endDate` (string)
- `limit` (integer)
- `nextPageToken` (string)

### create_reconciling_item_reconcilingitems_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `amount` (number)
- `currency` (string)
- `date` (string)
- `description` (string)
- `metadata` (object)
- `additionalInfo` (object)
- `customId` (string)
- `reconcilingSourceCustomId` (string)

### delete_reconciling_items_bulk_reconcilingitems_companyid_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### update_reconciling_items_bulk_reconcilingitems_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### read_reconciling_item_reconcilingitems_companyid_customid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_reconciling_item_reconcilingitems_companyid_customid_dele

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_reconciling_item_reconcilingitems_companyid_customid_patc

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `amount` (number)
- `currency` (string)
- `date` (string)
- `description` (string)
- `metadata` (object)
- `additionalInfo` (object)

### create_reconciling_items_bulk_reconcilingitems_companyid_bulk_po

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### list_reconciling_sources_reconcilingsources_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### create_reconciling_source_reconcilingsources_companyid_post

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `name` (string)
- `additionalInfo` (object)
- `matchingMetadataKey` (string)
- `customId` (string)

### retrieve_reconciling_source_reconcilingsources_companyid_customi

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### delete_reconciling_source_reconcilingsources_companyid_customid_

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)

### update_reconciling_source_reconcilingsources_companyid_customid_

**Environment variables**

- `API_KEY`

**Input schema**

- `customId` (string)
- `companyId` (string)
- `name` (string)
- `additionalInfo` (object)
- `matchingMetadataKey` (string)

### list_scenarios_scenarios_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)

### retrieve_scenario_scenarios_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### list_transactions_transactions_companyid_get

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `productId` (string)
- `sync` (boolean)
- `startValueDate` (string)
- `endValueDate` (string)
- `startOperationDate` (string)
- `endOperationDate` (string)
- `startUpdatedAt` (string)
- `endUpdatedAt` (string)
- `limit` (integer)
- `nextPageToken` (string)

### update_transactions_bulk_transactions_companyid_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `data` (array)

### retrieve_transaction_transactions_companyid_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)

### update_transaction_transactions_companyid_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `companyId` (string)
- `additionalInfo` (object)
- `attributes` (array)
- `sync` (boolean)

### create_manual_transactions_bulk_transactions_companyid_productid

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `productId` (string)
- `data` (array)
