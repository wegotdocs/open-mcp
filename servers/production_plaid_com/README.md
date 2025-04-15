# @open-mcp/production_plaid_com

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/production_plaid_com add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/production_plaid_com add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/production_plaid_com add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "production_plaid_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/production_plaid_com"],
      "env": {"PLAID_CLIENT_ID":"...","PLAID_SECRET":"...","PLAID_VERSION":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/production_plaid_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/production_plaid_com`
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

### assetreportcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).min(1).max(99).describe("An array of access tokens corresponding to the Items that will be included in the report. The \`assets\` product must have been initialized for the Items during link; the Assets product cannot be added after initialization.").optional(),
  "days_requested": z.number().int().gte(0).lte(731).describe("The maximum integer number of days of history to include in the Asset Report. If using Fannie Mae Day 1 Certainty, \`days_requested\` must be at least 61 for new originations or at least 31 for refinancings.\n\nAn Asset Report requested with \"Additional History\" (that is, with more than 61 days of transaction history) will incur an Additional History fee."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/asset_report/create\` results. If provided, must be non-\`null\`. The optional \`user\` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.").optional()
}
```

### assetreportget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report.").optional(),
  "user_token": z.string().describe("The user token associated with the User for which to create an asset report for. The latest asset report associated with the User will be returned").optional(),
  "include_insights": z.boolean().describe("\`true\` if you would like to retrieve the Asset Report with Insights, \`false\` otherwise. This field defaults to \`false\` if omitted.").optional(),
  "fast_report": z.boolean().describe("\`true\` to fetch \"fast\" version of asset report. Defaults to false if omitted. Can only be used if \`/asset_report/create\` was called with \`options.add_ons\` set to \`[\"fast_assets\"]\`.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter or add data to \`/asset_report/get\` results. If provided, must be non-\`null\`.").optional()
}
```

### assetreportpdfget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter or add data to \`/asset_report/get\` results. If provided, must be non-\`null\`.").optional()
}
```

### assetreportrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("The \`asset_report_token\` returned by the original call to \`/asset_report/create\`"),
  "days_requested": z.number().int().gte(0).lte(731).nullable().describe("The maximum number of days of history to include in the Asset Report. Must be an integer. If not specified, the value from the original call to \`/asset_report/create\` will be used.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/asset_report/refresh\` results. If provided, cannot be \`null\`. If not specified, the \`options\` from the original call to \`/asset_report/create\` will be used.").optional()
}
```

### assetreportfilter

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report."),
  "account_ids_to_exclude": z.array(z.string()).describe("The accounts to exclude from the Asset Report, identified by \`account_id\`.")
}
```

### assetreportremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report.")
}
```

### assetreportauditcopycreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "asset_report_token": z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report."),
  "auditor_id": z.string().describe("The \`auditor_id\` of the third party with whom you would like to share the Asset Report.").optional()
}
```

### assetreportauditcopyget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "audit_copy_token": z.string().describe("The \`audit_copy_token\` granting access to the Audit Copy you would like to get.")
}
```

### assetreportauditcopyremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "audit_copy_token": z.string().describe("The \`audit_copy_token\` granting access to the Audit Copy you would like to revoke.")
}
```

### cramonitoringinsightssubscribe

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "webhook": z.string().describe("URL to which Plaid will send Monitoring Insights webhooks, for example when the requested Monitoring Insights is ready."),
  "income_categories": z.array(z.enum(["SALARY","UNEMPLOYMENT","CASH","GIG_ECONOMY","RENTAL","CHILD_SUPPORT","MILITARY","RETIREMENT","LONG_TERM_DISABILITY","BANK_INTEREST","CASH_DEPOSIT","TRANSFER_FROM_APPLICATION","TAX_REFUND","BENEFIT_OTHER","OTHER"]).describe("The income category.\n\`BANK_INTEREST\`: Interest earned from a bank account.\n\`BENEFIT_OTHER\`: Government benefits other than retirement, unemployment, child support, or disability. Currently used only in the UK, to represent benefits such as Cost of Living Payments.\n\`CASH\`: Deprecated and used only for existing legacy implementations. Has been replaced by \`CASH_DEPOSIT\` and \`TRANSFER_FROM_APPLICATION\`.\n\`CASH_DEPOSIT\`: A cash or check deposit.\n\`CHILD_SUPPORT\`: Child support payments received.\n\`GIG_ECONOMY\`: Income earned as a gig economy worker, e.g. driving for Uber, Lyft, Postmates, DoorDash, etc.\n\`LONG_TERM_DISABILITY\`: Disability payments, including Social Security disability benefits.\n\`OTHER\`: Income that could not be categorized as any other income category.\n\`MILITARY\`: Veterans benefits. Income earned as salary for serving in the military (e.g. through DFAS) will be classified as \`SALARY\` rather than \`MILITARY\`.\n\`RENTAL\`: Income earned from a rental property. Income may be identified as rental when the payment is received through a rental platform, e.g. Airbnb; rent paid directly by the tenant to the property owner (e.g. via cash, check, or ACH) will typically not be classified as rental income.\n\`RETIREMENT\`: Payments from private retirement systems, pensions, and government retirement programs, including Social Security retirement benefits.\n\`SALARY\`: Payment from an employer to an earner or other form of permanent employment.\n\`TAX_REFUND\`: A tax refund.\n\`TRANSFER_FROM_APPLICATION\`: Deposits from a money transfer app, such as Venmo, Cash App, or Zelle.\n\`UNEMPLOYMENT\`: Unemployment benefits. In the UK, includes certain low-income benefits such as the Universal Credit.")).nullable().describe("Income categories to include in Cash Flow Updates. If empty or \`null\`, this field will default to including all possible categories.").optional()
}
```

### cramonitoringinsightsunsubscribe

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "subscription_id": z.string().describe("A unique identifier for the subscription.")
}
```

### cramonitoringinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "consumer_report_permissible_purpose": z.enum(["ACCOUNT_REVIEW_CREDIT","WRITTEN_INSTRUCTION_OTHER"]).describe("Describes the reason you are generating a Consumer Report for this user.\n\n\`ACCOUNT_REVIEW_CREDIT\`: In connection with a consumer credit transaction for the review or collection of an account pursuant to FCRA Section 604(a)(3)(A).\n\n\`WRITTEN_INSTRUCTION_OTHER\`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes personal liability for a consumer, business, or commercial loan.")
}
```

### creditauditcopytokenupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "audit_copy_token": z.string().describe("The \`audit_copy_token\` you would like to update."),
  "report_tokens": z.array(z.string().describe("A token that can be provided to endpoints such as \`/asset_report/get\` or \`/asset_report/pdf/get\` to fetch or update an Asset Report.")).describe("Array of tokens which the specified Audit Copy Token will be updated with. The types of token supported are asset report token and employment report token. There can be at most 1 of each token type in the array.")
}
```

### crapartnerinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### cracheckreportincomeinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional()
}
```

### cracheckreportbasereportget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional(),
  "item_ids": z.array(z.string().describe("The \`item_id\` of the Item associated with this webhook, warning, or error")).nullable().describe("The item IDs to include in the Base Report. If not provided, all items associated with the user will be included.").optional()
}
```

### cracheckreportpdfget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional(),
  "add_ons": z.array(z.literal("cra_income_insights").describe("A list of add-ons that can be included in the PDF.\n\n\`cra_income_insights\`: Include Income Insights report in the PDF.")).describe("Use this field to include other reports in the PDF.").optional()
}
```

### cracheckreportcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "webhook": z.string().describe("The destination URL to which webhooks will be sent\n"),
  "days_requested": z.number().int().lte(731).describe("The number of days of data to request for the report. Default value is 365; maximum is 731; minimum is 180. If a value lower than 180 is provided, a minimum of 180 days of history will be requested."),
  "days_required": z.number().int().describe("The minimum number of days of data required for the report to be successfully generated.").optional(),
  "client_report_id": z.string().nullable().describe("Client-generated identifier, which can be used by lenders to track loan applications.").optional(),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).nullable().describe("Specifies a list of products that will be eagerly generated when creating the report (in addition to the Base Report, which is always eagerly generated). These products will be made available before a success webhook is sent. Use this option to minimize response latency for product \`/get\` endpoints. Note that specifying \`cra_partner_insights\` in this field will trigger a billable event. Other products are not billed until the respective reports are fetched via product-specific \`/get\` endpoints.").optional(),
  "base_report": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines configuration options to generate a Base Report").optional(),
  "cashflow_insights": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines configuration options to generate Cashflow Insights").optional(),
  "partner_insights": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines configuration options to generate Partner Insights").optional(),
  "consumer_report_permissible_purpose": z.enum(["ACCOUNT_REVIEW_CREDIT","ACCOUNT_REVIEW_NON_CREDIT","EMPLOYMENT","EXTENSION_OF_CREDIT","LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING","LEGITIMATE_BUSINESS_NEED_OTHER","WRITTEN_INSTRUCTION_PREQUALIFICATION","WRITTEN_INSTRUCTION_OTHER"]).describe("Describes the reason you are generating a Consumer Report for this user.\n\n\`ACCOUNT_REVIEW_CREDIT\`: In connection with a consumer credit transaction for the review or collection of an account pursuant to FCRA Section 604(a)(3)(A).\n\n\`ACCOUNT_REVIEW_NON_CREDIT\`: For a legitimate business need of the information to review a non-credit account provided primarily for personal, family, or household purposes to determine whether the consumer continues to meet the terms of the account pursuant to FCRA Section 604(a)(3)(F)(2).\n\n\`EMPLOYMENT\`: For employment purposes pursuant to FCRA 604(a)(3)(B), including hiring, retention and promotion purposes.\n\n\`EXTENSION_OF_CREDIT\`: In connection with a credit transaction initiated by and involving the consumer pursuant to FCRA Section 604(a)(3)(A).\n\n\`LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING\`: For a legitimate business need in connection with a business transaction initiated by the consumer primarily for personal, family, or household purposes in connection with a property rental assessment pursuant to FCRA Section 604(a)(3)(F)(i).\n\n\`LEGITIMATE_BUSINESS_NEED_OTHER\`: For a legitimate business need in connection with a business transaction made primarily for personal, family, or household initiated by the consumer pursuant to FCRA Section 604(a)(3)(F)(i).\n\n\`WRITTEN_INSTRUCTION_PREQUALIFICATION\`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), to evaluate an application’s profile to make an offer to the consumer.\n\n\`WRITTEN_INSTRUCTION_OTHER\`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes personal liability for a consumer, business, or commercial loan.")
}
```

### cracheckreportpartnerinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines configuration options to generate Partner Insights").optional()
}
```

### x_hidden_from_docs_cra_check_report_cashflow_insights_get

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### cracheckreportcashflowinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines configuration options to generate Cashflow Insights").optional()
}
```

### cracheckreportnetworkinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.").optional()
}
```

### craloansapplicationsregister

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "applications": z.array(z.object({ "user_token": z.string().describe("The user token for the user associated with the loan."), "application_id": z.string().describe("A unique identifier for the loan application.\nPersonally identifiable information, such as an email address or phone number, should not be used in the \`application_id\`."), "type": z.enum(["PERSONAL","CREDIT_CARD","BUSINESS","MORTGAGE","AUTO","PAYDAY","STUDENT","HOME_EQUITY","OTHER"]).describe("The type of loan the user applied for."), "decision": z.enum(["APPROVED","DECLINED","OTHER"]).describe("The decision of the loan application."), "application_date": z.string().date().describe("The date the user applied for the loan. The date should be in ISO 8601 format (YYYY-MM-DD).").optional(), "decision_date": z.string().date().describe("The date when the loan application's decision was made. The date should be in ISO 8601 format (YYYY-MM-DD).").optional() }).catchall(z.any()).describe("Contains loan application data.")).describe("A list of loan applications to register.")
}
```

### craloansregister

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "loans": z.array(z.object({ "user_token": z.string().describe("The user token for the user associated with the loan."), "loan_id": z.string().describe("A unique identifier for the loan.\nPersonally identifiable information, such as an email address or phone number, should not be used in the \`loan_id\`."), "type": z.enum(["PERSONAL","CREDIT_CARD","BUSINESS","MORTGAGE","AUTO","PAYDAY","STUDENT","HOME_EQUITY","OTHER"]).describe("The type of loan the user applied for."), "payment_schedule": z.enum(["DAILY","WEEKLY","BIWEEKLY","MONTHLY","QUARTERLY","ANNUALLY","OTHER"]).describe("The frequency of a loan's payment schedule.\n\`BIWEEKLY\` represents one payment every two weeks."), "opened_date": z.string().date().describe("The date the loan account was opened. The date should be in ISO 8601 format (YYYY-MM-DD)."), "opened_with_status": z.object({ "status": z.enum(["APPROVED","DECLINED","BOOKED","CURRENT","DELINQUENT","DEFAULT","CHARGED_OFF","TRANSFERRED","PAID_OFF","OTHER"]).describe("The status of the loan."), "date": z.string().date().describe("The effective date for the status of the loan. The date should be in ISO 8601 format (YYYY-MM-DD).") }).catchall(z.any()).describe("Contains the status and date information of the loan when registering."), "loan_amount": z.number().describe("The total amount of the approved loan.").optional(), "application": z.object({ "application_id": z.string().describe("A unique identifier for the loan application.\nPersonally identifiable information, such as an email address or phone number, should not be used in the \`application_id\`.").optional(), "application_date": z.string().date().describe("The date the user applied for the loan. The date should be in ISO 8601 format (YYYY-MM-DD).").optional() }).catchall(z.any()).describe("Contains loan application data to register.").optional() }).catchall(z.any()).describe("Contains loan data to register.")).describe("A list of loans to register.")
}
```

### craloansupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "loans": z.array(z.object({ "loan_id": z.string().describe("A unique identifier for the loan.\nPersonally identifiable information, such as an email address or phone number, should not be used in the \`loan_id\`.").optional(), "status_history": z.array(z.object({ "status": z.enum(["APPROVED","DECLINED","BOOKED","CURRENT","DELINQUENT","DEFAULT","CHARGED_OFF","TRANSFERRED","PAID_OFF","OTHER"]).describe("The status of the loan."), "date": z.string().date().describe("The effective date for the status of the loan. The date should be in ISO 8601 format (YYYY-MM-DD).") }).catchall(z.any()).describe("Contains the status and date of an update to the loan.")).describe("A list of status update history of the loan.").optional(), "payment_history": z.array(z.object({ "period": z.number().int().describe("The index to identify the loan's payment period, starting from 1.\nFor example:\n  1 means the period between the loan's opening date and the 1st payment due date.\n  2 means the period between the loan's 1st payment due date and 2nd payment due date."), "due_date": z.string().date().describe("The payment due date or end date of the payment period. The date should be in ISO 8601 format (YYYY-MM-DD)."), "days_past_due": z.number().int().describe("The number of days the loan was delinquent at the end of the pay period.\nIf specified, should be greater of equal to 0."), "amount_past_due": z.number().describe("The amount past due or the charge-off amount of the loan at the end of the payment period.").optional(), "balance_remaining": z.number().describe("The balance remaining on the loan at the end of the payment period.").optional() }).catchall(z.any()).describe("Contains the payment information for a loan payment period.")).describe("The updates to the payment history for the loan.").optional() }).catchall(z.any()).describe("Contains loan data to update.")).describe("A list of loans to update.")
}
```

### craloansunregister

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "loans": z.array(z.object({ "loan_id": z.string().describe("A unique identifier for the loan.\nPersonally identifiable information, such as an email address or phone number, should not be used in the \`loan_id\`."), "closed_with_status": z.object({ "status": z.enum(["APPROVED","DECLINED","BOOKED","CURRENT","DELINQUENT","DEFAULT","CHARGED_OFF","TRANSFERRED","PAID_OFF","OTHER"]).describe("The status of the loan."), "date": z.string().date().describe("The effective date for the status of the loan. The date should be in ISO 8601 format (YYYY-MM-DD).") }).catchall(z.any()).describe("Contains the status and date information of the loan when unregistering.") }).catchall(z.any()).describe("Contains loan data for the loan being unregistered.")).describe("A list of loans to unregister.")
}
```

### consumerreportpdfget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### statementslist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### statementsdownload

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "statement_id": z.string().describe("Plaid's unique identifier for the statements.")
}
```

### statementsrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The start date for statements, in \"YYYY-MM-DD\" format, e.g. \"2023-08-30\". To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day."),
  "end_date": z.string().date().describe("The end date for statements, in \"YYYY-MM-DD\" format, e.g. \"2023-10-30\". You can request up to two years of data. To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day.")
}
```

### consenteventsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### itemactivitylist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.").optional(),
  "cursor": z.string().describe("Cursor used for pagination.").optional(),
  "count": z.number().int().gte(1).lte(50).optional()
}
```

### itemapplicationlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().nullable().describe("The access token associated with the Item data is being requested for.").optional()
}
```

### itemapplicationunlink

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "application_id": z.string().describe("This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect.")
}
```

### itemapplicationscopesupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "application_id": z.string().describe("This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect."),
  "scopes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe scopes object"),
  "state": z.string().describe("When scopes are updated during enrollment, this field must be populated with the state sent to the partner in the OAuth Login URI. This field is required when the context is \`ENROLLMENT\`.").optional(),
  "context": z.enum(["ENROLLMENT","PORTAL"]).describe("An indicator for when scopes are being updated. When scopes are updated via enrollment (i.e. OAuth), the partner must send \`ENROLLMENT\`. When scopes are updated in a post-enrollment view, the partner must send \`PORTAL\`.")
}
```

### applicationget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body."),
  "application_id": z.string().describe("This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect.")
}
```

### itemget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### useraccountsessionget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "public_token": z.string().describe("The public token generated by the end user Layer session.")
}
```

### x_hidden_from_docs_profile_network_status_get

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### profilenetworkstatusget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object specifying information about the end user for the network status check.")
}
```

