# @open-mcp/example_woocommerce_shop_com_wp_json_wc_v3

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "example_woocommerce_shop_com_wp_json_wc_v3": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/example_woocommerce_shop_com_wp_json_wc_v3@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/example_woocommerce_shop_com_wp_json_wc_v3@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add example_woocommerce_shop_com_wp_json_wc_v3 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add example_woocommerce_shop_com_wp_json_wc_v3 \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add example_woocommerce_shop_com_wp_json_wc_v3 \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "example_woocommerce_shop_com_wp_json_wc_v3": {
      "command": "npx",
      "args": ["-y", "@open-mcp/example_woocommerce_shop_com_wp_json_wc_v3"],
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

### createcustomer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `role` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `is_paying_customer` (boolean)
- `avatar_url` (string)
- `meta_data` (array)

### listallcustomers

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

### retrievecustomerbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customerId` (integer)

### updatecustomerbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customerId` (integer)
- `id` (integer)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `role` (string)
- `username` (string)
- `password` (string)
- `billing` (object)
- `shipping` (object)
- `is_paying_customer` (boolean)
- `avatar_url` (string)
- `meta_data` (array)

### deletecustomerbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customerId` (integer)
- `force` (string)
- `reassign` (integer)

### createproduct

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `slug` (string)
- `permalink` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `price` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `price_html` (string)
- `on_sale` (boolean)
- `purchasable` (boolean)
- `total_sales` (integer)
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
- `backorders_allowed` (boolean)
- `backordered` (boolean)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_required` (boolean)
- `shipping_taxable` (boolean)
- `shipping_class` (string)
- `shipping_class_id` (integer)
- `reviews_allowed` (boolean)
- `average_rating` (string)
- `rating_count` (integer)
- `related_ids` (array)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `variations` (array)
- `grouped_products` (array)
- `menu_order` (integer)
- `meta_data` (array)

### listallproducts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `sku` (string)
- `attribute` (string)
- `per_page` (integer)
- `page` (integer)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `status` (array)
- `stock_status` (string)
- `order` (string)

### retrieveproductbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)

### updateproductbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)
- `id` (integer)
- `name` (string)
- `slug` (string)
- `permalink` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `type` (string)
- `status` (string)
- `featured` (boolean)
- `catalog_visibility` (string)
- `description` (string)
- `short_description` (string)
- `sku` (string)
- `price` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `price_html` (string)
- `on_sale` (boolean)
- `purchasable` (boolean)
- `total_sales` (integer)
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
- `backorders_allowed` (boolean)
- `backordered` (boolean)
- `sold_individually` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_required` (boolean)
- `shipping_taxable` (boolean)
- `shipping_class` (string)
- `shipping_class_id` (integer)
- `reviews_allowed` (boolean)
- `average_rating` (string)
- `rating_count` (integer)
- `related_ids` (array)
- `upsell_ids` (array)
- `cross_sell_ids` (array)
- `parent_id` (integer)
- `purchase_note` (string)
- `categories` (array)
- `tags` (array)
- `images` (array)
- `attributes` (array)
- `default_attributes` (array)
- `variations` (array)
- `grouped_products` (array)
- `menu_order` (integer)
- `meta_data` (array)

### deleteproductbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)
- `force` (boolean)

### createproductvariation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)
- `id` (integer)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `description` (string)
- `permalink` (string)
- `sku` (string)
- `price` (string)
- `regular_price` (string)
- `sale_price` (string)
- `date_on_sale_from` (string)
- `date_on_sale_from_gmt` (string)
- `date_on_sale_to` (string)
- `date_on_sale_to_gmt` (string)
- `on_sale` (boolean)
- `status` (string)
- `purchasable` (boolean)
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
- `backorders_allowed` (boolean)
- `backordered` (boolean)
- `weight` (string)
- `dimensions` (object)
- `shipping_class` (string)
- `shipping_class_id` (integer)
- `image` (object)
- `attributes` (array)
- `menu_order` (integer)
- `meta_data` (array)

### listallproductvariations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)

### retrieveproductvariationbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `productId` (integer)
- `variationId` (integer)

### createorder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `parent_id` (integer)
- `number` (string)
- `order_key` (string)
- `created_via` (string)
- `version` (string)
- `status` (string)
- `currency` (string)
- `date_created` (string)
- `date_created_gmt` (string)
- `date_modified` (string)
- `date_modified_gmt` (string)
- `discount_total` (string)
- `discount_tax` (string)
- `shipping_total` (string)
- `shipping_tax` (string)
- `cart_tax` (string)
- `total` (string)
- `total_tax` (string)
- `prices_include_tax` (boolean)
- `customer_id` (integer)
- `customer_ip_address` (string)
- `customer_user_agent` (string)
- `customer_note` (string)
- `billing` (object)
- `shipping` (object)
- `payment_method` (string)
- `payment_method_title` (string)
- `transaction_id` (string)
- `date_paid` (string)
- `date_paid_gmt` (string)
- `date_completed` (string)
- `date_completed_gmt` (string)
- `cart_hash` (string)
- `meta_data` (array)
- `line_items` (array)
- `tax_lines` (array)
- `shipping_lines` (array)
- `fee_lines` (array)
- `coupon_lines` (array)
- `refunds` (array)
- `set_paid` (boolean)

### listallorders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `after` (string)
- `before` (string)
- `modified_after` (string)
- `status` (array)
- `order` (string)

### retrieveorderbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orderId` (integer)

### deleteorderbyid

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orderId` (integer)
- `force` (boolean)

### reportordertotalssummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### reportsalessummary

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `period` (string)
- `date_min` (string)
- `date_max` (string)
