# @open-mcp/quickbooks_api_intuit_com

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add quickbooks_api_intuit_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add quickbooks_api_intuit_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add quickbooks_api_intuit_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "quickbooks_api_intuit_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/quickbooks_api_intuit_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/quickbooks_api_intuit_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/quickbooks_api_intuit_com`
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

### accountcreate

**Environment variables**



**Input schema**

```ts
{
  "AccountSubType": z.string().optional(),
  "AccountType": z.string().optional(),
  "Active": z.boolean().optional(),
  "Classification": z.string().optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "CurrentBalance": z.number().optional(),
  "CurrentBalanceWithSubAccounts": z.number().optional(),
  "FullyQualifiedName": z.string().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SubAccount": z.boolean().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_account

**Environment variables**



**Input schema**

```ts
{}
```

### accountreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_account_id_

**Environment variables**



**Input schema**

```ts
{}
```

### accountreadall

**Environment variables**



**Input schema**

```ts
{
  "query": z.string().optional()
}
```

### parameters_v3_company_companyid_query

**Environment variables**



**Input schema**

```ts
{}
```

### attachablecreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "AttachableRef": z.array(z.object({ "EntityRef": z.object({ "type": z.string().optional(), "value": z.string().optional() }).optional(), "IncludeOnSend": z.boolean().optional() })).optional(),
  "Id": z.string().optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "Note": z.string().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_attachable

**Environment variables**



**Input schema**

```ts
{}
```

### attachablereadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_attachable_id_

**Environment variables**



**Input schema**

```ts
{}
```

### uploadattachments

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_upload

**Environment variables**



**Input schema**

```ts
{}
```

### batch

**Environment variables**



**Input schema**

```ts
{
  "BatchItemRequest": z.array(z.object({ "Invoice": z.object({ "Id": z.string().optional(), "SyncToken": z.string().optional() }).optional(), "Query": z.string().optional(), "SalesReceipt": z.object({ "Id": z.string().optional(), "PrivateNote": z.string().optional(), "SyncToken": z.string().optional(), "domain": z.string().optional(), "sparse": z.boolean().optional() }).optional(), "Vendor": z.object({ "DisplayName": z.string().optional() }).optional(), "bId": z.string().optional(), "operation": z.string().optional() })).optional()
}
```

### parameters_v3_company_companyid_batch

**Environment variables**



**Input schema**

```ts
{}
```

### billcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_bill

**Environment variables**



**Input schema**

```ts
{}
```

### billgetbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_bill_id_

**Environment variables**



**Input schema**

```ts
{}
```

### billpaymentcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "CheckPayment": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "Line": z.array(z.object({ "Amount": z.number().optional(), "LinkedTxn": z.array(z.object({ "TxnId": z.string().optional(), "TxnType": z.string().optional() })).optional() })).optional(),
  "PayType": z.string().optional(),
  "PrivateNote": z.string().optional(),
  "TotalAmt": z.number().optional(),
  "VendorRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_v3_company_companyid_billpayment

**Environment variables**



**Input schema**

```ts
{}
```

### billpaymentreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_billpayment_id_

**Environment variables**



**Input schema**

```ts
{}
```

### cdcread

**Environment variables**



**Input schema**

```ts
{
  "entities": z.string().optional(),
  "changedSince": z.string().optional()
}
```

### parameters_v3_company_companyid_cdc

**Environment variables**



**Input schema**

```ts
{}
```

### classcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_class

**Environment variables**



**Input schema**

```ts
{}
```

### classreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_class_id_

**Environment variables**



**Input schema**

```ts
{}
```

### companyinforeadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_companyinfo_companyid_

**Environment variables**



**Input schema**

```ts
{}
```

### creditmemocreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "TxnDate": z.string().describe("Transaction Date").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock the object for use by one app at a time.").optional(),
  "domain": z.string().describe("Domain of the class.").optional(),
  "PrintStatus": z.string().describe("Print status of the credit memo.").optional(),
  "TotalAmt": z.number().describe("Total amount of the credit memo.").optional(),
  "ClassRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "SalesTermRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "CustomerRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "DocNumber": z.string().describe("Document number of the credit memo.").optional(),
  "PrivateNote": z.string().describe("Private note of the credit memo.").optional(),
  "CustomerMemo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustomer memo of the credit memo.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "ShipAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPhysical address").optional(),
  "DepartmentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "EmailStatus": z.string().describe("Email status of the credit memo.").optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPhysical address").optional(),
  "HomeBalance": z.number().describe("Home balance of the credit memo.").optional(),
  "RemainingCredit": z.number().describe("Remaining credit of the credit memo.").optional(),
  "RecurDataRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "TaxExemptionRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "Balance": z.number().describe("Balance of the credit memo.").optional(),
  "HomeTotalAmt": z.number().describe("Home total amount of the credit memo.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.string().optional(), "Line": z.string().optional(), "GroupItemRef": z.string().optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.string().optional(), "UnitPrice": z.string().optional(), "ItemRef": z.string().optional(), "ClassRef": z.string().optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.string().optional(), "TaxCodeRef": z.string().optional(), "DiscountAccountRef": z.string().optional(), "PercentBased": z.string().optional(), "DiscountPercent": z.string().optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional()
}
```

### parameters_v3_company_companyid_creditmemo

**Environment variables**



**Input schema**

```ts
{}
```

### creditmemoreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_creditmemo_id_

**Environment variables**



**Input schema**

```ts
{}
```

### customercreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock an object for use by one app at a time. As soon as an application modifies an object, its SyncToken is incremented. Attempts to modify an object specifying an older SyncToken fails. Only the latest version of the object is maintained by QuickBooks Online.").optional(),
  "DisplayName": z.string().describe("The name of the person or organization as displayed. Must be unique across all Customer, Vendor, and Employee objects. Cannot be removed with sparse update. If not supplied, the system generates DisplayName by concatenating customer name components supplied in the request from the following list- Title, GivenName, MiddleName, FamilyName, and Suffix.").optional(),
  "Title": z.string().describe("Title of the person. This tag supports i18n, all locales. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required.").optional(),
  "GivenName": z.string().describe("Given name or first name of a person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required.").optional(),
  "MiddleName": z.string().describe("Middle name of the person. The person can have zero or more middle names. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required.").optional(),
  "Suffix": z.string().describe("Suffix of the name. For example, Jr. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required.").optional(),
  "FamilyName": z.string().describe("Family name or the last name of the person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required.").optional(),
  "PrimaryEmailAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPrimary email address.").optional(),
  "ResaleNum": z.string().describe("Resale number or some additional info about the customer.").optional(),
  "SecondaryTaxIdentifier": z.string().describe("Also called UTR No. in ( UK ) , CST Reg No. ( IN ) also represents the tax registration number of the Person or Organization. This value is masked in responses, exposing only last five characters. For example, the ID of 123-45-6789 is returned as XXXXXX56789.").optional(),
  "ARAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the accounts receivable account to be used for this customer. Each customer must have his own AR account. Applicable for France companies, only. Available when endpoint is evoked with the minorversion=3 query parameter. Query the Account name list resource to determine the appropriate Account object for this reference, where Account.AccountType=Accounts Receivable. Use Account.Id and Account.Name from that object for ARAccountRef.value and ARAccountRef.name, respectively.").optional(),
  "DefaultTaxCodeRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a default tax code associated with this Customer object. Reference is valid if Customer.Taxable is set to true; otherwise, it is ignored. If automated sales tax is enabled (Preferences.TaxPrefs.PartnerTaxEnabled is set to true) the default tax code is set by the system and can not be overridden. Query the TaxCode name list resource to determine the appropriate TaxCode object for this reference. Use TaxCode.Id and TaxCode.Name from that object for DefaultTaxCodeRef.value and DefaultTaxCodeRef.name, respectively.").optional(),
  "PreferredDeliveryMethod": z.string().describe("Preferred delivery method. Values are Print, Email, or None.").optional(),
  "GSTIN": z.string().describe("GSTIN is an identification number assigned to every GST registered business.").optional(),
  "SalesTermRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a SalesTerm associated with this Customer object. Query the Term name list resource to determine the appropriate Term object for this reference. Use Term.Id and Term.Name from that object for SalesTermRef.value and SalesTermRef.name, respectively.").optional(),
  "CustomerTypeRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the customer type assigned to a customer. This field is only returned if the customer is assigned a customer type.").optional(),
  "Fax": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFax number.").optional(),
  "BillWithParent": z.boolean().describe("If true, this Customer object is billed with its parent. If false, or null the customer is not to be billed with its parent. This attribute is valid only if this entity is a Job or sub Customer.").optional(),
  "Mobile": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPrimary phone number.").optional(),
  "PrimaryPhone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nMobile phone number.").optional(),
  "AlternatePhone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAlternate phone number.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the entity. The MetaData values are set by Data Services and are read only for all applications.").optional(),
  "ParentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA reference to a Customer object that is the immediate parent of the Sub-Customer/Job in the hierarchical Customer:Job list. Required for the create operation if this object is a sub-customer or Job. Query the Customer name list resource to determine the appropriate Customer object for this reference. Use Customer.Id and Customer.DisplayName from that object for ParentRef.value and ParentRef.name, respectively.").optional(),
  "WebAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nWebsite address.").optional(),
  "ShipAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefault shipping address. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a PaymentMethod associated with this Customer object. Query the PaymentMethod name list resource to determine the appropriate PaymentMethod object for this reference. Use PaymentMethod.Id and PaymentMethod.Name from that object for PaymentMethodRef.value and PaymentMethodRef.name, respectively.").optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefault billing address. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "Job": z.boolean().describe("If true, this is a Job or sub-customer. If false or null, this is a top level customer, not a Job or sub-customer.").optional(),
  "BalanceWithJobs": z.number().describe("Cumulative open balance amount for the Customer (or Job) and all its sub-jobs. Cannot be written to QuickBooks.").optional(),
  "OpenBalanceDate": z.string().describe("Date of the Open Balance for the create operation. Write-on-create.").optional(),
  "Taxable": z.boolean().describe("If true, transactions for this customer are taxable. Default behavior with minor version 10 and above- true, if DefaultTaxCodeRef is defined or false if TaxExemptionReasonId is set.").optional(),
  "Notes": z.string().describe("Free form text describing the Customer.").optional(),
  "Active": z.boolean().describe("If true, this entity is currently enabled for use by QuickBooks. If there is an amount in Customer.Balance when setting this Customer object to inactive through the QuickBooks UI, a CreditMemo balancing transaction is created for the amount.").optional(),
  "CompanyName": z.string().describe("The name of the company associated with the person or organization.").optional(),
  "Balance": z.number().describe("Specifies the open balance amount or the amount unpaid by the customer. For the create operation, this represents the opening balance for the customer. When returned in response to the query request it represents the current open balance (unpaid amount) for that customer. Write-on-create.").optional(),
  "IsProject": z.boolean().describe("If true, indicates this is a Project.").optional(),
  "Source": z.string().describe("The Source type of the transactions created by QuickBooks Commerce. Valid values include  QBCommerce").optional(),
  "PrimaryTaxIdentifier": z.string().describe("Also called Tax Reg. No in ( UK ) , ( CA ) , ( IN ) , ( AU ) represents the tax ID of the Person or Organization. This value is masked in responses, exposing only last five characters. For example, the ID of 123-45-6789 is returned as XXXXXX56789.").optional(),
  "GSTRegistrationType": z.string().describe("For the filing of GSTR, transactions need to be classified depending on the type of customer to whom the sale is done. To facilitate this, we have introduced a new field as 'GST registration type'. Possible values are listed below- GST_REG_REG GST registered- Regular. Customer who has a business which is registered under GST and has a GSTIN (doesn’t include customers registered under composition scheme, as an SEZ or as EOU's, STP's EHTP's etc.). GST_REG_COMP GST registered-Composition. Customer who has a business which is registered under the composition scheme of GST and has a GSTIN. GST_UNREG GST unregistered. Customer who has a business which is not registered under GST and does not have a GSTIN. CONSUMER Consumer. Customer who is not registered under GST and is the final consumer of the service or product sold. OVERSEAS Overseas. Customer who has a business which is located out of India. SEZ SEZ. Customer who has a business which is registered under GST, has a GSTIN and is located in a SEZ or is a SEZ Developer. DEEMED Deemed exports- EOU's, STP's EHTP's etc. Customer who has a business which is registered under GST and falls in the category of companies (EOU's, STP's EHTP's etc.), to which supplies are made they are termed as deemed exports.").optional(),
  "PrintOnCheckName": z.string().describe("Name of the person or organization as printed on a check. If not provided, this is populated from DisplayName. Constraints- Cannot be removed with sparse update.").optional(),
  "FullyQualifiedName": z.string().describe("Fully qualified name of the object. The fully qualified name prepends the topmost parent, followed by each sub element separated by colons. Takes the form of Customer:Job:Sub-job. System generated. Limited to 5 levels.").optional(),
  "Level": z.number().int().describe("Specifies the level of the hierarchy in which the entity is located. Zero specifies the top level of the hierarchy; anything above will be level with respect to the parent. Constraints:up to 5 levels").optional(),
  "TaxExemptionReasonId": z.string().describe("The tax exemption reason associated with this customer object. Applicable if automated sales tax is enabled (Preferences.TaxPrefs.PartnerTaxEnabled is set to true) for the company. Set TaxExemptionReasonId to one of the following- - Id   Reason 1.  Federal government 2.   State government 3.   Local government 4.   Tribal government 5.   Charitable organization 6.   Religious organization 7.   Educational organization 8.   Hospital 9.  Resale 10. Direct pay permit 11. Multiple points of use 12. Direct mail 13. Agricultural production 14. Industrial production / manufacturing 15. Foreign diplomat").optional()
}
```

### parameters_v3_company_companyid_customer

**Environment variables**



**Input schema**

```ts
{}
```

### customerreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_customer_id_

**Environment variables**



**Input schema**

```ts
{}
```

### departmentcreate

**Environment variables**



**Input schema**

```ts
{
  "Active": z.boolean().optional(),
  "FullyQualifiedName": z.string().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SubDepartment": z.boolean().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_department

**Environment variables**



**Input schema**

```ts
{}
```

### departmentreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_department_id_

**Environment variables**



**Input schema**

```ts
{}
```

### depositcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "DetailType": z.literal("DepositLineDetail").optional(), "DepositLineDetail": z.object({ "AccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PaymentMethodRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "CheckNum": z.string().describe("The check number of the deposit line.").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TxnType": z.enum(["APCreditCard","ARRefundCreditCard","Bill","BillPaymentCheck","BuildAssembly","CarryOver","Charge","Check","CreditMemo","Deposit","EFPLiabilityCheck","EFTBillPayment","EFTRefund","Estimate","InventoryAdjustment","InventoryTransfer","Invoice","ItemReceipt","JournalEntry"]).describe("The type of transaction. Valid values include Payment, SalesReceipt, and JournalEntry.").optional(), "Entity": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "Project": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "Description": z.string().describe("A description of the deposit line").optional() }).optional(), "Amount": z.number().describe("The amount of the deposit line.").optional(), "ProjectRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "Description": z.string().describe("A description of the deposit line").optional(), "LineNum": z.number().describe("The line number of the deposit line.").optional(), "LinkedTxn": z.array(z.object({ "TxnId": z.string().describe("Transaction Id of the related transaction.").optional(), "TxnType": z.string().describe("Transaction type of the linked object.").optional(), "TxnLineId": z.string().describe("Required for Deposit and Bill entities. -The line number of a specific line of the linked transaction. - If supplied, the TxnId and TxnType attributes of the linked transaction must also be populated.").optional() })).describe("Zero or more related transactions to this Deposit object. The following linked relationships are supported- Links to Estimate and TimeActivity objects can be established directly to this Deposit object with UI or with the API. Create, Read, Update, and Query operations are avaialble at the API level for these types of links. Only one link can be made to an Estimate. Progress Invoicing is not supported via the API. Links to expenses incurred on behalf of the customer are returned in the response with LinkedTxn.TxnType set to ReimburseCharge, ChargeCredit or StatementCharge corresponding to billable customer expenses of type Cash, Delayed Credit, and Delayed Charge, respectively. Links to these types of transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Links to payments applied to an Deposit object are returned in the response with LinkedTxn.TxnType set to Payment. Links to Payment transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Use LinkedTxn.TxnId as the ID in a separate read request for the specific resource to retrieve details of the linked object.").optional() })).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock an object for use by one app at a time. As soon as an application modifies an object, its SyncToken is incremented. Attempts to modify an object specifying an older SyncToken fails. Only the latest version of the object is maintained by QuickBooks Online.").optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the currency in which all amounts on the associated transaction are expressed. This must be defined if multicurrency is enabled for the company. Multicurrency is enabled for the company if Preferences.MultiCurrencyEnabled is set to true. Read more about multicurrency support here. Applicable if multicurrency is enabled for the company.").optional(),
  "PrivateNote": z.string().describe("User entered, organization-private note about the transaction. This note does not appear on the invoice to the customer. This field maps to the Statement Memo field on the Invoice form in the QuickBooks Online UI.").optional(),
  "DepositToAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "TxnDate": z.string().describe("The date entered by the user when this transaction occurred. yyyy/MM/dd is the valid date format. For posting transactions, this is the posting date that affects the financial statements. If the date is not supplied, the current date on the server is used. Sort order is ASC by default.").optional(),
  "TxnSource": z.string().describe("Used internally to specify originating source of a credit card transaction.").optional(),
  "DepartmentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional()
}
```

### parameters_v3_company_companyid_deposit

**Environment variables**



**Input schema**

```ts
{}
```

### depositreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_deposit_id_

**Environment variables**



**Input schema**

```ts
{}
```

### employeecreate

**Environment variables**



**Input schema**

```ts
{
  "Active": z.boolean().optional(),
  "BillableTime": z.boolean().optional(),
  "DisplayName": z.string().optional(),
  "FamilyName": z.string().optional(),
  "GivenName": z.string().optional(),
  "Id": z.string().optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrimaryAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrimaryPhone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrintOnCheckName": z.string().optional(),
  "SSN": z.string().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_employee

**Environment variables**



**Input schema**

```ts
{}
```

### employeereadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_employee_id_

**Environment variables**



**Input schema**

```ts
{}
```

### estimatecreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_estimate

**Environment variables**



**Input schema**

```ts
{}
```

### estimatereadbyid

**Environment variables**



**Input schema**

```ts
{
  "estimateId": z.string()
}
```

### parameters_v3_company_companyid_estimate_estimateid_

**Environment variables**



**Input schema**

```ts
{}
```

### exchangerategetdetails

**Environment variables**



**Input schema**

```ts
{
  "sourcecurrencycode": z.string().optional(),
  "asofdate": z.string().optional()
}
```

### parameters_v3_company_companyid_exchangerate

**Environment variables**



**Input schema**

```ts
{}
```

### invoicecreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "minorversion": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.string().optional(), "Line": z.string().optional(), "GroupItemRef": z.string().optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.string().optional(), "UnitPrice": z.string().optional(), "ItemRef": z.string().optional(), "ClassRef": z.string().optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.string().optional(), "TaxCodeRef": z.string().optional(), "DiscountAccountRef": z.string().optional(), "PercentBased": z.string().optional(), "DiscountPercent": z.string().optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(),
  "CustomerRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a customer or job. Query the Customer name list resource to determine the appropriate Customer object for this reference. Use Customer.Id and Customer.DisplayName from that object for CustomerRef.value and CustomerRef.name, respectively.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the payment method associated with the transaction. Query the PaymentMethod name list resource to determine the appropriate PaymentMethod object for this reference. Use PaymentMethod.Id and PaymentMethod.Name from that object for PaymentMethodRef.value and PaymentMethodRef.name, respectively.").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock an object for use by one app at a time. As soon as an application modifies an object, its SyncToken is incremented. Attempts to modify an object specifying an older SyncToken fails. Only the latest version of the object is maintained by QuickBooks Online.").optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the currency in which all amounts on the associated transaction are expressed. This must be defined if multicurrency is enabled for the company. Multicurrency is enabled for the company if Preferences.MultiCurrencyEnabled is set to true. Read more about multicurrency support here. Applicable if multicurrency is enabled for the company.").optional(),
  "DocNumber": z.string().describe("Reference number for the transaction. If not explicitly provided at create time, this field is populated based on the setting of Preferences:CustomTxnNumber as follows- If Preferences:CustomTxnNumber is true a custom value can be provided. If no value is supplied, the resulting DocNumber is null. If Preferences:CustomTxnNumber is false, resulting DocNumber is system generated by incrementing the last number by 1. If Preferences:CustomTxnNumber is false then do not send a value as it can lead to unwanted duplicates. If a DocNumber value is sent for an Update operation, then it just updates that particular invoice and does not alter the internal system DocNumber. Note- DocNumber is an optional field for all locales except France. For France locale if Preferences:CustomTxnNumber is enabled it will not be automatically generated and is a required field. If a duplicate DocNumber needs to be supplied, add the query parameter name/value pair, include=allowduplicatedocnum to the URI.").optional(),
  "BillEmail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the e-mail address where the invoice is sent. If EmailStatus=NeedToSend, BillEmailis a required input.").optional(),
  "TxnDate": z.string().describe("The date entered by the user when this transaction occurred. yyyy/MM/dd is the valid date format. For posting transactions, this is the posting date that affects the financial statements. If the date is not supplied, the current date on the server is used. Sort order is ASC by default.").optional(),
  "ShipFromAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the address where the goods are shipped from. For transactions without shipping, it represents the address where the sale took place. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "ShipDate": z.string().describe("Date for delivery of goods or services.").optional(),
  "TrackingNum": z.string().describe("Shipping provider's tracking number for the delivery of the goods associated with the transaction.").optional(),
  "ClassRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the Class associated with the transaction. Available if Preferences.AccountingInfoPrefs.ClassTrackingPerTxn is set to true. Query the Class name list resource to determine the appropriate Class object for this reference. Use Class.Id and Class.Name from that object for ClassRef.value and ClassRef.name, respectively.").optional(),
  "PrintStatus": z.string().describe("Printing status of the invoice. Valid values- NotSet, NeedToPrint, PrintComplete .").optional(),
  "SalesTermRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the sales term associated with the transaction. Query the Term name list resource to determine the appropriate Term object for this reference. Use Term.Id and Term.Name from that object for SalesTermRef.value and SalesTermRef.name, respectively.").optional(),
  "TxnSource": z.string().describe("Used internally to specify originating source of a credit card transaction.").optional(),
  "LinkedTxn": z.array(z.any()).describe("Zero or more related transactions to this Invoice object. The following linked relationships are supported- Links to Estimate and TimeActivity objects can be established directly to this Invoice object with UI or with the API. Create, Read, Update, and Query operations are avaialble at the API level for these types of links. Only one link can be made to an Estimate. Progress Invoicing is not supported via the API. Links to expenses incurred on behalf of the customer are returned in the response with LinkedTxn.TxnType set to ReimburseCharge, ChargeCredit or StatementCharge corresponding to billable customer expenses of type Cash, Delayed Credit, and Delayed Charge, respectively. Links to these types of transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Links to payments applied to an Invoice object are returned in the response with LinkedTxn.TxnType set to Payment. Links to Payment transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Use LinkedTxn.TxnId as the ID in a separate read request for the specific resource to retrieve details of the linked object.").optional(),
  "DepositToAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAccount to which money is deposited. Query the Account name list resource to determine the appropriate Account object for this reference, where Account.AccountType is Other Current Asset or Bank. Use Account.Id and Account.Name from that object for DepositToAccountRef.value and DepositToAccountRef.name, respectively. Before you can use this field ensure that the company allows deposits in their invoices first. This can be found by querying the Preferences endpoint. SalesFormsPrefs.AllowDeposit must be equal to true. If you do not specify this account the payment is applied to the Undeposited Funds account.").optional(),
  "GlobalTaxCalculation": z.string().describe("Method in which tax is applied. Allowed values are- TaxExcluded, TaxInclusive, and NotApplicable.").optional(),
  "AllowOnlineACHPayment": z.boolean().describe("Specifies if this invoice can be paid with online bank transfers and corresponds to the Free bank transfer online payment check box on the QuickBooks UI. Active when Preferences.SalesFormsPrefs.ETransactionPaymentEnabled is set to true. If set to true, allow invoice to be paid with online bank transfers. The Free bank transfer online payment check box is checked on the QuickBooks UI for this invoice. If set to false, online bank transfers are not allowed. The Free bank transfer online payment check box is not checked on the QuickBooks UI for this invoice.").optional(),
  "TransactionLocationType": z.string().describe("The account location. For France locale valid values include- WithinFrance FranceOverseas OutsideFranceWithEU OutsideEU For UAE, valid values include ABUDHABI AJMAN SHARJAH DUBAI FUJAIRAH RAS_AL_KHAIMAH UMM_AL_QUWAIN OTHER_GCC").optional(),
  "DueDate": z.string().describe("Date when the payment of the transaction is due. If date is not provided, the number of days specified in SalesTermRef added the transaction date will be used.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the object. The MetaData values are set by Data Services and are read only for all applications.").optional(),
  "PrivateNote": z.string().describe("User entered, organization-private note about the transaction. This note does not appear on the invoice to the customer. This field maps to the Statement Memo field on the Invoice form in the QuickBooks Online UI.").optional(),
  "BillEmailCc": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the carbon copy e-mail address where the invoice is sent. If not specified, this field is populated from that defined in Preferences.SalesFormsPrefs.SalesEmailCc. If this email address is invalid, carbon copy email is not sent.").optional(),
  "CustomerMemo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUser-entered message to the customer; this message is visible to end user on their transactions.").optional(),
  "EmailStatus": z.string().describe("Email status of the invoice. Valid values- NotSet, NeedToSend, EmailSent").optional(),
  "ExchangeRate": z.number().describe("The number of home currency units it takes to equal one unit of currency specified by CurrencyRef. Applicable if multicurrency is enabled for the company.").optional(),
  "Deposit": z.number().describe("The deposit made towards this invoice.").optional(),
  "TxnTaxDetail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThis data type provides information for taxes charged on the transaction as a whole. It captures the details sales taxes calculated for the transaction based on the tax codes referenced by the transaction. This can be calculated by QuickBooks business logic or you may supply it when adding a transaction. See Global tax model for more information about this element. If sales tax is disabled (Preferences.TaxPrefs.UsingSalesTax is set to false) then TxnTaxDetail is ignored and not stored.").optional(),
  "AllowOnlineCreditCardPayment": z.boolean().describe("Specifies if online credit card payments are allowed for this invoice and corresponds to the Cards online payment check box on the QuickBooks UI. Active when Preferences.SalesFormsPrefs.ETransactionPaymentEnabled is set to true. If set to true, allow invoice to be paid with online credit card payments. The Cards online payment check box is checked on the QuickBooks UI. If set to false, online credit card payments are not allowed. The Cards online payment check box is not checked on the QuickBooks UI.").optional(),
  "CustomField": z.array(z.any()).describe("One of, up to three custom fields for the transaction. Available for custom fields so configured for the company. Check Preferences.SalesFormsPrefs.CustomField and Preferences.VendorAndPurchasesPrefs.POCustomField for custom fields currenly configured. Click here to learn about managing custom fields.").optional(),
  "ShipAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the address where the goods must be shipped. If ShipAddris not specified, and a default Customer:ShippingAddr is specified in QuickBooks for this customer, the default ship-to address will be used by QuickBooks. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "DepartmentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA reference to a Department object specifying the location of the transaction. Available if Preferences.AccountingInfoPrefs.TrackDepartments is set to true. Query the Department name list resource to determine the appropriate department object for this reference. Use Department.Id and Department.Name from that object for DepartmentRef.value and DepartmentRef.name, respectively.").optional(),
  "BillEmailBcc": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the blind carbon copy e-mail address where the invoice is sent. If not specified, this field is populated from that defined in Preferences.SalesFormsPrefs.SalesEmailBcc. If this email address is invalid, blind carbon copy email is not sent.").optional(),
  "ShipMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the ShipMethod associated with the transaction. There is no shipping method list. Reference resolves to a string. Reference to the ShipMethod associated with the transaction. There is no shipping method list. Reference resolves to a string.").optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nBill-to address of the Invoice. If BillAddris not specified, and a default Customer:BillingAddr is specified in QuickBooks for this customer, the default bill-to address is used by QuickBooks. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings. Starting minorversion=54 if you update the CustomerRef, the address passed using BillAddr will be honored.").optional(),
  "ApplyTaxAfterDiscount": z.boolean().describe("If false or null, calculate the sales tax first, and then apply the discount. If true, subtract the discount first and then calculate the sales tax.").optional(),
  "HomeBalance": z.number().describe("Convenience field containing the amount in Balance expressed in terms of the home currency. Calculated by QuickBooks business logic. Value is valid only when CurrencyRef is specified and available when endpoint is evoked with the minorversion=3 query parameter. Applicable if multicurrency is enabled for the company").optional(),
  "DeliveryInfo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nEmail delivery information. Returned when a request has been made to deliver email with the send operation.").optional(),
  "TotalAmt": z.number().describe("Indicates the total amount of the transaction. This includes the total of all the charges, allowances, and taxes. Calculated by QuickBooks business logic; any value you supply is over-written by QuickBooks.").optional(),
  "InvoiceLink": z.string().describe("Sharable link for the invoice sent to external customers. The link is generated only for invoices with online payment enabled and having a valid customer email address. Include query param \`include=invoiceLink\` to get the link back on query response.").optional(),
  "RecurDataRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA reference to the Recurring Transaction. It captures what recurring transaction template the Invoice was created from.").optional(),
  "TaxExemptionRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the TaxExepmtion ID associated with this object. Available for companies that have automated sales tax enabled. TaxExemptionRef.Name- The Tax Exemption Id for the customer to which this object is associated. This Id is typically issued by the state. TaxExemptionRef.value- The system-generated Id of the exemption type.").optional(),
  "Balance": z.number().describe("The balance reflecting any payments made against the transaction. Initially set to the value of TotalAmt. A Balance of 0 indicates the invoice is fully paid. Calculated by QuickBooks business logic; any value you supply is over-written by QuickBooks.").optional(),
  "HomeTotalAmt": z.number().describe("Total amount of the transaction in the home currency. Includes the total of all the charges, allowances and taxes. Calculated by QuickBooks business logic. Value is valid only when CurrencyRef is specified. Applicable if multicurrency is enabled for the company.").optional(),
  "FreeFormAddress": z.boolean().describe("Denotes how ShipAddr is stored- formatted or unformatted. The value of this flag is system defined based on format of shipping address at object create time. If set to false, shipping address is returned in a formatted style using City, Country, CountrySubDivisionCode, Postal code. If set to true, shipping address is returned in an unformatted style using Line1 through Line5 attributes.").optional()
}
```

### parameters_v3_company_companyid_invoice

**Environment variables**



**Input schema**

```ts
{}
```

### invoicereadbyid

**Environment variables**



**Input schema**

```ts
{
  "invoiceId": z.string()
}
```

### parameters_v3_company_companyid_invoice_invoiceid_

**Environment variables**



**Input schema**

```ts
{}
```

### itemcreate

**Environment variables**



**Input schema**

```ts
{
  "minorversion": z.string().optional(),
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "QtyOnHand": z.number().describe("Quantity on hand of the item.").optional(),
  "InvStartDate": z.string().describe("Start date of the inventory.").optional(),
  "IncomeAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "Type": z.string().describe("Type of the item.").optional(),
  "AssetAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "ExpenseAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock the object for use by one app at a time.").optional(),
  "Sku": z.string().describe("SKU of the item.").optional(),
  "FullyQualifiedName": z.string().describe("Fully qualified name of the item.").optional(),
  "Name": z.string().describe("Name of the item.").optional(),
  "Description": z.string().describe("Description of the item.").optional(),
  "Active": z.boolean().describe("Whether the item is active.").optional(),
  "domain": z.string().describe("Domain of the item.").optional(),
  "TrackQtyOnHand": z.boolean().describe("Whether to track quantity on hand.").optional(),
  "UnitPrice": z.number().describe("Unit price of the item.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the object. The MetaData values are set by Data Services and are read only for all applications.").optional()
}
```

### parameters_v3_company_companyid_item

**Environment variables**



**Input schema**

```ts
{}
```

### itemreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_item_id_

**Environment variables**



**Input schema**

```ts
{}
```

### journalentrycreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock the object for use by one app at a time.").optional(),
  "createDate": z.string().describe("Date and time when the journal entry was created.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Description": z.string().describe("Description of the line item.").optional(), "Amount": z.number().describe("Total amount of the line item.").optional(), "DetailType": z.string().describe("Detail type of the line item.").optional(), "LineNum": z.number().describe("Line number of the line item.").optional(), "JournalEntryLineDetail": z.object({ "PostingType": z.string().describe("Posting type").optional(), "AccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "Entity": z.object({ "Type": z.enum(["Vendor","Employee","Customer"]).describe("Type of the entity.").optional(), "EntityRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).describe("Entity type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DepartmentRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxAmount": z.number().describe("Tax amount of the line item.").optional() }).optional() })).describe("List of line items in the journal entry.").optional(),
  "DocNumber": z.string().describe("Document number of the journal entry.").optional(),
  "PrivateNote": z.string().describe("Private note of the journal entry.").optional(),
  "TxnDate": z.string().describe("Transaction date of the journal entry.").optional(),
  "TaxRateRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "TotalAmt": z.number().describe("Total amount of the journal entry.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the object. The MetaData values are set by Data Services and are read only for all applications.").optional()
}
```

