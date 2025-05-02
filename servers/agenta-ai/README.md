# @open-mcp/agenta-ai

## Installing

First set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add agenta-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add agenta-ai \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Other

```bash
npx @open-mcp/config add agenta-ai \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "agenta-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/agenta-ai"],
      "env": {"AUTHORIZATION":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `AUTHORIZATION`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/agenta-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/agenta-ai`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### create_accounts

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `users` (object)
- `organizations` (object)
- `workspaces` (object)
- `projects` (object)
- `organization_memberships` (object)
- `workspace_memberships` (object)
- `project_memberships` (object)

### create_account

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `user` (object)
- `scope` (object)

### get_own_org

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### fetch_organization_details

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)

### update_organization

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `name` (other)
- `description` (other)
- `updated_at` (other)

### create_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `name` (string)
- `description` (other)
- `type` (other)

### update_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `workspace_id` (string)
- `name` (other)
- `description` (other)
- `updated_at` (other)

### get_all_workspace_permissions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### assign_role_to_user

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `workspace_id` (string)
- `email` (string)
- `organization_id` (string)
- `role` (other)

### unassign_role_from_user

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `workspace_id` (string)
- `email` (string)
- `org_id` (string)
- `role` (string)

### fetch_evaluation_ids_evaluations_by_resource_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `resource_type` (string)
- `resource_ids` (array)

### create_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `revisions_ids` (array)
- `evaluators_configs` (array)
- `testset_id` (string)
- `rate_limit` (object)
- `correct_answer_column` (other)

### fetch_list_evaluations_evaluations_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### delete_evaluations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluations_ids` (array)

### fetch_evaluation_status

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### fetch_evaluation_results

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### fetch_evaluation_scenarios

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### fetch_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### fetch_evaluation_scenarios_evaluations_evaluation_scenarios_comp

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluations_ids` (string)

### create_human_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `variant_ids` (array)
- `evaluation_type` (string)
- `inputs` (array)
- `testset_id` (string)
- `status` (string)

### fetch_list_human_evaluations_human_evaluations_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### delete_evaluations_human_evaluations_delete

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluations_ids` (array)

### fetch_human_evaluation_human_evaluations_evaluation_id_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### update_human_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)
- `status` (other)

### fetch_human_evaluation_scenarios

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### update_evaluation_scenario_router_human_evaluations_evaluation_i

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)
- `evaluation_scenario_id` (string)
- `evaluation_type` (string)
- `vote` (other)
- `score` (other)
- `correct_answer` (other)
- `outputs` (other)
- `inputs` (other)
- `is_pinned` (other)
- `note` (other)

### get_evaluation_scenario_score_router_human_evaluations_evaluatio

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_scenario_id` (string)

### update_evaluation_scenario_score_router_human_evaluations_evalua

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_scenario_id` (string)
- `score` (number)

### fetch_results

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluation_id` (string)

### handle_events

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### create_portal

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### create_checkout

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `plan` (string)
- `success_url` (string)

### fetch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### switch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `plan` (string)

### fetch_subscription

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### cancel_plan

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### fetch_usage

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### admin_create_portal

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `organization_id` (string)

### admin_create_checkout

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `organization_id` (string)
- `plan` (string)
- `success_url` (string)

### admin_switch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `organization_id` (string)
- `plan` (string)

### admin_cancel_subscription

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `organization_id` (string)

### admin_report_usage

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### health_check

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### verify_permissions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `action` (other)
- `scope_type` (other)
- `scope_id` (other)
- `resource_type` (other)
- `resource_id` (other)

### get_projects

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### fetch_user_profile

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### reset_user_password

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `user_id` (string)

### list_app_variants

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### get_variant_by_env

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `environment` (string)

### create_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_name` (string)
- `template_key` (other)
- `project_id` (other)
- `workspace_id` (other)
- `organization_id` (other)

