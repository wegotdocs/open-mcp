# @open-mcp/linode

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/linode add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/linode add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/linode add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "linode": {
      "command": "npx",
      "args": ["-y", "@open-mcp/linode"],
      "env": {"API_KEY":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/linode
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/linode`
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

### get_account

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_account

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "active_promotions": z.array(z.object({ "credit_monthly_cap": z.string().describe("The amount available to spend per month.").optional(), "credit_remaining": z.string().describe("The total amount of credit left for this promotion.").optional(), "description": z.string().describe("A detailed description of this promotion.").optional(), "expire_dt": z.string().describe("When this promotion's credits expire.").optional(), "image_url": z.string().describe("The location of an image for this promotion.").optional(), "service_type": z.enum(["all","backup","blockstorage","db_mysql","ip_v4","linode","linode_disk","linode_memory","longview","managed","nodebalancer","objectstorage","placement_group","transfer_tx"]).describe("The service to which this promotion applies.").optional(), "summary": z.string().describe("Short details of this promotion.").optional(), "this_month_credit_remaining": z.string().describe("The amount of credit left for this month for this promotion.").optional() }).strict().describe("__Read-only__ Promotions generally offer a set amount of credit that can be used toward your Linode services, and the promotion expires after a specified date. As well, a monthly cap on the promotional offer is set.\n\nSimply put, a promotion offers a certain amount of credit  month, until either the expiration date is passed, or until the total promotional credit is used, whichever comes first.").readonly()).readonly().optional(),
  "active_since": z.string().datetime({ offset: true }).describe("__Read-only__ The date and time the account was activated.").readonly().optional(),
  "address_1": z.string().max(64).describe("The first line of this account's billing address.").optional(),
  "address_2": z.string().max(64).describe("The second line of this account's billing address.").optional(),
  "balance": z.number().describe("__Read-only__ This account's balance, in US dollars.").readonly().optional(),
  "balance_uninvoiced": z.number().describe("__Read-only__ This account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.").readonly().optional(),
  "billing_source": z.enum(["akamai","linode"]).describe("__Read-only__ The source of service charges for this account. Accounts that are associated with Akamai-specific customers return a value of \`akamai\`. All other accounts return a value of \`linode\`.").readonly().optional(),
  "capabilities": z.array(z.string()).describe("__Read-only__ The Akamai Cloud Computing services your account supports.").readonly().optional(),
  "city": z.string().max(24).describe("The city for this account's \`address\`.").optional(),
  "company": z.string().max(128).describe("The company name assigned to this account. This value can't include the characters, \`<\` \`>\` \`(\` \`)\` \`\"\` \`=\`.").optional(),
  "country": z.string().describe("The two-letter ISO 3166 country code for this account's \`address\`.").optional(),
  "credit_card": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ The credit card information assigned to this account.").optional(),
  "email": z.string().max(128).describe("The email address of the person assigned to this account.").optional(),
  "euuid": z.string().uuid().describe("__Read-only__ An external unique identifier for this account.").readonly().optional(),
  "first_name": z.string().max(50).describe("The first name of the person assigned to this account. This value can't include the characters, \`<\` \`>\` \`(\` \`)\` \`\"\` \`=\`.").optional(),
  "last_name": z.string().max(50).describe("The last name of the person assigned to this account. This value can't include the characters, \`<\` \`>\` \`(\` \`)\` \`\"\` \`=\`.").optional(),
  "phone": z.string().max(32).describe("The phone number assigned to this account.").optional(),
  "state": z.string().max(24).describe("The state or province for the \`address\` set for your account, if applicable.\n\n- If the \`address\` is in the United States (US) or Canada (CA), this is the two-letter ISO 3166 code for the state or province.\n\n- If it's a US military \`address\`, this is the abbreviation for that territory. This includes \`AA\` for Armed Forces Americas (excluding Canada), \`AE\` for Armed Forces Africa, Europe, Middle East, and Canada, or \`AP\` for Armed Forces Pacific.\n\n- If outside the US or CA, this is the province associated with the account's \`address\`.").optional(),
  "tax_id": z.string().max(25).describe("The tax identification number (TIN) assigned to this account, used for tax calculations. A TIN is set by the national authorities in your \`country\`, based on your \`address_1\`, and it may be named differently between countries. Set to an empty string (\`\"\"\`) if a TIN doesn't apply or for countries that don't collect tax.\n\n> 📘\n>\n> This value is externally validated. If the validation is successful, a \`tax_id_valid\` [event](https://techdocs.akamai.com/linode-api/reference/get-events) is triggered. If unsuccessful, a \`tax_id_invalid\` event is triggered and an error response is issued for an operation that included it.").optional(),
  "zip": z.string().describe("The zip code for this account's \`address\`.\n\n- It can only contain ASCII letters, numbers, and dashes (\`-\`).\n\n- It can't contain more than nine letter or number characters.").optional()
}
```

### parameters_apiversion_account

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account

**Environment variables**



**Input schema**

```ts
{}
```

### post_account_agreements

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "billing_agreement": z.boolean().describe("Certain regions require that you share your tax identification number (TIN) with Akamai. When you do, you need to acknowledge Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement) agreement, in regards to its protection. When set to \`true\`, you've acknowledged this agreement.").optional(),
  "eu_model": z.boolean().describe("The acknowledgement status for the [cross-border data transfer](https://www.akamai.com/legal/compliance/privacy-trust-center/cross-border-data-transfer-statement) agreement.").optional(),
  "master_service_agreement": z.boolean().describe("The acknowledgement status for Akamai's [master service agreement](https://www.linode.com/legal-msa/).").optional(),
  "privacy_policy": z.boolean().describe("The acknowledgement status for Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement).").optional()
}
```

### get_account_agreements

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_agreements

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_agreements

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_agreements

**Environment variables**



**Input schema**

```ts
{}
```

### get_availability

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_availability

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_availability

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_availability

**Environment variables**



**Input schema**

```ts
{}
```

### get_account_availability

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_availability_id_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_availability_id_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_availability_id_

**Environment variables**



**Input schema**

```ts
{}
```

### post_beta_program

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("The unique identifier of the Beta Program.")
}
```

### get_enrolled_beta_programs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_betas

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_betas

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_betas

**Environment variables**



**Input schema**

```ts
{}
```

### get_enrolled_beta_program

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_cancel_account

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "comments": z.string().describe("Any reason for cancelling the account, and any other comments you might have about your Linode service.").optional()
}
```

### parameters_apiversion_account_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### get_child_accounts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_child_accounts

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_child_accounts

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_child_accounts

**Environment variables**



**Input schema**

```ts
{}
```

### get_child_account

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_child_accounts_euuid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_child_accounts_euuid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_child_accounts_euuid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_child_account_token

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_child_accounts_euuid_token

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_child_accounts_euuid_token

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_child_accounts_euuid_tok

**Environment variables**



**Input schema**

```ts
{}
```

### post_credit_card

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "card_number": z.string().min(14).max(24).describe("Your credit card number. No spaces or hyphens (\`-\`) allowed."),
  "cvv": z.string().min(3).max(4).describe("CVV (Card Verification Value) of the credit card, typically found on the back of the card."),
  "expiry_month": z.number().int().gte(1).lte(12).describe("A value from 1-12 representing the expiration month of your credit card.\n\n  - 1 = January\n  - 2 = February\n  - 3 = March\n  - Etc."),
  "expiry_year": z.number().int().describe("A four-digit integer representing the expiration year of your credit card.\n\nThe combination of \`expiry_month\` and \`expiry_year\` must result in a month/year combination of the current month or in the future. An expiration date set in the past is invalid.")
}
```

### parameters_apiversion_account_credit_card

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_credit_card

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_credit_card

**Environment variables**



**Input schema**

```ts
{}
```

### post_entity_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "entities": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA collection of the entities to include in this transfer request, separated by type.")
}
```

### get_entity_transfers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_entity_transfers

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_entity_transfers

**Environment variables**



**Input schema**

```ts
{}
```

### get_entity_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_entity_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_entity_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_entity_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### post_accept_entity_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_entity_transfers_token_accept

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_entity_transfers_token_accept

**Environment variables**



**Input schema**

```ts
{}
```

### get_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_events

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_events

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_events

**Environment variables**



**Input schema**

```ts
{}
```

### get_event

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_events_eventid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_events_eventid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_events_eventid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_event_read

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_events_eventid_read

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_events_eventid_read

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_events_eventid_read

**Environment variables**



**Input schema**

```ts
{}
```

### post_event_seen

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_events_eventid_seen

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_events_eventid_seen

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_events_eventid_seen

**Environment variables**



**Input schema**

```ts
{}
```

### get_invoices

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_invoices

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_invoices

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_invoices

**Environment variables**



**Input schema**

```ts
{}
```

### get_invoice

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_invoices_invoiceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_invoices_invoiceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_invoices_invoiceid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_invoice_items

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_invoices_invoiceid_items

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_invoices_invoiceid_items

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_invoices_invoiceid_items

**Environment variables**



**Input schema**

```ts
{}
```

### get_account_logins

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_logins

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_logins

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_logins

**Environment variables**



**Input schema**

```ts
{}
```

### get_account_login

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_maintenance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_maintenance

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_maintenance

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_maintenance

**Environment variables**



**Input schema**

```ts
{}
```

### get_notifications

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_notifications

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_notifications

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_notifications

**Environment variables**



**Input schema**

```ts
{}
```

### post_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_clients

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_oauth_clients

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_oauth_clients

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_oauth_clients

**Environment variables**



**Input schema**

```ts
{}
```

### get_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("__Read-only__ The OAuth Client ID.  This is used to identify the client, and is a publicly known value (it is not a secret).").readonly().optional(),
  "label": z.string().min(1).max(512).describe("__Filterable__ The name of this application.  This will be presented to users when they are asked to grant it access to their Account.").optional(),
  "public": z.boolean().describe("__Filterable__ If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the [OAuth spec](https://oauth.net/2/) for more details.").optional(),
  "redirect_uri": z.string().describe("The location a successful log in from [login.linode.com](https://login.linode.com) should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.").optional(),
  "secret": z.string().describe("__Read-only__ The OAuth Client secret, used in the OAuth exchange.  This is returned as \`<REDACTED>\` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.").readonly().optional(),
  "status": z.enum(["active","disabled","suspended"]).describe("__Read-only__ The status of this application.  \`active\` by default.").readonly().optional(),
  "thumbnail_url": z.string().nullable().describe("__Read-only__ The URL where this client's thumbnail may be viewed, or \`null\` if this client does not have a thumbnail set.").readonly().optional()
}
```

### delete_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_oauth_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_oauth_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_oauth_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_reset_client_secret

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_oauth_clients_clientid_reset_secre

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_oauth_clients_clientid_reset_secret

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_oauth_clients_clientid_r

**Environment variables**



**Input schema**

```ts
{}
```

### get_client_thumbnail

**Environment variables**



**Input schema**

```ts
{}
```

### put_client_thumbnail

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_oauth_clients_clientid_thumbnail

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_oauth_clients_clientid_thumbnail

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_oauth_clients_clientid_t

**Environment variables**



**Input schema**

```ts
{}
```

### post_payment_method

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object representing the credit card information you have on file with Linode to make Payments against your Account."),
  "is_default": z.boolean().describe("Whether this Payment Method is the default method for automatically processing service charges."),
  "type": z.literal("credit_card").describe("The type of Payment Method.\n\nAlternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/) guide\nfor details and instructions.")
}
```

### get_payment_methods

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_payment_methods

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payment_methods

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payment_methods

**Environment variables**



**Input schema**

```ts
{}
```

### get_payment_method

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_payment_method

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_payment_methods_paymentmethodid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payment_methods_paymentmethodid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payment_methods_paymentm

**Environment variables**



**Input schema**

```ts
{}
```

### post_make_payment_method_default

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_payment_methods_paymentmethodid_ma

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payment_methods_paymentmethodid_make

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payment_methods_paymentm

**Environment variables**



**Input schema**

```ts
{}
```

### post_payment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "payment_method_id": z.number().int().describe("The ID of the Payment Method to apply to the Payment.").optional(),
  "usd": z.string().regex(new RegExp("^\\$?\\d+\\.\\d{2}$")).describe("The amount in US Dollars of the Payment.\n\n- Can begin with or without \`{
  "payment_method_id": z.number().int().describe("The ID of the Payment Method to apply to the Payment.").optional(),
  "usd": .\n- Commas (\`,\`) are not accepted.\n- Must end with a decimal expression, such as \`.00\` or \`.99\`.\n- Minimum: \`$5.00\` or the Account balance, whichever is lower.\n- Maximum: \`$2000.00\` or the Account balance up to \`$50000.00\`, whichever is greater.").optional()
}
```

### get_payments

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_payments

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payments

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payments

**Environment variables**



**Input schema**

```ts
{}
```

### post_pay_pal_payment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "cancel_url": z.string().describe("The URL to have PayPal redirect to when Payment is canceled."),
  "redirect_url": z.string().describe("The URL to have PayPal redirect to when Payment is approved."),
  "usd": z.string().describe("The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.")
}
```

### parameters_apiversion_account_payments_paypal

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payments_paypal

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payments_paypal

**Environment variables**



**Input schema**

```ts
{}
```

### post_execute_pay_pal_payment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "payer_id": z.string().describe("The PayerID returned by PayPal during the transaction authorization process."),
  "payment_id": z.string().describe("The PaymentID returned from [Stage a PayPal payment](https://techdocs.akamai.com/linode-api/reference/post-pay-pal-payment) that has been approved with PayPal.")
}
```

### parameters_apiversion_account_payments_paypal_execute

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payments_paypal_execute

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payments_paypal_execute

**Environment variables**



**Input schema**

```ts
{}
```

### get_payment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_payments_paymentid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_payments_paymentid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_payments_paymentid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_promo_credit

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "promo_code": z.string().min(1).max(32).describe("The Promo Code.")
}
```

### parameters_apiversion_account_promo_codes

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_promo_codes

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_promo_codes

**Environment variables**



**Input schema**

```ts
{}
```

### post_service_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "entities": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA collection of the services to include in this transfer request, separated by type.")
}
```

### get_service_transfers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_service_transfers

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_service_transfers

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_service_transfers

**Environment variables**



**Input schema**

```ts
{}
```

### get_service_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_service_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_service_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_service_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_service_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### post_accept_service_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_service_transfers_token_accept

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_service_transfers_token_accept

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_service_transfers_token_

**Environment variables**



**Input schema**

```ts
{}
```

