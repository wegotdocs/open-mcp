# @open-mcp/mercatop-server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "mercatop-server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/mercatop-server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/mercatop-server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add mercatop-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add mercatop-server \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add mercatop-server \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "mercatop-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/mercatop-server"],
      "env": {"USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `namespace` (string)
- `context` (string)

### get_coupons

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `modified_before` (string)
- `dates_are_gmt` (boolean)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `code` (string)

### post_coupons

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `code` (string)
- `amount` (string)
- `discount_type` (string)
- `description` (string)
- `date_expires` (string)
- `date_expires_gmt` (string)
- `individual_use` (boolean)
- `product_ids` (array)
- `excluded_product_ids` (array)
- `usage_limit` (integer)
- `usage_limit_per_user` (integer)
- `limit_usage_to_x_items` (integer)
- `free_shipping` (boolean)
- `product_categories` (array)
- `excluded_product_categories` (array)
- `exclude_sale_items` (boolean)
- `minimum_amount` (string)
- `maximum_amount` (string)
- `email_restrictions` (array)
- `meta_data` (array)

### get_coupons_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_coupons_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `amount` (string)
- `discount_type` (string)
- `description` (string)
- `date_expires` (string)
- `date_expires_gmt` (string)
- `individual_use` (boolean)
- `product_ids` (array)
- `excluded_product_ids` (array)
- `usage_limit` (integer)
- `usage_limit_per_user` (integer)
- `limit_usage_to_x_items` (integer)
- `free_shipping` (boolean)
- `product_categories` (array)
- `excluded_product_categories` (array)
- `exclude_sale_items` (boolean)
- `minimum_amount` (string)
- `maximum_amount` (string)
- `email_restrictions` (array)
- `meta_data` (array)

### put_coupons_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `amount` (string)
- `discount_type` (string)
- `description` (string)
- `date_expires` (string)
- `date_expires_gmt` (string)
- `individual_use` (boolean)
- `product_ids` (array)
- `excluded_product_ids` (array)
- `usage_limit` (integer)
- `usage_limit_per_user` (integer)
- `limit_usage_to_x_items` (integer)
- `free_shipping` (boolean)
- `product_categories` (array)
- `excluded_product_categories` (array)
- `exclude_sale_items` (boolean)
- `minimum_amount` (string)
- `maximum_amount` (string)
- `email_restrictions` (array)
- `meta_data` (array)

### patch_coupons_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `amount` (string)
- `discount_type` (string)
- `description` (string)
- `date_expires` (string)
- `date_expires_gmt` (string)
- `individual_use` (boolean)
- `product_ids` (array)
- `excluded_product_ids` (array)
- `usage_limit` (integer)
- `usage_limit_per_user` (integer)
- `limit_usage_to_x_items` (integer)
- `free_shipping` (boolean)
- `product_categories` (array)
- `excluded_product_categories` (array)
- `exclude_sale_items` (boolean)
- `minimum_amount` (string)
- `maximum_amount` (string)
- `email_restrictions` (array)
- `meta_data` (array)

### delete_coupons_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_customers_customer_id_downloads

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer_id` (integer)
- `context` (string)

### get_customers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `email` (string)
- `role` (string)

### post_customers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `meta_data` (array)

### get_customers_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_customers_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `meta_data` (array)

### put_customers_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `meta_data` (array)

### patch_customers_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `meta_data` (array)

### delete_customers_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)
- `reassign` (integer)

### get_orders_order_id_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `context` (string)
- `type` (string)

### post_orders_order_id_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `note` (string)
- `customer_note` (boolean)
- `added_by_user` (boolean)

### get_orders_order_id_notes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `order_id` (integer)
- `context` (string)

### delete_orders_order_id_notes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `order_id` (integer)
- `force` (boolean)

### get_orders_order_id_refunds

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `modified_before` (string)
- `dates_are_gmt` (boolean)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `parent` (array)
- `parent_exclude` (array)
- `dp` (integer)

### post_orders_order_id_refunds

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `amount` (string)
- `reason` (string)
- `refunded_by` (integer)
- `meta_data` (array)
- `api_refund` (boolean)
- `api_restock` (boolean)

### get_orders_order_id_refunds_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `id` (integer)
- `context` (string)

### delete_orders_order_id_refunds_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order_id` (integer)
- `id` (integer)
- `force` (boolean)

### get_orders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `modified_before` (string)
- `dates_are_gmt` (boolean)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `parent` (array)
- `parent_exclude` (array)
- `status` (array)
- `customer` (integer)
- `product` (integer)
- `dp` (integer)

### post_orders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `parent_id` (integer)
- `status` (string)
- `currency` (string)
- `customer_id` (integer)
- `customer_note` (string)
- `billing` (object)
- `shipping` (object)
- `payment_method` (string)
- `payment_method_title` (string)
- `transaction_id` (string)
- `meta_data` (array)
- `line_items` (array)
- `shipping_lines` (array)
- `fee_lines` (array)
- `coupon_lines` (array)
- `set_paid` (boolean)

### get_orders_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_orders_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `parent_id` (integer)
- `status` (string)
- `currency` (string)
- `customer_id` (integer)
- `customer_note` (string)
- `billing` (object)
- `shipping` (object)
- `payment_method` (string)
- `payment_method_title` (string)
- `transaction_id` (string)
- `meta_data` (array)
- `line_items` (array)
- `shipping_lines` (array)
- `fee_lines` (array)
- `coupon_lines` (array)
- `set_paid` (boolean)

### put_orders_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `parent_id` (integer)
- `status` (string)
- `currency` (string)
- `customer_id` (integer)
- `customer_note` (string)
- `billing` (object)
- `shipping` (object)
- `payment_method` (string)
- `payment_method_title` (string)
- `transaction_id` (string)
- `meta_data` (array)
- `line_items` (array)
- `shipping_lines` (array)
- `fee_lines` (array)
- `coupon_lines` (array)
- `set_paid` (boolean)

### patch_orders_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `parent_id` (integer)
- `status` (string)
- `currency` (string)
- `customer_id` (integer)
- `customer_note` (string)
- `billing` (object)
- `shipping` (object)
- `payment_method` (string)
- `payment_method_title` (string)
- `transaction_id` (string)
- `meta_data` (array)
- `line_items` (array)
- `shipping_lines` (array)
- `fee_lines` (array)
- `coupon_lines` (array)
- `set_paid` (boolean)

### delete_orders_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_attributes_attribute_id_terms

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attribute_id` (integer)
- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `hide_empty` (boolean)
- `parent` (integer)
- `product` (integer)
- `slug` (string)

### post_products_attributes_attribute_id_terms

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attribute_id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `menu_order` (integer)

### get_products_attributes_attribute_id_terms_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `attribute_id` (integer)
- `context` (string)

### post_products_attributes_attribute_id_terms_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `attribute_id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `menu_order` (integer)

### put_products_attributes_attribute_id_terms_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `attribute_id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `menu_order` (integer)

### patch_products_attributes_attribute_id_terms_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `attribute_id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)
- `menu_order` (integer)

### delete_products_attributes_attribute_id_terms_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `attribute_id` (integer)
- `force` (boolean)

### get_products_attributes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### post_products_attributes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `slug` (string)
- `type` (string)
- `order_by` (string)
- `has_archives` (boolean)

### get_products_attributes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_attributes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `type` (string)
- `order_by` (string)
- `has_archives` (boolean)

### put_products_attributes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `type` (string)
- `order_by` (string)
- `has_archives` (boolean)

### patch_products_attributes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `type` (string)
- `order_by` (string)
- `has_archives` (boolean)

### delete_products_attributes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_categories

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `hide_empty` (boolean)
- `parent` (integer)
- `product` (integer)
- `slug` (string)

### post_products_categories

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `display` (string)
- `image` (object)
- `menu_order` (integer)

### get_products_categories_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_categories_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `display` (string)
- `image` (object)
- `menu_order` (integer)

### put_products_categories_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `display` (string)
- `image` (object)
- `menu_order` (integer)

### patch_products_categories_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `parent` (integer)
- `description` (string)
- `display` (string)
- `image` (object)
- `menu_order` (integer)

### delete_products_categories_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_reviews

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `reviewer` (array)
- `reviewer_exclude` (array)
- `reviewer_email` (string)
- `product` (array)
- `status` (string)

### post_products_reviews

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `status` (string)
- `reviewer` (string)
- `reviewer_email` (string)
- `review` (string)
- `rating` (integer)

### get_products_reviews_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_reviews_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product_id` (integer)
- `status` (string)
- `reviewer` (string)
- `reviewer_email` (string)
- `review` (string)
- `rating` (integer)

### put_products_reviews_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product_id` (integer)
- `status` (string)
- `reviewer` (string)
- `reviewer_email` (string)
- `review` (string)
- `rating` (integer)

### patch_products_reviews_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product_id` (integer)
- `status` (string)
- `reviewer` (string)
- `reviewer_email` (string)
- `review` (string)
- `rating` (integer)

### delete_products_reviews_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_shipping_classes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `hide_empty` (boolean)
- `parent` (integer)
- `product` (integer)
- `slug` (string)

### post_products_shipping_classes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)

### get_products_shipping_classes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_shipping_classes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### put_products_shipping_classes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### patch_products_shipping_classes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### delete_products_shipping_classes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_tags

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `hide_empty` (boolean)
- `parent` (integer)
- `product` (integer)
- `slug` (string)

### post_products_tags

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `slug` (string)
- `description` (string)

### get_products_tags_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_tags_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### put_products_tags_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### patch_products_tags_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `description` (string)

### delete_products_tags_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `modified_before` (string)
- `dates_are_gmt` (boolean)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `parent` (array)
- `parent_exclude` (array)
- `slug` (string)
- `status` (string)
- `type` (string)
- `sku` (string)
- `featured` (boolean)
- `category` (string)
- `tag` (string)
- `shipping_class` (string)
- `attribute` (string)
- `attribute_term` (string)
- `on_sale` (boolean)
- `min_price` (string)
- `max_price` (string)
- `stock_status` (string)

### post_products

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `slug` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `external_url` (string)
- `button_text` (string)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `reviews_allowed` (boolean)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### get_products_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_products_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `external_url` (string)
- `button_text` (string)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `reviews_allowed` (boolean)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### put_products_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `external_url` (string)
- `button_text` (string)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `reviews_allowed` (boolean)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### patch_products_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `external_url` (string)
- `button_text` (string)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `reviews_allowed` (boolean)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### delete_products_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_products_product_id_variations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `modified_before` (string)
- `dates_are_gmt` (boolean)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `parent` (array)
- `parent_exclude` (array)
- `slug` (string)
- `status` (string)
- `sku` (string)
- `on_sale` (boolean)
- `min_price` (string)
- `max_price` (string)
- `stock_status` (string)

### post_products_product_id_variations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `status` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `image` (object)
- `attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### get_products_product_id_variations_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `id` (integer)
- `context` (string)

### post_products_product_id_variations_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `id` (integer)
- `description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `status` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `image` (object)
- `attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### put_products_product_id_variations_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `id` (integer)
- `description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `status` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `image` (object)
- `attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### patch_products_product_id_variations_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `id` (integer)
- `description` (string)
- `sku` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `status` (string)
- `virtual` (boolean)
- `downloadable` (boolean)
- `downloads` (array)
- `download_limit` (integer)
- `download_expiry` (integer)
- `tax_status` (string)
- `tax_class` (string)
- `manage_stock` (boolean)
- `stock_quantity` (integer)
- `stock_status` (string)
- `backorders` (string)
- `low_stock_amount` (integer)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `image` (object)
- `attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### delete_products_product_id_variations_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_id` (integer)
- `id` (integer)
- `force` (boolean)

### get_reports_sales

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `period` (string)
- `date_min` (string)
- `date_max` (string)

### get_reports_top_sellers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `period` (string)
- `date_min` (string)
- `date_max` (string)

### get_reports_orders_totals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_reports_products_totals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_reports_customers_totals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_reports_coupons_totals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_reports_reviews_totals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_reports

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_shipping_zones

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### post_shipping_zones

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `order` (integer)

### get_shipping_zones_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### post_shipping_zones_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `order` (integer)

### put_shipping_zones_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `order` (integer)

### patch_shipping_zones_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `order` (integer)

### delete_shipping_zones_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_shipping_zones_id_locations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### post_shipping_zones_id_locations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `type` (string)

### put_shipping_zones_id_locations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `type` (string)

### patch_shipping_zones_id_locations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `code` (string)
- `type` (string)

### get_shipping_zones_zone_id_methods

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)

