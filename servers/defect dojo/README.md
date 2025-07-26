# @open-mcp/defect dojo

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "defect dojo": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/defect dojo@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/defect dojo@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
SESSIONID='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add defect dojo \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add defect dojo \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add defect dojo \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --SESSIONID=$SESSIONID \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "defect dojo": {
      "command": "npx",
      "args": ["-y", "@open-mcp/defect dojo"],
      "env": {"AUTHORIZATION":"...","SESSIONID":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION` - gets sent to the API provider
- `SESSIONID` - gets sent to the API provider
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### announcements_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dismissable` (boolean)
- `limit` (integer)
- `message` (string)
- `offset` (integer)
- `style` (string)

### announcements_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `message` (string)
- `style` (string)
- `dismissable` (boolean)

### announcements_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### announcements_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `message` (string)
- `style` (string)
- `dismissable` (boolean)

### announcements_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `message` (string)
- `style` (string)
- `dismissable` (boolean)

### announcements_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### announcements_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### api_token_auth_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `username` (string)
- `password` (string)

### configuration_permissions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `codename` (string)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)

### configuration_permissions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### credential_mappings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cred_id` (integer)
- `engagement` (integer)
- `finding` (integer)
- `is_authn_provider` (boolean)
- `limit` (integer)
- `offset` (integer)
- `product` (integer)
- `test` (integer)
- `url` (string)

### credential_mappings_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `is_authn_provider` (boolean)
- `url` (string)
- `cred_id` (integer)
- `product` (integer)
- `finding` (integer)
- `engagement` (integer)
- `test` (integer)

### credential_mappings_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### credential_mappings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `is_authn_provider` (boolean)
- `url` (string)
- `cred_id` (integer)
- `product` (integer)
- `finding` (integer)
- `engagement` (integer)
- `test` (integer)

### credential_mappings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `is_authn_provider` (boolean)
- `url` (string)
- `cred_id` (integer)
- `product` (integer)
- `finding` (integer)
- `engagement` (integer)
- `test` (integer)

### credential_mappings_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### credential_mappings_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### credentials_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)

### credentials_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `username` (string)
- `role` (string)
- `authentication` (string)
- `http_authentication` (string)
- `description` (string)
- `url` (string)
- `login_regex` (string)
- `logout_regex` (string)
- `is_valid` (boolean)
- `environment` (integer)

### credentials_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### credentials_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `username` (string)
- `role` (string)
- `authentication` (string)
- `http_authentication` (string)
- `description` (string)
- `url` (string)
- `login_regex` (string)
- `logout_regex` (string)
- `is_valid` (boolean)
- `environment` (integer)

### credentials_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `username` (string)
- `role` (string)
- `authentication` (string)
- `http_authentication` (string)
- `description` (string)
- `url` (string)
- `login_regex` (string)
- `logout_regex` (string)
- `is_valid` (boolean)
- `environment` (integer)

### credentials_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### credentials_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### development_environments_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### development_environments_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### development_environments_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### development_environments_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)

### development_environments_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)

### development_environments_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### development_environments_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### dojo_group_members_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `group_id` (integer)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `user_id` (integer)

### dojo_group_members_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `group` (integer)
- `user` (integer)
- `role` (integer)

### dojo_group_members_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### dojo_group_members_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `group` (integer)
- `user` (integer)
- `role` (integer)

### dojo_group_members_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### dojo_group_members_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### dojo_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)
- `prefetch` (array)
- `social_provider` (string)

### dojo_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration_permissions` (array)
- `name` (string)
- `description` (string)
- `social_provider` (string)

### dojo_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### dojo_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_permissions` (array)
- `name` (string)
- `description` (string)
- `social_provider` (string)

### dojo_groups_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_permissions` (array)
- `name` (string)
- `description` (string)
- `social_provider` (string)

### dojo_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### dojo_groups_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### endpoint_meta_import_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### endpoint_status_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `endpoint` (integer)
- `false_positive` (boolean)
- `finding` (integer)
- `limit` (integer)
- `mitigated` (boolean)
- `mitigated_by` (integer)
- `offset` (integer)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)

### endpoint_status_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `date` (string)
- `mitigated` (boolean)
- `false_positive` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `mitigated_by` (integer)
- `endpoint` (integer)
- `finding` (integer)

### endpoint_status_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### endpoint_status_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `date` (string)
- `mitigated` (boolean)
- `false_positive` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `mitigated_by` (integer)
- `endpoint` (integer)
- `finding` (integer)

### endpoint_status_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `date` (string)
- `mitigated` (boolean)
- `false_positive` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `mitigated_by` (integer)
- `endpoint` (integer)
- `finding` (integer)

### endpoint_status_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### endpoint_status_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### endpoints_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fragment` (string)
- `has_tags` (boolean)
- `host` (string)
- `id` (integer)
- `limit` (integer)
- `not_tag` (string)
- `not_tags` (array)
- `o` (array)
- `offset` (integer)
- `path` (string)
- `port` (integer)
- `product` (integer)
- `protocol` (string)
- `query` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `userinfo` (string)

### endpoints_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `protocol` (string)
- `userinfo` (string)
- `host` (string)
- `port` (integer)
- `path` (string)
- `query` (string)
- `fragment` (string)
- `product` (integer)

### endpoints_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### endpoints_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `protocol` (string)
- `userinfo` (string)
- `host` (string)
- `port` (integer)
- `path` (string)
- `query` (string)
- `fragment` (string)
- `product` (integer)

### endpoints_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `protocol` (string)
- `userinfo` (string)
- `host` (string)
- `port` (integer)
- `path` (string)
- `query` (string)
- `fragment` (string)
- `product` (integer)

### endpoints_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### endpoints_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### endpoints_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### engagement_presets_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `title` (string)

### engagement_presets_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `notes` (string)
- `scope` (string)
- `product` (integer)
- `test_type` (array)
- `network_locations` (array)

### engagement_presets_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### engagement_presets_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `notes` (string)
- `scope` (string)
- `product` (integer)
- `test_type` (array)
- `network_locations` (array)

### engagement_presets_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `notes` (string)
- `scope` (string)
- `product` (integer)
- `test_type` (array)
- `network_locations` (array)

### engagement_presets_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagement_presets_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### engagements_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `api_test` (boolean)
- `has_tags` (boolean)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `not_product__tags` (array)
- `not_tag` (string)
- `not_tags` (array)
- `o` (array)
- `offset` (integer)
- `pen_test` (boolean)
- `product` (integer)
- `product__prod_type` (array)
- `product__tags` (array)
- `product__tags__and` (array)
- `report_type` (integer)
- `requester` (integer)
- `status` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `target_end` (string)
- `target_start` (string)
- `threat_model` (boolean)
- `updated` (string)
- `version` (string)

### engagements_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `name` (string)
- `description` (string)
- `version` (string)
- `first_contacted` (string)
- `target_start` (string)
- `target_end` (string)
- `reason` (string)
- `tracker` (string)
- `test_strategy` (string)
- `threat_model` (boolean)
- `api_test` (boolean)
- `pen_test` (boolean)
- `check_list` (boolean)
- `status` (string)
- `engagement_type` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `source_code_management_uri` (string)
- `deduplication_on_engagement` (boolean)
- `lead` (integer)
- `requester` (integer)
- `preset` (integer)
- `report_type` (integer)
- `product` (integer)
- `build_server` (integer)
- `source_code_management_server` (integer)
- `orchestration_engine` (integer)

