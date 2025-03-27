# @open-mcp/increase_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "increase_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/increase_com"],
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

### list_account_numbers

### create_an_account_number

### retrieve_an_account_number

### update_an_account_number

### list_account_statements

### retrieve_an_account_statement

### list_account_transfers

### create_an_account_transfer

### retrieve_an_account_transfer

### approve_an_account_transfer

### cancel_an_account_transfer

### list_accounts

### create_an_account

### retrieve_an_account

### update_an_account

### close_an_account

### list_ach_prenotifications

### create_an_ach_prenotification

### retrieve_an_ach_prenotification

### list_ach_transfers

### create_an_ach_transfer

### retrieve_an_ach_transfer

### approve_an_ach_transfer

### cancel_a_pending_ach_transfer

### list_card_disputes

### create_a_card_dispute

### retrieve_a_card_dispute

### list_card_profiles

### create_a_card_profile

### retrieve_a_card_profile

### list_cards

### create_a_card

### retrieve_a_card

### update_a_card

### retrieve_sensitive_details_for_a_card

### list_check_deposits

### create_a_check_deposit

### retrieve_a_check_deposit

### list_check_transfers

### create_a_check_transfer

### retrieve_a_check_transfer

### approve_a_check_transfer

### cancel_a_pending_check_transfer

### request_a_stop_payment_on_a_check_transfer

### list_declined_transactions

### retrieve_a_declined_transaction

### list_digital_wallet_tokens

### retrieve_a_digital_wallet_token

### list_documents

### retrieve_a_document

### list_entities

### create_an_entity

### retrieve_an_entity

### create_a_supplemental_document_for_an_entity

### list_event_subscriptions

### create_an_event_subscription

### retrieve_an_event_subscription

### update_an_event_subscription

### list_events

### retrieve_an_event

### list_external_accounts

### create_an_external_account

### retrieve_an_external_account

### update_an_external_account

### list_files

### create_a_file

### retrieve_a_file

### retrieve_group_details

### list_inbound_ach_transfer_returns

### create_an_ach_return

### retrieve_an_inbound_ach_transfer_return

### list_inbound_wire_drawdown_requests

### retrieve_an_inbound_wire_drawdown_request

### list_limits

### create_a_limit

### retrieve_a_limit

### update_a_limit

### list_oauth_connections

### retrieve_an_oauth_connection

### list_pending_transactions

### retrieve_a_pending_transaction

### retrieve_a_real_time_decision

### action_a_real_time_decision

### list_routing_numbers

### simulate_an_account_statement_being_created

### complete_a_sandbox_account_transfer

### return_a_sandbox_ach_transfer

### submit_a_sandbox_ach_transfer

### simulate_an_authorization_on_a_card

### simulates_advancing_the_state_of_a_card_dispute

### simulate_a_refund_on_a_card

### simulate_settling_a_card_authorization

### reject_a_sandbox_check_deposit

### return_a_sandbox_check_deposit

### submit_a_sandbox_check_deposit

### deposit_a_sandbox_check_transfer

### mail_a_sandbox_check_transfer

### simulate_digital_wallet_provisioning_for_a_card

### simulate_a_tax_document_being_created

### simulate_an_ach_transfer_to_your_account

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/increase_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/increase_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