### get_account_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_account_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "backups_enabled": z.boolean().describe("Account-wide backups default.  If \`true\`, all Linodes created will automatically be enrolled in the Backups service.  If \`false\`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.").optional(),
  "longview_subscription": z.string().describe("__Read-only__ The Longview Pro tier you are currently subscribed to. The value must be a [Longview subscription](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) ID or \`null\` for Longview Free.").readonly().optional(),
  "managed": z.boolean().describe("__Read-only__ Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.").readonly().optional(),
  "network_helper": z.boolean().describe("Enables network helper across all users by default for new Linodes and Linode Configs.").optional(),
  "object_storage": z.enum(["disabled","suspended","active"]).describe("__Read-only__ A string describing the status of this account's Object Storage service enrollment.").readonly().optional()
}
```

### parameters_apiversion_account_settings

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_settings

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_settings

**Environment variables**



**Input schema**

```ts
{}
```

### post_enable_account_managed

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_settings_managed_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_settings_managed_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_settings_managed_enable

**Environment variables**



**Input schema**

```ts
{}
```

### get_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### post_user

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_account_users

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_users

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_users

**Environment variables**



**Input schema**

```ts
{}
```

### get_user

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_user

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "email": z.string().email().describe("This user's email address. Akamai uses this address for account management communications.").optional(),
  "last_login": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ Details on this user's last login attempt. Returned as \`null\` if this user hasn't attempted a login since it was created. You can run the [List user logins](https://techdocs.akamai.com/linode-api/reference/get-account-logins) operation for additional login information.").optional(),
  "password_created": z.string().datetime({ offset: true }).nullable().describe("__Read-only__ When this user's current password was created. You initially create a password during the account sign-up process, and you can update it using the [Reset Password](https://login.linode.com/forgot/password) webpage. Returned as \`null\` if this user doesn't have a password set.").readonly().optional(),
  "restricted": z.boolean().describe("If \`true\`, this user needs specific access granted to perform actions or access entities on your account. Run [List a user's grants](https://techdocs.akamai.com/linode-api/reference/get-user-grants) for details on how to configure grants for a restricted user.").optional(),
  "ssh_keys": z.array(z.string()).describe("__Read-only__ A list of the labels for SSH keys added by this user. Users can add keys with the [Add an SSH key](https://techdocs.akamai.com/linode-api/reference/post-add-ssh-key) operation. These keys are deployed when this user is included in the \`authorized_users\` field of the following requests:\n\n- [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance)\n\n- [Rebuild a Linode](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance)\n\n- [Create a disk](https://techdocs.akamai.com/linode-api/reference/post-add-linode-disk)").readonly().optional(),
  "tfa_enabled": z.boolean().describe("__Read-only__ Whether this user has Two Factor Authentication (TFA) enabled. Run the [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) operation to enable TFA.").readonly().optional(),
  "username": z.string().regex(new RegExp("^[a-zA-Z0-9]((?![_-]{2,})[a-zA-Z0-9-_])+[a-zA-Z0-9]$")).min(3).max(32).describe("__Filterable__ The name of this user. This user needs to use this value to log in. It may also display alongside actions this user performs, including events or public StackScripts.").optional(),
  "verified_phone_number": z.string().nullable().describe("__Read-only__ The [verified](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number-verify) phone number for this user profile. Returned as \`null\` if the user doesn't have a verified phone number.").readonly().optional()
}
```

### delete_user

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_account_users_username_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_users_username_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_users_username_

**Environment variables**



**Input schema**

```ts
{}
```

### get_user_grants

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_user_grants

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "database": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Database that is owned by this Account.").optional(),
  "domain": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Domain that is owned by this Account.").optional(),
  "firewall": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Firewall that is owned by this Account.").optional(),
  "global": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA structure containing the Account-level grants a User has.").optional(),
  "image": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Image that is owned by this Account.").optional(),
  "linode": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Linode that is owned by this Account.").optional(),
  "longview": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Longview Client that is owned by this Account.").optional(),
  "nodebalancer": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each NodeBalancer that is owned by this Account.").optional(),
  "stackscript": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each StackScript that is owned by this Account.").optional(),
  "volume": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each Block Storage Volume that is owned by this Account.").optional(),
  "vpc": z.array(z.object({ "id": z.number().int().describe("The ID of the entity this grant applies to.").optional(), "label": z.string().describe("__Read-only__ The current label of the entity this grant applies to, for display purposes.").readonly().optional(), "permissions": z.enum(["read_only","read_write"]).nullable().describe("The level of access this User has to this entity.  If \`null\`, this User has no access.").optional() }).strict().describe("Represents the level of access a restricted User has to a specific resource on the Account.")).describe("The grants this User has for each VPC that is owned by this Account.").optional()
}
```

### parameters_apiversion_account_users_username_grants

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_account_users_username_grants

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_account_users_username_grants

**Environment variables**



**Input schema**

```ts
{}
```

### get_beta_programs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_betas

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_betas

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_betas

**Environment variables**



**Input schema**

```ts
{}
```

### get_beta_program

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_betas_betaid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_engines

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_engines

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_engines

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_engines

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_engine

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_engines_engineid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_engines_engineid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_engines_engineid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_instances

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_mysql_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_list": z.array(z.string().regex(new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"))).describe("Controls access to the Managed Database.\n\n- Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.\n\n- A standalone value of \`0.0.0.0/0\` allows all IP addresses access to the Managed Database.\n\n- An empty array (\`[]\`) blocks all public and private connections to the Managed Database.").optional(),
  "cluster_size": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The number of Linode instance nodes deployed to the Managed Database.\n\n - Choose \`3\` nodes to create a high availability cluster that consists of one primary node and two replica nodes.\n\n- A \`2\` node cluster is only available with a dedicated plan. It consists of one primary node and one replica node.").optional(),
  "engine": z.string().describe("The Managed Database engine in engine/version format."),
  "fork": z.string().optional(),
  "label": z.string().min(3).max(32).describe("__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type."),
  "region": z.string().describe("__Filterable__ The [Region](https://techdocs.akamai.com/linode-api/reference/get-regions) ID for the Managed Database."),
  "ssl_connection": z.boolean().describe("Currently required to be \`true\`. Whether to require SSL credentials to establish a connection to the Managed Database.\n\nRun the [Get managed MySQL database credentials](https://techdocs.akamai.com/linode-api/reference/get-databases-mysql-instance-credentials) operation for access information.").optional(),
  "type": z.string().describe("__Filterable__ The Linode Instance type used by the Managed Database for its nodes.")
}
```

### get_databases_mysql_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_mysql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_mysql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_databases_mysql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_list": z.array(z.string().regex(new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"))).describe("Controls access to the Managed Database.\n\n- Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.\n\n- A standalone value of \`0.0.0.0/0\` allows all IP addresses access to the Managed Database.\n\n- An empty array (\`[]\`) blocks all public and private connections to the Managed Database.").optional(),
  "label": z.string().min(3).max(32).describe("__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type.").optional(),
  "type": z.string().describe("Request re-sizing of your cluster to a Linode Type with more disk space. For example, you could request a Linode Type that uses a higher plan.\n\n- Needs to be a Linode Type with more disk space than your current Linode.\n\n- Resizing to a larger Linode Type can accrue additional cost. Review the \`price\` output in the [List types](https://techdocs.akamai.com/linode-api/reference/get-linode-types) operation for more information.\n\n- You can't update the \`allow_list\` and set a new \`type\` in the same request.\n\n- Any active updates to your cluster need to complete before you can request a resize. The reverse is also true: An active resizing needs to complete before you can perform any other update.").optional(),
  "updates": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration settings for automated patch update maintenance for the Managed Database.").optional(),
  "version": z.string().describe("__Filterable__ The Managed Database engine version.").optional()
}
```

### delete_databases_mysql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_mysql_instance_credentials

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_crede

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_credent

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_mysql_instance_credentials_reset

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_crede

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_credent

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_mysql_instance_patch

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_patch

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_patch

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### resume_databases_mysql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_resum

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_resume

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_mysql_instance_ssl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_ssl

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_ssl

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### suspend_databases_mysql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_mysql_instances_instanceid_suspe

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_mysql_instances_instanceid_suspend

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_mysql_instances_instan

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_postgre_sql_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_list": z.array(z.string().regex(new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"))).describe("Controls access to the Managed Database.\n\n- Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.\n\n- A standalone value of \`0.0.0.0/0\` allows all IP addresses access to the Managed Database.\n\n- An empty array (\`[]\`) blocks all public and private connections to the Managed Database.").optional(),
  "cluster_size": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The number of Linode instance nodes deployed to the Managed Database.\n\n - Choose \`3\` nodes to create a high availability cluster that consists of one primary node and two replica nodes.\n\n- A \`2\` node cluster is only available with a dedicated plan. It consists of one primary node and one replica node.").optional(),
  "engine": z.string().describe("The Managed Database engine in engine/version format."),
  "fork": z.string().optional(),
  "label": z.string().min(3).max(32).describe("__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type."),
  "region": z.string().describe("__Filterable__ The [Region](https://techdocs.akamai.com/linode-api/reference/get-regions) ID for the Managed Database."),
  "ssl_connection": z.boolean().describe("Currently required to be \`true\`. Whether to require SSL credentials to establish a connection to the Managed Database.\n\nRun the [Get managed PostgreSQL database credentials](https://techdocs.akamai.com/linode-api/reference/get-databases-postgre-sql-instance-credentials) operation for access information.").optional(),
  "type": z.string().describe("__Filterable__ The Linode Instance type used by the Managed Database for its nodes.")
}
```

### get_databases_postgre_sql_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_postgresql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_postgre_sql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_databases_postgre_sql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_list": z.array(z.string().regex(new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"))).describe("Controls access to the Managed Database.\n\n- Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.\n\n- A standalone value of \`0.0.0.0/0\` allows all IP addresses access to the Managed Database.\n\n- An empty array (\`[]\`) blocks all public and private connections to the Managed Database.").optional(),
  "label": z.string().min(3).max(32).describe("__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type.").optional(),
  "type": z.string().describe("Request re-sizing of your cluster to a Linode Type with more disk space. For example, you could request a Linode Type that uses a higher plan.\n\n- Needs to be a Linode Type with more disk space than your current Linode.\n\n- Resizing to a larger Linode Type can accrue additional cost. Review the \`price\` output from the [List types](https://techdocs.akamai.com/linode-api/reference/get-linode-types) operation for more information.\n\n- You can't update the \`allow_list\` and set a new \`type\` in the same request.\n\n- Any active updates to your cluster need to complete before you can request a resize. The reverse is also true: An active resizing needs to complete before you can perform any other update.").optional(),
  "updates": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration settings for automated patch update maintenance for the Managed Database.").optional(),
  "version": z.string().describe("__Filterable__ The Managed Database engine version.").optional()
}
```

### delete_databases_postgre_sql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_postgre_sql_instance_credentials

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_cr

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_postgre_sql_instance_credentials_reset

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_cr

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### post_databases_postgre_sql_instance_patch

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_pa

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### resume_databases_postgre_sql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_re

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_postgresql_instance_ssl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_ss

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### suspend_databases_postgre_sql_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_databases_postgresql_instances_instanceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_postgresql_instances_instanceid_su

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_postgresql_instances_i

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_types

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_types

**Environment variables**



**Input schema**

```ts
{}
```

### get_databases_type

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_databases_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_databases_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_databases_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_domains

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_domains

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains

**Environment variables**



**Input schema**

```ts
{}
```

### post_import_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "domain": z.string().describe("The domain to import."),
  "remote_nameserver": z.string().describe("The remote nameserver that allows zone transfers (AXFR).")
}
```

### parameters_apiversion_domains_import

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_import

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_import

**Environment variables**



**Input schema**

```ts
{}
```

### get_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "axfr_ips": z.array(z.string().ip()).describe("The list of IPs that may perform a zone transfer for this domain. The total combined length of all data within this array cannot exceed 1000 characters.\n\n> 📘\n>\n> This is potentially dangerous, and should be set to an empty list unless you intend to use it.").optional(),
  "description": z.string().min(1).max(253).nullable().describe("A description for this domain. This is for display purposes only.").optional(),
  "domain": z.string().regex(new RegExp("^(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)$")).min(1).max(253).describe("__Filterable__ The domain this domain represents. domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two domains representing the same domain.").optional(),
  "expire_sec": z.number().int().describe("The amount of time in seconds that may pass before this domain is no longer authoritative.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 1209600.").optional(),
  "id": z.number().int().describe("__Read-only__ This domain's unique ID.").readonly().optional(),
  "master_ips": z.array(z.string().ip()).describe("The IP addresses representing the master DNS for this domain. At least one value is required for \`type\` slave domains. The total combined length of all data within this array cannot exceed 1000 characters.").optional(),
  "refresh_sec": z.number().int().describe("The amount of time in seconds before this domain should be refreshed.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 14400.").optional(),
  "retry_sec": z.number().int().describe("The interval, in seconds, at which a failed refresh should be retried.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 14400.").optional(),
  "soa_email": z.string().email().describe("Start of Authority email address. This is required for \`type\` master domains.").optional(),
  "status": z.enum(["disabled","active"]).describe("Used to control whether this domain is currently being rendered.").optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to this object.  Tags are for organizational purposes only.").optional(),
  "ttl_sec": z.number().int().describe("\"Time to Live\" - the amount of time in seconds that this domain's records may be cached by resolvers or other domain servers.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 86400.").optional(),
  "type": z.enum(["master","slave"]).describe("Whether this domain represents the authoritative source of information for the domain it describes (\`master\`), or whether it is a read-only copy of a master (\`slave\`).").optional()
}
```

### delete_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_domains_domainid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_domainid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_domainid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_clone_domain

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "domain": z.string().regex(new RegExp("^(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)$")).min(1).max(253).describe("__Filterable__ The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.")
}
```

### parameters_apiversion_domains_domainid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_domainid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_domainid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### post_domain_record

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_domain_records

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_domains_domainid_records

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_domainid_records

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_domainid_records

**Environment variables**



**Input schema**

```ts
{}
```