### networkstatusget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object specifying information about the end user for the network status check."),
  "template_id": z.string().describe("The id of a template defined in Plaid Dashboard. This field is used if you have additional criteria that you want to check against (e.g. Layer eligibility).").optional()
}
```

### authget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/auth/get\` results.").optional()
}
```

### transactionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.")
}
```

### transactionsrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### x_hidden_from_docs_cashflow_report_refresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### cashflowreportrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "days_requested": z.number().int().gte(1).lte(730).describe("Number of days to retrieve transactions data for (1 to 730)")
}
```

### x_hidden_from_docs_cashflow_report_get

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### cashflowreportget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "days_requested": z.number().int().gte(1).lte(730).describe("Number of days to retrieve transactions data for (1 to 730)"),
  "count": z.number().int().gte(1).lte(500).describe("Number of transactions to fetch per call").optional(),
  "cursor": z.string().describe("The cursor value represents the last update requested. Pass in the empty string \"\" in the first call.").optional()
}
```

### transactionsrecurringget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional(),
  "account_ids": z.array(z.string()).describe("An optional list of \`account_ids\` to retrieve for the Item. Retrieves all active accounts on item if no \`account_id\`s are provided.\n\nNote: An error will be returned if a provided \`account_id\` is not associated with the Item.").optional()
}
```

### transactionssync

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "cursor": z.string().describe("The cursor value represents the last update requested. Providing it will cause the response to only return changes after this update.\nIf omitted, the entire history of updates will be returned, starting with the first-added transactions on the Item. The cursor also accepts the special value of \`\"now\"\`, which can be used to fast-forward the cursor as part of migrating an existing Item from \`/transactions/get\` to \`/transactions/sync\`. For more information, see the [Transactions sync migration guide](https://plaid.com/docs/transactions/sync-migration/). Note that using the \`\"now\"\` value is not supported for any use case other than migrating existing Items from \`/transactions/get\`.\n\nThe upper-bound length of this cursor is 256 characters of base64.").optional(),
  "count": z.number().int().gte(1).lte(500).describe("The number of transaction updates to fetch.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional()
}
```

### transactionsenrich

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "account_type": z.string().describe("The account type for the requested transactions (either \`depository\` or \`credit\`)."),
  "transactions": z.array(z.object({ "id": z.string().describe("A unique ID for the transaction used to help you tie data back to your systems."), "client_user_id": z.string().describe("A unique user id used to group transactions for a given user, as a unique identifier from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id.").optional(), "client_account_id": z.string().describe("A unique account id used to group transactions for a given account, as a unique identifier from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_account_id.").optional(), "account_type": z.string().describe("The account type associated with the transaction. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).").optional(), "account_subtype": z.string().describe("The account subtype associated with the transaction. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).").optional(), "description": z.string().describe("The raw description of the transaction. If you have location data in available an unstructured format, it may be appended to the \`description\` field."), "amount": z.number().describe("The absolute value of the transaction (>= 0). When testing Enrich, note that \`amount\` data should be realistic. Unrealistic or inaccurate \`amount\` data may result in reduced quality output."), "direction": z.enum(["INFLOW","OUTFLOW"]).describe("The direction of the transaction from the perspective of the account holder:\n\n\`OUTFLOW\` - Includes outgoing transfers, purchases, and fees. (Typically represented as a negative value on checking accounts and debit cards and a positive value on credit cards.)\n\n\`INFLOW\` - Includes incoming transfers, refunds, and income. (Typically represented as a positive value on checking accounts and debit cards and a negative value on credit cards.)"), "iso_currency_code": z.string().describe("The ISO-4217 currency code of the transaction e.g. USD."), "location": z.object({ "country": z.string().describe("The country where the transaction occurred.").optional(), "region": z.string().describe("The region or state where the transaction occurred.").optional(), "city": z.string().describe("The city where the transaction occurred.").optional(), "address": z.string().describe("The street address where the transaction occurred.").optional(), "postal_code": z.string().describe("The postal code where the transaction occurred.").optional() }).catchall(z.any()).describe("A representation of where a transaction took place.\n\nUse this field to pass in structured location information you may have about your transactions. Providing location data is optional but can increase result quality. If you have unstructured location information, it may be appended to the \`description\` field.").optional(), "mcc": z.string().describe("Merchant category codes (MCCs) are four-digit numbers that describe a merchant's primary business activities.").optional(), "date_posted": z.string().date().describe("The date the transaction posted, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format.").optional() }).catchall(z.any()).describe("A client-provided transaction for Plaid to enrich.")).describe("An array of transaction objects to be enriched by Plaid. Maximum of 100 transactions per request."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request.").optional()
}
```

### institutionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "count": z.number().int().gte(1).lte(500).describe("The total number of Institutions to return."),
  "offset": z.number().int().gte(0).describe("The number of Institutions to skip."),
  "country_codes": z.array(z.enum(["US","GB","ES","NL","FR","IE","CA","DE","IT","PL","DK","NO","SE","EE","LT","LV","PT","BE"]).describe("ISO-3166-1 alpha-2 country code standard.")).min(1).describe("Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard.\n\nIn API versions 2019-05-29 and earlier, the \`country_codes\` parameter is an optional parameter within the \`options\` object and will default to \`[US]\` if it is not supplied.\n"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/institutions/get\` results.").optional()
}
```

### institutionssearch

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "query": z.string().min(1).describe("The search query. Institutions with names matching the query are returned"),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).nullable().describe("Filter the Institutions based on whether they support all products listed in \`products\`. Provide \`null\` to get institutions regardless of supported products. Note that when \`auth\` is specified as a product, if you are enabled for Instant Match or Automated Micro-deposits, institutions that support those products will be returned even if \`auth\` is not present in their product array.").optional(),
  "country_codes": z.array(z.enum(["US","GB","ES","NL","FR","IE","CA","DE","IT","PL","DK","NO","SE","EE","LT","LV","PT","BE"]).describe("ISO-3166-1 alpha-2 country code standard.")).describe("Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the \`country_codes\` parameter is an optional parameter within the \`options\` object and will default to \`[US]\` if it is not supplied.\n"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/institutions/search\` results.").optional()
}
```

### institutionsgetbyid

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "institution_id": z.string().min(1).describe("The ID of the institution to get details about"),
  "country_codes": z.array(z.enum(["US","GB","ES","NL","FR","IE","CA","DE","IT","PL","DK","NO","SE","EE","LT","LV","PT","BE"]).describe("ISO-3166-1 alpha-2 country code standard.")).describe("Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the \`country_codes\` parameter is an optional parameter within the \`options\` object and will default to \`[US]\` if it is not supplied.\n"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies optional parameters for \`/institutions/get_by_id\`. If provided, must not be \`null\`.").optional()
}
```

### itemremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### accountsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/accounts/get\` results.").optional()
}
```

### categoriesget

**Environment variables**



**Input schema**

```ts
{}
```

### sandboxprocessortokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "institution_id": z.string().describe("The ID of the institution the Item will be associated with"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional set of options to be used when configuring the Item. If specified, must not be \`null\`.").optional()
}
```

### sandboxpublictokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "institution_id": z.string().describe("The ID of the institution the Item will be associated with"),
  "initial_products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).describe("The products to initially pull for the Item. May be any products that the specified \`institution_id\`  supports. This array may not be empty."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional set of options to be used when configuring the Item. If specified, must not be \`null\`.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional()
}
```

### sandboxitemfirewebhook

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "webhook_type": z.enum(["AUTH","HOLDINGS","INVESTMENTS_TRANSACTIONS","ITEM","LIABILITIES","TRANSACTIONS","ASSETS"]).describe("The webhook types that can be fired by this test endpoint.").optional(),
  "webhook_code": z.enum(["DEFAULT_UPDATE","NEW_ACCOUNTS_AVAILABLE","SMS_MICRODEPOSITS_VERIFICATION","AUTHORIZATION_GRANTED","USER_PERMISSION_REVOKED","USER_ACCOUNT_REVOKED","PENDING_DISCONNECT","RECURRING_TRANSACTIONS_UPDATE","LOGIN_REPAIRED","SYNC_UPDATES_AVAILABLE","PRODUCT_READY","ERROR"]).describe("The webhook codes that can be fired by this test endpoint.")
}
```

### accountsbalanceget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional parameters to \`/accounts/balance/get\`.").optional(),
  "payment_details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nTo enable Balance Plus (beta), send this object as part of the \`/accounts/balance/get\` request. Only available to customers participating in the Balance Plus beta program; to enroll in the beta, contact your account manager. If this object is present in the request, the [\`payment_risk_assessment\`](https://plaid.com/docs/balance/balance-plus/#accounts-balance-get-response-payment-risk-assessment-risk-level) object will be present in the response.").optional()
}
```

### identityget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/identity/get\` results.").optional()
}
```

### identitydocumentsuploadsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/identity/documents/uploads/get\` results.").optional()
}
```

### identitymatch

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe user's legal name, phone number, email address and address used to perform fuzzy match. If Financial Account Matching is enabled in the Identity Verification product, leave this field empty to automatically match against PII collected from the Identity Verification checks.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter /identity/match results").optional()
}
```

### identityrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### dashboarduserget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "dashboard_user_id": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use \`/dashboard_user/get\`."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### dashboarduserlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### identityverificationcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "is_shareable": z.boolean().describe("A flag specifying whether you would like Plaid to expose a shareable URL for the verification being created."),
  "template_id": z.string().describe("ID of the associated Identity Verification template."),
  "gave_consent": z.boolean().describe("A flag specifying whether the end user has already agreed to a privacy policy specifying that their data will be shared with Plaid for verification purposes.\n\nIf \`gave_consent\` is set to \`true\`, the \`accept_tos\` step will be marked as \`skipped\` and the end user's session will start at the next step requirement."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUser information collected outside of Link, most likely via your own onboarding process.\n\nEach of the following identity fields are optional:\n\n\`email_address\`\n\n\`phone_number\`\n\n\`date_of_birth\`\n\n\`name\`\n\n\`address\`\n\n\`id_number\`\n\nSpecifically, these fields are optional in that they can either be fully provided (satisfying every required field in their subschema) or omitted from the request entirely by not providing the key or value.\nProviding these fields via the API will result in Link skipping the data collection process for the associated user. All verification steps enabled in the associated Identity Verification Template will still be run. Verification steps will either be run immediately, or once the user completes the \`accept_tos\` step, depending on the value provided to the \`gave_consent\` field.\nIf you are not using the shareable URL feature, you can optionally provide these fields via \`/link/token/create\` instead; both \`/identity_verification/create\` and \`/link/token/create\` are valid ways to provide this information. Note that if you provide a non-\`null\` user data object via \`/identity_verification/create\`, any user data fields entered via \`/link/token/create\` for the same \`client_user_id\` will be ignored when prefilling Link.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "is_idempotent": z.boolean().nullable().describe("An optional flag specifying how you would like Plaid to handle attempts to create an Identity Verification when an Identity Verification already exists for the provided \`client_user_id\` and \`template_id\`.\nIf idempotency is enabled, Plaid will return the existing Identity Verification. If idempotency is disabled, Plaid will reject the request with a \`400 Bad Request\` status code if an Identity Verification already exists for the supplied \`client_user_id\` and \`template_id\`.").optional()
}
```

### identityverificationget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "identity_verification_id": z.string().describe("ID of the associated Identity Verification attempt."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### identityverificationlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "template_id": z.string().describe("ID of the associated Identity Verification template."),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### identityverificationretry

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`."),
  "template_id": z.string().describe("ID of the associated Identity Verification template."),
  "strategy": z.enum(["reset","incomplete","infer","custom"]).describe("An instruction specifying what steps the new Identity Verification attempt should require the user to complete:\n\n\n\`reset\` - Restart the user at the beginning of the session, regardless of whether they successfully completed part of their previous session.\n\n\`incomplete\` - Start the new session at the step that the user failed in the previous session, skipping steps that have already been successfully completed.\n\n\`infer\` - If the most recent Identity Verification attempt associated with the given \`client_user_id\` has a status of \`failed\` or \`expired\`, retry using the \`incomplete\` strategy. Otherwise, use the \`reset\` strategy.\n\n\`custom\` - Start the new session with a custom configuration, specified by the value of the \`steps\` field\n\nNote:\n\nThe \`incomplete\` strategy cannot be applied if the session's failing step is \`screening\` or \`risk_check\`.\n\nThe \`infer\` strategy cannot be applied if the session's status is still \`active\`"),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUser information collected outside of Link, most likely via your own onboarding process.\n\nEach of the following identity fields are optional:\n\n\`email_address\`\n\n\`phone_number\`\n\n\`date_of_birth\`\n\n\`name\`\n\n\`address\`\n\n\`id_number\`\n\nSpecifically, these fields are optional in that they can either be fully provided (satisfying every required field in their subschema) or omitted from the request entirely by not providing the key or value.\nProviding these fields via the API will result in Link skipping the data collection process for the associated user. All verification steps enabled in the associated Identity Verification Template will still be run. Verification steps will either be run immediately, or once the user completes the \`accept_tos\` step, depending on the value provided to the \`gave_consent\` field.").optional(),
  "steps": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInstructions for the \`custom\` retry strategy specifying which steps should be required or skipped.\n\n\nNote:\n\n\nThis field must be provided when the retry strategy is \`custom\` and must be omitted otherwise.\n\nCustom retries override settings in your Plaid Template. For example, if your Plaid Template has \`verify_sms\` disabled, a custom retry with \`verify_sms\` enabled will still require the step.\n\nThe \`selfie_check\` step is currently not supported on the sandbox server. Sandbox requests will silently disable the \`selfie_check\` step when provided.").optional(),
  "is_shareable": z.boolean().nullable().describe("A flag specifying whether you would like Plaid to expose a shareable URL for the verification being retried. If a value for this flag is not specified, the \`is_shareable\` setting from the original verification attempt will be used.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### watchlistscreeningentitycreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "search_terms": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSearch inputs for creating an entity watchlist screening"),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### watchlistscreeningentityget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### watchlistscreeningentityhistorylist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningentityhitlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningentitylist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "entity_watchlist_program_id": z.string().describe("ID of the associated entity program."),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use \`/dashboard_user/get\`.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningentityprogramget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "entity_watchlist_program_id": z.string().describe("ID of the associated entity program."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### watchlistscreeningentityprogramlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningentityreviewcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "confirmed_hits": z.array(z.string().describe("ID of the associated entity screening hit.")).describe("Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected."),
  "dismissed_hits": z.array(z.string().describe("ID of the associated entity screening hit.")).describe("Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed."),
  "comment": z.string().nullable().describe("A comment submitted by a team member as part of reviewing a watchlist screening.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening.")
}
```

### watchlistscreeningentityreviewlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningentityupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "search_terms": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSearch terms for editing an entity watchlist screening").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use \`/dashboard_user/get\`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "reset_fields": z.array(z.literal("assignee").describe("The name of a field that can be reset back to null")).nullable().describe("A list of fields to reset back to null").optional()
}
```

### watchlistscreeningindividualcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "search_terms": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSearch inputs for creating a watchlist screening"),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### watchlistscreeningindividualget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### watchlistscreeningindividualhistorylist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningindividualhitlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningindividuallist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "watchlist_program_id": z.string().describe("ID of the associated program."),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use \`/dashboard_user/get\`.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningindividualprogramget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "watchlist_program_id": z.string().describe("ID of the associated program."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional()
}
```

### watchlistscreeningindividualprogramlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningindividualreviewcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "confirmed_hits": z.array(z.string().describe("ID of the associated screening hit.")).describe("Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected."),
  "dismissed_hits": z.array(z.string().describe("ID of the associated screening hit.")).describe("Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed."),
  "comment": z.string().nullable().describe("A comment submitted by a team member as part of reviewing a watchlist screening.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening.")
}
```

### watchlistscreeningindividualreviewlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}
```

### watchlistscreeningindividualupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "search_terms": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSearch terms for editing an individual watchlist screening").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use \`/dashboard_user/get\`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "reset_fields": z.array(z.literal("assignee").describe("The name of a field that can be reset back to null")).nullable().describe("A list of fields to reset back to null").optional()
}
```

### x_hidden_from_docs_beacon_account_risk_v1_evaluate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### beaconaccountriskevaluate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/beacon/account_risk/v1/evaluate\` results to a subset of the accounts on the linked Item.").optional(),
  "client_user_id": z.string().min(1).max(36).describe("A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple evaluations and/or multiple linked accounts. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id.").optional(),
  "client_evaluation_id": z.string().describe("Unique identifier of what you are looking to evaluate (account add, information change, etc.) to allow us to tie the activity to the decisions and possible fraud outcome sent via our feedback endpoints. You can use your internal request ID or similar.").optional(),
  "evaluation_reason": z.enum(["ONBOARDING","NEW_ACCOUNT","INFORMATION_CHANGE","DORMANT_USER","OTHER"]).describe("Description of the reason you want to evaluate risk.\n\`ONBOARDING\`: user links a first bank account as part of the onboarding flow of your platform.\n\`NEW_ACCOUNT\`: user links another bank account or replaces the currently linked bank account on your platform.\n\`INFORMATION_CHANGE\`: user changes their information on your platform, e.g., updating their phone number.\n\`DORMANT_USER\`:  you decide to re-evaluate a user that becomes active after a period of inactivity.  \n\`OTHER\`: any other reasons not listed here\nPossible values:  \`ONBOARDING\`, \`NEW_ACCOUNT\`, \`INFORMATION_CHANGE\`, \`DORMANT_USER\`, \`OTHER\`\n").optional(),
  "device": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails about the end user's device. When calling \`/signal/evaluate\` or \`/signal/processor/evaluate\`, this field is optional, but strongly recommended to increase the accuracy of Signal results.").optional(),
  "evaluate_time": z.string().describe("The time the event for evaluation has occurred. Populate this field for backfilling data. If you don’t populate this field, we’ll use the timestamp at the time of receipt. Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ).").optional()
}
```

### beaconusercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "program_id": z.string().describe("ID of the associated Beacon Program."),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the \`/link/token/create\` \`client_user_id\` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA Beacon User's data which is used to check against duplicate records and the Beacon Fraud Network.\n\nIn order to create a Beacon User, in addition to the \`name\`, _either_ the \`date_of_birth\` _or_ the \`depository_accounts\` field must be provided."),
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).nullable().describe("Send this array of access tokens to link accounts to the Beacon User and have them evaluated for Account Insights.\nA maximum of 50 accounts total can be added to a single Beacon User.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconuserget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconuserreview

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status of a Beacon User.\n\n\`rejected\`: The Beacon User has been rejected for fraud. Users can be automatically or manually rejected.\n\n\`pending_review\`: The Beacon User has been marked for review.\n\n\`cleared\`: The Beacon User has been cleared of fraud."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconreportcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "type": z.enum(["first_party","stolen","synthetic","account_takeover","data_breach","unknown"]).describe("The type of Beacon Report.\n\n\`first_party\`: If this is the same individual as the one who submitted the KYC.\n\n\`stolen\`: If this is a different individual from the one who submitted the KYC.\n\n\`synthetic\`: If this is an individual using fabricated information.\n\n\`account_takeover\`: If this individual's account was compromised.\n\n\`unknown\`: If you aren't sure who committed the fraud."),
  "fraud_date": z.string().date().describe("A date in the format YYYY-MM-DD (RFC 3339 Section 5.6)."),
  "fraud_amount": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe amount and currency of the fraud or attempted fraud.\n\`fraud_amount\` should be omitted to indicate an unknown fraud amount.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconreportlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconreportsyndicationlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconreportget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_report_id": z.string().describe("ID of the associated Beacon Report."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconreportsyndicationget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_report_syndication_id": z.string().describe("ID of the associated Beacon Report Syndication."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconuserupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA subset of a Beacon User's data which is used to patch the existing identity data associated with a Beacon User. At least one field must be provided. If left unset or null, user data will not be patched.").optional(),
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).nullable().describe("Send this array of access tokens to add accounts to this user for evaluation.\nThis will add accounts to this Beacon User. If left null only existing accounts will be returned in response.\nA maximum of 50 accounts total can be added to a Beacon User.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconduplicateget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_duplicate_id": z.string().describe("ID of the associated Beacon Duplicate."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### identityverificationautofillcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "identity_verification_id": z.string().describe("ID of the associated Identity Verification attempt."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconuserhistorylist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional(),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### beaconuseraccountinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### processorauthget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`")
}
```

### processoraccountget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### processorinvestmentsholdingsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### processorinvestmentstransactionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/investments/transactions/get\` results. If provided, must be non-\`null\`.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.")
}
```

### processortransactionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.")
}
```

### processortransactionssync

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "cursor": z.string().describe("The cursor value represents the last update requested. Providing it will cause the response to only return changes after this update.\nIf omitted, the entire history of updates will be returned, starting with the first-added transactions on the item.\nNote: The upper-bound length of this cursor is 256 characters of base64.").optional(),
  "count": z.number().int().gte(1).lte(500).describe("The number of transaction updates to fetch.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional()
}
```

### processortransactionsrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### processortransactionsrecurringget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to be used with the request. If specified, \`options\` must not be \`null\`.").optional()
}
```

### processorsignalevaluate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "client_transaction_id": z.string().min(1).max(36).describe("The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters."),
  "amount": z.number().describe("The transaction amount, in USD (e.g. \`102.05\`)"),
  "user_present": z.boolean().nullable().describe("\`true\` if the end user is present while initiating the ACH transfer and the endpoint is being called; \`false\` otherwise (for example, when the ACH transfer is scheduled and the end user is not present, or you call this endpoint after the ACH transfer but before submitting the Nacha file for ACH processing).").optional(),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple Items. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "is_recurring": z.boolean().nullable().describe("**true** if the ACH transaction is a recurring transaction; **false** otherwise ").optional(),
  "default_payment_method": z.string().nullable().describe("The default ACH or non-ACH payment method to complete the transaction.\n\`SAME_DAY_ACH\`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day\n\`NEXT_DAY_ACH\`: Next Day ACH settlement for debit transactions, offered by some payment processors\n\`STANDARD_ACH\`: standard ACH by NACHA\n\`REAL_TIME_PAYMENTS\`: real-time payments such as RTP and FedNow\n\`DEBIT_CARD\`: if the default payment is over debit card networks\n\`MULTIPLE_PAYMENT_METHODS\`: if there is no default debit rail or there are multiple payment methods\nPossible values:  \`SAME_DAY_ACH\`, \`NEXT_DAY_ACH\`, \`STANDARD_ACH\`, \`REAL_TIME_PAYMENTS\`, \`DEBIT_CARD\`, \`MULTIPLE_PAYMENT_METHODS\`").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails about the end user initiating the transaction (i.e., the account holder). When calling \`/signal/evaluate\` or \`/signal/processor/evaluate\`, this field is optional, but strongly recommended to increase the accuracy of Signal results.").optional(),
  "device": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails about the end user's device. When calling \`/signal/evaluate\` or \`/signal/processor/evaluate\`, this field is optional, but strongly recommended to increase the accuracy of Signal results.").optional(),
  "ruleset_key": z.string().nullable().describe("The key of the Ruleset to use for this transaction. You can configure a Ruleset using the Signal dashboard located within the Plaid Dashboard. If not provided, no Ruleset will be used. This feature is currently in closed beta; to request access, contact your account manager.").optional()
}
```

### processorsignaldecisionreport

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the \`client_transaction_id\` supplied when calling \`/signal/evaluate\`"),
  "initiated": z.boolean().describe("\`true\` if the ACH transaction was initiated, \`false\` otherwise.\n\nThis field must be returned as a boolean. If formatted incorrectly, this will result in an [\`INVALID_FIELD\`](/docs/errors/invalid-request/#invalid_field) error."),
  "days_funds_on_hold": z.number().int().gte(0).nullable().describe("The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.\n\nFor example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization.").optional(),
  "decision_outcome": z.enum(["APPROVE","REVIEW","REJECT","TAKE_OTHER_RISK_MEASURES","NOT_EVALUATED"]).nullable().describe("The payment decision from the risk assessment.\n\n\`APPROVE\`: approve the transaction without requiring further actions from your customers. For example, use this field if you are placing a standard hold for all the approved transactions before making funds available to your customers. You should also use this field if you decide to accelerate the fund availability for your customers.\n\n\`REVIEW\`: the transaction requires manual review\n\n\`REJECT\`: reject the transaction\n\n\`TAKE_OTHER_RISK_MEASURES\`: for example, placing a longer hold on funds than those approved transactions or introducing customer frictions such as step-up verification/authentication\n\n\`NOT_EVALUATED\`: if only logging the Signal results without using them\n\nPossible values:  \`APPROVE\`, \`REVIEW\`, \`REJECT\`, \`TAKE_OTHER_RISK_MEASURES\`, \`NOT_EVALUATED\`\n").optional(),
  "payment_method": z.enum(["SAME_DAY_ACH","NEXT_DAY_ACH","STANDARD_ACH","REAL_TIME_PAYMENTS","DEBIT_CARD","MULTIPLE_PAYMENT_METHODS"]).nullable().describe("The payment method to complete the transaction after the risk assessment. It may be different from the default payment method.\n\n\`SAME_DAY_ACH\`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day\n\n\`NEXT_DAY_ACH\`: Next Day ACH settlement for debit transactions, offered by some payment processors\n\n\`STANDARD_ACH\`: standard ACH by NACHA\n\n\`REAL_TIME_PAYMENTS\`: real-time payments such as RTP and FedNow\n\n\`DEBIT_CARD\`: if the default payment is over debit card networks\n\n\`MULTIPLE_PAYMENT_METHODS\`: if there is no default debit rail or there are multiple payment methods\n\nPossible values: \`SAME_DAY_ACH\`, \`NEXT_DAY_ACH\`, \`STANDARD_ACH\`, \`REAL_TIME_PAYMENTS\`, \`DEBIT_CARD\`, \`MULTIPLE_PAYMENT_METHODS\`\n").optional(),
  "amount_instantly_available": z.number().nullable().describe("The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05).").optional()
}
```

### processorsignalreturnreport

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the \`client_transaction_id\` supplied when calling \`/processor/signal/evaluate\`"),
  "return_code": z.string().describe("Must be a valid ACH return code (e.g. \"R01\")\n\nIf formatted incorrectly, this will result in an [\`INVALID_FIELD\`](/docs/errors/invalid-request/#invalid_field) error."),
  "returned_at": z.string().datetime({ offset: true }).nullable().describe("Date and time when you receive the returns from your payment processors, in ISO 8601 format (\`YYYY-MM-DDTHH:mm:ssZ\`).").optional()
}
```

### processorsignalprepare

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`")
}
```

### processorbanktransfercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "idempotency_key": z.string().max(50).describe("A random key provided by the client, per unique bank transfer. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a bank transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single bank transfer is created."),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "type": z.enum(["debit","credit"]).describe("The type of bank transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into the origination account; a \`credit\` indicates a transfer of money out of the origination account."),
  "network": z.enum(["ach","same-day-ach","wire"]).describe("The network or rails used for the transfer. Valid options are \`ach\`, \`same-day-ach\`, or \`wire\`."),
  "amount": z.string().describe("The amount of the bank transfer (decimal string with two digits of precision e.g. \"10.00\")."),
  "iso_currency_code": z.string().describe("The currency of the transfer amount – should be set to \"USD\"."),
  "description": z.string().max(10).describe("The transfer description. Maximum of 10 characters."),
  "ach_class": z.enum(["ccd","ppd","tel","web"]).describe("Specifies the use case of the transfer. Required for transfers on an ACH network. For more details, see [ACH SEC codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).\n\nCodes supported for credits: \`ccd\`, \`ppd\`\nCodes supported for debits: \`ccd\`, \`tel\`, \`web\`\n\n\`\"ccd\"\` - Corporate Credit or Debit - fund transfer between two corporate bank accounts\n\n\`\"ppd\"\` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship with a consumer. Authorization was obtained in writing either in person or via an electronic document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.\n\n\`\"web\"\` - Internet-Initiated Entry. The transfer debits a consumer’s bank account. Authorization from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used for single debits or recurring debits.\n\n\`\"tel\"\` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has been received orally over the telephone via a recorded call.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe legal name and other information for the account holder."),
  "custom_tag": z.string().max(100).nullable().describe("An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:\nThe JSON values must be Strings (no nested JSON objects allowed)\nOnly ASCII characters may be used\nMaximum of 50 key/value pairs\nMaximum key length of 40 characters\nMaximum value length of 500 characters\n").optional(),
  "origination_account_id": z.string().nullable().describe("Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified.").optional()
}
```

### processorliabilitiesget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`")
}
```

### processoridentityget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`")
}
```

### processoridentitymatch

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe user's legal name, phone number, email address and address used to perform fuzzy match. If Financial Account Matching is enabled in the Identity Verification product, leave this field empty to automatically match against PII collected from the Identity Verification checks.").optional()
}
```

### processorbalanceget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional parameters to \`/processor/balance/get\`.").optional()
}
```

### itemwebhookupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "webhook": z.string().nullable().describe("The new webhook URL to associate with the Item. To remove a webhook from an Item, set to \`null\`.").optional()
}
```

### itemaccesstokeninvalidate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### webhookverificationkeyget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "key_id": z.string().describe("The key ID ( \`kid\` ) from the JWT header.")
}
```

### liabilitiesget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/liabilities/get\` results. If provided, \`options\` cannot be null.").optional()
}
```

### paymentinitiationrecipientcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "name": z.string().min(1).describe("The name of the recipient. We recommend using strings of length 18 or less and avoid special characters to ensure compatibility with all institutions."),
  "iban": z.string().min(15).max(34).nullable().describe("The International Bank Account Number (IBAN) for the recipient. If BACS data is not provided, an IBAN is required.").optional(),
  "bacs": z.string().optional(),
  "address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe optional address of the payment recipient's bank account. Required by most institutions outside of the UK.").optional()
}
```

### paymentinitiationpaymentreverse

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_id": z.string().describe("The ID of the payment to reverse"),
  "idempotency_key": z.string().min(1).max(128).describe("A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a wallet transaction fails due to a network connection error, then after a minimum delay of one minute, you can retry the request with the same idempotency key to guarantee that only a single wallet transaction is created. If the request was successfully processed, it will prevent any transaction that uses the same idempotency key, and was received within 24 hours of the first request, from being processed."),
  "reference": z.string().min(6).max(18).describe("A reference for the refund. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces."),
  "amount": z.string().optional(),
  "counterparty_date_of_birth": z.string().date().nullable().describe("The counterparty's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format.").optional(),
  "counterparty_address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe optional address of the payment recipient's bank account. Required by most institutions outside of the UK.").optional()
}
```

### paymentinitiationrecipientget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "recipient_id": z.string().describe("The ID of the recipient")
}
```

### paymentinitiationrecipientlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### paymentinitiationpaymentcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "recipient_id": z.string().describe("The ID of the recipient the payment is for."),
  "reference": z.string().min(1).max(18).describe("A reference for the payment. This must be an alphanumeric string with at most 18 characters and must not contain any special characters (since not all institutions support them).\nIn order to track settlement via Payment Confirmation, each payment must have a unique reference. If the reference provided through the API is not unique, Plaid will adjust it.\nSome institutions may limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference by truncating it to fit the institution's requirements.\nBoth the originally provided and automatically adjusted references (if any) can be found in the \`reference\` and \`adjusted_reference\` fields, respectively."),
  "amount": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe amount and currency of a payment"),
  "schedule": z.string().optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional payment options").optional()
}
```

### createpaymenttoken

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_id": z.string().describe("The \`payment_id\` returned from \`/payment_initiation/payment/create\`.")
}
```

### paymentinitiationconsentcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "recipient_id": z.string().describe("The ID of the recipient the payment consent is for. The created consent can be used to transfer funds to this recipient only."),
  "reference": z.string().min(1).max(18).describe("A reference for the payment consent. This must be an alphanumeric string with at most 18 characters and must not contain any special characters."),
  "type": z.enum(["SWEEPING","COMMERCIAL"]).describe("Payment consent type. Defines possible use case for payments made with the given consent.\n\n\`SWEEPING\`: Allows moving money between accounts owned by the same user.\n\n\`COMMERCIAL\`: Allows initiating payments from the user's account to third parties.").optional(),
  "constraints": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nLimitations that will be applied to payments initiated using the payment consent."),
  "payer_details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object representing the payment consent payer details.\nPayer \`name\` and account \`numbers\` are required to lock the account to which the consent can be created.").optional()
}
```

### paymentinitiationconsentget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "consent_id": z.string().describe("The \`consent_id\` returned from \`/payment_initiation/consent/create\`.")
}
```

### paymentinitiationconsentrevoke

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "consent_id": z.string().describe("The consent ID.")
}
```

### paymentinitiationconsentpaymentexecute

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "consent_id": z.string().describe("The consent ID."),
  "amount": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe amount and currency of a payment"),
  "idempotency_key": z.string().min(1).max(128).describe("A random key provided by the client, per unique consent payment. Maximum of 128 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a consent payment fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single payment is created. If the request was successfully processed, it will prevent any payment that uses the same idempotency key, and was received within 48 hours of the first request, from being processed."),
  "reference": z.string().min(1).max(18).nullable().describe("A reference for the payment. This must be an alphanumeric string with at most 18 characters and must not contain any special characters (since not all institutions support them).\nIf not provided, Plaid will automatically fall back to the reference from consent. In order to track settlement via Payment Confirmation, each payment must have a unique reference. If the reference provided through the API is not unique, Plaid will adjust it.\nSome institutions may limit the reference to less than 18 characters. If necessary, Plaid will adjust the reference by truncating it to fit the institution's requirements.\nBoth the originally provided and automatically adjusted references (if any) can be found in the \`reference\` and \`adjusted_reference\` fields, respectively.").optional(),
  "processing_mode": z.enum(["ASYNC","IMMEDIATE"]).describe("Decides the mode under which the payment processing should be performed, using \`IMMEDIATE\` as default.\n\n\`IMMEDIATE\`: Will immediately execute the payment, waiting for a response from the ASPSP before returning the result of the payment initiation. This is ideal for user-present flows.\n\n \`ASYNC\`: Will accept a payment execution request and schedule it for processing, immediately returning the new \`payment_id\`. Listen for webhooks or use the [\`/payment_initiation/payment/get\`](https://plaid.com/docs/api/products/payment-initiation/#payment_initiationpaymentget) endpoint to obtain updates on the payment status. This is ideal for non user-present flows.").optional()
}
```

### sandboxitemresetlogin

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### sandboxitemsetverificationstatus

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The \`account_id\` of the account whose verification status is to be modified"),
  "verification_status": z.enum(["automatically_verified","verification_expired"]).describe("The verification status to set the account to.")
}
```

### sandboxuserresetlogin

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "item_ids": z.array(z.string().describe("The \`item_id\` of the Item associated with this webhook, warning, or error")).nullable().describe("An array of \`item_id\`s associated with the User to be reset.  If empty or \`null\`, this field will default to resetting all Items associated with the User.").optional()
}
```

### itempublictokenexchange

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "public_token": z.string().describe("Your \`public_token\`, obtained from the Link \`onSuccess\` callback or \`/sandbox/item/public_token/create\`.")
}
```

