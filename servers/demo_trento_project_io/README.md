# @open-mcp/demo_trento_project_io

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "demo_trento_project_io": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/demo_trento_project_io@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/demo_trento_project_io@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add demo_trento_project_io \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add demo_trento_project_io \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add demo_trento_project_io \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "demo_trento_project_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/demo_trento_project_io"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### trentoweb_v1_settingscontroller_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_hostcontroller_list

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_userscontroller_index

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_userscontroller_create

**Environment variables**

- `API_KEY`

**Input schema**

- `abilities` (array)
- `email` (string)
- `enabled` (boolean)
- `fullname` (string)
- `password` (string)
- `password_confirmation` (string)
- `username` (string)

### trentoweb_v1_hostcontroller_heartbeat

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### trentoweb_v1_profilecontroller_show

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_profilecontroller_update

**Environment variables**

- `API_KEY`

**Input schema**

- `analytics_enabled` (boolean)
- `current_password` (string)
- `email` (string)
- `fullname` (string)
- `password` (string)
- `password_confirmation` (string)

### trentoweb_v1_sapsystemcontroller_request_instance_operation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `host_id` (string)
- `instance_number` (string)
- `operation` (string)

### trentoweb_v1_susemanagercontroller_patches_for_packages

**Environment variables**

- `API_KEY`

**Input schema**

- `host_id` (string)

### trentoweb_v1_chartcontroller_host_cpu

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `from` (string)
- `to` (string)

### trentoweb_v1_tagscontroller_remove_tag_4_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_tagscontroller_add_tag_4_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_healthcontroller_ready

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### trentoweb_v1_clustercontroller_request_operation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `operation` (string)

### trentoweb_v1_tagscontroller_remove_tag_3_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_susemanagercontroller_software_updates

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### trentoweb_sessioncontroller_callback

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `code` (string)
- `session_state` (string)

### trentoweb_v1_tagscontroller_add_tag_3_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_databasecontroller_list_databases

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_clustercontroller_request_checks_execution

**Environment variables**

- `API_KEY`

**Input schema**

- `cluster_id` (string)

### trentoweb_v1_settingscontroller_get_public_keys

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_hostcontroller_request_checks_execution

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### trentoweb_v1_abilitycontroller_index

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_clustercontroller_request_host_operation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `host_id` (string)
- `operation` (string)

### trentoweb_v1_settingscontroller_get_activity_log_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_update_activity_log_settings

**Environment variables**

- `API_KEY`

**Input schema**

- `retention_time` (object)

### trentoweb_v1_activitylogcontroller_get_activity_log

**Environment variables**

- `API_KEY`

**Input schema**

- `first` (integer)
- `last` (integer)
- `after` (string)
- `before` (string)
- `from_date` (string)
- `to_date` (string)
- `actor` (array)
- `search` (string)
- `type` (array)
- `severity` (array)

### trentoweb_v1_settingscontroller_delete_suse_manager_settings_2_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_get_suse_manager_settings_2_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_update_suse_manager_settings_4_

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_v1_settingscontroller_save_suse_manager_settings_2_

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_v1_settingscontroller_update_suse_manager_settings_3_

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_sessioncontroller_show

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_sessioncontroller_create

**Environment variables**

No environment variables required

**Input schema**

- `password` (string)
- `totp_code` (string)
- `username` (string)

### trentoweb_v1_settingscontroller_test_suse_manager_settings_2_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_get_api_key_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_update_api_key_settings

**Environment variables**

- `API_KEY`

**Input schema**

- `expire_at` (string)

### trentoweb_v1_hostcontroller_request_operation

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `operation` (string)

### trentoweb_v1_healthoverviewcontroller_overview

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_tagscontroller_add_tag_2_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_databasecontroller_delete_database_instance

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `host_id` (string)
- `instance_number` (string)

### trentoweb_v1_tagscontroller_remove_tag_2_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_settingscontroller_accept_eula_2_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_sessioncontroller_refresh

**Environment variables**

No environment variables required

**Input schema**

- `refresh_token` (string)

### trentoweb_v1_installationcontroller_get_api_key

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_prometheuscontroller_targets

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_clustercontroller_select_checks

**Environment variables**

- `API_KEY`

**Input schema**

- `cluster_id` (string)
- `checks` (array)

### trentoweb_v1_chartcontroller_host_memory

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `from` (string)
- `to` (string)

### trentoweb_v1_settingscontroller_test_suse_manager_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_hostcontroller_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### trentoweb_v1_tagscontroller_add_tag

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_profilecontroller_reset_totp

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_profilecontroller_get_totp_enrollment_data

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_profilecontroller_confirm_totp_enrollment

**Environment variables**

- `API_KEY`

**Input schema**

- `totp_code` (string)

### trentoweb_healthcontroller_health

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### trentoweb_v1_prometheuscontroller_exporters_status

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_tagscontroller_remove_tag

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `value` (string)

### trentoweb_v1_settingscontroller_delete_suse_manager_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_get_suse_manager_settings

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_update_suse_manager_settings_2_

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_v1_settingscontroller_save_suse_manager_settings

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_v1_settingscontroller_update_suse_manager_settings

**Environment variables**

- `API_KEY`

**Input schema**

- `ca_cert` (string)
- `password` (string)
- `url` (string)
- `username` (string)

### trentoweb_v1_sapsystemcontroller_delete_application_instance

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `host_id` (string)
- `instance_number` (string)

### trentoweb_v1_susemanagercontroller_errata_details

**Environment variables**

- `API_KEY`

**Input schema**

- `advisory_name` (string)

### trentoweb_v1_userscontroller_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### trentoweb_v1_userscontroller_show

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### trentoweb_v1_userscontroller_update_2_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `abilities` (array)
- `email` (string)
- `enabled` (boolean)
- `fullname` (string)
- `password` (string)
- `password_confirmation` (string)
- `totp_disabled` (boolean)
- `if-match` (integer)

### trentoweb_v1_userscontroller_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `abilities` (array)
- `email` (string)
- `enabled` (boolean)
- `fullname` (string)
- `password` (string)
- `password_confirmation` (string)
- `totp_disabled` (boolean)
- `if-match` (integer)

### trentoweb_v1_clustercontroller_list

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_hostcontroller_select_checks

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `checks` (array)

### trentoweb_v1_sapsystemcontroller_list

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_aboutcontroller_info

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_v1_settingscontroller_accept_eula

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### trentoweb_sessioncontroller_saml_callback

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### trentoweb_v1_discoverycontroller_collect

**Environment variables**

- `API_KEY`

**Input schema**

- `agent_id` (string)
- `discovery_type` (string)
- `payload` (other)