### engagements_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `description` (string)
- `version` (string)
- `first_contacted` (string)
- `target_start` (string)
- `target_end` (string)
- `reason` (string)
- `tracker` (string)
- `test_strategy` (string)
- `threat_model` (boolean)
- `api_test` (boolean)
- `pen_test` (boolean)
- `check_list` (boolean)
- `status` (string)
- `engagement_type` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `source_code_management_uri` (string)
- `deduplication_on_engagement` (boolean)
- `lead` (integer)
- `requester` (integer)
- `preset` (integer)
- `report_type` (integer)
- `product` (integer)
- `build_server` (integer)
- `source_code_management_server` (integer)
- `orchestration_engine` (integer)

### engagements_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `description` (string)
- `version` (string)
- `first_contacted` (string)
- `target_start` (string)
- `target_end` (string)
- `reason` (string)
- `tracker` (string)
- `test_strategy` (string)
- `threat_model` (boolean)
- `api_test` (boolean)
- `pen_test` (boolean)
- `check_list` (boolean)
- `status` (string)
- `engagement_type` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `source_code_management_uri` (string)
- `deduplication_on_engagement` (boolean)
- `lead` (integer)
- `requester` (integer)
- `preset` (integer)
- `report_type` (integer)
- `product` (integer)
- `build_server` (integer)
- `source_code_management_server` (integer)
- `orchestration_engine` (integer)

### engagements_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_accept_risks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_close_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_complete_checklist_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_complete_checklist_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `session_management` (string)
- `encryption_crypto` (string)
- `configuration_management` (string)
- `authentication` (string)
- `authorization_and_access_control` (string)
- `data_input_sanitization_validation` (string)
- `sensitive_data` (string)
- `other` (string)
- `session_issues` (array)
- `crypto_issues` (array)
- `config_issues` (array)
- `auth_issues` (array)
- `author_issues` (array)
- `data_issues` (array)
- `sensitive_issues` (array)
- `other_issues` (array)

### engagements_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### engagements_files_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_files_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_files_download_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `file_id` (string)
- `id` (integer)

### engagements_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### engagements_notes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_notes_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `entry` (string)
- `private` (boolean)
- `note_type` (integer)

### engagements_reopen_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### engagements_update_jira_epic_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `epic_name` (string)
- `epic_priority` (string)

### finding_templates_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cwe` (integer)
- `description` (string)
- `id` (integer)
- `limit` (integer)
- `mitigation` (string)
- `not_tag` (string)
- `not_tags` (array)
- `o` (array)
- `offset` (integer)
- `severity` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `title` (string)

### finding_templates_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `vulnerability_ids` (array)
- `title` (string)
- `cwe` (integer)
- `cvssv3` (string)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `references` (string)
- `template_match` (boolean)
- `template_match_title` (boolean)

### finding_templates_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### finding_templates_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `vulnerability_ids` (array)
- `title` (string)
- `cwe` (integer)
- `cvssv3` (string)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `references` (string)
- `template_match` (boolean)
- `template_match_title` (boolean)

### finding_templates_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `vulnerability_ids` (array)
- `title` (string)
- `cwe` (integer)
- `cvssv3` (string)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `references` (string)
- `template_match` (boolean)
- `template_match_title` (boolean)

### finding_templates_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### finding_templates_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### findings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `component_name` (string)
- `component_version` (string)
- `created` (string)
- `cvssv3` (string)
- `cvssv3_score` (number)
- `cwe` (array)
- `date` (string)
- `defect_review_requested_by` (array)
- `description` (string)
- `discovered_after` (string)
- `discovered_before` (string)
- `discovered_on` (string)
- `duplicate` (boolean)
- `duplicate_finding` (integer)
- `dynamic_finding` (boolean)
- `effort_for_fixing` (string)
- `endpoints` (array)
- `epss_percentile_max` (number)
- `epss_percentile_min` (number)
- `epss_score_max` (number)
- `epss_score_min` (number)
- `false_p` (boolean)
- `file_path` (string)
- `finding_group` (array)
- `found_by` (array)
- `has_jira` (boolean)
- `has_tags` (boolean)
- `hash_code` (string)
- `id` (array)
- `impact` (string)
- `inherited_tags` (array)
- `is_mitigated` (boolean)
- `jira_change` (string)
- `jira_creation` (string)
- `kev_date` (string)
- `known_exploited` (boolean)
- `last_reviewed` (string)
- `last_reviewed_by` (array)
- `last_status_update` (string)
- `limit` (integer)
- `mitigated` (string)
- `mitigated_after` (string)
- `mitigated_before` (string)
- `mitigated_by` (array)
- `mitigated_on` (string)
- `mitigation` (string)
- `nb_occurences` (array)
- `not_tag` (string)
- `not_tags` (array)
- `not_test__engagement__product__tags` (array)
- `not_test__engagement__tags` (array)
- `not_test__tags` (array)
- `numerical_severity` (string)
- `o` (array)
- `offset` (integer)
- `out_of_scope` (boolean)
- `outside_of_sla` (number)
- `param` (string)
- `payload` (string)
- `planned_remediation_date` (string)
- `planned_remediation_version` (string)
- `prefetch` (array)
- `product_lifecycle` (string)
- `product_name` (string)
- `product_name_contains` (string)
- `publish_date` (string)
- `ransomware_used` (boolean)
- `references` (string)
- `related_fields` (boolean)
- `reporter` (array)
- `review_requested_by` (array)
- `reviewers` (array)
- `risk_acceptance` (number)
- `risk_accepted` (boolean)
- `sast_sink_object` (string)
- `sast_source_file_path` (string)
- `sast_source_line` (array)
- `sast_source_object` (string)
- `scanner_confidence` (array)
- `service` (string)
- `severity` (string)
- `severity_justification` (string)
- `sla_expiration_date` (string)
- `sla_start_date` (string)
- `sonarqube_issue` (array)
- `static_finding` (boolean)
- `steps_to_reproduce` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `test` (integer)
- `test__engagement` (array)
- `test__engagement__product` (array)
- `test__engagement__product__prod_type` (array)
- `test__engagement__product__tags` (array)
- `test__engagement__product__tags__and` (array)
- `test__engagement__tags` (array)
- `test__engagement__tags__and` (array)
- `test__tags` (array)
- `test__tags__and` (array)
- `test__test_type` (array)
- `title` (string)
- `under_defect_review` (boolean)
- `under_review` (boolean)
- `unique_id_from_tool` (string)
- `verified` (boolean)
- `vuln_id_from_tool` (string)
- `vulnerability_id` (string)

