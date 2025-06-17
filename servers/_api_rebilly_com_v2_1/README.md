# @open-mcp/_api_rebilly_com_v2_1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_api_rebilly_com_v2_1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_api_rebilly_com_v2_1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_api_rebilly_com_v2_1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
REB_APIKEY='...'
REB_AUTH='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _api_rebilly_com_v2_1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --REB_APIKEY=$REB_APIKEY \
  --REB_AUTH=$REB_AUTH
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _api_rebilly_com_v2_1 \
  .cursor/mcp.json \
  --REB_APIKEY=$REB_APIKEY \
  --REB_AUTH=$REB_AUTH
```

### Other

```bash
npx @open-mcp/config add _api_rebilly_com_v2_1 \
  /path/to/client/config.json \
  --REB_APIKEY=$REB_APIKEY \
  --REB_AUTH=$REB_AUTH
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_api_rebilly_com_v2_1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_api_rebilly_com_v2_1"],
      "env": {"REB_APIKEY":"...","REB_AUTH":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `REB_APIKEY` - gets sent to the API provider
- `REB_AUTH` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_3dsecure

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_3dsecure

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `gatewayAccountId` (string)
- `paymentCardId` (string)
- `websiteId` (string)
- `enrolled` (string)
- `enrollmentEci` (string)
- `eci` (integer)
- `cavv` (string)
- `xid` (string)
- `payerAuthResponseStatus` (string)
- `signatureVerification` (string)
- `amount` (number)
- `currency` (string)
- `createdTime` (string)
- `_links` (array)

### parameters_3dsecure_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_3dsecure_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_activation_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_activation_token_

**Environment variables**

- `REB_AUTH`

**Input schema**

No input parameters

### get_api_keys

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_api_keys

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `description` (string)
- `datetimeFormat` (string)
- `apiUser` (string)
- `secretKey` (string)
- `createdTime` (string)
- `_links` (array)

### parameters_api_keys_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_api_keys_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_api_keys_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `description` (string)
- `datetimeFormat` (string)
- `apiUser` (string)
- `secretKey` (string)
- `createdTime` (string)
- `_links` (array)

### delete_api_keys_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_attachments

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `expand` (string)
- `fields` (string)
- `sort` (array)

### post_attachments

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `fileId` (string)
- `relatedType` (string)
- `relatedId` (string)
- `name` (string)
- `description` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_attachments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_attachments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_attachments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `fileId` (string)
- `relatedType` (string)
- `relatedId` (string)
- `name` (string)
- `description` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_attachments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_authentication_options

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_authentication_options

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `passwordPattern` (string)
- `credentialTtl` (integer)
- `authTokenTtl` (integer)
- `resetTokenTtl` (integer)

### get_authentication_tokens

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_authentication_tokens

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `token` (string)
- `username` (string)
- `password` (string)
- `credentialId` (string)
- `customerId` (string)
- `expiredTime` (string)
- `_links` (array)

### parameters_authentication_tokens_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_authentication_tokens_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### delete_authentication_tokens_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_bank_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_bank_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `bankName` (string)
- `routingNumber` (string)
- `accountNumber` (string)
- `accountType` (string)
- `token` (string)
- `address` (string)
- `status` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_bank_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_bank_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_bank_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `bankName` (string)
- `routingNumber` (string)
- `accountNumber` (string)
- `accountType` (string)
- `token` (string)
- `address` (string)
- `status` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_bank_accounts_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_bank_accounts_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_blacklists

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_blacklists

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `type` (string)
- `value` (string)
- `expiredTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_blacklists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_blacklists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_blacklists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `type` (string)
- `value` (string)
- `expiredTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_blacklists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_checkout_pages

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_checkout_pages

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `planId` (string)
- `websiteId` (string)
- `uriPath` (string)
- `name` (string)
- `isActive` (boolean)
- `redirectUrl` (string)
- `redirectTimeout` (integer)
- `allowCustomCustomerId` (boolean)
- `_links` (array)

### parameters_checkout_pages_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_checkout_pages_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_checkout_pages_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `planId` (string)
- `websiteId` (string)
- `uriPath` (string)
- `name` (string)
- `isActive` (boolean)
- `redirectUrl` (string)
- `redirectTimeout` (integer)
- `allowCustomCustomerId` (boolean)
- `_links` (array)

### delete_checkout_pages_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_contacts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_contacts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `firstName` (string)
- `lastName` (string)
- `organization` (string)
- `address` (string)
- `address2` (string)
- `city` (string)
- `region` (string)
- `country` (string)
- `postalCode` (string)
- `phoneNumbers` (array)
- `emails` (array)
- `isOutdated` (boolean)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_contacts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_contacts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_contacts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `firstName` (string)
- `lastName` (string)
- `organization` (string)
- `address` (string)
- `address2` (string)
- `city` (string)
- `region` (string)
- `country` (string)
- `postalCode` (string)
- `phoneNumbers` (array)
- `emails` (array)
- `isOutdated` (boolean)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### delete_contacts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_coupons_redemptions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `criteria` (string)
- `sort` (array)

### post_coupons_redemptions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `redemptionCode` (string)
- `customerId` (string)
- `additionalRestrictions` (array)
- `redeemedTime` (string)
- `canceledTime` (string)
- `_links` (array)

### parameters_coupons_redemptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_coupons_redemptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_coupons_redemptions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_coupons_redemptions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_coupons

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `criteria` (string)
- `sort` (array)

### post_coupons

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `redemptionCode` (string)
- `discount` (object)
- `restrictions` (array)
- `redemptionsCount` (integer)
- `status` (string)
- `description` (string)
- `issuedTime` (string)
- `expiredTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_coupons_redemptioncode_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_coupons_redemptioncode_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_coupons_redemptioncode_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `redemptionCode` (string)
- `discount` (object)
- `restrictions` (array)
- `redemptionsCount` (integer)
- `status` (string)
- `description` (string)
- `issuedTime` (string)
- `expiredTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_coupons_redemptioncode_expiration

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_coupons_redemptioncode_expiration

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `expiredTime` (string)

### post_credential_hashes_emails

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `hash` (string)
- `host` (string)
- `port` (integer)
- `encryption` (string)
- `auth` (object)
- `_links` (array)

### parameters_credential_hashes_emails_hash_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_credential_hashes_emails_hash_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_credential_hashes_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `hash` (string)
- `host` (string)
- `auth` (object)

### parameters_credential_hashes_webhooks_hash_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_credential_hashes_webhooks_hash_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_credentials

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_credentials

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `username` (string)
- `password` (string)
- `customerId` (string)
- `expiredTime` (string)
- `_links` (array)

### parameters_credentials_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_credentials_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_credentials_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `username` (string)
- `password` (string)
- `customerId` (string)
- `expiredTime` (string)
- `_links` (array)

### delete_credentials_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `sort` (array)

### post_custom_events

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `eventType` (string)
- `title` (string)
- `description` (string)
- `chronology` (string)
- `scheduleInstruction` (object)
- `createdTime` (string)
- `rulesCount` (integer)

### parameters_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `eventType` (string)
- `title` (string)
- `description` (string)
- `chronology` (string)
- `scheduleInstruction` (object)
- `createdTime` (string)
- `rulesCount` (integer)

### delete_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_custom_events_id_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events_id_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_custom_events_id_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `version` (integer)
- `rules` (array)
- `updatedTime` (string)
- `_links` (array)

### parameters_custom_events_id_rules_history

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events_id_rules_history

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `sort` (array)
- `fields` (string)
- `expand` (string)

### parameters_custom_events_id_rules_history_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events_id_rules_history_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `fields` (string)
- `expand` (string)

### parameters_custom_events_id_rules_versions_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_events_id_rules_versions_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `fields` (string)
- `expand` (string)

### parameters_custom_fields_resource_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_fields_resource_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_custom_fields_resource_name_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_custom_fields_resource_name_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_custom_fields_resource_name_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `name` (string)
- `type` (string)
- `description` (string)
- `isUsed` (boolean)
- `additionalSchema` (other)
- `_links` (array)

### delete_custom_fields_resource_name_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_customers

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `expand` (string)
- `fields` (string)
- `sort` (array)
- `Accept` (string)

### post_customers

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `defaultPaymentInstrument` (object)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `primaryAddress` (object)
- `_links` (array)

### parameters_customers_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_customers_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_customers_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `defaultPaymentInstrument` (object)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `primaryAddress` (object)
- `_links` (array)

### parameters_customers_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_customers_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_customers_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `medium` (string)
- `source` (string)
- `campaign` (string)
- `term` (string)
- `content` (string)
- `affiliate` (string)
- `subAffiliate` (string)
- `salesAgent` (string)
- `clickId` (string)
- `path` (string)
- `ipAddress` (string)
- `currency` (string)
- `amount` (number)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_customers_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_disputes

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_disputes

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `transactionId` (string)
- `currency` (string)
- `amount` (number)
- `acquirerReferenceNumber` (string)
- `reasonCode` (string)
- `category` (string)
- `type` (string)
- `status` (string)
- `postedTime` (string)
- `deadlineTime` (string)
- `rawResponse` (string)
- `resolvedTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_disputes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_disputes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_disputes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `transactionId` (string)
- `currency` (string)
- `amount` (number)
- `acquirerReferenceNumber` (string)
- `reasonCode` (string)
- `category` (string)
- `type` (string)
- `status` (string)
- `postedTime` (string)
- `deadlineTime` (string)
- `rawResponse` (string)
- `resolvedTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### get_events

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_events_eventtype_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_events_eventtype_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_events_eventtype_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_events_eventtype_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_events_eventtype_rules

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `version` (integer)
- `rules` (array)
- `updatedTime` (string)
- `_links` (array)

### parameters_events_eventtype_rules_history

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_events_eventtype_rules_history

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `sort` (array)
- `fields` (string)
- `expand` (string)

### parameters_events_eventtype_rules_history_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_events_eventtype_rules_history_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `fields` (string)
- `expand` (string)

### parameters_events_eventtype_rules_versions_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_events_eventtype_rules_versions_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `fields` (string)
- `expand` (string)

### get_files

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `expand` (string)
- `fields` (string)
- `sort` (array)

### post_files

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `url` (string)

### parameters_files_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_files_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_files_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `extension` (string)
- `description` (string)
- `url` (string)
- `tags` (array)
- `mime` (string)
- `size` (integer)
- `width` (integer)
- `height` (integer)
- `sha1` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_files_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_files_id_download

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_files_id_download

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_files_id_download_extension_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_files_id_download_extension_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_forgot_password

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `email` (string)

### get_gateway_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_gateway_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `status` (string)
- `gatewayName` (string)
- `acquirerName` (string)
- `merchantCategoryCode` (integer)
- `dccMarkup` (integer)
- `descriptor` (string)
- `cityField` (string)
- `organizationId` (string)
- `websites` (array)
- `excludedDccQuoteCurrencies` (array)
- `monthlyLimit` (integer)
- `threeDSecure` (boolean)
- `dynamicDescriptor` (boolean)
- `acceptedCurrencies` (array)
- `method` (string)
- `paymentCardSchemes` (array)
- `downtimeStart` (string)
- `downtimeEnd` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_gateway_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_gateway_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_gateway_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `status` (string)
- `gatewayName` (string)
- `acquirerName` (string)
- `merchantCategoryCode` (integer)
- `dccMarkup` (integer)
- `descriptor` (string)
- `cityField` (string)
- `organizationId` (string)
- `websites` (array)
- `excludedDccQuoteCurrencies` (array)
- `monthlyLimit` (integer)
- `threeDSecure` (boolean)
- `dynamicDescriptor` (boolean)
- `acceptedCurrencies` (array)
- `method` (string)
- `paymentCardSchemes` (array)
- `downtimeStart` (string)
- `downtimeEnd` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### patch_gateway_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `status` (string)
- `gatewayName` (string)
- `acquirerName` (string)
- `merchantCategoryCode` (integer)
- `dccMarkup` (integer)
- `descriptor` (string)
- `cityField` (string)
- `organizationId` (string)
- `websites` (array)
- `excludedDccQuoteCurrencies` (array)
- `monthlyLimit` (integer)
- `threeDSecure` (boolean)
- `dynamicDescriptor` (boolean)
- `acceptedCurrencies` (array)
- `method` (string)
- `paymentCardSchemes` (array)
- `downtimeStart` (string)
- `downtimeEnd` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_gateway_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_invoices

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `Accept` (string)

### post_invoices

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `websiteId` (string)
- `organizationId` (string)
- `subscriptionId` (string)
- `currency` (string)
- `amount` (number)
- `shippingAmount` (number)
- `billingAddress` (string)
- `deliveryAddress` (string)
- `notes` (string)
- `items` (array)
- `taxes` (array)
- `discounts` (array)
- `status` (string)
- `delinquentCollectionPeriod` (integer)
- `collectionPeriod` (integer)
- `abandonedTime` (string)
- `voidedTime` (string)
- `paidTime` (string)
- `dueTime` (string)
- `issuedTime` (string)
- `createdTime` (string)
- `_links` (array)

### parameters_invoices_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_invoices_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `Accept` (string)

### put_invoices_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `websiteId` (string)
- `organizationId` (string)
- `subscriptionId` (string)
- `currency` (string)
- `amount` (number)
- `shippingAmount` (number)
- `billingAddress` (string)
- `deliveryAddress` (string)
- `notes` (string)
- `items` (array)
- `taxes` (array)
- `discounts` (array)
- `status` (string)
- `delinquentCollectionPeriod` (integer)
- `collectionPeriod` (integer)
- `abandonedTime` (string)
- `voidedTime` (string)
- `paidTime` (string)
- `dueTime` (string)
- `issuedTime` (string)
- `createdTime` (string)
- `_links` (array)

### parameters_invoices_id_abandon

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_invoices_id_abandon

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_invoices_id_issue

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_invoices_id_issue

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `issuedTime` (string)

### parameters_invoices_id_items

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_invoices_id_items

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_invoices_id_items

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `type` (string)
- `unitPrice` (number)
- `quantity` (integer)
- `productId` (string)
- `description` (string)
- `discountAmount` (number)
- `periodStartTime` (string)
- `periodEndTime` (string)
- `_links` (array)

### parameters_invoices_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_invoices_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_invoices_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `medium` (string)
- `source` (string)
- `campaign` (string)
- `term` (string)
- `content` (string)
- `affiliate` (string)
- `subAffiliate` (string)
- `salesAgent` (string)
- `clickId` (string)
- `path` (string)
- `ipAddress` (string)
- `currency` (string)
- `amount` (number)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_invoices_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_invoices_id_void

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_invoices_id_void

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_layouts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_layouts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `items` (array)
- `createdTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_layouts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_layouts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_layouts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `items` (array)
- `createdTime` (string)
- `customFields` (object)
- `_links` (array)

### delete_layouts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_lists

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `criteria` (string)
- `sort` (array)

### post_lists

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `version` (integer)
- `name` (string)
- `values` (array)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_lists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_lists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_lists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `version` (integer)
- `name` (string)
- `values` (array)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_lists_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_lists_id_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_lists_id_version_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_notes

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_notes

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `createdBy` (string)
- `content` (string)
- `archived` (boolean)
- `relatedType` (string)
- `relatedId` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `archivedTime` (string)
- `_links` (array)

### parameters_notes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_notes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_notes_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `createdBy` (string)
- `content` (string)
- `archived` (boolean)
- `relatedType` (string)
- `relatedId` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `archivedTime` (string)
- `_links` (array)

### get_organizations

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_organizations

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `name` (string)
- `address` (string)
- `address2` (string)
- `city` (string)
- `region` (string)
- `country` (string)
- `postalCode` (string)
- `_links` (array)

### parameters_organizations_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_organizations_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_organizations_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `name` (string)
- `address` (string)
- `address2` (string)
- `city` (string)
- `region` (string)
- `country` (string)
- `postalCode` (string)
- `_links` (array)

### delete_organizations_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_password_tokens

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_password_tokens

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `token` (string)
- `username` (string)
- `password` (string)
- `credential` (string)
- `expiredTime` (string)
- `_links` (array)

### parameters_password_tokens_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_password_tokens_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### delete_password_tokens_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_payment_cards_migrations

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_payment_cards_migrations_migrate

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `fromGatewayAccountId` (string)
- `toGatewayAccountId` (string)
- `paymentCardIds` (array)

### get_payment_cards

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_payment_cards

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `pan` (string)
- `bin` (string)
- `last4` (string)
- `expYear` (integer)
- `expMonth` (integer)
- `cvv` (string)
- `billingAddress` (string)
- `token` (string)
- `safeHash` (string)
- `status` (string)
- `brand` (string)
- `bankCountry` (string)
- `bankName` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_payment_cards_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_payment_cards_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### patch_payment_cards_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `cvv` (string)

### put_payment_cards_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `pan` (string)
- `bin` (string)
- `last4` (string)
- `expYear` (integer)
- `expMonth` (integer)
- `cvv` (string)
- `billingAddress` (string)
- `token` (string)
- `safeHash` (string)
- `status` (string)
- `brand` (string)
- `bankCountry` (string)
- `bankName` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_payment_cards_id_authorization

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_payment_cards_id_authorization

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `websiteId` (string)
- `currency` (string)
- `gatewayAccountId` (string)
- `amount` (number)

### parameters_payment_cards_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_payment_cards_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_payments

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `Accept` (string)

### post_payments

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `websiteId` (string)
- `customerId` (string)
- `currency` (string)
- `amount` (integer)
- `scheduledTime` (string)
- `invoiceIds` (array)
- `description` (string)
- `retryInstruction` (object)
- `retryNumber` (integer)
- `retriedPaymentId` (string)
- `customFields` (object)
- `paymentInstrument` (object)
- `billingAddress` (string)
- `createdBy` (string)
- `updatedBy` (string)
- `status` (string)
- `result` (string)
- `riskMetadata` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `websiteId` (string)
- `customerId` (string)
- `currency` (string)
- `amount` (integer)
- `scheduledTime` (string)
- `invoiceIds` (array)
- `description` (string)
- `retryInstruction` (object)
- `retryNumber` (integer)
- `retriedPaymentId` (string)
- `customFields` (object)
- `paymentInstrument` (object)
- `billingAddress` (string)
- `createdBy` (string)
- `updatedBy` (string)
- `status` (string)
- `result` (string)
- `riskMetadata` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### get_paypal_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_paypal_accounts

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `billingAddress` (string)
- `username` (string)
- `status` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_paypal_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_paypal_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_paypal_accounts_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `billingAddress` (string)
- `username` (string)
- `status` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_paypal_accounts_id_activation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_paypal_accounts_id_activation

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `websiteId` (string)
- `currency` (string)
- `amount` (number)
- `redirectURLs` (object)
- `gatewayAccountId` (string)

### parameters_paypal_accounts_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_paypal_accounts_id_deactivation

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_plans

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_plans

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `currency` (string)
- `currencySign` (string)
- `isActive` (boolean)
- `description` (string)
- `richDescription` (string)
- `recurringAmount` (number)
- `recurringPeriodUnit` (string)
- `recurringPeriodLength` (integer)
- `trialAmount` (number)
- `trialPeriodUnit` (string)
- `trialPeriodLength` (integer)
- `setupAmount` (number)
- `expiredTime` (string)
- `contractTermUnit` (string)
- `contractTermLength` (integer)
- `recurringPeriodLimit` (integer)
- `minQuantity` (integer)
- `maxQuantity` (integer)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_plans_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_plans_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_plans_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `currency` (string)
- `currencySign` (string)
- `isActive` (boolean)
- `description` (string)
- `richDescription` (string)
- `recurringAmount` (number)
- `recurringPeriodUnit` (string)
- `recurringPeriodLength` (integer)
- `trialAmount` (number)
- `trialPeriodUnit` (string)
- `trialPeriodLength` (integer)
- `setupAmount` (number)
- `expiredTime` (string)
- `contractTermUnit` (string)
- `contractTermLength` (integer)
- `recurringPeriodLimit` (integer)
- `minQuantity` (integer)
- `maxQuantity` (integer)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_plans_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_previews_rule_actions_send_email

**Environment variables**

- `REB_AUTH`

**Input schema**

No input parameters

### post_previews_rule_actions_trigger_webhook

**Environment variables**

- `REB_AUTH`

**Input schema**

No input parameters

### post_previews_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `eventsFilter` (array)
- `status` (string)
- `method` (string)
- `url` (string)
- `headers` (object)
- `credentialHash` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### get_products

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_products

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `taxCategoryId` (string)
- `requiresShipping` (boolean)
- `accountingCode` (string)
- `customFields` (object)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_products_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_products_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_products_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `taxCategoryId` (string)
- `requiresShipping` (boolean)
- `accountingCode` (string)
- `customFields` (object)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_products_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_profile

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_profile

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `businessPhone` (string)
- `mobilePhone` (string)
- `availableCurrencies` (array)
- `reportingCurrency` (string)
- `totpRequired` (boolean)
- `totpSecret` (string)
- `totpUrl` (string)
- `country` (string)
- `preferences` (object)

### post_profile_password

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `currentPassword` (string)
- `newPassword` (string)

### post_profile_totp_reset

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_queue_custom_events

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### parameters_queue_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_queue_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### delete_queue_custom_events_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_queue_payments

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### parameters_queue_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_queue_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_queue_payments_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `websiteId` (string)
- `customerId` (string)
- `currency` (string)
- `amount` (integer)
- `scheduledTime` (string)
- `invoiceIds` (array)
- `description` (string)
- `retryInstruction` (object)
- `retryNumber` (integer)
- `retriedPaymentId` (string)
- `customFields` (object)
- `paymentInstrument` (object)
- `billingAddress` (string)
- `createdBy` (string)
- `updatedBy` (string)
- `status` (string)
- `result` (string)
- `riskMetadata` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### get_sessions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_sessions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `token` (string)
- `permissions` (string)
- `userId` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `expiredTime` (string)
- `_links` (array)

### parameters_sessions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_sessions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_sessions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `token` (string)
- `permissions` (string)
- `userId` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `expiredTime` (string)
- `_links` (array)

### delete_sessions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_shipping_zones

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_shipping_zones

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `countries` (array)
- `rates` (array)
- `isDefault` (other)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_shipping_zones_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_shipping_zones_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_shipping_zones_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `countries` (array)
- `rates` (array)
- `isDefault` (other)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_shipping_zones_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_signin

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)
- `expiredTime` (string)

### post_signup

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `email` (string)
- `company` (string)
- `firstName` (string)
- `lastName` (string)
- `businessPhone` (string)
- `password` (string)
- `website` (string)
- `currencies` (array)
- `merchantCategoryCode` (integer)

### get_status

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_subscriptions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `Accept` (string)

### post_subscriptions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `planId` (string)
- `websiteId` (string)
- `initialInvoiceId` (string)
- `deliveryAddress` (string)
- `billingAddress` (string)
- `status` (string)
- `quantity` (integer)
- `autopay` (boolean)
- `inTrial` (boolean)
- `rebillNumber` (integer)
- `canceledBy` (string)
- `cancelCategory` (string)
- `cancelDescription` (string)
- `riskMetadata` (string)
- `startTime` (string)
- `activationTime` (string)
- `endTime` (string)
- `renewalTime` (string)
- `canceledTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_subscriptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_subscriptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_subscriptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `customerId` (string)
- `planId` (string)
- `websiteId` (string)
- `initialInvoiceId` (string)
- `deliveryAddress` (string)
- `billingAddress` (string)
- `status` (string)
- `quantity` (integer)
- `autopay` (boolean)
- `inTrial` (boolean)
- `rebillNumber` (integer)
- `canceledBy` (string)
- `cancelCategory` (string)
- `cancelDescription` (string)
- `riskMetadata` (string)
- `startTime` (string)
- `activationTime` (string)
- `endTime` (string)
- `renewalTime` (string)
- `canceledTime` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_subscriptions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_subscriptions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `policy` (string)
- `canceledBy` (string)
- `cancelCategory` (string)
- `cancelDescription` (string)

### parameters_subscriptions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_subscriptions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_subscriptions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `medium` (string)
- `source` (string)
- `campaign` (string)
- `term` (string)
- `content` (string)
- `affiliate` (string)
- `subAffiliate` (string)
- `salesAgent` (string)
- `clickId` (string)
- `path` (string)
- `ipAddress` (string)
- `currency` (string)
- `amount` (number)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_subscriptions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_subscriptions_id_switch

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_subscriptions_id_switch

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `planId` (string)
- `policy` (string)
- `websiteId` (string)
- `quantity` (integer)

### get_tax_categories

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tokens

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_tokens

**Environment variables**

- `REB_AUTH`

**Input schema**

- `id` (string)
- `method` (string)
- `paymentInstrument` (object)
- `fingerprint` (string)
- `billingAddress` (string)
- `_links` (array)

### parameters_tokens_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tokens_token_

**Environment variables**

- `REB_AUTH`

**Input schema**

No input parameters

### parameters_tokens_token_expiration

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_tokens_token_expiration

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `method` (string)
- `paymentInstrument` (object)
- `fingerprint` (string)
- `billingAddress` (string)
- `_links` (array)

### get_tracking_api

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `Accept` (string)

### parameters_tracking_api_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_api_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_lists

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_tracking_subscriptions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### parameters_tracking_subscriptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_subscriptions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `sort` (array)
- `filter` (string)
- `criteria` (string)

### parameters_tracking_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_website_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### parameters_tracking_website_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_tracking_website_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_transactions

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `filter` (string)
- `q` (string)
- `criteria` (string)
- `sort` (array)
- `Accept` (string)

### parameters_transactions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_transactions_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_transactions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_transactions_id_cancel

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_transactions_id_gateway_logs

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_transactions_id_gateway_logs

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_transactions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_transactions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_transactions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `medium` (string)
- `source` (string)
- `campaign` (string)
- `term` (string)
- `content` (string)
- `affiliate` (string)
- `subAffiliate` (string)
- `salesAgent` (string)
- `clickId` (string)
- `path` (string)
- `ipAddress` (string)
- `currency` (string)
- `amount` (number)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### delete_transactions_id_lead_source

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_transactions_id_refund

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_transactions_id_refund

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `amount` (number)

### get_users

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_users

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `businessPhone` (string)
- `mobilePhone` (string)
- `password` (string)
- `permissions` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `loginTime` (string)
- `reportingCurrency` (string)
- `availableCurrencies` (array)
- `totpRequired` (boolean)
- `totpSecret` (string)
- `totpUrl` (string)
- `status` (string)
- `country` (string)
- `preferences` (object)
- `_links` (array)

### parameters_users_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_users_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_users_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `businessPhone` (string)
- `mobilePhone` (string)
- `password` (string)
- `permissions` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `loginTime` (string)
- `reportingCurrency` (string)
- `availableCurrencies` (array)
- `totpRequired` (boolean)
- `totpSecret` (string)
- `totpUrl` (string)
- `status` (string)
- `country` (string)
- `preferences` (object)
- `_links` (array)

### delete_users_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_users_id_password

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_users_id_password

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `currentPassword` (string)
- `newPassword` (string)

### parameters_users_id_totp_reset

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_users_id_totp_reset

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_users_reset_password_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### post_users_reset_password_token_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `newPassword` (string)

### get_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_webhooks

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `eventsFilter` (array)
- `status` (string)
- `method` (string)
- `url` (string)
- `headers` (object)
- `credentialHash` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### parameters_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_webhooks_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `eventsFilter` (array)
- `status` (string)
- `method` (string)
- `url` (string)
- `headers` (object)
- `credentialHash` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `_links` (array)

### get_websites

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `Accept` (string)

### post_websites

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `url` (string)
- `servicePhone` (string)
- `serviceEmail` (string)
- `checkoutPageUri` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### parameters_websites_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_websites_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_websites_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `id` (string)
- `name` (string)
- `url` (string)
- `servicePhone` (string)
- `serviceEmail` (string)
- `checkoutPageUri` (string)
- `createdTime` (string)
- `updatedTime` (string)
- `customFields` (object)
- `_links` (array)

### delete_websites_id_

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### parameters_websites_id_webhook

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### get_websites_id_webhook

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters

### put_websites_id_webhook

**Environment variables**

- `REB_APIKEY`

**Input schema**

- `webHookUrl` (string)
- `webHookUsername` (string)
- `webHookPassword` (string)

### delete_websites_id_webhook

**Environment variables**

- `REB_APIKEY`

**Input schema**

No input parameters
