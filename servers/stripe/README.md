# @open-mcp/stripe

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/stripe add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/stripe add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/stripe add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@open-mcp/stripe"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`
- `API_KEY`

## Tools

### getaccount

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountlinks

```ts

```

### postaccountsessions

```ts

```

### getaccounts

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

```ts

```

### deleteaccountsaccount

```ts
{
  "account": z.string().max(5000)
}
```

### getaccountsaccount

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccount

```ts
{
  "account": z.string().max(5000)
}
```

### postaccountsaccountbankaccounts

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountbankaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be deleted.")
}
```

### getaccountsaccountbankaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be retrieved."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountbankaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string()
}
```

### getaccountsaccountcapabilities

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getaccountsaccountcapabilitiescapability

```ts
{
  "account": z.string().max(5000),
  "capability": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountcapabilitiescapability

```ts
{
  "account": z.string().max(5000),
  "capability": z.string()
}
```

### getaccountsaccountexternalaccounts

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

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountexternalaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be deleted.")
}
```

### getaccountsaccountexternalaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be retrieved."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountexternalaccountsid

```ts
{
  "account": z.string().max(5000),
  "id": z.string()
}
```

### postaccountsaccountloginlinks

```ts
{
  "account": z.string().max(5000)
}
```

### getaccountsaccountpeople

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "relationship": z.object({ "authorizer": z.boolean().optional(), "director": z.boolean().optional(), "executive": z.boolean().optional(), "legal_guardian": z.boolean().optional(), "owner": z.boolean().optional(), "representative": z.boolean().optional() }).describe("Filters on the list of people returned based on the person's relationship to the account's company.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccountsaccountpeople

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountpeopleperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpeopleperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountpeopleperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpersons

```ts
{
  "account": z.string().max(5000),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "relationship": z.object({ "authorizer": z.boolean().optional(), "director": z.boolean().optional(), "executive": z.boolean().optional(), "legal_guardian": z.boolean().optional(), "owner": z.boolean().optional(), "representative": z.boolean().optional() }).describe("Filters on the list of people returned based on the person's relationship to the account's company.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postaccountsaccountpersons

```ts
{
  "account": z.string().max(5000)
}
```

### deleteaccountsaccountpersonsperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### getaccountsaccountpersonsperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postaccountsaccountpersonsperson

```ts
{
  "account": z.string().max(5000),
  "person": z.string().max(5000)
}
```

### postaccountsaccountreject

```ts
{
  "account": z.string().max(5000)
}
```

### getapplepaydomains

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

```ts

```

### deleteapplepaydomainsdomain

```ts
{
  "domain": z.string().max(5000)
}
```

### getapplepaydomainsdomain

```ts
{
  "domain": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getapplicationfees

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

```ts
{
  "fee": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postapplicationfeesfeerefundsid

```ts
{
  "fee": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getapplicationfeesid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postapplicationfeesidrefund

```ts
{
  "id": z.string().max(5000)
}
```

### getapplicationfeesidrefunds

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

```ts
{
  "id": z.string().max(5000)
}
```

### getappssecrets

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "scope": z.object({ "type": z.enum(["account","user"]), "user": z.string().max(5000).optional() }).describe("Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user."),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postappssecrets

```ts

```

### postappssecretsdelete

```ts

```

### getappssecretsfind

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "name": z.string().max(5000).describe("A name for the secret that's unique within the scope."),
  "scope": z.object({ "type": z.enum(["account","user"]), "user": z.string().max(5000).optional() }).describe("Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.")
}
```

### getbalance

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbalancehistory

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbalancetransactions

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbillingalerts

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

```ts

```

### getbillingalertsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingalertsidactivate

```ts
{
  "id": z.string().max(5000)
}
```

### postbillingalertsidarchive

```ts
{
  "id": z.string().max(5000)
}
```

### postbillingalertsiddeactivate

```ts
{
  "id": z.string().max(5000)
}
```

### getbillingcreditbalancesummary

```ts
{
  "customer": z.string().max(5000).describe("The customer for which to fetch credit balance summary."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "filter": z.object({ "applicability_scope": z.object({ "price_type": z.literal("metered").optional(), "prices": z.array(z.object({ "id": z.string().max(5000) })).optional() }).optional(), "credit_grant": z.string().max(5000).optional(), "type": z.enum(["applicability_scope","credit_grant"]) }).describe("The filter criteria for the credit balance summary.")
}
```

### getbillingcreditbalancetransactions

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

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getbillingcreditgrants

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

```ts

```

### getbillingcreditgrantsid

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingcreditgrantsid

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingcreditgrantsidexpire

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingcreditgrantsidvoid

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingmetereventadjustments

```ts

```

### postbillingmeterevents

```ts

```

### getbillingmeters

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

```ts

```

### getbillingmetersid

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingmetersid

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### postbillingmetersiddeactivate

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### getbillingmetersideventsummaries

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

```ts
{
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}
```

### getbillingportalconfigurations

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

```ts

```

### getbillingportalconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postbillingportalconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000)
}
```

### postbillingportalsessions

```ts

```

### getcharges

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

```ts

```

### getchargessearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).")
}
```

### getchargescharge

```ts
{
  "charge": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargescharge

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargecapture

```ts
{
  "charge": z.string().max(5000)
}
```

### getchargeschargedispute

```ts
{
  "charge": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargeschargedispute

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargedisputeclose

```ts
{
  "charge": z.string().max(5000)
}
```

### postchargeschargerefund

```ts
{
  "charge": z.string().max(5000).describe("The identifier of the charge to refund.")
}
```

### getchargeschargerefunds

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

```ts
{
  "charge": z.string().max(5000).describe("The identifier of the charge to refund.")
}
```

### getchargeschargerefundsrefund

```ts
{
  "charge": z.string(),
  "refund": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postchargeschargerefundsrefund

```ts
{
  "charge": z.string(),
  "refund": z.string()
}
```

### getcheckoutsessions

```ts
{
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Checkout Sessions that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return the Checkout Sessions for the Customer specified.").optional(),
  "customer_details": z.object({ "email": z.string() }).describe("Only return the Checkout Sessions for the Customer details specified.").optional(),
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

```ts

```

### getcheckoutsessionssession

```ts
{
  "session": z.string().max(66),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcheckoutsessionssession

```ts
{
  "session": z.string().max(5000)
}
```

### postcheckoutsessionssessionexpire

```ts
{
  "session": z.string().max(5000)
}
```

### getcheckoutsessionssessionlineitems

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

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postclimateorders

```ts

```

### getclimateordersorder

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postclimateordersorder

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}
```

### postclimateordersordercancel

```ts
{
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}
```

### getclimateproducts

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getclimateproductsproduct

```ts
{
  "product": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getclimatesuppliers

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getclimatesupplierssupplier

```ts
{
  "supplier": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getconfirmationtokensconfirmationtoken

```ts
{
  "confirmation_token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcountryspecs

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcountryspecscountry

```ts
{
  "country": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcoupons

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

```ts

```

### deletecouponscoupon

```ts
{
  "coupon": z.string().max(5000)
}
```

### getcouponscoupon

```ts
{
  "coupon": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcouponscoupon

```ts
{
  "coupon": z.string().max(5000)
}
```

### getcreditnotes

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

```ts

```

### getcreditnotespreview

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
  "metadata": z.record(z.string()).describe("Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to \`metadata\`.").optional(),
  "out_of_band_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.").optional(),
  "reason": z.enum(["duplicate","fraudulent","order_change","product_unsatisfactory"]).describe("Reason for issuing this credit note, one of \`duplicate\`, \`fraudulent\`, \`order_change\`, or \`product_unsatisfactory\`").optional(),
  "refund_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.").optional(),
  "refunds": z.array(z.object({ "amount_refunded": z.number().int().optional(), "refund": z.string().optional() })).describe("Refunds to link to this credit note.").optional(),
  "shipping_cost": z.object({ "shipping_rate": z.string().max(5000).optional() }).describe("When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.").optional()
}
```

### getcreditnotespreviewlines

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
  "metadata": z.record(z.string()).describe("Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to \`metadata\`.").optional(),
  "out_of_band_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.").optional(),
  "reason": z.enum(["duplicate","fraudulent","order_change","product_unsatisfactory"]).describe("Reason for issuing this credit note, one of \`duplicate\`, \`fraudulent\`, \`order_change\`, or \`product_unsatisfactory\`").optional(),
  "refund_amount": z.number().int().describe("The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.").optional(),
  "refunds": z.array(z.object({ "amount_refunded": z.number().int().optional(), "refund": z.string().optional() })).describe("Refunds to link to this credit note.").optional(),
  "shipping_cost": z.object({ "shipping_rate": z.string().max(5000).optional() }).describe("When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getcreditnotescreditnotelines

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcreditnotesid

```ts
{
  "id": z.string().max(5000)
}
```

### postcreditnotesidvoid

```ts
{
  "id": z.string().max(5000)
}
```

### postcustomersessions

```ts

```

### getcustomers

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

```ts

```

### getcustomerssearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).")
}
```

### deletecustomerscustomer

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomer

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomer

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerbalancetransactions

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

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerbalancetransactionstransaction

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerbalancetransactionstransaction

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string().max(5000)
}
```

### getcustomerscustomerbankaccounts

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

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomerbankaccountsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomerbankaccountsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerbankaccountsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### postcustomerscustomerbankaccountsidverify

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomercards

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

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomercardsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomercardsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomercardsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomercashbalance

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomercashbalance

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomercashbalancetransactions

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

```ts
{
  "customer": z.string().max(5000),
  "transaction": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### deletecustomerscustomerdiscount

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerdiscount

```ts
{
  "customer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomerfundinginstructions

```ts
{
  "customer": z.string().max(5000)
}
```

### getcustomerscustomerpaymentmethods

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

```ts
{
  "customer": z.string().max(5000),
  "payment_method": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcustomerscustomersources

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

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomersourcesid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomersourcesid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(500),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomersourcesid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### postcustomerscustomersourcesidverify

```ts
{
  "customer": z.string().max(5000),
  "id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptions

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

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomersubscriptionssubscriptionexposedid

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptionssubscriptionexposedid

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postcustomerscustomersubscriptionssubscriptionexposedid

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### deletecustomerscustomersubscriptionssubscriptionexposediddiscoun

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}
```

### getcustomerscustomersubscriptionssubscriptionexposediddiscount

```ts
{
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getcustomerscustomertaxids

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

```ts
{
  "customer": z.string().max(5000)
}
```

### deletecustomerscustomertaxidsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string()
}
```

### getcustomerscustomertaxidsid

```ts
{
  "customer": z.string().max(5000),
  "id": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getdisputes

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

```ts
{
  "dispute": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postdisputesdispute

```ts
{
  "dispute": z.string().max(5000)
}
```

### postdisputesdisputeclose

```ts
{
  "dispute": z.string().max(5000)
}
```

### getentitlementsactiveentitlements

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

```ts
{
  "id": z.string().max(5000).describe("The ID of the entitlement."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getentitlementsfeatures

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

```ts

```

### getentitlementsfeaturesid

```ts
{
  "id": z.string().max(5000).describe("The ID of the feature."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postentitlementsfeaturesid

```ts
{
  "id": z.string().max(5000)
}
```

### postephemeralkeys

```ts

```

### deleteephemeralkeyskey

```ts
{
  "key": z.string().max(5000)
}
```

### getevents

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getexchangerates

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include \`starting_after=X\` in order to fetch the next page of the list.").optional()
}
```

### getexchangeratesrateid

```ts
{
  "rate_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postexternalaccountsid

```ts
{
  "id": z.string()
}
```

### getfilelinks

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

```ts

```

### getfilelinkslink

```ts
{
  "link": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postfilelinkslink

```ts
{
  "link": z.string()
}
```

### getfiles

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

```ts

```

### getfilesfile

```ts
{
  "file": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getfinancialconnectionsaccounts

```ts
{
  "account_holder": z.object({ "account": z.string().max(5000).optional(), "customer": z.string().max(5000).optional() }).describe("If present, only return accounts that belong to the specified account holder. \`account_holder[customer]\` and \`account_holder[account]\` are mutually exclusive.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "session": z.string().max(5000).describe("If present, only return accounts that were collected as part of the given session.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getfinancialconnectionsaccountsaccount

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postfinancialconnectionsaccountsaccountdisconnect

```ts
{
  "account": z.string().max(5000)
}
```

### getfinancialconnectionsaccountsaccountowners

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

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionsaccountsaccountsubscribe

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionsaccountsaccountunsubscribe

```ts
{
  "account": z.string().max(5000)
}
```

### postfinancialconnectionssessions

```ts

```

### getfinancialconnectionssessionssession

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getfinancialconnectionstransactions

```ts
{
  "account": z.string().max(5000).describe("The ID of the Financial Connections Account whose transactions will be retrieved."),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "transacted_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list based on the object \`transacted_at\` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:").optional(),
  "transaction_refresh": z.object({ "after": z.string().max(5000) }).describe("A filter on the list based on the object \`transaction_refresh\` field. The value can be a dictionary with the following options:").optional()
}
```

### getfinancialconnectionstransactionstransaction

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getforwardingrequests

```ts
{
  "created": z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }).describe("Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.").optional(),
  "ending_before": z.string().max(5000).describe("A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.").optional()
}
```

### postforwardingrequests

```ts

```

### getforwardingrequestsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getidentityverificationreports

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

```ts
{
  "report": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getidentityverificationsessions

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

```ts

```

### getidentityverificationsessionssession

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postidentityverificationsessionssession

```ts
{
  "session": z.string().max(5000)
}
```

### postidentityverificationsessionssessioncancel

```ts
{
  "session": z.string().max(5000)
}
```

### postidentityverificationsessionssessionredact

```ts
{
  "session": z.string().max(5000)
}
```

### getinvoicepayments

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "invoice": z.string().max(5000).describe("The identifier of the invoice whose payments to return.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment": z.object({ "payment_intent": z.string().max(5000).optional(), "type": z.literal("payment_intent") }).describe("The payment details of the invoice payments to return.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["canceled","open","paid"]).describe("The status of the invoice payments to return.").optional()
}
```

### getinvoicepaymentsinvoicepayment

```ts
{
  "invoice_payment": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getinvoicerenderingtemplates

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

```ts
{
  "template": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "version": z.number().int().optional()
}
```

### postinvoicerenderingtemplatestemplatearchive

```ts
{
  "template": z.string().max(5000)
}
```

### postinvoicerenderingtemplatestemplateunarchive

```ts
{
  "template": z.string().max(5000)
}
```

### getinvoiceitems

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

```ts

```

### deleteinvoiceitemsinvoiceitem

```ts
{
  "invoiceitem": z.string().max(5000)
}
```

### getinvoiceitemsinvoiceitem

```ts
{
  "invoiceitem": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postinvoiceitemsinvoiceitem

```ts
{
  "invoiceitem": z.string().max(5000)
}
```

### getinvoices

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

```ts

```

### postinvoicescreatepreview

```ts

```

### getinvoicessearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).")
}
```

### deleteinvoicesinvoice

```ts
{
  "invoice": z.string().max(5000)
}
```

### getinvoicesinvoice

```ts
{
  "invoice": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postinvoicesinvoice

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceaddlines

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicefinalize

```ts
{
  "invoice": z.string().max(5000)
}
```

### getinvoicesinvoicelines

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

```ts
{
  "invoice": z.string().max(5000).describe("Invoice ID of line item"),
  "line_item_id": z.string().max(5000).describe("Invoice line item ID")
}
```

### postinvoicesinvoicemarkuncollectible

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicepay

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceremovelines

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicesend

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoiceupdatelines

```ts
{
  "invoice": z.string().max(5000)
}
```

### postinvoicesinvoicevoid

```ts
{
  "invoice": z.string().max(5000)
}
```

### getissuingauthorizations

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

```ts
{
  "authorization": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingauthorizationsauthorization

```ts
{
  "authorization": z.string().max(5000)
}
```

### postissuingauthorizationsauthorizationapprove

```ts
{
  "authorization": z.string().max(5000)
}
```

### postissuingauthorizationsauthorizationdecline

```ts
{
  "authorization": z.string().max(5000)
}
```

### getissuingcardholders

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

```ts

```

### getissuingcardholderscardholder

```ts
{
  "cardholder": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingcardholderscardholder

```ts
{
  "cardholder": z.string().max(5000)
}
```

### getissuingcards

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

```ts

```

### getissuingcardscard

```ts
{
  "card": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingcardscard

```ts
{
  "card": z.string().max(5000)
}
```

### getissuingdisputes

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

```ts

```

### getissuingdisputesdispute

```ts
{
  "dispute": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingdisputesdispute

```ts
{
  "dispute": z.string().max(5000)
}
```

### postissuingdisputesdisputesubmit

```ts
{
  "dispute": z.string().max(5000)
}
```

### getissuingpersonalizationdesigns

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lookup_keys": z.array(z.string().max(200)).describe("Only return personalization designs with the given lookup keys.").optional(),
  "preferences": z.object({ "is_default": z.boolean().optional(), "is_platform_default": z.boolean().optional() }).describe("Only return personalization designs with the given preferences.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","inactive","rejected","review"]).describe("Only return personalization designs with the given status.").optional()
}
```

### postissuingpersonalizationdesigns

```ts

```

### getissuingpersonalizationdesignspersonalizationdesign

```ts
{
  "personalization_design": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingpersonalizationdesignspersonalizationdesign

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### getissuingphysicalbundles

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

```ts
{
  "physical_bundle": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getissuingsettlementssettlement

```ts
{
  "settlement": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingsettlementssettlement

```ts
{
  "settlement": z.string().max(5000)
}
```

### getissuingtokens

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

```ts
{
  "token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingtokenstoken

```ts
{
  "token": z.string().max(5000)
}
```

### getissuingtransactions

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

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postissuingtransactionstransaction

```ts
{
  "transaction": z.string().max(5000)
}
```

### postlinkaccountsessions

```ts

```

### getlinkaccountsessionssession

```ts
{
  "session": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getlinkedaccounts

```ts
{
  "account_holder": z.object({ "account": z.string().max(5000).optional(), "customer": z.string().max(5000).optional() }).describe("If present, only return accounts that belong to the specified account holder. \`account_holder[customer]\` and \`account_holder[account]\` are mutually exclusive.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "session": z.string().max(5000).describe("If present, only return accounts that were collected as part of the given session.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getlinkedaccountsaccount

```ts
{
  "account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postlinkedaccountsaccountdisconnect

```ts
{
  "account": z.string().max(5000)
}
```

### getlinkedaccountsaccountowners

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

```ts
{
  "account": z.string().max(5000)
}
```

### getmandatesmandate

```ts
{
  "mandate": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getpaymentintents

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

```ts

```

### getpaymentintentssearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).")
}
```

### getpaymentintentsintent

```ts
{
  "intent": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentintentsintent

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentapplycustomerbalance

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentcancel

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentcapture

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentconfirm

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentincrementauthorization

```ts
{
  "intent": z.string().max(5000)
}
```

### postpaymentintentsintentverifymicrodeposits

```ts
{
  "intent": z.string().max(5000)
}
```

### getpaymentlinks

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

```ts

```

### getpaymentlinkspaymentlink

```ts
{
  "payment_link": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentlinkspaymentlink

```ts
{
  "payment_link": z.string().max(5000)
}
```

### getpaymentlinkspaymentlinklineitems

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

```ts

```

### getpaymentmethodconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethodconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000)
}
```

### getpaymentmethoddomains

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

```ts

```

### getpaymentmethoddomainspaymentmethoddomain

```ts
{
  "payment_method_domain": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethoddomainspaymentmethoddomain

```ts
{
  "payment_method_domain": z.string().max(5000)
}
```

### postpaymentmethoddomainspaymentmethoddomainvalidate

```ts
{
  "payment_method_domain": z.string().max(5000)
}
```

### getpaymentmethods

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

```ts

```

### getpaymentmethodspaymentmethod

```ts
{
  "payment_method": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpaymentmethodspaymentmethod

```ts
{
  "payment_method": z.string().max(5000)
}
```

### postpaymentmethodspaymentmethodattach

```ts
{
  "payment_method": z.string().max(5000)
}
```

### postpaymentmethodspaymentmethoddetach

```ts
{
  "payment_method": z.string().max(5000)
}
```

### getpayouts

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

```ts

```

### getpayoutspayout

```ts
{
  "payout": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpayoutspayout

```ts
{
  "payout": z.string().max(5000)
}
```

### postpayoutspayoutcancel

```ts
{
  "payout": z.string().max(5000)
}
```

### postpayoutspayoutreverse

```ts
{
  "payout": z.string().max(5000)
}
```

### getplans

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

```ts

```

### deleteplansplan

```ts
{
  "plan": z.string().max(5000)
}
```

### getplansplan

```ts
{
  "plan": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postplansplan

```ts
{
  "plan": z.string().max(5000)
}
```

### getprices

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
  "recurring": z.object({ "interval": z.enum(["day","month","week","year"]).optional(), "meter": z.string().max(5000).optional(), "usage_type": z.enum(["licensed","metered"]).optional() }).describe("Only return prices with these recurring fields.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["one_time","recurring"]).describe("Only return prices of type \`recurring\` or \`one_time\`.").optional()
}
```

### postprices

```ts

```

### getpricessearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for prices](https://stripe.com/docs/search#query-fields-for-prices).")
}
```

### getpricesprice

```ts
{
  "price": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpricesprice

```ts
{
  "price": z.string().max(5000)
}
```

### getproducts

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

```ts

```

### getproductssearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).")
}
```

### deleteproductsid

```ts
{
  "id": z.string().max(5000)
}
```

### getproductsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postproductsid

```ts
{
  "id": z.string().max(5000)
}
```

### getproductsproductfeatures

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

```ts
{
  "product": z.string().max(5000)
}
```

### deleteproductsproductfeaturesid

```ts
{
  "id": z.string().max(5000),
  "product": z.string().max(5000)
}
```

### getproductsproductfeaturesid

```ts
{
  "id": z.string().max(5000).describe("The ID of the product_feature."),
  "product": z.string().max(5000).describe("The ID of the product."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getpromotioncodes

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

```ts

```

### getpromotioncodespromotioncode

```ts
{
  "promotion_code": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postpromotioncodespromotioncode

```ts
{
  "promotion_code": z.string().max(5000)
}
```

### getquotes

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

```ts

```

### getquotesquote

```ts
{
  "quote": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postquotesquote

```ts
{
  "quote": z.string().max(5000)
}
```

### postquotesquoteaccept

```ts
{
  "quote": z.string().max(5000)
}
```

### postquotesquotecancel

```ts
{
  "quote": z.string().max(5000)
}
```

### getquotesquotecomputedupfrontlineitems

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

```ts
{
  "quote": z.string().max(5000)
}
```

### getquotesquotelineitems

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

```ts
{
  "quote": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarearlyfraudwarnings

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

```ts
{
  "early_fraud_warning": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarvaluelistitems

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

```ts

```

### deleteradarvaluelistitemsitem

```ts
{
  "item": z.string().max(5000)
}
```

### getradarvaluelistitemsitem

```ts
{
  "item": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getradarvaluelists

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

```ts

```

### deleteradarvaluelistsvaluelist

```ts
{
  "value_list": z.string().max(5000)
}
```

### getradarvaluelistsvaluelist

```ts
{
  "value_list": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postradarvaluelistsvaluelist

```ts
{
  "value_list": z.string().max(5000)
}
```

### getrefunds

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

```ts

```

### getrefundsrefund

```ts
{
  "refund": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postrefundsrefund

```ts
{
  "refund": z.string()
}
```

### postrefundsrefundcancel

```ts
{
  "refund": z.string()
}
```

### getreportingreportruns

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

```ts

```

### getreportingreportrunsreportrun

```ts
{
  "report_run": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreportingreporttypes

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreportingreporttypesreporttype

```ts
{
  "report_type": z.string(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getreviews

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

```ts
{
  "review": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postreviewsreviewapprove

```ts
{
  "review": z.string().max(5000)
}
```

### getsetupattempts

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

```ts

```

### getsetupintentsintent

```ts
{
  "intent": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsetupintentsintent

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentcancel

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentconfirm

```ts
{
  "intent": z.string().max(5000)
}
```

### postsetupintentsintentverifymicrodeposits

```ts
{
  "intent": z.string().max(5000)
}
```

### getshippingrates

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

```ts

```

### getshippingratesshippingratetoken

```ts
{
  "shipping_rate_token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postshippingratesshippingratetoken

```ts
{
  "shipping_rate_token": z.string().max(5000)
}
```

### postsigmasavedqueriesid

```ts
{
  "id": z.string().max(5000)
}
```

### getsigmascheduledqueryruns

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### getsigmascheduledqueryrunsscheduledqueryrun

```ts
{
  "scheduled_query_run": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsources

```ts

```

### getsourcessource

```ts
{
  "source": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the source. Required if a publishable key is used to retrieve the source.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsourcessource

```ts
{
  "source": z.string().max(5000)
}
```

### getsourcessourcemandatenotificationsmandatenotification

```ts
{
  "mandate_notification": z.string().max(5000),
  "source": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getsourcessourcesourcetransactions

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

```ts
{
  "source": z.string().max(5000),
  "source_transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsourcessourceverify

```ts
{
  "source": z.string().max(5000)
}
```

### getsubscriptionitems

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

```ts

```

### deletesubscriptionitemsitem

```ts
{
  "item": z.string().max(5000)
}
```

### getsubscriptionitemsitem

```ts
{
  "item": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionitemsitem

```ts
{
  "item": z.string().max(5000)
}
```

### getsubscriptionschedules

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

```ts

```

### getsubscriptionschedulesschedule

```ts
{
  "schedule": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionschedulesschedule

```ts
{
  "schedule": z.string().max(5000)
}
```

### postsubscriptionschedulesschedulecancel

```ts
{
  "schedule": z.string().max(5000)
}
```

### postsubscriptionschedulesschedulerelease

```ts
{
  "schedule": z.string().max(5000)
}
```

### getsubscriptions

```ts
{
  "automatic_tax": z.object({ "enabled": z.boolean() }).describe("Filter subscriptions by their automatic tax settings.").optional(),
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

```ts

```

### getsubscriptionssearch

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
  "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for subscriptions](https://stripe.com/docs/search#query-fields-for-subscriptions).")
}
```

### deletesubscriptionssubscriptionexposedid

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### getsubscriptionssubscriptionexposedid

```ts
{
  "subscription_exposed_id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postsubscriptionssubscriptionexposedid

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### deletesubscriptionssubscriptionexposediddiscount

```ts
{
  "subscription_exposed_id": z.string().max(5000)
}
```

### postsubscriptionssubscriptionresume

```ts
{
  "subscription": z.string().max(5000)
}
```

### posttaxcalculations

```ts

```

### gettaxcalculationscalculation

```ts
{
  "calculation": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxcalculationscalculationlineitems

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

```ts

```

### gettaxregistrationsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxregistrationsid

```ts
{
  "id": z.string().max(5000)
}
```

### gettaxsettings

```ts
{
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxsettings

```ts

```

### posttaxtransactionscreatefromcalculation

```ts

```

### posttaxtransactionscreatereversal

```ts

```

### gettaxtransactionstransaction

```ts
{
  "transaction": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxtransactionstransactionlineitems

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

```ts
{
  "ending_before": z.string().describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### gettaxcodesid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxids

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "owner": z.object({ "account": z.string().optional(), "customer": z.string().max(5000).optional(), "type": z.enum(["account","application","customer","self"]) }).describe("The account or customer the tax ID belongs to. Defaults to \`owner[type]=self\`.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttaxids

```ts

```

### deletetaxidsid

```ts
{
  "id": z.string().max(5000)
}
```

### gettaxidsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettaxrates

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

```ts

```

### gettaxratestaxrate

```ts
{
  "tax_rate": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttaxratestaxrate

```ts
{
  "tax_rate": z.string().max(5000)
}
```

### getterminalconfigurations

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

```ts

```

### deleteterminalconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000)
}
```

### getterminalconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminalconfigurationsconfiguration

```ts
{
  "configuration": z.string().max(5000)
}
```

### postterminalconnectiontokens

```ts

```

### getterminallocations

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postterminallocations

```ts

```

### deleteterminallocationslocation

```ts
{
  "location": z.string().max(5000)
}
```

### getterminallocationslocation

```ts
{
  "location": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminallocationslocation

```ts
{
  "location": z.string().max(5000)
}
```

### getterminalreaders

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

```ts

```

### deleteterminalreadersreader

```ts
{
  "reader": z.string().max(5000)
}
```

### getterminalreadersreader

```ts
{
  "reader": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postterminalreadersreader

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreadercancelaction

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderprocesspaymentintent

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderprocesssetupintent

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreaderrefundpayment

```ts
{
  "reader": z.string().max(5000)
}
```

### postterminalreadersreadersetreaderdisplay

```ts
{
  "reader": z.string().max(5000)
}
```

### posttesthelpersconfirmationtokens

```ts

```

### posttesthelperscustomerscustomerfundcashbalance

```ts
{
  "customer": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizations

```ts

```

### posttesthelpersissuingauthorizationsauthorizationcapture

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationexpire

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationfinalizeamount

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationfraudchallenges

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationincrement

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingauthorizationsauthorizationreverse

```ts
{
  "authorization": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingdeliver

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingfail

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingreturn

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingship

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingcardscardshippingsubmit

```ts
{
  "card": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

```ts
{
  "personalization_design": z.string().max(5000)
}
```

### posttesthelpersissuingsettlements

```ts

```

### posttesthelpersissuingsettlementssettlementcomplete

```ts
{
  "settlement": z.string().max(5000).describe("The settlement token to mark as complete.")
}
```

### posttesthelpersissuingtransactionscreateforcecapture

```ts

```

### posttesthelpersissuingtransactionscreateunlinkedrefund

```ts

```

### posttesthelpersissuingtransactionstransactionrefund

```ts
{
  "transaction": z.string().max(5000)
}
```

### posttesthelpersrefundsrefundexpire

```ts
{
  "refund": z.string()
}
```

### posttesthelpersterminalreadersreaderpresentpaymentmethod

```ts
{
  "reader": z.string().max(5000)
}
```

### gettesthelperstestclocks

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### posttesthelperstestclocks

```ts

```

### deletetesthelperstestclockstestclock

```ts
{
  "test_clock": z.string().max(5000)
}
```

### gettesthelperstestclockstestclock

```ts
{
  "test_clock": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttesthelperstestclockstestclockadvance

```ts
{
  "test_clock": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidfail

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidreturn

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryinboundtransfersidsucceed

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsid

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidfail

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidpost

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundpaymentsidreturn

```ts
{
  "id": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransfer

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferfail

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferpost

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryoutboundtransfersoutboundtransferreturn

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### posttesthelperstreasuryreceivedcredits

```ts

```

### posttesthelperstreasuryreceiveddebits

```ts

```

### posttokens

```ts

```

### gettokenstoken

```ts
{
  "token": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettopups

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

```ts

```

### gettopupstopup

```ts
{
  "topup": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttopupstopup

```ts
{
  "topup": z.string().max(5000)
}
```

### posttopupstopupcancel

```ts
{
  "topup": z.string().max(5000)
}
```

### gettransfers

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

```ts

```

### gettransfersidreversals

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

```ts
{
  "id": z.string().max(5000)
}
```

### gettransferstransfer

```ts
{
  "transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttransferstransfer

```ts
{
  "transfer": z.string().max(5000)
}
```

### gettransferstransferreversalsid

```ts
{
  "id": z.string().max(5000),
  "transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttransferstransferreversalsid

```ts
{
  "id": z.string().max(5000),
  "transfer": z.string().max(5000)
}
```

### gettreasurycreditreversals

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

```ts

```

### gettreasurycreditreversalscreditreversal

```ts
{
  "credit_reversal": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurydebitreversals

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

```ts

```

### gettreasurydebitreversalsdebitreversal

```ts
{
  "debit_reversal": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasuryfinancialaccounts

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

```ts

```

### gettreasuryfinancialaccountsfinancialaccount

```ts
{
  "financial_account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryfinancialaccountsfinancialaccount

```ts
{
  "financial_account": z.string().max(5000)
}
```

### posttreasuryfinancialaccountsfinancialaccountclose

```ts
{
  "financial_account": z.string().max(5000)
}
```

### gettreasuryfinancialaccountsfinancialaccountfeatures

```ts
{
  "financial_account": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryfinancialaccountsfinancialaccountfeatures

```ts
{
  "financial_account": z.string().max(5000)
}
```

### gettreasuryinboundtransfers

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

```ts

```

### gettreasuryinboundtransfersid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryinboundtransfersinboundtransfercancel

```ts
{
  "inbound_transfer": z.string().max(5000)
}
```

### gettreasuryoutboundpayments

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

```ts

```

### gettreasuryoutboundpaymentsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryoutboundpaymentsidcancel

```ts
{
  "id": z.string().max(5000)
}
```

### gettreasuryoutboundtransfers

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

```ts

```

### gettreasuryoutboundtransfersoutboundtransfer

```ts
{
  "outbound_transfer": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### posttreasuryoutboundtransfersoutboundtransfercancel

```ts
{
  "outbound_transfer": z.string().max(5000)
}
```

### gettreasuryreceivedcredits

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("The FinancialAccount that received the funds."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "linked_flows": z.object({ "source_flow_type": z.enum(["credit_reversal","other","outbound_payment","outbound_transfer","payout"]) }).describe("Only return ReceivedCredits described by the flow.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["failed","succeeded"]).describe("Only return ReceivedCredits that have the given status: \`succeeded\` or \`failed\`.").optional()
}
```

### gettreasuryreceivedcreditsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasuryreceiveddebits

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurytransactionentries

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

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### gettreasurytransactions

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
  "status_transitions": z.object({ "posted_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).optional() }).describe("A filter for the \`status_transitions.posted_at\` timestamp. When using this filter, \`status=posted\` and \`order_by=posted_at\` must also be specified.").optional()
}
```

### gettreasurytransactionsid

```ts
{
  "id": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### getwebhookendpoints

```ts
{
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. \`ending_before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with \`obj_bar\`, your subsequent call can include \`ending_before=obj_bar\` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. \`starting_after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with \`obj_foo\`, your subsequent call can include \`starting_after=obj_foo\` in order to fetch the next page of the list.").optional()
}
```

### postwebhookendpoints

```ts

```

### deletewebhookendpointswebhookendpoint

```ts
{
  "webhook_endpoint": z.string().max(5000)
}
```

### getwebhookendpointswebhookendpoint

```ts
{
  "webhook_endpoint": z.string().max(5000),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}
```

### postwebhookendpointswebhookendpoint

```ts
{
  "webhook_endpoint": z.string().max(5000)
}
```

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
