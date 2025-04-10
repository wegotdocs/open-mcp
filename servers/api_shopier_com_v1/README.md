# @open-mcp/api_shopier_com_v1

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/api_shopier_com_v1 add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/api_shopier_com_v1 add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/api_shopier_com_v1 add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_shopier_com_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_shopier_com_v1"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_shopier_com_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_shopier_com_v1`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### get_products

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dateStart": z.string().describe("Show products listed at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show products listed at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "productType": z.enum(["physical","digital"]).describe("Filter by a product type. ").optional(),
  "shippingPayer": z.enum(["buyerPays","sellerPays"]).describe("Filter by who pays for shipping. ").optional(),
  "stockStatus": z.enum(["inStock","outOfStock"]).describe("Filter by a stock status.").optional(),
  "categoryId": z.array(z.string()).describe("Filter by product categories by specifying category ID(s).").optional(),
  "selectionId": z.array(z.string()).describe("Filter by product selections by specifying selection ID(s).").optional(),
  "discount": z.boolean().describe("Filter by products with discounts.").optional(),
  "customListing": z.boolean().describe("Filter by customized listings.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### post_products

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("Title of the product."),
  "description": z.string().describe("Detailed description of the product.").optional(),
  "type": z.enum(["physical","digital"]).describe("Type of the product."),
  "media": z.array(z.object({ "type": z.literal("image").describe("Type of media file."), "url": z.string().describe("The URL of media file. Formats supported: jpg, jpeg, png, bmp."), "placement": z.number().int().gte(1).lte(5).describe("Ranking of the media file in product pages. Send \"1\" for the primary media file.") })).describe("Details of product media files. There can be a maximum of 5 media files."),
  "priceData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the price information."),
  "stockQuantity": z.number().int().describe("Stock quantity of the product.").optional(),
  "shippingPayer": z.enum(["sellerPays","buyerPays"]).describe("Represents who pays for shipping during dispatch or delivery."),
  "categories": z.array(z.object({ "categoryId": z.string().describe("The ID of category.").optional() })).describe("List of categories that product belongs to.").optional(),
  "variants": z.array(z.object({ "selectionId": z.array(z.string()).describe("The ID of selection.").optional(), "stockQuantity": z.number().int().describe("Stock quantity of the variant.").optional() })).describe("List of variants of the product.").optional(),
  "options": z.array(z.object({ "optionId": z.string().describe("The ID of option.").optional(), "optionTitle": z.string().describe("The title of option.").optional(), "optionPrice": z.string().describe("The price of option.").optional() })).describe("List of options of the product. There can be a maximum of 3 options.").optional(),
  "singleOption": z.boolean().describe("Represents whether a single option or multiple options can be selected during chekout.").optional(),
  "customListing": z.boolean().describe("Represents whether the listing is a custom or standard one.").optional(),
  "customNote": z.string().describe("Overrides the placeholder for note to seller field. Used for collecting a custom information from the buyer during checkout.").optional(),
  "placementScore": z.number().int().gte(1).describe("Placement score of the product. Products with higher values are placed first in the store.").optional(),
  "dispatchDuration": z.number().int().gte(1).lte(3).describe("Dispatch duration in terms of days from seller to shipping company.").optional()
}
```

### parameters_products_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_products_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_products_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_products_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("Title of the product.").optional(),
  "description": z.string().describe("Detailed description of the product.").optional(),
  "type": z.enum(["physical","digital"]).describe("Type of the product.").optional(),
  "media": z.array(z.object({ "type": z.literal("image").describe("Type of media file.").optional(), "url": z.string().describe("he URL of media file. Formats supported: jpg, jpeg, png, bmp.").optional(), "placement": z.number().int().gte(1).lte(5).describe("Ranking of the media file in product pages. Send \"1\" for the primary media file.").optional() })).describe("Details of product media files. There can be a maximum of 5 media files.").optional(),
  "priceData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the price information.").optional(),
  "stockQuantity": z.number().int().describe("Stock quantity of the product.").optional(),
  "shippingPayer": z.enum(["sellerPays","buyerPays"]).describe("Represents who pays for shipping during dispatch or delivery.").optional(),
  "categories": z.array(z.object({ "categoryId": z.string().describe("The ID of category.").optional() })).describe("List of categories that product belongs to.").optional(),
  "variants": z.array(z.object({ "selectionId": z.array(z.string()).describe("The ID of selection.").optional(), "stockQuantity": z.number().int().describe("Stock quantity of the variant.").optional() })).describe("List of variants of the product.").optional(),
  "options": z.array(z.object({ "optionId": z.string().describe("The ID of option.").optional(), "optionTitle": z.string().describe("The title of option.").optional(), "optionPrice": z.string().describe("The price of option.").optional() })).describe("List of options of the product. There can be a maximum of 3 options.").optional(),
  "singleOption": z.boolean().describe("Represents whether a single option or multiple options can be selected during chekout.").optional(),
  "customListing": z.boolean().describe("Represents whether the listing is a custom or standard one.").optional(),
  "customNote": z.string().describe("Overrides the placeholder for note to seller field. Used for collecting a custom information from the buyer during checkout.").optional(),
  "placementScore": z.number().int().gte(1).describe("Placement score of the product. Products with higher values are placed first in the store.").optional(),
  "dispatchDuration": z.number().int().gte(1).lte(3).describe("Dispatch duration in terms of days from seller to shipping company.").optional()
}
```

