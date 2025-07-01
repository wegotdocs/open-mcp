# @open-mcp/api_sandbox_asaas_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_sandbox_asaas_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_sandbox_asaas_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_sandbox_asaas_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
ACCESS_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_sandbox_asaas_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --ACCESS_TOKEN=$ACCESS_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_sandbox_asaas_com \
  .cursor/mcp.json \
  --ACCESS_TOKEN=$ACCESS_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_sandbox_asaas_com \
  /path/to/client/config.json \
  --ACCESS_TOKEN=$ACCESS_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_sandbox_asaas_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_sandbox_asaas_com"],
      "env": {"ACCESS_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `ACCESS_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### create_new_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `dueDate` (string)
- `description` (string)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `externalReference` (string)
- `installmentCount` (integer)
- `totalValue` (number)
- `installmentValue` (number)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `postalService` (boolean)
- `split` (array)
- `callback` (object)

### list_payments

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `installment` (string)
- `offset` (integer)
- `limit` (integer)
- `customer` (string)
- `customerGroupName` (string)
- `billingType` (string)
- `status` (string)
- `subscription` (string)
- `externalReference` (string)
- `paymentDate` (string)
- `invoiceStatus` (string)
- `estimatedCreditDate` (string)
- `pixQrCodeId` (string)
- `anticipated` (boolean)
- `anticipable` (boolean)
- `dateCreated[ge]` (string)
- `dateCreated[le]` (string)
- `paymentDate[ge]` (string)
- `paymentDate[le]` (string)
- `estimatedCreditDate[ge]` (string)
- `estimatedCreditDate[le]` (string)
- `dueDate[ge]` (string)
- `dueDate[le]` (string)
- `user` (string)

### create_new_payment_with_credit_card

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `dueDate` (string)
- `description` (string)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `externalReference` (string)
- `installmentCount` (integer)
- `totalValue` (number)
- `installmentValue` (number)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `postalService` (boolean)
- `split` (array)
- `callback` (object)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)
- `authorizeOnly` (boolean)
- `remoteIp` (string)

### capture_payment_with_pre_authorization

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### pay_a_charge_with_credit_card

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)

### retrieve_payment_billing_information

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### payment_viewing_information

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_a_single_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `billingType` (string)
- `value` (number)
- `dueDate` (string)
- `description` (string)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `externalReference` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `postalService` (boolean)
- `split` (array)
- `callback` (object)

### delete_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### restore_removed_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_status_of_a_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### refund_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `value` (number)
- `description` (string)

### get_digitable_bill_line

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### get_qr_code_for_pix_payments

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### confirm_cash_receipt

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `paymentDate` (string)
- `value` (number)
- `notifyCustomer` (boolean)

### undo_cash_receipt_confirmation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### sales_simulator

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `value` (number)
- `installmentCount` (integer)
- `billingTypes` (array)

### retrieve_payment_escrow_in_the_escrow_account

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### recovering_payment_limits

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### confirm_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### force_expire

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_new_payment_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `dueDate` (string)
- `description` (string)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `externalReference` (string)
- `installmentCount` (integer)
- `totalValue` (number)
- `installmentValue` (number)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `postalService` (boolean)
- `split` (array)
- `callback` (object)

### list_payments_with_summary_data

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `customer` (string)
- `customerGroupName` (string)
- `billingType` (string)
- `status` (string)
- `subscription` (string)
- `installment` (string)
- `externalReference` (string)
- `paymentDate` (string)
- `invoiceStatus` (string)
- `estimatedCreditDate` (string)
- `pixQrCodeId` (string)
- `anticipated` (boolean)
- `anticipable` (boolean)
- `dateCreated[ge]` (string)
- `dateCreated[le]` (string)
- `paymentDate[ge]` (string)
- `paymentDate[le]` (string)
- `estimatedCreditDate[ge]` (string)
- `estimatedCreditDate[le]` (string)
- `dueDate[ge]` (string)
- `dueDate[le]` (string)
- `user` (string)