### post_shipping_zones_zone_id_methods

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)
- `method_id` (string)

### get_shipping_zones_zone_id_methods_instance_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `instance_id` (integer)

### post_shipping_zones_zone_id_methods_instance_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `instance_id` (integer)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### put_shipping_zones_zone_id_methods_instance_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `instance_id` (integer)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### patch_shipping_zones_zone_id_methods_instance_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `instance_id` (integer)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### delete_shipping_zones_zone_id_methods_instance_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `zone_id` (integer)
- `instance_id` (integer)
- `force` (boolean)

### get_taxes_classes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### post_taxes_classes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### get_taxes_classes_slug_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `slug` (string)

### delete_taxes_classes_slug_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `slug` (string)
- `force` (boolean)

### get_taxes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `class` (string)

### post_taxes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `country` (string)
- `state` (string)
- `postcode` (string)
- `city` (string)
- `rate` (string)
- `name` (string)
- `priority` (integer)
- `compound` (boolean)
- `shipping` (boolean)
- `order` (integer)
- `class` (string)
- `postcodes` (array)
- `cities` (array)

### get_taxes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_taxes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `country` (string)
- `state` (string)
- `postcode` (string)
- `city` (string)
- `rate` (string)
- `name` (string)
- `priority` (integer)
- `compound` (boolean)
- `shipping` (boolean)
- `order` (integer)
- `class` (string)
- `postcodes` (array)
- `cities` (array)

