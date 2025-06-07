# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
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

### get_azure_subscriptions_api_cloud_azure_subscriptions_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_azure_resource_groups_api_cloud_azure_resource_groups_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (string)

### get_supported_providers_api_cloud_cloud_providers_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_account_info_api_cloud_cloud_provider_account_info_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_instances_api_cloud_cloud_provider_instances_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_load_balancers_api_cloud_cloud_provider_load_balancers_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_storage_volumes_api_cloud_cloud_provider_storage_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_clusters_api_cloud_cloud_provider_clusters_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### terminate_instance_api_cloud_cloud_provider_instances_instance_i

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `instance_id` (string)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_cost_data_api_cloud_cloud_provider_costs_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)
- `days` (integer)
- `region` (other)
- `subscription_id` (other)
- `resource_group` (other)

### get_azure_key_vaults_api_cloud_cloud_azure_key_vaults_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_key_vault_items_api_cloud_cloud_azure_key_vault_items_get

**Environment variables**

No environment variables required

**Input schema**

- `vault_name` (string)
- `subscription_id` (other)
- `resource_group` (other)

### get_key_vault_secrets_api_cloud_cloud_azure_key_vault_secrets_ge

**Environment variables**

No environment variables required

**Input schema**

- `vault_name` (string)
- `subscription_id` (other)
- `resource_group` (other)

### get_key_vault_secret_api_cloud_cloud_azure_key_vault_vault_name_

**Environment variables**

No environment variables required

**Input schema**

- `vault_name` (string)
- `secret_name` (string)
- `subscription_id` (other)
- `resource_group` (other)

### get_azure_storage_accounts_api_cloud_azure_storage_accounts_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_storage_containers_api_cloud_azure_storage_containers_

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)
- `storage_account` (other)

### get_azure_network_security_groups_api_cloud_azure_network_securi

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_virtual_networks_api_cloud_azure_virtual_networks_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_app_insights_api_cloud_azure_app_insights_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_log_analytics_workspaces_api_cloud_azure_log_analytics

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_account_info_api_cloud_azure_account_info_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)

### get_azure_instances_api_cloud_azure_instances_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_load_balancers_api_cloud_azure_load_balancers_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_storage_api_cloud_azure_storage_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_clusters_api_cloud_azure_clusters_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_costs_api_cloud_azure_costs_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `timeframe` (string)
- `granularity` (string)

### get_azure_vnets_api_cloud_azure_network_vnets_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_databases_api_cloud_azure_databases_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_app_services_api_cloud_azure_app_services_get

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)
- `resource_group` (other)

### get_azure_security_recommendations_api_cloud_azure_security_reco

**Environment variables**

No environment variables required

**Input schema**

- `subscription_id` (other)

### diagnose_azure_api_diagnostics_azure_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### login_api_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `password` (string)

### auth0_callback_api_auth_callback_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `redirect_uri` (string)

### get_current_user_info_api_auth_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_auth_config_api_auth_config_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### update_auth_config_api_auth_config_put

**Environment variables**

- `API_KEY`

**Input schema**

- `auth_enabled` (other)
- `auth_mode` (other)
- `auth0_domain` (other)
- `auth0_api_audience` (other)
- `auth0_client_id` (other)

### list_users_api_auth_users_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### create_user_api_auth_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)
- `password` (string)
- `email` (other)
- `full_name` (other)
- `is_admin` (boolean)

### delete_user_api_auth_users_username_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)

### get_notifications_api_auth_notifications_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)

### logout_api_auth_logout_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### validate_token_api_auth_validate_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### legacy_environments_environments_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### legacy_config_template_environments_config_template_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### root_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### list_load_balancers_api_aws_load_balancers_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_load_balancer_api_aws_load_balancers_lb_name_get

**Environment variables**

No environment variables required

**Input schema**

- `lb_name` (string)
- `lb_type` (other)

### get_environment_load_balancers_api_environments_env_name_aws_loa

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### read_root_api_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_settings_api_settings_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### update_settings_api_settings_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### update_settings_debug_api_settings_debug_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### create_linear_issue_api_linear_create_issue_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### test_linear_connection_api_settings_test_linear_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### test_aws_connection_api_settings_test_aws_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### test_vanta_connection_api_settings_test_vanta_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### test_azure_connection_api_settings_test_azure_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_variables_api_settings_env_vars_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_user_preferences_api_user_preferences_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### update_user_preferences_api_user_preferences_put

