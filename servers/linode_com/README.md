# @open-mcp/linode_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "linode_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/linode_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### getaccount

### updateaccount

### x_linode_cli_command_account

### cancelaccount

### x_linode_cli_command_account_cancel

### createcreditcard

### x_linode_cli_command_account_credit_card

### getentitytransfers

### createentitytransfer

### deleteentitytransfer

### getentitytransfer

### parameters_account_entity_transfers_token_

### parameters_account_entity_transfers_token_accept

### acceptentitytransfer

### getevents

### x_linode_cli_command_account_events

### getevent

### parameters_account_events_eventid_

### x_linode_cli_command_account_events_eventid_

### parameters_account_events_eventid_read

### eventread

### x_linode_cli_command_account_events_eventid_read

### parameters_account_events_eventid_seen

### eventseen

### x_linode_cli_command_account_events_eventid_seen

### getinvoices

### x_linode_cli_command_account_invoices

### getinvoice

### parameters_account_invoices_invoiceid_

### x_linode_cli_command_account_invoices_invoiceid_

### getinvoiceitems

### parameters_account_invoices_invoiceid_items

### x_linode_cli_command_account_invoices_invoiceid_items

### getaccountlogins

### x_linode_cli_command_account_logins

### getaccountlogin

### parameters_account_logins_loginid_

### x_linode_cli_command_account_logins_loginid_

### getmaintenance

### x_linode_cli_command_account_maintenance

### getnotifications

### x_linode_cli_command_account_notifications

### getclients

### createclient

### x_linode_cli_command_account_oauth_clients

### deleteclient

### getclient

### parameters_account_oauth_clients_clientid_

### updateclient

### x_linode_cli_command_account_oauth_clients_clientid_

### parameters_account_oauth_clients_clientid_reset_secret

### resetclientsecret

### x_linode_cli_command_account_oauth_clients_clientid_reset_secret

### getclientthumbnail

### parameters_account_oauth_clients_clientid_thumbnail

### setclientthumbnail

### x_linode_cli_command_account_oauth_clients_clientid_thumbnail

### getpaymentmethods

### createpaymentmethod

### x_linode_cli_command_account_payment_methods

### deletepaymentmethod

### getpaymentmethod

### parameters_account_payment_methods_paymentmethodid_

### x_linode_cli_command_account_payment_methods_paymentmethodid_

### parameters_account_payment_methods_paymentmethodid_make_default

### makepaymentmethoddefault

### x_linode_cli_command_account_payment_methods_paymentmethodid_mak

### getpayments

### createpayment

### x_linode_cli_command_account_payments

### createpaypalpayment

### x_linode_cli_command_account_payments_paypal

### executepaypalpayment

### x_linode_cli_command_account_payments_paypal_execute

### getpayment

### parameters_account_payments_paymentid_

### x_linode_cli_command_account_payments_paymentid_

### createpromocredit

### x_linode_cli_command_account_promo_codes

### getservicetransfers

### createservicetransfer

### x_linode_cli_command_account_service_transfers

### deleteservicetransfer

### getservicetransfer

### parameters_account_service_transfers_token_

### x_linode_cli_command_account_service_transfers_token_

### parameters_account_service_transfers_token_accept

### acceptservicetransfer

### x_linode_cli_command_account_service_transfers_token_accept

### getaccountsettings

### updateaccountsettings

### x_linode_cli_command_account_settings

### enableaccountmanaged

### x_linode_cli_command_account_settings_managed_enable

### gettransfer

### x_linode_cli_command_account_transfer

### getusers

### createuser

### x_linode_cli_command_account_users

### deleteuser

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/linode_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/linode_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