### create_new_payment_with_credit_card_with_summary_data_in_respons

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `dueDate` (string)
- `description` (string)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `externalReference` (string)
- `installmentCount` (integer)
- `totalValue` (number)
- `installmentValue` (number)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `postalService` (boolean)
- `split` (array)
- `callback` (object)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)
- `authorizeOnly` (boolean)
- `remoteIp` (string)

### capture_payment_with_pre_authorization_with_summary_data_in_resp

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_a_single_payment_with_summary_data

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_payment_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### delete_payment_with_summary_data

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### restore_removed_payment_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### refund_payment_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `value` (number)
- `description` (string)

### confirm_cash_receipt_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `paymentDate` (string)
- `value` (number)
- `notifyCustomer` (boolean)

### undo_cash_receipt_confirmation_with_summary_data_in_response

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### credit_card_tokenization

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `remoteIp` (string)

### retrieve_refunds_of_a_single_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### refund_bank_slip

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_a_single_paid_split

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_paid_splits

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `paymentId` (string)
- `status` (string)
- `paymentConfirmedDate[ge]` (string)
- `paymentConfirmedDate[le]` (string)
- `creditDate[ge]` (string)
- `creditDate[le]` (string)

### retrieve_a_single_received_split

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_received_splits

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `paymentId` (string)
- `status` (string)
- `paymentConfirmedDate[ge]` (string)
- `paymentConfirmedDate[le]` (string)
- `creditDate[ge]` (string)
- `creditDate[le]` (string)

### finish_payment_escrow_in_the_escrow_account

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### upload_payment_documents

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_documents_of_a_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_settings_of_a_document_of_a_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `documentId` (string)
- `availableAfterPayment` (boolean)
- `type` (string)

### retrieve_a_single_document_of_a_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `documentId` (string)

### delete_document_from_a_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `documentId` (string)

### create_new_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `name` (string)
- `cpfCnpj` (string)
- `email` (string)
- `phone` (string)
- `mobilePhone` (string)
- `address` (string)
- `addressNumber` (string)
- `complement` (string)
- `province` (string)
- `postalCode` (string)
- `externalReference` (string)
- `notificationDisabled` (boolean)
- `additionalEmails` (string)
- `municipalInscription` (string)
- `stateInscription` (string)
- `observations` (string)
- `groupName` (string)
- `company` (string)
- `foreignCustomer` (boolean)

### list_customers

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `name` (string)
- `email` (string)
- `cpfCnpj` (string)
- `groupName` (string)
- `externalReference` (string)

### retrieve_a_single_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `cpfCnpj` (string)
- `email` (string)
- `phone` (string)
- `mobilePhone` (string)
- `address` (string)
- `addressNumber` (string)
- `complement` (string)
- `province` (string)
- `postalCode` (string)
- `externalReference` (string)
- `notificationDisabled` (boolean)
- `additionalEmails` (string)
- `municipalInscription` (string)
- `stateInscription` (string)
- `observations` (string)
- `groupName` (string)
- `company` (string)
- `foreignCustomer` (boolean)

### remove_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### restore_removed_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_notifications_from_a_customer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_notification

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `enabled` (boolean)
- `emailEnabledForProvider` (boolean)
- `smsEnabledForProvider` (boolean)
- `emailEnabledForCustomer` (boolean)
- `smsEnabledForCustomer` (boolean)
- `phoneCallEnabledForCustomer` (boolean)
- `whatsappEnabledForCustomer` (boolean)
- `scheduleOffset` (integer)

### update_existing_notifications_in_batch

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `notifications` (array)

### create_installment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `installmentCount` (integer)
- `customer` (string)
- `value` (number)
- `totalValue` (number)
- `billingType` (string)
- `dueDate` (string)
- `description` (string)
- `postalService` (boolean)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `paymentExternalReference` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `splits` (array)

### list_installments

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)

### create_installment_with_credit_card

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `installmentCount` (integer)
- `customer` (string)
- `value` (number)
- `totalValue` (number)
- `billingType` (string)
- `dueDate` (string)
- `description` (string)
- `postalService` (boolean)
- `daysAfterDueDateToRegistrationCancellation` (integer)
- `paymentExternalReference` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `splits` (array)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)
- `authorizeOnly` (boolean)
- `remoteIp` (string)