### itemcreatepublictoken

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### usercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_user_id": z.string().min(1).max(128).describe("A unique ID representing the end user. Maximum of 128 characters. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`."),
  "end_customer": z.string().min(0).max(128).describe("A unique ID representing a CRA reseller's end customer. Maximum of 128 characters.").optional(),
  "consumer_report_user_identity": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nTo create a Plaid Check Consumer Report for a user, this field must be present on the user token. If this field is not provided during user token creation, you can add it to the user later by calling \`/user/update\`. Once the field has been added to the user, you will be able to call \`/link/token/create\` with a non-empty \`consumer_report_permissible_purpose\` (which will automatically create a Plaid Check Consumer Report), or call \`/cra/check_report/create\` for that user.").optional()
}
```

### userupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "consumer_report_user_identity": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nTo create a Plaid Check Consumer Report for a user, this field must be present on the user token. If this field is not provided during user token creation, you can add it to the user later by calling \`/user/update\`. Once the field has been added to the user, you will be able to call \`/link/token/create\` with a non-empty \`consumer_report_permissible_purpose\` (which will automatically create a Plaid Check Consumer Report), or call \`/cra/check_report/create\` for that user.")
}
```

### userremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### useritemsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### x_hidden_from_docs_user_third_party_token_create

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### userthirdpartytokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "third_party_client_id": z.string().describe("The Plaid API \`client_id\` of the third-party client the token will be shared with. The token will only be valid for the specified client."),
  "expiration_time": z.string().datetime({ offset: true }).nullable().describe("The expiration date and time for the third-party user token in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (\`YYYY-MM-DDThh:mm:ssZ\`). The expiration is restricted to a maximum of 24 hours from the token's creation time. If not provided, the token will automatically expire after 24 hours.").optional()
}
```

### x_hidden_from_docs_user_third_party_token_remove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### userthirdpartytokenremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "third_party_user_token": z.string().describe("The third-party user token associated with the requested User data.")
}
```

### creditsessionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### paymentinitiationpaymentget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_id": z.string().describe("The \`payment_id\` returned from \`/payment_initiation/payment/create\`.")
}
```

### paymentinitiationpaymentlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "count": z.number().int().gte(1).lte(200).nullable().describe("The maximum number of payments to return. If \`count\` is not specified, a maximum of 10 payments will be returned, beginning with the most recent payment before the cursor (if specified).").optional(),
  "cursor": z.string().datetime({ offset: true }).nullable().describe("A string in RFC 3339 format (i.e. \"2019-12-06T22:35:49Z\"). Only payments created before the cursor will be returned.").optional(),
  "consent_id": z.string().nullable().describe("The consent ID. If specified, only payments, executed using this consent, will be returned.").optional()
}
```

### investmentsholdingsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/investments/holdings/get\` results. If provided, must not be \`null\`.").optional()
}
```

### investmentstransactionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "start_date": z.string().date().describe("The earliest date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The most recent date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/investments/transactions/get\` results. If provided, must be non-\`null\`.").optional()
}
```

### investmentsrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### investmentsauthget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to filter \`/investments/auth/get\` results.").optional()
}
```

### processortokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The \`account_id\` value obtained from the \`onSuccess\` callback in Link"),
  "processor": z.enum(["dwolla","galileo","modern_treasury","ocrolus","vesta","drivewealth","vopay","achq","check","checkbook","circle","sila_money","rize","svb_api","unit","wyre","lithic","alpaca","astra","moov","treasury_prime","marqeta","checkout","solid","highnote","gemini","apex_clearing","gusto","adyen","atomic","i2c","wepay","riskified","utb","adp_roll","fortress_trust","bond","bakkt","teal","zero_hash","taba_pay","knot","sardine","alloy","finix","nuvei","layer","boom","paynote","stake","wedbush","esusu","ansa","scribeup","straddle","loanpro"]).describe("The processor you are integrating with.")
}
```

### processortokenpermissionsset

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).describe("A list of products the processor token should have access to. An empty list will grant access to all products.")
}
```

### processortokenpermissionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`")
}
```

### processortokenwebhookupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: \`processor-<environment>-<identifier>\`"),
  "webhook": z.string().nullable().describe("The new webhook URL to associate with the processor token. To remove a webhook from a processor token, set to \`null\`.")
}
```

### processorstripebankaccounttokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The \`account_id\` value obtained from the \`onSuccess\` callback in Link")
}
```

### processorapexprocessortokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The \`account_id\` value obtained from the \`onSuccess\` callback in Link")
}
```

### depositswitchcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "target_access_token": z.string().describe("Access token for the target Item, typically provided in the Import Item response. "),
  "target_account_id": z.string().describe("Plaid Account ID that specifies the target bank account. This account will become the recipient for a user's direct deposit."),
  "country_code": z.enum(["US","CA"]).nullable().describe("ISO-3166-1 alpha-2 country code standard.").optional()
}
```

### itemimport

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).min(1).describe("Array of product strings"),
  "user_auth": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nObject of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts"),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object to configure \`/item/import\` request.").optional()
}
```

### depositswitchtokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "deposit_switch_id": z.string().describe("The ID of the deposit switch")
}
```

### linktokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_name": z.string().min(1).describe("The name of your application, as it should be displayed in Link. Maximum length of 30 characters. If a value longer than 30 characters is provided, Link will display \"This Application\" instead."),
  "language": z.string().min(1).describe("The language that Link should be displayed in. When initializing with Identity Verification, this field is not used; for more details, see [Identity Verification supported languages](https://www.plaid.com/docs/identity-verification/#supported-languages).\n\nSupported languages are:\n- Danish (\`'da'\`)\n- Dutch (\`'nl'\`)\n- English (\`'en'\`)\n- Estonian (\`'et'\`)\n- French (\`'fr'\`)\n- German (\`'de'\`)\n- Hindi (\`'hi'\`)\n- Italian (\`'it'\`)\n- Latvian (\`'lv'\`)\n- Lithuanian (\`'lt'\`)\n- Norwegian (\`'no'\`)\n- Polish (\`'pl'\`)\n- Portuguese (\`'pt'\`)\n- Romanian (\`'ro'\`)\n- Spanish (\`'es'\`)\n- Swedish (\`'sv'\`)\n- Vietnamese (\`'vi'\`)\n\nWhen using a Link customization, the language configured here must match the setting in the customization, or the customization will not be applied."),
  "country_codes": z.array(z.enum(["US","GB","ES","NL","FR","IE","CA","DE","IT","PL","DK","NO","SE","EE","LT","LV","PT","BE"]).describe("ISO-3166-1 alpha-2 country code standard.")).min(1).describe("Specify an array of Plaid-supported country codes using the ISO-3166-1 alpha-2 country code standard. Institutions from all listed countries will be shown. For a complete mapping of supported products by country, see https://plaid.com/global/. By default, access is granted to US and CA. For Production or Limited Production access to other countries, [contact Sales](https://plaid.com/contact/) or your account manager.  \n\nIf using Identity Verification, \`country_codes\` should be set to the country where your company is based, not the country where your user is located. For all other products, \`country_codes\` represents the location of your user's financial institution.\n\nIf Link is launched with multiple country codes, only products that you are enabled for in all countries will be used by Link. While all countries are enabled by default in Sandbox, in Production only the countries you have requested access for are shown. To request access to additional countries, [file a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access) via the Plaid dashboard.\n\nIf using a Link customization, make sure the country codes in the customization match those specified in \`country_codes\`, or the customization may not be applied.\n\nIf using the Auth features Instant Match, Instant Micro-deposits, Same-day Micro-deposits, Automated Micro-deposits, or Database Auth, \`country_codes\` must be set to \`['US']\`."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object specifying information about the end user who will be linking their account."),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).nullable().describe("List of Plaid product(s) you wish to use. If launching Link in update mode, should be omitted (unless you are using update mode to add Income or Assets to an Item); required otherwise.\n\n\`balance\` is *not* a valid value, the Balance product does not require explicit initialization and will automatically be initialized when any other product is initialized.\n\nIf launching Link with CRA products, \`cra_base_reports\` is required and must be included in the \`products\` array.\n\nThe products specified here will determine which institutions will be available to your users in Link. Only institutions that support *all* requested products can be selected; a if a user attempts to select an institution that does not support a listed product, a \"Connectivity not supported\" error message will appear in Link. To maximize the number of institutions available, initialize Link with the minimal product set required for your use case.\n\nAdditional products can be included via the [\`optional_products\`](https://plaid.com/docs/api/link/#link-token-create-request-optional-products) or  [\`required_if_supported_products\`](https://plaid.com/docs/api/link/#link-token-create-request-required-if-supported-products) fields. Products can also be initialized by calling the endpoint after obtaining an access token; this may require the product to be listed in the [\`additional_consented_products\`](https://plaid.com/docs/api/link/#link-token-create-request-additional-consented-products) array. For details, see [Choosing when to initialize products](https://plaid.com/docs/link/initializing-products/).\n\nNote that, unless you have opted to disable Instant Match support, institutions that support Instant Match will also be shown in Link if \`auth\` is specified as a product, even though these institutions do not contain \`auth\` in their product array.\n\nIn Production, you will be billed for each product that you specify when initializing Link. Note that a product cannot be removed from an Item once the Item has been initialized with that product. To stop billing on an Item for subscription-based products, such as Liabilities, Investments, and Transactions, remove the Item via \`/item/remove\`.").optional(),
  "required_if_supported_products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).nullable().describe("List of Plaid product(s) you wish to use only if the institution and account(s) selected by the user support the product. Institutions that do not support these products will still be shown in Link. The products will only be extracted and billed if the user selects an institution and account type that supports them.\n\nThere should be no overlap between this array and the \`products\`, \`optional_products\`, or \`additional_consented_products\` arrays. The \`products\` array must have at least one product.\n\nFor more details on using this feature, see [Required if Supported Products](https://www.plaid.com/docs/link/initializing-products/#required-if-supported-products).").optional(),
  "optional_products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).nullable().describe("List of Plaid product(s) that will enhance the consumer's use case, but that your app can function without. Plaid will attempt to fetch data for these products on a best-effort basis, and failure to support these products will not affect Item creation.\n\nThere should be no overlap between this array and the \`products\`, \`required_if_supported_products\`, or \`additional_consented_products\` arrays. The \`products\` array must have at least one product.\n\nFor more details on using this feature, see [Optional Products](https://www.plaid.com/docs/link/initializing-products/#optional-products).").optional(),
  "additional_consented_products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).nullable().describe("List of additional Plaid product(s) you wish to collect consent for to support your use case. These products will not be billed until you start using them by calling the relevant endpoints.\n\n\`balance\` is *not* a valid value, the Balance product does not require explicit initialization and will automatically have consent collected.\n\nInstitutions that do not support these products will still be shown in Link.\n\nThere should be no overlap between this array and the \`products\` or \`required_if_supported_products\` arrays.\n\nIf you include \`signal\` in \`additional_consented_products\`, you will need to call \`/signal/prepare\` before calling \`/signal/evaluate\` for the first time on an Item in order to get the most accurate results. For more details, see [Using \`/signal/prepare\`](/docs/signal/#using-signalprepare).").optional(),
  "webhook": z.string().describe("The destination URL to which any webhooks should be sent. Note that webhooks for Payment Initiation (e-wallet transactions only), Transfer, Bank Transfer (including Auth micro-deposit notification webhooks), Monitor, and Identity Verification are configured via the Dashboard instead. In update mode, this field will not have an effect; to update the webhook receiver endpoint for an existing Item, use \`/item/webhook/update\` instead.").optional(),
  "access_token": z.string().min(1).nullable().describe("The \`access_token\` associated with the Item to update or reference, used when updating, modifying, or accessing an existing \`access_token\`. Used when launching Link in update mode, when completing the Same-day (manual) Micro-deposit flow, or (optionally) when initializing Link for a returning user as part of the Transfer UI flow.").optional(),
  "access_tokens": z.array(z.string()).describe("A list of access tokens associated with the items to update in Link update mode for the Assets product. Using this instead of the \`access_token\` field allows the updating of multiple items at once. This feature is in closed beta, please contact your account manager for more info.").optional(),
  "link_customization_name": z.string().describe("The name of the Link customization from the Plaid Dashboard to be applied to Link. If not specified, the \`default\` customization will be used. When using a Link customization, the language in the customization must match the language selected via the \`language\` parameter, and the countries in the customization should match the country codes selected via \`country_codes\`.").optional(),
  "redirect_uri": z.string().describe("A URI indicating the destination where a user should be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or another app. The \`redirect_uri\` should not contain any query parameters. When used in Production, must be an https URI. To specify any subdomain, use \`*\` as a wildcard character, e.g. \`https://*.example.com/oauth.html\`. Note that any redirect URI must also be added to the Allowed redirect URIs list in the [developer dashboard](https://dashboard.plaid.com/team/api). If initializing on Android, \`android_package_name\` must be specified instead and \`redirect_uri\` should be left blank.").optional(),
  "android_package_name": z.string().describe("The name of your app's Android package. Required if using the \`link_token\` to initialize Link on Android. Any package name specified here must also be added to the Allowed Android package names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). When creating a \`link_token\` for initializing Link on other platforms, \`android_package_name\` must be left blank and \`redirect_uri\` should be used instead.").optional(),
  "institution_data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA map containing data used to highlight institutions in Link.").optional(),
  "card_switch": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA map containing data to pass in for the Card Switch flow.").optional(),
  "account_filters": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nBy default, Link will provide limited account filtering: it will only display Institutions that are compatible with all products supplied in the \`products\` parameter of \`/link/token/create\`, and, if \`auth\` is specified in the \`products\` array, will also filter out accounts other than \`checking\`, \`savings\`, and \`cash management\` accounts on the Account Select pane. You can further limit the accounts shown in Link by using \`account_filters\` to specify the account subtypes to be shown in Link. Only the specified subtypes will be shown. This filtering applies to both the Account Select view (if enabled) and the Institution Select view. Institutions that do not support the selected subtypes will be omitted from Link. To indicate that all subtypes should be shown, use the value \`\"all\"\`. If the \`account_filters\` filter is used, any account type for which a filter is not specified will be entirely omitted from Link. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).\n\nThe filter may or may not impact the list of accounts shown by the institution in the OAuth account selection flow, depending on the specific institution. If the user selects excluded account subtypes in the OAuth flow, these accounts will not be added to the Item. If the user selects only excluded account subtypes, the link attempt will fail and the user will be prompted to try again.\n").optional(),
  "eu_config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for EU flows").optional(),
  "institution_id": z.string().describe("Used for certain Europe-only configurations, as well as certain legacy use cases in other regions.").optional(),
  "payment_configuration": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Pay By Bank flow. This is an optional field to configure the user experience, and currently requires the amount field to be set.").optional(),
  "payment_initiation": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if \`payment_initiation\` is included in the \`products\` array. Either \`payment_id\` or \`consent_id\` must be provided.").optional(),
  "employment": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Employment product. This field is required if \`employment\` is included in the \`products\` array.").optional(),
  "income_verification": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Income product. This field is required if \`income_verification\` is included in the \`products\` array.").optional(),
  "base_report": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Base Report product. This field is required if \`assets\` is included in the \`products\` array and the client is CRA-enabled.").optional(),
  "credit_partner_insights": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Credit Partner Insights product.").optional(),
  "cra_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with Plaid Check products").optional(),
  "consumer_report_permissible_purpose": z.string().optional(),
  "auth": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Auth product. This field can be used to enable or disable extended Auth flows for the resulting Link session. Omitting any field will result in a default that can be configured by your account manager. The default behavior described in the documentation is the default behavior that will apply if you have not requested your account manager to apply a different default. If you have enabled the [Dashboard Account Verification pane](https://dashboard.plaid.com/account-verification), the settings enabled there will override any settings in this object.").optional(),
  "transfer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Transfer product.").optional(),
  "update": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode).").optional(),
  "identity_verification": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies option for initializing Link for use with the Identity Verification product.").optional(),
  "statements": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies options for initializing Link for use with the Statements product. This field is required for the statements product.").optional(),
  "user_token": z.string().describe("A user token generated using \`/user/create\`. Any Item created during the Link session will be associated with the user.").optional(),
  "third_party_user_token": z.string().describe("A third party user token associated with the current user.").optional(),
  "investments": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for the Investments product").optional(),
  "investments_auth": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for the Investments Move product").optional(),
  "hosted_link": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for Hosted Link. To enable the session for Hosted Link, send this object in the request. It can be empty.").optional(),
  "transactions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for the Transactions product").optional(),
  "cashflow_report": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration parameters for the Cashflow Report product. Currently in closed beta.").optional(),
  "cra_enabled": z.boolean().describe("If \`true\`, request a CRA connection. Defaults to \`false\`.").optional(),
  "identity": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIdentity object used to specify document upload").optional(),
  "financekit_supported": z.boolean().describe("If \`true\`, indicates that client supports linking FinanceKit / AppleCard items. Defaults to \`false\`.").optional(),
  "enable_multi_item_link": z.boolean().describe("If \`true\`, enable linking multiple items in the same Link session. Defaults to \`false\`.").optional()
}
```

### linktokenget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "link_token": z.string().describe("A \`link_token\` from a previous invocation of \`/link/token/create\`")
}
```

### linkoauthcorrelationidexchange

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "link_correlation_id": z.string().describe("A \`link_correlation_id\` from a received OAuth redirect URI callback")
}
```

### sessiontokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "template_id": z.string().describe("The id of a template defined in Plaid Dashboard"),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSessionTokenCreateRequestUser defines per-session user-specific data for \`/session/token/create\`").optional(),
  "redirect_uri": z.string().describe("A URI indicating the destination where a user should be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or another app. The \`redirect_uri\` should not contain any query parameters. When used in Production, must be an https URI. To specify any subdomain, use \`*\` as a wildcard character, e.g. \`https://*.example.com/oauth.html\`. Note that any redirect URI must also be added to the Allowed redirect URIs list in the [developer dashboard](https://dashboard.plaid.com/team/api). If initializing on Android, \`android_package_name\` must be specified instead and \`redirect_uri\` should be left blank.").optional()
}
```

### depositswitchget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "deposit_switch_id": z.string().describe("The ID of the deposit switch")
}
```