### findings_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `test` (integer)
- `thread_id` (integer)
- `found_by` (array)
- `url` (string)
- `tags` (array)
- `push_to_jira` (boolean)
- `vulnerability_ids` (array)
- `reporter` (integer)
- `title` (string)
- `date` (string)
- `sla_start_date` (string)
- `sla_expiration_date` (string)
- `cwe` (integer)
- `epss_score` (number)
- `epss_percentile` (number)
- `known_exploited` (boolean)
- `ransomware_used` (boolean)
- `kev_date` (string)
- `cvssv3` (string)
- `cvssv3_score` (number)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `steps_to_reproduce` (string)
- `severity_justification` (string)
- `references` (string)
- `active` (boolean)
- `verified` (boolean)
- `false_p` (boolean)
- `duplicate` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `under_review` (boolean)
- `under_defect_review` (boolean)
- `is_mitigated` (boolean)
- `numerical_severity` (string)
- `line` (integer)
- `file_path` (string)
- `component_name` (string)
- `component_version` (string)
- `static_finding` (boolean)
- `dynamic_finding` (boolean)
- `unique_id_from_tool` (string)
- `vuln_id_from_tool` (string)
- `sast_source_object` (string)
- `sast_sink_object` (string)
- `sast_source_line` (integer)
- `sast_source_file_path` (string)
- `nb_occurences` (integer)
- `publish_date` (string)
- `service` (string)
- `planned_remediation_date` (string)
- `planned_remediation_version` (string)
- `effort_for_fixing` (string)
- `review_requested_by` (integer)
- `defect_review_requested_by` (integer)
- `sonarqube_issue` (integer)
- `reviewers` (array)

### findings_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)
- `related_fields` (boolean)

### findings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `push_to_jira` (boolean)
- `vulnerability_ids` (array)
- `reporter` (integer)
- `title` (string)
- `date` (string)
- `sla_start_date` (string)
- `sla_expiration_date` (string)
- `cwe` (integer)
- `epss_score` (number)
- `epss_percentile` (number)
- `known_exploited` (boolean)
- `ransomware_used` (boolean)
- `kev_date` (string)
- `cvssv3` (string)
- `cvssv3_score` (number)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `steps_to_reproduce` (string)
- `severity_justification` (string)
- `references` (string)
- `active` (boolean)
- `verified` (boolean)
- `false_p` (boolean)
- `duplicate` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `under_review` (boolean)
- `under_defect_review` (boolean)
- `is_mitigated` (boolean)
- `numerical_severity` (string)
- `line` (integer)
- `file_path` (string)
- `component_name` (string)
- `component_version` (string)
- `static_finding` (boolean)
- `dynamic_finding` (boolean)
- `unique_id_from_tool` (string)
- `vuln_id_from_tool` (string)
- `sast_source_object` (string)
- `sast_sink_object` (string)
- `sast_source_line` (integer)
- `sast_source_file_path` (string)
- `nb_occurences` (integer)
- `publish_date` (string)
- `service` (string)
- `planned_remediation_date` (string)
- `planned_remediation_version` (string)
- `effort_for_fixing` (string)
- `review_requested_by` (integer)
- `defect_review_requested_by` (integer)
- `sonarqube_issue` (integer)
- `reviewers` (array)

### findings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `push_to_jira` (boolean)
- `vulnerability_ids` (array)
- `reporter` (integer)
- `title` (string)
- `date` (string)
- `sla_start_date` (string)
- `sla_expiration_date` (string)
- `cwe` (integer)
- `epss_score` (number)
- `epss_percentile` (number)
- `known_exploited` (boolean)
- `ransomware_used` (boolean)
- `kev_date` (string)
- `cvssv3` (string)
- `cvssv3_score` (number)
- `severity` (string)
- `description` (string)
- `mitigation` (string)
- `impact` (string)
- `steps_to_reproduce` (string)
- `severity_justification` (string)
- `references` (string)
- `active` (boolean)
- `verified` (boolean)
- `false_p` (boolean)
- `duplicate` (boolean)
- `out_of_scope` (boolean)
- `risk_accepted` (boolean)
- `under_review` (boolean)
- `under_defect_review` (boolean)
- `is_mitigated` (boolean)
- `numerical_severity` (string)
- `line` (integer)
- `file_path` (string)
- `component_name` (string)
- `component_version` (string)
- `static_finding` (boolean)
- `dynamic_finding` (boolean)
- `unique_id_from_tool` (string)
- `vuln_id_from_tool` (string)
- `sast_source_object` (string)
- `sast_sink_object` (string)
- `sast_source_line` (integer)
- `sast_source_file_path` (string)
- `nb_occurences` (integer)
- `publish_date` (string)
- `service` (string)
- `planned_remediation_date` (string)
- `planned_remediation_version` (string)
- `effort_for_fixing` (string)
- `review_requested_by` (integer)
- `defect_review_requested_by` (integer)
- `sonarqube_issue` (integer)
- `reviewers` (array)

### findings_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_close_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `is_mitigated` (boolean)
- `mitigated` (string)
- `false_p` (boolean)
- `out_of_scope` (boolean)
- `duplicate` (boolean)

### findings_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### findings_duplicate_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_duplicate_reset_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_files_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_files_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_files_download_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `file_id` (string)
- `id` (integer)

### findings_metadata_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_metadata_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `value` (string)

### findings_metadata_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `value` (string)

### findings_metadata_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (integer)

### findings_notes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_notes_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `entry` (string)
- `private` (boolean)
- `note_type` (integer)

### findings_original_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `new_fid` (integer)

### findings_remove_note_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `note_id` (integer)

### findings_remove_tags_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)

### findings_remove_tags_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)

### findings_request_response_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_request_response_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `req_resp` (array)

### findings_tags_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### findings_tags_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)

### findings_accept_risks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `component_name` (string)
- `component_version` (string)
- `created` (string)
- `cvssv3` (string)
- `cvssv3_score` (number)
- `cwe` (array)
- `date` (string)
- `defect_review_requested_by` (array)
- `description` (string)
- `discovered_after` (string)
- `discovered_before` (string)
- `discovered_on` (string)
- `duplicate` (boolean)
- `duplicate_finding` (integer)
- `dynamic_finding` (boolean)
- `effort_for_fixing` (string)
- `endpoints` (array)
- `epss_percentile_max` (number)
- `epss_percentile_min` (number)
- `epss_score_max` (number)
- `epss_score_min` (number)
- `false_p` (boolean)
- `file_path` (string)
- `finding_group` (array)
- `found_by` (array)
- `has_jira` (boolean)
- `has_tags` (boolean)
- `hash_code` (string)
- `id` (array)
- `impact` (string)
- `inherited_tags` (array)
- `is_mitigated` (boolean)
- `jira_change` (string)
- `jira_creation` (string)
- `kev_date` (string)
- `known_exploited` (boolean)
- `last_reviewed` (string)
- `last_reviewed_by` (array)
- `last_status_update` (string)
- `limit` (integer)
- `mitigated` (string)
- `mitigated_after` (string)
- `mitigated_before` (string)
- `mitigated_by` (array)
- `mitigated_on` (string)
- `mitigation` (string)
- `nb_occurences` (array)
- `not_tag` (string)
- `not_tags` (array)
- `not_test__engagement__product__tags` (array)
- `not_test__engagement__tags` (array)
- `not_test__tags` (array)
- `numerical_severity` (string)
- `o` (array)
- `offset` (integer)
- `out_of_scope` (boolean)
- `outside_of_sla` (number)
- `param` (string)
- `payload` (string)
- `planned_remediation_date` (string)
- `planned_remediation_version` (string)
- `product_lifecycle` (string)
- `product_name` (string)
- `product_name_contains` (string)
- `publish_date` (string)
- `ransomware_used` (boolean)
- `references` (string)
- `reporter` (array)
- `review_requested_by` (array)
- `reviewers` (array)
- `risk_acceptance` (number)
- `risk_accepted` (boolean)
- `sast_sink_object` (string)
- `sast_source_file_path` (string)
- `sast_source_line` (array)
- `sast_source_object` (string)
- `scanner_confidence` (array)
- `service` (string)
- `severity` (string)
- `severity_justification` (string)
- `sla_expiration_date` (string)
- `sla_start_date` (string)
- `sonarqube_issue` (array)
- `static_finding` (boolean)
- `steps_to_reproduce` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `test` (integer)
- `test__engagement` (array)
- `test__engagement__product` (array)
- `test__engagement__product__prod_type` (array)
- `test__engagement__product__tags` (array)
- `test__engagement__product__tags__and` (array)
- `test__engagement__tags` (array)
- `test__engagement__tags__and` (array)
- `test__tags` (array)
- `test__tags__and` (array)
- `test__test_type` (array)
- `title` (string)
- `under_defect_review` (boolean)
- `under_review` (boolean)
- `unique_id_from_tool` (string)
- `verified` (boolean)
- `vuln_id_from_tool` (string)
- `vulnerability_id` (string)