### get_domain_record

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_domain_record

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().min(1).max(100).describe("__Filterable__ The name of this Record. For requests, this property's actual usage and whether it is required depends on the type of record this represents:\n\n\`A\` and \`AAAA\`: The hostname or FQDN of the Record.\n\n\`NS\`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (\`*\`) are not supported.\n\n\`MX\`: The mail subdomain. For example, \`sub\` for the address \`user@sub.example.com\` under the \`example.com\` Domain.\n\n- The left-most subdomain component may be an asterisk (\`*\`) to designate a wildcard subdomain.\n- Other subdomain components must only contain letters, digits, and hyphens, start with a letter, end with a letter or digit, and contain less than 64 characters.\n- Must be an empty string (\`\"\"\`) for a Null MX Record.\n\n\`CNAME\`: The hostname. Must be unique. Required.\n\n\`TXT\`: The hostname.\n\n\`SRV\`: Unused. Use the \`service\` property to set the service name for this record.\n\n\`CAA\`: The subdomain. Omit or enter an empty string (\`\"\"\`) to apply to the entire Domain.\n\n\`PTR\`: See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](https://www.linode.com/docs/guides/configure-rdns/).").optional(),
  "port": z.number().int().gte(0).lte(65535).describe("The port this Record points to. Only valid and required for SRV record requests.").optional(),
  "priority": z.number().int().gte(0).lte(255).describe("The priority of the target host for this Record. Lower values are preferred. Only valid for MX and SRV record requests. Required for SRV record requests.\n\nDefaults to \`0\` for MX record requests. Must be \`0\` for Null MX records.").optional(),
  "protocol": z.string().nullable().describe("The protocol this Record's service communicates with. An underscore (\`_\`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.").optional(),
  "service": z.string().nullable().describe("The name of the service. An underscore (\`_\`) is prepended and a period (\`.\`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.").optional(),
  "tag": z.enum(["issue","issuewild","iodef"]).nullable().describe("__Filterable__ The tag portion of a CAA record. Only valid and required for CAA record requests.").optional(),
  "target": z.string().max(65535).describe("__Filterable__ The target for this Record. For requests, this property's actual usage and whether it is required depends on the type of record this represents:\n\n\`A\` and \`AAAA\`: The IP address. Use \`[remote_addr]\` to submit the IPv4 address of the request. Required.\n\n\`NS\`: The name server. Must be a valid domain. Required.\n\n\`MX\`: The mail server. Must be a valid domain unless creating a Null MX Record. Required.\n\n- Must have less than 254 total characters.\n- The left-most domain component may be an asterisk (\`*\`) to designate a wildcard domain.\n- Other domain components must only contain letters, digits, and hyphens, start with a letter, end with a letter or digit, and contain less than 64 characters.\n- To create a [Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first [remove](https://techdocs.akamai.com/linode-api/reference/delete-domain-record) any additional MX records, then create an MX record with empty strings (\`\"\"\`) for the \`target\` and \`name\`. If a Domain has a Null MX record, new MX records cannot be created.\n\n\`CNAME\`: The alias. Must be a valid domain. Required.\n\n\`TXT\`: The value. Required.\n\n\`SRV\`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.\nTo configure for a different domain, enter a valid FQDN. For example, the value \`www\` with a Domain for\n\`example.com\` results in a target set to \`www.example.com\`, whereas the value \`sample.com\` results in a\ntarget set to \`sample.com\`. Required.\n\n\`CAA\`: The value. For \`issue\` or \`issuewild\` tags, the domain of your certificate issuer. For the \`iodef\`\ntag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:\n\n  - \`issue\`: The domain of your certificate issuer. Must include a valid domain. May include additional parameters separated with semicolons (\`;\`), for example: \`www.example.com; foo=bar\`\n  - \`issuewild\`: The domain of your wildcard certificate issuer. Must be a valid domain and must not start with an asterisk (\`*\`).\n  - \`iodef\`: Must be either (1) a valid domain, (2) a valid domain prepended with \`http://\` or \`https://\`, or (3) a valid email address prepended with \`mailto:\`.\n\n\`PTR\`: Required. See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](https://www.linode.com/docs/guides/configure-rdns/).\n\nWith the exception of A, AAAA, and CAA records, this field accepts a trailing period.").optional(),
  "ttl_sec": z.number().int().describe("\"Time to Live\" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.").optional(),
  "weight": z.number().int().gte(0).lte(65535).describe("The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.").optional()
}
```

### delete_domain_record

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_domains_domainid_records_recordid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_domainid_records_recordid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_domainid_records_recordi

**Environment variables**



**Input schema**

```ts
{}
```

### get_domain_zone

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_domains_domainid_zone_file

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_domains_domainid_zone_file

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_domains_domainid_zone_file

**Environment variables**



**Input schema**

```ts
{}
```

### post_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "cloud_init": z.boolean().describe("Whether this image supports [cloud-init](https://www.linode.com/docs/guides/write-files-with-cloud-init/).").optional(),
  "description": z.string().describe("A detailed description of this image.").optional(),
  "disk_id": z.number().int().describe("The ID of the target Linode disk for this image."),
  "label": z.string().describe("The short title for this image. If not provided, the disk's current label is used.").optional(),
  "tags": z.array(z.string().min(3).max(100)).min(0).max(500).describe("Tags used for organizational purposes. A tag can be from 3 to 100 characters long, and an image can have a maximum of 500 total tags.").optional()
}
```

### get_images

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_images

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_images

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_images

**Environment variables**



**Input schema**

```ts
{}
```

### post_upload_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "cloud_init": z.boolean().describe("Whether the uploaded Image supports cloud-init.").optional(),
  "description": z.string().describe("Description for the uploaded image.").optional(),
  "label": z.string().describe("Label for the uploaded image."),
  "region": z.string().describe("The region to upload to. Once uploaded, the image can be used in any region."),
  "tags": z.array(z.string().min(3).max(100)).min(0).max(500).describe("Tags you can use to organize images. A tag can be from 3 to 100 characters long, and an image can have a maximum of 500 total tags.").optional()
}
```

### parameters_apiversion_images_upload

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_images_upload

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_images_upload

**Environment variables**



**Input schema**

```ts
{}
```

### get_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "capabilities": z.array(z.string()).describe("__Read-only__ A list of the possible capabilities of this image.\n\n- \`cloud-init\`. The image supports the cloud-init multi-distribution method with our [Metadata service](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata/#troubleshoot-metadata-and-cloud-init). This only applies to public images.\n\n- \`distributed-sites\`. Whether the image can be used in distributed compute regions. Compared to a core compute region, distributed compute regions offer limited functionality, but they're globally distributed. Your image can be geographically closer to you, potentially letting you deploy it quicker. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for complete details.").readonly().optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this image was created.").readonly().optional(),
  "created_by": z.string().describe("__Read-only__ The name of the user who created this image, or \`linode\` for public images.").readonly().optional(),
  "deprecated": z.boolean().describe("__Filterable__, __Read-only__ Whether this image is deprecated. Only public images can be deprecated.").readonly().optional(),
  "description": z.string().min(1).max(65000).nullable().describe("A detailed description of this image.").optional(),
  "eol": z.string().datetime({ offset: true }).nullable().describe("__Read-only__ The date of the public image's planned removal from service. This is \`null\` for private images.").readonly().optional(),
  "expiry": z.string().datetime({ offset: true }).nullable().describe("__Read-only__ Only images created automatically from a deleted compute instance (type=automatic) expire. This is \`null\` for private images.").readonly().optional(),
  "id": z.string().describe("__Read-only__ The unique identifier for each image.").readonly().optional(),
  "is_public": z.boolean().describe("__Filterable__, __Read-only__ Revealed as \`true\` if the image is a public distribution image. Private, account-specific images are listed as \`false\`.").readonly().optional(),
  "label": z.string().describe("__Filterable__ A short description of the image.").optional(),
  "regions": z.array(z.object({ "region": z.string().describe("The unique identifier for the core compute region where this image is stored.").optional(), "status": z.enum(["available","creating","pending","pending deletion","pending replication","replicating"]).describe("The status of the image in this \`region\`. Possible values are \`available\`, \`creating\`, \`pending\`, \`pending deletion\`, \`pending replication\`, or \`replicating\`.").optional() }).strict()).describe("__Read-only__ Details on the regions where this image is stored. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for full details on support for \`regions\`.").readonly().optional(),
  "size": z.number().int().describe("__Filterable__, __Read-only__ The minimum size in MB this image needs to deploy.").readonly().optional(),
  "status": z.enum(["creating","pending_upload","available"]).describe("__Filterable__, __Read-only__ The current status of the image. Possible values are \`available\`, \`creating\`, and \`pending_upload\`.\n\n> 📘\n>\n> The \`+order_by\` and \`+order\` operators are not available when [filtering](https://techdocs.akamai.com/linode-api/reference/filtering-and-sorting) on this key.").readonly().optional(),
  "tags": z.array(z.string().min(3).max(100)).min(0).max(500).describe("__Filterable__ Tags used for organizational purposes. A tag can be from 3 to 100 characters long, and an image can have a maximum of 500 total tags.").optional(),
  "total_size": z.number().int().describe("__Read-only__ The total size in bytes of all instances of this image, in all \`regions\`.\n\n> 📘\n>\n> This object is empty for existing images. It's intended for use with future functionality.").readonly().optional(),
  "type": z.enum(["manual","automatic"]).describe("__Filterable__, __Read-only__ How the image was created. Create a \`manual\` image at any time. An \`automatic\` image is created automatically from a deleted compute instance.").readonly().optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this image was last updated.").readonly().optional(),
  "vendor": z.string().nullable().describe("__Filterable__, __Read-only__ The upstream distribution vendor. This is \`null\` for private images.").readonly().optional()
}
```

### delete_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_images_imageid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_images_imageid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_images_imageid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_replicate_image

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "regions": z.array(z.string()).describe("The unique identifier for each compute \`region\`. See [Regions and images](https://techdocs.akamai.com/cloud-computing/docs/images#regions-and-images) for full details on support for \`regions\`.").optional()
}
```

### parameters_apiversion_images_imageid_regions

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_images_imageid_regions

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_images_imageid_regions

**Environment variables**



**Input schema**

```ts
{}
```

### post_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_linode_instances

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional(),
  "X-Filter": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()).describe("Specify the name of the data field and the accompanying value."), z.object({ "+and": z.array(z.record(z.any()).describe("Specify the name of the data field and the accompanying value.")).describe("All conditions need to be true.").optional(), "+contains": z.string().describe("The provided string needs to be in the value.").optional(), "+gt": z.number().describe("The value needs to be greater than the provided number.").optional(), "+gte": z.number().describe("The value needs to be greater than or equal to the provided number.").optional(), "+lt": z.number().describe("The value needs to be less than the provided number.").optional(), "+lte": z.number().describe("The value needs to be less than or equal to the provided number.").optional(), "+neq": z.string().describe("The provided string is left out of the results.").optional(), "+or": z.array(z.record(z.any()).describe("Specify the name of the data field and the accompanying value.")).describe("At least one condition needs to be true.").optional(), "+order": z.enum(["asc","desc"]).describe("Sort in ascending (\`asc\`) or descending (\`desc\`) order. This defaults to \`asc\`. Requires \`+order_by\`."), "+order_by": z.string().describe("Order results based on the provided attribute. The attribute needs to be filterable.").optional() }).strict()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("Specifies the \`X-Filter\` header JSON object's filtering and sort criteria.").optional()
}
```

### parameters_apiversion_linode_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "alerts": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "backups": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about this Linode's backups status. For information about available backups, run [List backups](https://techdocs.akamai.com/linode-api/reference/get-backups).").optional(),
  "capabilities": z.array(z.string()).describe("__Limited availability__, __Read-only__ A list of capabilities this compute instance supports.").readonly().optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Linode was created.").readonly().optional(),
  "disk_encryption": z.string().nullable().describe("__Limited availability__, __Read-only__ Indicates the local disk encryption setting for this Linode. If the Linode is part of an LKE cluster, the value is \`null\`.").readonly().optional(),
  "has_user_data": z.boolean().describe("__Read-only__ Whether this compute instance was provisioned with \`user_data\` provided via the Metadata service. See the [Create a Linode](https://techdocs.akamai.com/linode-api/reference/post-linode-instance) description for more information on Metadata.").readonly().optional(),
  "host_uuid": z.string().uuid().describe("__Read-only__ The Linode's host machine, as a UUID.").readonly().optional(),
  "hypervisor": z.literal("kvm").describe("__Read-only__ The virtualization software powering this Linode.").readonly().optional(),
  "id": z.number().int().describe("__Filterable__, __Read-only__ This Linode's ID which must be provided for all operations impacting this Linode.").readonly().optional(),
  "image": z.string().optional(),
  "ipv4": z.array(z.string()).describe("__Filterable__, __Read-only__ This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address upon creation, and may get a single private IPv4 address if needed. You may need to [Open a support ticket](https://techdocs.akamai.com/linode-api/reference/post-ticket) to get additional IPv4 addresses.\n\nIPv4 addresses may be reassigned between your Linodes, or shared with other Linodes. See the [networking](https://techdocs.akamai.com/linode-api/reference/post-firewalls) operations for details.").readonly().optional(),
  "ipv6": z.string().nullable().describe("__Read-only__ This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be \`null\`.").readonly().optional(),
  "label": z.string().regex(new RegExp("^[a-zA-Z]((?!--|__|\\.\\.)[a-zA-Z0-9-_.])+$")).min(3).max(64).describe("__Filterable__ Provides a name for the Linode. If not provided, the API generates one for it.\n\nLinode labels have the following constraints:\n\n- It needs to begin and end with an alphanumeric character.\n- It can only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`) or periods (\`.\`).\n- Cannot have two hyphens (\`--\`), underscores (\`__\`) or periods (\`..\`) in a row.").optional(),
  "lke_cluster_id": z.number().int().nullable().describe("__Read-only__ The ID of the Kubernetes cluster if the Linode is part of cluster.").readonly().optional(),
  "placement_group": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ Details on the [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/) that this Linode belongs to. Empty if the Linode isn't in a placement group.").optional(),
  "region": z.string().describe("__Filterable__, __Read-only__ The [region](https://techdocs.akamai.com/linode-api/reference/get-regions) where the Linode deployed. A Linode's region can only be changed by initiating a [cross data center migration](https://techdocs.akamai.com/linode-api/reference/post-migrate-linode-instance).").readonly().optional(),
  "specs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ Information about the resources available to this Linode.").optional(),
  "status": z.enum(["running","offline","booting","busy","rebooting","shutting_down","provisioning","deleting","migrating","rebuilding","cloning","restoring","stopped","billing_suspension"]).describe("__Read-only__ A brief description of this Linode's current state. This field may change without direct action from you. For example, when a compute instance goes into maintenance mode, its status is \`stopped\`. Status is generally self-explanatory, based on its name.\n\n- \`busy\` indicates you've assigned the compute instance to a [placement group](https://techdocs.akamai.com/cloud-computing/docs/work-with-placement-groups), but the compute instance is currently booting. Once the boot completes, the API completes the assignment and updates the compute instance's \`status\` accordingly.\n- \`provisioning\` indicates that the API is applying operating system or Marketplace applications on the compute instance.\n- \`billing_suspension\` indicates that payment is past due on the compute instance, so we've suspended its use.").readonly().optional(),
  "tags": z.array(z.string()).describe("__Filterable__ Tags to help you organize your content.").optional(),
  "type": z.string().describe("__Read-only__ This is the [Linode type](https://techdocs.akamai.com/linode-api/reference/get-linode-types) that this Linode was deployed with. To change a Linode's type, use [Resize a Linode](https://techdocs.akamai.com/linode-api/reference/post-resize-linode-instance).").readonly().optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Linode was last updated.").readonly().optional(),
  "watchdog_enabled": z.boolean().describe("The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and reboots it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible. To prevent a loop, Lassie gives up if there have been more than 5 boot jobs issued within 15 minutes.").optional()
}
```

### delete_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_snapshot

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "label": z.string().min(1).max(255).describe("The label for the new snapshot.")
}
```

### get_backups

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_backups

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_backups

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_backup

**Environment variables**



**Input schema**

```ts
{}
```

### post_cancel_backups

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_backups_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_backups_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_backup