### retrieve_a_single_installment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### remove_installment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_payments_of_a_installment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `status` (string)

### generate_installment_booklet

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `sort` (string)
- `order` (string)

### refund_installment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_installment_splits

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `splits` (array)

### create_new_subscription

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `nextDueDate` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `cycle` (string)
- `description` (string)
- `endDate` (string)
- `maxPayments` (integer)
- `externalReference` (string)
- `split` (array)
- `callback` (object)

### list_subscriptions

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `customer` (string)
- `customerGroupName` (string)
- `billingType` (string)
- `status` (string)
- `deletedOnly` (string)
- `includeDeleted` (string)
- `externalReference` (string)
- `order` (string)
- `sort` (string)

### create_subscription_with_credit_card

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `value` (number)
- `nextDueDate` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `cycle` (string)
- `description` (string)
- `endDate` (string)
- `maxPayments` (integer)
- `externalReference` (string)
- `split` (array)
- `callback` (object)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)
- `remoteIp` (string)

### retrieve_a_single_subscription

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_subscription

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `billingType` (string)
- `status` (string)
- `nextDueDate` (string)
- `discount` (object)
- `interest` (object)
- `fine` (object)
- `cycle` (string)
- `description` (string)
- `endDate` (string)
- `updatePendingPayments` (boolean)
- `externalReference` (string)
- `split` (array)
- `callback` (object)

### remove_subscription

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_subscription_credit_card

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `creditCard` (object)
- `creditCardHolderInfo` (object)
- `creditCardToken` (string)
- `remoteIp` (string)

### list_payments_of_a_subscription

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `status` (string)

### generate_signature_booklet

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `month` (integer)
- `year` (integer)
- `sort` (string)
- `order` (string)

### create_configuration_for_issuance_of_invoices

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `municipalServiceId` (string)
- `municipalServiceCode` (string)
- `municipalServiceName` (string)
- `updatePayment` (boolean)
- `deductions` (number)
- `effectiveDatePeriod` (string)
- `receivedOnly` (boolean)
- `daysBeforeDueDate` (integer)
- `observations` (string)
- `taxes` (object)

### retrieve_configuration_for_issuance_of_invoices

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### remove_configuration_for_issuance_of_invoices

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_configuration_for_issuance_of_invoices

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `deductions` (number)
- `effectiveDatePeriod` (string)
- `receivedOnly` (boolean)
- `daysBeforeDueDate` (integer)
- `observations` (string)
- `taxes` (object)

### list_invoices_for_subscription_charges

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `offset` (integer)
- `limit` (integer)
- `effectiveDate[ge]` (string)
- `effectiveDate[le]` (string)
- `externalReference` (string)
- `status` (string)
- `customer` (string)

### create_a_key

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `type` (string)

### list_keys

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `status` (string)
- `statusList` (string)

### retrieve_a_single_key

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### remove_key

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_static_qrcode

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `addressKey` (string)
- `description` (string)
- `value` (number)
- `format` (string)
- `expirationDate` (string)
- `expirationSeconds` (integer)
- `allowsMultiplePayments` (boolean)
- `externalReference` (string)

### delete_static_qrcode

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### available_token_bucket_check

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### pay_a_qrcode

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `qrCode` (object)
- `value` (number)
- `description` (string)
- `scheduleDate` (string)

### decode_a_qrcode_for_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `payload` (string)
- `changeValue` (number)

### retrieve_a_single_transaction

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_a_single_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_transactions

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `status` (string)
- `type` (string)
- `endToEndIdentifier` (string)

### cancel_a_scheduled_transaction

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_recurrences

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `status` (string)
- `value` (number)
- `searchText` (string)

### retrieve_a_single_recurrence

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_a_recurrence

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_recurrence_items

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `offset` (integer)
- `limit` (integer)