### parameters_v3_company_companyid_journalentry

**Environment variables**



**Input schema**

```ts
{}
```

### journalentryreadbyid

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_v3_company_companyid_journalentry_id_

**Environment variables**



**Input schema**

```ts
{}
```

### paymentcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "TotalAmt": z.number().describe("Indicates the total amount of the transaction. This includes the total of all the charges, allowances, and taxes.").optional(),
  "CustomerRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a customer or job. Query the Customer name list resource to determine the appropriate Customer object for this reference. Use Customer.Id and Customer.DisplayName from that object for CustomerRef.value and CustomerRef.name, respectively.").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock an object for use by one app at a time. As soon as an application modifies an object, its SyncToken is incremented. Attempts to modify an object specifying an older SyncToken fails. Only the latest version of the object is maintained by QuickBooks Online.").optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the currency in which all amounts on the associated transaction are expressed. This must be defined if multicurrency is enabled for the company. Multicurrency is enabled for the company if Preferences.MultiCurrencyEnabled is set to true. Read more about multicurrency support here. Required if multicurrency is enabled for the company.").optional(),
  "PrivateNote": z.string().describe("User entered, organization-private note about the transaction.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a PaymentMethod associated with this transaction. Query the PaymentMethod name list resource to determine the appropriate PaymentMethod object for this reference. Use PaymentMethod.Id and PaymentMethod.Name from that object for PaymentMethodRef.value and PaymentMethodRef.name, respectively.").optional(),
  "UnappliedAmt": z.number().describe("Indicates the amount that has not been applied to pay amounts owed for sales transactions.").optional(),
  "DepositToAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the account to be used for this payment. Query the Account name list resource to determine the appropriate Account object for this reference, where Account.AccountType is Other Current Asset or Bank. Use Account.Id and Account.Name from that object for DepositToAccountRef.value and DepostiToAccountRef.name, respectively. If you do not specify this account, payment is applied to the Undeposited Funds account.").optional(),
  "ExchangeRate": z.number().describe("The number of home currency units it takes to equal one unit of currency specified by CurrencyRef. Applicable if multicurrency is enabled for the company").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("The Id of the line item. Its use in requests is as folllows - - If Id is greater than zero and exists for the company, the request is considered an update operation for a line item. - If no Id is provided, the Idprovided is less than or equal to zero, or the Idprovided is greater than zero and does not exist for the company then the request is considered a create operation for a line item. - Available in all objects that use lines and support the update operation.").optional(), "Amount": z.number().describe("The amount of the line item.").optional(), "DetailType": z.literal("").describe("Set to ItemBasedExpenseLineDetail for this type of line.").optional(), "ItemBasedExpenseLineDetail": z.object({ "TaxInclusiveAmt": z.number().describe("The total amount of the line item including tax. Constraints- Available when endpoint is evoked with the minorversion=1query parameter.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference to the Item. Query the Item name list resource to determine the appropriate Item object for this reference. - Use Item.Id and Item.Name from that object for ItemRef.value and ItemRef.name, respectively. - When a line lacks an ItemRef it is treated as documentation and the Line.Amount attribute is ignored. - For France locales- The account associated with the referenced Item object is looked up in the account category list. - If this account has same location as specified in the transaction by the TransactionLocationType attribute and the same VAT as in the line item TaxCodeRef attribute, then the item account is used. - If there is a mismatch, then the account from the account category list that matches the transaction location and VAT is used. - If this account is not present in the account category list, then a new account is created with the new location, new VAT code, and all other attributes as in the default account.").optional(), "CustomerRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference to a customer or job. Query the Customer name list resource to determine the appropriate Customer object for this reference. Use Customer.Id and Customer.DisplayName from that object for CustomerRef.value and CustomerRef.name, respectively.").optional(), "PriceLevelRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference to the PriceLevel of the service or item for the line. Support for this element will be available in the coming months.").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference to the Class associated with the expense. Available if Preferences.AccountingInfoPrefs.ClassTrackingPerLine is set to true. Query the Class name list resource to determine the appropriate Class object for this reference. Use Class.Id and Class.Name from that object for ClassRef.value and ClassRef.name, respectively.").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference to the TaxCodefor this item. Query the TaxCode name list resource to determine the appropriate TaxCode object for this reference. Use TaxCode.Id and TaxCode.Name from that object for TaxCodeRef.value and TaxCodeRef.name, respectively.").optional(), "MarkupInfo": z.record(z.any()).describe("Reference to the TaxCodefor this item. Query the TaxCode name list resource to determine the appropriate TaxCode object for this reference. Use TaxCode.Id and TaxCode.Name from that object for TaxCodeRef.value and TaxCodeRef.name, respectively.").optional(), "BillableStatus": z.string().describe("The billable status of the expense. Valid values- Billable, NotBillable, HasBeenBilled").optional(), "Qty": z.number().describe("Number of items for the line.").optional(), "UnitPrice": z.number().describe("Unit price of the subject item as referenced by ItemRef. Corresponds to the Rate column on the QuickBooks Online UI to specify either unit price, a discount, or a tax rate for item. If used for unit price, the monetary value of the service or product, as expressed in the home currency. If used for a discount or tax rate, express the percentage as a fraction. For example, specify 0.4 for 40% tax.").optional() }).describe("Item Based Expense Line Detail").optional(), "LinkedTxn": z.array(z.object({ "TxnId": z.string().describe("Transaction Id of the related transaction.").optional(), "TxnType": z.string().describe("Transaction type of the linked object.").optional(), "TxnLineId": z.string().describe("Required for Deposit and Bill entities. -The line number of a specific line of the linked transaction. - If supplied, the TxnId and TxnType attributes of the linked transaction must also be populated.").optional() })).describe("Zero or more PurchaseOrder transactions linked to this Bill object. The LinkedTxn.TxnType should always be set to PurchaseOrder. Use LinkedTxn.TxnId as the ID of the PurchaseOrder. When updating an existing Bill to link to a PurchaseOrder a new Line must be created. This behavior matches the QuickBooks UI as it does not allow the linking of an existing line, but rather a new line must be added to link the PurchaseOrder. Over the API this is achieved by simply updating the Bill Line.Id to something new. This will ensure old bill line is deleted and the new line is linked to the PurchaseOrder.").optional(), "Description": z.string().describe("Free form text description of the line item that appears in the printed record.").optional(), "LineNum": z.number().describe("Specifies the position of the line in the collection of transaction lines. Positive Integer.").optional() })).describe("Zero or more transactions accounting for this payment. Values for Line.LinkedTxn.TxnTypecan be one of the following- - Expense--Payment is reimbursement for expense paid by cash made on behalf of the customer - Check--Payment is reimbursement for expense paid by check made on behalf of the customer - CreditCardCredit--Payment is reimbursement for a credit card credit made on behalf of the customer - JournalEntry--Payment is linked to the representative journal entry - CreditMemo--Payment is linked to the credit memo the customer has with the business - Invoice--The invoice to which payment is applied - Use Line.LinkedTxn.TxnId as the ID in a separate read request for the specific resource to retrieve details of the linked object.").optional(),
  "TxnSource": z.string().describe("Used internally to specify originating source of a credit card transaction.").optional(),
  "ARAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies the accounts receivable account associated with this payment. Query the Account name list resource to determine the appropriate Account object for this reference. Use Account.Id and Account.Name from that object for ARAccountRef.value and ARAccountRef.name, respectively. The specified account must have Account.AccountType set to Accounts Receivable.").optional(),
  "TxnDate": z.string().describe("The date entered by the user when this transaction occurred. For posting transactions, this is the posting date that affects the financial statements. If the date is not supplied, the current date on the server is used. Sort order is ASC by default.").optional(),
  "CreditCardPayment": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about a payment received by credit card. Inject with data only if the payment was transacted through Intuit Payments API.").optional(),
  "TransactionLocationType": z.string().describe("The account location. Valid values include- WithinFrance FranceOverseas OutsideFranceWithEU OutsideEU For France locales, only.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the entity. The MetaData values are set by Data Services and are read only for all applications.").optional(),
  "PaymentRefNum": z.string().describe("The reference number for the payment received. For example, Â Check number for a check, envelope number for a cash donation. Required for France locales.").optional(),
  "TaxExemptionRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the TaxExepmtion ID associated with this object. Available for companies that have automated sales tax enabled. TaxExemptionRef.Name- The Tax Exemption Id for the customer to which this object is associated. This Id is typically issued by the state. TaxExemptionRef.value- The system-generated Id of the exemption type.").optional()
}
```

### parameters_v3_company_companyid_payment

**Environment variables**



**Input schema**

```ts
{}
```

### paymentreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_payment_id_

**Environment variables**



**Input schema**

```ts
{}
```

### paymentmethodcreate

**Environment variables**



**Input schema**

```ts
{
  "Active": z.boolean().optional(),
  "Id": z.string().optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "Name": z.string().optional(),
  "SyncToken": z.string().optional(),
  "Type": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_paymentmethod

**Environment variables**



**Input schema**

```ts
{}
```

### paymentmethodreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_paymentmethod_id_

**Environment variables**



**Input schema**

```ts
{}
```

### preferenceread

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "minorversion": z.string().optional()
}
```

### preferenceupdate

**Environment variables**



**Input schema**

```ts
{
  "AccountingInfoPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "CurrencyPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "EmailMessagesPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "Id": z.string().optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "OtherPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ProductAndServicesPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "ReportPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "SalesFormsPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "SyncToken": z.string().optional(),
  "TaxPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "TimeTrackingPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "VendorAndPurchasesPrefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_preferences

**Environment variables**



**Input schema**

```ts
{}
```

### purchasecreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_purchase

**Environment variables**



**Input schema**

```ts
{}
```

### purchasereadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_purchase_id_

**Environment variables**



**Input schema**

```ts
{}
```

### purchaseordercreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_purchaseorder

**Environment variables**



**Input schema**

```ts
{}
```

### purchaseorderreadbyid

**Environment variables**



**Input schema**

```ts
{
  "purchaseOrderId": z.string()
}
```

### parameters_v3_company_companyid_purchaseorder_purchaseorderid_

**Environment variables**



**Input schema**

```ts
{}
```

### queryread

**Environment variables**



**Input schema**

```ts
{
  "companyId": z.string(),
  "query": z.string().optional()
}
```

### refundreceiptcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "DepositToAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "TxnDate": z.string().describe("Transaction Date").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock the object for use by one app at a time.").optional(),
  "domain": z.string().describe("Domain of the class.").optional(),
  "PaymentRefNum": z.string().describe("Payment reference number of the refund receipt.").optional(),
  "PrintStatus": z.string().describe("Print status of the credit memo.").optional(),
  "TotalAmt": z.number().describe("Total amount of the credit memo.").optional(),
  "ClassRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "SalesTermRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "CustomerRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "DocNumber": z.string().describe("Document number of the credit memo.").optional(),
  "PrivateNote": z.string().describe("Private note of the credit memo.").optional(),
  "CustomerMemo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustomer memo of the credit memo.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "ShipAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPhysical address").optional(),
  "DepartmentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "EmailStatus": z.string().describe("Email status of the credit memo.").optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nPhysical address").optional(),
  "HomeBalance": z.number().describe("Home balance of the credit memo.").optional(),
  "RemainingCredit": z.number().describe("Remaining credit of the credit memo.").optional(),
  "RecurDataRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "TaxExemptionRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference type").optional(),
  "Balance": z.number().describe("Balance of the credit memo.").optional(),
  "HomeTotalAmt": z.number().describe("Home total amount of the credit memo.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.string().optional(), "Line": z.string().optional(), "GroupItemRef": z.string().optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.string().optional(), "UnitPrice": z.string().optional(), "ItemRef": z.string().optional(), "ClassRef": z.string().optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.string().optional(), "TaxCodeRef": z.string().optional(), "DiscountAccountRef": z.string().optional(), "PercentBased": z.string().optional(), "DiscountPercent": z.string().optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional()
}
```

### parameters_v3_company_companyid_refundreceipt

**Environment variables**



**Input schema**

```ts
{}
```

### refundreceiptreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_refundreceipt_id_

**Environment variables**



**Input schema**

```ts
{}
```

### reportaccountlist

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_accountlist

**Environment variables**



**Input schema**

```ts
{}
```

### reportagedpayabledetail

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_agedpayabledetail

**Environment variables**



**Input schema**

```ts
{}
```

### reportagedpayables

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_agedpayables

**Environment variables**



**Input schema**

```ts
{}
```

### reportagedreceivabledetail

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_agedreceivabledetail

**Environment variables**



**Input schema**

```ts
{}
```

### reportagedreceivables

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_agedreceivables

**Environment variables**



**Input schema**

```ts
{}
```

### reportbalancesheet

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional(),
  "summarize_column_by": z.string().optional(),
  "department": z.string().optional(),
  "vendor": z.string().optional(),
  "class": z.string().optional(),
  "accounting_method": z.string().optional(),
  "qzurl": z.string().optional(),
  "customer": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_balancesheet

**Environment variables**



**Input schema**

```ts
{}
```

### reportcashflow

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional(),
  "summarize_column_by": z.string().optional(),
  "department": z.string().optional(),
  "vendor": z.string().optional(),
  "class": z.string().optional(),
  "item": z.string().optional(),
  "customer": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_cashflow

**Environment variables**



**Input schema**

```ts
{}
```

### reportcashsales

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_classsales

**Environment variables**



**Input schema**

```ts
{}
```

### reportcustomerbalance

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_customerbalance

**Environment variables**



**Input schema**

```ts
{}
```

### reportcustomerbalancedetail

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_customerbalancedetail

**Environment variables**



**Input schema**

```ts
{}
```

### reportcustomerincome

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_customerincome

**Environment variables**



**Input schema**

```ts
{}
```

### reportcustomersales

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_customersales

**Environment variables**



**Input schema**

```ts
{}
```

### reportdepartmentsales

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_departmentsales

**Environment variables**



**Input schema**

```ts
{}
```

### reportgeneralledger

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_generalledger

**Environment variables**



**Input schema**

```ts
{}
```

### reportinventoryvaluationsummary

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_inventoryvaluationsummar

**Environment variables**



**Input schema**

```ts
{}
```

### reportitemsales

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_itemsales

**Environment variables**



**Input schema**

```ts
{}
```

### reportprofitandloss

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional(),
  "summarize_column_by": z.string().optional(),
  "department": z.string().optional(),
  "vendor": z.string().optional(),
  "class": z.string().optional(),
  "accounting_method": z.string().optional(),
  "qzurl": z.string().optional(),
  "customer": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_profitandloss

**Environment variables**



**Input schema**

```ts
{}
```

### reportprofitandlossdetail

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional(),
  "summarize_column_by": z.string().optional(),
  "department": z.string().optional(),
  "vendor": z.string().optional(),
  "class": z.string().optional(),
  "accounting_method": z.string().optional(),
  "qzurl": z.string().optional(),
  "customer": z.string().optional(),
  "payment_method": z.string().optional(),
  "account": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_profitandlossdetail

**Environment variables**



**Input schema**

```ts
{}
```

### reporttrialbalance

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_trialbalance

**Environment variables**



**Input schema**

```ts
{}
```

### reporttransactionlist

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_transactionlist

**Environment variables**



**Input schema**

```ts
{}
```

### reportvendorbalance

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_vendorbalance

**Environment variables**



**Input schema**

```ts
{}
```

### reportvendorbalancedetail

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_vendorbalancedetail

**Environment variables**



**Input schema**

```ts
{}
```

### reportvendorexpense

**Environment variables**



**Input schema**

```ts
{
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional()
}
```

### parameters_v3_company_companyid_reports_vendorexpenses

**Environment variables**



**Input schema**

```ts
{}
```

### salesreceiptcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "include": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.number().describe("The quantity of the item.").optional(), "Line": z.array(z.object({ "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(), "Amount": z.number().describe("The total amount of the line item. This is the quantity multiplied by the unit price.").optional(), "Description": z.string().describe("A description of the line item.").optional(), "DetailType": z.enum(["SalesItemLineDetail","GroupLineDetail","DescriptionOnly","DiscountLineDetail","SubTotalLineDetail"]).describe("The type of detail for the line item. Valid values include SalesItemLineDetail.").optional(), "GroupLineDetail": z.object({ "Quantity": z.string().optional(), "Line": z.string().optional(), "GroupItemRef": z.string().optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.string().optional(), "UnitPrice": z.string().optional(), "ItemRef": z.string().optional(), "ClassRef": z.string().optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.string().optional(), "TaxCodeRef": z.string().optional(), "DiscountAccountRef": z.string().optional(), "PercentBased": z.string().optional(), "DiscountPercent": z.string().optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(), "GroupItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "SalesItemLineDetail": z.object({ "Qty": z.number().describe("The quantity of the item.").optional(), "UnitPrice": z.number().describe("The price of a single unit of the item.").optional(), "ItemRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional() }).optional(), "DiscountLineDetail": z.object({ "ClassRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "TaxCodeRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "DiscountAccountRef": z.object({ "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(), "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional() }).describe("Reference type").optional(), "PercentBased": z.boolean().describe("If true, the discount is a percentage of the total amount. If false, the discount is a fixed amount.").optional(), "DiscountPercent": z.number().describe("The percentage of the discount. This field is required if PercentBased is true.").optional() }).optional() }).describe("Reference type")).describe("Individual line items of a transaction. Valid Line types include SalesItemLine, GroupLine, DescriptionOnlyLine (also used for inline Subtotal lines), DiscountLine and SubTotalLine (used for the overall transaction)").optional(),
  "CustomerRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to a customer or job. Query the Customer name list resource to determine the appropriate Customer object for this reference. Use Customer.Id and Customer.DisplayName from that object for CustomerRef.value and CustomerRef.name, respectively.").optional(),
  "PaymentMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the payment method associated with the transaction. Query the PaymentMethod name list resource to determine the appropriate PaymentMethod object for this reference. Use PaymentMethod.Id and PaymentMethod.Name from that object for PaymentMethodRef.value and PaymentMethodRef.name, respectively.").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock an object for use by one app at a time. As soon as an application modifies an object, its SyncToken is incremented. Attempts to modify an object specifying an older SyncToken fails. Only the latest version of the object is maintained by QuickBooks Online.").optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the currency in which all amounts on the associated transaction are expressed. This must be defined if multicurrency is enabled for the company. Multicurrency is enabled for the company if Preferences.MultiCurrencyEnabled is set to true. Read more about multicurrency support here. Applicable if multicurrency is enabled for the company.").optional(),
  "DocNumber": z.string().describe("Reference number for the transaction. If not explicitly provided at create time, this field is populated based on the setting of Preferences:CustomTxnNumber as follows- If Preferences:CustomTxnNumber is true a custom value can be provided. If no value is supplied, the resulting DocNumber is null. If Preferences:CustomTxnNumber is false, resulting DocNumber is system generated by incrementing the last number by 1. If Preferences:CustomTxnNumber is false then do not send a value as it can lead to unwanted duplicates. If a DocNumber value is sent for an Update operation, then it just updates that particular invoice and does not alter the internal system DocNumber. Note- DocNumber is an optional field for all locales except France. For France locale if Preferences:CustomTxnNumber is enabled it will not be automatically generated and is a required field. If a duplicate DocNumber needs to be supplied, add the query parameter name/value pair, include=allowduplicatedocnum to the URI.").optional(),
  "BillEmail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the e-mail address where the invoice is sent. If EmailStatus=NeedToSend, BillEmailis a required input.").optional(),
  "TxnDate": z.string().describe("The date entered by the user when this transaction occurred. yyyy/MM/dd is the valid date format. For posting transactions, this is the posting date that affects the financial statements. If the date is not supplied, the current date on the server is used. Sort order is ASC by default.").optional(),
  "ShipFromAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the address where the goods are shipped from. For transactions without shipping, it represents the address where the sale took place. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "ShipDate": z.string().describe("Date for delivery of goods or services.").optional(),
  "TrackingNum": z.string().describe("Shipping provider's tracking number for the delivery of the goods associated with the transaction.").optional(),
  "ClassRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the Class associated with the transaction. Available if Preferences.AccountingInfoPrefs.ClassTrackingPerTxn is set to true. Query the Class name list resource to determine the appropriate Class object for this reference. Use Class.Id and Class.Name from that object for ClassRef.value and ClassRef.name, respectively.").optional(),
  "PrintStatus": z.string().describe("Printing status of the invoice. Valid values- NotSet, NeedToPrint, PrintComplete .").optional(),
  "SalesTermRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the sales term associated with the transaction. Query the Term name list resource to determine the appropriate Term object for this reference. Use Term.Id and Term.Name from that object for SalesTermRef.value and SalesTermRef.name, respectively.").optional(),
  "TxnSource": z.string().describe("Used internally to specify originating source of a credit card transaction.").optional(),
  "LinkedTxn": z.array(z.any()).describe("Zero or more related transactions to this Invoice object. The following linked relationships are supported- Links to Estimate and TimeActivity objects can be established directly to this Invoice object with UI or with the API. Create, Read, Update, and Query operations are avaialble at the API level for these types of links. Only one link can be made to an Estimate. Progress Invoicing is not supported via the API. Links to expenses incurred on behalf of the customer are returned in the response with LinkedTxn.TxnType set to ReimburseCharge, ChargeCredit or StatementCharge corresponding to billable customer expenses of type Cash, Delayed Credit, and Delayed Charge, respectively. Links to these types of transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Links to payments applied to an Invoice object are returned in the response with LinkedTxn.TxnType set to Payment. Links to Payment transactions are established within the QuickBooks UI, only, and are available as read-only at the API level. Use LinkedTxn.TxnId as the ID in a separate read request for the specific resource to retrieve details of the linked object.").optional(),
  "DepositToAccountRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAccount to which money is deposited. Query the Account name list resource to determine the appropriate Account object for this reference, where Account.AccountType is Other Current Asset or Bank. Use Account.Id and Account.Name from that object for DepositToAccountRef.value and DepositToAccountRef.name, respectively. Before you can use this field ensure that the company allows deposits in their invoices first. This can be found by querying the Preferences endpoint. SalesFormsPrefs.AllowDeposit must be equal to true. If you do not specify this account the payment is applied to the Undeposited Funds account.").optional(),
  "GlobalTaxCalculation": z.string().describe("Method in which tax is applied. Allowed values are- TaxExcluded, TaxInclusive, and NotApplicable.").optional(),
  "AllowOnlineACHPayment": z.boolean().describe("Specifies if this invoice can be paid with online bank transfers and corresponds to the Free bank transfer online payment check box on the QuickBooks UI. Active when Preferences.SalesFormsPrefs.ETransactionPaymentEnabled is set to true. If set to true, allow invoice to be paid with online bank transfers. The Free bank transfer online payment check box is checked on the QuickBooks UI for this invoice. If set to false, online bank transfers are not allowed. The Free bank transfer online payment check box is not checked on the QuickBooks UI for this invoice.").optional(),
  "TransactionLocationType": z.string().describe("The account location. For France locale valid values include- WithinFrance FranceOverseas OutsideFranceWithEU OutsideEU For UAE, valid values include ABUDHABI AJMAN SHARJAH DUBAI FUJAIRAH RAS_AL_KHAIMAH UMM_AL_QUWAIN OTHER_GCC").optional(),
  "DueDate": z.string().describe("Date when the payment of the transaction is due. If date is not provided, the number of days specified in SalesTermRef added the transaction date will be used.").optional(),
  "MetaData": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescriptive information about the object. The MetaData values are set by Data Services and are read only for all applications.").optional(),
  "PrivateNote": z.string().describe("User entered, organization-private note about the transaction. This note does not appear on the invoice to the customer. This field maps to the Statement Memo field on the Invoice form in the QuickBooks Online UI.").optional(),
  "BillEmailCc": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the carbon copy e-mail address where the invoice is sent. If not specified, this field is populated from that defined in Preferences.SalesFormsPrefs.SalesEmailCc. If this email address is invalid, carbon copy email is not sent.").optional(),
  "CustomerMemo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUser-entered message to the customer; this message is visible to end user on their transactions.").optional(),
  "EmailStatus": z.string().describe("Email status of the invoice. Valid values- NotSet, NeedToSend, EmailSent").optional(),
  "ExchangeRate": z.number().describe("The number of home currency units it takes to equal one unit of currency specified by CurrencyRef. Applicable if multicurrency is enabled for the company.").optional(),
  "Deposit": z.number().describe("The deposit made towards this invoice.").optional(),
  "TxnTaxDetail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThis data type provides information for taxes charged on the transaction as a whole. It captures the details sales taxes calculated for the transaction based on the tax codes referenced by the transaction. This can be calculated by QuickBooks business logic or you may supply it when adding a transaction. See Global tax model for more information about this element. If sales tax is disabled (Preferences.TaxPrefs.UsingSalesTax is set to false) then TxnTaxDetail is ignored and not stored.").optional(),
  "AllowOnlineCreditCardPayment": z.boolean().describe("Specifies if online credit card payments are allowed for this invoice and corresponds to the Cards online payment check box on the QuickBooks UI. Active when Preferences.SalesFormsPrefs.ETransactionPaymentEnabled is set to true. If set to true, allow invoice to be paid with online credit card payments. The Cards online payment check box is checked on the QuickBooks UI. If set to false, online credit card payments are not allowed. The Cards online payment check box is not checked on the QuickBooks UI.").optional(),
  "CustomField": z.array(z.any()).describe("One of, up to three custom fields for the transaction. Available for custom fields so configured for the company. Check Preferences.SalesFormsPrefs.CustomField and Preferences.VendorAndPurchasesPrefs.POCustomField for custom fields currenly configured. Click here to learn about managing custom fields.").optional(),
  "ShipAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the address where the goods must be shipped. If ShipAddris not specified, and a default Customer:ShippingAddr is specified in QuickBooks for this customer, the default ship-to address will be used by QuickBooks. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings.").optional(),
  "DepartmentRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA reference to a Department object specifying the location of the transaction. Available if Preferences.AccountingInfoPrefs.TrackDepartments is set to true. Query the Department name list resource to determine the appropriate department object for this reference. Use Department.Id and Department.Name from that object for DepartmentRef.value and DepartmentRef.name, respectively.").optional(),
  "BillEmailBcc": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentifies the blind carbon copy e-mail address where the invoice is sent. If not specified, this field is populated from that defined in Preferences.SalesFormsPrefs.SalesEmailBcc. If this email address is invalid, blind carbon copy email is not sent.").optional(),
  "ShipMethodRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the ShipMethod associated with the transaction. There is no shipping method list. Reference resolves to a string. Reference to the ShipMethod associated with the transaction. There is no shipping method list. Reference resolves to a string.").optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nBill-to address of the Invoice. If BillAddris not specified, and a default Customer:BillingAddr is specified in QuickBooks for this customer, the default bill-to address is used by QuickBooks. For international addresses - countries should be passed as 3 ISO alpha-3 characters or the full name of the country. If a physical address is updated from within the transaction object, the QuickBooks Online API flows individual address components differently into the Line elements of the transaction response then when the transaction was first created- Line1 and Line2 elements are populated with the customer name and company name. Original Line1 through Line 5 contents, City, SubDivisionCode, and PostalCode flow into Line3 through Line5as a free format strings. Starting minorversion=54 if you update the CustomerRef, the address passed using BillAddr will be honored.").optional(),
  "ApplyTaxAfterDiscount": z.boolean().describe("If false or null, calculate the sales tax first, and then apply the discount. If true, subtract the discount first and then calculate the sales tax.").optional(),
  "HomeBalance": z.number().describe("Convenience field containing the amount in Balance expressed in terms of the home currency. Calculated by QuickBooks business logic. Value is valid only when CurrencyRef is specified and available when endpoint is evoked with the minorversion=3 query parameter. Applicable if multicurrency is enabled for the company").optional(),
  "DeliveryInfo": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nEmail delivery information. Returned when a request has been made to deliver email with the send operation.").optional(),
  "TotalAmt": z.number().describe("Indicates the total amount of the transaction. This includes the total of all the charges, allowances, and taxes. Calculated by QuickBooks business logic; any value you supply is over-written by QuickBooks.").optional(),
  "InvoiceLink": z.string().describe("Sharable link for the invoice sent to external customers. The link is generated only for invoices with online payment enabled and having a valid customer email address. Include query param \`include=invoiceLink\` to get the link back on query response.").optional(),
  "RecurDataRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA reference to the Recurring Transaction. It captures what recurring transaction template the Invoice was created from.").optional(),
  "TaxExemptionRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReference to the TaxExepmtion ID associated with this object. Available for companies that have automated sales tax enabled. TaxExemptionRef.Name- The Tax Exemption Id for the customer to which this object is associated. This Id is typically issued by the state. TaxExemptionRef.value- The system-generated Id of the exemption type.").optional(),
  "Balance": z.number().describe("The balance reflecting any payments made against the transaction. Initially set to the value of TotalAmt. A Balance of 0 indicates the invoice is fully paid. Calculated by QuickBooks business logic; any value you supply is over-written by QuickBooks.").optional(),
  "HomeTotalAmt": z.number().describe("Total amount of the transaction in the home currency. Includes the total of all the charges, allowances and taxes. Calculated by QuickBooks business logic. Value is valid only when CurrencyRef is specified. Applicable if multicurrency is enabled for the company.").optional(),
  "FreeFormAddress": z.boolean().describe("Denotes how ShipAddr is stored- formatted or unformatted. The value of this flag is system defined based on format of shipping address at object create time. If set to false, shipping address is returned in a formatted style using City, Country, CountrySubDivisionCode, Postal code. If set to true, shipping address is returned in an unformatted style using Line1 through Line5 attributes.").optional()
}
```