### put_taxes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `country` (string)
- `state` (string)
- `postcode` (string)
- `city` (string)
- `rate` (string)
- `name` (string)
- `priority` (integer)
- `compound` (boolean)
- `shipping` (boolean)
- `order` (integer)
- `class` (string)
- `postcodes` (array)
- `cities` (array)

### patch_taxes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `country` (string)
- `state` (string)
- `postcode` (string)
- `city` (string)
- `rate` (string)
- `name` (string)
- `priority` (integer)
- `compound` (boolean)
- `shipping` (boolean)
- `order` (integer)
- `class` (string)
- `postcodes` (array)
- `cities` (array)

### delete_taxes_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_webhooks

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)
- `page` (integer)
- `per_page` (integer)
- `search` (string)
- `after` (string)
- `before` (string)
- `exclude` (array)
- `include` (array)
- `offset` (integer)
- `order` (string)
- `orderby` (string)
- `status` (string)

### post_webhooks

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `status` (string)
- `topic` (string)
- `secret` (string)
- `delivery_url` (string)

### get_webhooks_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `context` (string)

### post_webhooks_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `status` (string)
- `topic` (string)
- `secret` (string)

### put_webhooks_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `status` (string)
- `topic` (string)
- `secret` (string)

### patch_webhooks_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `status` (string)
- `topic` (string)
- `secret` (string)

### delete_webhooks_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `force` (boolean)

### get_system_status

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_system_status_tools

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_system_status_tools_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### post_system_status_tools_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `action` (string)
- `description` (string)
- `success` (boolean)
- `message` (string)

### put_system_status_tools_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `action` (string)
- `description` (string)
- `success` (boolean)
- `message` (string)

### patch_system_status_tools_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `action` (string)
- `description` (string)
- `success` (boolean)
- `message` (string)

### get_shipping_methods

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_shipping_methods_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `context` (string)

### get_payment_gateways

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `context` (string)

### get_payment_gateways_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `context` (string)

### post_payment_gateways_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `title` (string)
- `description` (string)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### put_payment_gateways_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `title` (string)
- `description` (string)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### patch_payment_gateways_id_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `title` (string)
- `description` (string)
- `order` (integer)
- `enabled` (boolean)
- `settings` (object)

### get_data

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_data_continents

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_data_continents_location_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)

### get_data_countries

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_data_countries_location_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)

### get_data_currencies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_data_currencies_current

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_data_currencies_currency_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `currency` (string)
