# @open-mcp/Hive

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "Hive": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/Hive@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/Hive@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
NOAUTH_CREDENTIALS='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add Hive \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add Hive \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS
```

### Other

```bash
npx @open-mcp/config add Hive \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "Hive": {
      "command": "npx",
      "args": ["-y", "@open-mcp/Hive"],
      "env": {"API_KEY":"...","NOAUTH_CREDENTIALS":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `NOAUTH_CREDENTIALS` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_address_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_address_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_address_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_address_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_address_types_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_address_types_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_address_types_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_address_types_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_audit_log_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_audit_log_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_audit_log_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_audit_log_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (string)
- `Authorization` (string)

### get_audit_log_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_audit_log_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_audit_log_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_audit_log_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_logs_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_logs_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_logs_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_logs_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_bugs_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_bugs_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_bugs_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_bugs_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_bugs_requests_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_bugs_requests_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_bugs_requests_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_bugs_requests_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_contact_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_contact_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_contact_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_contact_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_contact_types_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_contact_types_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_contact_types_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_contact_types_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_contract_swo_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### put_contract_swo_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### patch_contract_swo_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### delete_contract_swo_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_contract_swo_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_contract_swo_

**Environment variables**

- `API_KEY`

**Input schema**

- `Authorization` (string)

### get_contracts_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_contracts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_contracts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_contracts_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_contracts_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_contracts_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_contracts_id_contract_purcahse_order_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `source` (string)
- `Accept` (string)
- `Authorization` (string)

### get_contracts_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_contracts_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_contracts_renew_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_contracts_contracts_filter_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_contracts_contracts_status_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### get_contracts_contracts_type_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### get_customers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_customers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_customers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_customers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_customers_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_customers_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_customers_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_customers_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_feature_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_feature_requests_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_feature_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_feature_requests_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_feature_requests_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_feature_requests_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_feature_requests_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_feature_requests_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_feature_requests_get_values_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### get_information_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_information_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_information_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_information_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_information_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_information_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_item_fields_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_item_fields_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_item_fields_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_item_fields_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_item_fields_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_item_fields_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_item_fields_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_item_fields_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_item_fields_fields_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### get_item_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_item_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_item_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_item_types_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_item_types_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_item_types_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_item_types_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_item_types_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_goals_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### delete_goals_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_goals_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_goals_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_goals_goals_filter_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_items_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_items_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_items_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_items_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_items_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_items_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_items_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_items_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### delete_items_remove_item_duplicate_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_items_item_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_items_create_or_update_item_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_notes_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_notes_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_notes_get_notes_

**Environment variables**

- `API_KEY`

**Input schema**

- `sales_order` (string)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_project_management_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### get_project_management_status

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### get_project_management_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)
- `Authorization` (string)

### post_project_management_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_project_management_status_update_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_tasks_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_tasks_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### put_tasks_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_tasks_get_tasks_

**Environment variables**

- `API_KEY`

**Input schema**

- `sales_order_reference` (string)
- `task_assigned` (string)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_misc_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_misc_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_misc_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_misc_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_misc_cumulative_csv_report_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_asset_register_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_cumulative_detail_csv_report_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_misc_bulk_detail_so_report_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_misc_customer_csv_export_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### get_misc_item_csv_export_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_misc_room_csv_report_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_room_summary_csv_report_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_misc_supplier_csv_export_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_misc_sales_proposal_pdf_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)
- `` (string)

### post_misc_maintenance_pdf_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_service_work_order_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_contract_swo_pdf_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_purchase_order_pdf_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_misc_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_misc_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_misc_acquire_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_instruction_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_misc_remove_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_misc_scope_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_projects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_projects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_projects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_projects_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_projects_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_projects_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_projects_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_projects_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_projects_get_shipping_address_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_projects_shipping_address_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_projects_projects_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_projects_projects_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_purchase_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_purchase_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_purchase_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_purchase_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_purchase_orders_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_purchase_orders_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_purchase_orders_id_generate_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `type` (string)
- `source` (string)
- `Accept` (string)
- `Authorization` (string)

### get_purchase_orders_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_purchase_orders_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_purchase_orders_purchase_order_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_purchase_orders_purchase_order_status_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### get_quotes_quote_status_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### put_quotes_quote_status_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_quotes_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_quotes_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Authorization` (string)

### patch_quotes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_quotes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_quotes_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_quotes_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_quotes_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_quotes_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_quotes_set_preferred_quote_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### put_quotes_convert_to_order_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### put_quotes_duplicate_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### post_quotes_quote_filter_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sales_orders_id_sales_order_po_summary_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### get_sales_orders_id_sales_order_individual_summary

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_sales_orders_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_sales_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_sales_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_sales_orders_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_sales_orders_id_update_account_contact_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### put_sales_orders_id_update_project_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### put_sales_orders_id_invoice_status_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sales_orders_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_sales_orders_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_sales_order_invoices_id_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### get_sales_order_invoices_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `Accept` (string)
- `Authorization` (string)

### post_sales_order_invoices_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sales_order_invoices_stats

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sales_orders_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_sales_orders_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_sales_orders_sales_order_filter_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sales_orders_sales_order_status_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### put_sales_orders_duplicate_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### get_sites_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### put_sites_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_sites_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_sites_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_sites_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_sites_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_sites_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)

### post_sites_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### post_sites_sites_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_suppliers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_suppliers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### patch_suppliers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_suppliers_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_suppliers_id_archive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_suppliers_id_unarchive_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Accept` (string)

### get_suppliers_

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_suppliers_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_suppliers_filter_

**Environment variables**

- `API_KEY`

**Input schema**

- `isEngineeringService` (string)
- `Accept` (string)
- `Authorization` (string)

### get_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Accept` (string)
- `Authorization` (string)

### put_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `Content-Type` (string)
- `Accept` (string)
- `Authorization` (string)

### patch_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `Content-Type` (string)
- `Accept` (string)

### delete_users_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_users_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `is_designer` (string)
- `Accept` (string)
- `Authorization` (string)

### post_users_

**Environment variables**

- `API_KEY`

**Input schema**

- `Content-Type` (string)
- `Accept` (string)

### get_users_me

**Environment variables**

- `API_KEY`

**Input schema**

- `Accept` (string)
- `Authorization` (string)

### post_quote_meta_verify_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### get_hubspot_get_deals_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### post_hubspot_update_deals_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### post_hubspot_get_deal_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### get_qb_get_company_

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### get_dashboardstat

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### post_login

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

- `Authorization` (string)

### post_logout

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