### transferget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transfer_id": z.string().describe("Plaid’s unique identifier for a transfer.").optional(),
  "authorization_id": z.string().describe("Plaid’s unique identifier for a transfer authorization.").optional()
}
```

### transferrecurringget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "recurring_transfer_id": z.string().describe("Plaid’s unique identifier for a recurring transfer.")
}
```

### banktransferget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "bank_transfer_id": z.string().describe("Plaid’s unique identifier for a bank transfer.")
}
```

### transferauthorizationcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid \`access_token\` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid \`account_id\` corresponding to the end-user account that will be debited or credited."),
  "funding_account_id": z.string().nullable().describe("Specify the account used to fund the transfer. Should be specified if using legacy funding methods only. If using Plaid Ledger, leave this field blank. Customers can find a list of \`funding_account_id\`s in the Accounts page of your Plaid Dashboard, under the \"Account ID\" column. If this field is left blank and you are using legacy funding methods, this will default to the default \`funding_account_id\` specified during onboarding. Otherwise, Plaid Ledger will be used.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance used to fund the transfer. Customers can find a list of \`ledger_id\`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "payment_profile_token": z.string().describe("The payment profile token associated with the Payment Profile that will be debited or credited. Required if not using \`access_token\`.").optional(),
  "type": z.enum(["debit","credit"]).describe("The type of transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into the origination account; a \`credit\` indicates a transfer of money out of the origination account."),
  "network": z.enum(["ach","same-day-ach","rtp","wire"]).describe("The network or rails used for the transfer.\n\nFor transfers submitted as \`ach\`, the next-day cutoff is 8:30 PM Eastern Time.\n\nFor transfers submitted as \`same-day-ach\`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges; this will apply to both legs of the transfer if applicable.\n\nFor transfers submitted as \`rtp\`,  Plaid will automatically route between Real Time Payment rail by TCH or FedNow rails as necessary. If a transfer is submitted as \`rtp\` and the counterparty account is not eligible for RTP, the \`/transfer/authorization/create\` request will fail with an \`INVALID_FIELD\` error code. To pre-check to determine whether a counterparty account can support RTP, call \`/transfer/capabilities/get\` before calling \`/transfer/authorization/create\`.\n\nWire transfers are currently in early availability. To request access to \`wire\` as a payment network, contact your Account Manager. For transfers submitted as \`wire\`, the \`type\` must be \`credit\`; wire debits are not supported. The cutoff to submit a wire payment is 4:30 PM Eastern Time on a business day; wires submitted after that time will be processed on the next business day. The transaction limit for a wire is $999,999.99. Authorization requests sent with an amount greater than $999,999.99 will fail."),
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\"). When calling \`/transfer/authorization/create\`, specify the maximum amount to authorize. When calling \`/transfer/create\`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling \`/transfer/create\`, the maximum amount authorized in the \`authorization_id\` will be sent."),
  "ach_class": z.enum(["ccd","ppd","tel","web"]).describe("Specifies the use case of the transfer. Required for transfers on an ACH network. For more details, see [ACH SEC codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).\n\nCodes supported for credits: \`ccd\`, \`ppd\`\nCodes supported for debits: \`ccd\`, \`tel\`, \`web\`\n\n\`\"ccd\"\` - Corporate Credit or Debit - fund transfer between two corporate bank accounts\n\n\`\"ppd\"\` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship with a consumer. Authorization was obtained in writing either in person or via an electronic document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.\n\n\`\"web\"\` - Internet-Initiated Entry. The transfer debits a consumer’s bank account. Authorization from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used for single debits or recurring debits.\n\n\`\"tel\"\` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has been received orally over the telephone via a recorded call.").optional(),
  "wire_details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation specific to wire transfers.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe legal name and other information for the account holder.  If the account has multiple account holders, provide the information for the account holder on whose behalf the authorization is being requested. The \`user.legal_name\` field is required. Other fields are not currently used and are present to support planned future functionality."),
  "device": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the device being used to initiate the authorization. These fields are not currently incorporated into the risk check.").optional(),
  "iso_currency_code": z.string().describe("The currency of the transfer amount. The default value is \"USD\".").optional(),
  "idempotency_key": z.string().max(50).nullable().describe("A random key provided by the client, per unique authorization, which expires after 48 hours. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create an authorization fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single authorization is created.\n\nIdempotency does not apply to authorizations whose decisions are \`user_action_required\`. Therefore you may re-attempt the authorization after completing the required user action without changing \`idempotency_key\`.\n\nThis idempotency key expires after 48 hours, after which the same key can be reused. Failure to provide this key may result in duplicate charges.").optional(),
  "user_present": z.boolean().nullable().describe("If the end user is initiating the specific transfer themselves via an interactive UI, this should be \`true\`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be \`false\`. This field is not currently used and is present to support planned future functionality.").optional(),
  "with_guarantee": z.boolean().nullable().describe("If set to \`false\`, Plaid will not offer a \`guarantee_decision\` for this request (Guarantee customers only).").optional(),
  "beacon_session_id": z.string().nullable().describe("The unique identifier returned by Plaid's [beacon](https://plaid.com/docs/transfer/guarantee/#using-a-beacon) when it is run on your webpage.").optional(),
  "originator_client_id": z.string().nullable().describe("The Plaid client ID that is the originator of this transfer. Only needed if creating transfers on behalf of another client as a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. This field may only be used when using \`sandbox\` environment. If provided, the \`authorization\` is created at the \`virtual_time\` on the provided test clock.").optional(),
  "ruleset_key": z.string().nullable().describe("The key of the Ruleset for the transaction. This feature is currently in closed beta; to request access, contact your account manager.").optional()
}
```

### transferauthorizationcancel

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "authorization_id": z.string().describe("Plaid’s unique identifier for a transfer authorization.")
}
```

### transferbalanceget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "type": z.enum(["prefunded_rtp_credits","prefunded_ach_credits"]).describe("The type of balance.\n\n\`prefunded_rtp_credits\` - Your prefunded RTP credit balance with Plaid\n\`prefunded_ach_credits\` - Your prefunded ACH credit balance with Plaid").optional()
}
```

### transfercapabilitiesget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid \`access_token\` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid \`account_id\` corresponding to the end-user account that will be debited or credited."),
  "payment_profile_token": z.string().describe("A payment profile token associated with the Payment Profile data that is being requested.").optional()
}
```

### transferconfigurationget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().nullable().describe("The Plaid client ID of the transfer originator. Should only be present if \`client_id\` is a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).").optional()
}
```

### transferledgerget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to get. Customers can find a list of \`ledger_id\`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "originator_client_id": z.string().nullable().describe("Client ID of the end customer.").optional()
}
```

### transferledgerdistribute

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "from_ledger_id": z.string().describe("The Ledger to pull money from."),
  "to_ledger_id": z.string().describe("The Ledger to credit money to."),
  "amount": z.string().describe("The amount to move (decimal string with two digits of precision e.g. \"10.00\"). Amount must be positive."),
  "idempotency_key": z.string().max(50).describe("A unique key provided by the client, per unique ledger distribute. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying the request without accidentally performing the same operation twice. For example, if a request to create a ledger distribute fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single distribute is created."),
  "description": z.string().describe("An optional description for the ledger distribute operation.").optional()
}
```

### transferledgerdeposit

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().nullable().describe("Client ID of the customer that owns the Ledger balance. This is so Plaid knows which of your customers to payout or collect funds. Only applicable for [Platform customers](https://plaid.com/docs/transfer/application/#originators-vs-platforms). Do not include if you’re paying out to yourself.").optional(),
  "funding_account_id": z.string().nullable().describe("Specify which funding account to use. Customers can find a list of \`funding_account_id\`s in the Accounts page of the Plaid Dashboard, under the \"Account ID\" column. If this field is left blank, the funding account associated with the specified Ledger will be used. If an \`originator_client_id\` is specified, the \`funding_account_id\` must belong to the specified originator.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to deposit to. Customers can find a list of \`ledger_id\`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "amount": z.string().describe("A positive amount of how much will be deposited into ledger (decimal string with two digits of precision e.g. \"5.50\")."),
  "description": z.string().max(10).nullable().describe("The description of the deposit that will be passed to the receiving bank (up to 10 characters). Note that banks utilize this field differently, and may or may not show it on the bank statement.").optional(),
  "idempotency_key": z.string().max(50).describe("A unique key provided by the client, per unique ledger deposit. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying the request without accidentally performing the same operation twice. For example, if a request to create a ledger deposit fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single deposit is created."),
  "network": z.enum(["ach","same-day-ach"]).describe("The ACH networks used for the funds flow.\n\nFor requests submitted as either \`ach\` or \`same-day-ach\` the cutoff for same-day is 3:30 PM Eastern Time and the cutoff for next-day transfers is 8:30 PM Eastern Time. It is recommended to submit a request at least 15 minutes before the cutoff time in order to ensure that it will be processed before the cutoff. Any request that is indicated as \`same-day-ach\` and that misses the same-day cutoff, but is submitted in time for the next-day cutoff, will be sent over next-day rails and will not incur same-day charges.")
}
```

### transferledgerwithdraw

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().nullable().describe("Client ID of the customer that owns the Ledger balance. This is so Plaid knows which of your customers to payout or collect funds. Only applicable for [Platform customers](https://plaid.com/docs/transfer/application/#originators-vs-platforms). Do not include if you’re paying out to yourself.").optional(),
  "funding_account_id": z.string().nullable().describe("Specify which funding account to use. Customers can find a list of \`funding_account_id\`s in the Accounts page of the Plaid Dashboard, under the \"Account ID\" column. If this field is left blank, the funding account associated with the specified Ledger will be used. If an \`originator_client_id\` is specified, the \`funding_account_id\` must belong to the specified originator.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to withdraw from. Customers can find a list of \`ledger_id\`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "amount": z.string().describe("A positive amount of how much will be withdrawn from the ledger balance (decimal string with two digits of precision e.g. \"5.50\")."),
  "description": z.string().max(10).nullable().describe("The description of the deposit that will be passed to the receiving bank (up to 10 characters). Note that banks utilize this field differently, and may or may not show it on the bank statement.").optional(),
  "idempotency_key": z.string().max(50).describe("A unique key provided by the client, per unique ledger withdraw. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying the request without accidentally performing the same operation twice. For example, if a request to create a ledger withdraw fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single withdraw is created."),
  "network": z.enum(["ach","same-day-ach","rtp","wire"]).describe("The network or rails used for the transfer.\n\nFor transfers submitted as \`ach\`, the next-day cutoff is 8:30 PM Eastern Time.\n\nFor transfers submitted as \`same-day-ach\`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges; this will apply to both legs of the transfer if applicable.\n\nFor transfers submitted as \`rtp\`,  Plaid will automatically route between Real Time Payment rail by TCH or FedNow rails as necessary. If a transfer is submitted as \`rtp\` and the counterparty account is not eligible for RTP, the \`/transfer/authorization/create\` request will fail with an \`INVALID_FIELD\` error code. To pre-check to determine whether a counterparty account can support RTP, call \`/transfer/capabilities/get\` before calling \`/transfer/authorization/create\`.\n\nWire transfers are currently in early availability. To request access to \`wire\` as a payment network, contact your Account Manager. For transfers submitted as \`wire\`, the \`type\` must be \`credit\`; wire debits are not supported. The cutoff to submit a wire payment is 4:30 PM Eastern Time on a business day; wires submitted after that time will be processed on the next business day. The transaction limit for a wire is $999,999.99. Authorization requests sent with an amount greater than $999,999.99 will fail.")
}
```

### transferoriginatorfundingaccountupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The Plaid client ID of the transfer originator."),
  "funding_account": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe originator's funding account, linked with Plaid Link or \`/transfer/migrate_account\`.")
}
```

### transferoriginatorfundingaccountcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The Plaid client ID of the transfer originator."),
  "funding_account": z.string()
}
```

### transfermetricsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().nullable().describe("The Plaid client ID of the transfer originator. Should only be present if \`client_id\` is a [Platform customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).").optional()
}
```

### transfercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid \`access_token\` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid \`account_id\` corresponding to the end-user account that will be debited or credited."),
  "authorization_id": z.string().describe("Plaid’s unique identifier for a transfer authorization. This parameter also serves the purpose of acting as an idempotency identifier."),
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\"). When calling \`/transfer/authorization/create\`, specify the maximum amount to authorize. When calling \`/transfer/create\`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling \`/transfer/create\`, the maximum amount authorized in the \`authorization_id\` will be sent.").optional(),
  "description": z.string().max(15).describe("The transfer description. Maximum of 15 characters. If reprocessing a returned transfer, please note that the \`description\` field must be \`\"Retry 1\"\` or \`\"Retry 2\"\` to indicate that it's a retry of a previously returned transfer. You may retry a transfer up to 2 times, within 180 days of creating the original transfer. Only transfers that were returned with code \`R01\` or \`R09\` may be retried. For a full listing of ACH return codes, see [Transfer errors](https://plaid.com/docs/errors/transfer/#ach-return-codes)."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:\nThe JSON values must be Strings (no nested JSON objects allowed)\nOnly ASCII characters may be used\nMaximum of 50 key/value pairs\nMaximum key length of 40 characters\nMaximum value length of 500 characters\n").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. This field may only be used when using \`sandbox\` environment. If provided, the \`transfer\` is created at the \`virtual_time\` on the provided \`test_clock\`.").optional(),
  "facilitator_fee": z.string().describe("The amount to deduct from \`transfer.amount\` and distribute to the platform’s Ledger balance as a facilitator fee (decimal string with two digits of precision e.g. \"10.00\"). The remainder will go to the end-customer’s Ledger balance. This must be value greater than 0 and less than or equal to the \`transfer.amount\`.").optional()
}
```

### transferrecurringcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid \`access_token\` for the account that will be debited or credited."),
  "idempotency_key": z.string().max(50).describe("A random key provided by the client, per unique recurring transfer. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a recurring fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single recurring transfer is created."),
  "account_id": z.string().describe("The Plaid \`account_id\` corresponding to the end-user account that will be debited or credited."),
  "type": z.enum(["debit","credit"]).describe("The type of transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into the origination account; a \`credit\` indicates a transfer of money out of the origination account."),
  "network": z.enum(["ach","same-day-ach","rtp"]).describe("Networks eligible for recurring transfers."),
  "ach_class": z.enum(["ccd","ppd","tel","web"]).describe("Specifies the use case of the transfer. Required for transfers on an ACH network. For more details, see [ACH SEC codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).\n\nCodes supported for credits: \`ccd\`, \`ppd\`\nCodes supported for debits: \`ccd\`, \`tel\`, \`web\`\n\n\`\"ccd\"\` - Corporate Credit or Debit - fund transfer between two corporate bank accounts\n\n\`\"ppd\"\` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship with a consumer. Authorization was obtained in writing either in person or via an electronic document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.\n\n\`\"web\"\` - Internet-Initiated Entry. The transfer debits a consumer’s bank account. Authorization from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used for single debits or recurring debits.\n\n\`\"tel\"\` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has been received orally over the telephone via a recorded call.").optional(),
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\"). When calling \`/transfer/authorization/create\`, specify the maximum amount to authorize. When calling \`/transfer/create\`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling \`/transfer/create\`, the maximum amount authorized in the \`authorization_id\` will be sent."),
  "user_present": z.boolean().nullable().describe("If the end user is initiating the specific transfer themselves via an interactive UI, this should be \`true\`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be \`false\`.").optional(),
  "description": z.string().describe("The description of the recurring transfer."),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. This field may only be used when using \`sandbox\` environment. If provided, the created \`recurring_transfer\` is associated with the \`test_clock\`. New originations are automatically generated when the associated \`test_clock\` advances.").optional(),
  "schedule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe schedule that the recurring transfer will be executed on."),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe legal name and other information for the account holder."),
  "device": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the device being used to initiate the authorization.").optional()
}
```

### banktransfercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "idempotency_key": z.string().max(50).describe("A random key provided by the client, per unique bank transfer. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a bank transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single bank transfer is created."),
  "access_token": z.string().describe("The Plaid \`access_token\` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid \`account_id\` for the account that will be debited or credited."),
  "type": z.enum(["debit","credit"]).describe("The type of bank transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into the origination account; a \`credit\` indicates a transfer of money out of the origination account."),
  "network": z.enum(["ach","same-day-ach","wire"]).describe("The network or rails used for the transfer. Valid options are \`ach\`, \`same-day-ach\`, or \`wire\`."),
  "amount": z.string().describe("The amount of the bank transfer (decimal string with two digits of precision e.g. \"10.00\")."),
  "iso_currency_code": z.string().describe("The currency of the transfer amount – should be set to \"USD\"."),
  "description": z.string().max(10).describe("The transfer description. Maximum of 10 characters."),
  "ach_class": z.enum(["ccd","ppd","tel","web"]).describe("Specifies the use case of the transfer. Required for transfers on an ACH network. For more details, see [ACH SEC codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).\n\nCodes supported for credits: \`ccd\`, \`ppd\`\nCodes supported for debits: \`ccd\`, \`tel\`, \`web\`\n\n\`\"ccd\"\` - Corporate Credit or Debit - fund transfer between two corporate bank accounts\n\n\`\"ppd\"\` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship with a consumer. Authorization was obtained in writing either in person or via an electronic document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.\n\n\`\"web\"\` - Internet-Initiated Entry. The transfer debits a consumer’s bank account. Authorization from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used for single debits or recurring debits.\n\n\`\"tel\"\` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has been received orally over the telephone via a recorded call.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe legal name and other information for the account holder."),
  "custom_tag": z.string().max(100).nullable().describe("An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:\nThe JSON values must be Strings (no nested JSON objects allowed)\nOnly ASCII characters may be used\nMaximum of 50 key/value pairs\nMaximum key length of 40 characters\nMaximum value length of 500 characters\n").optional(),
  "origination_account_id": z.string().nullable().describe("Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank.").optional()
}
```

### transferlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "count": z.number().int().gte(1).lte(25).describe("The maximum number of transfers to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of transfers to skip before returning results.").optional(),
  "originator_client_id": z.string().nullable().describe("Filter transfers to only those with the specified originator client.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter transfers to only those with the specified \`funding_account_id\`.").optional()
}
```

### transferrecurringlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_time": z.string().datetime({ offset: true }).nullable().describe("The start datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_time": z.string().datetime({ offset: true }).nullable().describe("The end datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "count": z.number().int().gte(1).lte(25).describe("The maximum number of recurring transfers to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of recurring transfers to skip before returning results.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter recurring transfers to only those with the specified \`funding_account_id\`.").optional()
}
```

### banktransferlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "count": z.number().int().gte(1).lte(25).describe("The maximum number of bank transfers to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of bank transfers to skip before returning results.").optional(),
  "origination_account_id": z.string().nullable().describe("Filter bank transfers to only those originated through the specified origination account.").optional(),
  "direction": z.union([z.literal("outbound"), z.literal("inbound"), z.literal(null)]).nullable().describe("Indicates the direction of the transfer: \`outbound\` for API-initiated transfers, or \`inbound\` for payments received by the FBO account.").optional()
}
```

### transfercancel

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transfer_id": z.string().describe("Plaid’s unique identifier for a transfer."),
  "reason_code": z.enum(["AC03","AM09","CUST","DUPL","FRAD","TECH","UPAY","AC14","AM06","BE05","FOCR","MS02","MS03","RR04","RUTA"]).describe("Specifies the reason for cancelling transfer. This is required for RfP transfers, and will be ignored for other networks.\n\n\`\"AC03\"\` - Invalid Creditor Account Number\n\n\`\"AM09\"\` - Incorrect Amount\n\n\`\"CUST\"\` - Requested By Customer - Cancellation requested\n\n\`\"DUPL\"\` - Duplicate Payment\n\n\`\"FRAD\"\` - Fraudulent Payment - Unauthorized or fraudulently induced\n\n\`\"TECH\"\` - Technical Problem - Cancellation due to system issues\n\n\`\"UPAY\"\` - Undue Payment - Payment was made through another channel\n\n\`\"AC14\"\` - Invalid or Missing Creditor Account Type\n\n\`\"AM06\"\` - Amount Too Low\n\n\`\"BE05\"\` - Unrecognized Initiating Party\n\n\`\"FOCR\"\` - Following Refund Request\n\n\`\"MS02\"\` - No Specified Reason - Customer\n\n\`\"MS03\"\` - No Specified Reason - Agent\n\n\`\"RR04\"\` - Regulatory Reason\n\n\`\"RUTA\"\` - Return Upon Unable To Apply").optional()
}
```

### transferrecurringcancel

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "recurring_transfer_id": z.string().describe("Plaid’s unique identifier for a recurring transfer.")
}
```

### banktransfercancel

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "bank_transfer_id": z.string().describe("Plaid’s unique identifier for a bank transfer.")
}
```

### transfereventlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "transfer_id": z.string().nullable().describe("Plaid’s unique identifier for a transfer.").optional(),
  "account_id": z.string().nullable().describe("The account ID to get events for all transactions to/from an account.").optional(),
  "transfer_type": z.union([z.literal("debit"), z.literal("credit"), z.literal(null)]).nullable().describe("The type of transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into your origination account; a \`credit\` indicates a transfer of money out of your origination account.").optional(),
  "event_types": z.array(z.enum(["pending","cancelled","failed","posted","settled","funds_available","returned","swept","swept_settled","return_swept","sweep.pending","sweep.posted","sweep.settled","sweep.returned","sweep.failed","sweep.funds_available","refund.pending","refund.cancelled","refund.failed","refund.posted","refund.settled","refund.returned","refund.swept","refund.return_swept"]).describe("The type of event that this transfer represents. Event types with prefix \`sweep\` represents events for Plaid Ledger sweeps.\n\n\`pending\`: A new transfer was created; it is in the pending state.\n\n\`cancelled\`: The transfer was cancelled by the client.\n\n\`failed\`: The transfer failed, no funds were moved.\n\n\`posted\`: The transfer has been successfully submitted to the payment network.\n\n\`settled\`: The transfer has been successfully completed by the payment network.\n\n\`funds_available\`: Funds from the transfer have been released from hold and applied to the ledger's available balance. (Only applicable to ACH debits.)\n\n\`returned\`: A posted transfer was returned.\n\n\`swept\`: The transfer was swept to / from the sweep account.\n\n\`swept_settled\`: Credits are available to be withdrawn or debits have been deducted from the customer’s business checking account.\n\n\`return_swept\`: Due to the transfer being returned, funds were pulled from or pushed back to the sweep account.\n\n\`sweep.pending\`: A new ledger sweep was created; it is in the pending state.\n\n\`sweep.posted\`: The ledger sweep has been successfully submitted to the payment network.\n\n\`sweep.settled\`: The transaction has settled in the funding account. This means that funds withdrawn from Plaid Ledger balance have reached the funding account, or funds to be deposited into the Plaid Ledger Balance have been pulled, and the hold period has begun.\n\n\`sweep.returned\`: A posted ledger sweep was returned.\n\n\`sweep.failed\`: The ledger sweep failed, no funds were moved.\n\n\`sweep.funds_available\`: Funds from the ledger sweep have been released from hold and applied to the ledger's available balance. This is only applicable to debits.\n\n\`refund.pending\`: A new refund was created; it is in the pending state.\n\n\`refund.cancelled\`: The refund was cancelled.\n\n\`refund.failed\`: The refund failed, no funds were moved.\n\n\`refund.posted\`: The refund has been successfully submitted to the payment network.\n\n\`refund.settled\`: The refund transaction has settled in the Plaid linked account.\n\n\`refund.returned\`: A posted refund was returned.\n\n\`refund.swept\`: The refund was swept from the sweep account.\n\n\`refund.return_swept\`: Due to the refund being returned, funds were pushed back to the sweep account.")).describe("Filter events by event type.").optional(),
  "sweep_id": z.string().describe("Plaid’s unique identifier for a sweep.").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of transfer events to return. If the number of events matching the above parameters is greater than \`count\`, the most recent events will be returned.").optional(),
  "offset": z.number().int().gte(0).nullable().describe("The offset into the list of transfer events. When \`count\`=25 and \`offset\`=0, the first 25 events will be returned. When \`count\`=25 and \`offset\`=25, the next 25 events will be returned.").optional(),
  "originator_client_id": z.string().nullable().describe("Filter transfer events to only those with the specified originator client.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter transfer events to only those with the specified \`funding_account_id\`.").optional()
}
```

### banktransfereventlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "bank_transfer_id": z.string().nullable().describe("Plaid’s unique identifier for a bank transfer.").optional(),
  "account_id": z.string().nullable().describe("The account ID to get events for all transactions to/from an account.").optional(),
  "bank_transfer_type": z.union([z.literal("debit"), z.literal("credit"), z.literal(null)]).nullable().describe("The type of bank transfer. This will be either \`debit\` or \`credit\`.  A \`debit\` indicates a transfer of money into your origination account; a \`credit\` indicates a transfer of money out of your origination account.").optional(),
  "event_types": z.array(z.enum(["pending","cancelled","failed","posted","reversed"]).describe("The type of event that this bank transfer represents.\n\n\`pending\`: A new transfer was created; it is in the pending state.\n\n\`cancelled\`: The transfer was cancelled by the client.\n\n\`failed\`: The transfer failed, no funds were moved.\n\n\`posted\`: The transfer has been successfully submitted to the payment network.\n\n\`reversed\`: A posted transfer was reversed.")).describe("Filter events by event type.").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of bank transfer events to return. If the number of events matching the above parameters is greater than \`count\`, the most recent events will be returned.").optional(),
  "offset": z.number().int().gte(0).nullable().describe("The offset into the list of bank transfer events. When \`count\`=25 and \`offset\`=0, the first 25 events will be returned. When \`count\`=25 and \`offset\`=25, the next 25 bank transfer events will be returned.").optional(),
  "origination_account_id": z.string().nullable().describe("The origination account ID to get events for transfers from a specific origination account.").optional(),
  "direction": z.union([z.literal("inbound"), z.literal("outbound"), z.literal(null)]).nullable().describe("Indicates the direction of the transfer: \`outbound\`: for API-initiated transfers\n\`inbound\`: for payments received by the FBO account.").optional()
}
```

### transfereventsync

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "after_id": z.number().int().gte(0).describe("The latest (largest) \`event_id\` fetched via the sync endpoint, or 0 initially."),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of transfer events to return.").optional()
}
```

### banktransfereventsync

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "after_id": z.number().int().gte(0).describe("The latest (largest) \`event_id\` fetched via the sync endpoint, or 0 initially."),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of bank transfer events to return.").optional()
}
```

### transfersweepget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "sweep_id": z.string().describe("Plaid's unique identifier for the sweep (UUID) or a shortened form consisting of the first 8 characters of the identifier (8-digit hexadecimal string).")
}
```

### banktransfersweepget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "sweep_id": z.string().describe("Identifier of the sweep.")
}
```

### transfersweeplist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of sweeps to return (RFC 3339 format).").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of sweeps to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of sweeps to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of sweeps to skip before returning results.").optional(),
  "amount": z.string().nullable().describe("Filter sweeps to only those with the specified amount.").optional(),
  "status": z.union([z.literal("pending"), z.literal("posted"), z.literal("settled"), z.literal("funds_available"), z.literal("returned"), z.literal("failed"), z.literal(null)]).nullable().describe("The status of a sweep transfer\n\n\`\"pending\"\` - The sweep is currently pending\n\`\"posted\"\` - The sweep has been posted\n\`\"settled\"\` - The sweep has settled\n\`\"returned\"\` - The sweep has been returned\n\`\"funds_available\"\` - Funds from the sweep have been released from hold and applied to the ledger's available balance. (Only applicable to deposits)\n\`\"failed\"\` - The sweep has failed").optional(),
  "originator_client_id": z.string().nullable().describe("Filter sweeps to only those with the specified originator client.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter sweeps to only those with the specified \`funding_account_id\`.").optional(),
  "transfer_id": z.string().nullable().describe("Filter sweeps to only those with the included \`transfer_id\`.").optional(),
  "trigger": z.enum(["manual","incoming","balance_threshold","automatic_aggregate"]).nullable().describe("The trigger of the sweep\n\n\`\"manual\"\` - The sweep is created manually by the customer\n\`\"incoming\"\` - The sweep is created by incoming funds flow (e.g. Incoming Wire)\n\`\"balance_threshold\"\` - The sweep is created by balance threshold setting\n\`\"automatic_aggregate\"\` - The sweep is created by the Plaid automatic aggregation process. These funds did not pass through the Plaid Ledger balance.").optional()
}
```

### banktransfersweeplist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "origination_account_id": z.string().nullable().describe("If multiple origination accounts are available, \`origination_account_id\` must be used to specify the account that the sweeps belong to.").optional(),
  "start_time": z.string().datetime({ offset: true }).nullable().describe("The start datetime of sweeps to return (RFC 3339 format).").optional(),
  "end_time": z.string().datetime({ offset: true }).nullable().describe("The end datetime of sweeps to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of sweeps to return.").optional()
}
```

### banktransferbalanceget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "origination_account_id": z.string().nullable().describe("If multiple origination accounts are available, \`origination_account_id\` must be used to specify the account for which balance will be returned.").optional()
}
```

### banktransfermigrateaccount

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "account_number": z.string().describe("The user's account number."),
  "routing_number": z.string().describe("The user's routing number."),
  "wire_routing_number": z.string().describe("The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in \`routing_number\`.").optional(),
  "account_type": z.string().describe("The type of the bank account (\`checking\` or \`savings\`).")
}
```

### transfermigrateaccount

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "account_number": z.string().describe("The user's account number."),
  "routing_number": z.string().describe("The user's routing number."),
  "wire_routing_number": z.string().describe("The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in \`routing_number\`. This field must be set for the created item to be eligible for wire transfers.").optional(),
  "account_type": z.string().describe("The type of the bank account (\`checking\` or \`savings\`).")
}
```

### transferintentcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "account_id": z.string().nullable().describe("The Plaid \`account_id\` corresponding to the end-user account that will be debited or credited.").optional(),
  "funding_account_id": z.string().nullable().describe("Specify the account used to fund the transfer. Should be specified if using legacy funding methods only. If using Plaid Ledger, leave this field blank. Customers can find a list of \`funding_account_id\`s in the Accounts page of your Plaid Dashboard, under the \"Account ID\" column. If this field is left blank and you are using legacy funding methods, this will default to the default \`funding_account_id\` specified during onboarding. Otherwise, Plaid Ledger will be used.").optional(),
  "mode": z.enum(["PAYMENT","DISBURSEMENT"]).describe("The direction of the flow of transfer funds.\n\n\`PAYMENT\`: Transfers funds from an end user's account to your business account.\n\n\`DISBURSEMENT\`: Transfers funds from your business account to an end user's account."),
  "network": z.enum(["ach","same-day-ach","rtp"]).describe("The network or rails used for the transfer. Defaults to \`same-day-ach\`.\n\nFor transfers submitted using \`ach\`, the next-day cutoff is 8:30 PM Eastern Time.\n\nFor transfers submitted using \`same-day-ach\`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges.\n\nFor transfers submitted using \`rtp\`, in the case that the account being credited does not support RTP, the transfer will be sent over ACH as long as an \`ach_class\` is provided in the request. If RTP isn't supported by the account and no \`ach_class\` is provided, the transfer will fail to be submitted.").optional(),
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\"). When calling \`/transfer/authorization/create\`, specify the maximum amount to authorize. When calling \`/transfer/create\`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling \`/transfer/create\`, the maximum amount authorized in the \`authorization_id\` will be sent."),
  "description": z.string().min(1).max(15).describe("A description for the underlying transfer. Maximum of 15 characters."),
  "ach_class": z.enum(["ccd","ppd","tel","web"]).describe("Specifies the use case of the transfer. Required for transfers on an ACH network. For more details, see [ACH SEC codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).\n\nCodes supported for credits: \`ccd\`, \`ppd\`\nCodes supported for debits: \`ccd\`, \`tel\`, \`web\`\n\n\`\"ccd\"\` - Corporate Credit or Debit - fund transfer between two corporate bank accounts\n\n\`\"ppd\"\` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship with a consumer. Authorization was obtained in writing either in person or via an electronic document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.\n\n\`\"web\"\` - Internet-Initiated Entry. The transfer debits a consumer’s bank account. Authorization from the consumer is obtained over the Internet (e.g. a web or mobile application). Can be used for single debits or recurring debits.\n\n\`\"tel\"\` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has been received orally over the telephone via a recorded call.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe legal name and other information for the account holder."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:\nThe JSON values must be Strings (no nested JSON objects allowed)\nOnly ASCII characters may be used\nMaximum of 50 key/value pairs\nMaximum key length of 40 characters\nMaximum value length of 500 characters\n").optional(),
  "iso_currency_code": z.string().describe("The currency of the transfer amount, e.g. \"USD\"").optional(),
  "require_guarantee": z.boolean().nullable().describe("When \`true\`, the transfer requires a \`GUARANTEED\` decision by Plaid to proceed (Guarantee customers only).").optional()
}
```

### transferintentget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transfer_intent_id": z.string().describe("Plaid's unique identifier for a transfer intent object.")
}
```

### transferrepaymentlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of repayments to return (RFC 3339 format).").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of repayments to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of repayments to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of repayments to skip before returning results.").optional()
}
```

### transferrepaymentreturnlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "repayment_id": z.string().describe("Identifier of the repayment to query."),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of repayments to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of repayments to skip before returning results.").optional()
}
```

### transferplatformrequirementsubmit

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The client ID of the originator"),
  "requirement_submissions": z.array(z.object({ "requirement_type": z.string().describe("The type of requirement being submitted"), "value": z.string().describe("The value of the requirement, which can be a string or an object depending on the \`requirement_type\`. If it is an object, the object should be JSON marshaled into a string. See the documentation on this endpoint for more information and examples."), "person_id": z.string().uuid().describe("The \`person_id\` of the person the requirement submission is related to. A \`person_id\` is returned by \`/transfer/platform/person/create\`. This field should not be included for requirements that are not related to a person.").optional() }).describe("A single requirement submission")).min(1).max(50).describe("A list of requirement submissions that all relate to the originator. Must contain between 1 and 50 requirement submissions.")
}
```

### transferoriginatorcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "company_name": z.string().min(1).describe("The company name of the end customer being created. This will be displayed in public-facing surfaces, e.g. Plaid Dashboard.")
}
```

### transferquestionnairecreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("Client ID of the end customer."),
  "redirect_uri": z.string().describe("URL the end customer will be redirected to after completing questions in Plaid-hosted onboarding flow.")
}
```

### transferdiligencesubmit

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("Client ID of the the originator whose diligence that you want to submit."),
  "originator_diligence": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe diligence information for the originator.")
}
```

### transferdiligencedocumentupload

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "originator_client_id": z.string().describe("The Client ID of the originator whose document that you want to upload."),
  "file": z.string().base64().describe("A file to upload. The file size must be less than 20MB. Supported file extensions: .pdf."),
  "purpose": z.literal("DUE_DILIGENCE").describe("Specifies the purpose of the uploaded file.\n\n\`\"DUE_DILIGENCE\"\` - The transfer due diligence document of the originator.")
}
```

### transferoriginatorget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("Client ID of the end customer (i.e. the originator).")
}
```

### transferoriginatorlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of originators to return.").optional(),
  "offset": z.number().int().gte(0).nullable().describe("The number of originators to skip before returning results.").optional()
}
```

### transferrefundcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transfer_id": z.string().describe("The ID of the transfer to refund."),
  "amount": z.string().describe("The amount of the refund (decimal string with two digits of precision e.g. \"10.00\")."),
  "idempotency_key": z.string().max(50).describe("A random key provided by the client, per unique refund. Maximum of 50 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a refund fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single refund is created.")
}
```

### transferrefundget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "refund_id": z.string().describe("Plaid’s unique identifier for a refund.")
}
```

### transferrefundcancel

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "refund_id": z.string().describe("Plaid’s unique identifier for a refund.")
}
```

### x_hidden_from_docs_transfer_platform_originator_create

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### transferplatformoriginatorcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The client ID of the originator"),
  "tos_acceptance_metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nMetadata related to the acceptance of Terms of Service"),
  "originator_reviewed_at": z.string().datetime({ offset: true }).describe("ISO8601 timestamp indicating the most recent time the platform collected onboarding data from the originator"),
  "webhook": z.string().describe("The webhook URL to which a \`PLATFORM_ONBOARDING_UPDATE\` webhook should be sent.").optional()
}
```

### transferplatformpersoncreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The client ID of the originator"),
  "name": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe person's legal name").optional(),
  "email_address": z.string().describe("A valid email address. Must not have leading or trailing spaces.").optional(),
  "phone_number": z.string().describe("A valid phone number in E.164 format.").optional(),
  "address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHome address of a person").optional(),
  "id_number": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nID number of the person").optional(),
  "date_of_birth": z.string().date().describe("The date of birth of the person. Formatted as YYYY-MM-DD.").optional(),
  "relationship_to_originator": z.string().describe("The relationship between this person and the originator they are related to.").optional()
}
```

### sandboxbanktransfersimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "bank_transfer_id": z.string().describe("Plaid’s unique identifier for a bank transfer."),
  "event_type": z.string().describe("The asynchronous event to be simulated. May be: \`posted\`, \`failed\`, or \`reversed\`.\n\nAn error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:\n\n\`pending\` --> \`failed\`\n\n\`pending\` --> \`posted\`\n\n\`posted\` --> \`reversed\`\n"),
  "failure_reason": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe failure reason if the type of this transfer is \`\"failed\"\` or \`\"reversed\"\`. Null value otherwise.").optional()
}
```

### sandboxtransfersweepsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, the sweep to be simulated is created on the day of the \`virtual_time\` on the \`test_clock\`. If the date of \`virtual_time\` is on weekend or a federal holiday, the next available banking day is used.").optional(),
  "webhook": z.string().describe("The webhook URL to which a \`TRANSFER_EVENTS_UPDATE\` webhook should be sent.").optional()
}
```

### sandboxtransfersimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transfer_id": z.string().describe("Plaid’s unique identifier for a transfer."),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, the event to be simulated is created at the \`virtual_time\` on the provided \`test_clock\`.").optional(),
  "event_type": z.string().describe("The asynchronous event to be simulated. May be: \`posted\`, \`settled\`, \`failed\`, \`funds_available\`, or \`returned\`.\n\nAn error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:\n\n\`pending\` --> \`failed\`\n\n\`pending\` --> \`posted\`\n\n\`posted\` --> \`returned\`\n\n\`posted\` --> \`settled\`\n\n\`settled\` --> \`funds_available\` (only applicable to ACH debits.)\n"),
  "failure_reason": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe failure reason if the event type for a transfer is \`\"failed\"\` or \`\"returned\"\`. Null value otherwise.").optional(),
  "webhook": z.string().describe("The webhook URL to which a \`TRANSFER_EVENTS_UPDATE\` webhook should be sent.").optional()
}
```

### sandboxtransferrefundsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "refund_id": z.string().describe("Plaid’s unique identifier for a refund."),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, the event to be simulated is created at the \`virtual_time\` on the provided \`test_clock\`.").optional(),
  "event_type": z.string().describe("The asynchronous event to be simulated. May be: \`refund.posted\`, \`refund.settled\`, \`refund.failed\`, or \`refund.returned\`.\n\nAn error will be returned if the event type is incompatible with the current refund status. Compatible status --> event type transitions include:\n\n\`refund.pending\` --> \`refund.failed\`\n\n\`refund.pending\` --> \`refund.posted\`\n\n\`refund.posted\` --> \`refund.returned\`\n\n\`refund.posted\` --> \`refund.settled\`\n\n\`refund.posted\` events can only be simulated if the refunded transfer has been transitioned to settled. This mimics the ordering of events in Production.\n"),
  "failure_reason": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe failure reason if the event type for a transfer is \`\"failed\"\` or \`\"returned\"\`. Null value otherwise.").optional(),
  "webhook": z.string().describe("The webhook URL to which a \`TRANSFER_EVENTS_UPDATE\` webhook should be sent.").optional()
}
```

### sandboxtransferledgersimulateavailable

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to simulate converting pending balance to available balance. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, only the pending balance that is due before the \`virtual_timestamp\` on the test clock will be converted.").optional(),
  "webhook": z.string().describe("The webhook URL to which a \`TRANSFER_EVENTS_UPDATE\` webhook should be sent.").optional()
}
```

### sandboxtransferledgerdepositsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "sweep_id": z.string().describe("Plaid’s unique identifier for a sweep."),
  "event_type": z.enum(["sweep.posted","sweep.settled","sweep.returned","sweep.failed"]).describe("The asynchronous event to be simulated. May be: \`posted\`, \`settled\`, \`failed\`, or \`returned\`.\n\nAn error will be returned if the event type is incompatible with the current ledger sweep status. Compatible status --> event type transitions include:\n\n\`sweep.pending\` --> \`sweep.posted\`\n\n\`sweep.pending\` --> \`sweep.failed\`\n\n\`sweep.posted\` --> \`sweep.settled\`\n\n\`sweep.posted\` --> \`sweep.returned\`\n\n\`sweep.settled\` --> \`sweep.returned\`\n"),
  "failure_reason": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe failure reason if the event type for a transfer is \`\"failed\"\` or \`\"returned\"\`. Null value otherwise.").optional()
}
```

### sandboxtransferledgerwithdrawsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "sweep_id": z.string().describe("Plaid’s unique identifier for a sweep."),
  "event_type": z.enum(["sweep.posted","sweep.settled","sweep.returned","sweep.failed"]).describe("The asynchronous event to be simulated. May be: \`posted\`, \`settled\`, \`failed\`, or \`returned\`.\n\nAn error will be returned if the event type is incompatible with the current ledger sweep status. Compatible status --> event type transitions include:\n\n\`sweep.pending\` --> \`sweep.posted\`\n\n\`sweep.pending\` --> \`sweep.failed\`\n\n\`sweep.posted\` --> \`sweep.settled\`\n\n\`sweep.posted\` --> \`sweep.returned\`\n\n\`sweep.settled\` --> \`sweep.returned\`\n"),
  "failure_reason": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe failure reason if the event type for a transfer is \`\"failed\"\` or \`\"returned\"\`. Null value otherwise.").optional()
}
```

### sandboxtransferrepaymentsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### sandboxtransferfirewebhook

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "webhook": z.string().describe("The URL to which the webhook should be sent.")
}
```

### sandboxtransfertestclockcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "virtual_time": z.string().datetime({ offset: true }).nullable().describe("The virtual timestamp on the test clock. If not provided, the current timestamp will be used. This will be of the form \`2006-01-02T15:04:05Z\`.").optional()
}
```

### sandboxtransfertestclockadvance

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "test_clock_id": z.string().describe("Plaid’s unique identifier for a test clock."),
  "new_virtual_time": z.string().datetime({ offset: true }).describe("The virtual timestamp on the test clock. This will be of the form \`2006-01-02T15:04:05Z\`.")
}
```

### sandboxtransfertestclockget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "test_clock_id": z.string().describe("Plaid’s unique identifier for a test clock.")
}
```

### sandboxtransfertestclocklist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "start_virtual_time": z.string().datetime({ offset: true }).nullable().describe("The start virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "end_virtual_time": z.string().datetime({ offset: true }).nullable().describe("The end virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. \`2019-12-06T22:35:49Z\`)").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of test clocks to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of test clocks to skip before returning results.").optional()
}
```

### sandboxpaymentprofileresetlogin

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_profile_token": z.string().describe("A payment profile token associated with the Payment Profile data that is being requested.")
}
```

### sandboxpaymentsimulate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_id": z.string().describe("The ID of the payment to simulate"),
  "status": z.string().describe("The status to set the payment to.\n\nValid statuses include:\n- \`PAYMENT_STATUS_INITIATED\`\n- \`PAYMENT_STATUS_INSUFFICIENT_FUNDS\`\n- \`PAYMENT_STATUS_FAILED\`\n- \`PAYMENT_STATUS_EXECUTED\`\n- \`PAYMENT_STATUS_SETTLED\`\n- \`PAYMENT_STATUS_CANCELLED\`\n- \`PAYMENT_STATUS_REJECTED\`")
}
```

### employerssearch

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "query": z.string().describe("The employer name to be searched for."),
  "products": z.array(z.string()).describe("The Plaid products the returned employers should support. Currently, this field must be set to \`\"deposit_switch\"\`.")
}
```

### incomeverificationcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "webhook": z.string().describe("The URL endpoint to which Plaid should send webhooks related to the progress of the income verification process."),
  "precheck_id": z.string().describe("The ID of a precheck created with \`/income/verification/precheck\`. Will be used to improve conversion of the income verification flow.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional arguments for \`/income/verification/create\`").optional()
}
```

### incomeverificationpaystubsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().nullable().describe("The access token associated with the Item data is being requested for.").optional()
}
```

### incomeverificationdocumentsdownload

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().nullable().describe("The access token associated with the Item data is being requested for.").optional(),
  "document_id": z.string().nullable().describe("The document ID to download. If passed, a single document will be returned in the resulting zip file, rather than all document").optional()
}
```

### incomeverificationtaxformsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().nullable().describe("The access token associated with the Item data is being requested for.").optional()
}
```

### incomeverificationprecheck

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the user whose eligibility is being evaluated.").optional(),
  "employer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the end user's employer").optional(),
  "payroll_institution": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the end user's payroll institution").optional(),
  "transactions_access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).describe("An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with \`transactions\`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product.").optional(),
  "us_military_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nData about military info in the income verification precheck.").optional()
}
```

### employmentverificationget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### depositswitchaltcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "country_code": z.enum(["US","CA"]).nullable().describe("ISO-3166-1 alpha-2 country code standard.").optional()
}
```

### creditauditcopytokencreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "report_tokens": z.array(z.string().describe("The report token. It can be an VOA Asset Report token or a VOE Asset Report token.")).describe("List of report tokens; can include at most one VOA/standard Asset Report tokens and one VOE Asset Report Token.")
}
```

### creditreportauditcopyremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "audit_copy_token": z.string().describe("The \`audit_copy_token\` granting access to the Audit Copy you would like to revoke.")
}
```

### creditassetreportfreddiemacget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "audit_copy_token": z.string().describe("A token that can be shared with a third party auditor to allow them to obtain access to the Asset Report. This token should be stored securely."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### creditfreddiemacreportsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "audit_copy_token": z.string().describe("A token that can be shared with a third party auditor to allow them to obtain access to the Asset Report. This token should be stored securely."),
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### creditbankemploymentget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### creditbankincomeget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object for \`/credit/bank_income/get\` request options.").optional()
}
```

### creditbankincomepdfget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### creditbankincomerefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object for \`/credit/bank_income/refresh\` request options.").optional()
}
```

### creditbankincomewebhookupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "enable_webhooks": z.boolean().describe("Whether the user should be enabled for proactive webhook notifications when their income changes")
}
```

### creditpayrollincomeparsingconfigupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "item_id": z.string().describe("The \`item_id\` of the Item associated with this webhook, warning, or error").optional(),
  "parsing_config": z.array(z.enum(["ocr","risk_signals"]).describe("Analysis options to enable for document parsing")).describe("The types of analysis to enable for the document income verification session")
}
```

### creditbankstatementsuploadsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object for \`/credit/bank_statements/uploads/get\` request options.").optional()
}
```

### creditpayrollincomeget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object for \`/credit/payroll_income/get\` request options.").optional()
}
```

### creditpayrollincomerisksignalsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional()
}
```

### creditpayrollincomeprecheck

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.").optional(),
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).describe("An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with \`transactions\`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product.").optional(),
  "employer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the end user's employer").optional(),
  "us_military_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nData about military info in the income verification precheck.").optional(),
  "payroll_institution": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the end user's payroll institution").optional()
}
```

### creditemploymentget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### creditpayrollincomerefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn optional object for \`/credit/payroll_income/refresh\` request options.").optional()
}
```

### creditrelaycreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "report_tokens": z.array(z.string().describe("The report token. It can only be an asset report token token.")).describe("List of report token strings, with at most one token of each report type. Currently only Asset Report token is supported."),
  "secondary_client_id": z.string().describe("The \`secondary_client_id\` is the client id of the third party with whom you would like to share the relay token."),
  "webhook": z.string().nullable().describe("URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset Report by calling \`/credit/relay/get\`.").optional()
}
```

### creditrelayget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "relay_token": z.string().describe("The \`relay_token\` granting access to the report you would like to get."),
  "report_type": z.literal("asset").describe("The report type. It can be \`asset\`. Income report types are not yet supported."),
  "include_insights": z.boolean().describe("\`true\` if you would like to retrieve the Asset Report with Insights, \`false\` otherwise. This field defaults to \`false\` if omitted.").optional()
}
```

### creditrelaypdfget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "relay_token": z.string().describe("The \`relay_token\` granting access to the report you would like to get."),
  "report_type": z.literal("asset").describe("The report type. It can be \`asset\`. Income report types are not yet supported.")
}
```

### creditrelayrefresh

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "relay_token": z.string().describe("The \`relay_token\` granting access to the report you would like to refresh."),
  "report_type": z.literal("asset").describe("The report type. It can be \`asset\`. Income report types are not yet supported."),
  "webhook": z.string().nullable().describe("The URL registered to receive webhooks when the report of a relay token has been refreshed.").optional()
}
```

### creditrelayremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "relay_token": z.string().describe("The \`relay_token\` you would like to revoke.")
}
```

### sandboxbanktransferfirewebhook

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "webhook": z.string().describe("The URL to which the webhook should be sent.")
}
```

### sandboxincomefirewebhook

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "item_id": z.string().describe("The Item ID associated with the verification."),
  "user_id": z.string().describe("The Plaid \`user_id\` of the User associated with this webhook, warning, or error.").optional(),
  "webhook": z.string().describe("The URL to which the webhook should be sent."),
  "verification_status": z.enum(["VERIFICATION_STATUS_PROCESSING_COMPLETE","VERIFICATION_STATUS_PROCESSING_FAILED","VERIFICATION_STATUS_PENDING_APPROVAL"]).describe("\`VERIFICATION_STATUS_PROCESSING_COMPLETE\`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the \`/income/verification/paystubs/get\` endpoint and check the document metadata to see which documents were successfully parsed.\n\n\`VERIFICATION_STATUS_PROCESSING_FAILED\`: A failure occurred when attempting to process the verification documentation.\n\n\`VERIFICATION_STATUS_PENDING_APPROVAL\`: (deprecated) The income verification has been sent to the user for review.").optional(),
  "webhook_code": z.enum(["INCOME_VERIFICATION","INCOME_VERIFICATION_RISK_SIGNALS"]).describe("The webhook codes that can be fired by this test endpoint.")
}
```

### sandboxbankincomefirewebhook

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "webhook_override": z.string().describe("The URL to which the webhook should be sent. If provided, this will override the URL set in the dashboard.").optional(),
  "webhook_code": z.enum(["BANK_INCOME_REFRESH_UPDATE","BANK_INCOME_REFRESH_COMPLETE"]).describe("The webhook codes this endpoint can be used to test"),
  "webhook_fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional fields which will be populated in the simulated webhook")
}
```

### sandboxcracashflowupdatesupdate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for.")
}
```

### sandboxoauthselectaccounts

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "oauth_state_id": z.string(),
  "accounts": z.array(z.string())
}
```

### signalevaluate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The Plaid \`account_id\` of the account that is the funding source for the proposed transaction. The \`account_id\` is returned in the \`/accounts/get\` endpoint as well as the [\`onSuccess\`](/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id) callback metadata.\n\nThis will return an [\`INVALID_ACCOUNT_ID\`](/docs/errors/invalid-input/#invalid_account_id) error if the account has been removed at the bank or if the \`account_id\` is no longer valid."),
  "client_transaction_id": z.string().min(1).max(36).describe("The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters."),
  "amount": z.number().describe("The transaction amount, in USD (e.g. \`102.05\`)"),
  "user_present": z.boolean().nullable().describe("\`true\` if the end user is present while initiating the ACH transfer and the endpoint is being called; \`false\` otherwise (for example, when the ACH transfer is scheduled and the end user is not present, or you call this endpoint after the ACH transfer but before submitting the Nacha file for ACH processing).").optional(),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple Items. Personally identifiable information, such as an email address or phone number, should not be used in the \`client_user_id\`.").optional(),
  "is_recurring": z.boolean().nullable().describe("\`true\` if the ACH transaction is a recurring transaction; \`false\` otherwise ").optional(),
  "default_payment_method": z.string().nullable().describe("The default ACH or non-ACH payment method to complete the transaction.\n\`SAME_DAY_ACH\`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day\n\`NEXT_DAY_ACH\`: Next Day ACH settlement for debit transactions, offered by some payment processors\n\`STANDARD_ACH\`: standard ACH by NACHA\n\`REAL_TIME_PAYMENTS\`: real-time payments such as RTP and FedNow\n\`DEBIT_CARD\`: if the default payment is over debit card networks\n\`MULTIPLE_PAYMENT_METHODS\`: if there is no default debit rail or there are multiple payment methods\nPossible values:  \`SAME_DAY_ACH\`, \`NEXT_DAY_ACH\`, \`STANDARD_ACH\`, \`REAL_TIME_PAYMENTS\`, \`DEBIT_CARD\`, \`MULTIPLE_PAYMENT_METHODS\`").optional(),
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails about the end user initiating the transaction (i.e., the account holder). When calling \`/signal/evaluate\` or \`/signal/processor/evaluate\`, this field is optional, but strongly recommended to increase the accuracy of Signal results.").optional(),
  "device": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails about the end user's device. When calling \`/signal/evaluate\` or \`/signal/processor/evaluate\`, this field is optional, but strongly recommended to increase the accuracy of Signal results.").optional(),
  "ruleset_key": z.string().nullable().describe("The key of the Ruleset to use for this transaction. You can configure a Ruleset using the Signal dashboard located within the Plaid Dashboard. If not provided, no Ruleset will be used. This feature is currently in closed beta; to request access, contact your account manager.").optional()
}
```

