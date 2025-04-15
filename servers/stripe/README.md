# @open-mcp/stripe

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add stripe \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=... \
  --USERNAME_PASSWORD_BASE64=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add stripe \
  .cursor/mcp.json \
  --API_KEY=... \
  --USERNAME_PASSWORD_BASE64=...
```

### Other

```bash
npx @open-mcp/config add stripe \
  /path/to/client/config.json \
  --API_KEY=... \
  --USERNAME_PASSWORD_BASE64=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@open-mcp/stripe"],
      "env": {"API_KEY":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/stripe
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/stripe`
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

### getaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### postaccountsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return connected accounts that were created during the given date interval.").optional(),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### postaccountsaccountbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be deleted.")
}
```

### getaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be retrieved."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string()
}
```

### getaccountsaccountcapabilities

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getaccountsaccountcapabilitiescapability

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "capability": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountcapabilitiescapability

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "capability": z.string()
}
```

### getaccountsaccountexternalaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "object": z.enum(["bank_account","card"]).describe("Filter external accounts according to a particular object type.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccountsaccountexternalaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be deleted.")
}
```

### getaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be retrieved."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "id": z.string()
}
```

### postaccountsaccountloginlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getaccountsaccountpeople

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "relationship": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilters on the list of people returned based on the person's relationship to the account's company.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccountsaccountpeople

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpersons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "relationship": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilters on the list of people returned based on the person's relationship to the account's company.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccountsaccountpersons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### postaccountsaccountreject

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getapplepaydomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "domain_name": z.string().max(5000).optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postapplepaydomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteapplepaydomainsdomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "domain": z.string().max(5000)
}
```

### getapplepaydomainsdomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "domain": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getapplicationfees

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000).describe("Only return application fees for the charge specified by this charge ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return applications fees that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getapplicationfeesfeerefundsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fee": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postapplicationfeesfeerefundsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "fee": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getapplicationfeesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postapplicationfeesidrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getapplicationfeesidrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postapplicationfeesidrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getappssecrets

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "scope": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postappssecrets

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### postappssecretsdelete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getappssecretsfind

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "name": z.string().max(5000).describe("A name for the secret that's unique within the scope."),
  "scope": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.")
}
```

### getbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbalancehistory

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return transactions that were created during the given date interval.").optional(),
  "currency": z.string().describe("Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payout": z.string().max(5000).describe("For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.").optional(),
  "source": z.string().max(5000).describe("Only returns the original transaction.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.string().max(5000).describe("Only returns transactions of the given type. One of: \`adjustment\`, \`advance\`, \`advance_funding\`, \`anticipation_repayment\`, \`application_fee\`, \`application_fee_refund\`, \`charge\`, \`climate_order_purchase\`, \`climate_order_refund\`, \`connect_collection_transfer\`, \`contribution\`, \`issuing_authorization_hold\`, \`issuing_authorization_release\`, \`issuing_dispute\`, \`issuing_transaction\`, \`obligation_outbound\`, \`obligation_reversal_inbound\`, \`payment\`, \`payment_failure_refund\`, \`payment_network_reserve_hold\`, \`payment_network_reserve_release\`, \`payment_refund\`, \`payment_reversal\`, \`payment_unreconciled\`, \`payout\`, \`payout_cancel\`, \`payout_failure\`, \`payout_minimum_balance_hold\`, \`payout_minimum_balance_release\`, \`refund\`, \`refund_failure\`, \`reserve_transaction\`, \`reserved_funds\`, \`stripe_fee\`, \`stripe_fx_fee\`, \`stripe_balance_payment_debit\`, \`stripe_balance_payment_debit_reversal\`, \`tax_fee\`, \`topup\`, \`topup_reversal\`, \`transfer\`, \`transfer_cancel\`, \`transfer_failure\`, or \`transfer_refund\`.").optional()
}
```

### getbalancehistoryid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return transactions that were created during the given date interval.").optional(),
  "currency": z.string().describe("Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payout": z.string().max(5000).describe("For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.").optional(),
  "source": z.string().max(5000).describe("Only returns the original transaction.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.string().max(5000).describe("Only returns transactions of the given type. One of: \`adjustment\`, \`advance\`, \`advance_funding\`, \`anticipation_repayment\`, \`application_fee\`, \`application_fee_refund\`, \`charge\`, \`climate_order_purchase\`, \`climate_order_refund\`, \`connect_collection_transfer\`, \`contribution\`, \`issuing_authorization_hold\`, \`issuing_authorization_release\`, \`issuing_dispute\`, \`issuing_transaction\`, \`obligation_outbound\`, \`obligation_reversal_inbound\`, \`payment\`, \`payment_failure_refund\`, \`payment_network_reserve_hold\`, \`payment_network_reserve_release\`, \`payment_refund\`, \`payment_reversal\`, \`payment_unreconciled\`, \`payout\`, \`payout_cancel\`, \`payout_failure\`, \`payout_minimum_balance_hold\`, \`payout_minimum_balance_release\`, \`refund\`, \`refund_failure\`, \`reserve_transaction\`, \`reserved_funds\`, \`stripe_fee\`, \`stripe_fx_fee\`, \`stripe_balance_payment_debit\`, \`stripe_balance_payment_debit_reversal\`, \`tax_fee\`, \`topup\`, \`topup_reversal\`, \`transfer\`, \`transfer_cancel\`, \`transfer_failure\`, or \`transfer_refund\`.").optional()
}
```

### getbalancetransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbillingalerts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "alert_type": z.literal("usage_threshold").describe("Filter results to only include this type of alert.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "meter": z.string().max(5000).describe("Filter results to only include alerts with the given meter.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postbillingalerts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbillingalertsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingalertsidactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### postbillingalertsidarchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### postbillingalertsiddeactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getbillingcreditbalancesummary

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000).describe("The customer for which to fetch credit balance summary."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe filter criteria for the credit balance summary.")
}
```

### getbillingcreditbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "credit_grant": z.string().max(5000).describe("The credit grant for which to fetch credit balance transactions.").optional(),
  "customer": z.string().max(5000).describe("The customer for which to fetch credit balance transactions."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getbillingcreditbalancetransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbillingcreditgrants

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000).describe("Only return credit grants for this customer.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postbillingcreditgrants

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbillingcreditgrantsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingcreditgrantsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingcreditgrantsidexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingcreditgrantsidvoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingmetereventadjustments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### postbillingmeterevents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbillingmeters

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","inactive"]).describe("Filter results to only include meters with the given status.").optional()
}
```

### postbillingmeters

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbillingmetersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingmetersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingmetersiddeactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### getbillingmetersideventsummaries

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "customer": z.string().max(5000).describe("The customer for which to fetch event summaries."),
  "end_time": z.number().int().describe("The timestamp from when to stop aggregating meter events (exclusive). Must be aligned with minute boundaries."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "start_time": z.number().int().describe("The timestamp from when to start aggregating meter events (inclusive). Must be aligned with minute boundaries."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "value_grouping_window": z.enum(["day","hour"]).describe("Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).").optional()
}
```

### postbillingmetersidreactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### getbillingportalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return configurations that are active or inactive (e.g., pass \`true\` to only list active configurations).").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "is_default": z.boolean().describe("Only return the default or non-default configurations (e.g., pass \`true\` to only list the default configuration).").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postbillingportalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbillingportalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingportalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000)
}
```

### postbillingportalsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcharges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return charges that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return charges for the customer specified by this customer ID.").optional(),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "transfer_group": z.string().max(5000).describe("Only return charges for this transfer group, limited to 100.").optional()
}
```

### postcharges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getchargessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).")
}
```

### getchargescharge

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargescharge

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargecapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000)
}
```

### getchargeschargedispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargeschargedispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargedisputeclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargerefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000).describe("The identifier of the charge to refund.")
}
```

### getchargeschargerefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string(),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postchargeschargerefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000).describe("The identifier of the charge to refund.")
}
```

### getchargeschargerefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string(),
  "refund": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargeschargerefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string(),
  "refund": z.string()
}
```

### getcheckoutsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Checkout Sessions that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return the Checkout Sessions for the Customer specified.").optional(),
  "customer_details": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOnly return the Checkout Sessions for the Customer details specified.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return the Checkout Session for the PaymentIntent specified.").optional(),
  "payment_link": z.string().max(5000).describe("Only return the Checkout Sessions for the Payment Link specified.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["complete","expired","open"]).describe("Only return the Checkout Sessions matching the given status.").optional(),
  "subscription": z.string().max(5000).describe("Only return the Checkout Session for the subscription specified.").optional()
}
```

### postcheckoutsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcheckoutsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(66),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcheckoutsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000)
}
```

### postcheckoutsessionssessionexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000)
}
```

### getcheckoutsessionssessionlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getclimateorders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postclimateorders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getclimateordersorder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postclimateordersorder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}
```

### postclimateordersordercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}
```

### getclimateproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getclimateproductsproduct

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "product": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getclimatesuppliers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getclimatesupplierssupplier

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "supplier": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getconfirmationtokensconfirmationtoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "confirmation_token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcountryspecs

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcountryspecscountry

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "country": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcoupons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcoupons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deletecouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "coupon": z.string().max(5000)
}
```

### getcouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "coupon": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "coupon": z.string().max(5000)
}
```

### getcreditnotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return credit notes that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return credit notes for the customer specified by this customer ID.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("Only return credit notes for the invoice specified by this invoice ID.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcreditnotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcreditnotespreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the total amount of the credit note.").optional(),
  "credit_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.").optional(),
  "effective_at": z.number().int().describe("The date when this credit note is in effect. Same as \`created\` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.").optional(),
  "email_type": z.enum(["credit_note","none"]).describe("Type of email to send to the customer, one of \`credit_note\` or \`none\` and the default is \`credit_note\`.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("ID of the invoice."),
  "lines": z.array(z.object({ "amount": z.number().int().optional(), "description": z.string().max(5000).optional(), "invoice_line_item": z.string().max(5000).optional(), "quantity": z.number().int().optional(), "tax_amounts": z.union([z.array(z.object({ "amount": z.number().int(), "tax_rate": z.string().max(5000), "taxable_amount": z.number().int() })), z.literal("")]).optional(), "tax_rates": z.union([z.array(z.string().max(5000)), z.literal("")]).optional(), "type": z.enum(["custom_line_item","invoice_line_item"]), "unit_amount": z.number().int().optional(), "unit_amount_decimal": z.string().optional() })).describe("Line items that make up the credit note.").optional(),
  "memo": z.string().max(5000).describe("The credit note's memo appears on the credit note PDF.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to \`metadata\`.").optional(),
  "out_of_band_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.").optional(),
  "reason": z.enum(["duplicate","fraudulent","order_change","product_unsatisfactory"]).describe("Reason for issuing this credit note, one of \`duplicate\`, \`fraudulent\`, \`order_change\`, or \`product_unsatisfactory\`").optional(),
  "refund_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.").optional(),
  "refunds": z.array(z.object({ "amount_refunded": z.number().int().optional(), "refund": z.string().optional() })).describe("Refunds to link to this credit note.").optional(),
  "shipping_cost": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nWhen shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.").optional()
}
```