### parameters_v3_company_companyid_salesreceipt

**Environment variables**



**Input schema**

```ts
{}
```

### salesreceiptreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_salesreceipt_id_

**Environment variables**



**Input schema**

```ts
{}
```

### taxagencycreate

**Environment variables**



**Input schema**

```ts
{
  "DisplayName": z.string().optional()
}
```

### parameters_v3_company_companyid_taxagency

**Environment variables**



**Input schema**

```ts
{}
```

### taxagencyreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_taxagency_id_

**Environment variables**



**Input schema**

```ts
{}
```

### taxcodereadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_taxcode_id_

**Environment variables**



**Input schema**

```ts
{}
```

### taxratereadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_taxrate_id_

**Environment variables**



**Input schema**

```ts
{}
```

### taxservicecreate

**Environment variables**



**Input schema**

```ts
{
  "TaxCode": z.string().optional(),
  "TaxRateDetails": z.array(z.object({ "RateValue": z.string().optional(), "TaxAgencyId": z.string().optional(), "TaxApplicableOn": z.string().optional(), "TaxRateName": z.string().optional() })).optional()
}
```

### parameters_v3_company_companyid_taxservice_taxcode

**Environment variables**



**Input schema**

```ts
{}
```

### termcreate

**Environment variables**



**Input schema**