### cancel_a_recurrence_item

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `endDate` (string)
- `value` (number)
- `billingType` (string)
- `chargeType` (string)
- `dueDateLimitDays` (integer)
- `subscriptionCycle` (string)
- `maxInstallmentCount` (integer)
- `externalReference` (string)
- `notificationEnabled` (boolean)
- `callback` (object)
- `isAddressRequired` (boolean)

### list_payments_links

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `active` (boolean)
- `includeDeleted` (boolean)
- `name` (string)
- `externalReference` (string)

### update_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `endDate` (string)
- `value` (number)
- `active` (boolean)
- `billingType` (string)
- `chargeType` (string)
- `dueDateLimitDays` (integer)
- `subscriptionCycle` (string)
- `maxInstallmentCount` (integer)
- `externalReference` (string)
- `notificationEnabled` (boolean)
- `callback` (object)

### retrieve_a_single_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### remove_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### restore_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### add_an_image_to_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_images_from_a_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_a_single_payments_link_image

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `paymentLinkId` (string)
- `imageId` (string)

### remove_an_image_from_payments_link

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `paymentLinkId` (string)
- `imageId` (string)

### set_payments_link_main_image

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `paymentLinkId` (string)
- `imageId` (string)

### create_new_checkout

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `billingTypes` (array)
- `chargeTypes` (array)
- `minutesToExpire` (integer)
- `callback` (object)
- `items` (array)
- `customerData` (object)
- `subscription` (object)
- `installment` (object)
- `splits` (array)

### cancel_a_checkout

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### transfer_to_another_institution_account_or_pix_key

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `value` (number)
- `bankAccount` (object)
- `operationType` (string)
- `pixAddressKey` (string)
- `pixAddressKeyType` (string)
- `description` (string)
- `scheduleDate` (string)
- `externalReference` (string)
- `recurring` (object)

### list_transfers

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `dateCreatedLe[ge]` (string)
- `dateCreatedLe[le]` (string)
- `transferDate[ge]` (string)
- `transferDate[le]` (string)
- `type` (string)

### transfer_to_asaas_account

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `value` (number)
- `walletId` (string)
- `externalReference` (string)

### retrieve_a_single_transfer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_a_transfer

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### request_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### list_anticipations

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `payment` (string)
- `installment` (string)
- `status` (string)

### simulate_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `installment` (string)
- `payment` (string)

### update_status_of_automatic_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `creditCardAutomaticEnabled` (boolean)

### retrieve_status_of_automatic_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_anticipation_limits

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### cancel_anticipation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_a_payment_dunning

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### list_payment_dunnings

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `status` (string)
- `type` (string)
- `payment` (string)
- `requestStartDate` (string)
- `requestEndDate` (string)

### simulate_a_payment_dunning

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `payment` (string)

### recover_a_single_payment_dunning

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### event_history_lists

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `offset` (integer)
- `limit` (integer)

### list_payments_received

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `offset` (integer)
- `limit` (integer)

### list_payments_available_for_payment_dunning

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)

### resend_documents

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_payment_dunning

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_a_bill_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `identificationField` (string)
- `scheduleDate` (string)
- `description` (string)
- `discount` (number)
- `interest` (number)
- `fine` (number)
- `dueDate` (string)
- `value` (number)
- `externalReference` (string)

### list_bill_payments

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)

### simulate_a_bill_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `identificationField` (string)
- `barCode` (string)

### retrieve_a_single_bill_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_bill_payment

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### request_recharge

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `value` (number)
- `phoneNumber` (string)

### list_mobile_recharges

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)

### recover_a_single_cellphone_recharge

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_a_cellphone_recharge

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### search_for_cell_phone_provider

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `phoneNumber` (string)

### make_consultation

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `cpfCnpj` (string)

### list_credit_bureau_reports

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `startDate` (string)
- `endDate` (string)

### retrieve_a_credit_bureau_report

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### retrieve_extract

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `startDate` (string)
- `finishDate` (string)
- `order` (string)

### retrieve_account_balance

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### billing_statistics

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `customer` (string)
- `billingType` (string)
- `status` (string)
- `anticipated` (boolean)
- `dateCreated[ge]` (string)
- `dateCreated[le]` (string)
- `dueDate[ge]` (string)
- `dueDate[le]` (string)
- `estimatedCreditDate[ge]` (string)
- `estimatedCreditDate[le]` (string)
- `externalReference` (string)