### getcreditnotespreviewlines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the total amount of the credit note.").optional(),
  "credit_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.").optional(),
  "effective_at": z.number().int().describe("The date when this credit note is in effect. Same as \`created\` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.").optional(),
  "email_type": z.enum(["credit_note","none"]).describe("Type of email to send to the customer, one of \`credit_note\` or \`none\` and the default is \`credit_note\`.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("ID of the invoice."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lines": z.array(z.object({ "amount": z.number().int().optional(), "description": z.string().max(5000).optional(), "invoice_line_item": z.string().max(5000).optional(), "quantity": z.number().int().optional(), "tax_amounts": z.union([z.array(z.object({ "amount": z.number().int(), "tax_rate": z.string().max(5000), "taxable_amount": z.number().int() })), z.literal("")]).optional(), "tax_rates": z.union([z.array(z.string().max(5000)), z.literal("")]).optional(), "type": z.enum(["custom_line_item","invoice_line_item"]), "unit_amount": z.number().int().optional(), "unit_amount_decimal": z.string().optional() })).describe("Line items that make up the credit note.").optional(),
  "memo": z.string().max(5000).describe("The credit note's memo appears on the credit note PDF.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to \`metadata\`.").optional(),
  "out_of_band_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.").optional(),
  "reason": z.enum(["duplicate","fraudulent","order_change","product_unsatisfactory"]).describe("Reason for issuing this credit note, one of \`duplicate\`, \`fraudulent\`, \`order_change\`, or \`product_unsatisfactory\`").optional(),
  "refund_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.").optional(),
  "refunds": z.array(z.object({ "amount_refunded": z.number().int().optional(), "refund": z.string().optional() })).describe("Refunds to link to this credit note.").optional(),
  "shipping_cost": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nWhen shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcreditnotescreditnotelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "credit_note": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcreditnotesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcreditnotesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### postcreditnotesidvoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### postcustomersessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcustomers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return customers that were created during the given date interval.").optional(),
  "email": z.string().max(512).describe("A case-sensitive filter on the list based on the customer's \`email\` field. The value must be a string.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "test_clock": z.string().max(5000).describe("Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.").optional()
}
```

### postcustomers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcustomerssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).")
}
```

### deletecustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomerbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string().max(5000)
}
```

### getcustomerscustomerbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomerbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### postcustomerscustomerbankaccountsidverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomercards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomercards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomercashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomercashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomercashbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcustomerscustomercashbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### deletecustomerscustomerdiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerdiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerfundinginstructions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "allow_redisplay": z.enum(["always","limited","unspecified"]).describe("This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to \`unspecified\`.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["acss_debit","affirm","afterpay_clearpay","alipay","alma","amazon_pay","au_becs_debit","bacs_debit","bancontact","billie","blik","boleto","card","cashapp","customer_balance","eps","fpx","giropay","grabpay","ideal","kakao_pay","klarna","konbini","kr_card","link","mobilepay","multibanco","naver_pay","nz_bank_account","oxxo","p24","pay_by_bank","payco","paynow","paypal","pix","promptpay","revolut_pay","samsung_pay","satispay","sepa_debit","sofort","swish","twint","us_bank_account","wechat_pay","zip"]).describe("An optional filter on the list, based on the object \`type\` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.").optional()
}
```

### getcustomerscustomerpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "payment_method": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcustomerscustomersources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "object": z.string().max(5000).describe("Filter sources according to a particular object type.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomersources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(500),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### postcustomerscustomersourcesidverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomersubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### deletecustomerscustomersubscriptionssubscriptionexposediddiscoun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptionssubscriptionexposediddiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcustomerscustomertaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postcustomerscustomertaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomertaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomertaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000),
  "id": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().max(5000).describe("Only return disputes associated to the charge specified by this charge ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return disputes that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000)
}
```

### postdisputesdisputeclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000)
}
```

### getentitlementsactiveentitlements

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000).describe("The ID of the customer."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getentitlementsactiveentitlementsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("The ID of the entitlement."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getentitlementsfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "archived": z.boolean().describe("If set, filter results to only include features with the given archive status.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lookup_key": z.string().max(5000).describe("If set, filter results to only include features with the given lookup_key.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postentitlementsfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getentitlementsfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("The ID of the feature."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postentitlementsfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### postephemeralkeys

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteephemeralkeyskey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "key": z.string().max(5000)
}
```

### getevents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return events that were created during the given date interval.").optional(),
  "delivery_success": z.boolean().describe("Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.string().max(5000).describe("A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.").optional(),
  "types": z.array(z.string().max(5000)).describe("An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either \`type\` or \`types\`, but not both.").optional()
}
```

### geteventsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getexchangerates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include \`starting_after=X\` in order to fetch the next page of the list.").optional()
}
```

### getexchangeratesrateid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "rate_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string()
}
```

### getfilelinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return links that were created during the given date interval.").optional(),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "expired": z.boolean().describe("Filter links by their expiration status. By default, Stripe returns all links.").optional(),
  "file": z.string().max(5000).describe("Only return links for the given file.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postfilelinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getfilelinkslink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "link": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postfilelinkslink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "link": z.string()
}
```

### getfiles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return files that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "purpose": z.enum(["account_requirement","additional_verification","business_icon","business_logo","customer_signature","dispute_evidence","document_provider_identity_document","finance_report_run","financial_account_statement","identity_document","identity_document_downloadable","issuing_regulatory_reporting","pci_document","selfie","sigma_scheduled_query","tax_document_user_upload","terminal_reader_splashscreen"]).describe("Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postfiles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getfilesfile

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "file": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getfinancialconnectionsaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account_holder": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIf present, only return accounts that belong to the specified account holder. \`account_holder[customer]\` and \`account_holder[account]\` are mutually exclusive.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "session": z.string().max(5000).describe("If present, only return accounts that were collected as part of the given session.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getfinancialconnectionsaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postfinancialconnectionsaccountsaccountdisconnect

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getfinancialconnectionsaccountsaccountowners

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "ownership": z.string().max(5000).describe("The ID of the ownership object to fetch owners from."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postfinancialconnectionsaccountsaccountrefresh

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionsaccountsaccountsubscribe

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionsaccountsaccountunsubscribe

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionssessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getfinancialconnectionssessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getfinancialconnectionstransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000).describe("The ID of the Financial Connections Account whose transactions will be retrieved."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "transacted_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list based on the object \`transacted_at\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:").optional(),
  "transaction_refresh": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA filter on the list based on the object \`transaction_refresh\` field. The value can be a dictionary with the following options:").optional()
}
```

### getfinancialconnectionstransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getforwardingrequests

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSimilar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.").optional(),
  "ending_before": z.string().max(5000).describe("A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.").optional()
}
```

### postforwardingrequests

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getforwardingrequestsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getidentityverificationreports

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "client_reference_id": z.string().max(5000).describe("A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return VerificationReports that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["document","id_number"]).describe("Only return VerificationReports of this type").optional(),
  "verification_session": z.string().max(5000).describe("Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.").optional()
}
```

### getidentityverificationreportsreport

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "report": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getidentityverificationsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "client_reference_id": z.string().max(5000).describe("A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return VerificationSessions that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "related_customer": z.string().max(5000).optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","processing","requires_input","verified"]).describe("Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).").optional()
}
```

### postidentityverificationsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getidentityverificationsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postidentityverificationsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000)
}
```

### postidentityverificationsessionssessioncancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000)
}
```

### postidentityverificationsessionssessionredact

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000)
}
```

### getinvoicepayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("The identifier of the invoice whose payments to return.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe payment details of the invoice payments to return.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","open","paid"]).describe("The status of the invoice payments to return.").optional()
}
```

### getinvoicepaymentsinvoicepayment

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice_payment": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getinvoicerenderingtemplates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","archived"]).optional()
}
```

### getinvoicerenderingtemplatestemplate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "template": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "version": z.number().int().optional()
}
```

### postinvoicerenderingtemplatestemplatearchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "template": z.string().max(5000)
}
```

### postinvoicerenderingtemplatestemplateunarchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "template": z.string().max(5000)
}
```

### getinvoiceitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return invoice items that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "pending": z.boolean().describe("Set to \`true\` to only show pending invoice items, which are not yet attached to any invoices. Set to \`false\` to only show invoice items already attached to invoices. If unspecified, no filter is applied.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postinvoiceitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoiceitem": z.string().max(5000)
}
```

### getinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoiceitem": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoiceitem": z.string().max(5000)
}
```

### getinvoices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "collection_method": z.enum(["charge_automatically","send_invoice"]).describe("The collection method of the invoice to retrieve. Either \`charge_automatically\` or \`send_invoice\`.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return invoices that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return invoices for the customer specified by this customer ID.").optional(),
  "due_date": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["draft","open","paid","uncollectible","void"]).describe("The status of the invoice, one of \`draft\`, \`open\`, \`paid\`, \`uncollectible\`, or \`void\`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)").optional(),
  "subscription": z.string().max(5000).describe("Only return invoices for the subscription specified by this subscription ID.").optional()
}
```

### postinvoices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### postinvoicescreatepreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getinvoicessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).")
}
```

### deleteinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### getinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceaddlines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicefinalize

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### getinvoicesinvoicelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postinvoicesinvoicelineslineitemid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000).describe("Invoice ID of line item"),
  "line_item_id": z.string().max(5000).describe("Invoice line item ID")
}
```

### postinvoicesinvoicemarkuncollectible

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicepay

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceremovelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicesend

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceupdatelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicevoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "invoice": z.string().max(5000)
}
```

### getissuingauthorizations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000).describe("Only return authorizations that belong to the given card.").optional(),
  "cardholder": z.string().max(5000).describe("Only return authorizations that belong to the given cardholder.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return authorizations that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["closed","expired","pending","reversed"]).describe("Only return authorizations with the given status. One of \`pending\`, \`closed\`, or \`reversed\`.").optional()
}
```

### getissuingauthorizationsauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingauthorizationsauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### postissuingauthorizationsauthorizationapprove

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### postissuingauthorizationsauthorizationdecline

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### getissuingcardholders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return cardholders that were created during the given date interval.").optional(),
  "email": z.string().describe("Only return cardholders that have the given email address.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "phone_number": z.string().describe("Only return cardholders that have the given phone number.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","blocked","inactive"]).describe("Only return cardholders that have the given status. One of \`active\`, \`inactive\`, or \`blocked\`.").optional(),
  "type": z.enum(["company","individual"]).describe("Only return cardholders that have the given type. One of \`individual\` or \`company\`.").optional()
}
```

### postissuingcardholders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getissuingcardholderscardholder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "cardholder": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingcardholderscardholder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "cardholder": z.string().max(5000)
}
```

### getissuingcards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "cardholder": z.string().max(5000).describe("Only return cards belonging to the Cardholder with the provided ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return cards that were issued during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "exp_month": z.number().int().describe("Only return cards that have the given expiration month.").optional(),
  "exp_year": z.number().int().describe("Only return cards that have the given expiration year.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "last4": z.string().max(5000).describe("Only return cards that have the given last four digits.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "personalization_design": z.string().max(5000).optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","canceled","inactive"]).describe("Only return cards that have the given status. One of \`active\`, \`inactive\`, or \`canceled\`.").optional(),
  "type": z.enum(["physical","virtual"]).describe("Only return cards that have the given type. One of \`virtual\` or \`physical\`.").optional()
}
```

