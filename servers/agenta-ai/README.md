# @open-mcp/agenta-ai

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add agenta-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add agenta-ai \
  .cursor/mcp.json \
  --AUTHORIZATION=...
```

### Other

```bash
npx @open-mcp/config add agenta-ai \
  /path/to/client/config.json \
  --AUTHORIZATION=...
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

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### create_accounts

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "users": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "organizations": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "workspaces": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "projects": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "organization_memberships": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "workspace_memberships": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "project_memberships": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### create_account

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "user": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "scope": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### get_own_org

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### fetch_organization_details

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string()
}
```

### update_organization

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "updated_at": z.union([z.string(), z.null()]).optional()
}
```

### create_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "name": z.string(),
  "description": z.union([z.string(), z.null()]).optional(),
  "type": z.union([z.string(), z.null()]).optional()
}
```

### update_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "workspace_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "updated_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional()
}
```

### get_all_workspace_permissions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### assign_role_to_user

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "workspace_id": z.string(),
  "email": z.string(),
  "organization_id": z.string(),
  "role": z.union([z.string(), z.null()]).optional()
}
```

### unassign_role_from_user

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "workspace_id": z.string(),
  "email": z.string(),
  "org_id": z.string(),
  "role": z.string()
}
```

### fetch_evaluation_ids_evaluations_by_resource_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "resource_type": z.string(),
  "resource_ids": z.array(z.string()).optional()
}
```

### create_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "revisions_ids": z.array(z.string()),
  "evaluators_configs": z.array(z.string()),
  "testset_id": z.string(),
  "rate_limit": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "correct_answer_column": z.union([z.string(), z.null()]).optional()
}
```

### fetch_list_evaluations_evaluations_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### delete_evaluations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluations_ids": z.array(z.string())
}
```

### fetch_evaluation_status

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### fetch_evaluation_results

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### fetch_evaluation_scenarios

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### fetch_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### fetch_evaluation_scenarios_evaluations_evaluation_scenarios_comp

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluations_ids": z.string()
}
```

### create_human_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "variant_ids": z.array(z.string()),
  "evaluation_type": z.enum(["human_a_b_testing","single_model_test"]),
  "inputs": z.array(z.string()),
  "testset_id": z.string(),
  "status": z.string()
}
```

### fetch_list_human_evaluations_human_evaluations_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### delete_evaluations_human_evaluations_delete

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluations_ids": z.array(z.string())
}
```

### fetch_human_evaluation_human_evaluations_evaluation_id_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### update_human_evaluation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string(),
  "status": z.union([z.enum(["EVALUATION_INITIALIZED","EVALUATION_STARTED","EVALUATION_FINISHED","EVALUATION_FINISHED_WITH_ERRORS","EVALUATION_FAILED","EVALUATION_AGGREGATION_FAILED"]), z.null()]).optional()
}
```

### fetch_human_evaluation_scenarios

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### update_evaluation_scenario_router_human_evaluations_evaluation_i

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string(),
  "evaluation_scenario_id": z.string(),
  "evaluation_type": z.enum(["human_a_b_testing","single_model_test"]),
  "vote": z.union([z.string(), z.null()]).optional(),
  "score": z.union([z.string(), z.number().int(), z.null()]).optional(),
  "correct_answer": z.union([z.string(), z.null()]).optional(),
  "outputs": z.union([z.array(z.object({ "variant_id": z.string(), "variant_output": z.string() })), z.null()]).optional(),
  "inputs": z.union([z.array(z.object({ "input_name": z.string(), "input_value": z.string() })), z.null()]).optional(),
  "is_pinned": z.union([z.boolean(), z.null()]).optional(),
  "note": z.union([z.string(), z.null()]).optional()
}
```

### get_evaluation_scenario_score_router_human_evaluations_evaluatio

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_scenario_id": z.string()
}
```

### update_evaluation_scenario_score_router_human_evaluations_evalua

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_scenario_id": z.string(),
  "score": z.number()
}
```

### fetch_results

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluation_id": z.string()
}
```

### handle_events

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### create_portal

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### create_checkout

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"]),
  "success_url": z.string()
}
```

### fetch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### switch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"])
}
```

### fetch_subscription

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### cancel_plan

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### fetch_usage

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### admin_create_portal

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "organization_id": z.string()
}
```

