# @open-mcp/dialpad-server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "dialpad-server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/dialpad-server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/dialpad-server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
APIKEY='...'
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add dialpad-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --APIKEY=$APIKEY \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add dialpad-server \
  .cursor/mcp.json \
  --APIKEY=$APIKEY \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add dialpad-server \
  /path/to/client/config.json \
  --APIKEY=$APIKEY \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "dialpad-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/dialpad-server"],
      "env": {"APIKEY":"...","API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `APIKEY` - gets sent to the API provider
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### accesscontrolpolicies_assign

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `target_id` (integer)
- `target_type` (string)
- `user_id` (integer)

### accesscontrolpolicies_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### accesscontrolpolicies_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `description` (string)
- `name` (string)
- `owner_id` (integer)
- `permission_sets` (array)
- `target_type` (string)

### accesscontrolpolicies_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### accesscontrolpolicies_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### accesscontrolpolicies_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `description` (string)
- `name` (string)
- `permission_sets` (array)
- `state` (string)
- `user_id` (integer)

### accesscontrolpolicies_assignments

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `cursor` (string)

### accesscontrolpolicies_unassign

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `target_id` (integer)
- `target_type` (string)
- `unassign_all` (boolean)
- `user_id` (integer)

### app_settings_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `target_id` (integer)
- `target_type` (string)

### blockednumbers_add

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `numbers` (array)

### blockednumbers_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `number` (string)

### blockednumbers_remove

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `numbers` (array)

### blockednumbers_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### call_participants_add

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `participant` (other)

### call_get_call_info

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### call_initiate_ivr_call

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `custom_data` (string)
- `outbound_caller_id` (string)
- `phone_number` (string)
- `target_id` (integer)
- `target_type` (string)

### call_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `started_after` (integer)
- `started_before` (integer)
- `target_id` (integer)
- `target_type` (string)

### call_call

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `custom_data` (string)
- `device_id` (string)
- `group_id` (integer)
- `group_type` (string)
- `is_consult` (boolean)
- `outbound_caller_id` (string)
- `phone_number` (string)
- `user_id` (integer)

### call_transfer_call

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `custom_data` (string)
- `to` (other)
- `transfer_state` (string)

### call_unpark

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `user_id` (integer)

### call_actions_hangup

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### call_put_call_labels

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `labels` (array)

### call_callback

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_center_id` (integer)
- `phone_number` (string)

### call_validate_callback

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_center_id` (integer)
- `phone_number` (string)

### callcenters_listall

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `office_id` (integer)
- `name_search` (string)

### callcenters_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `advanced_settings` (object)
- `alerts` (object)
- `friday_hours` (array)
- `group_description` (string)
- `hold_queue` (object)
- `hours_on` (boolean)
- `monday_hours` (array)
- `name` (string)
- `office_id` (integer)
- `ring_seconds` (integer)
- `routing_options` (object)
- `saturday_hours` (array)
- `sunday_hours` (array)
- `thursday_hours` (array)
- `tuesday_hours` (array)
- `voice_intelligence` (object)
- `wednesday_hours` (array)

### callcenters_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callcenters_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callcenters_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `advanced_settings` (object)
- `alerts` (object)
- `friday_hours` (array)
- `group_description` (string)
- `hold_queue` (object)
- `hours_on` (boolean)
- `monday_hours` (array)
- `name` (string)
- `ring_seconds` (integer)
- `routing_options` (object)
- `saturday_hours` (array)
- `sunday_hours` (array)
- `thursday_hours` (array)
- `tuesday_hours` (array)
- `voice_intelligence` (object)
- `wednesday_hours` (array)

### callcenters_status

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callcenters_operators_get_dutystatus

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callcenters_operators_dutystatus

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `duty_status_reason` (string)
- `on_duty` (boolean)

### callcenters_operators_get_skilllevel

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_center_id` (integer)
- `user_id` (integer)

### callcenters_operators_skilllevel

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_center_id` (integer)
- `user_id` (integer)
- `skill_level` (integer)

### callcenters_operators_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `user_id` (integer)

### callcenters_operators_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callcenters_operators_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `keep_paid_numbers` (boolean)
- `license_type` (string)
- `role` (string)
- `skill_level` (integer)
- `user_id` (integer)

### calllabel_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `limit` (integer)

### call_review_share_link_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_id` (integer)
- `privacy` (string)

### call_review_share_link_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### call_review_share_link_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### call_review_share_link_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `privacy` (string)

### callrouters_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `office_id` (integer)

### callrouters_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `default_target_id` (integer)
- `default_target_type` (string)
- `enabled` (boolean)
- `name` (string)
- `office_id` (integer)
- `routing_url` (string)
- `secret` (string)

### callrouters_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### callrouters_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### callrouters_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `default_target_id` (integer)
- `default_target_type` (string)
- `enabled` (boolean)
- `name` (string)
- `office_id` (integer)
- `reset_error_count` (boolean)
- `routing_url` (string)
- `secret` (string)

### numbers_assign_call_router_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `area_code` (string)
- `number` (string)
- `primary` (boolean)

### channels_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### channels_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### channels_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `state` (string)

### channels_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `description` (string)
- `name` (string)
- `privacy_type` (string)
- `user_id` (integer)

### channels_members_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `user_id` (integer)

### channels_members_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `cursor` (string)

### channels_members_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `user_id` (integer)

### coaching_team_members_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### coaching_team_members_add

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `member_id` (string)
- `role` (string)

### coaching_team_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### coaching_team_listall

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### company_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

No input parameters

### company_sms_opt_out

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `a2p_campaign_id` (integer)
- `cursor` (string)
- `opt_out_state` (string)

### conference_rooms_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### conference_meetings_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `room_id` (string)

### contacts_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### contacts_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### contacts_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `company_name` (string)
- `emails` (array)
- `extension` (string)
- `first_name` (string)
- `job_title` (string)
- `last_name` (string)
- `phones` (array)
- `trunk_group` (string)
- `urls` (array)

### contacts_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `include_local` (boolean)
- `owner_id` (string)

### contacts_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `company_name` (string)
- `emails` (array)
- `extension` (string)
- `first_name` (string)
- `job_title` (string)
- `last_name` (string)
- `owner_id` (string)
- `phones` (array)
- `trunk_group` (string)
- `urls` (array)

### contacts_create_with_uid

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `company_name` (string)
- `emails` (array)
- `extension` (string)
- `first_name` (string)
- `job_title` (string)
- `last_name` (string)
- `phones` (array)
- `trunk_group` (string)
- `uid` (string)
- `urls` (array)

### ivr_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `target_type` (string)
- `target_id` (integer)
- `ivr_type` (string)
- `ivr_id` (integer)
- `select_option` (string)

### ivr_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `target_type` (string)
- `target_id` (integer)
- `ivr_type` (string)
- `ivr_id` (integer)
- `select_option` (string)

### custom_ivrs_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `target_type` (string)
- `target_id` (integer)

### ivr_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `description` (string)
- `file` (string)
- `ivr_type` (string)
- `name` (string)
- `target_id` (integer)
- `target_type` (string)

### ivr_details_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `ivr_id` (string)
- `description` (string)
- `name` (string)

### departments_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### departments_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### departments_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `auto_call_recording` (boolean)
- `friday_hours` (array)
- `group_description` (string)
- `hold_queue` (object)
- `hours_on` (boolean)
- `monday_hours` (array)
- `name` (string)
- `ring_seconds` (integer)
- `routing_options` (object)
- `saturday_hours` (array)
- `sunday_hours` (array)
- `thursday_hours` (array)
- `tuesday_hours` (array)
- `voice_intelligence` (object)
- `wednesday_hours` (array)

### departments_listall

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `office_id` (integer)
- `name_search` (string)

### departments_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `auto_call_recording` (boolean)
- `friday_hours` (array)
- `group_description` (string)
- `hold_queue` (object)
- `hours_on` (boolean)
- `monday_hours` (array)
- `name` (string)
- `office_id` (integer)
- `ring_seconds` (integer)
- `routing_options` (object)
- `saturday_hours` (array)
- `sunday_hours` (array)
- `thursday_hours` (array)
- `tuesday_hours` (array)
- `voice_intelligence` (object)
- `wednesday_hours` (array)

### departments_operators_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `operator_id` (integer)
- `operator_type` (string)

### departments_operators_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### departments_operators_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `operator_id` (integer)
- `operator_type` (string)
- `role` (string)

### faxline_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `line` (other)
- `target` (object)

### numbers_assign_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `number` (string)
- `primary` (boolean)
- `target_id` (integer)
- `target_type` (string)

### numbers_assign_target_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `area_code` (string)
- `number` (string)
- `primary` (boolean)
- `target_id` (integer)
- `target_type` (string)

### numbers_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `number` (string)
- `release` (boolean)

### numbers_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `number` (string)

### numbers_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `status` (string)

### numbers_swap_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `swap_details` (other)
- `target` (object)

### format_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `country_code` (string)
- `number` (string)

### oauth2_authorize_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `code_challenge_method` (string)
- `code_challenge` (string)
- `scope` (string)
- `response_type` (string)
- `redirect_uri` (string)
- `client_id` (string)
- `state` (string)

### oauth2_deauthorize_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

No input parameters

### oauth2_token_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

No input parameters

### plan_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `office_id` (integer)

### callcenters_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `office_id` (integer)
- `cursor` (string)

### coaching_team_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `office_id` (integer)
- `cursor` (string)

### departments_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `office_id` (integer)
- `cursor` (string)

### numbers_assign_office_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `area_code` (string)
- `number` (string)
- `primary` (boolean)

### numbers_office_unassign_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `number` (string)

### offices_e911_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### offices_e911_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `address` (string)
- `address2` (string)
- `city` (string)
- `country` (string)
- `state` (string)
- `update_all` (boolean)
- `use_validated_option` (boolean)
- `zip` (string)

### plan_available_licenses_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `office_id` (integer)

### offices_offdutystatuses_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### offices_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### offices_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `active_only` (boolean)

### offices_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `annual_commit_monthly_billing` (boolean)
- `auto_call_recording` (boolean)
- `billing_address` (object)
- `billing_contact` (object)
- `country` (string)
- `currency` (string)
- `e911_address` (object)
- `first_action` (string)
- `friday_hours` (array)
- `group_description` (string)
- `hours_on` (boolean)
- `international_enabled` (boolean)
- `invoiced` (boolean)
- `mainline_number` (string)
- `monday_hours` (array)
- `name` (string)
- `no_operators_action` (string)
- `plan_period` (string)
- `ring_seconds` (integer)
- `routing_options` (object)
- `saturday_hours` (array)
- `sunday_hours` (array)
- `thursday_hours` (array)
- `timezone` (string)
- `tuesday_hours` (array)
- `unified_billing` (boolean)
- `use_same_address` (boolean)
- `voice_intelligence` (object)
- `wednesday_hours` (array)

### offices_operators_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `operator_id` (integer)
- `operator_type` (string)

### offices_operators_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### offices_operators_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `operator_id` (integer)
- `operator_type` (string)
- `role` (string)

### recording_share_link_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `privacy` (string)
- `recording_id` (string)
- `recording_type` (string)

### recording_share_link_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### recording_share_link_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### recording_share_link_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `privacy` (string)

### numbers_assign_room_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `area_code` (string)
- `number` (string)
- `primary` (boolean)

### numbers_room_unassign_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `number` (string)

### rooms_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### rooms_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### rooms_patch

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `name` (string)
- `phone_numbers` (array)

### rooms_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `office_id` (integer)

### rooms_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `name` (string)
- `office_id` (integer)

### deskphones_rooms_create_international_pin

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `customer_ref` (string)

### deskphones_rooms_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `parent_id` (integer)

### deskphones_rooms_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `parent_id` (integer)

### deskphones_rooms_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `parent_id` (integer)

### schedule_reports_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### schedule_reports_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### schedule_reports_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `at` (integer)
- `coaching_group` (boolean)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `frequency` (string)
- `name` (string)
- `on_day` (integer)
- `report_type` (string)
- `target_id` (integer)
- `target_type` (string)
- `timezone` (string)

### schedule_reports_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### schedule_reports_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `at` (integer)
- `coaching_group` (boolean)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `frequency` (string)
- `name` (string)
- `on_day` (integer)
- `report_type` (string)
- `target_id` (integer)
- `target_type` (string)
- `timezone` (string)

### sms_send

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `channel_hashtag` (string)
- `from_number` (string)
- `infer_country_code` (boolean)
- `media` (string)
- `sender_group_id` (integer)
- `sender_group_type` (string)
- `text` (string)
- `to_numbers` (array)
- `user_id` (integer)

### stats_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### stats_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `coaching_group` (boolean)
- `coaching_team` (boolean)
- `days_ago_end` (integer)
- `days_ago_start` (integer)
- `export_type` (string)
- `group_by` (string)
- `is_today` (boolean)
- `office_id` (integer)
- `stat_type` (string)
- `target_id` (integer)
- `target_type` (string)
- `timezone` (string)

### webhook_agent_status_event_subscription_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### webhook_agent_status_event_subscription_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `agent_type` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_agent_status_event_subscription_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_agent_status_event_subscription_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_agent_status_event_subscription_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `agent_type` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_call_event_subscription_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `target_type` (string)
- `target_id` (integer)

### webhook_call_event_subscription_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_states` (array)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `group_calls_only` (boolean)
- `target_id` (integer)
- `target_type` (string)

### webhook_call_event_subscription_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_call_event_subscription_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_call_event_subscription_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `call_states` (array)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `group_calls_only` (boolean)
- `target_id` (integer)
- `target_type` (string)

### webhook_change_log_event_subscription_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### webhook_change_log_event_subscription_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_change_log_event_subscription_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_change_log_event_subscription_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_change_log_event_subscription_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_contact_event_subscription_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### webhook_contact_event_subscription_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `contact_type` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_contact_event_subscription_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_contact_event_subscription_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_contact_event_subscription_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `contact_type` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)

### webhook_sms_event_subscription_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `target_type` (string)
- `target_id` (integer)

### webhook_sms_event_subscription_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `direction` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `include_internal` (boolean)
- `status` (boolean)
- `target_id` (integer)
- `target_type` (string)

### webhook_sms_event_subscription_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_sms_event_subscription_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_sms_event_subscription_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `direction` (string)
- `enabled` (boolean)
- `endpoint_id` (integer)
- `include_internal` (boolean)
- `status` (boolean)
- `target_id` (integer)
- `target_type` (string)

### transcripts_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_id` (integer)

### transcripts_get_url

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `call_id` (integer)

### userdevices_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### userdevices_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `user_id` (string)

### users_initiate_call

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `custom_data` (string)
- `group_id` (integer)
- `group_type` (string)
- `outbound_caller_id` (string)
- `phone_number` (string)

### users_update_active_call

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `is_recording` (boolean)
- `play_message` (boolean)
- `recording_type` (string)

### users_toggle_call_vi

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `enable_vi` (boolean)
- `vi_locale` (string)

### caller_id_users_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### caller_id_users_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `caller_id` (string)

### deskphones_users_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `parent_id` (integer)

### deskphones_users_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `parent_id` (integer)

### deskphones_users_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `parent_id` (integer)

### numbers_assign_user_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `area_code` (string)
- `number` (string)
- `primary` (boolean)

### numbers_user_unassign_number_post

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `number` (string)

### users_toggle_dnd

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `do_not_disturb` (boolean)
- `group_id` (integer)
- `group_type` (string)

### users_e911_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### users_e911_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `address` (string)
- `address2` (string)
- `city` (string)
- `country` (string)
- `state` (string)
- `use_validated_option` (boolean)
- `zip` (string)

### users_personas_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### screen_pop_initiate

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `screen_pop_uri` (string)

### users_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### users_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)

### users_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `admin_office_ids` (array)
- `emails` (array)
- `extension` (string)
- `first_name` (string)
- `forwarding_numbers` (array)
- `international_dialing_enabled` (boolean)
- `is_super_admin` (boolean)
- `job_title` (string)
- `keep_paid_numbers` (boolean)
- `last_name` (string)
- `license` (string)
- `office_id` (integer)
- `phone_numbers` (array)
- `presence_status` (object)
- `state` (string)

### users_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)
- `state` (string)
- `company_admin` (boolean)
- `email` (string)
- `number` (string)

### users_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `auto_assign` (boolean)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `license` (string)
- `office_id` (integer)

### users_move_office_patch

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `office_id` (integer)

### users_update_status

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `expiration` (integer)
- `status_message` (string)

### webhooks_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### webhooks_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `hook_url` (string)
- `secret` (string)

### webhooks_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhooks_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### webhook_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (string)
- `hook_url` (string)
- `secret` (string)

### websockets_list

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `cursor` (string)

### websockets_create

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `secret` (string)

### websockets_delete

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### websockets_get

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)

### websockets_update

**Environment variables**

- `APIKEY`
- `API_KEY`

**Input schema**

- `id` (integer)
- `secret` (string)
