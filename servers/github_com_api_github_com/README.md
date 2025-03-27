# @open-mcp/github_com_api_github_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "github_com_api_github_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/github_com_api_github_com"],
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

### dependabot_list_alerts_for_enterprise

### secret_scanning_list_alerts_for_enterprise

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

### apps_revoke_installation_access_token

### issues_list

### licenses_get_all_commonly_used

### licenses_get

### markdown_render

### markdown_render_raw

### apps_get_subscription_plan_for_account

### apps_list_plans

### apps_list_accounts_for_plan

### apps_get_subscription_plan_for_account_stubbed

### apps_list_plans_stubbed

### apps_list_accounts_for_plan_stubbed

### meta_get

### activity_list_public_events_for_repo_network

### activity_list_notifications_for_authenticated_user

### activity_mark_notifications_as_read

### activity_get_thread

### activity_mark_thread_as_read

### activity_delete_thread_subscription

### activity_get_thread_subscription_for_authenticated_user

### activity_set_thread_subscription

### meta_get_octocat

### orgs_list

### orgs_get

### orgs_update

### actions_get_actions_cache_usage_for_org

### actions_get_actions_cache_usage_by_repo_for_org

### oidc_get_oidc_custom_sub_template_for_org

### oidc_update_oidc_custom_sub_template_for_org

### actions_get_github_actions_permissions_organization

### actions_set_github_actions_permissions_organization

### actions_list_selected_repositories_enabled_github_actions_organi

### actions_set_selected_repositories_enabled_github_actions_organiz

### actions_disable_selected_repository_github_actions_organization

### actions_enable_selected_repository_github_actions_organization

### actions_get_allowed_actions_organization

### actions_set_allowed_actions_organization

### actions_get_github_actions_default_workflow_permissions_organiza

### actions_set_github_actions_default_workflow_permissions_organiza

### actions_list_required_workflows

### actions_create_required_workflow

### actions_delete_required_workflow

### actions_get_required_workflow

### actions_update_required_workflow

### actions_list_selected_repositories_required_workflow

### actions_set_selected_repos_to_required_workflow

### actions_remove_selected_repo_from_required_workflow

### actions_add_selected_repo_to_required_workflow

### actions_list_self_hosted_runners_for_org

### actions_list_runner_applications_for_org

### actions_create_registration_token_for_org

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/github_com_api_github_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/github_com_api_github_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