**Environment variables**



**Input schema**

```ts
{}
```

### post_enable_backups

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_backups_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_backups_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_backup

**Environment variables**



**Input schema**

```ts
{}
```

### get_backup

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_backups_backupid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_backups_backupid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_backup

**Environment variables**



**Input schema**

```ts
{}
```

### post_restore_backup

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "linode_id": z.number().int().describe("The ID of the Linode to restore a Backup to."),
  "overwrite": z.boolean().describe("If \`true\`, deletes all Disks and Configs on the target Linode before restoring.\n\nIf \`false\`, and the Disk image size is larger than the available space on the Linode, an error message indicating insufficient space is returned.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_backups_backupid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_backups_backupid_r

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_backup

**Environment variables**



**Input schema**

```ts
{}
```

### post_boot_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "config_id": z.number().int().nullable().describe("The Linode Config ID to boot into.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_boot

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_boot

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_boot

**Environment variables**



**Input schema**

```ts
{}
```

### post_clone_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "backups_enabled": z.boolean().describe("If this field is set to \`true\`, the created Linode will automatically be enrolled in the Linode Backup service. This will incur an additional charge. Pricing is included in the response from [List types](https://techdocs.akamai.com/linode-api/reference/get-linode-types).\n\n- Can only be included when cloning to a new Linode.").optional(),
  "configs": z.array(z.number().int()).describe("An array of configuration profile IDs.\n\n- If the \`configs\` parameter __is not provided__, then __all configuration profiles and their associated disks will be cloned__ from the source Linode. Any disks specified by the \`disks\` parameter will also be cloned.\n- __If an empty array is provided__ for the \`configs\` parameter, then __no configuration profiles (nor their associated disks) will be cloned__ from the source Linode. Any disks specified by the \`disks\` parameter will still be cloned.\n- __If a non-empty array is provided__ for the \`configs\` parameter, then __the configuration profiles specified in the array (and their associated disks) will be cloned__ from the source Linode. Any disks specified by the \`disks\` parameter will also be cloned.").optional(),
  "disks": z.array(z.number().int()).describe("An array of disk IDs.\n\n- If the \`disks\` parameter __is not provided__, then __no extra disks will be cloned__ from the source Linode. All disks associated with the configuration profiles specified by the \`configs\` parameter will still be cloned.\n- __If an empty array is provided__ for the \`disks\` parameter, then __no extra disks will be cloned__ from the source Linode. All disks associated with the configuration profiles specified by the \`configs\` parameter will still be cloned.\n- __If a non-empty array is provided__ for the \`disks\` parameter, then __the disks specified in the array will be cloned__ from the source Linode, in addition to any disks associated with the configuration profiles specified by the \`configs\` parameter.").optional(),
  "label": z.string().min(3).max(64).describe("The label to assign this Linode when cloning to a new Linode.\n\n- Can only be provided when cloning to a new Linode.\n- Defaults to \`linode\`.").optional(),
  "linode_id": z.number().int().describe("If an existing Linode is the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Write-only__ An object containing user-defined data relevant to the creation of Linodes.").optional(),
  "placement_group": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInclude this to assign this Linode to an existing [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/). Consider these points when cloning:\n\n- If the Linode you're cloning exists in a placement group, the API won't automatically add the cloned instance to the same placement group. You need to specify a placement group to add the clone to.\n- The target placement group needs to be in the same \`region\` set for this Linode.\n- The placement group needs to have capacity. Run the [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) operation and store the \`maximum_linodes_per_pg\` value to know the Linode limit per placement group. You can then run the [Get a placement group](https://techdocs.akamai.com/linode-api/reference/get-placement-group) operation to review the Linodes in that group.").optional(),
  "private_ip": z.boolean().describe("If \`true\`, the created Linode will have private networking enabled and assigned a private IPv4 address.\n\n- Can only be provided when cloning to a new Linode.").optional(),
  "region": z.string().describe("This is the Region where the Linode will be deployed. To view all available Regions you can deploy to, run [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions).\n\n- Region can only be provided and is required when cloning to a new Linode.").optional(),
  "type": z.string().describe("A Linode's Type determines what resources are available to it, including disk space, memory, and virtual cpus. The amounts available to a specific Linode are returned as \`specs\` on the Linode object.\n\nTo view all available Linode Types you can deploy with, run [List types](https://techdocs.akamai.com/linode-api/reference/get-linode-types).\n\n- Type can only be provided and is required when cloning to a new Linode.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### post_add_linode_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_linode_configs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_configs

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_configs

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_config

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_linode_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "comments": z.string().nullable().describe("Optional field for arbitrary user comments on this configuration.").optional(),
  "devices": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA dictionary of device disks to use as a device map in a Linode's configuration profile.\n\n- An empty device disk dictionary or a dictionary with empty values for device slots is allowed.\n- If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.").optional(),
  "helpers": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHelpers enabled when booting to this Linode configuration.").optional(),
  "id": z.number().int().describe("__Read-only__ The ID of this Config.").readonly().optional(),
  "interfaces": z.array(z.object({ "active": z.boolean().describe("__Read-only__ Returns \`true\` if the interface is in use, meaning that the Linode has been booted using the configuration profile to which the interface belongs.").readonly().optional(), "id": z.number().int().describe("__Read-only__ The unique ID representing this interface.").readonly().optional(), "ip_ranges": z.array(z.string().ip()).nullable().describe("IPv4 CIDR VPC subnet ranges that are routed to this interface.\n\nWhen included in a request:\n\n- A range can't include any addresses that are assigned to an active Linode or another VPC subnet.\n\n- When updating, you need to include any existing ranges to maintain them. If a range is left out, it will be removed.\n\n- Submit this as an empty array removes all existing values.\n\n- Omit this object to leave existing values as is.\n\n<<LB>>\n\n> 📘\n>\n> This is only supported for interfaces with a \`purpose\` of \`vpc\`.").optional(), "ipam_address": z.string().nullable().describe("This interface's private IP address in classless inter-domain routing (CIDR) notation.\n\nFor interfaces with a \`purpose\` of \`public\`:\n\n- If you include this in a request, set it to an empty string (\`\"\"\`) or \`null\`.\n\n- Returned as \`null\` in a response.\n\nFor interfaces with a \`purpose\` of \`vlan\`:\n\n- To avoid conflicting addresses, make sure this value is unique for each \`vlan\` interface.\n\n- This should be unique among devices attached to the VLAN to avoid conflict.\n\n- If Network Helper is enabled, the Linode's interface will be automatically configured to use this address after the Linode is rebooted. If Network Helper is disabled, enable the address using [manual static IP configuration](https://www.linode.com/docs/guides/manual-network-configuration/).\n\nFor interfaces with a \`purpose\` of \`vpc\`:\n\n- If you include this in a request, set it to an empty string (\`\"\"\`) or \`null\`.\n\n- Returned as \`null\` in a response.").optional(), "ipv4": z.object({ "nat_1_1": z.union([z.string().ip().min(1), z.literal("any")]).nullable().describe("The 1:1 NAT IPv4 address, used to associate a public IPv4 address with the interface's VPC subnet IPv4 address.\n\n- Only supported for interfaces with a \`purpose\` of \`vpc\`.\n\n- Returned as \`null\` if no 1:1 NAT is set for a \`vpc\` type interface.\n\n- Returned as an empty string (\`\"\"\`) for non-\`vpc\` type interfaces.\n\nWhen included in a request:\n\n- You can set this to a specific, public IPv4 address that's available on the Linode. You can also use the \`any\` keyword to enable the Linode's assigned public IPv4 address.\n\n- A specified address can't be shared with another Linode.\n\n- Omit this object or include it and set it to \`null\` or an empty string (\`\"\"\`) to block creation of a 1:1 NAT.\n\n<<LB>>\n\n> 📘\n>\n> You can't set this to a specific IPv4 address when creating a new Linode. During the creation process, the network automatically establishes a public IPv4 address for the Linode. Since this address doesn't exist yet, you can't include a custom IPv4 address to change it. After your Linode is created, you can [update your configuration profile interface](https://www.linode.com/docs/api/linode-instances/#configuration-profile-interface-update) to change the \`nat_1_1\` address.").optional(), "vpc": z.string().ip().nullable().describe("The VPC subnet IPv4 address for this interface.\n\n- This only applies to interfaces with a \`purpose\` of \`vpc\`.\n\n- Returned as an empty string (\`\"\"\`) for non-\`vpc\` type interfaces.\n\nWhen included in a request:\n\n- The \`vpc\` can't be assigned to an existing Linode as an address or in a range.\n\n- The target address can't be the first two or last two addresses in the subnet IPv4 range.\n\n- If omitted, a valid address within the Subnet IPv4 range is automatically assigned.").optional() }).strict().describe("IPv4 addresses configured for this interface. This only applies to interfaces with a \`purpose\` of \`vpc\`. Returned as \`null\` if no \`vpc\` interface is assigned.").optional(), "label": z.string().regex(new RegExp("[a-zA-Z0-9-]+")).min(1).max(64).nullable().describe("__Filterable__ The name of this interface.\n\nFor interfaces with a \`purpose\` of \`vlan\`:\n\n- Required.\n\n- This needs to be unique among a Linode's interfaces. A Linode can't be attached to the same VLAN multiple times.\n\n- This can only contain ASCII letters, numbers, and dashes (\`-\`). You can't use two consecutive dashes (\`--\`).\n\n- If the VLAN label is new, a VLAN is created. Up to 10 VLANs can be created in each data center \`region\`. To view your active VLANs, run the [List VLANs](https://techdocs.akamai.com/linode-api/reference/get-vlans) operation.\n\nFor interfaces with a \`purpose\` of \`public\`:\n\n- If you include this in a request, set it to an empty string (\`\"\"\`) or \`null\`.\n\n- Returned as \`null\` in a response.\n\nFor interfaces with a \`purpose\` of \`vpc\`:\n\n- If you include this in a request, set it to an empty string (\`\"\"\`) or \`null\`.\n\n- Returned as \`null\` in a response.").optional(), "primary": z.boolean().describe("The default route to the Linode. Each Linode can have one interface set as its \`primary\`. If you haven't specifically set a \`primary\`, the first non-\`vlan\` type interface is automatically treated as the primary.\n\n> 📘\n>\n> This needs to be set to \`false\` for any interface that uses \`vlan\` as its \`purpose\`.").optional(), "purpose": z.enum(["public","vlan","vpc"]).describe("The type of interface. This can be \`public\`, \`vlan\`, or \`vpc\`.\n\nFor interfaces with a \`purpose\` of \`public\`:\n\n- You can only define one \`public\` interface per Linode.\n\n- The Linode's default public IPv4 address is assigned to the \`public\` interface.\n\n- A Linode needs a \`public\` interface in the first or \`eth0\` position to be reachable via the public internet, after it boots. If no \`public\` interface is configured, you can only access the Linode through [LISH](https://www.linode.com/docs/products/compute/compute-instances/guides/lish/), or through another Linode that's connected to the same VLAN or VPC.\n\nFor interfaces with a \`purpose\` of \`vlan\`:\n\n- Configuring this \`purpose\` of interface attaches a Linode to the VLAN with the specified \`label\`.\n\n- If an \`ipam_address\` is configured, the Linode uses this address.\n\nFor interfaces with a \`purpose\` of \`vpc\`:\n\n- Configuring this \`purpose\` of interface attaches a Linode to an existing VPC subnet with the specified \`subnet_id\`.\n\n- When the interface is activated, the Linode is configured to use an IP address from the range in the assigned VPC subnet. See \`ipv4.vpc\` for more information."), "subnet_id": z.number().int().nullable().describe("The \`id\` of the VPC subnet for this interface. Use this value in a request to assign a Linode to a VPC subnet.\n\n- Required for \`vpc\` type interfaces.\n\n- Returned as \`null\` for non-\`vpc\` type interfaces.\n\n- Once you've assigned a VPC subnet to an interface, you can't update it.\n\n- You need to reboot a Linode using the interface's configuration profile to assign the Linode to a VPC subnet.").optional(), "vpc_id": z.number().int().nullable().describe("__Read-only__ The \`id\` of the VPC configured for this interface. Returned as \`null\` for non-\`vpc\` type interfaces.").readonly().optional() }).strict().describe("The network interface to apply to this Linode's configuration profile.")).min(1).max(3).describe("An array of Network interfaces to add to this Linode's Configuration Profile. At least one and up to three Interface objects can exist in this array. The position in the array determines which of the Linode's network interfaces is configured:\n\n- First [0]:  eth0\n- Second [1]: eth1\n- Third [2]:  eth2\n\nWhen updating a Linode's interfaces, _each Interface must be redefined_. An empty \`interfaces\` array results in a default \`public\` type Interface configuration only.\n\nIf no public Interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.\n\n> 📘\n>\n> Changes to Linode Interface configurations can be enabled by rebooting the Linode.\n\n\`vpc\` details\n\nSee the [VPC documentation](https://www.linode.com/docs/products/networking/vpc/#technical-specifications) guide for its specifications and limitations.\n\n\`vlan\` details\n\n- Only Next Generation Network (NGN) data centers support VLANs. Run the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation to view the capabilities of data center regions. If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center, the migration or cloning will not initiate. If a Linode cannot be migrated or cloned because of an incompatibility, you will be prompted to select a different data center or contact support.\n- See the [VLANs Overview](https://www.linode.com/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.").optional(),
  "kernel": z.string().describe("The ID of the kernel used to boot a Linode. Run the [List kernels](https://techdocs.akamai.com/linode-api/reference/get-kernels) operation to see all available kernels. Here are some commonly used kernels:\n\n- \`linode/latest-64bit\`. This is the default, our latest kernel at the time of an instance boot or reboot.\n\n- \`linode/grub2\`. The upstream distribution-supplied kernel that's installed on the primary disk, or a custom kernel if installed.\n\n- \`linode/direct-disk\`. The master boot record (MBR) of the primary disk or root device. Use this in place of a Linux kernel.").optional(),
  "label": z.string().min(1).max(48).describe("__Filterable__ The name of the configuration for display in Akamai Cloud Manager.").optional(),
  "memory_limit": z.number().int().describe("Defaults to the total RAM of the Linode.").optional(),
  "root_device": z.string().regex(new RegExp("a-z, A-Z, 0-9, /, _, -")).describe("The root device to boot.\n\n> 📘\n\n- If you leave this empty or set an invalid value, the root device defaults to \`/dev/sda\`.\n\n- If you specify a device at the root device location and it's not mounted, the Linode won't boot until a device is mounted.").optional(),
  "run_level": z.enum(["default","single","binbash"]).describe("Defines the state of your Linode after booting. Defaults to \`default\`.").optional(),
  "virt_mode": z.enum(["paravirt","fullvirt"]).describe("Controls the virtualization mode. Defaults to \`paravirt\`.\n\n- \`paravirt\` is suitable for most cases. Linodes running in \`paravirt\` mode share some qualities with the host, ultimately making it run faster since there is less transition between it and the host.\n\n- \`fullvirt\` affords more customization, but is slower because 100% of the VM is virtualized.").optional()
}
```

### delete_linode_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_configs_configid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_configs_configid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_config

**Environment variables**



**Input schema**

```ts
{}
```

### post_linode_config_interface

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_linode_config_interfaces

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_configs_configid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_configs_configid_i

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_config

**Environment variables**



**Input schema**

```ts
{}
```

### post_linode_config_interfaces

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ids": z.array(z.number().int().describe("__Read-only__ The unique ID representing this interface.").readonly()).describe("An ordered array of existing Configuration Profile Interface \`id\`s.\n\n- All current Interface \`id\`s must be present in the array.\n- If the Configuration Profile contains Interfaces and is active on the Linode, the Linode must first be shut down prior to running this operation.\n- Reordering takes effect after rebooting the Linode with this Configuration Profile.\n\nThe position in the array determines which of the Linode's network Interfaces is configured:\n\n- First [0]:  eth0\n- Second [1]: eth1\n- Third [2]:  eth2")
}
```

### parameters_apiversion_linode_instances_linodeid_configs_configid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_configs_configid_i

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_config

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_config_interface

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_linode_config_interface

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ip_ranges": z.array(z.string().ip()).describe("IPv4 CIDR VPC subnet ranges that are routed to this interface.\n\n- A range can't include any addresses that are assigned to an active Linode or another VPC subnet.\n\n- When updating, you need to include any existing ranges to maintain them. If a range is left out, it will be removed.\n\n- Include this as an empty array (\`[]\`) to remove all existing \`nat_1_1\` values.\n\n- Omit this array to leave all existing \`ip_ranges\` as is.\n<<LB>>\n> 📘\n>\n> This only applies to interfaces with a \`purpose\` of \`vpc\`.").optional(),
  "ipv4": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nIPv4 addresses configured for this interface.\n\n> 📘\n>\n> This only applies to interfaces with a \`purpose\` of \`vpc\`.").optional(),
  "primary": z.boolean().describe("Set to \`true\` to label this configuration profile interface as the default route to the Linode.\n\n- Each Linode can have one interface set as its \`primary\`.\n\n- If you don't specifically set a \`primary\`, the first non-\`vlan\` type interface is automatically treated as the primary.").optional()
}
```

### delete_linode_config_interface

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_configs_configid

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_configs_configid_i

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_config

**Environment variables**



**Input schema**

```ts
{}
```

### post_add_linode_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_linode_disks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_disks

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_disks

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_disks

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "label": z.string().min(1).max(48).describe("__Filterable__ The name of the disk. This is for display purposes only.").optional()
}
```

### delete_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_disks_diskid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_disks_diskid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_disks_

**Environment variables**



**Input schema**

```ts
{}
```

### post_clone_linode_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_disks_diskid_clo

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_disks_diskid_clone

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_disks_

**Environment variables**



**Input schema**

```ts
{}
```

### post_reset_disk_password

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "password": z.string().describe("The new root password for the OS installed on this Disk. The password must meet the complexity strength validation requirements for a strong password.")
}
```