### postissuingcards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getissuingcardscard

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingcardscard

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### getissuingdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Issuing disputes that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["expired","lost","submitted","unsubmitted","won"]).describe("Select Issuing disputes with the given status.").optional(),
  "transaction": z.string().max(5000).describe("Select the Issuing dispute for the given transaction.").optional()
}
```

### postissuingdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getissuingdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000)
}
```

### postissuingdisputesdisputesubmit

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "dispute": z.string().max(5000)
}
```

### getissuingpersonalizationdesigns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lookup_keys": z.array(z.string().max(200)).describe("Only return personalization designs with the given lookup keys.").optional(),
  "preferences": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOnly return personalization designs with the given preferences.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","inactive","rejected","review"]).describe("Only return personalization designs with the given status.").optional()
}
```

### postissuingpersonalizationdesigns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getissuingpersonalizationdesignspersonalizationdesign

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "personalization_design": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingpersonalizationdesignspersonalizationdesign

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### getissuingphysicalbundles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","inactive","review"]).describe("Only return physical bundles with the given status.").optional(),
  "type": z.enum(["custom","standard"]).describe("Only return physical bundles with the given type.").optional()
}
```

### getissuingphysicalbundlesphysicalbundle

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "physical_bundle": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getissuingsettlementssettlement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "settlement": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingsettlementssettlement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "settlement": z.string().max(5000)
}
```

### getissuingtokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000).describe("The Issuing card identifier to list tokens for."),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Issuing tokens that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","deleted","requested","suspended"]).describe("Select Issuing tokens with the given status.").optional()
}
```

### getissuingtokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingtokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "token": z.string().max(5000)
}
```

### getissuingtransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000).describe("Only return transactions that belong to the given card.").optional(),
  "cardholder": z.string().max(5000).describe("Only return transactions that belong to the given cardholder.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return transactions that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["capture","refund"]).describe("Only return transactions that have the given type. One of \`capture\` or \`refund\`.").optional()
}
```

### getissuingtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000)
}
```

### postlinkaccountsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getlinkaccountsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getlinkedaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account_holder": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIf present, only return accounts that belong to the specified account holder. \`account_holder[customer]\` and \`account_holder[account]\` are mutually exclusive.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "session": z.string().max(5000).describe("If present, only return accounts that were collected as part of the given session.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getlinkedaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postlinkedaccountsaccountdisconnect

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getlinkedaccountsaccountowners

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "ownership": z.string().max(5000).describe("The ID of the ownership object to fetch owners from."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postlinkedaccountsaccountrefresh

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "account": z.string().max(5000)
}
```

### getmandatesmandate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "mandate": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getpaymentintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.").optional(),
  "customer": z.string().max(5000).describe("Only return PaymentIntents for the customer that this customer ID specifies.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postpaymentintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpaymentintentssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).")
}
```

### getpaymentintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentapplycustomerbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentcapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentconfirm

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentincrementauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentverifymicrodeposits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### getpaymentlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return payment links that are active or inactive (e.g., pass \`false\` to list all inactive payment links).").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postpaymentlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpaymentlinkspaymentlink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_link": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentlinkspaymentlink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_link": z.string().max(5000)
}
```

### getpaymentlinkspaymentlinklineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_link": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getpaymentmethodconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "application": z.union([z.string().max(100), z.literal("")]).describe("The Connect application to filter by.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postpaymentmethodconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpaymentmethodconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethodconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000)
}
```

### getpaymentmethoddomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "domain_name": z.string().max(5000).describe("The domain name that this payment method domain object represents.").optional(),
  "enabled": z.boolean().describe("Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postpaymentmethoddomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpaymentmethoddomainspaymentmethoddomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method_domain": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethoddomainspaymentmethoddomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method_domain": z.string().max(5000)
}
```

### postpaymentmethoddomainspaymentmethoddomainvalidate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method_domain": z.string().max(5000)
}
```

### getpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000).describe("The ID of the customer whose PaymentMethods will be retrieved.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["acss_debit","affirm","afterpay_clearpay","alipay","alma","amazon_pay","au_becs_debit","bacs_debit","bancontact","billie","blik","boleto","card","cashapp","customer_balance","eps","fpx","giropay","grabpay","ideal","kakao_pay","klarna","konbini","kr_card","link","mobilepay","multibanco","naver_pay","nz_bank_account","oxxo","p24","pay_by_bank","payco","paynow","paypal","pix","promptpay","revolut_pay","samsung_pay","satispay","sepa_debit","sofort","swish","twint","us_bank_account","wechat_pay","zip"]).describe("An optional filter on the list, based on the object \`type\` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.").optional()
}
```

### postpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method": z.string().max(5000)
}
```

### postpaymentmethodspaymentmethodattach

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method": z.string().max(5000)
}
```

### postpaymentmethodspaymentmethoddetach

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payment_method": z.string().max(5000)
}
```

### getpayouts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "arrival_date": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return payouts that are expected to arrive during the given date interval.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return payouts that were created during the given date interval.").optional(),
  "destination": z.string().describe("The ID of an external account - only return payouts sent to this external account.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.string().max(5000).describe("Only return payouts that have the given status: \`pending\`, \`paid\`, \`failed\`, or \`canceled\`.").optional()
}
```

### postpayouts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpayoutspayout

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payout": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpayoutspayout

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payout": z.string().max(5000)
}
```

### postpayoutspayoutcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payout": z.string().max(5000)
}
```