### admin_create_checkout

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "organization_id": z.string(),
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"]),
  "success_url": z.string()
}
```

### admin_switch_plans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "organization_id": z.string(),
  "plan": z.enum(["cloud_v0_hobby","cloud_v0_pro","cloud_v0_humanity_labs","cloud_v0_x_labs","cloud_v0_agenta_ai"])
}
```

### admin_cancel_subscription

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "organization_id": z.string()
}
```

### admin_report_usage

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### health_check

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### verify_permissions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "action": z.union([z.string(), z.null()]).optional(),
  "scope_type": z.union([z.string(), z.null()]).optional(),
  "scope_id": z.union([z.string().uuid(), z.null()]).optional(),
  "resource_type": z.union([z.string(), z.null()]).optional(),
  "resource_id": z.union([z.string().uuid(), z.null()]).optional()
}
```

### get_projects

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### fetch_user_profile

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### reset_user_password

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "user_id": z.string()
}
```

### list_app_variants

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### get_variant_by_env

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "environment": z.string()
}
```

### create_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_name": z.string(),
  "template_key": z.union([z.string(), z.null()]).optional(),
  "project_id": z.union([z.string(), z.null()]).optional(),
  "workspace_id": z.union([z.string(), z.null()]).optional(),
  "organization_id": z.union([z.string(), z.null()]).optional()
}
```

### list_apps

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_name": z.union([z.string(), z.null()]).optional()
}
```

### update_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "app_name": z.string()
}
```

### remove_app

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### add_variant_from_url

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "variant_name": z.string(),
  "url": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional(),
  "base_name": z.union([z.string(), z.null()]).optional(),
  "config_name": z.union([z.string(), z.null()]).optional()
}
```

### add_variant_from_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "variant_name": z.string(),
  "key": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional(),
  "base_name": z.union([z.string(), z.null()]).optional(),
  "config_name": z.union([z.string(), z.null()]).optional()
}
```

### list_environments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### environment_revisions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "environment_name": z.any()
}
```

### add_variant_from_base_and_config

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "base_id": z.string(),
  "new_variant_name": z.string(),
  "new_config_name": z.string(),
  "parameters": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "commit_message": z.union([z.string(), z.null()]).optional()
}
```

### mark_variant_as_hidden

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string()
}
```

### get_variant

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string()
}
```

### update_variant_parameters

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string(),
  "parameters": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "commit_message": z.union([z.string(), z.null()]).optional()
}
```

### update_variant_url

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "url": z.string(),
  "variant_id": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional()
}
```

### get_variant_revisions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string()
}
```

### get_variant_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string(),
  "revision_number": z.number().int()
}
```

### mark_variant_revision_as_hidden

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_id": z.string(),
  "revision_id": z.string()
}
```

### configs_add

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "application_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### configs_fetch

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "environment_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}
```

### configs_fork

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "environment_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional(),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}
```

### configs_commit

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### configs_deploy

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "environment_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}
```

### configs_delete

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}
```

### configs_list

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "application_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### configs_history

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "variant_ref": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}
```

### container_templates

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### get_evaluators_endpoint_evaluators_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### evaluator_data_map_evaluators_map_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "inputs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "mapping": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### evaluator_run_evaluators_evaluator_key_run_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluator_key": z.string(),
  "inputs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "settings": z.union([z.record(z.any()), z.null()]).optional(),
  "credentials": z.union([z.record(z.any()), z.null()]).optional()
}
```

### get_evaluator_configs_evaluators_configs_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string()
}
```

### create_new_evaluator_config_evaluators_configs_post

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "name": z.string(),
  "evaluator_key": z.string(),
  "settings_values": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### get_evaluator_config_evaluators_configs_evaluator_config_id_get

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluator_config_id": z.string()
}
```

### update_evaluator_config_evaluators_configs_evaluator_config_id_p

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluator_config_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "evaluator_key": z.union([z.string(), z.null()]).optional(),
  "settings_values": z.union([z.record(z.any()), z.null()])
}
```

### delete_evaluator_config_evaluators_configs_evaluator_config_id_d

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "evaluator_config_id": z.string()
}
```

### upload_file

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### import_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "authorization": z.union([z.string(), z.null()]).optional()
}
```

### get_testsets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### create_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "name": z.string(),
  "csvdata": z.array(z.record(z.any()))
}
```

### delete_testsets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "testset_ids": z.array(z.string())
}
```

### update_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "testset_id": z.string(),
  "name": z.string(),
  "csvdata": z.array(z.record(z.any()))
}
```