### parameters_apiversion_linode_instances_linodeid_disks_diskid_pas

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_disks_diskid_passw

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_disks_

**Environment variables**



**Input schema**

```ts
{}
```

### post_resize_disk

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "size": z.number().int().gte(1).describe("The desired size, in MB, of the disk.")
}
```

### parameters_apiversion_linode_instances_linodeid_disks_diskid_res

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_disks_diskid_resiz

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_disks_

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_firewalls

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_firewa

**Environment variables**



**Input schema**

```ts
{}
```

### post_apply_firewalls

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_firewalls_apply

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_firewalls_apply

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_firewa

**Environment variables**



**Input schema**

```ts
{}
```

### post_add_linode_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "public": z.boolean().describe("Whether to create a public or private IPv4 address."),
  "type": z.literal("ipv4").describe("The type of address you are allocating. Only IPv4 addresses may be allocated through this operation.")
}
```

### get_linode_ips

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_ips

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_ips

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_ips

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_linode_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "rdns": z.string().nullable().describe("The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.")
}
```

### delete_linode_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_ips_address_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_ips_address_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_ips_ad

**Environment variables**



**Input schema**

```ts
{}
```

### post_migrate_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "placement_group": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInclude this to assign this Linode to an existing [placement group](https://www.linode.com/docs/products/compute/compute-instances/guides/placement-groups/) in the data center you're migrating to. These constraints apply:\n\n- If the target Linode is in a placement group, it will be removed from it when migrating.\n- The target placement group needs to be in the same \`region\` you're migrating to.\n- The target placement group needs to have capacity. Run the [Get a region](https://techdocs.akamai.com/linode-api/reference/get-region) operation for the region you want to migrate to, and store the \`maximum_linodes_per_pg\` value. Run the [Get a placement group](https://techdocs.akamai.com/linode-api/reference/get-placement-group) operation for that same region to review how many Linodes are in that group.").optional(),
  "region": z.string().describe("The region to which the Linode will be migrated. Must be a valid region slug. A list of regions can be viewed by running the [List regions](https://techdocs.akamai.com/linode-api/reference/get-regions) operation. A cross data center migration will cancel a pending migration that has not yet been initiated. A cross data center migration will initiate a \`linode_migrate_datacenter_create\` event.").optional(),
  "type": z.enum(["warm","cold"]).describe("Type of migration used in moving to a new host or Linode type.\n\n\`warm\`: the Linode will not power down until the migration is complete.\nWarm migrations are not available for DC migrations.\n\n\`cold\`: the Linode will be powered down and migrated. When the migration\nis complete, the Linode will be powered on.").optional(),
  "upgrade": z.boolean().describe("When initiating a cross DC migration, setting this value to \`true\` will also ensure that the Linode is upgraded to the latest generation of hardware that corresponds to your Linode's Type, if any free upgrades are available for it. If no free upgrades are available, and this value is set to \`true\`, then the endpoint will return a 400 error code and the migration will not be performed. If the data center set in the \`region\` field does not allow upgrades, then the endpoint will return a 400 error code and the migration will not be performed.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_migrate

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_migrate

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_migrat

**Environment variables**



**Input schema**

```ts
{}
```

### post_mutate_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_auto_disk_resize": z.boolean().describe("Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_mutate

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_mutate

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_mutate

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_node_balancers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_nodebalancers

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_nodebalancers

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_nodeba

**Environment variables**



**Input schema**

```ts
{}
```

### post_reset_linode_password

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "root_pass": z.string().describe("The root user's password on this Linode. Linode passwords must meet a password strength score requirement that is calculated internally by the API. If the strength requirement is not met, you will receive a Password does not meet strength requirement error.")
}
```

### parameters_apiversion_linode_instances_linodeid_password

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_password

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_passwo

**Environment variables**



**Input schema**

```ts
{}
```

### post_reboot_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "config_id": z.number().int().nullable().describe("The Linode Config ID to reboot into.  If \`null\` or omitted, the last booted config will be used.  If there was no last booted config and this Linode only has one config, it will be used.  If a config cannot be determined, an error will be returned.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_reboot

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_reboot

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_reboot

**Environment variables**



**Input schema**

```ts
{}
```

### post_rebuild_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_rebuild

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_rebuild

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_rebuil

**Environment variables**



**Input schema**

```ts
{}
```

### post_rescue_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "devices": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_rescue

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_rescue

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_rescue

**Environment variables**



**Input schema**

```ts
{}
```

### post_resize_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "allow_auto_disk_resize": z.boolean().describe("Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.").optional(),
  "migration_type": z.enum(["warm","cold"]).describe("Type of migration used in moving to a new host or Linode type.\n\n\`warm\`: the Linode will not power down until the migration is complete.\nWarm migrations are not available for DC migrations.\n\n\`cold\`: the Linode will be powered down and migrated. When the migration\nis complete, the Linode will be powered on.").optional(),
  "type": z.string().describe("The ID representing the Linode Type.")
}
```

### parameters_apiversion_linode_instances_linodeid_resize

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_resize

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_resize

**Environment variables**



**Input schema**

```ts
{}
```

### post_shutdown_linode_instance

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_shutdown

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_shutdown

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_shutdo

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_stats

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_stats

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_stats_by_year_month

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_stats_year_month

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_stats_year_month_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_stats_

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_transf

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_transfer_by_year_month

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_instances_linodeid_transfer_year_mo

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_transfer_year_mont

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_transf

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_volumes

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_instances_linodeid_volumes

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_instances_linodeid_volumes

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_instances_linodeid_volume

**Environment variables**



**Input schema**

```ts
{}
```

### get_kernels

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_kernels

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_kernels

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_kernels

**Environment variables**



**Input schema**

```ts
{}
```

### get_kernel

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_linode_kernels_kernelid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_kernels_kernelid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_kernels_kernelid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_add_stack_script

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_stack_scripts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_linode_stackscripts

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_stackscripts

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_stackscripts

**Environment variables**



**Input schema**

```ts
{}
```

### get_stack_script

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_stack_script

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ The date this StackScript was created.").readonly().optional(),
  "deployments_active": z.number().int().describe("__Read-only__ Count of currently active, deployed Linodes created from this StackScript.").readonly().optional(),
  "deployments_total": z.number().int().describe("__Filterable__, __Read-only__ The total number of times this StackScript has been deployed.").readonly().optional(),
  "description": z.string().describe("__Filterable__ A description for the StackScript.").optional(),
  "id": z.number().int().describe("__Read-only__ The unique ID of this StackScript.").readonly().optional(),
  "images": z.array(z.string()).describe("An array of Image IDs. These are the Images that can be deployed with this StackScript.\n\n\`any/all\` indicates that all available Images, including private Images, are accepted.").optional(),
  "is_public": z.boolean().describe("__Filterable__ This determines whether other users can use your StackScript. __Once a StackScript is made public, it cannot be made private.__").optional(),
  "label": z.string().min(3).max(128).describe("__Filterable__ The StackScript's label is for display purposes only.").optional(),
  "mine": z.boolean().describe("__Filterable__, __Read-only__ Returns \`true\` if this StackScript is owned by the account of the user making the request, and the user making the request is unrestricted or has access to this StackScript.").readonly().optional(),
  "rev_note": z.string().describe("__Filterable__ This field allows you to add notes for the set of revisions made to this StackScript.").optional(),
  "script": z.string().describe("The script to execute when provisioning a new Linode with this StackScript.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ The date this StackScript was last updated.").readonly().optional(),
  "user_defined_fields": z.array(z.object({ "default": z.string().describe("__Read-only__ The default value.  If not specified, this value will be used.").readonly().optional(), "example": z.string().describe("__Read-only__ An example value for the field.").readonly(), "label": z.string().describe("__Read-only__ A human-readable label for the field that will serve as the input prompt for entering the value during deployment.").readonly(), "manyOf": z.string().describe("__Read-only__ A list of acceptable values for the field in any quantity, combination or order.").readonly().optional(), "name": z.string().describe("__Read-only__ The name of the field.").readonly(), "oneOf": z.string().describe("__Read-only__ A list of acceptable single values for the field.").readonly().optional() }).strict().describe("A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.")).describe("__Read-only__ This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.").readonly().optional(),
  "user_gravatar_id": z.string().describe("__Read-only__ The Gravatar ID for the User who created the StackScript.").readonly().optional(),
  "username": z.string().describe("__Read-only__ The User who created the StackScript.").readonly().optional()
}
```

### delete_stack_script

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_linode_stackscripts_stackscriptid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_stackscripts_stackscriptid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_stackscripts_stackscripti

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_types

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_linode_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_types

**Environment variables**



**Input schema**

```ts
{}
```

### get_linode_type

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_linode_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_linode_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_linode_types_typeid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "control_plane": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines settings for the Kubernetes control plane, including High Availability (HA) and an IP-based Access Control List (ACL) for the control plane components.").optional(),
  "k8s_version": z.string().describe("__Filterable__ The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version will be deployed."),
  "label": z.string().min(1).max(32).describe("__Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:\n\n  - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (\`0xE382AB\`). Its Unicode code point is 2 bytes (\`0x30AB\`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (\`\"\\u30ab\"\`).\n\n  - 4 byte UTF-8 characters are not supported.\n\n  - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters."),
  "node_pools": z.array(z.object({ "autoscaler": z.object({ "enabled": z.boolean().describe("Whether automatic scaling is enabled for this node pool. Defaults to \`false\`.").optional(), "max": z.number().int().gte(1).lte(100).describe("The maximum number of nodes to automatically scale to. Defaults to the value provided by the \`count\` field.").optional(), "min": z.number().int().gte(1).lte(100).describe("The minimum number of nodes to automatically scale to. Defaults to the node pool's \`count\`.").optional() }).strict().describe("When enabled, the number of nodes automatically scales within the defined minimum and maximum values. When making a request, \`max\` and \`min\` require each other.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of nodes in the Node Pool."), "disks": z.array(z.object({ "size": z.number().int().describe("The size of this custom disk partition in MB. The size of this disk partition can't exceed the capacity of the node's plan type.").optional(), "type": z.enum(["raw","ext4"]).describe("This custom disk partition's filesystem type.").optional() }).strict().describe("The values to assign to each partition in this Node Pool's custom disk layout.")).describe("This node pool's custom disk layout. Each item in this array will create a new disk partition for each node in this node pool.\n\n> 📘\n>\n> Omit this field, except for special use cases. The disks specified here are partitions in _addition_ to the primary partition and reduce the size of the primary partition. This can lead to stability problems for the node.\n\n  - The custom disk layout is applied to each node in this node pool.\n\n  - The maximum number of custom disk partitions that can be configured is 7.\n\n  - Once the requested disk partitions are allocated, the remaining disk space is allocated to the node's boot disk.\n\n  - A node pool's custom disk layout is immutable over the lifetime of the node pool.").optional(), "labels": z.record(z.string().regex(new RegExp("^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?")).min(0).max(63)).describe("Key-value pairs added as labels to nodes in the node pool. Labels help classify your nodes and easily select subsets of objects. To learn more, review [Add Labels and Taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).\n\n**Label key:**\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- If the key begins with a DNS subdomain prefix followed by a single slash, for example \`example.com/my-app\`, the maximum total length of the label key is 128 characters. Domain labels can be up to 62 characters after the '/'. The prefix needs to adhere to [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) DNS subdomain restrictions.\n\n- If the key doesn't begin with a DNS subdomain prefix, the maximum key length is 63 characters.\n\nSpecifying an empty object removes all previously set labels.\n\n**Label value:**\n\n- The label's value can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- Can be specified as an empty string value with \`\"\"\`.").optional(), "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.").optional(), "taints": z.array(z.object({ "effect": z.enum(["NoSchedule","PreferNoSchedule","NoExecute"]).describe("The Kubernetes taint effect. For \`NoSchedule\`, \`PreferNoSchedule\` and \`NoExecute\` descriptions, see [Kubernetes Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)."), "key": z.string().regex(new RegExp("^([A-Za-z0-9][-A-Za-z0-9_.]*)?(\\/)?([A-Za-z0-9][-A-Za-z0-9_.]{1,63})?$")).min(1).max(63).describe("The Kubernetes taint key.\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- If the key begins with a DNS subdomain prefix followed by a single slash, for example \`example.com/my-app\`, the prefix part needs to adhere to [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) DNS subdomain restrictions and be a maximum of 253 characters."), "value": z.string().regex(new RegExp("^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?")).min(0).max(63).describe("The Kubernetes taint value.\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- Can be specified as an empty string value with \`\"\"\`.") }).strict()).min(0).describe("Kubernetes taints to add to node pool nodes. Taints help control how pods are scheduled onto nodes, specifically allowing them to repel certain pods. To learn more, review [Add labels and taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).\n\nSpecifying an empty array (\`[]\`) removes all previously set taints.").optional(), "type": z.string().describe("The Linode Type for all of the nodes in the Node Pool.") }).strict().describe("Specifies a collection of Linodes to serve as members of a Kubernetes cluster.")),
  "region": z.string().describe("__Filterable__ This Kubernetes cluster's location."),
  "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.").optional(),
  "tier": z.enum(["standard","enterprise"]).describe("__Beta__, __Filterable__ The desired Kubernetes tier, either \`standard\` or \`enterprise\`.\n\n> 🚧\n>\n> This field is in beta and only works when using the beta API. Call the URL with the \`apiVersion\` path parameter set to \`v4beta\`.").optional()
}
```

### get_lke_clusters

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_lke_cluster

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "control_plane": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines settings for the Kubernetes control plane, including High Availability (HA) and an IP-based Access Control List (ACL) for the control plane components.\n\nWhen upgrading pre-existing LKE clusters to use the HA Control Plane, the following changes will additionally occur:\n\n- All nodes will be deleted and new nodes will be created to replace them.\n\n- Any local storage (such as \`hostPath\` volumes) will be erased.\n\n- The upgrade process may take several minutes to complete, as nodes will be replaced on a rolling basis.\n\nWhen upgrading pre-existing LKE clusters to use the control plane ACL for the first time, it may take several hours for external clients to respect the access control settings. This is partly due to delays from DNS propagation.").optional(),
  "k8s_version": z.string().describe("The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;. New and recycled Nodes in this cluster will be installed with the latest available patch for the Cluster's Kubernetes version.\n\nWhen upgrading the Kubernetes version, only the next latest minor version following the current version can be deployed. For example, a cluster with Kubernetes version 1.29 can be upgraded to version 1.30, but not directly to 1.31.\n\nThe Kubernetes version of a cluster can not be downgraded.").optional(),
  "label": z.string().min(1).max(32).describe("__Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:\n\n  - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (\`0xE382AB\`). Its Unicode code point is 2 bytes (\`0x30AB\`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (\`\"\\u30ab\"\`).\n\n  - 4 byte UTF-8 characters are not supported.\n\n  - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters.").optional(),
  "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only. To delete a tag, exclude it from your \`tags\` array.").optional()
}
```