**Environment variables**

- `API_KEY`

**Input schema**

- `theme` (string)
- `language` (string)
- `timezone` (string)
- `dateFormat` (string)
- `timeFormat` (string)
- `defaultEnvironment` (other)
- `dashboardRefreshInterval` (integer)
- `defaultView` (string)
- `showNotifications` (boolean)
- `emailNotifications` (boolean)
- `slackNotifications` (boolean)
- `alertThreshold` (string)
- `sessionTimeout` (integer)
- `codeTheme` (string)
- `gitBranch` (string)
- `autoSave` (boolean)
- `customSettings` (other)

### get_user_tokens_api_user_tokens_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### create_user_token_api_user_tokens_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### revoke_user_token_api_user_tokens_token_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `token_id` (string)

### debug_paths_api_debug_paths_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### list_environments_api_environments_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### create_environment_api_environments_post

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `parameters` (object)
- `commit_to_git` (boolean)
- `env_type` (string)
- `template_prefixes` (array)

### generate_config_template_api_environments_config_template_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_template_prefixes_api_environments_template_prefixes_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_details_api_environments_env_name_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### delete_environment_api_environments_env_name_delete

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `commit_to_git` (boolean)

### update_environment_api_environments_env_name_post

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `commit_to_git` (boolean)

### get_helm_releases_api_environments_env_name_helm_releases_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_helm_release_details_api_environments_env_name_helm_releases

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `release_name` (string)

### restart_helm_release_api_environments_env_name_helm_releases_rel

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `release_name` (string)

### get_helm_release_logs_api_environments_env_name_helm_releases_re

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `release_name` (string)

### get_namespaces_api_environments_env_name_namespaces_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_domains_api_environments_env_name_domains_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_all_environments_status_api_environments_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_all_endpoints_api_endpoints_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_summary_api_environments_env_name_summary_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### check_environment_active_api_environments_env_name_is_active_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_git_repositories_api_environments_env_name_git_repositories_

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_kustomizations_api_environments_env_name_kustomizations_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_git_status_api_git_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_latest_git_commit_api_git_latest_commit_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_recent_git_commits_api_git_recent_commits_get

**Environment variables**

No environment variables required

**Input schema**

- `count` (integer)

### get_services_api_environments_env_name_services_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_virtual_services_api_environments_env_name_virtual_services_

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_environment_operators_api_environments_env_name_operators_ge

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_environment_kafka_api_environments_env_name_kafka_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_environment_spark_api_environments_env_name_spark_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_terraform_resources_api_terraform_resources_environment_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)

### run_terraform_plan_api_terraform_plan_environment_resource_name_

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### run_terraform_apply_api_terraform_apply_environment_resource_nam

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### run_terraform_destroy_api_terraform_destroy_environment_resource

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### get_terraform_logs_api_terraform_logs_environment_resource_name_

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)
- `tail_lines` (integer)

### get_terraform_plan_output_api_terraform_plan_output_environment_

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### get_terraform_plan_analysis_api_terraform_plan_analysis_environm

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### get_terraform_files_api_terraform_files_environment_resource_nam

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### update_terraform_file_api_terraform_files_environment_resource_n

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)
- `filename` (string)

### get_terraform_workflow_help_api_terraform_workflow_help_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### discover_terraform_resources_api_terraform_discover_environment_

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)

### get_auto_terraform_plan_output_api_terraform_auto_plan_output_en

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)

### diagnose_terraform_issues_api_terraform_diagnose_environment_res

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### fix_terraform_runner_pods_api_terraform_fix_runner_pods_environm

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `resource_name` (string)

### debug_git_integration_api_debug_git_integration_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### debug_helmrelease_files_api_debug_helmrelease_files_namespace_ge

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### test_git_commit_api_debug_test_git_commit_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_ai_performance_metrics_api_ai_performance_metrics_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### optimize_ai_cache_api_ai_optimize_cache_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_endpoints_api_endpoints_env_name_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### check_health_api_health_get

**Environment variables**

No environment variables required

**Input schema**

- `include_details` (boolean)

### list_git_files_api_git_files_get

**Environment variables**

No environment variables required

**Input schema**

- `path` (string)