### findings_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### global_roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `group` (integer)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `role` (integer)
- `user` (integer)

### global_roles_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `user` (integer)
- `group` (integer)
- `role` (integer)

### global_roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### global_roles_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `user` (integer)
- `group` (integer)
- `role` (integer)

### global_roles_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `user` (integer)
- `group` (integer)
- `role` (integer)

### global_roles_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### global_roles_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### import_languages_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### import_scan_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### jira_configurations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `url` (string)

### jira_configurations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_configurations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_configurations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_configurations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_configurations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_configurations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### jira_finding_mappings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `engagement` (integer)
- `finding` (integer)
- `finding_group` (integer)
- `id` (integer)
- `jira_id` (string)
- `jira_key` (string)
- `limit` (integer)
- `offset` (integer)

### jira_finding_mappings_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jira_id` (string)
- `jira_key` (string)
- `jira_creation` (string)
- `jira_change` (string)
- `jira_project` (integer)
- `finding` (integer)
- `engagement` (integer)
- `finding_group` (integer)

### jira_finding_mappings_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_finding_mappings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `jira_id` (string)
- `jira_key` (string)
- `jira_creation` (string)
- `jira_change` (string)
- `jira_project` (integer)
- `finding` (integer)
- `engagement` (integer)
- `finding_group` (integer)

### jira_finding_mappings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `jira_id` (string)
- `jira_key` (string)
- `jira_creation` (string)
- `jira_change` (string)
- `jira_project` (integer)
- `finding` (integer)
- `engagement` (integer)
- `finding_group` (integer)

### jira_finding_mappings_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_finding_mappings_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### jira_instances_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `url` (string)

### jira_instances_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_instances_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_instances_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_instances_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `configuration_name` (string)
- `url` (string)
- `username` (string)
- `password` (string)
- `default_issue_type` (string)
- `issue_template_dir` (string)
- `epic_name_id` (integer)
- `open_status_key` (integer)
- `close_status_key` (integer)
- `info_mapping_severity` (string)
- `low_mapping_severity` (string)
- `medium_mapping_severity` (string)
- `high_mapping_severity` (string)
- `critical_mapping_severity` (string)
- `finding_text` (string)
- `accepted_mapping_resolution` (string)
- `false_positive_mapping_resolution` (string)
- `global_jira_sla_notification` (boolean)
- `finding_jira_sync` (boolean)

### jira_instances_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_instances_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### jira_product_configurations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `component` (string)
- `enable_engagement_epic_mapping` (boolean)
- `enabled` (boolean)
- `engagement` (integer)
- `id` (integer)
- `jira_instance` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `project_key` (string)
- `push_all_issues` (boolean)
- `push_notes` (boolean)

### jira_product_configurations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_product_configurations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### jira_product_configurations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_product_configurations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_product_configurations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_product_configurations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### jira_projects_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `component` (string)
- `enable_engagement_epic_mapping` (boolean)
- `enabled` (boolean)
- `engagement` (integer)
- `id` (integer)
- `jira_instance` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `project_key` (string)
- `push_all_issues` (boolean)
- `push_notes` (boolean)

### jira_projects_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_projects_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### jira_projects_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_projects_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `project_key` (string)
- `issue_template_dir` (string)
- `component` (string)
- `custom_fields` (other)
- `default_assignee` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `push_all_issues` (boolean)
- `enable_engagement_epic_mapping` (boolean)
- `epic_issue_type_name` (string)
- `push_notes` (boolean)
- `product_jira_sla_notification` (boolean)
- `risk_acceptance_expiration_notification` (boolean)
- `enabled` (boolean)
- `jira_instance` (integer)
- `product` (integer)
- `engagement` (integer)

### jira_projects_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### jira_projects_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### language_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `color` (string)
- `id` (integer)
- `language` (string)
- `limit` (integer)
- `offset` (integer)

### language_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `language` (string)
- `color` (string)

### language_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### language_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `language` (string)
- `color` (string)

### language_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `language` (string)
- `color` (string)

### language_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### language_types_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### languages_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `language` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)

### languages_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `files` (integer)
- `blank` (integer)
- `comment` (integer)
- `code` (integer)
- `language` (integer)
- `product` (integer)
- `user` (integer)

### languages_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### languages_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `files` (integer)
- `blank` (integer)
- `comment` (integer)
- `code` (integer)
- `language` (integer)
- `product` (integer)
- `user` (integer)

### languages_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `files` (integer)
- `blank` (integer)
- `comment` (integer)
- `code` (integer)
- `language` (integer)
- `product` (integer)
- `user` (integer)

### languages_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### languages_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### metadata_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `endpoint` (integer)
- `finding` (integer)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `name_case_insensitive` (string)
- `offset` (integer)
- `product` (integer)
- `value` (string)
- `value_case_insensitive` (string)

### metadata_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `endpoint` (integer)
- `finding` (integer)
- `name` (string)
- `value` (string)

### metadata_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### metadata_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `endpoint` (integer)
- `finding` (integer)
- `name` (string)
- `value` (string)

### metadata_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `endpoint` (integer)
- `finding` (integer)
- `name` (string)
- `value` (string)

### metadata_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### metadata_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### metadata_batch_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `endpoint` (integer)
- `finding` (integer)
- `metadata` (array)

### metadata_batch_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `endpoint` (integer)
- `finding` (integer)
- `metadata` (array)

### network_locations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `location` (string)
- `offset` (integer)

### network_locations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)

### network_locations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### network_locations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `location` (string)

### network_locations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `location` (string)

### network_locations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### network_locations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### note_type_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `id` (integer)
- `is_active` (boolean)
- `is_mandatory` (boolean)
- `is_single` (boolean)
- `limit` (integer)
- `name` (string)
- `offset` (integer)

### note_type_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `is_single` (boolean)
- `is_active` (boolean)
- `is_mandatory` (boolean)

### note_type_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### note_type_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `is_single` (boolean)
- `is_active` (boolean)
- `is_mandatory` (boolean)

