# @open-mcp/api_example_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### get_admin_realms

### post_admin_realms

### get_admin_realms_realm_

### put_admin_realms_realm_

### delete_admin_realms_realm_

### parameters_admin_realms_realm_

### get_admin_realms_realm_admin_events

### delete_admin_realms_realm_admin_events

### parameters_admin_realms_realm_admin_events

### delete_admin_realms_realm_attack_detection_brute_force_users

### parameters_admin_realms_realm_attack_detection_brute_force_users

### get_admin_realms_realm_attack_detection_brute_force_users_userid

### delete_admin_realms_realm_attack_detection_brute_force_users_use

### parameters_admin_realms_realm_attack_detection_brute_force_users

### get_admin_realms_realm_authentication_authenticator_providers

### parameters_admin_realms_realm_authentication_authenticator_provi

### get_admin_realms_realm_authentication_client_authenticator_provi

### parameters_admin_realms_realm_authentication_client_authenticato

### post_admin_realms_realm_authentication_config

### parameters_admin_realms_realm_authentication_config

### get_admin_realms_realm_authentication_config_description_provide

### parameters_admin_realms_realm_authentication_config_description_

### get_admin_realms_realm_authentication_config_id_

### put_admin_realms_realm_authentication_config_id_

### delete_admin_realms_realm_authentication_config_id_

### parameters_admin_realms_realm_authentication_config_id_

### post_admin_realms_realm_authentication_executions

### parameters_admin_realms_realm_authentication_executions

### get_admin_realms_realm_authentication_executions_executionid_

### delete_admin_realms_realm_authentication_executions_executionid_

### parameters_admin_realms_realm_authentication_executions_executio

### post_admin_realms_realm_authentication_executions_executionid_co

### parameters_admin_realms_realm_authentication_executions_executio

### get_admin_realms_realm_authentication_executions_executionid_con

### parameters_admin_realms_realm_authentication_executions_executio

### post_admin_realms_realm_authentication_executions_executionid_lo

### parameters_admin_realms_realm_authentication_executions_executio

### post_admin_realms_realm_authentication_executions_executionid_ra

### parameters_admin_realms_realm_authentication_executions_executio

### get_admin_realms_realm_authentication_flows

### post_admin_realms_realm_authentication_flows

### parameters_admin_realms_realm_authentication_flows

### post_admin_realms_realm_authentication_flows_flowalias_copy

### parameters_admin_realms_realm_authentication_flows_flowalias_cop

### get_admin_realms_realm_authentication_flows_flowalias_executions

### put_admin_realms_realm_authentication_flows_flowalias_executions

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

### post_admin_realms_realm_authentication_flows_flowalias_execution

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

### post_admin_realms_realm_authentication_flows_flowalias_execution

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

### get_admin_realms_realm_authentication_flows_id_

### put_admin_realms_realm_authentication_flows_id_

### delete_admin_realms_realm_authentication_flows_id_

### parameters_admin_realms_realm_authentication_flows_id_

### get_admin_realms_realm_authentication_form_action_providers

### parameters_admin_realms_realm_authentication_form_action_provide

### get_admin_realms_realm_authentication_form_providers

### parameters_admin_realms_realm_authentication_form_providers

### get_admin_realms_realm_authentication_per_client_config_descript

### parameters_admin_realms_realm_authentication_per_client_config_d

### post_admin_realms_realm_authentication_register_required_action

### parameters_admin_realms_realm_authentication_register_required_a

### get_admin_realms_realm_authentication_required_actions

### parameters_admin_realms_realm_authentication_required_actions

### get_admin_realms_realm_authentication_required_actions_alias_

### put_admin_realms_realm_authentication_required_actions_alias_

### delete_admin_realms_realm_authentication_required_actions_alias_

### parameters_admin_realms_realm_authentication_required_actions_al

### get_admin_realms_realm_authentication_required_actions_alias_con

### put_admin_realms_realm_authentication_required_actions_alias_con

### delete_admin_realms_realm_authentication_required_actions_alias_

### parameters_admin_realms_realm_authentication_required_actions_al

### get_admin_realms_realm_authentication_required_actions_alias_con

### parameters_admin_realms_realm_authentication_required_actions_al

### post_admin_realms_realm_authentication_required_actions_alias_lo

### parameters_admin_realms_realm_authentication_required_actions_al

### post_admin_realms_realm_authentication_required_actions_alias_ra

### parameters_admin_realms_realm_authentication_required_actions_al

### get_admin_realms_realm_authentication_unregistered_required_acti

### parameters_admin_realms_realm_authentication_unregistered_requir

### post_admin_realms_realm_client_description_converter

### parameters_admin_realms_realm_client_description_converter

### get_admin_realms_realm_client_policies_policies

### put_admin_realms_realm_client_policies_policies

### parameters_admin_realms_realm_client_policies_policies

### get_admin_realms_realm_client_policies_profiles

### put_admin_realms_realm_client_policies_profiles

### parameters_admin_realms_realm_client_policies_profiles

### get_admin_realms_realm_client_registration_policy_providers

### parameters_admin_realms_realm_client_registration_policy_provide

### get_admin_realms_realm_client_scopes

### post_admin_realms_realm_client_scopes

### parameters_admin_realms_realm_client_scopes

### get_admin_realms_realm_client_scopes_client_scope_id_

### put_admin_realms_realm_client_scopes_client_scope_id_

### delete_admin_realms_realm_client_scopes_client_scope_id_

### parameters_admin_realms_realm_client_scopes_client_scope_id_

### post_admin_realms_realm_client_scopes_client_scope_id_protocol_m

### parameters_admin_realms_realm_client_scopes_client_scope_id_prot

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_example_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_example_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