### get_categories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["asc","desc"]).describe("Sort results by their placements in storefront.").optional()
}
```

### post_categories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the product category."),
  "placement": z.number().int().gte(1).describe("Ranking of the product category in the shop. Accepts values in accordance with the number of categories in the shop. When an allocated  placement value is send, following placement values shift.").optional()
}
```

### parameters_categories_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_categories_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_categories_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_categories_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the product category.").optional(),
  "placement": z.number().int().gte(1).describe("Ranking of the product category in the shop. Accepts values in accordance with the number of categories in the shop. When an allocated  placement value is send, following placement values shift.").optional()
}
```

### get_variations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### post_variations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the product variation.")
}
```

### parameters_variations_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_variations_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_variations_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_variations_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the product variation.").optional()
}
```

### get_selections

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "variationId": z.array(z.string()).describe("Filter by product variations by specifying variation ID(s).").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional()
}
```

### post_selections

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "variationId": z.string().describe("The ID of the product variation."),
  "title": z.string().describe("The title of the product selection, a subset of product variation.")
}
```

### parameters_selections_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_selections_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_selections_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the product selection, a subset of product variation.").optional()
}
```

### delete_selections_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_discounts_codes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### post_discounts_codes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "code": z.string().describe("The discount code for the buyers used at the checkout."),
  "type": z.enum(["amount","percent"]).describe("Type of the discount."),
  "amountOff": z.string().describe("The absolute value of the discount amount. Required when the discount code type is \"amount\".").optional(),
  "percentOff": z.string().describe("The percentage rate of the discount. Required when the discount code type is \"percent\".").optional(),
  "amountMinimum": z.string().describe("Required minimum order amount for the discount code to be applicable."),
  "currency": z.enum(["TRY","USD","EUR"]).describe("Currency of the discount code."),
  "numAvailable": z.number().int().describe("Number of discount codes that can be used."),
  "expiresAt": z.string().describe("Expiry date of the discount code. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).")
}
```

### parameters_discounts_codes_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_discounts_codes_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_discounts_codes_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_discounts_codes_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "numAvailable": z.number().int().describe("Number of discount codes that can be used.").optional(),
  "expiresAt": z.string().describe("Expiry date of the discount code. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional()
}
```

### get_discounts_automatic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### post_discounts_automatic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("The title of the automatic discount."),
  "scope": z.enum(["all","selectedProducts","selectedCategories"]).describe("The scope of the automatic discount. Automatic discounts can be applied for all or some of the products or categories."),
  "productIds": z.array(z.string()).describe("List of product IDs the automatic discount is applicable. Used when the scope is \"all\" or \"selectedProducts\".").optional(),
  "categoryIds": z.array(z.string()).describe("List of category IDs the automatic discount is applicable. Used when the scope is \"all\" or \"selectedCategories\".").optional(),
  "type": z.enum(["percent","amount"]).describe("Type of the discount."),
  "amountOff": z.string().describe("The absolute value of the discount amount. Used when the automatic discount type is \"amount\".").optional(),
  "percentOff": z.string().describe("The percentage rate of the discount. Used when the automatic discount type is \"percent\".").optional(),
  "currency": z.enum(["TRY","USD","EUR"]).describe("Currency of the automatic discount."),
  "requirement": z.enum(["amount","quantity"]).describe("The requirement type of the automatic discount."),
  "amountMinimum": z.string().describe("The minimum purchase amount for the automatic discount to be applicable. Used when the automatic discount requirement is \"amount\".").optional(),
  "quantityMinimum": z.number().int().describe("The minimum number of items to be purchased for the automatic discount to be applicable. Used when the automatic discount requirement is \"quantity\".").optional(),
  "startsAt": z.string().describe("Start date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300)."),
  "expiresAt": z.string().describe("Expiry date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).")
}
```

### parameters_discounts_automatic_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_discounts_automatic_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_discounts_automatic_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "startsAt": z.string().describe("Start date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional(),
  "expiresAt": z.string().describe("Expiry date of the automatic discount. yyyy-MM-ddZ format is used (e.g., 2022-07-21+0300).").optional()
}
```