### note_type_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `is_single` (boolean)
- `is_active` (boolean)
- `is_mandatory` (boolean)

### note_type_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### note_type_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### notes_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `author` (integer)
- `date` (string)
- `edit_time` (string)
- `edited` (boolean)
- `editor` (integer)
- `entry` (string)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `private` (boolean)

### notes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### notes_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `entry` (string)
- `private` (boolean)
- `edited` (boolean)

### notes_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `entry` (string)
- `private` (boolean)
- `edited` (boolean)

### notification_webhooks_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `first_error` (string)
- `header_name` (string)
- `header_value` (string)
- `last_error` (string)
- `limit` (integer)
- `name` (string)
- `note` (string)
- `offset` (integer)
- `owner` (integer)
- `status` (string)
- `url` (string)

### notification_webhooks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `url` (string)
- `header_name` (string)
- `header_value` (string)
- `owner` (integer)

### notification_webhooks_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### notification_webhooks_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `url` (string)
- `header_name` (string)
- `header_value` (string)
- `owner` (integer)

### notification_webhooks_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `url` (string)
- `header_name` (string)
- `header_value` (string)
- `owner` (integer)

### notification_webhooks_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### notification_webhooks_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### notifications_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `template` (boolean)
- `user` (integer)

### notifications_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `user` (integer)
- `product_type_added` (array)
- `product_added` (array)
- `engagement_added` (array)
- `test_added` (array)
- `scan_added` (array)
- `jira_update` (array)
- `upcoming_engagement` (array)
- `stale_engagement` (array)
- `auto_close_engagement` (array)
- `close_engagement` (array)
- `user_mentioned` (array)
- `code_review` (array)
- `review_requested` (array)
- `other` (array)
- `sla_breach` (array)
- `sla_breach_combined` (array)
- `risk_acceptance_expiration` (array)
- `template` (boolean)
- `scan_added_empty` (string)

### notifications_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### notifications_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `user` (integer)
- `product_type_added` (array)
- `product_added` (array)
- `engagement_added` (array)
- `test_added` (array)
- `scan_added` (array)
- `jira_update` (array)
- `upcoming_engagement` (array)
- `stale_engagement` (array)
- `auto_close_engagement` (array)
- `close_engagement` (array)
- `user_mentioned` (array)
- `code_review` (array)
- `review_requested` (array)
- `other` (array)
- `sla_breach` (array)
- `sla_breach_combined` (array)
- `risk_acceptance_expiration` (array)
- `template` (boolean)
- `scan_added_empty` (string)

### notifications_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `user` (integer)
- `product_type_added` (array)
- `product_added` (array)
- `engagement_added` (array)
- `test_added` (array)
- `scan_added` (array)
- `jira_update` (array)
- `upcoming_engagement` (array)
- `stale_engagement` (array)
- `auto_close_engagement` (array)
- `close_engagement` (array)
- `user_mentioned` (array)
- `code_review` (array)
- `review_requested` (array)
- `other` (array)
- `sla_breach` (array)
- `sla_breach_combined` (array)
- `risk_acceptance_expiration` (array)
- `template` (boolean)
- `scan_added_empty` (string)

### notifications_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### notifications_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### oa3_schema_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `format` (string)
- `lang` (string)

### product_api_scan_configurations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `service_key_1` (string)
- `service_key_2` (string)
- `service_key_3` (string)
- `tool_configuration` (integer)

### product_api_scan_configurations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `service_key_1` (string)
- `service_key_2` (string)
- `service_key_3` (string)
- `product` (integer)
- `tool_configuration` (integer)

### product_api_scan_configurations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_api_scan_configurations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `service_key_1` (string)
- `service_key_2` (string)
- `service_key_3` (string)
- `product` (integer)
- `tool_configuration` (integer)

### product_api_scan_configurations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `service_key_1` (string)
- `service_key_2` (string)
- `service_key_3` (string)
- `product` (integer)
- `tool_configuration` (integer)

### product_api_scan_configurations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_api_scan_configurations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `group_id` (integer)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product_id` (integer)

### product_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `group` (integer)
- `role` (integer)

### product_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `group` (integer)
- `role` (integer)

### product_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_groups_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_members_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product_id` (integer)
- `user_id` (integer)

### product_members_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (integer)
- `user` (integer)
- `role` (integer)

### product_members_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_members_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product` (integer)
- `user` (integer)
- `role` (integer)

### product_members_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_members_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_type_groups_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `group_id` (integer)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product_type_id` (integer)

### product_type_groups_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_type` (integer)
- `group` (integer)
- `role` (integer)

### product_type_groups_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_type_groups_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product_type` (integer)
- `group` (integer)
- `role` (integer)

### product_type_groups_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_type_groups_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_type_members_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)
- `product_type_id` (integer)
- `user_id` (integer)

### product_type_members_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product_type` (integer)
- `user` (integer)
- `role` (integer)

### product_type_members_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_type_members_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `product_type` (integer)
- `user` (integer)
- `role` (integer)

### product_type_members_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_type_members_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (string)
- `critical_product` (boolean)
- `id` (integer)
- `key_product` (boolean)
- `limit` (integer)
- `name` (string)
- `offset` (integer)
- `prefetch` (array)
- `updated` (string)

### product_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `critical_product` (boolean)
- `key_product` (boolean)

### product_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### product_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `critical_product` (boolean)
- `key_product` (boolean)

### product_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `critical_product` (boolean)
- `key_product` (boolean)

### product_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### product_types_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### product_types_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### products_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `business_criticality` (string)
- `created` (string)
- `description` (string)
- `external_audience` (boolean)
- `has_tags` (boolean)
- `id` (array)
- `internet_accessible` (boolean)
- `lifecycle` (string)
- `limit` (integer)
- `name` (string)
- `name_exact` (string)
- `not_tag` (string)
- `not_tags` (array)
- `o` (array)
- `offset` (integer)
- `origin` (string)
- `outside_of_sla` (number)
- `platform` (string)
- `prefetch` (array)
- `prod_numeric_grade` (array)
- `prod_type` (array)
- `product_manager` (array)
- `regulations` (array)
- `revenue` (number)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `team_manager` (array)
- `technical_contact` (array)
- `tid` (array)
- `updated` (string)
- `user_records` (array)

### products_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `name` (string)
- `description` (string)
- `prod_numeric_grade` (integer)
- `business_criticality` (string)
- `platform` (string)
- `lifecycle` (string)
- `origin` (string)
- `user_records` (integer)
- `revenue` (string)
- `external_audience` (boolean)
- `internet_accessible` (boolean)
- `enable_product_tag_inheritance` (boolean)
- `enable_simple_risk_acceptance` (boolean)
- `enable_full_risk_acceptance` (boolean)
- `disable_sla_breach_notifications` (boolean)
- `product_manager` (integer)
- `technical_contact` (integer)
- `team_manager` (integer)
- `prod_type` (integer)
- `sla_configuration` (integer)
- `regulations` (array)

### products_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### products_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `description` (string)
- `prod_numeric_grade` (integer)
- `business_criticality` (string)
- `platform` (string)
- `lifecycle` (string)
- `origin` (string)
- `user_records` (integer)
- `revenue` (string)
- `external_audience` (boolean)
- `internet_accessible` (boolean)
- `enable_product_tag_inheritance` (boolean)
- `enable_simple_risk_acceptance` (boolean)
- `enable_full_risk_acceptance` (boolean)
- `disable_sla_breach_notifications` (boolean)
- `product_manager` (integer)
- `technical_contact` (integer)
- `team_manager` (integer)
- `prod_type` (integer)
- `sla_configuration` (integer)
- `regulations` (array)