```ts
{
  "Active": z.boolean().optional(),
  "DiscountPercent": z.number().optional(),
  "DueDays": z.number().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SyncToken": z.string().optional(),
  "Type": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_term

**Environment variables**



**Input schema**

```ts
{}
```

### termreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_term_id_

**Environment variables**



**Input schema**

```ts
{}
```

### timeactivitycreate

**Environment variables**



**Input schema**

```ts
{
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_timeactivity

**Environment variables**



**Input schema**

```ts
{}
```

### transfercreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### transferreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_transfer_id_

**Environment variables**



**Input schema**

```ts
{}
```

### vendorcreate

**Environment variables**



**Input schema**

```ts
{
  "AcctNum": z.string().optional(),
  "Active": z.boolean().optional(),
  "Balance": z.number().optional(),
  "BillAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "CompanyName": z.string().optional(),
  "CurrencyRef": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "DisplayName": z.string().optional(),
  "FamilyName": z.string().optional(),
  "GivenName": z.string().optional(),
  "Id": z.string().optional(),
  "Mobile": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrimaryEmailAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrimaryPhone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "PrintOnCheckName": z.string().optional(),
  "Suffix": z.string().optional(),
  "SyncToken": z.string().optional(),
  "TaxIdentifier": z.string().optional(),
  "Title": z.string().optional(),
  "Vendor1099": z.boolean().optional(),
  "WebAddr": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}
```

### parameters_v3_company_companyid_vendor

**Environment variables**



**Input schema**

```ts
{}
```

### vendorreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_vendor_id_

**Environment variables**



**Input schema**

```ts
{}
```

### vendorcreditcreate

**Environment variables**



**Input schema**

```ts
{
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}
```

### parameters_v3_company_companyid_vendorcredit

**Environment variables**



**Input schema**

```ts
{}
```

### vendorcreditreadbyid

**Environment variables**



**Input schema**

```ts
{
  "id": z.string()
}
```

### parameters_v3_company_companyid_vendorcredit_id_

**Environment variables**



**Input schema**

```ts
{}
```
