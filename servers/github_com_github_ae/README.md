# @open-mcp/github_com_github_ae

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "github_com_github_ae": {
      "command": "npx",
      "args": ["-y", "@open-mcp/github_com_github_ae"],
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

### meta_root

### enterprise_admin_list_global_webhooks

### enterprise_admin_create_global_webhook

### enterprise_admin_delete_global_webhook

### enterprise_admin_get_global_webhook

### enterprise_admin_update_global_webhook

### enterprise_admin_ping_global_webhook

### enterprise_admin_list_public_keys

### enterprise_admin_delete_public_key

### enterprise_admin_create_org

### enterprise_admin_update_org_name

### enterprise_admin_list_pre_receive_environments

### enterprise_admin_create_pre_receive_environment

### enterprise_admin_delete_pre_receive_environment

### enterprise_admin_get_pre_receive_environment

### enterprise_admin_update_pre_receive_environment

### enterprise_admin_start_pre_receive_environment_download

### enterprise_admin_get_download_status_for_pre_receive_environment

### enterprise_admin_list_personal_access_tokens

### enterprise_admin_delete_personal_access_token

### enterprise_admin_delete_user

### enterprise_admin_delete_impersonation_o_auth_token

### enterprise_admin_create_impersonation_o_auth_token

### apps_get_authenticated

### apps_create_from_manifest

### apps_get_webhook_config_for_app

### apps_update_webhook_config_for_app

### apps_list_webhook_deliveries

### apps_get_webhook_delivery

### apps_redeliver_webhook_delivery

### apps_list_installations

### apps_delete_installation

### apps_get_installation

### apps_create_installation_access_token

### apps_unsuspend_installation

### apps_suspend_installation

### apps_delete_authorization

### apps_delete_token

### apps_reset_token

### apps_check_token

### apps_reset_authorization

### apps_get_by_slug

### codes_of_conduct_get_all_codes_of_conduct

### codes_of_conduct_get_conduct_code

### emojis_get

### enterprise_admin_remove_announcement

### enterprise_admin_get_announcement

### enterprise_admin_set_announcement

### enterprise_admin_get_license_information

### enterprise_admin_get_all_stats

### enterprise_admin_get_comment_stats

### enterprise_admin_get_gist_stats

### enterprise_admin_get_hooks_stats

### enterprise_admin_get_issue_stats

### enterprise_admin_get_milestone_stats

### enterprise_admin_get_org_stats

### enterprise_admin_get_pages_stats

### enterprise_admin_get_pull_request_stats

### enterprise_admin_get_repo_stats

### enterprise_admin_get_user_stats

### enterprise_admin_get_github_actions_permissions_enterprise

### enterprise_admin_set_github_actions_permissions_enterprise

### enterprise_admin_list_selected_organizations_enabled_github_acti

### enterprise_admin_set_selected_organizations_enabled_github_actio

### enterprise_admin_disable_selected_organization_github_actions_en

### enterprise_admin_enable_selected_organization_github_actions_ent

### enterprise_admin_get_allowed_actions_enterprise

### enterprise_admin_set_allowed_actions_enterprise

### enterprise_admin_list_self_hosted_runner_groups_for_enterprise

### enterprise_admin_create_self_hosted_runner_group_for_enterprise

### enterprise_admin_delete_self_hosted_runner_group_from_enterprise

### enterprise_admin_get_self_hosted_runner_group_for_enterprise

### enterprise_admin_update_self_hosted_runner_group_for_enterprise

### enterprise_admin_list_self_hosted_runners_in_group_for_enterpris

### enterprise_admin_set_self_hosted_runners_in_group_for_enterprise

### enterprise_admin_remove_self_hosted_runner_from_group_for_enterp

### enterprise_admin_add_self_hosted_runner_to_group_for_enterprise

### enterprise_admin_list_self_hosted_runners_for_enterprise

### enterprise_admin_list_runner_applications_for_enterprise

### enterprise_admin_create_registration_token_for_enterprise

### enterprise_admin_create_remove_token_for_enterprise

### enterprise_admin_delete_self_hosted_runner_from_enterprise

### enterprise_admin_get_self_hosted_runner_for_enterprise

### enterprise_admin_get_audit_log

### secret_scanning_list_alerts_for_enterprise

### activity_get_feeds

### gists_list

### gists_create

### gists_list_public

### gists_list_starred

### gists_delete

### gists_get

### gists_update

### gists_list_comments

### gists_create_comment

### gists_delete_comment

### gists_get_comment

### gists_update_comment

### gists_list_commits

### gists_list_forks

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/github_com_github_ae
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/github_com_github_ae`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