### products_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `description` (string)
- `prod_numeric_grade` (integer)
- `business_criticality` (string)
- `platform` (string)
- `lifecycle` (string)
- `origin` (string)
- `user_records` (integer)
- `revenue` (string)
- `external_audience` (boolean)
- `internet_accessible` (boolean)
- `enable_product_tag_inheritance` (boolean)
- `enable_simple_risk_acceptance` (boolean)
- `enable_full_risk_acceptance` (boolean)
- `disable_sla_breach_notifications` (boolean)
- `product_manager` (integer)
- `technical_contact` (integer)
- `team_manager` (integer)
- `prod_type` (integer)
- `sla_configuration` (integer)
- `regulations` (array)

### products_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### products_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### products_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### questionnaire_answered_questionnaires_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `prefetch` (array)

### questionnaire_answered_questionnaires_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### questionnaire_answers_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### questionnaire_answers_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### questionnaire_engagement_questionnaires_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### questionnaire_engagement_questionnaires_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### questionnaire_engagement_questionnaires_link_engagement_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `engagement_id` (integer)
- `id` (integer)

### questionnaire_general_questionnaires_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### questionnaire_general_questionnaires_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### questionnaire_questions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### questionnaire_questions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### regulations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)

### regulations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `acronym` (string)
- `category` (string)
- `jurisdiction` (string)
- `description` (string)
- `reference` (string)

### regulations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### regulations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `acronym` (string)
- `category` (string)
- `jurisdiction` (string)
- `description` (string)
- `reference` (string)

### regulations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `acronym` (string)
- `category` (string)
- `jurisdiction` (string)
- `description` (string)
- `reference` (string)

### regulations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### regulations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### reimport_scan_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### request_response_pairs_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `finding` (integer)
- `limit` (integer)
- `offset` (integer)

### request_response_pairs_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `burpRequestBase64` (string)
- `burpResponseBase64` (string)
- `finding` (integer)

### request_response_pairs_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### request_response_pairs_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `burpRequestBase64` (string)
- `burpResponseBase64` (string)
- `finding` (integer)

### request_response_pairs_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `burpRequestBase64` (string)
- `burpResponseBase64` (string)
- `finding` (integer)

### request_response_pairs_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### request_response_pairs_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### risk_acceptance_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `accepted_by` (string)
- `accepted_findings` (array)
- `decision` (string)
- `decision_details` (string)
- `expiration_date` (string)
- `expiration_date_handled` (string)
- `expiration_date_warned` (string)
- `limit` (integer)
- `name` (string)
- `notes` (array)
- `o` (array)
- `offset` (integer)
- `owner` (integer)
- `reactivate_expired` (boolean)
- `recommendation` (string)
- `recommendation_details` (string)
- `restart_sla_expired` (boolean)

### risk_acceptance_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `recommendation` (string)
- `recommendation_details` (string)
- `decision` (string)
- `decision_details` (string)
- `accepted_by` (string)
- `expiration_date` (string)
- `expiration_date_warned` (string)
- `expiration_date_handled` (string)
- `reactivate_expired` (boolean)
- `restart_sla_expired` (boolean)
- `owner` (integer)
- `accepted_findings` (array)

### risk_acceptance_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### risk_acceptance_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `recommendation` (string)
- `recommendation_details` (string)
- `decision` (string)
- `decision_details` (string)
- `accepted_by` (string)
- `expiration_date` (string)
- `expiration_date_warned` (string)
- `expiration_date_handled` (string)
- `reactivate_expired` (boolean)
- `restart_sla_expired` (boolean)
- `owner` (integer)
- `accepted_findings` (array)

### risk_acceptance_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `recommendation` (string)
- `recommendation_details` (string)
- `decision` (string)
- `decision_details` (string)
- `accepted_by` (string)
- `expiration_date` (string)
- `expiration_date_warned` (string)
- `expiration_date_handled` (string)
- `reactivate_expired` (boolean)
- `restart_sla_expired` (boolean)
- `owner` (integer)
- `accepted_findings` (array)

### risk_acceptance_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### risk_acceptance_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### risk_acceptance_download_proof_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### roles_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)

### roles_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sla_configurations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### sla_configurations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `critical` (integer)
- `enforce_critical` (boolean)
- `high` (integer)
- `enforce_high` (boolean)
- `medium` (integer)
- `enforce_medium` (boolean)
- `low` (integer)
- `enforce_low` (boolean)

### sla_configurations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sla_configurations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `critical` (integer)
- `enforce_critical` (boolean)
- `high` (integer)
- `enforce_high` (boolean)
- `medium` (integer)
- `enforce_medium` (boolean)
- `low` (integer)
- `enforce_low` (boolean)

### sla_configurations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `critical` (integer)
- `enforce_critical` (boolean)
- `high` (integer)
- `enforce_high` (boolean)
- `medium` (integer)
- `enforce_medium` (boolean)
- `low` (integer)
- `enforce_low` (boolean)

### sla_configurations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sla_configurations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### sonarqube_issues_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `key` (string)
- `limit` (integer)
- `offset` (integer)
- `status` (string)
- `type` (string)

### sonarqube_issues_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)
- `status` (string)
- `type` (string)

### sonarqube_issues_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sonarqube_issues_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `key` (string)
- `status` (string)
- `type` (string)

### sonarqube_issues_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `key` (string)
- `status` (string)
- `type` (string)

### sonarqube_issues_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sonarqube_issues_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### sonarqube_transitions_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `finding_status` (string)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `sonarqube_issue` (integer)
- `sonarqube_status` (string)
- `transitions` (string)

### sonarqube_transitions_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `finding_status` (string)
- `sonarqube_status` (string)
- `transitions` (string)
- `sonarqube_issue` (integer)

### sonarqube_transitions_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sonarqube_transitions_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `finding_status` (string)
- `sonarqube_status` (string)
- `transitions` (string)
- `sonarqube_issue` (integer)

### sonarqube_transitions_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `finding_status` (string)
- `sonarqube_status` (string)
- `transitions` (string)
- `sonarqube_issue` (integer)

### sonarqube_transitions_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### sonarqube_transitions_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### stub_findings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `date` (string)
- `description` (string)
- `id` (integer)
- `limit` (integer)
- `offset` (integer)
- `severity` (string)
- `title` (string)

### stub_findings_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `test` (integer)
- `title` (string)
- `date` (string)
- `severity` (string)
- `description` (string)

### stub_findings_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### stub_findings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `date` (string)
- `severity` (string)
- `description` (string)

### stub_findings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `date` (string)
- `severity` (string)
- `description` (string)