### list_apps

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_name` (other)

### update_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `app_name` (string)

### remove_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### add_variant_from_url

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `variant_name` (string)
- `url` (string)
- `commit_message` (other)
- `base_name` (other)
- `config_name` (other)

### add_variant_from_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `variant_name` (string)
- `key` (string)
- `commit_message` (other)
- `base_name` (other)
- `config_name` (other)

### list_environments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### environment_revisions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `environment_name` (other)

### add_variant_from_base_and_config

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `base_id` (string)
- `new_variant_name` (string)
- `new_config_name` (string)
- `parameters` (object)
- `commit_message` (other)

### mark_variant_as_hidden

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)

### get_variant

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)

### update_variant_parameters

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)
- `parameters` (object)
- `commit_message` (other)

### update_variant_url

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `url` (string)
- `variant_id` (string)
- `commit_message` (other)

### get_variant_revisions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)

### get_variant_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)
- `revision_number` (integer)

### mark_variant_revision_as_hidden

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_id` (string)
- `revision_id` (string)

### configs_add

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (object)
- `application_ref` (object)

### configs_fetch

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (other)
- `environment_ref` (other)
- `application_ref` (other)

### configs_fork

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (other)
- `environment_ref` (other)
- `application_ref` (other)

### configs_commit

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `config` (object)

### configs_deploy

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (object)
- `environment_ref` (object)
- `application_ref` (other)

### configs_delete

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (object)
- `application_ref` (other)

### configs_list

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `application_ref` (object)

### configs_history

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `variant_ref` (object)
- `application_ref` (other)

### container_templates

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_evaluators_endpoint_evaluators_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### evaluator_data_map_evaluators_map_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `inputs` (object)
- `mapping` (object)

### evaluator_run_evaluators_evaluator_key_run_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluator_key` (string)
- `inputs` (object)
- `settings` (other)
- `credentials` (other)

### get_evaluator_configs_evaluators_configs_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)

### create_new_evaluator_config_evaluators_configs_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `name` (string)
- `evaluator_key` (string)
- `settings_values` (object)

### get_evaluator_config_evaluators_configs_evaluator_config_id_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluator_config_id` (string)

### update_evaluator_config_evaluators_configs_evaluator_config_id_p

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluator_config_id` (string)
- `name` (other)
- `evaluator_key` (other)
- `settings_values` (other)

### delete_evaluator_config_evaluators_configs_evaluator_config_id_d

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `evaluator_config_id` (string)

### upload_file

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### import_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `authorization` (other)

### get_testsets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### create_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `name` (string)
- `csvdata` (array)

### delete_testsets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `testset_ids` (array)

### update_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `testset_id` (string)
- `name` (string)
- `csvdata` (array)

### get_single_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `testset_id` (string)

### deploy_to_environment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `environment_name` (string)
- `variant_id` (string)
- `commit_message` (other)

### list_bases

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `app_id` (string)
- `base_name` (other)

### get_config

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `base_id` (string)
- `config_name` (other)
- `environment_name` (other)

### get_config_deployment_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `deployment_revision_id` (string)

### revert_deployment_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `deployment_revision_id` (string)

### list_api_keys

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### create_api_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### delete_api_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `key_prefix` (string)

### list_organizations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### invite_user_to_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `workspace_id` (string)

### resend_invitation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `workspace_id` (string)
- `email` (string)

### accept_invitation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `org_id` (string)
- `workspace_id` (string)
- `project_id` (string)
- `token` (string)
- `email` (string)

### get_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_all_workspace_roles

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### remove_user_from_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `workspace_id` (string)
- `email` (string)

### otlp_v1_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### otlp_status

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### otlp_receiver

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### query_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `format` (string)
- `focus` (other)
- `oldest` (other)
- `newest` (other)
- `filtering` (other)
- `page` (other)
- `size` (other)
- `next` (other)
- `stop` (other)

### delete_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `node_id` (string)
- `node_ids` (array)

### query_analytics

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `format` (string)
- `focus` (other)
- `oldest` (other)
- `newest` (other)
- `window` (other)
- `filtering` (other)
- `timeRange` (other)
- `app_id` (other)
- `environment` (other)
- `variant` (other)

### fetch_trace_by_id

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `trace_id` (other)
- `format` (string)

### list_secrets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### create_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `header` (object)
- `secret` (object)

### read_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `secret_id` (string)

### update_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `secret_id` (string)
- `header` (other)
- `secret` (other)

### delete_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `secret_id` (string)