### read_git_file_api_git_file_get

**Environment variables**

No environment variables required

**Input schema**

- `path` (string)

### write_git_file_api_git_file_post

**Environment variables**

No environment variables required

**Input schema**

- `path` (string)
- `content` (string)
- `commit_message` (other)

### repo_sync_status_api_system_repo_sync_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### start_repo_sync_api_system_repo_sync_start_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### stop_repo_sync_api_system_repo_sync_stop_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### trigger_repo_sync_api_system_repo_sync_sync_now_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_git_status_api_system_git_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### commit_changes_api_system_git_commit_post

**Environment variables**

No environment variables required

**Input schema**

- `message` (string)
- `files` (other)

### push_changes_api_system_git_push_post

**Environment variables**

No environment variables required

**Input schema**

- `force` (boolean)

### pull_changes_api_system_git_pull_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### initialize_git_repository_api_git_initialize_post

**Environment variables**

No environment variables required

**Input schema**

- `force` (boolean)

### configure_git_api_system_git_configure_post

**Environment variables**

No environment variables required

**Input schema**

- `user_name` (other)
- `user_email` (other)
- `global_config` (boolean)

### ping_virtualservices_api_ping_get

**Environment variables**

No environment variables required

**Input schema**

- `timeout` (number)
- `protocols` (string)
- `paths` (string)
- `check_dns_only` (boolean)

### list_autoscaling_groups_api_aws_autoscaling_groups_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_autoscaling_group_api_aws_autoscaling_groups_asg_name_get

**Environment variables**

No environment variables required

**Input schema**

- `asg_name` (string)

### start_instance_refresh_api_aws_autoscaling_groups_asg_name_refre

**Environment variables**

No environment variables required

**Input schema**

- `asg_name` (string)
- `min_healthy_percentage` (integer)
- `instance_warmup` (integer)
- `preferences` (other)

### cancel_instance_refresh_api_aws_autoscaling_groups_asg_name_refr

**Environment variables**

No environment variables required

**Input schema**

- `asg_name` (string)

### update_asg_capacity_api_aws_autoscaling_groups_asg_name_capacity

**Environment variables**

No environment variables required

**Input schema**

- `asg_name` (string)
- `min_size` (other)
- `max_size` (other)
- `desired_capacity` (other)

### get_environment_autoscaling_groups_api_environments_env_name_aws

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### refresh_environment_instances_api_environments_env_name_aws_refr

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `min_healthy_percentage` (integer)
- `instance_warmup` (integer)
- `preferences` (other)

### get_aws_resources_api_aws_resources_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (other)

### clear_aws_cache_api_aws_clear_cache_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### list_aws_secrets_api_aws_secrets_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `prefix` (other)

### get_secret_details_api_aws_secrets_secret_name_get

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)

### update_secret_api_aws_secrets_secret_name_put

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)

### get_aws_account_info_api_aws_account_info_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### debug_aws_billing_api_aws_billing_debug_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_general_aws_billing_api_aws_billing_general_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### export_aws_billing_csv_api_aws_billing_export_csv_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_eks_clusters_api_aws_eks_clusters_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_ec2_instances_with_k8s_info_api_aws_ec2_instances_get

**Environment variables**

No environment variables required

**Input schema**

- `cluster_name` (other)

### get_all_ec2_instances_api_aws_ec2_instances_all_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### start_ec2_instance_api_aws_ec2_instances_instance_id_start_post

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)

### stop_ec2_instance_api_aws_ec2_instances_instance_id_stop_post

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)
- `force` (boolean)

### terminate_ec2_instance_api_aws_ec2_instances_instance_id_termina

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)

### modify_ec2_instance_type_api_aws_ec2_instances_instance_id_type_

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)
- `new_type` (string)

### get_available_instance_types_api_aws_ec2_instance_types_get

**Environment variables**

No environment variables required

**Input schema**

- `architecture` (string)

### get_ebs_volumes_with_k8s_info_api_aws_ebs_volumes_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_aws_summary_api_environments_env_name_aws_summar

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_aws_diagnostics_api_aws_diagnostics_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### check_required_iam_roles_api_aws_iam_roles_get

**Environment variables**

No environment variables required

**Input schema**

- `required_roles` (string)