### stub_findings_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### stub_findings_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### system_settings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### system_settings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `enable_deduplication` (boolean)
- `delete_duplicates` (boolean)
- `max_dupes` (integer)
- `email_from` (string)
- `enable_jira` (boolean)
- `enable_jira_web_hook` (boolean)
- `disable_jira_webhook_secret` (boolean)
- `jira_webhook_secret` (string)
- `jira_minimum_severity` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `enable_github` (boolean)
- `enable_slack_notifications` (boolean)
- `slack_channel` (string)
- `slack_token` (string)
- `slack_username` (string)
- `enable_msteams_notifications` (boolean)
- `msteams_url` (string)
- `enable_mail_notifications` (boolean)
- `mail_notifications_to` (string)
- `enable_webhooks_notifications` (boolean)
- `webhooks_notifications_timeout` (integer)
- `enforce_verified_status` (boolean)
- `enforce_verified_status_jira` (boolean)
- `enforce_verified_status_product_grading` (boolean)
- `enforce_verified_status_metrics` (boolean)
- `false_positive_history` (boolean)
- `retroactive_false_positive_history` (boolean)
- `url_prefix` (string)
- `team_name` (string)
- `time_zone` (string)
- `enable_product_grade` (boolean)
- `product_grade` (string)
- `product_grade_a` (integer)
- `product_grade_b` (integer)
- `product_grade_c` (integer)
- `product_grade_d` (integer)
- `product_grade_f` (integer)
- `enable_product_tag_inheritance` (boolean)
- `enable_benchmark` (boolean)
- `enable_template_match` (boolean)
- `enable_similar_findings` (boolean)
- `engagement_auto_close` (boolean)
- `engagement_auto_close_days` (integer)
- `enable_finding_sla` (boolean)
- `enable_notify_sla_active` (boolean)
- `enable_notify_sla_active_verified` (boolean)
- `enable_notify_sla_jira_only` (boolean)
- `enable_notify_sla_exponential_backoff` (boolean)
- `allow_anonymous_survey_repsonse` (boolean)
- `credentials` (string)
- `disclaimer_notifications` (string)
- `disclaimer_reports` (string)
- `disclaimer_reports_forced` (boolean)
- `disclaimer_notes` (string)
- `risk_acceptance_form_default_days` (integer)
- `risk_acceptance_notify_before_expiration` (integer)
- `enable_credentials` (boolean)
- `enable_questionnaires` (boolean)
- `enable_checklists` (boolean)
- `enable_endpoint_metadata_import` (boolean)
- `enable_user_profile_editable` (boolean)
- `enable_product_tracking_files` (boolean)
- `enable_finding_groups` (boolean)
- `enable_ui_table_based_searching` (boolean)
- `enable_calendar` (boolean)
- `default_group_email_pattern` (string)
- `minimum_password_length` (integer)
- `maximum_password_length` (integer)
- `number_character_required` (boolean)
- `special_character_required` (boolean)
- `lowercase_character_required` (boolean)
- `uppercase_character_required` (boolean)
- `non_common_password_required` (boolean)
- `api_expose_error_details` (boolean)
- `filter_string_matching` (boolean)
- `default_group` (integer)
- `default_group_role` (integer)

### system_settings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `enable_deduplication` (boolean)
- `delete_duplicates` (boolean)
- `max_dupes` (integer)
- `email_from` (string)
- `enable_jira` (boolean)
- `enable_jira_web_hook` (boolean)
- `disable_jira_webhook_secret` (boolean)
- `jira_webhook_secret` (string)
- `jira_minimum_severity` (string)
- `jira_labels` (string)
- `add_vulnerability_id_to_jira_label` (boolean)
- `enable_github` (boolean)
- `enable_slack_notifications` (boolean)
- `slack_channel` (string)
- `slack_token` (string)
- `slack_username` (string)
- `enable_msteams_notifications` (boolean)
- `msteams_url` (string)
- `enable_mail_notifications` (boolean)
- `mail_notifications_to` (string)
- `enable_webhooks_notifications` (boolean)
- `webhooks_notifications_timeout` (integer)
- `enforce_verified_status` (boolean)
- `enforce_verified_status_jira` (boolean)
- `enforce_verified_status_product_grading` (boolean)
- `enforce_verified_status_metrics` (boolean)
- `false_positive_history` (boolean)
- `retroactive_false_positive_history` (boolean)
- `url_prefix` (string)
- `team_name` (string)
- `time_zone` (string)
- `enable_product_grade` (boolean)
- `product_grade` (string)
- `product_grade_a` (integer)
- `product_grade_b` (integer)
- `product_grade_c` (integer)
- `product_grade_d` (integer)
- `product_grade_f` (integer)
- `enable_product_tag_inheritance` (boolean)
- `enable_benchmark` (boolean)
- `enable_template_match` (boolean)
- `enable_similar_findings` (boolean)
- `engagement_auto_close` (boolean)
- `engagement_auto_close_days` (integer)
- `enable_finding_sla` (boolean)
- `enable_notify_sla_active` (boolean)
- `enable_notify_sla_active_verified` (boolean)
- `enable_notify_sla_jira_only` (boolean)
- `enable_notify_sla_exponential_backoff` (boolean)
- `allow_anonymous_survey_repsonse` (boolean)
- `credentials` (string)
- `disclaimer_notifications` (string)
- `disclaimer_reports` (string)
- `disclaimer_reports_forced` (boolean)
- `disclaimer_notes` (string)
- `risk_acceptance_form_default_days` (integer)
- `risk_acceptance_notify_before_expiration` (integer)
- `enable_credentials` (boolean)
- `enable_questionnaires` (boolean)
- `enable_checklists` (boolean)
- `enable_endpoint_metadata_import` (boolean)
- `enable_user_profile_editable` (boolean)
- `enable_product_tracking_files` (boolean)
- `enable_finding_groups` (boolean)
- `enable_ui_table_based_searching` (boolean)
- `enable_calendar` (boolean)
- `default_group_email_pattern` (string)
- `minimum_password_length` (integer)
- `maximum_password_length` (integer)
- `number_character_required` (boolean)
- `special_character_required` (boolean)
- `lowercase_character_required` (boolean)
- `uppercase_character_required` (boolean)
- `non_common_password_required` (boolean)
- `api_expose_error_details` (boolean)
- `filter_string_matching` (boolean)
- `default_group` (integer)
- `default_group_role` (integer)

### technologies_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `name` (string)
- `not_tag` (string)
- `not_tags` (array)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `user` (integer)
- `version` (string)

### technologies_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `name` (string)
- `confidence` (integer)
- `version` (string)
- `icon` (string)
- `website` (string)
- `website_found` (string)
- `product` (integer)
- `user` (integer)

### technologies_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### technologies_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `confidence` (integer)
- `version` (string)
- `icon` (string)
- `website` (string)
- `website_found` (string)
- `product` (integer)
- `user` (integer)

### technologies_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `confidence` (integer)
- `version` (string)
- `icon` (string)
- `website` (string)
- `website_found` (string)
- `product` (integer)
- `user` (integer)

### technologies_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### technologies_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### test_imports_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `branch_tag` (string)
- `build_id` (string)
- `commit_hash` (string)
- `findings_affected` (array)
- `limit` (integer)
- `o` (array)
- `offset` (integer)
- `test` (integer)
- `test_import_finding_action__action` (string)
- `test_import_finding_action__created` (string)
- `test_import_finding_action__finding` (integer)
- `version` (string)

### test_imports_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `import_settings` (other)
- `type` (string)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)

### test_imports_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### test_imports_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `import_settings` (other)
- `type` (string)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)

