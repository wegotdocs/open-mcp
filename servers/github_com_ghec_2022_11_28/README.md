# @open-mcp/github_com_ghec_2022_11_28

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "github_com_ghec_2022_11_28": {
      "command": "npx",
      "args": ["-y", "@open-mcp/github_com_ghec_2022_11_28"],
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

### apps_scope_token

### apps_get_by_slug

### codes_of_conduct_get_all_codes_of_conduct

### codes_of_conduct_get_conduct_code

### emojis_get

### enterprise_admin_get_server_statistics

### actions_get_actions_cache_usage_for_enterprise

### actions_set_actions_oidc_custom_issuer_policy_for_enterprise

### enterprise_admin_get_github_actions_permissions_enterprise

### enterprise_admin_set_github_actions_permissions_enterprise

### enterprise_admin_list_selected_organizations_enabled_github_acti

### enterprise_admin_set_selected_organizations_enabled_github_actio

### enterprise_admin_disable_selected_organization_github_actions_en

### enterprise_admin_enable_selected_organization_github_actions_ent

### enterprise_admin_get_allowed_actions_enterprise

### enterprise_admin_set_allowed_actions_enterprise

### actions_get_github_actions_default_workflow_permissions_enterpri

### actions_set_github_actions_default_workflow_permissions_enterpri

### enterprise_admin_list_self_hosted_runner_groups_for_enterprise

### enterprise_admin_create_self_hosted_runner_group_for_enterprise

### enterprise_admin_delete_self_hosted_runner_group_from_enterprise

### enterprise_admin_get_self_hosted_runner_group_for_enterprise

### enterprise_admin_update_self_hosted_runner_group_for_enterprise

### enterprise_admin_list_org_access_to_self_hosted_runner_group_in_

### enterprise_admin_set_org_access_to_self_hosted_runner_group_in_e

### enterprise_admin_remove_org_access_to_self_hosted_runner_group_i

### enterprise_admin_add_org_access_to_self_hosted_runner_group_in_e

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

### enterprise_admin_remove_all_custom_labels_from_self_hosted_runne

### enterprise_admin_list_labels_for_self_hosted_runner_for_enterpri

### enterprise_admin_add_custom_labels_to_self_hosted_runner_for_ent

### enterprise_admin_set_custom_labels_for_self_hosted_runner_for_en

### enterprise_admin_remove_custom_label_from_self_hosted_runner_for

### announcement_banners_remove_announcement_banner_for_enterprise

### announcement_banners_get_announcement_banner_for_enterprise

### announcement_banners_set_announcement_banner_for_enterprise

### enterprise_admin_get_audit_log

### code_scanning_list_alerts_for_enterprise

### secret_scanning_get_security_analysis_settings_for_enterprise

### secret_scanning_patch_security_analysis_settings_for_enterprise

### enterprise_admin_get_consumed_licenses

### dependabot_list_alerts_for_enterprise

### enterprise_admin_get_license_sync_status

### secret_scanning_list_alerts_for_enterprise

### billing_get_github_actions_billing_ghe

### billing_get_github_advanced_security_billing_ghe

### billing_get_github_packages_billing_ghe

### billing_get_shared_storage_billing_ghe

### secret_scanning_post_security_product_enablement_for_enterprise

### activity_list_public_events

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

### gists_fork

### gists_unstar

### gists_check_is_starred

### gists_star

### gists_get_revision

### gitignore_get_all_templates

### gitignore_get_template

### apps_list_repos_accessible_to_installation

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/github_com_ghec_2022_11_28
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/github_com_ghec_2022_11_28`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