### delete_lke_cluster

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster_api_endpoints

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_api_endpoints

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_api_endpoints

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_api_endpo

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster_acl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_lke_cluster_acl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "acl": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDefines settings related to the IP-based ACL of the LKE cluster. The object requires the \`enabled\` and \`addresses\` keys. It also supports the optional key \`revision-id\`. The default policy is set to \`ALLOW\`, so that access controls are disabled. An empty object value (\`{}\`) sets default elements.").optional()
}
```

### delete_lke_cluster_acl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_control_plane_acl

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_control_plane_acl

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_control_p

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster_dashboard

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_dashboard

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_dashboard

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_dashboard

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster_kubeconfig

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_lke_cluster_kubeconfig

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_kubeconfig

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_kubeconfig

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_kubeconfi

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_cluster_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_lke_cluster_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_nodes_nodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_nodes_nodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_nodes_nod

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster_node_recycle

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_nodes_nodeid_recycl

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_nodes_nodeid_recycle

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_nodes_nod

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster_pools

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_lke_cluster_pools

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_pools

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_pools

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_pools

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_node_pool

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_lke_node_pool

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "autoscaler": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nWhen enabled, the number of nodes automatically scales within the defined minimum and maximum values. When making a request, \`max\` and \`min\` require each other.").optional(),
  "count": z.number().int().gte(1).lte(100).describe("The number of nodes in the Node Pool.").optional(),
  "labels": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nKey-value pairs added as labels to nodes in the node pool. Labels help classify your nodes and easily select subsets of objects. To learn more, review [Add Labels and Taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).\n\n**Label key:**\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- If the key begins with a DNS subdomain prefix followed by a single slash, for example \`example.com/my-app\`, the maximum total length of the label key is 128 characters. Domain labels can be up to 62 characters after the '/'. The prefix needs to adhere to [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) DNS subdomain restrictions.\n\n- If the key doesn't begin with a DNS subdomain prefix, the maximum key length is 63 characters.\n\nSpecifying an empty object removes all previously set labels.\n\n**Label value:**\n\n- The label's value can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- Can be specified as an empty string value with \`\"\"\`.").optional(),
  "taints": z.array(z.object({ "effect": z.enum(["NoSchedule","PreferNoSchedule","NoExecute"]).describe("The Kubernetes taint effect. For \`NoSchedule\`, \`PreferNoSchedule\` and \`NoExecute\` descriptions, see [Kubernetes Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)."), "key": z.string().regex(new RegExp("^([A-Za-z0-9][-A-Za-z0-9_.]*)?(\\/)?([A-Za-z0-9][-A-Za-z0-9_.]{1,63})?$")).min(1).max(63).describe("The Kubernetes taint key.\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- If the key begins with a DNS subdomain prefix followed by a single slash, for example \`example.com/my-app\`, the prefix part needs to adhere to [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) DNS subdomain restrictions and be a maximum of 253 characters."), "value": z.string().regex(new RegExp("^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?")).min(0).max(63).describe("The Kubernetes taint value.\n\n- A key can contain alphanumeric characters, dashes (\`-\`), underscores (\`_\`), or dots (\`.\`). Start and end it with an alphanumeric character.\n\n- Can be specified as an empty string value with \`\"\"\`.") }).strict()).min(0).describe("Kubernetes taints to add to node pool nodes. Taints help control how pods are scheduled onto nodes, specifically allowing them to repel certain pods. To learn more, review [Add labels and taints to your LKE node pools](https://www.linode.com/docs/products/compute/kubernetes/guides/deploy-and-manage-cluster-with-the-linode-api/#add-labels-and-taints-to-your-lke-node-pools).\n\nSpecifying an empty array (\`[]\`) removes all previously set taints.").optional()
}
```

### delete_lke_node_pool

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_pools_poolid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_pools_poolid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_pools_poo

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster_pool_recycle

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_pools_poolid_recycl

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_pools_poolid_recycle

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_pools_poo

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster_recycle

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_recycle

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_recycle

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_recycle

**Environment variables**



**Input schema**

```ts
{}
```

### post_lke_cluster_regenerate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "kubeconfig": z.boolean().describe("Whether to delete and regenerate the Kubeconfig file for this Cluster.").optional(),
  "servicetoken": z.boolean().describe("Whether to delete and regenerate the service access token for this Cluster.").optional()
}
```

### parameters_apiversion_lke_clusters_clusterid_regenerate

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_regenerate

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_regenerat

**Environment variables**



**Input schema**

```ts
{}
```

### delete_lke_service_token

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_clusters_clusterid_servicetoken

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_clusters_clusterid_servicetoken

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_clusters_clusterid_serviceto

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_tiers_versions

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_tiers_tier_versions

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_tiers_tier_versions

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_tiers_tier_versions

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_tiers_version

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_tiers_tier_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_tiers_tier_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_tiers_tier_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_types

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_lke_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_types

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_versions

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_versions

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_versions

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_versions

**Environment variables**



**Input schema**

```ts
{}
```

### get_lke_version

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_lke_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_lke_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_lke_versions_version_

**Environment variables**



**Input schema**

```ts
{}
```

### post_longview_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "api_key": z.string().describe("__Read-only__ The API key for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as \`[REDACTED]\` if you do not have read-write access to this client.").readonly().optional(),
  "apps": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was created.").readonly().optional(),
  "id": z.number().int().describe("__Read-only__ This Client's unique ID.").readonly().optional(),
  "install_code": z.string().describe("__Read-only__ The install code for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as \`[REDACTED]\` if you do not have read-write access to this client.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This Client's unique label. This is for display purposes only.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was last updated.").readonly().optional()
}
```

### get_longview_clients

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_longview_clients

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_clients

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_clients

**Environment variables**



**Input schema**

```ts
{}
```

### get_longview_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_longview_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "api_key": z.string().describe("__Read-only__ The API key for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as \`[REDACTED]\` if you do not have read-write access to this client.").readonly().optional(),
  "apps": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was created.").readonly().optional(),
  "id": z.number().int().describe("__Read-only__ This Client's unique ID.").readonly().optional(),
  "install_code": z.string().describe("__Read-only__ The install code for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as \`[REDACTED]\` if you do not have read-write access to this client.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This Client's unique label. This is for display purposes only.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was last updated.").readonly().optional()
}
```

### delete_longview_client

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_longview_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_clients_clientid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_longview_plan

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_longview_plan

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "longview_subscription": z.enum(["longview-3","longview-10","longview-40","longview-100"]).nullable().describe("The subscription ID for a particular Longview plan. A value of \`null\` corresponds to Longview Free. You can send a request to the [List Longview subscriptions](https://techdocs.akamai.com/linode-api/reference/get-longview-subscriptions) operation to receive the details of each plan.").optional()
}
```

### parameters_apiversion_longview_plan

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_plan

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_plan

**Environment variables**



**Input schema**

```ts
{}
```

### get_longview_subscriptions

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_longview_subscriptions

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_subscriptions

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_subscriptions

**Environment variables**



**Input schema**

```ts
{}
```

### get_longview_subscription

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_longview_subscriptions_subscriptionid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_subscriptions_subscriptionid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_subscriptions_subscript

**Environment variables**



**Input schema**

```ts
{}
```

### get_longview_types

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_longview_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_longview_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_longview_types

**Environment variables**



**Input schema**

```ts
{}
```

### post_managed_contact

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "email": z.string().email().describe("The address to email this Contact to alert them of issues.").optional(),
  "group": z.string().min(2).max(50).nullable().describe("__Filterable__ A grouping for this Contact. This is for display purposes only.").optional(),
  "id": z.number().int().describe("__Read-only__ This Contact's unique ID.").readonly().optional(),
  "name": z.string().regex(new RegExp("[a-zA-Z0-9-_ ]{2,64}")).min(2).max(64).describe("The name of this Contact.").optional(),
  "phone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about how to reach this Contact by phone.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Contact was last updated.").readonly().optional()
}
```

### get_managed_contacts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_managed_contacts

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_contacts

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_contacts

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_contact

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_managed_contact

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "email": z.string().email().describe("The address to email this Contact to alert them of issues.").optional(),
  "group": z.string().min(2).max(50).nullable().describe("__Filterable__ A grouping for this Contact. This is for display purposes only.").optional(),
  "id": z.number().int().describe("__Read-only__ This Contact's unique ID.").readonly().optional(),
  "name": z.string().regex(new RegExp("[a-zA-Z0-9-_ ]{2,64}")).min(2).max(64).describe("The name of this Contact.").optional(),
  "phone": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about how to reach this Contact by phone.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Contact was last updated.").readonly().optional()
}
```

### delete_managed_contact

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_contacts_contactid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_contacts_contactid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_contacts_contactid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_managed_credential

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_managed_credentials

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_managed_credentials

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_credentials

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_credentials

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_ssh_key

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_credentials_sshkey

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_credentials_sshkey

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_credentials_sshkey

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_credential

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_managed_credential

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.number().int().describe("__Read-only__ This Credential's unique ID.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_ \\.]{2,75}")).min(2).max(75).describe("The unique label for this Credential. This is for display purposes only.").optional(),
  "last_decrypted": z.string().datetime({ offset: true }).describe("__Read-only__ The date this Credential was last decrypted by a member of Linode special forces.").readonly().optional()
}
```

### parameters_apiversion_managed_credentials_credentialid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_credentials_credentialid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_credentials_credentialid

**Environment variables**



**Input schema**

```ts
{}
```

### post_managed_credential_revoke

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_credentials_credentialid_revoke

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_credentials_credentialid_revoke

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_credentials_credentialid

**Environment variables**



**Input schema**

```ts
{}
```

### post_managed_credential_username_password

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "password": z.string().describe("The password to use when accessing the Managed Service."),
  "username": z.string().min(0).max(5000).describe("The username to use when accessing the Managed Service.").optional()
}
```

### parameters_apiversion_managed_credentials_credentialid_update

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_credentials_credentialid_update

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_credentials_credentialid

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_issues

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_managed_issues

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_issues

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_issues

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_issue

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_issues_issueid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_issues_issueid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_issues_issueid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_linode_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_managed_linode_settings

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_linode_settings

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_linode_settings

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_linode_setting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_managed_linode_setting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.number().int().describe("__Read-only__ The ID of the Linode these Settings are for.").readonly().optional(),
  "label": z.string().describe("__Read-only__ The label of the Linode these Settings are for.").readonly().optional(),
  "ssh": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe SSH settings for this Linode.").optional()
}
```

### parameters_apiversion_managed_linode_settings_linodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_linode_settings_linodeid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_linode_settings_linodeid

**Environment variables**



**Input schema**

```ts
{}
```

### post_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_managed_services

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_services

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_services

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_services

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "address": z.string().min(3).max(100).describe("The URL at which this Service is monitored. URL parameters such as \`?no-cache=1\` are preserved. URL fragments/anchors such as \`#monitor\` are __not__ preserved.").optional(),
  "body": z.string().min(0).max(100).nullable().describe("What to expect to find in the response body for the Service to be considered up.").optional(),
  "consultation_group": z.string().min(0).max(50).describe("The group of ManagedContacts who should be notified or consulted with when an Issue is detected.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Managed Service was created.").readonly().optional(),
  "credentials": z.array(z.number().int()).describe("An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.").optional(),
  "id": z.number().int().describe("__Read-only__ This Service's unique ID.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_ \\.]{3,64}")).min(3).max(64).describe("The label for this Service. This is for display purposes only.").optional(),
  "notes": z.string().nullable().describe("Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.").optional(),
  "region": z.string().nullable().describe("The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.").optional(),
  "service_type": z.enum(["url","tcp"]).describe("How this Service is monitored.").optional(),
  "status": z.enum(["disabled","pending","ok","problem"]).describe("__Read-only__ The current status of this Service.").readonly().optional(),
  "timeout": z.number().int().gte(1).lte(255).describe("How long to wait, in seconds, for a response before considering the Service to be down.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Managed Service was last updated.").readonly().optional()
}
```