### test_imports_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `import_settings` (other)
- `type` (string)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)

### test_imports_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### test_imports_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### test_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `name` (string)
- `offset` (integer)

### test_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tags` (array)
- `name` (string)
- `static_tool` (boolean)
- `dynamic_tool` (boolean)
- `active` (boolean)

### test_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### test_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `static_tool` (boolean)
- `dynamic_tool` (boolean)
- `active` (boolean)

### test_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `name` (string)
- `static_tool` (boolean)
- `dynamic_tool` (boolean)
- `active` (boolean)

### tests_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `api_scan_configuration` (integer)
- `branch_tag` (string)
- `build_id` (string)
- `commit_hash` (string)
- `engagement` (integer)
- `engagement__product__tags` (array)
- `engagement__product__tags__and` (array)
- `engagement__tags` (array)
- `engagement__tags__and` (array)
- `has_tags` (boolean)
- `id` (integer)
- `limit` (integer)
- `not_engagement__product__tags` (array)
- `not_engagement__tags` (array)
- `not_tag` (string)
- `not_tags` (array)
- `notes` (array)
- `o` (array)
- `offset` (integer)
- `percent_complete` (integer)
- `scan_type` (string)
- `tag` (string)
- `tags` (array)
- `tags__and` (array)
- `target_end` (string)
- `target_start` (string)
- `test_type` (integer)
- `title` (string)
- `version` (string)

### tests_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `engagement` (integer)
- `notes` (array)
- `tags` (array)
- `scan_type` (string)
- `title` (string)
- `description` (string)
- `target_start` (string)
- `target_end` (string)
- `percent_complete` (integer)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `lead` (integer)
- `test_type` (integer)
- `environment` (integer)
- `api_scan_configuration` (integer)

### tests_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `scan_type` (string)
- `title` (string)
- `description` (string)
- `target_start` (string)
- `target_end` (string)
- `percent_complete` (integer)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `lead` (integer)
- `test_type` (integer)
- `environment` (integer)
- `api_scan_configuration` (integer)

### tests_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `tags` (array)
- `scan_type` (string)
- `title` (string)
- `description` (string)
- `target_start` (string)
- `target_end` (string)
- `percent_complete` (integer)
- `version` (string)
- `build_id` (string)
- `commit_hash` (string)
- `branch_tag` (string)
- `lead` (integer)
- `test_type` (integer)
- `environment` (integer)
- `api_scan_configuration` (integer)

### tests_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_accept_risks_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### tests_files_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_files_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_files_download_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `file_id` (string)
- `id` (integer)

### tests_generate_report_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `include_finding_notes` (boolean)
- `include_finding_images` (boolean)
- `include_executive_summary` (boolean)
- `include_table_of_contents` (boolean)

### tests_notes_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tests_notes_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `entry` (string)
- `private` (boolean)
- `note_type` (integer)

### tool_configurations_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authentication_type` (string)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)
- `prefetch` (array)
- `tool_type` (integer)
- `url` (string)

### tool_configurations_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `url` (string)
- `authentication_type` (string)
- `extras` (string)
- `username` (string)
- `password` (string)
- `auth_title` (string)
- `ssh` (string)
- `api_key` (string)
- `tool_type` (integer)

### tool_configurations_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### tool_configurations_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `url` (string)
- `authentication_type` (string)
- `extras` (string)
- `username` (string)
- `password` (string)
- `auth_title` (string)
- `ssh` (string)
- `api_key` (string)
- `tool_type` (integer)

### tool_configurations_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)
- `url` (string)
- `authentication_type` (string)
- `extras` (string)
- `username` (string)
- `password` (string)
- `auth_title` (string)
- `ssh` (string)
- `api_key` (string)
- `tool_type` (integer)

### tool_configurations_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tool_configurations_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### tool_product_settings_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)
- `prefetch` (array)
- `product` (integer)
- `tool_configuration` (integer)
- `tool_project_id` (string)
- `url` (string)

### tool_product_settings_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `setting_url` (string)
- `product` (integer)
- `name` (string)
- `description` (string)
- `url` (string)
- `tool_project_id` (string)
- `tool_configuration` (integer)

### tool_product_settings_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### tool_product_settings_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `setting_url` (string)
- `product` (integer)
- `name` (string)
- `description` (string)
- `url` (string)
- `tool_project_id` (string)
- `tool_configuration` (integer)

### tool_product_settings_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `setting_url` (string)
- `product` (integer)
- `name` (string)
- `description` (string)
- `url` (string)
- `tool_project_id` (string)
- `tool_configuration` (integer)

### tool_product_settings_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tool_product_settings_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### tool_types_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `description` (string)
- `id` (integer)
- `limit` (integer)
- `name` (string)
- `offset` (integer)

### tool_types_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)

### tool_types_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tool_types_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)

### tool_types_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `name` (string)
- `description` (string)

### tool_types_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### tool_types_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### user_contact_infos_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `block_execution` (boolean)
- `cell_number` (string)
- `force_password_reset` (boolean)
- `github_username` (string)
- `limit` (integer)
- `offset` (integer)
- `phone_number` (string)
- `prefetch` (array)
- `slack_user_id` (string)
- `slack_username` (string)
- `title` (string)
- `twitter_username` (string)
- `user` (integer)

### user_contact_infos_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `phone_number` (string)
- `cell_number` (string)
- `twitter_username` (string)
- `github_username` (string)
- `slack_username` (string)
- `slack_user_id` (string)
- `block_execution` (boolean)
- `force_password_reset` (boolean)
- `user` (integer)

### user_contact_infos_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `prefetch` (array)

### user_contact_infos_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `phone_number` (string)
- `cell_number` (string)
- `twitter_username` (string)
- `github_username` (string)
- `slack_username` (string)
- `slack_user_id` (string)
- `block_execution` (boolean)
- `force_password_reset` (boolean)
- `user` (integer)

### user_contact_infos_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `title` (string)
- `phone_number` (string)
- `cell_number` (string)
- `twitter_username` (string)
- `github_username` (string)
- `slack_username` (string)
- `slack_user_id` (string)
- `block_execution` (boolean)
- `force_password_reset` (boolean)
- `user` (integer)

### user_contact_infos_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### user_contact_infos_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)

### user_profile_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### users_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `date_joined_after` (string)
- `date_joined_before` (string)
- `email` (string)
- `first_name` (string)
- `id` (integer)
- `is_active` (boolean)
- `is_superuser` (boolean)
- `last_login_after` (string)
- `last_login_before` (string)
- `last_name` (string)
- `limit` (integer)
- `o` (array)
- `offset` (integer)
- `username` (string)

### users_create

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `username` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_active` (boolean)
- `is_superuser` (boolean)
- `password` (string)
- `configuration_permissions` (array)

### users_retrieve

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### users_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `username` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_active` (boolean)
- `is_superuser` (boolean)
- `password` (string)
- `configuration_permissions` (array)

### users_partial_update

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `username` (string)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `is_active` (boolean)
- `is_superuser` (boolean)
- `password` (string)
- `configuration_permissions` (array)

### users_destroy

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)

### users_delete_preview_list

**Environment variables**

- `AUTHORIZATION`
- `SESSIONID`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (integer)
- `limit` (integer)
- `offset` (integer)