### check_iam_role_permissions_api_aws_iam_role_permissions_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### check_ebs_encryption_api_aws_ebs_encryption_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### search_iam_roles_api_aws_iam_roles_search_get

**Environment variables**

No environment variables required

**Input schema**

- `search_term` (string)
- `max_results` (integer)

### list_iam_roles_api_aws_iam_roles_get

**Environment variables**

No environment variables required

**Input schema**

- `path_prefix` (other)
- `max_items` (integer)

### get_iam_role_details_api_aws_iam_roles_role_name_get

**Environment variables**

No environment variables required

**Input schema**

- `role_name` (string)

### check_iam_role_exists_api_aws_iam_roles_role_name_exists_get

**Environment variables**

No environment variables required

**Input schema**

- `role_name` (string)

### analyze_all_images_api_images_analysis_get

**Environment variables**

No environment variables required

**Input schema**

- `team_filter` (other)
- `tag_type_filter` (other)

### search_images_api_images_search_get

**Environment variables**

No environment variables required

**Input schema**

- `query` (string)
- `limit` (integer)

### bulk_update_image_tags_endpoint_api_images_bulk_update_put

**Environment variables**

No environment variables required

**Input schema**

- `updates` (array)
- `commit_to_git` (boolean)

### get_sha_images_report_api_images_sha_report_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_outdated_images_report_api_images_outdated_report_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_images_summary_api_environments_env_name_images_

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### update_environment_image_tags_api_environments_env_name_images_u

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
- `commit_to_git` (boolean)

### get_audit_logs_api_audit_logs_get

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (other)
- `end_date` (other)
- `action` (other)
- `user` (other)
- `environment` (other)
- `status` (other)
- `limit` (integer)
- `offset` (integer)

### get_audit_summary_api_audit_summary_get

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (other)
- `end_date` (other)

### get_audit_actions_api_audit_actions_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_audit_statistics_api_audit_statistics_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_notifications_api_notifications_get

**Environment variables**

No environment variables required

**Input schema**

- `since` (other)
- `limit` (integer)

### dismiss_notification_api_notifications_notification_id_delete

**Environment variables**

No environment variables required

**Input schema**

- `notification_id` (string)

### check_domain_health_curl_api_health_check_get

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)

### check_domain_health_api_health_domain_get

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)

### register_agent_api_agents_register_post

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `namespace` (string)
- `cluster` (string)
- `version` (string)
- `capabilities` (array)
- `metadata` (other)
- `pod_name` (other)
- `node_name` (other)

### list_agents_api_agents_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_agent_api_agents_agent_id_get

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)

### deregister_agent_api_agents_agent_id_delete

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)

### agent_heartbeat_api_agents_agent_id_heartbeat_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `status` (string)
- `current_tasks` (array)
- `metadata` (object)
- `health_snapshot` (other)

### create_task_api_tasks_post

**Environment variables**

No environment variables required

**Input schema**

- `task_type` (string)
- `environment` (other)
- `parameters` (object)
- `assigned_agent_id` (other)

### list_tasks_api_tasks_get

**Environment variables**

No environment variables required

**Input schema**

- `status` (other)
- `task_type` (other)
- `environment` (other)
- `assigned_agent_id` (other)

### get_task_api_tasks_task_id_get

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (string)

### cancel_task_api_tasks_task_id_delete

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (string)

### get_agent_tasks_api_agents_agent_id_tasks_get

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `status` (other)

### claim_task_api_agents_agent_id_tasks_task_id_claim_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `task_id` (string)

### update_task_status_api_agents_agent_id_tasks_task_id_status_put

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `task_id` (string)
- `status` (string)
- `result` (other)
- `error` (other)

### cleanup_old_tasks_api_tasks_cleanup_post

**Environment variables**

No environment variables required

**Input schema**

- `older_than_hours` (integer)

### execute_agent_task_api_agent_task_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_namespace_telemetry_api_telemetry_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_namespace_metrics_api_telemetry_namespace_metrics_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `duration` (string)

### get_namespace_traffic_api_telemetry_namespace_traffic_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `duration` (string)

### get_service_dependencies_api_telemetry_namespace_dependencies_ge

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### report_flux_status_api_agents_agent_id_flux_status_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `b_agent_id` (string)
- `cluster` (string)
- `timestamp` (string)
- `failed_resources` (array)
- `degraded_resources` (array)
- `summary` (object)

