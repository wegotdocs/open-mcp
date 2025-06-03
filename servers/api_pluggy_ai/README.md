# @open-mcp/api_pluggy_ai

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_pluggy_ai": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_pluggy_ai@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_pluggy_ai@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_pluggy_ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_pluggy_ai \
  .cursor/mcp.json \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add api_pluggy_ai \
  /path/to/client/config.json \
  --X_API_KEY=$X_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_pluggy_ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_pluggy_ai"],
      "env": {"X_API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `X_API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### auth_create

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `clientSecret` (string)

### connect_token_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)
- `options` (object)

### connectors_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `countries` (array)
- `types` (array)
- `name` (string)
- `sandbox` (boolean)
- `healthDetails` (boolean)
- `isOpenFinance` (boolean)
- `supportsPaymentInitiation` (boolean)

### connector_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (number)
- `healthDetails` (boolean)

### connectors_validate

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (number)

### items_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `connectorId` (number)
- `parameters` (other)
- `webhookUrl` (string)
- `clientUserId` (string)
- `oauthRedirectUri` (string)
- `products` (array)
- `avoidDuplicates` (boolean)

### items_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### items_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `parameters` (other)
- `clientUserId` (string)
- `webhookUrl` (string)
- `products` (array)

### items_delete

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### items_send_mfa

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### items_disable_autosync

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### consents_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)

### consent_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### accounts_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)
- `type` (string)

### accounts_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### transactions_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `accountId` (string)
- `ids` (array)
- `from` (string)
- `to` (string)
- `pageSize` (number)
- `page` (number)
- `billId` (string)
- `createdAtFrom` (string)

### transactions_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### transactions_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `categoryId` (string)

### investments_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)
- `type` (string)
- `pageSize` (number)
- `page` (number)

### investments_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### investment_transactions_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `pageSize` (number)
- `page` (number)

### identity_find_by_item

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)

### identity_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### webhooks_list

**Environment variables**

- `X_API_KEY`

**Input schema**

No input parameters

### webhooks_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `url` (string)
- `event` (string)
- `headers` (object)

### webhooks_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### webhooks_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `url` (string)
- `event` (string)
- `headers` (object)

### webhooks_delete

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### categories_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `parentId` (string)

### categories_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### client_category_rules_list

**Environment variables**

- `X_API_KEY`

**Input schema**

No input parameters

### client_category_rules_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `description` (string)
- `categoryId` (string)
- `transactionType` (string)
- `accountType` (string)
- `matchType` (string)

### loans_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)

### loans_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### bills_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `accountId` (string)

### bills_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_customers_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pageSize` (number)
- `page` (number)
- `name` (string)
- `email` (string)
- `cpf` (string)
- `cnpj` (string)

### payment_customer_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `type` (string)
- `name` (string)
- `email` (string)
- `cpf` (string)
- `cnpj` (string)

### payment_customer_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_customer_delete

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_customer_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `b_id` (string)
- `type` (string)
- `name` (string)
- `email` (string)
- `cpf` (string)
- `cnpj` (string)

### payment_recipients_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pageSize` (number)
- `page` (number)
- `isDefault` (boolean)
- `pixKey` (string)
- `name` (string)

### payment_recipient_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `taxNumber` (string)
- `name` (string)
- `paymentInstitutionId` (string)
- `account` (string)
- `pixKey` (string)

### payment_recipient_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_recipient_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `taxNumber` (string)
- `name` (string)
- `paymentInstitutionId` (string)
- `account` (string)
- `pixKey` (string)

### payment_recipient_delete

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_recipients_institution_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pageSize` (number)
- `page` (number)
- `name` (string)

### payment_recipient_institutions_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_requests_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pageSize` (number)
- `page` (number)
- `from` (string)
- `to` (string)
- `customer` (string)
- `pixKey` (string)

### payment_request_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `amount` (number)
- `description` (string)
- `callbackUrls` (object)
- `recipientId` (string)
- `customerId` (string)
- `clientPaymentId` (string)
- `schedule` (other)

### payment_request_create_pix_qr

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pixQrCode` (string)
- `callbackUrls` (object)
- `customerId` (string)

### payment_request_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_request_delete

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_request_update

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `amount` (number)
- `description` (string)
- `callbackUrls` (object)
- `recipientId` (string)
- `customerId` (string)
- `clientPaymentId` (string)

### payment_schedules_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_schedules_cancel

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### payment_schedules_cancel_specific

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
- `scheduleId` (string)

### payment_intent_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `paymentRequestId` (string)
- `parameters` (object)
- `connectorId` (number)
- `paymentMethod` (string)
- `isDynamicPix` (boolean)

### payment_intents_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `paymentRequestId` (string)

### payment_intent_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### smart_tranfers_preauthorizations_list

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pageSize` (number)
- `page` (number)

### smart_transfer_preauthorization_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `connectorId` (number)
- `parameters` (object)
- `recipientIds` (array)
- `callbackUrls` (object)
- `clientPreauthorizationId` (string)

### smart_transfer_preauthorization_retrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### smart_transfer_payment_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `preauthorizationId` (string)
- `recipientId` (string)
- `amount` (number)
- `description` (string)
- `clientPaymentId` (string)

### smart_transfer_paymentretrieve

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### boleto_connection_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `connectorId` (integer)
- `credentials` (object)

### boleto_connection_create_from_item

**Environment variables**

- `X_API_KEY`

**Input schema**

- `itemId` (string)

### boleto_create

**Environment variables**

- `X_API_KEY`

**Input schema**

- `boletoConnectionId` (string)
- `boleto` (object)

### boleto_cancel

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)

### boleto_get

**Environment variables**

- `X_API_KEY`

**Input schema**

- `id` (string)