### retrieve_split_values

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_business_data

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### update_business_data

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `personType` (string)
- `cpfCnpj` (string)
- `birthDate` (string)
- `companyType` (string)
- `companyName` (string)
- `incomeValue` (number)
- `email` (string)
- `phone` (string)
- `mobilePhone` (string)
- `site` (string)
- `postalCode` (string)
- `address` (string)
- `addressNumber` (string)
- `complement` (string)
- `province` (string)

### save_payment_checkout_personalization

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_personalization_settings

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_asaas_account_number

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_account_fees

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### check_account_registration_status

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_walletid

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### delete_white_label_subaccount

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `removeReason` (string)

### schedule_invoice

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `payment` (string)
- `installment` (string)
- `customer` (string)
- `serviceDescription` (string)
- `observations` (string)
- `externalReference` (string)
- `value` (number)
- `deductions` (number)
- `effectiveDate` (string)
- `municipalServiceId` (string)
- `municipalServiceCode` (string)
- `municipalServiceName` (string)
- `updatePayment` (boolean)
- `taxes` (object)

### list_invoices

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `effectiveDate[Ge]` (string)
- `effectiveDate[Le]` (string)
- `payment` (string)
- `installment` (string)
- `externalReference` (string)
- `status` (string)
- `customer` (string)

### update_invoice

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `serviceDescription` (string)
- `observations` (string)
- `externalReference` (string)
- `value` (number)
- `deductions` (number)
- `effectiveDate` (string)
- `updatePayment` (boolean)
- `taxes` (object)

### retrieve_a_single_invoice

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### issue_an_invoice

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### cancel_an_invoice

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `cancelOnlyOnAsaas` (boolean)

### list_municipal_configurations

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### create_and_update_tax_information

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### retrieve_tax_information

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### list_municipal_services

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `description` (string)

### list_nbs_codes

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `codeDescription` (string)

### configure_invoice_issuing_portal

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `enabled` (boolean)

### create_new_webhook

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `name` (string)
- `url` (string)
- `email` (string)
- `enabled` (boolean)
- `interrupted` (boolean)
- `apiVersion` (integer)
- `authToken` (string)
- `sendType` (string)
- `events` (array)

### list_webhooks

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)

### retrieve_a_single_webhook

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_existing_webhook

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `url` (string)
- `sendType` (string)
- `enabled` (boolean)
- `interrupted` (boolean)
- `authToken` (string)
- `events` (array)

### remove_webhook

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_subaccount

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `name` (string)
- `email` (string)
- `loginEmail` (string)
- `cpfCnpj` (string)
- `birthDate` (string)
- `companyType` (string)
- `phone` (string)
- `mobilePhone` (string)
- `site` (string)
- `incomeValue` (number)
- `address` (string)
- `addressNumber` (string)
- `complement` (string)
- `province` (string)
- `postalCode` (string)
- `webhooks` (array)

### list_subaccounts

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `cpfCnpj` (string)
- `email` (string)
- `name` (string)
- `walletId` (string)

### retrieve_a_single_subaccount

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### save_or_update_escrow_account_configuration_for_subaccount

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
- `daysToExpire` (integer)
- `enabled` (boolean)
- `isFeePayer` (boolean)

### reterive_escrow_account_configuration_for_subaccount

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### check_pending_documents

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

No input parameters

### send_documents

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### view_document_sent

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### update_sent_document

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### remove_sent_document

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### create_a_chargeback_dispute

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)

### list_chargebacks

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `offset` (integer)
- `limit` (integer)
- `creditCardBrand` (string)
- `originDisputeDate[le]` (string)
- `originDisputeDate[ge]` (string)
- `originTransactionDate[le]` (string)
- `originTransactionDate[ge]` (string)
- `status` (string)

### retrieve_a_single_chargeback

**Environment variables**

- `ACCESS_TOKEN`

**Input schema**

- `id` (string)