### get_flux_status_api_flux_status_cluster_get

**Environment variables**

No environment variables required

**Input schema**

- `cluster` (string)

### get_all_flux_status_api_flux_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### report_audit_logs_api_agents_agent_id_audit_logs_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `b_agent_id` (string)
- `cluster` (string)
- `timestamp` (string)
- `entries` (array)
- `start_time` (string)
- `end_time` (string)

### get_audit_logs_api_audit_logs_cluster_get

**Environment variables**

No environment variables required

**Input schema**

- `cluster` (string)
- `limit` (integer)
- `verb` (other)
- `object_kind` (other)
- `user` (other)

### test_coda_integration_api_ai_test_coda_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### reload_coda_content_api_ai_reload_coda_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### search_coda_documentation_api_ai_search_coda_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### start_coda_prefetch_task_api_ai_start_coda_prefetch_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### stop_coda_prefetch_task_api_ai_stop_coda_prefetch_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_coda_prefetch_status_api_ai_coda_prefetch_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### crawl_coda_document_api_ai_crawl_coda_post

**Environment variables**

No environment variables required

**Input schema**

- `max_tables` (integer)

### get_ai_config_api_ai_config_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_available_models_api_ai_models_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### validate_ai_key_api_ai_validate_key_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### ai_chat_api_ai_chat_post

**Environment variables**

No environment variables required

**Input schema**

- `message` (string)
- `conversation_history` (array)

### receive_health_report_api_agents_agent_id_health_report_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)
- `reports` (array)
- `timestamp` (string)
- `cluster` (string)

### get_all_environments_health_api_environments_health_summary_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environments_overview_fast_api_environments_overview_fast_ge

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_environment_services_health_api_environments_env_name_servic

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_environment_health_api_environments_env_name_health_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### batch_update_task_status_api_agents_agent_id_tasks_batch_update_

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)

### report_spark_jobs_api_agents_agent_id_spark_jobs_post

**Environment variables**

No environment variables required

**Input schema**

- `agent_id` (string)

### get_spark_jobs_api_spark_jobs_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `include_history` (boolean)

### get_spark_job_details_api_spark_jobs_namespace_job_name_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `job_name` (string)

### get_spark_secrets_api_spark_secrets_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_all_spark_jobs_api_spark_jobs_get

**Environment variables**

No environment variables required

**Input schema**

- `include_history` (boolean)

### delete_namespace_secret_api_k8s_namespaces_namespace_secrets_sec

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `secret_name` (string)

### get_namespace_secret_details_api_k8s_namespaces_namespace_secret

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `secret_name` (string)

### update_namespace_secret_api_k8s_namespaces_namespace_secrets_sec

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `secret_name` (string)

### delete_namespace_configmap_api_k8s_namespaces_namespace_configma

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `configmap_name` (string)

### get_namespace_configmap_details_api_k8s_namespaces_namespace_con

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `configmap_name` (string)

### update_namespace_configmap_api_k8s_namespaces_namespace_configma

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `configmap_name` (string)

### clear_kubectl_tasks_api_agents_tasks_kubectl_delete

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### prefetch_foundation_data_api_foundation_prefetch_namespace_post

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_namespace_costs_api_foundation_costs_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `use_cache` (boolean)

### get_foundation_status_api_foundation_status_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `include_secrets` (boolean)
- `include_configmaps` (boolean)
- `include_costs` (boolean)
- `use_cache` (boolean)

### update_deployment_image_api_foundation_deployments_namespace_dep

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `deployment_name` (string)

### suspend_helm_release_api_foundation_helmreleases_namespace_relea

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)

### toggle_helmrelease_suspend_api_foundation_helmreleases_namespace

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)
- `suspend` (boolean)

### resume_helm_release_api_foundation_helmreleases_namespace_releas

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)

### update_helm_release_api_foundation_helmreleases_namespace_releas

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)

### delete_helmrelease_api_foundation_helmreleases_namespace_release

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)

### get_service_graph_api_istio_service_graph_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_helm_releases_api_foundation_helmreleases_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### update_helmrelease_version_api_foundation_helmreleases_namespace

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `release_name` (string)

### clear_kafka_cache_api_kafka_cache_clear_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_kafka_topics_api_kafka_topics_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_kafka_topic_details_api_kafka_topics_namespace_topic_name_ge

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `topic_name` (string)

