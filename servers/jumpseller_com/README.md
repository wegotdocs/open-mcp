# @open-mcp/jumpseller_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "jumpseller_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/jumpseller_com"],
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

### get_categories_json

### post_categories_json

### get_categories_count_json

### delete_categories_id_json

### get_categories_id_json

### put_categories_id_json

### get_checkout_custom_fields_json

### post_checkout_custom_fields_json

### delete_checkout_custom_fields_id_json

### get_checkout_custom_fields_id_json

### put_checkout_custom_fields_id_json

### get_countries_json

### get_countries_country_code_json

### get_countries_country_code_regions_json

### get_countries_country_code_regions_region_code_json

### get_custom_fields_json

### post_custom_fields_json

### delete_custom_fields_id_json

### get_custom_fields_id_json

### put_custom_fields_id_json

### get_custom_fields_id_select_options_json

### post_custom_fields_id_select_options_json

### delete_custom_fields_id_select_options_custom_field_select_optio

### get_custom_fields_id_select_options_custom_field_select_option_i

### put_custom_fields_id_select_options_custom_field_select_option_i

### get_customer_categories_json

### post_customer_categories_json

### delete_customer_categories_id_json

### get_customer_categories_id_json

### put_customer_categories_id_json

### delete_customer_categories_id_customers_json

### get_customer_categories_id_customers_json

### post_customer_categories_id_customers_json

### get_customers_json

### post_customers_json

### get_customers_count_json

### get_customers_email_email_json

### delete_customers_id_json

### get_customers_id_json

### put_customers_id_json

### get_customers_id_fields

### post_customers_id_fields

### delete_customers_id_fields_field_id_

### get_customers_id_fields_field_id_

### put_customers_id_fields_field_id_

### get_fulfillments_json

### get_fulfillments_count_json

### get_fulfillments_id_json

### get_hooks_json

### post_hooks_json

### delete_hooks_id_json

### get_hooks_id_json

### put_hooks_id_json

### get_jsapps_json

### post_jsapps_json

### delete_jsapps_code_json

### get_jsapps_code_json

### get_order_id_fulfillments_json

### get_orders_json

### post_orders_json

### get_orders_after_id_json

### get_orders_count_json

### get_orders_status_status_json

### get_orders_id_json

### put_orders_id_json

### get_orders_id_history_json

### post_orders_id_history_json

### get_pages_json

### post_pages_json

### get_pages_count_json

### delete_pages_id_json

### get_pages_id_json

### put_pages_id_json

### get_partners_stores_json

### get_payment_methods_json

### get_payment_methods_id_json

### get_products_json

### post_products_json

### get_products_after_id_json

### get_products_category_category_id_json

### get_products_category_category_id_count_json

### get_products_count_json

### get_products_search_json

### get_products_status_status_json

### get_products_status_status_count_json

### delete_products_id_json

### get_products_id_json

### put_products_id_json

### get_products_id_attachments_json

### post_products_id_attachments_json

### get_products_id_attachments_count_json

### delete_products_id_attachments_attachment_id_json

### get_products_id_attachments_attachment_id_json

### get_products_id_digital_products_json

### post_products_id_digital_products_json

### get_products_id_digital_products_count_json

### delete_products_id_digital_products_digital_product_id_json

### get_products_id_digital_products_digital_product_id_json

### get_products_id_fields_json

### post_products_id_fields_json

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/jumpseller_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/jumpseller_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