### delete_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_services_serviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_services_serviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_services_serviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_disable_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_services_serviceid_disable

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_services_serviceid_disable

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_services_serviceid_disab

**Environment variables**



**Input schema**

```ts
{}
```

### post_enable_managed_service

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_services_serviceid_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_services_serviceid_enable

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_services_serviceid_enabl

**Environment variables**



**Input schema**

```ts
{}
```

### get_managed_stats

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_managed_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_managed_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_managed_stats

**Environment variables**



**Input schema**

```ts
{}
```

### get_network_transfer_prices

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_network_transfer_prices

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_network_transfer_prices

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_network_transfer_prices

**Environment variables**



**Input schema**

```ts
{}
```

### post_firewalls

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_firewalls

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_networking_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### get_firewall

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_firewall

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "label": z.string().regex(new RegExp("^[a-zA-Z]((?!--|__|\\.\\.)[a-zA-Z0-9-_.])+$")).min(3).max(32).describe("__Filterable__ The Firewall's label, for display purposes only.\n\nFirewall labels have the following constraints:\n\n  - Must begin and end with an alphanumeric character.\n  - May only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`) or periods (\`.\`).\n  - Cannot have two hyphens (\`--\`), underscores (\`__\`) or periods (\`..\`) in a row.\n  - Must be between 3 and 32 characters.\n  - Must be unique.").optional(),
  "status": z.enum(["enabled","disabled"]).describe("The status to be applied to this Firewall.\n\n - When a Firewall is first created its status is \`enabled\`.\n - Run the [Delete a firewall](https://techdocs.akamai.com/linode-api/reference/delete-firewall) operation to delete a Firewall.").optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to this object. Tags are for organizational purposes only.").optional()
}
```

### delete_firewall

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_firewall_device

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_firewall_devices

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_networking_firewalls_firewallid_devices

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_devices

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_firewall_device

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_firewall_device

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_firewalls_firewallid_devices_de

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_devices_devi

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_firewall_rule_versions

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_firewalls_firewallid_history

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_history

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_firewall_rule_version

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_firewalls_firewallid_history_ru

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_history_rule

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_firewall_rules

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_firewall_rules

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_firewalls_firewallid_rules

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_firewalls_firewallid_rules

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_firewalls_firewallid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_allocate_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "linode_id": z.number().int().describe("The ID of a Linode you have access to that this address will be allocated to."),
  "public": z.boolean().describe("Whether to create a public or private IPv4 address."),
  "type": z.literal("ipv4").describe("The type of address you are requesting. Only IPv4 addresses may be allocated through this operation.")
}
```

### get_ips

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "skip_ipv6_rdns": z.boolean().describe("When \`true\`, the \`rdns\` property for any \`ipv6\` type addresses always returns \`null\` regardless of whether RDNS data exists for the address.").optional()
}
```

### parameters_apiversion_networking_ips

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ips

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ips

**Environment variables**



**Input schema**

```ts
{}
```

### post_assign_ips

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "assignments": z.array(z.object({ "address": z.string().describe("The IPv4 address or IPv6 range for this assignment.\n\n- Must be an IPv4 address or an IPv6 range you can access in the Region specified.\n- IPv6 ranges must include a prefix length of \`/56\` or \`/64\`, for example: \`2001:db8:3c4d:15::/64\`.\n- Assignment of an IPv6 range to a Linode updates the route target of the range to the assigned Linode's SLAAC address.\n- May be a public or private address."), "linode_id": z.number().int().describe("The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.") }).strict()).describe("The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed."),
  "region": z.string().describe("The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.")
}
```

### parameters_apiversion_networking_ips_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ips_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ips_assign

**Environment variables**



**Input schema**

```ts
{}
```

### post_share_ips

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ips": z.array(z.string().ip()).describe("A list of secondary Linode IPs to share with the primary Linode.\n\n- Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n- Can include both private and public IPv4 addresses.\n- You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n- Enter an empty array to remove all shared IP addresses."),
  "linode_id": z.number().int().describe("The ID of the primary Linode that the addresses will be shared with.")
}
```

### parameters_apiversion_networking_ips_share

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ips_share

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ips_share

**Environment variables**



**Input schema**

```ts
{}
```

### get_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_ip

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "rdns": z.string().nullable().describe("The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.")
}
```

### parameters_apiversion_networking_ips_address_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ips_address_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ips_address_

**Environment variables**



**Input schema**

```ts
{}
```

### post_assign_ipv4s

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "assignments": z.array(z.object({ "address": z.string().describe("The IPv4 address or IPv6 range for this assignment.\n\n- Must be an IPv4 address or an IPv6 range you can access in the Region specified.\n- IPv6 ranges must include a prefix length of \`/56\` or \`/64\`, for example: \`2001:db8:3c4d:15::/64\`.\n- Assignment of an IPv6 range to a Linode updates the route target of the range to the assigned Linode's SLAAC address.\n- May be a public or private address."), "linode_id": z.number().int().describe("The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.") }).strict()).describe("The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed."),
  "region": z.string().describe("The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.")
}
```

### parameters_apiversion_networking_ipv4_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ipv4_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ipv4_assign

**Environment variables**



**Input schema**

```ts
{}
```

### post_share_ipv4s

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "ips": z.array(z.string().ip()).describe("A list of secondary Linode IPs to share with the primary Linode.\n\n- Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n- Can include both private and public IPv4 addresses.\n- You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n- Enter an empty array to remove all shared IP addresses."),
  "linode_id": z.number().int().describe("The ID of the primary Linode that the addresses will be shared with.")
}
```

### parameters_apiversion_networking_ipv4_share

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ipv4_share

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ipv4_share

**Environment variables**



**Input schema**

```ts
{}
```

### get_ipv6_pools

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_networking_ipv6_pools

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ipv6_pools

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ipv6_pools

**Environment variables**



**Input schema**

```ts
{}
```

### post_ipv6_range

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "linode_id": z.number().int().describe("The ID of the Linode to assign this range to. The SLAAC address for the provided Linode is used as the range's \`route_target\`.\n\n- __Required__ if \`route_target\` is omitted from the request.\n\n- Mutually exclusive with \`route_target\`. Submitting values for both properties in a request results in an error.").optional(),
  "prefix_length": z.union([z.literal(56), z.literal(64)]).describe("The prefix length of the IPv6 range."),
  "route_target": z.string().ip({ version: "v6" }).describe("The IPv6 SLAAC address to assign this range to.\n\n- __Required__ if \`linode_id\` is omitted from the request.\n\n- Mutually exclusive with \`linode_id\`. Submitting values for both properties in a request results in an error.\n\n> 📘\n>\n> You need to omit the \`/128\` prefix length of the SLAAC address when using this property.").optional()
}
```

### get_ipv6_ranges

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_networking_ipv6_ranges

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ipv6_ranges

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ipv6_ranges

**Environment variables**



**Input schema**

```ts
{}
```

### get_ipv6_range

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_ipv6_range

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_ipv6_ranges_range_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_ipv6_ranges_range_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_ipv6_ranges_range_

**Environment variables**



**Input schema**

```ts
{}
```

### get_vlans

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_networking_vlans

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_vlans

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_vlans

**Environment variables**



**Input schema**

```ts
{}
```

### delete_vlan

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_networking_vlans_regionid_label_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_networking_vlans_regionid_label_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_networking_vlans_regionid_label_

**Environment variables**



**Input schema**

```ts
{}
```

### post_node_balancer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "client_conn_throttle": z.number().int().gte(0).lte(20).describe("Throttle TCP connections per second for TCP, HTTP, and HTTPS configurations.  Set to \`0\` (zero) to disable throttling.").optional(),
  "configs": z.array(z.record(z.any()).and(z.object({ "algorithm": z.enum(["roundrobin","leastconn","source"]).describe("The algorithm this TCP NodeBalancer uses to route traffic to backends."), "check": z.enum(["none","connection","http","http_body"]).describe("The type of check to perform against backends to ensure they are serving requests. The \`check\` is used to determine if backends are up or down.\n\n- If \`none\`, no check is performed.\n- \`connection\` requires only a connection to the backend to succeed.\n- \`http\` and \`http_body\` rely on the backend serving HTTP, and that the response returned matches what is expected."), "check_attempts": z.number().int().gte(1).lte(30).describe("How many times to attempt a check before considering a backend to be down."), "check_body": z.string().describe("This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.").optional(), "check_interval": z.number().int().gte(2).lte(3600).describe("How often, in seconds, to check that backends are up and serving requests.\n\nMust be greater than \`check_timeout\`."), "check_passive": z.boolean().describe("If \`true\`, any response from this backend with a \`5xx\` status code will be enough for it to be considered unhealthy and taken out of rotation."), "check_path": z.string().regex(new RegExp("^[a-zA-Z0-9\\/\\-%?&=.]*$")).describe("The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.").optional(), "check_timeout": z.number().int().gte(1).lte(30).describe("How long, in seconds, to wait for a check attempt before considering it failed.\n\nMust be less than \`check_interval\`."), "cipher_suite": z.string().describe("__Read-only__ Not applicable for TCP configs.").readonly().optional(), "id": z.number().int().describe("__Read-only__ This config's unique ID.").readonly().optional(), "nodebalancer_id": z.number().int().describe("__Read-only__ The ID for the NodeBalancer this config belongs to.").readonly().optional(), "nodes": z.array(z.any().describe("A NodeBalancer node represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should respond to both HTTP and HTTPS requests, you will need two NodeBalancer configs (port 80 and port 443) and four backends each, one for each of the Linodes serving requests for that port.")).describe("The NodeBalancer nodes that serve this configuration."), "nodes_status": z.object({ "down": z.number().int().describe("__Read-only__ The number of backends considered to be \`DOWN\` and unhealthy.  These are not in rotation, and not serving requests.").readonly().optional(), "up": z.number().int().describe("__Read-only__ The number of backends considered to be \`UP\` and healthy, and that are serving requests.").readonly().optional() }).strict().describe("__Read-only__ Describes the health of the backends for this port. This data updates periodically as checks are performed against backends.").readonly().optional(), "port": z.number().int().gte(1).lte(65535).describe("This is the port the NodeBalancer listens on for this configuration. Port numbers must be unique across TCP, HTTP, and HTTPS configurations on a single NodeBalancer. However, ports assigned to TCP, HTTP, or HTTPS configurations can also be reused for UDP configurations. For example, Port 80 can simultaneously serve a TCP and a UDP configuration on the same NodeBalancer, but it can't be shared by both a TCP and an HTTP configuration. Although certain ports are traditionally associated with specific protocols, this isn't strictly enforced, and you may configure your NodeBalancer however you find useful."), "protocol": z.literal("tcp").describe("The protocol the port is configured to serve, \`tcp\` in this case.\n\nReview our guide on [Available protocols](https://techdocs.akamai.com/cloud-computing/docs/available-protocols) for information on protocol features."), "proxy_protocol": z.enum(["none","v1","v2"]).describe("Proxy protocol is a TCP extension that sends initial TCP connection information such as source or destination IPs and ports to backend devices. Proxy protocol preserves initial TCP information that would be lost otherwise. Backend devices must be configured to work with \`proxy_protocol\` if enabled.\n\n- If omitted, or set to \`none\`, the NodeBalancer doesn't send any auxiliary data over TCP connections. This is the default.\n- If set to \`v1\`, the human-readable header format (Version 1) is used. Requires \`tcp\` protocol.\n- If set to \`v2\`, the binary header format (Version 2) is used. Requires \`tcp\` protocol."), "ssl_cert": z.string().nullable().describe("__Read-only__ Not applicable for TCP configs.").readonly().optional(), "ssl_commonname": z.string().describe("__Read-only__ Not applicable for TCP configs.").readonly().optional(), "ssl_fingerprint": z.string().describe("__Read-only__ Not applicable for TCP configs.").readonly().optional(), "ssl_key": z.string().nullable().describe("__Read-only__ Not applicable for HTTP configs.").readonly().optional(), "stickiness": z.enum(["none","table"]).describe("__Read-only__ Controls how session stickiness is handled on this port.\n\n- If set to \`none\`, connections will always be assigned a backend based on the algorithm configured.\n- If set to \`table\`, sessions from the same remote address will be routed to the same backend.").readonly() }).strict().describe("A NodeBalancer configuration defines the protocol and settings for a specific port on the NodeBalancer. These fields apply to TCP configurations."))).describe("The port configs to create for this NodeBalancer. Each config needs a unique port and at least one node.").optional(),
  "firewall_id": z.number().int().describe("The ID of the Firewall to assign to the NodeBalancer.\n\n- A NodeBalancer can have only one Firewall assigned to it.\n- Firewalls control inbound network traffic to NodeBalancers.").optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This NodeBalancer's label. These must be unique on your Account.").optional(),
  "region": z.string().describe("The ID of the Region to create this NodeBalancer in."),
  "tags": z.array(z.string()).describe("An array of Tags applied to this object. Tags are for organizational purposes only.").optional()
}
```