### delete_discounts_automatic_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_orders

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dateStart": z.string().describe("Show orders created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show orders created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "fulfillmentStatus": z.enum(["unfulfilled","fulfilled"]).describe("Filter by fulfillment status.").optional(),
  "refundType": z.enum(["none","partial","full"]).describe("Filter by refund type.").optional(),
  "customerEmail": z.string().describe("Filter by a customer's email address.").optional(),
  "customerPhone": z.string().describe("Filter by a customer's phone number.").optional(),
  "productId": z.string().describe("Filter by a product by specifying product ID.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### get_orders_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### parameters_orders_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_orders_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fulfillments": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the delivery.").optional(),
  "shippingInfo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nBuyer's shipping address and details.").optional()
}
```

### get_orders_transactions_orderid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### parameters_orders_transactions_orderid_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_shippings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "status": z.enum(["shipped","notShipped"]).describe("Filter by a shipping status.").optional(),
  "type": z.enum(["firstShipment","secondShipment","returnShipment"]).describe("Filter by a shipping type.").optional(),
  "company": z.enum(["yurtici","mng","ptt"]).describe("Filter by a shipping company.").optional(),
  "dateCreatedStart": z.string().describe("Show shipping codes that are created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateCreatedEnd": z.string().describe("Show shipping codes that are created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "dateDispatchedStart": z.string().describe("Show shippings that are dispatched at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateDispatchedEnd": z.string().describe("Show shippings that are dispatched at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### post_shippings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "orderId": z.string().describe("The ID of the order."),
  "company": z.enum(["yurtici","mng","ptt"]).describe("Shipping company."),
  "type": z.enum(["firstShipment","secondShipment","returnShipment"]).describe("Type of the shipping. firstShipment and secondShipment are used for seller to buyer direction, returnShipment is used for buyer to seller direction.").optional()
}
```

### parameters_shippings_code_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_shippings_code

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### delete_shippings_code

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_balance

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_balance_transactions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dateStart": z.string().describe("Show balance transactions created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show balance transactions created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300) ").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### parameters_balance_transactions_orderid_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_balance_transactions_orderid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_payouts

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dateStart": z.string().describe("Show payouts created at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300) ").optional(),
  "dateEnd": z.string().describe("Show payouts created at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### parameters_payouts_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_payouts_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_payouts_transactions_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### parameters_payouts_transactions_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_refunds

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dateStart": z.string().describe("Show refunds processed at or after datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-21T13:24:51+0300)").optional(),
  "dateEnd": z.string().describe("Show refunds processed at or before datetime. yyyy-MM-ddTHH:mm:ssZ format is used (e.g., 2022-07-25T13:24:51+0300)").optional(),
  "orderId": z.string().describe("Filter by order ID.").optional(),
  "status": z.enum(["pending","failed","succeeded"]).describe("Filter by refund status.").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to be returned in result set.").optional(),
  "page": z.number().int().gte(1).describe("Current page of the collection.").optional(),
  "sort": z.enum(["dateAsc","dateDesc"]).describe("Sort results by date. ").optional()
}
```

### post_refunds

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "orderId": z.string().describe("The ID of the order."),
  "amount": z.string().describe("Amount to be refunded."),
  "note": z.string().describe("Seller's note to buyer about the refund.").optional()
}
```

### parameters_refunds_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_refunds_id

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_shop_owner

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_shop_settings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### put_shop_settings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "title": z.string().describe("Title of the shop. This the brief heading located at the shop's main page.").optional(),
  "slogan": z.string().describe("Slogan or catchword located at the shop's main page.").optional(),
  "announcement": z.string().describe("Announcement to buyers located at the shop's main page.").optional(),
  "confirmation": z.string().describe("Order confirmation text. Is shown to buyers when an order is created after a successful payment.").optional(),
  "email": z.string().describe("Email address located at the shop's main page. This can be different than the seller account's email.").optional(),
  "phone": z.string().describe("Phone number located at the shop's main page. This can be different than the seller account's phone number.").optional(),
  "access": z.boolean().describe("Represents whether the shop URL is publicly accessible.").optional(),
  "cart": z.boolean().describe("Represents whether the shopping cart is used during checkouts. If the cart value is FALSE multiple products can not be purchased at the shop, only a single product can be purchased for each order.").optional(),
  "mobileView": z.string().describe("Shop's appearance for mobile devices. Products can be placed either on a single column or on double columns.").optional(),
  "filter": z.boolean().describe("Represents whether the product filter options are present or not.").optional(),
  "stockOutProducts": z.boolean().describe("Represents whether the out of stock products are shown to buyers.").optional(),
  "language": z.string().describe("Language selection of the shop.").optional(),
  "vacation": z.boolean().describe("Represents whether the seller accepts orders. TRUE if the shop is closed for orders, FALSE if the shop is open for orders.").optional()
}
```