### postpayoutspayoutreverse

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "payout": z.string().max(5000)
}
```

### getplans

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return plans that are active or inactive (e.g., pass \`false\` to list all inactive plans).").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "product": z.string().max(5000).describe("Only return plans for the given product.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postplans

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plan": z.string().max(5000)
}
```

### getplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plan": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "plan": z.string().max(5000)
}
```

### getprices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return prices that are active or inactive (e.g., pass \`false\` to list all inactive prices).").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "currency": z.string().describe("Only return prices for the given currency.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lookup_keys": z.array(z.string().max(5000)).describe("Only return the price with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.").optional(),
  "product": z.string().max(5000).describe("Only return prices for the given product.").optional(),
  "recurring": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOnly return prices with these recurring fields.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["one_time","recurring"]).describe("Only return prices of type \`recurring\` or \`one_time\`.").optional()
}
```

### postprices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpricessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for prices](https://stripe.com/docs/search#query-fields-for-prices).")
}
```

### getpricesprice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "price": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpricesprice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "price": z.string().max(5000)
}
```

### getproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return products that are active or inactive (e.g., pass \`false\` to list all inactive products).").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return products that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "ids": z.array(z.string().max(5000)).describe("Only return products with the given IDs. Cannot be used with [starting_after](https://stripe.com/docs/api#list_products-starting_after) or [ending_before](https://stripe.com/docs/api#list_products-ending_before).").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "shippable": z.boolean().describe("Only return products that can be shipped (i.e., physical, not digital products).").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "url": z.string().max(5000).describe("Only return products with the given url.").optional()
}
```

### postproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getproductssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).")
}
```

### deleteproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getproductsproductfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "product": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postproductsproductfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "product": z.string().max(5000)
}
```

### deleteproductsproductfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "product": z.string().max(5000)
}
```

### getproductsproductfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000).describe("The ID of the product_feature."),
  "product": z.string().max(5000).describe("The ID of the product."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getpromotioncodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Filter promotion codes by whether they are active.").optional(),
  "code": z.string().max(5000).describe("Only return promotion codes that have this case-insensitive code.").optional(),
  "coupon": z.string().max(5000).describe("Only return promotion codes for this coupon.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "customer": z.string().max(5000).describe("Only return promotion codes that are restricted to this customer.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postpromotioncodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getpromotioncodespromotioncode

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "promotion_code": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpromotioncodespromotioncode

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "promotion_code": z.string().max(5000)
}
```

### getquotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000).describe("The ID of the customer whose quotes will be retrieved.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["accepted","canceled","draft","open"]).describe("The status of the quote.").optional(),
  "test_clock": z.string().max(5000).describe("Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.").optional()
}
```

### postquotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getquotesquote

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postquotesquote

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000)
}
```

### postquotesquoteaccept

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000)
}
```

### postquotesquotecancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000)
}
```

### getquotesquotecomputedupfrontlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postquotesquotefinalize

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000)
}
```

### getquotesquotelineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getquotesquotepdf

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "quote": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarearlyfraudwarnings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().describe("Only return early fraud warnings for the charge specified by this charge ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return early fraud warnings that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getradarearlyfraudwarningsearlyfraudwarning

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "early_fraud_warning": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarvaluelistitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return items that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "value": z.string().max(800).describe("Return items belonging to the parent list whose value matches the specified value (using an \"is like\" match).").optional(),
  "value_list": z.string().max(5000).describe("Identifier for the parent value list this item belongs to.")
}
```

### postradarvaluelistitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteradarvaluelistitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "item": z.string().max(5000)
}
```

### getradarvaluelistitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "item": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarvaluelists

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "alias": z.string().max(100).describe("The alias used to reference the value list when writing rules.").optional(),
  "contains": z.string().max(800).describe("A value contained within a value list - returns all value lists containing this value.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return value lists that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postradarvaluelists

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "value_list": z.string().max(5000)
}
```

### getradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "value_list": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "value_list": z.string().max(5000)
}
```

### getrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "charge": z.string().describe("Only return refunds for the charge specified by this charge ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return refunds that were created during the given date interval.").optional(),
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return refunds for the PaymentIntent specified by this ID.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getrefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "refund": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postrefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "refund": z.string()
}
```

### postrefundsrefundcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "refund": z.string()
}
```

### getreportingreportruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Report Runs that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postreportingreportruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getreportingreportrunsreportrun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "report_run": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreportingreporttypes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreportingreporttypesreporttype

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "report_type": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreviews

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return reviews that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getreviewsreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "review": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postreviewsreviewapprove

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "review": z.string().max(5000)
}
```

### getsetupattempts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value\ncan be a string with an integer Unix timestamp or a\ndictionary with a number of different query options.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "setup_intent": z.string().max(5000).describe("Only return SetupAttempts created by the SetupIntent specified by\nthis ID."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getsetupintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "attach_to_self": z.boolean().describe("If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.\n\nIt can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "customer": z.string().max(5000).describe("Only return SetupIntents for the customer specified by this customer ID.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_method": z.string().max(5000).describe("Only return SetupIntents that associate with the specified payment method.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postsetupintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getsetupintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsetupintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentconfirm

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentverifymicrodeposits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "intent": z.string().max(5000)
}
```

### getshippingrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Only return shipping rates that are active or inactive.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "currency": z.string().describe("Only return shipping rates for the given currency.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postshippingrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getshippingratesshippingratetoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "shipping_rate_token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postshippingratesshippingratetoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "shipping_rate_token": z.string().max(5000)
}
```

### postsigmasavedqueriesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### getsigmascheduledqueryruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getsigmascheduledqueryrunsscheduledqueryrun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "scheduled_query_run": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getsourcessource

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "source": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the source. Required if a publishable key is used to retrieve the source.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsourcessource

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "source": z.string().max(5000)
}
```