### get_single_testset

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "testset_id": z.string()
}
```

### deploy_to_environment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "environment_name": z.string(),
  "variant_id": z.string(),
  "commit_message": z.union([z.string(), z.null()]).optional()
}
```

### list_bases

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "app_id": z.string(),
  "base_name": z.union([z.string(), z.null()]).optional()
}
```

### get_config

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "base_id": z.string(),
  "config_name": z.union([z.string(), z.null()]).optional(),
  "environment_name": z.union([z.string(), z.null()]).optional()
}
```

### get_config_deployment_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "deployment_revision_id": z.string()
}
```

### revert_deployment_revision

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "deployment_revision_id": z.string()
}
```

### list_api_keys

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### create_api_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### delete_api_key

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "key_prefix": z.string()
}
```

### list_organizations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### invite_user_to_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "workspace_id": z.string()
}
```

### resend_invitation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "workspace_id": z.string(),
  "email": z.string()
}
```

### accept_invitation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "org_id": z.string(),
  "workspace_id": z.string(),
  "project_id": z.string(),
  "token": z.string(),
  "email": z.string()
}
```

### get_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### get_all_workspace_roles

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### remove_user_from_workspace

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "workspace_id": z.string(),
  "email": z.string()
}
```

### otlp_v1_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### otlp_status

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### otlp_receiver

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### query_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "format": z.enum(["opentelemetry","agenta"]).optional(),
  "focus": z.union([z.string(), z.null()]).optional(),
  "oldest": z.union([z.string(), z.null()]).optional(),
  "newest": z.union([z.string(), z.null()]).optional(),
  "filtering": z.union([z.string(), z.null()]).optional(),
  "page": z.union([z.number().int(), z.null()]).optional(),
  "size": z.union([z.number().int(), z.null()]).optional(),
  "next": z.union([z.string(), z.null()]).optional(),
  "stop": z.union([z.string(), z.null()]).optional()
}
```

### delete_traces

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "node_id": z.string().uuid().optional(),
  "node_ids": z.array(z.string().uuid()).optional()
}
```

### query_analytics

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "format": z.enum(["legacy","agenta"]).optional(),
  "focus": z.union([z.string(), z.null()]).optional(),
  "oldest": z.union([z.string(), z.null()]).optional(),
  "newest": z.union([z.string(), z.null()]).optional(),
  "window": z.union([z.number().int(), z.null()]).optional(),
  "filtering": z.union([z.string(), z.null()]).optional(),
  "timeRange": z.union([z.string(), z.null()]).optional(),
  "app_id": z.union([z.string(), z.null()]).optional(),
  "environment": z.union([z.string(), z.null()]).optional(),
  "variant": z.union([z.string(), z.null()]).optional()
}
```

### fetch_trace_by_id

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "trace_id": z.union([z.string(), z.number().int()]),
  "format": z.enum(["opentelemetry","agenta"]).optional()
}
```

### list_secrets

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{}
```

### create_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "header": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "secret": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### read_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "secret_id": z.string()
}
```

### update_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "secret_id": z.string(),
  "header": z.union([z.object({ "name": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional() }), z.null()]).optional(),
  "secret": z.union([z.object({ "kind": z.enum(["provider_key","custom_provider"]), "data": z.union([z.object({ "kind": z.enum(["openai","cohere","anyscale","deepinfra","alephalpha","groq","mistralai","anthropic","perplexityai","togetherai","openrouter","gemini"]), "provider": z.object({ "key": z.string() }) }), z.object({ "kind": z.enum(["custom","azure","bedrock","sagemaker","vertex","openai","cohere","anyscale","deepinfra","alephalpha","groq","mistralai","anthropic","perplexityai","togetherai","openrouter","gemini"]), "provider": z.object({ "url": z.union([z.string(), z.null()]).optional(), "version": z.union([z.string(), z.null()]).optional(), "key": z.union([z.string(), z.null()]).optional(), "extras": z.union([z.record(z.any()), z.null()]).optional() }), "models": z.array(z.object({ "slug": z.string(), "extras": z.union([z.record(z.any()), z.null()]).optional() })), "provider_slug": z.union([z.string(), z.null()]).optional(), "model_keys": z.union([z.array(z.string()), z.null()]).optional() })]) }), z.null()]).optional()
}
```

### delete_secret

**Environment variables**

- `AUTHORIZATION`

**Input schema**

```ts
{
  "secret_id": z.string()
}
```