### signalschedule

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The Plaid \`account_id\` of the account that is the funding source for the proposed transaction. The \`account_id\` is returned in the \`/accounts/get\` endpoint as well as the [\`onSuccess\`](/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id) callback metadata.\n\nThis will return an [\`INVALID_ACCOUNT_ID\`](/docs/errors/invalid-input/#invalid_account_id) error if the account has been removed at the bank or if the \`account_id\` is no longer valid."),
  "client_transaction_id": z.string().min(1).max(36).describe("The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters."),
  "amount": z.number().describe("The transaction amount, in USD (e.g. \`102.05\`)"),
  "default_payment_method": z.enum(["SAME_DAY_ACH","STANDARD_ACH","REAL_TIME_PAYMENTS","DEBIT_CARD","MULTIPLE_PAYMENT_METHODS"]).describe("The payment method specified in the \`default_payment_method\` field directly impacts the timing recommendations provided by the API for submitting the debit entry to your processor or ODFI. If unspecified, Signal defaults to \`STANDARD_ACH\`.\n\n\`SAME_DAY_ACH\`: Same Day ACH (as defined by Nacha). The Signal API assumes the settlement will occur on the same business day if the \`/signal/schedule\` request is submitted by 6:00 PM UTC. Note: The actual cutoff time can vary depending on your payment processor or ODFI. NACHA has established three processing windows for Same Day ACH (UTC): 2:30 PM, 6:45 PM, and 8:45 PM.\n\n\`STANDARD_ACH\`: Standard ACH (as defined by Nacha), typically settled one to three business days after submission.\n\n\`REAL_TIME_PAYMENTS\`: Real-time payments via Request for Payment through networks such as RTP (The Clearing House) and FedNow, where the consumer can authorize the payment in response to a RFP, and the transaction is processed and settled immediately.\n\n\`DEBIT_CARD\`: Payments processed over debit card networks, leveraging the card-based infrastructure for real-time or near-real-time settlement.\n\n\`MULTIPLE_PAYMENT_METHODS\`: Indicates that there is no default debit rail or multiple payment methods are available, and the transaction could use any of them based on customer policy or availability.").optional()
}
```

### signaldecisionreport

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the \`client_transaction_id\` supplied when calling \`/signal/evaluate\`"),
  "initiated": z.boolean().describe("\`true\` if the ACH transaction was initiated, \`false\` otherwise.\n\nThis field must be returned as a boolean. If formatted incorrectly, this will result in an [\`INVALID_FIELD\`](/docs/errors/invalid-request/#invalid_field) error."),
  "days_funds_on_hold": z.number().int().gte(0).nullable().describe("The actual number of days (hold time) since the ACH debit transaction that you wait before making funds available to your customers. The holding time could affect the ACH return rate.\n\nFor example, use 0 if you make funds available to your customers instantly or the same day following the debit transaction, or 1 if you make funds available the next day following the debit initialization.").optional(),
  "decision_outcome": z.enum(["APPROVE","REVIEW","REJECT","TAKE_OTHER_RISK_MEASURES","NOT_EVALUATED"]).nullable().describe("The payment decision from the risk assessment.\n\n\`APPROVE\`: approve the transaction without requiring further actions from your customers. For example, use this field if you are placing a standard hold for all the approved transactions before making funds available to your customers. You should also use this field if you decide to accelerate the fund availability for your customers.\n\n\`REVIEW\`: the transaction requires manual review\n\n\`REJECT\`: reject the transaction\n\n\`TAKE_OTHER_RISK_MEASURES\`: for example, placing a longer hold on funds than those approved transactions or introducing customer frictions such as step-up verification/authentication\n\n\`NOT_EVALUATED\`: if only logging the Signal results without using them\n\nPossible values:  \`APPROVE\`, \`REVIEW\`, \`REJECT\`, \`TAKE_OTHER_RISK_MEASURES\`, \`NOT_EVALUATED\`\n").optional(),
  "payment_method": z.enum(["SAME_DAY_ACH","NEXT_DAY_ACH","STANDARD_ACH","REAL_TIME_PAYMENTS","DEBIT_CARD","MULTIPLE_PAYMENT_METHODS"]).nullable().describe("The payment method to complete the transaction after the risk assessment. It may be different from the default payment method.\n\n\`SAME_DAY_ACH\`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day\n\n\`NEXT_DAY_ACH\`: Next Day ACH settlement for debit transactions, offered by some payment processors\n\n\`STANDARD_ACH\`: standard ACH by NACHA\n\n\`REAL_TIME_PAYMENTS\`: real-time payments such as RTP and FedNow\n\n\`DEBIT_CARD\`: if the default payment is over debit card networks\n\n\`MULTIPLE_PAYMENT_METHODS\`: if there is no default debit rail or there are multiple payment methods\n\nPossible values: \`SAME_DAY_ACH\`, \`NEXT_DAY_ACH\`, \`STANDARD_ACH\`, \`REAL_TIME_PAYMENTS\`, \`DEBIT_CARD\`, \`MULTIPLE_PAYMENT_METHODS\`\n").optional(),
  "amount_instantly_available": z.number().nullable().describe("The amount (in USD) made available to your customers instantly following the debit transaction. It could be a partial amount of the requested transaction (example: 102.05).").optional(),
  "submitted_at": z.string().datetime({ offset: true }).describe("The date the ACH debit was submitted to the bank for processing (in ISO 8601 format: \`YYYY-MM-DDTHH:mm:ssZ\`). This field should correspond to the attempt initiated after the \`/signal/schedule\` call.").optional()
}
```

### signalreturnreport

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the \`client_transaction_id\` supplied when calling \`/signal/evaluate\` or \`/accounts/balance/get\`."),
  "return_code": z.string().describe("Must be a valid ACH return code (e.g. \"R01\")\n\nIf formatted incorrectly, this will result in an [\`INVALID_FIELD\`](/docs/errors/invalid-request/#invalid_field) error."),
  "returned_at": z.string().datetime({ offset: true }).nullable().describe("Date and time when you receive the returns from your payment processors, in ISO 8601 format (\`YYYY-MM-DDTHH:mm:ssZ\`).").optional()
}
```

### signalprepare

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for.")
}
```

### walletcreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "iso_currency_code": z.enum(["GBP","EUR"]).describe("An ISO-4217 currency code, used with e-wallets and transactions.")
}
```

### walletget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "wallet_id": z.string().min(1).describe("The ID of the e-wallet")
}
```

### walletlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "iso_currency_code": z.enum(["GBP","EUR"]).describe("An ISO-4217 currency code, used with e-wallets and transactions.").optional(),
  "cursor": z.string().max(1024).describe("A base64 value representing the latest e-wallet that has already been requested. Set this to \`next_cursor\` received from the previous \`/wallet/list\` request. If provided, the response will only contain e-wallets created before that e-wallet. If omitted, the response will contain e-wallets starting from the most recent, and in descending order.").optional(),
  "count": z.number().int().gte(1).lte(20).describe("The number of e-wallets to fetch").optional()
}
```

### wallettransactionexecute

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "idempotency_key": z.string().min(1).max(128).describe("A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.\n\nThe API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a wallet transaction fails due to a network connection error, then after a minimum delay of one minute, you can retry the request with the same idempotency key to guarantee that only a single wallet transaction is created. If the request was successfully processed, it will prevent any transaction that uses the same idempotency key, and was received within 24 hours of the first request, from being processed."),
  "wallet_id": z.string().min(1).describe("The ID of the e-wallet to debit from"),
  "counterparty": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object representing the e-wallet transaction's counterparty"),
  "amount": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe amount and currency of a transaction"),
  "reference": z.string().min(6).max(18).describe("A reference for the transaction. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces.\nEnsure that the \`reference\` field is unique for each transaction."),
  "originating_fund_source": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe original source of the funds. This field is required by local regulation for certain businesses (e.g. money remittance) to send payouts to recipients in the EU and UK.").optional()
}
```

### wallettransactionget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "transaction_id": z.string().min(1).describe("The ID of the transaction to fetch")
}
```

### wallettransactionlist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "wallet_id": z.string().min(1).describe("The ID of the e-wallet to fetch transactions from"),
  "cursor": z.string().max(256).describe("A base64 value representing the latest transaction that has already been requested. Set this to \`next_cursor\` received from the previous \`/wallet/transaction/list\` request. If provided, the response will only contain transactions created before that transaction. If omitted, the response will contain transactions starting from the most recent, and in descending order by the \`created_at\` time.").optional(),
  "count": z.number().int().gte(1).lte(200).describe("The number of transactions to fetch").optional(),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional wallet transaction options").optional()
}
```

### transactionsenhance

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "account_type": z.string().describe("The type of account for the requested transactions (\`depository\` or \`credit\`)."),
  "transactions": z.array(z.object({ "id": z.string().describe("A unique ID for the transaction used to help you tie data back to your systems."), "description": z.string().describe("The raw description of the transaction."), "amount": z.number().describe("The value of the transaction with direction. (NOTE: this will affect enrichment results, so directions are important):.\n  Negative (-) for credits (e.g., incoming transfers, refunds)\n  Positive (+) for debits (e.g., purchases, fees, outgoing transfers)"), "iso_currency_code": z.string().describe("The ISO-4217 currency code of the transaction e.g. USD.") }).catchall(z.any()).describe("A client-provided transaction for Plaid to enhance.")).describe("An array of raw transactions to be enhanced.")
}
```

### transactionsrulescreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "personal_finance_category": z.string().describe("Personal finance detailed category.\n\nAll implementations are encouraged to use this field instead of \`category\`, as it provides more meaningful and accurate categorization.\n\nSee the [\`taxonomy csv file\`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.\n"),
  "rule_details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA representation of transactions rule details.")
}
```

### transactionsruleslist

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### transactionsrulesremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "rule_id": z.string().describe("A rule's unique identifier")
}
```

### x_hidden_from_docs_beta_transactions_user_insights_v1_get

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### transactionsuserinsightsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "client_user_id": z.string().describe("A unique client-provided user_id to retrieve insights for.")
}
```

### issuessearch

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "item_id": z.string().describe("A unique identifier for the Plaid Item.").optional(),
  "link_session_id": z.string().describe("A unique identifier for the Link session.").optional(),
  "link_session_request_id": z.string().describe("The \`request_id\` for the Link session that might have had an institution connection issue.").optional()
}
```

### issuesget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "issue_id": z.string().describe("The unique identifier of the issue to retrieve.")
}
```

### issuessubscribe

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "issue_id": z.string().describe("The unique identifier of the issue to subscribe to."),
  "webhook": z.string().describe("The webhook URL where notifications should be sent when the issue status changes.").optional()
}
```

### paymentprofilecreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional()
}
```

### paymentprofileget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_profile_token": z.string().describe("A payment profile token associated with the Payment Profile data that is being requested.")
}
```

### paymentprofileremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "payment_profile_token": z.string().describe("A payment profile token associated with the Payment Profile data that is being requested.")
}
```

### partnercustomercreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "company_name": z.string().describe("The company name of the end customer being created. This will be used to display the end customer in the Plaid Dashboard. It will not be shown to end users.").optional(),
  "is_diligence_attested": z.boolean().describe("Denotes whether or not the partner has completed attestation of diligence for the end customer to be created.").optional(),
  "products": z.array(z.enum(["assets","auth","balance","balance_plus","beacon","identity","identity_match","investments","investments_auth","liabilities","payment_initiation","identity_verification","transactions","credit_details","income","income_verification","standing_orders","transfer","employment","recurring_transactions","transactions_refresh","signal","statements","processor_payments","processor_identity","profile","cra_base_report","cra_income_insights","cra_partner_insights","cra_network_insights","cra_cashflow_insights","layer","pay_by_bank"]).describe("A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.")).describe("The products to be enabled for the end customer. If empty or \`null\`, this field will default to the products enabled for the reseller at the time this endpoint is called.").optional(),
  "create_link_customization": z.boolean().describe("If \`true\`, the end customer's default Link customization will be set to match the partner's. You can always change the end customer's Link customization in the Plaid Dashboard. See the [Link Customization docs](https://plaid.com/docs/link/customization/) for more information.").optional(),
  "logo": z.string().describe("Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under 4MB. The logo will be shared with financial institutions and shown to the end user during Link flows. A logo is required if \`create_link_customization\` is \`true\`. If \`create_link_customization\` is \`false\` and the logo is omitted, the partner's logo will be used if one exists, otherwise a stock logo will be used.").optional(),
  "legal_entity_name": z.string().describe("The end customer's legal name. This will be shared with financial institutions as part of the OAuth registration process. It will not be shown to end users.").optional(),
  "website": z.string().describe("The end customer's website.").optional(),
  "application_name": z.string().describe("The name of the end customer's application. This will be shown to end users when they go through the Plaid Link flow. The application name must be unique and cannot match the name of another application already registered with Plaid.").optional(),
  "technical_contact": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe technical contact for the end customer. Defaults to partner's technical contact if omitted.").optional(),
  "billing_contact": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe billing contact for the end customer. Defaults to partner's billing contact if omitted.").optional(),
  "customer_support_info": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThis information is public. Users of your app will see this information when managing connections between your app and their bank accounts in Plaid Portal. Defaults to partner's customer support info if omitted.").optional(),
  "address": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe end customer's address.").optional(),
  "is_bank_addendum_completed": z.boolean().describe("Denotes whether the partner has forwarded the Plaid bank addendum to the end customer.").optional(),
  "assets_under_management": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAssets under management for the given end customer. Required for end customers with monthly service commitments.").optional(),
  "redirect_uris": z.array(z.string()).describe("A list of URIs indicating the destination(s) where a user can be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or another app. URIs should not contain any query parameters. When used in Production, URIs must use https. To specify any subdomain, use \`*\` as a wildcard character, e.g. \`https://*.example.com/oauth.html\`. To modify redirect URIs for an end customer after creating them, go to the end customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard.").optional(),
  "registration_number": z.string().describe("The unique identifier assigned to a financial institution by regulatory authorities, if applicable. For banks, this is the FDIC Certificate Number. For credit unions, this is the Credit Union Charter Number.").optional()
}
```

### partnercustomerget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "end_customer_client_id": z.string().optional()
}
```

### partnercustomerenable

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "end_customer_client_id": z.string().optional()
}
```

### partnercustomerremove

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "end_customer_client_id": z.string().describe("The \`client_id\` of the end customer to be removed.").optional()
}
```

### partnercustomeroauthinstitutionsget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "end_customer_client_id": z.string().optional()
}
```

### linkdeliverycreate

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "link_token": z.string().describe("A \`link_token\` from a previous invocation of \`/link/token/create\`."),
  "options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional metadata related to the Hosted Link session").optional()
}
```

### linkdeliveryget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "link_delivery_session_id": z.string().describe("The ID for the Hosted Link session from a previous invocation of \`/link_delivery/create\`.")
}
```

### fdxnotifications

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "notificationId": z.string().describe("Id of notification"),
  "type": z.enum(["CONSENT_REVOKED","CONSENT_UPDATED","CUSTOM","SERVICE","BALANCE","PLANNED_OUTAGE"]).describe("Type of Notification"),
  "sentOn": z.string().datetime({ offset: true }).describe("ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)"),
  "category": z.enum(["SECURITY","MAINTENANCE","FRAUD","CONSENT","NEW_DATA"]).describe("Category of Notification"),
  "severity": z.enum(["EMERGENCY","ALERT","WARNING","NOTICE","INFO"]).describe("Severity level of notification").optional(),
  "priority": z.enum(["HIGH","MEDIUM","LOW"]).describe("Priority of notification").optional(),
  "publisher": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFDX Participant - an entity or person that is a part of a FDX API transaction").optional(),
  "subscriber": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFDX Participant - an entity or person that is a part of a FDX API transaction").optional(),
  "notificationPayload": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustom key-value pairs payload for a notification"),
  "url": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nREST application constraint (Hypermedia As The Engine Of Application State)").optional()
}
```

### x_hidden_from_docs_fdx_recipients

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### getrecipients

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### x_hidden_from_docs_fdx_recipient_recipientid_

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{}
```

### getrecipient

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "recipientId": z.string().describe("Recipient Identifier. Uniquely identifies the recipient"),
  "OAUTH-STATE-ID": z.string().describe("The value that is passed into the OAuth URI 'state' query parameter.").optional()
}
```

### networkinsightsreportget

**Environment variables**

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_VERSION`

**Input schema**

```ts
{
  "client_id": z.string().describe("Your Plaid API \`client_id\`. The \`client_id\` is required and may be provided either in the \`PLAID-CLIENT-ID\` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API \`secret\`. The \`secret\` is required and may be provided either in the \`PLAID-SECRET\` header or as part of a request body.").optional(),
  "access_tokens": z.array(z.string().describe("The access token associated with the Item data is being requested for.")).describe("A list of access tokens that the Network Insights will be requested for. These correspond to previous Items a user has connected.")
}
```