### getsourcessourcemandatenotificationsmandatenotification

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "mandate_notification": z.string().max(5000),
  "source": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getsourcessourcesourcetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "source": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getsourcessourcesourcetransactionssourcetransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "source": z.string().max(5000),
  "source_transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsourcessourceverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "source": z.string().max(5000)
}
```

### getsubscriptionitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "subscription": z.string().max(5000).describe("The ID of the subscription whose items will be retrieved.")
}
```

### postsubscriptionitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deletesubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "item": z.string().max(5000)
}
```

### getsubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "item": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "item": z.string().max(5000)
}
```

### getsubscriptionschedules

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "canceled_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscription schedules that were created canceled the given date interval.").optional(),
  "completed_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscription schedules that completed during the given date interval.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscription schedules that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return subscription schedules for the given customer.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "released_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscription schedules that were released during the given date interval.").optional(),
  "scheduled": z.boolean().describe("Only return subscription schedules that have not started yet.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postsubscriptionschedules

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getsubscriptionschedulesschedule

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schedule": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionschedulesschedule

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schedule": z.string().max(5000)
}
```

### postsubscriptionschedulesschedulecancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schedule": z.string().max(5000)
}
```

### postsubscriptionschedulesschedulerelease

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schedule": z.string().max(5000)
}
```

### getsubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "automatic_tax": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter subscriptions by their automatic tax settings.").optional(),
  "collection_method": z.enum(["charge_automatically","send_invoice"]).describe("The collection method of the subscriptions to retrieve. Either \`charge_automatically\` or \`send_invoice\`.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions that were created during the given date interval.").optional(),
  "current_period_end": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions whose current_period_end falls within the given date interval.").optional(),
  "current_period_start": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return subscriptions whose current_period_start falls within the given date interval.").optional(),
  "customer": z.string().max(5000).describe("The ID of the customer whose subscriptions will be retrieved.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "price": z.string().max(5000).describe("Filter for subscriptions that contain this recurring price ID.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","all","canceled","ended","incomplete","incomplete_expired","past_due","paused","trialing","unpaid"]).describe("The status of the subscriptions to retrieve. Passing in a value of \`canceled\` will return all canceled subscriptions, including those belonging to deleted customers. Pass \`ended\` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of \`all\` will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned.").optional(),
  "test_clock": z.string().max(5000).describe("Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set.").optional()
}
```

### postsubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getsubscriptionssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for subscriptions](https://stripe.com/docs/search#query-fields-for-subscriptions).")
}
```

### deletesubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### getsubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### deletesubscriptionssubscriptionexposediddiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### postsubscriptionssubscriptionresume

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "subscription": z.string().max(5000)
}
```

### posttaxcalculations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettaxcalculationscalculation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "calculation": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxcalculationscalculationlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "calculation": z.string().max(5000),
  "ending_before": z.string().max(500).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(500).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### gettaxregistrations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","all","expired","scheduled"]).describe("The status of the Tax Registration.").optional()
}
```

### posttaxregistrations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettaxregistrationsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxregistrationsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### gettaxsettings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxsettings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttaxtransactionscreatefromcalculation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttaxtransactionscreatereversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettaxtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxtransactionstransactionlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000),
  "ending_before": z.string().max(500).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(500).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### gettaxcodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### gettaxcodesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "owner": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe account or customer the tax ID belongs to. Defaults to \`owner[type]=self\`.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deletetaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### gettaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "active": z.boolean().describe("Optional flag to filter by tax rates that are either active or inactive (archived).").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Optional range for filtering created date.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "inclusive": z.boolean().describe("Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttaxrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettaxratestaxrate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "tax_rate": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxratestaxrate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "tax_rate": z.string().max(5000)
}
```

### getterminalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "is_account_default": z.boolean().describe("if present, only return the account default or non-default configurations.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postterminalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000)
}
```

### getterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "configuration": z.string().max(5000)
}
```

### postterminalconnectiontokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getterminallocations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postterminallocations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "location": z.string().max(5000)
}
```

### getterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "location": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "location": z.string().max(5000)
}
```

### getterminalreaders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "device_type": z.enum(["bbpos_chipper2x","bbpos_wisepad3","bbpos_wisepos_e","mobile_phone_reader","simulated_wisepos_e","stripe_m2","stripe_s700","verifone_P400"]).describe("Filters readers by device type").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "location": z.string().max(5000).describe("A location ID to filter the response list to only readers at the specific location").optional(),
  "serial_number": z.string().max(5000).describe("Filters readers by serial number").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["offline","online"]).describe("A status filter to filter readers to only offline or online readers").optional()
}
```

### postterminalreaders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### getterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreadercancelaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderprocesspaymentintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderprocesssetupintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderrefundpayment

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreadersetreaderdisplay

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### posttesthelpersconfirmationtokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelperscustomerscustomerfundcashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "customer": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelpersissuingauthorizationsauthorizationcapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationfinalizeamount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationfraudchallenges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationincrement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationreverse

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingdeliver

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingship

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingsubmit

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingsettlements

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelpersissuingsettlementssettlementcomplete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "settlement": z.string().max(5000).describe("The settlement token to mark as complete.")
}
```

### posttesthelpersissuingtransactionscreateforcecapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelpersissuingtransactionscreateunlinkedrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelpersissuingtransactionstransactionrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transaction": z.string().max(5000)
}
```

### posttesthelpersrefundsrefundexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "refund": z.string()
}
```

### posttesthelpersterminalreadersreaderpresentpaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "reader": z.string().max(5000)
}
```

### gettesthelperstestclocks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttesthelperstestclocks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deletetesthelperstestclockstestclock

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "test_clock": z.string().max(5000)
}
```

### gettesthelperstestclockstestclock

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "test_clock": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttesthelperstestclockstestclockadvance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "test_clock": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidsucceed

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidpost

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferpost

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryreceivedcredits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttesthelperstreasuryreceiveddebits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### posttokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettopups

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "amount": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A positive integer representing how much to transfer.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object \`created\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","failed","pending","succeeded"]).describe("Only return top-ups that have the given status. One of \`canceled\`, \`failed\`, \`pending\` or \`succeeded\`.").optional()
}
```

### posttopups

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettopupstopup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "topup": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttopupstopup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "topup": z.string().max(5000)
}
```

### posttopupstopupcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "topup": z.string().max(5000)
}
```

### gettransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return transfers that were created during the given date interval.").optional(),
  "destination": z.string().max(5000).describe("Only return transfers for the destination specified by this account ID.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "transfer_group": z.string().max(5000).describe("Only return transfers with the specified transfer group.").optional()
}
```

### posttransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettransfersidreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttransfersidreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### gettransferstransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttransferstransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "transfer": z.string().max(5000)
}
```

### gettransferstransferreversalsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttransferstransferreversalsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "transfer": z.string().max(5000)
}
```

### gettreasurycreditreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "received_credit": z.string().max(5000).describe("Only return CreditReversals for the ReceivedCredit ID.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","posted","processing"]).describe("Only return CreditReversals for a given status.").optional()
}
```

### posttreasurycreditreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasurycreditreversalscreditreversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "credit_reversal": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurydebitreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "received_debit": z.string().max(5000).describe("Only return DebitReversals for the ReceivedDebit ID.").optional(),
  "resolution": z.enum(["lost","won"]).describe("Only return DebitReversals for a given resolution.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","completed","processing"]).describe("Only return DebitReversals for a given status.").optional()
}
```

### posttreasurydebitreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasurydebitreversalsdebitreversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "debit_reversal": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasuryfinancialaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return FinancialAccounts that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("An object ID cursor for use in pagination.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit ranging from 1 to 100 (defaults to 10).").optional(),
  "starting_after": z.string().max(5000).describe("An object ID cursor for use in pagination.").optional()
}
```

### posttreasuryfinancialaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasuryfinancialaccountsfinancialaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "financial_account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryfinancialaccountsfinancialaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "financial_account": z.string().max(5000)
}
```

### posttreasuryfinancialaccountsfinancialaccountclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "financial_account": z.string().max(5000)
}
```

### gettreasuryfinancialaccountsfinancialaccountfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "financial_account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryfinancialaccountsfinancialaccountfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "financial_account": z.string().max(5000)
}
```

### gettreasuryinboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","failed","processing","succeeded"]).describe("Only return InboundTransfers that have the given status: \`processing\`, \`succeeded\`, \`failed\` or \`canceled\`.").optional()
}
```

### posttreasuryinboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasuryinboundtransfersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryinboundtransfersinboundtransfercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "inbound_transfer": z.string().max(5000)
}
```

### gettreasuryoutboundpayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return OutboundPayments that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return OutboundPayments sent to this customer.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","failed","posted","processing","returned"]).describe("Only return OutboundPayments that have the given status: \`processing\`, \`failed\`, \`posted\`, \`returned\`, or \`canceled\`.").optional()
}
```

### posttreasuryoutboundpayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasuryoutboundpaymentsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryoutboundpaymentsidcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000)
}
```

### gettreasuryoutboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","failed","posted","processing","returned"]).describe("Only return OutboundTransfers that have the given status: \`processing\`, \`canceled\`, \`failed\`, \`posted\`, or \`returned\`.").optional()
}
```

### posttreasuryoutboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### gettreasuryoutboundtransfersoutboundtransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryoutboundtransfersoutboundtransfercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### gettreasuryreceivedcredits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("The FinancialAccount that received the funds."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "linked_flows": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOnly return ReceivedCredits described by the flow.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["failed","succeeded"]).describe("Only return ReceivedCredits that have the given status: \`succeeded\` or \`failed\`.").optional()
}
```

### gettreasuryreceivedcreditsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasuryreceiveddebits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("The FinancialAccount that funds were pulled from."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["failed","succeeded"]).describe("Only return ReceivedDebits that have the given status: \`succeeded\` or \`failed\`.").optional()
}
```

### gettreasuryreceiveddebitsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurytransactionentries

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return TransactionEntries that were created during the given date interval.").optional(),
  "effective_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "order_by": z.enum(["created","effective_at"]).describe("The results are in reverse chronological order by \`created\` or \`effective_at\`. The default is \`created\`.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "transaction": z.string().max(5000).describe("Only return TransactionEntries associated with this Transaction.").optional()
}
```

### gettreasurytransactionentriesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurytransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Transactions that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "order_by": z.enum(["created","posted_at"]).describe("The results are in reverse chronological order by \`created\` or \`posted_at\`. The default is \`created\`.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["open","posted","void"]).describe("Only return Transactions that have the given status: \`open\`, \`posted\`, or \`void\`.").optional(),
  "status_transitions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA filter for the \`status_transitions.posted_at\` timestamp. When using this filter, \`status=posted\` and \`order_by=posted_at\` must also be specified.").optional()
}
```

### gettreasurytransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getwebhookendpoints

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postwebhookendpoints

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deletewebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "webhook_endpoint": z.string().max(5000)
}
```

### getwebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "webhook_endpoint": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postwebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "webhook_endpoint": z.string().max(5000)
}
```