### get_kafka_brokers_api_kafka_brokers_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### debug_kafka_discovery_api_kafka_debug_namespace_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_hive_metastore_status_api_hive_metastore_namespace_status_ge

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### debug_hive_connection_api_hive_metastore_namespace_debug_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### clear_hive_cache_api_hive_metastore_cache_clear_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_hive_databases_api_hive_metastore_namespace_databases_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### test_hive_connection_api_hive_metastore_namespace_test_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_hive_tables_api_hive_metastore_namespace_tables_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `database` (string)

### get_iceberg_tables_api_hive_metastore_namespace_iceberg_tables_g

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_table_info_api_hive_metastore_namespace_table_info_database_

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `database` (string)
- `table` (string)

### get_namespace_secrets_api_k8s_namespaces_namespace_secrets_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_namespace_configmaps_api_k8s_namespaces_namespace_configmaps

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_agent_monitoring_status_api_agents_monitor_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_agent_monitoring_report_api_agents_monitor_report_get

**Environment variables**

No environment variables required

**Input schema**

- `format` (string)

### get_environment_agent_status_api_environments_env_name_agent_sta

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)

### get_remote_agent_status_api_agents_remote_status_environment_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `backend` (string)

### list_remote_agent_statuses_api_agents_remote_status_get

**Environment variables**

No environment variables required

**Input schema**

- `backend` (string)

### get_remote_agent_history_api_agents_remote_status_environment_hi

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `backend` (string)
- `hours` (integer)

### list_templates_api_templates_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_template_api_templates_filename_get

**Environment variables**

No environment variables required

**Input schema**

- `filename` (string)

### update_template_api_templates_filename_put

**Environment variables**

No environment variables required

**Input schema**

- `filename` (string)

### get_postgres_status_api_postgres_namespace_status_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_postgres_databases_api_postgres_namespace_databases_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_postgres_schemas_api_postgres_namespace_schemas_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `database` (other)

### get_postgres_tables_api_postgres_namespace_tables_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `database` (other)
- `schema` (string)

### get_postgres_table_info_api_postgres_namespace_table_info_schema

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `schema` (string)
- `table` (string)
- `database` (other)

### execute_postgres_query_api_postgres_namespace_query_post

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `query` (string)
- `database` (other)

### update_postgres_settings_api_postgres_namespace_update_settings_

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_postgres_settings_api_postgres_namespace_settings_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_client_info_api_client_info_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_trino_status_api_trino_namespace_status_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_trino_catalogs_api_trino_namespace_catalogs_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_trino_schemas_api_trino_namespace_schemas_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `catalog` (string)

### get_trino_tables_api_trino_namespace_tables_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `catalog` (string)
- `schema` (string)

### get_trino_table_info_api_trino_namespace_table_info_catalog_sche

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `catalog` (string)
- `schema` (string)
- `table` (string)

### execute_trino_query_api_trino_namespace_query_post

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `limit` (integer)

### get_trino_query_history_api_trino_namespace_query_history_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `limit` (integer)

### debug_trino_connection_api_trino_namespace_debug_get

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)

### get_vanta_compliance_summary_api_vanta_compliance_summary_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_vanta_security_posture_api_vanta_security_posture_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_vanta_vulnerabilities_api_vanta_vulnerabilities_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_vanta_test_results_api_vanta_test_results_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_vanta_resources_api_vanta_resources_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_foundation_status_history_api_foundation_status_namespace_hi

**Environment variables**

No environment variables required

**Input schema**

- `namespace` (string)
- `hours` (integer)
- `limit` (integer)

### get_aggregated_foundation_costs_api_foundation_costs_aggregate_g

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_azure_resource_groups_api_azure_resource_groups_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_azure_resources_api_azure_resources_get

**Environment variables**

No environment variables required

**Input schema**

- `resource_group` (other)
- `resource_type` (other)

### get_istio_service_graph_api_istio_service_graph_environment_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)

### get_telemetry_traffic_api_telemetry_environment_traffic_get

**Environment variables**

No environment variables required

**Input schema**

- `environment` (string)
- `duration` (string)

### handle_environment_route_api_env_name_get

**Environment variables**

No environment variables required

**Input schema**

- `env_name` (string)