### get_node_balancers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_nodebalancers

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer_types

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_types

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_node_balancer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "client_conn_throttle": z.number().int().gte(0).lte(20).describe("Throttle TCP connections per second for TCP, HTTP, and HTTPS configurations.  Set to \`0\` (zero) to disable throttling.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this NodeBalancer was created.").readonly().optional(),
  "hostname": z.string().describe("__Read-only__ This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.").readonly().optional(),
  "id": z.number().int().describe("__Read-only__ This NodeBalancer's unique ID.").readonly().optional(),
  "ipv4": z.string().ip().describe("__Filterable__, __Read-only__ This NodeBalancer's public IPv4 address.").readonly().optional(),
  "ipv6": z.string().ip().nullable().describe("__Read-only__ This NodeBalancer's public IPv6 address.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This NodeBalancer's label. These must be unique on your Account.").optional(),
  "lke_cluster": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ This NodeBalancer's related LKE cluster, if any. The value is \`null\` if this NodeBalancer isn't related to an LKE cluster.").optional(),
  "region": z.string().describe("__Filterable__, __Read-only__ The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.").readonly().optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of Tags applied to this object.  Tags are for organizational purposes only.").optional(),
  "transfer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ Information about the amount of transfer this NodeBalancer has had so far this month.").optional(),
  "type": z.literal("common").describe("__Read-only__ The type of NodeBalancer.").readonly().optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this NodeBalancer was last updated.").readonly().optional()
}
```

### delete_node_balancer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_node_balancer_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_node_balancer_configs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_nodebalancers_nodebalancerid_configs

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_configs

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_con

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_node_balancer_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_node_balancer_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_configs_confi

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_configs_configi

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_con

**Environment variables**



**Input schema**

```ts
{}
```

### post_node_balancer_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_node_balancer_config_nodes

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_nodebalancers_nodebalancerid_configs_confi

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_configs_configi

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_con

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_node_balancer_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_node_balancer_config_node

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_configs_confi

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_configs_configi

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_con

**Environment variables**



**Input schema**

```ts
{}
```

### post_rebuild_node_balancer_config

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_configs_confi

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_configs_configi

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_con

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer_firewalls

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_firewalls

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_fir

**Environment variables**



**Input schema**

```ts
{}
```

### get_node_balancer_stats

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_nodebalancers_nodebalancerid_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_nodebalancers_nodebalancerid_stats

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_nodebalancers_nodebalancerid_sta

**Environment variables**



**Input schema**

```ts
{}
```

### post_object_storage_bucket

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).").optional(),
  "cors_enabled": z.boolean().describe("If set to \`false\`, cross-origin resource sharing (CORS) is disabled for all origins in the bucket.").optional(),
  "endpoint_type": z.enum(["E0","E1","E2","E3"]).describe("The type of \`s3_endpoint\` available to the active \`user\` in this \`region\`. See [Endpoint types](https://techdocs.akamai.com/cloud-computing/docs/object-storage#endpoint-types) for more information.").optional(),
  "label": z.string().regex(new RegExp("^(?=.{3,63}$)[a-z0-9]+(?:-[a-z0-9]+)*(?:[.][a-z0-9]+(?:-[a-z0-9]+)*)*$")).describe("The name for this bucket.\n\n* A bucket name can contain from 3 to 63 alphanumeric characters, dashes (\`-\`), or dots (\`.\`).\n* A bucket name can't end in a dash and you can't use two consecutive dashes.\n* A bucket name can't start or end in a dot, and you can't use two consecutive dots. As a best practice, only use dots if a certificate you're using with your bucket requires it. (For example, if you're using a custom TLS certificate.)\n* A bucket name needs to be unique in the \`region\` where you're creating the bucket. The API only reserves labels for the \`region\` where active buckets are created and stored. If you want to reserve this bucket's label in another \`region\`, create a new bucket with the same label in the new \`region\`."),
  "region": z.string().describe("The \`id\` assigned to the data center ([region](https://techdocs.akamai.com/linode-api/reference/get-regions)) where this Object Storage bucket should be created.\n\n> 📘\n>\n> This supports legacy \`clusterId\` values that represented a specific region. For example, \`us-east-1\` is the legacy reference for the \`us-east\` region.").optional(),
  "s3_endpoint": z.string().describe("The active user's S3-compatible endpoint URL, based on the \`endpoint_type\` and \`region\`.").optional()
}
```

### get_object_storage_buckets

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_buckets

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_bucketin_cluster

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_buckets_regionid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_bucket

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_object_storage_bucket

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_

**Environment variables**



**Input schema**

```ts
{}
```

### post_object_storage_bucket_access

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).").optional(),
  "cors_enabled": z.boolean().describe("If \`true\`, cross-origin resource sharing (CORS) is enabled for all origins in the bucket.").optional()
}
```

### get_object_storage_bucket_access

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_storage_bucket_access

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).").optional(),
  "cors_enabled": z.boolean().describe("If \`true\`, the API enables cross-origin resource sharing for all origins on the bucket.").optional()
}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_acc

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_acces

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_bucket_acl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "name": z.string().describe("The name of a specific object to get its access control list (ACL) details. Run the [List Object Storage bucket contents](https://techdocs.akamai.com/linode-api/reference/get-object-storage-bucket-content) operation to access all object names in a bucket.")
}
```

### put_object_storage_bucket_acl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)."),
  "name": z.string().describe("The name of the object where access control list (ACL) settings will be updated. Run the [List Object Storage bucket contents](https://techdocs.akamai.com/linode-api/reference/get-object-storage-bucket-content) operation to access all object names in a bucket.")
}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_obj

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_objec

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_bucket_content

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "marker": z.string().describe("The \"marker\" for this request, which can be used to paginate through large buckets. Its value should be the value of the \`next_marker\` property returned with the last page. Listing bucket contents _does not_ support arbitrary page access. See the \`next_marker\` property in the responses section for more details.").optional(),
  "delimiter": z.string().describe("The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the \`/\` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with \`prefix\` to see object names past the first occurrence of the delimiter.").optional(),
  "prefix": z.string().describe("Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with \`delimiter\` to allow transversal of bucket contents in a manner similar to a filesystem.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_obj

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_objec

**Environment variables**



**Input schema**

```ts
{}
```

### post_object_storage_object_url

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "content_type": z.string().nullable().describe("The expected \`Content-type\` header of the request this signed URL will be valid for.  If provided, the \`Content-type\` header _must_ be sent with the request when this URL is used, and _must_ be the same as it was when the signed URL was created. Required for all methods _except_ \`GET\` or \`DELETE\`.").optional(),
  "expires_in": z.number().int().gte(360).lte(86400).nullable().describe("How long this signed URL will be valid for, in seconds.  If omitted, the URL will be valid for 3600 seconds (1 hour).").optional(),
  "method": z.string().describe("The HTTP method allowed to be used with the pre-signed URL."),
  "name": z.string().describe("The name of the object that will be accessed with the pre-signed URL. This object need not exist, and no error will be returned if it doesn't. This behavior is useful for generating pre-signed URLs to upload new objects to by setting the \`method\` to \`PUT\`.")
}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_obj

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_objec

**Environment variables**



**Input schema**

```ts
{}
```

### post_object_storage_ssl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "certificate": z.string().describe("Your Base64 encoded and PEM formatted SSL certificate.\n\nLine breaks must be represented as \`\\n\` in the string for requests (but not when using the Linode CLI)"),
  "private_key": z.string().describe("The private key associated with this TLS/SSL certificate.\n\nLine breaks must be represented as \`\\n\` in the string for requests (but not when using the Linode CLI)")
}
```

### get_object_storage_ssl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_object_storage_ssl

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_buckets_regionid_bucket_ssl

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_buckets_regionid_bucket_ssl

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_buckets_regionid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_cancel_object_storage

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_cancel

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_clusters

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_cluster

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_clusters_clusterid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_clusters_clusterid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_clusters_clusteri

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_endpoints

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_endpoints

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_endpoints

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_endpoints

**Environment variables**



**Input schema**

```ts
{}
```

### post_object_storage_keys

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "bucket_access": z.array(z.object({ "bucket_name": z.string().describe("The \`label\` set for a bucket that this key grants access to.").optional(), "permissions": z.enum(["read_write","read_only"]).describe("The level of access the key grants to the specified \`bucket_name\`. Keys with \`read_write\` access can manage content in the \`bucket_name\`, while \`read_only\` can be used to view content. See [Create an Object Storage key]((ref:post-object-storage-keys) for more details.").optional(), "region": z.string().describe("The region where the \`bucket_name\` you want the key to access is located.\n\n> 📘\n>\n> If you repeat the same \`region\` across objects, the response includes a single \`s3_endpoint\` for this region. Use it to access all \`bucket_name\` entries.").optional() }).strict()).describe("Set up the key to limit access to specific buckets, each with a specific permission level. You can create a limited Object Storage key with access to no buckets. Include an empty \`bucket_access\` array in the request.").optional(),
  "label": z.string().describe("The label for the Object Storage key, for display purposes only.").optional(),
  "regions": z.array(z.string()).describe("You can use a key to create new buckets in regions set in this array. But it can't be used to manage content in those buckets. See [Create an Object Storage key](https://techdocs.akamai.com/linode-api/reference/post-object-storage-keys) for more details.").optional()
}
```

### get_object_storage_keys

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_keys

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_keys

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_keys

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_key

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_object_storage_key

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "label": z.string().describe("The label for the Object Storage key. Used for display purposes. Omit this to leave the \`label\` unchanged.").optional(),
  "regions": z.array(z.string()).describe("Replace the current list of \`regions\` set in a specific key. Include an existing region to maintain it or leave it out to remove it. If you include new \`regions\` in the key, they can't be used to manage content in buckets in that specific region. You can grant these keys this access using [bucket policies](https://www.linode.com/docs/products/storage/object-storage/guides/bucket-policies/). Omit this to leave the existing list unchanged.\n\n> 🚧\n>\n> You can't remove a \`region\` from a limited key's original \`bucket_access\` list. If you include the \`regions\` array in this operation, you need to include all existing \`region\` entries from the \`bucket_access\` array. Otherwise, the operation fails with an error. Run [Get an Object Storage key](https://techdocs.akamai.com/linode-api/reference/get-object-storage-key) to review current \`region\` entries in a limited key.").optional()
}
```

### delete_object_storage_key

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_keys_keyid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_keys_keyid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_keys_keyid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_transfer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_transfer

**Environment variables**



**Input schema**

```ts
{}
```

### get_object_storage_types

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiversion_object_storage_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_object_storage_types

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_object_storage_types

**Environment variables**



**Input schema**

```ts
{}
```

### post_placement_group

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_placement_groups

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_placement_groups

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_placement_groups

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_placement_groups

**Environment variables**



**Input schema**

```ts
{}
```

### get_placement_group

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_placement_group

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "label": z.string().min(1).describe("A unique name for the placement group. A placement group \`label\` has the following constraints:\n\n- It needs to begin and end with an alphanumeric character.\n- It can only consist of alphanumeric characters, hyphens (\`-\`), underscores (\`_\`), or periods (\`.\`).").optional()
}
```

### delete_placement_group

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_placement_groups_groupid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_placement_groups_groupid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_placement_groups_groupid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_group_add_linode

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "linodes": z.array(z.number().int()).describe("The \`linodeId\` values for individual compute instances included in the placement group.").optional()
}
```

### parameters_apiversion_placement_groups_groupid_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_placement_groups_groupid_assign

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_placement_groups_groupid_assign

**Environment variables**



**Input schema**

```ts
{}
```

### post_group_unassign

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "linodes": z.array(z.number().int()).describe("The \`linodeId\` values for individual compute instances included in the placement group.").optional()
}
```

### parameters_apiversion_placement_groups_groupid_unassign

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_placement_groups_groupid_unassign

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_placement_groups_groupid_unassig

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_profile

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "authentication_type": z.enum(["password","github"]).describe("__Read-only__ This account's Cloud Manager authentication type. You choose an authentication type in Cloud Manager and Akamai authorizes it when you log into your account. Authentication types include your user's password (in conjunction with your username), or the name of your identity provider, such as GitHub. Here are some examples:\n\n- If a user has never used third-party authentication, the authentication type will be \`password\`.\n\n- If a user is using third-party authentication, the name of their identity provider is used for the authentication type, for example, \`github\`.\n\n- If a user has used third-party authentication and has since revoked it, the authentication type is \`password\`.").readonly().optional(),
  "authorized_keys": z.array(z.string()).nullable().describe("Your user can use these SSH Keys to access Lish. This value is ignored if \`lish_auth_method\` is \`disabled\`.").optional(),
  "email": z.string().email().describe("Your email address. We use this address for Akamai Cloud Computing-related communication.").optional(),
  "email_notifications": z.boolean().describe("When set to \`true\`, you will receive email notifications about account activity. When \`false\`, you may still receive business-critical communications through email.").optional(),
  "lish_auth_method": z.enum(["password_keys","keys_only","disabled"]).describe("The authentication methods that you can use when connecting to the [Linode Shell (Lish)](https://www.linode.com/docs/guides/lish/).\n\n- \`keys_only\` is the most secure if you intend to use Lish.\n\n- \`disabled\` is recommended if you don't want to use Lish.\n\n- If this account's Cloud Manager authentication type is set to a third-party authentication method, you can't use \`password_keys\` as your Lish authentication method. Run the [Get a profile](https://techdocs.akamai.com/linode-api/reference/get-profile) operation to view your account's Cloud Manager \`authentication_type\` field.").optional(),
  "referrals": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n__Read-only__ Information about your status in our referral program. The API makes this information available after this profile's account has established at least $25.00 USD of total payments.").optional(),
  "restricted": z.boolean().describe("When set to \`true\`, there are restrictions on what your user can access on your account. Run [List grants](https://techdocs.akamai.com/linode-api/reference/get-profile-grants) to get details on what entities and actions you can access and perform.").optional(),
  "timezone": z.string().describe("The time zone you want to display for your Linode assets. This API doesn't directly use this time zone. It's provided for the benefit of clients such as the Akamai Cloud Manager and other clients built on the API. All times returned by the API are in UTC.").optional(),
  "two_factor_auth": z.boolean().describe("When set to \`true\`, a login from an untrusted computer requires two-factor authentication. You also need to run [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) to enable two-factor authentication.").optional(),
  "uid": z.number().int().describe("__Read-only__ Your unique ID in our system. This value will never change, and can safely be used to identify your user.").readonly().optional(),
  "username": z.string().describe("__Read-only__ Your username, used for logging in to our system.").readonly().optional(),
  "verified_phone_number": z.string().nullable().describe("__Read-only__ The phone number verified for this profile with the [Verify a phone number](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number-verify) operation. Displayed as \`null\` if the profile doesn't have a verified phone number.").readonly().optional()
}
```

### parameters_apiversion_profile

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile_apps

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("The page of a collection to return.").optional(),
  "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.").optional()
}
```

### parameters_apiversion_profile_apps

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_apps

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_apps

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile_app

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_profile_app

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_apps_appid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_apps_appid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_apps_appid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_devices

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_devices

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_devices

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_devices

**Environment variables**



**Input schema**

```ts
{}
```

### get_trusted_device

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### delete_trusted_device

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_devices_deviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_devices_deviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_devices_deviceid_

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile_grants

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_grants

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_grants

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_grants

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile_logins

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_logins

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_logins

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_logins

**Environment variables**



**Input schema**

```ts
{}
```

### get_profile_login

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_logins_loginid_

**Environment variables**



**Input schema**

```ts
{}
```

### post_profile_phone_number

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "iso_code": z.string().describe("The two-letter ISO 3166 country code associated with the phone number."),
  "phone_number": z.string().describe("A valid phone number.")
}
```

### delete_profile_phone_number

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_phone_number

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_phone_number

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_phone_number

**Environment variables**



**Input schema**

```ts
{}
```

### post_profile_phone_number_verify

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "otp_code": z.string().describe("The one-time code received via SMS message after running the [Send a phone number verification code](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number) operation.")
}
```

### parameters_apiversion_profile_phone_number_verify

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_phone_number_verify

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_phone_number_verify

**Environment variables**



**Input schema**

```ts
{}
```

### get_user_preferences

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### put_user_preferences

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### parameters_apiversion_profile_preferences

**Environment variables**



**Input schema**

```ts
{}
```

### x_akamai_apiversion_profile_preferences

**Environment variables**



**Input schema**

```ts
{}
```

### x_linode_cli_command_apiversion_profile_preferences

**Environment variables**



**Input schema**

```ts
{}
```

### post_security_questions

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "security_questions": z.array(z.object({ "question_id": z.number().int().describe("The ID representing the security question.").optional(), "response": z.string().min(3).max(17).describe("The security question response.").optional(), "security_question": z.string().describe("__Read-only__ The security question.").readonly().optional() }).strict().describe("Single security question and response object for POST operation.")).describe("Security questions and response objects.").optional()
}
```
