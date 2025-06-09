# @open-mcp/test

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "test": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/test@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/test@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add test \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add test \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add test \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "test": {
      "command": "npx",
      "args": ["-y", "@open-mcp/test"],
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

### accounting_accountgrouplist

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_accountingaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_number` (string)
- `account_name` (string)
- `parent_account_number` (string)
- `account_key` (string)
- `parent_id` (number)
- `id` (number)
- `ids` (array)
- `mixed` (string)
- `amount_from` (number)
- `amount_to` (number)
- `search` (string)
- `barcode` (string)
- `group_id` (number)
- `service_organization_identification` (string)
- `type` (integer)
- `currency` (number)
- `country` (string)

### accounting_show

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### accounting_showorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### accounting_showcommodity

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### accounting_showemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### accounting_exportaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_number` (string)
- `account_name` (string)
- `parent_account_number` (string)
- `account_key` (string)
- `parent_id` (number)
- `id` (number)
- `ids` (array)
- `mixed` (string)
- `amount_from` (number)
- `amount_to` (number)
- `search` (string)
- `barcode` (string)
- `group_id` (number)
- `service_organization_identification` (string)
- `type` (integer)
- `currency` (number)
- `country` (string)

### accounting_importaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_type` (string)
- `file` (string)

### accounting_attachdocument

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_id` (integer)
- `file` (string)

### accounting_getdocument

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `document_name` (string)

### accounting_removedocument

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_id` (integer)

### accounting_createparentaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_financialaccount_store

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_createorganizationaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_createemployeeaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_createcommodityaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_bulkcreatecommodityaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_exportproductaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_importproductaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_type` (string)
- `file` (string)

### accounting_residueaccounts

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_getfavoriteaccount

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### accounting_makefavorite

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `account_id` (integer)

### category_index

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)

### category_createcategory

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `category_name` (string)

### category_updatecategory

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### category_deletecategory

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `categoryId` (integer)

### password_email

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### password_reset

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### language_index

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### language_create

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `name` (string)
- `code` (string)

### language_update

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)
- `code` (string)
- `main` (boolean)
- `active` (boolean)

### language_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `lang` (string)
- `id` (integer)

### auth_login_login_0

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `password` (string)
- `remember` (boolean)

### auth_login_login_0

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `password` (string)
- `remember` (boolean)

### objects_index

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `organizationId` (integer)
- `organization_id` (number)
- `id` (number)
- `name` (string)
- `driver_name` (string)
- `driver_identification` (string)
- `car_number` (string)
- `active` (number)
- `driver` (boolean)
- `page_size` (boolean)
- `page` (boolean)

### objects_createobject

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `organizationId` (integer)
- `name` (string)
- `address` (string)
- `sale_object` (boolean | null)
- `purchase_object` (boolean | null)
- `active` (boolean | null)
- `driver_name` (string | null)
- `driver_identification` (string | null)
- `car_number` (string | null)

### objects_updateobject

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `organizationId` (integer)
- `id` (integer)
- `name` (string)
- `address` (string)
- `driver_name` (string | null)
- `driver_identification` (string | null)
- `car_number` (string | null)

### objects_updateobjectstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `organizationId` (integer)
- `id` (number)
- `is_active` (boolean)

### operations_index

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (number)
- `asset` (string)
- `date_from` (string)
- `date_to` (string)
- `organization_id` (number)
- `document` (string)
- `debet_name` (string)
- `credit_name` (string)
- `debet_number` (string)
- `credit_number` (string)
- `object_id` (number)
- `unit_id` (number)
- `unit_from` (number)
- `unit_to` (number)
- `amount` (number)
- `amount_from` (number)
- `amount_to` (number)
- `currency` (number)
- `description` (string)
- `quantity` (number)
- `quantity_from` (number)
- `quantity_to` (number)
- `course_from` (number)
- `course_to` (number)
- `operation_type` (number)
- `transaction_type` (number)
- `page_size` (number)
- `page` (number)
- `operation_id` (number)
- `waybillId` (number)
- `waybill_number` (string)
- `parent_id` (number)
- `is_active` (boolean)
- `vat` (boolean)
- `account_id` (number)
- `connectable_account_id` (number)
- `with_start_transactions` (boolean)
- `card_account_id` (number)
- `account_ids` (array)
- `connectable_account_ids` (array)

### operations

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (number)
- `asset` (string)
- `date_from` (string)
- `date_to` (string)
- `organization_id` (number)
- `document` (string)
- `debet_name` (string)
- `credit_name` (string)
- `debet_number` (string)
- `credit_number` (string)
- `object_id` (number)
- `unit_id` (number)
- `unit_from` (number)
- `unit_to` (number)
- `amount` (number)
- `amount_from` (number)
- `amount_to` (number)
- `currency` (number)
- `description` (string)
- `quantity` (number)
- `quantity_from` (number)
- `quantity_to` (number)
- `course_from` (number)
- `course_to` (number)
- `operation_type` (number)
- `transaction_type` (number)
- `page_size` (number)
- `page` (number)
- `operation_id` (number)
- `waybillId` (number)
- `waybill_number` (string)
- `parent_id` (number)
- `is_active` (boolean)
- `vat` (boolean)
- `account_id` (number)
- `connectable_account_id` (number)
- `with_start_transactions` (boolean)
- `card_account_id` (number)
- `account_ids` (array)
- `connectable_account_ids` (array)

### transactions_show

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### transactions_invoice_generate

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `operationId` (integer)

### operations_balances

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `date` (string)
- `parent_id` (integer)

### operations_exportbalances

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `date` (string)
- `parent_id` (integer)

### operations_turnover

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `date_from` (string)
- `date_to` (string)
- `parent_id` (integer)

### operations_exportturnovertransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `date_from` (string)
- `date_to` (string)
- `parent_id` (integer)

### accounttransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `to_date` (string)
- `account_number` (string)
- `limit` (integer)

### operations_exporttransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### importtransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `file` (string)

### create_transactions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `transaction_type` (number)
- `transaction_debet_id` (number)
- `transaction_credit_id` (number)
- `transaction_amount` (number)
- `document` (string | null)
- `date` (string | null)
- `transaction_currency` (number)
- `description` (string | null)
- `connection` (string | null)
- `quantity` (string | null)
- `transaction_id` (number)
- `unit_id` (number | null)

### proportionaltransaction

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### create_create_operations_breakup

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `quantity` (number)

### create_create_operations_production

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `quantity` (number)

### operations_createtransactionrealizationorder

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `extra_type` (number)
- `operation_id` (integer)
- `driver_tin` (string)
- `driver_name` (string)
- `car_number` (string)
- `start_address` (string)
- `end_address` (string)
- `transportation_cost` (string)
- `organization_name` (string)
- `tranCostPayer` (string)
- `name` (string)
- `from_account_id` (number)
- `transaction_type` (number)
- `date` (string)
- `document` (string)
- `description` (string)
- `vat` (number)
- `course` (number)
- `currency` (number)
- `object_id` (number)
- `payment` (array)
- `products` (array)

### refund_transactions_purchase_order

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `extra_type` (number)
- `operation_id` (integer)
- `driver_tin` (string)
- `driver_name` (string)
- `car_number` (string)
- `start_address` (string)
- `end_address` (string)
- `transportation_cost` (string)
- `organization_name` (string)
- `tranCostPayer` (string)
- `name` (string)
- `from_account_id` (number)
- `date` (string)
- `document` (string)
- `vat` (number)
- `course` (number)
- `currency` (number)
- `object_id` (number)
- `products` (array)

### finiswaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)

### save_transactions_purchase_order

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `extra_type` (number)
- `operation_id` (integer)
- `driver_tin` (string)
- `driver_name` (string)
- `car_number` (string)
- `start_address` (string)
- `end_address` (string)
- `transportation_cost` (string)
- `organization_name` (string)
- `tranCostPayer` (string)
- `name` (string)
- `from_account_id` (number)
- `transaction_type` (number)
- `date` (string)
- `document` (string)
- `description` (string)
- `vat` (number)
- `course` (number)
- `currency` (number)
- `object_id` (number)
- `payment` (array)
- `products` (array)

### delete_transactions_purchase_order

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `templateId` (integer)

### get_transactions_purchase_order

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (number)
- `organization_id` (number)
- `name` (string)
- `product_amount` (string)
- `object_id` (number)
- `from_account_id` (number)
- `transaction_type` (number)
- `vat` (number)
- `course` (number)
- `currency` (number)
- `products` (string)
- `page_size` (number)
- `page` (number)

### operations_createtransactionpurchaseorder

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `from_account_id` (number)
- `transaction_type` (number)
- `date` (string)
- `document` (string)
- `vat` (number)
- `course` (number)
- `currency` (number)
- `object_id` (number)
- `payment` (object)
- `products` (array)

### reverse_transactions_purchase_order

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `operation_id` (number)
- `transaction_ids` (array)

### update_transaction

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)
- `operations` (array)

### delete_transaction

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `operationID` (integer)

### connect_products

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `products` (array)

### organizationpayments_index

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `from` (string)
- `to` (string)

### organizationpayments_detail

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `from` (string)
- `to` (string)

### service_payment

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### organizations_index

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `service_organizations` (boolean)
- `id` (number)
- `type` (number)
- `name` (string)
- `email` (string)
- `telephone` (string)
- `brand_name` (number)
- `identification` (boolean)
- `page_size` (number)
- `page` (number)

### organizations_checkorganizationbyrsuser

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `rs_user` (string)

### organizations_createorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `rs_user` (string)
- `rs_pass` (string)
- `identification` (string)
- `name` (string)
- `brand_name` (string)
- `address` (string)
- `telephone` (string)
- `email` (string)
- `start_date` (string)
- `vat` (number | null)
- `profit` (number | null)
- `income` (number | null)
- `ignorable` (boolean | null)

### organizations_updateorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)
- `brand_name` (string)
- `address` (string)
- `telephone` (string)
- `email` (string)
- `start_date` (string)
- `type` (integer)
- `vat` (number)
- `profit` (number)
- `income` (number)

### params

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### update_params

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `b_language` (integer)
- `dark_mode_enabled` (boolean)
- `double_auth` (integer)

### product_listbarcodes

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### product_createorupdatebarcode

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### product_deletebarcode

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### disintegration

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `account_number` (string)
- `id` (integer)
- `ids` (array)
- `search` (string)
- `basic_barcode` (string)
- `barcode` (string)
- `date` (string)
- `page_size` (integer)
- `page` (integer)
- `on_sell` (boolean)
- `on_buy` (boolean)

### product_addproduction

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `to_account` (integer)
- `products` (array)

### addbreakup

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `to_account` (integer)
- `products` (array)

### disintegration_show

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### product_deleteproductionitem

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `to_account` (string)
- `account_number` (string)

### profile_switchorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `organization_id` (integer)
- `object_id` (integer | null)

### profile_currentorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### profile

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### update_profile

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### become_accountant_list

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### become_accountant

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### approve_accountant

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `user_id` (integer)
- `approved` (boolean)

### register_create

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `last_name` (string)
- `user_name` (string)
- `personal_number` (string)
- `cityzen` (string)
- `mobile` (string)
- `birth_day` (string)
- `email` (string)
- `password` (string)
- `password_confirmation` (string)

### verification_verify

**Environment variables**

- `API_KEY`

**Input schema**

- `userId` (integer)
- `hash` (string)
- `expires` (string)
- `type` (string)
- `signature` (string)

### password_update

**Environment variables**

- `API_KEY`

**Input schema**

- `token` (string)
- `email` (string)
- `password` (string)
- `password_confirmation` (string)

### resource_getcurrencyrate

**Environment variables**

- `API_KEY`

**Input schema**

- `lang` (string)
- `currency` (string)

### resource_gethistoricalcurrencyrate

**Environment variables**

- `API_KEY`

**Input schema**

- `lang` (string)
- `currency` (string)
- `startDate` (string)
- `endDate` (string)

### resource_currencies

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### resource_countries

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### resource_unitlist

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### resource_transactiontypes

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### role_attachpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `role_id` (integer)
- `permissions` (array)

### role_create

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)

### roles

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### update_role

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)
- `name` (string)

### delete_role

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### group_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### group_create_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)

### role_updategroupwithpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)

### role_deletegroupwithpermissions

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### create_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (integer)
- `name` (string)
- `key` (string)
- `group_id` (integer)

### update_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)
- `name` (string)
- `key` (string)
- `group_id` (integer)

### delete_permissions

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### serviceorganization_currentorganizationemployees

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### create_service_organizations

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (number)
- `organization_id` (number)
- `identification` (string)

### serviceorganization_serviceacceptedorganizations

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `id` (number)
- `organization_id` (number)
- `identification` (string)

### serviceorganization_createserviceorganization

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `organization_id` (integer)

### delete_service_organization

**Environment variables**

- `API_KEY`

**Input schema**

- `lang` (string)
- `id` (string)

### serviceusers_index

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### serviceusers_attachrole

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `user_ids` (array)
- `role` (integer)

### serviceusers_removefromemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `id` (integer)

### translate

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `locale` (string)

### create_translation

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### waybill_markasread

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `transaction_id` (integer)
- `waybill_id` (array)

### waybill_showwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### waybill_getsellersubscriberwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `statuses` (array)
- `car_number` (string)
- `buyer_tin` (string)
- `itypes` (array)
- `begin_date_start` (string)
- `begin_date_end` (string)
- `create_date_start` (string)
- `create_date_end` (string)
- `driver_tin` (string)
- `delivery_date_start` (string)
- `delivery_date_end` (string)
- `full_amount` (string)
- `waybill_number` (string)
- `close_date_start` (string)
- `close_date_end` (string)
- `user_ids` (array)
- `comment` (string)

### waybillbuyerreceived

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `statuses` (array)
- `car_number` (string)
- `seller_tin` (string)
- `itypes` (array)
- `begin_date_start` (string)
- `begin_date_end` (string)
- `create_date_start` (string)
- `create_date_end` (string)
- `driver_tin` (string)
- `delivery_date_start` (string)
- `delivery_date_end` (string)
- `full_amount` (string)
- `waybill_number` (string)
- `close_date_start` (string)
- `close_date_end` (string)
- `user_ids` (array)
- `comment` (string)

### getakcizcodes

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### getwaybilltypes

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### getwaybillunits

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)

### activatewaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### confirmwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### confirmwaybillbydate

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)
- `date` (string)

### closewaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### closewaybillbydate

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)
- `date` (string)

### deletewaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### refusewaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)
- `waybillId` (integer)

### getwaybilltransporttypes

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)

### getwaybillwoodtypes

**Environment variables**

- `API_KEY`

**Input schema**

- `locale` (string)

### sendwithdomestictransporationwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `operation_id` (integer)
- `object_id` (number)
- `fullAmount` (number)
- `startAddress` (string)
- `currency` (number)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `document` (string)
- `description` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `checkDriverTin` (number)
- `goodList` (array)

### sendwithtransportationwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `operation_id` (integer)
- `object_id` (number)
- `fullAmount` (number)
- `startAddress` (string)
- `currency` (number)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `document` (string)
- `description` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `checkDriverTin` (number)
- `goodList` (array)

### sendwithouttransportationwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `operation_id` (integer)
- `object_id` (number)
- `fullAmount` (number)
- `startAddress` (string)
- `currency` (number)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `document` (string)
- `description` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `checkDriverTin` (number)
- `goodList` (array)

### sendwithdistributionwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `operation_id` (integer)
- `object_id` (number)
- `fullAmount` (number)
- `startAddress` (string)
- `currency` (number)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `document` (string)
- `description` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `checkDriverTin` (number)
- `goodList` (array)

### finishwithdistributionwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)

### waybill_sendwithreturnwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `operation_id` (integer)
- `object_id` (number)
- `fullAmount` (number)
- `startAddress` (string)
- `currency` (number)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `document` (string)
- `description` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `checkDriverTin` (number)
- `goodList` (array)

### waybill_sendsubwaybill

**Environment variables**

- `API_KEY`

**Input schema**

- `language` (string)
- `waybillId` (number)
- `ignore_waybill` (boolean)
- `object_id` (number)
- `operation_id` (integer)
- `from_account_id` (number)
- `fullAmount` (number)
- `par_id` (number)
- `startAddress` (string)
- `endAddress` (string)
- `transId` (integer)
- `tranCostPayer` (integer)
- `driverName` (string)
- `driverTin` (number)
- `carNumber` (string)
- `transTxt` (string)
- `buyerTin` (number)
- `checkBuyerTin` (number)
- `buyerName` (string)
- `transportCoast` (number)
- `isMed` (boolean)
- `document` (string)
- `description` (string)
- `goodList` (array)
