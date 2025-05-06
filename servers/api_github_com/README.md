# @open-mcp/api_github_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_github_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_github_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_github_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_github_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_github_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_github_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_github_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_github_com"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### meta_root

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### security_advisories_list_global_advisories

**Environment variables**

No environment variables required

**Input schema**

- `ghsa_id` (string)
- `type` (string)
- `cve_id` (string)
- `ecosystem` (string)
- `severity` (string)
- `cwes` (other)
- `is_withdrawn` (boolean)
- `affects` (other)
- `published` (string)
- `updated` (string)
- `modified` (string)
- `epss_percentage` (string)
- `epss_percentile` (string)
- `before` (string)
- `after` (string)
- `direction` (string)
- `per_page` (integer)
- `sort` (string)

### security_advisories_get_global_advisory

**Environment variables**

No environment variables required

**Input schema**

- `ghsa_id` (string)

### apps_get_authenticated

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### apps_create_from_manifest

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)

### apps_get_webhook_config_for_app

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### apps_update_webhook_config_for_app

**Environment variables**

No environment variables required

**Input schema**

- `url` (string)
- `content_type` (string)
- `secret` (string)
- `insecure_ssl` (other)

### apps_list_webhook_deliveries

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `cursor` (string)

### apps_get_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `delivery_id` (integer)

### apps_redeliver_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `delivery_id` (integer)

### apps_list_installation_requests_for_authenticated_app

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_list_installations

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)
- `since` (string)
- `outdated` (string)

### apps_get_installation

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)

### apps_delete_installation

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)

### apps_create_installation_access_token

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)
- `repositories` (array)
- `repository_ids` (array)
- `permissions` (object)

### apps_suspend_installation

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)

### apps_unsuspend_installation

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)

### apps_delete_authorization

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `access_token` (string)

### apps_check_token

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `access_token` (string)

### apps_reset_token

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `access_token` (string)

### apps_delete_token

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `access_token` (string)

### apps_scope_token

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `access_token` (string)
- `target` (string)
- `target_id` (integer)
- `repositories` (array)
- `repository_ids` (array)
- `permissions` (object)

### apps_get_by_slug

**Environment variables**

No environment variables required

**Input schema**

- `app_slug` (string)

### classroom_get_an_assignment

**Environment variables**

No environment variables required

**Input schema**

- `assignment_id` (integer)

### classroom_list_accepted_assignments_for_an_assignment

**Environment variables**

No environment variables required

**Input schema**

- `assignment_id` (integer)
- `page` (integer)
- `per_page` (integer)

### classroom_get_assignment_grades

**Environment variables**

No environment variables required

**Input schema**

- `assignment_id` (integer)

### classroom_list_classrooms

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `per_page` (integer)

### classroom_get_a_classroom

**Environment variables**

No environment variables required

**Input schema**

- `classroom_id` (integer)

### classroom_list_assignments_for_a_classroom

**Environment variables**

No environment variables required

**Input schema**

- `classroom_id` (integer)
- `page` (integer)
- `per_page` (integer)

### codes_of_conduct_get_all_codes_of_conduct

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### codes_of_conduct_get_conduct_code

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)

### credentials_revoke

**Environment variables**

No environment variables required

**Input schema**

- `credentials` (array)

### emojis_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### code_security_get_configurations_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)

### code_security_create_configuration_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `name` (string)
- `description` (string)
- `advanced_security` (string)
- `dependency_graph` (string)
- `dependency_graph_autosubmit_action` (string)
- `dependency_graph_autosubmit_action_options` (object)
- `dependabot_alerts` (string)
- `dependabot_security_updates` (string)
- `code_scanning_default_setup` (string)
- `code_scanning_default_setup_options` (object)
- `code_scanning_delegated_alert_dismissal` (string)
- `secret_scanning` (string)
- `secret_scanning_push_protection` (string)
- `secret_scanning_validity_checks` (string)
- `secret_scanning_non_provider_patterns` (string)
- `secret_scanning_generic_secrets` (string)
- `secret_scanning_delegated_alert_dismissal` (string)
- `private_vulnerability_reporting` (string)
- `enforcement` (string)

### code_security_get_default_configurations_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)

### code_security_get_single_configuration_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)

### code_security_update_enterprise_configuration

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)
- `name` (string)
- `description` (string)
- `advanced_security` (string)
- `dependency_graph` (string)
- `dependency_graph_autosubmit_action` (string)
- `dependency_graph_autosubmit_action_options` (object)
- `dependabot_alerts` (string)
- `dependabot_security_updates` (string)
- `code_scanning_default_setup` (string)
- `code_scanning_default_setup_options` (object)
- `code_scanning_delegated_alert_dismissal` (string)
- `secret_scanning` (string)
- `secret_scanning_push_protection` (string)
- `secret_scanning_validity_checks` (string)
- `secret_scanning_non_provider_patterns` (string)
- `secret_scanning_generic_secrets` (string)
- `secret_scanning_delegated_alert_dismissal` (string)
- `private_vulnerability_reporting` (string)
- `enforcement` (string)

### code_security_delete_configuration_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)

### code_security_attach_enterprise_configuration

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)
- `scope` (string)

### code_security_set_configuration_as_default_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)
- `default_for_new_repos` (string)

### code_security_get_repositories_for_enterprise_configuration

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `configuration_id` (integer)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `status` (string)

### dependabot_list_alerts_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `state` (string)
- `severity` (string)
- `ecosystem` (string)
- `package` (string)
- `epss_percentage` (string)
- `has` (other)
- `scope` (string)
- `sort` (string)
- `direction` (string)
- `before` (string)
- `after` (string)
- `first` (integer)
- `last` (integer)
- `per_page` (integer)

### secret_scanning_list_alerts_for_enterprise

**Environment variables**

No environment variables required

**Input schema**

- `enterprise` (string)
- `state` (string)
- `secret_type` (string)
- `resolution` (string)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `validity` (string)
- `is_publicly_leaked` (boolean)
- `is_multi_repo` (boolean)

### activity_list_public_events

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### activity_get_feeds

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gists_list

**Environment variables**

No environment variables required

**Input schema**

- `since` (string)
- `per_page` (integer)
- `page` (integer)

### gists_create

**Environment variables**

No environment variables required

**Input schema**

- `description` (string)
- `files` (object)
- `public` (other)

### gists_list_public

**Environment variables**

No environment variables required

**Input schema**

- `since` (string)
- `per_page` (integer)
- `page` (integer)

### gists_list_starred

**Environment variables**

No environment variables required

**Input schema**

- `since` (string)
- `per_page` (integer)
- `page` (integer)

### gists_get

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_update

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `description` (string)
- `files` (object)

### gists_delete

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_list_comments

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `per_page` (integer)
- `page` (integer)

### gists_create_comment

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `body` (string)

### gists_get_comment

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `comment_id` (integer)

### gists_update_comment

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `comment_id` (integer)
- `body` (string)

### gists_delete_comment

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `comment_id` (integer)

### gists_list_commits

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `per_page` (integer)
- `page` (integer)

### gists_list_forks

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `per_page` (integer)
- `page` (integer)

### gists_fork

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_check_is_starred

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_star

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_unstar

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)

### gists_get_revision

**Environment variables**

No environment variables required

**Input schema**

- `gist_id` (string)
- `sha` (string)

### gitignore_get_all_templates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gitignore_get_template

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### apps_list_repos_accessible_to_installation

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_revoke_installation_access_token

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### issues_list

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `state` (string)
- `labels` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `collab` (boolean)
- `orgs` (boolean)
- `owned` (boolean)
- `pulls` (boolean)
- `per_page` (integer)
- `page` (integer)

### licenses_get_all_commonly_used

**Environment variables**

No environment variables required

**Input schema**

- `featured` (boolean)
- `per_page` (integer)
- `page` (integer)

### licenses_get

**Environment variables**

No environment variables required

**Input schema**

- `license` (string)

### markdown_render

**Environment variables**

No environment variables required

**Input schema**

- `text` (string)
- `mode` (string)
- `context` (string)

### markdown_render_raw

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### apps_get_subscription_plan_for_account

**Environment variables**

No environment variables required

**Input schema**

- `account_id` (integer)

### apps_list_plans

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_list_accounts_for_plan

**Environment variables**

No environment variables required

**Input schema**

- `plan_id` (integer)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### apps_get_subscription_plan_for_account_stubbed

**Environment variables**

No environment variables required

**Input schema**

- `account_id` (integer)

### apps_list_plans_stubbed

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_list_accounts_for_plan_stubbed

**Environment variables**

No environment variables required

**Input schema**

- `plan_id` (integer)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### meta_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### activity_list_public_events_for_repo_network

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### activity_list_notifications_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `all` (boolean)
- `participating` (boolean)
- `since` (string)
- `before` (string)
- `page` (integer)
- `per_page` (integer)

### activity_mark_notifications_as_read

**Environment variables**

No environment variables required

**Input schema**

- `last_read_at` (string)
- `read` (boolean)

### activity_get_thread

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)

### activity_mark_thread_as_read

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)

### activity_mark_thread_as_done

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)

### activity_get_thread_subscription_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)

### activity_set_thread_subscription

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)
- `ignored` (boolean)

### activity_delete_thread_subscription

**Environment variables**

No environment variables required

**Input schema**

- `thread_id` (integer)

### meta_get_octocat

**Environment variables**

No environment variables required

**Input schema**

- `s` (string)

### orgs_list

**Environment variables**

No environment variables required

**Input schema**

- `since` (integer)
- `per_page` (integer)

### billing_get_github_billing_usage_report_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `year` (integer)
- `month` (integer)
- `day` (integer)
- `hour` (integer)

### orgs_get

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_update

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `billing_email` (string)
- `company` (string)
- `email` (string)
- `twitter_username` (string)
- `location` (string)
- `name` (string)
- `description` (string)
- `has_organization_projects` (boolean)
- `has_repository_projects` (boolean)
- `default_repository_permission` (string)
- `members_can_create_repositories` (boolean)
- `members_can_create_internal_repositories` (boolean)
- `members_can_create_private_repositories` (boolean)
- `members_can_create_public_repositories` (boolean)
- `members_allowed_repository_creation_type` (string)
- `members_can_create_pages` (boolean)
- `members_can_create_public_pages` (boolean)
- `members_can_create_private_pages` (boolean)
- `members_can_fork_private_repositories` (boolean)
- `web_commit_signoff_required` (boolean)
- `blog` (string)
- `secret_scanning_push_protection_custom_link_enabled` (boolean)
- `secret_scanning_push_protection_custom_link` (string)
- `deploy_keys_enabled_for_repositories` (boolean)

### orgs_delete

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_actions_cache_usage_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_actions_cache_usage_by_repo_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### actions_list_hosted_runners_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### actions_create_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `image` (object)
- `size` (string)
- `runner_group_id` (integer)
- `maximum_runners` (integer)
- `enable_static_ip` (boolean)

### actions_get_hosted_runners_github_owned_images_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_hosted_runners_partner_images_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_hosted_runners_limits_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_hosted_runners_machine_specs_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_hosted_runners_platforms_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hosted_runner_id` (integer)

### actions_update_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hosted_runner_id` (integer)
- `name` (string)
- `runner_group_id` (integer)
- `maximum_runners` (integer)
- `enable_static_ip` (boolean)

### actions_delete_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hosted_runner_id` (integer)

### oidc_get_oidc_custom_sub_template_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### oidc_update_oidc_custom_sub_template_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `include_claim_keys` (array)

### actions_get_github_actions_permissions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_set_github_actions_permissions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `enabled_repositories` (string)
- `allowed_actions` (string)

### actions_list_selected_repositories_enabled_github_actions_organi

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### actions_set_selected_repositories_enabled_github_actions_organiz

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_repository_ids` (array)

### actions_enable_selected_repository_github_actions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `repository_id` (integer)

### actions_disable_selected_repository_github_actions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `repository_id` (integer)

### actions_get_allowed_actions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_set_allowed_actions_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `github_owned_allowed` (boolean)
- `verified_allowed` (boolean)
- `patterns_allowed` (array)

### actions_get_github_actions_default_workflow_permissions_organiza

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_set_github_actions_default_workflow_permissions_organiza

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `default_workflow_permissions` (string)
- `can_approve_pull_request_reviews` (boolean)

### actions_list_self_hosted_runner_groups_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `visible_to_repository` (string)

### actions_create_self_hosted_runner_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `visibility` (string)
- `selected_repository_ids` (array)
- `runners` (array)
- `allows_public_repositories` (boolean)
- `restricted_to_workflows` (boolean)
- `selected_workflows` (array)
- `network_configuration_id` (string)

### actions_get_self_hosted_runner_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)

### actions_update_self_hosted_runner_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `name` (string)
- `visibility` (string)
- `allows_public_repositories` (boolean)
- `restricted_to_workflows` (boolean)
- `selected_workflows` (array)
- `network_configuration_id` (string)

### actions_delete_self_hosted_runner_group_from_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)

### actions_list_github_hosted_runners_in_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `per_page` (integer)
- `page` (integer)

### actions_list_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `page` (integer)
- `per_page` (integer)

### actions_set_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `selected_repository_ids` (array)

### actions_add_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `repository_id` (integer)

### actions_remove_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `repository_id` (integer)

### actions_list_self_hosted_runners_in_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `per_page` (integer)
- `page` (integer)

### actions_set_self_hosted_runners_in_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `runners` (array)

### actions_add_self_hosted_runner_to_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `runner_id` (integer)

### actions_remove_self_hosted_runner_from_group_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_group_id` (integer)
- `runner_id` (integer)

### actions_list_self_hosted_runners_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `per_page` (integer)
- `page` (integer)

### actions_list_runner_applications_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_generate_runner_jitconfig_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `runner_group_id` (integer)
- `labels` (array)
- `work_folder` (string)

### actions_create_registration_token_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_create_remove_token_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)

### actions_delete_self_hosted_runner_from_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)

### actions_list_labels_for_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)

### actions_add_custom_labels_to_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)
- `labels` (array)

### actions_set_custom_labels_for_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)
- `labels` (array)

### actions_remove_all_custom_labels_from_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)

### actions_remove_custom_label_from_self_hosted_runner_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `runner_id` (integer)
- `name` (string)

### actions_list_org_secrets

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### actions_get_org_public_key

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### actions_get_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### actions_create_or_update_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### actions_delete_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### actions_list_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `page` (integer)
- `per_page` (integer)

### actions_set_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `selected_repository_ids` (array)

### actions_add_selected_repo_to_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### actions_remove_selected_repo_from_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### actions_list_org_variables

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### actions_create_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `value` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### actions_get_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)

### actions_update_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `b_name` (string)
- `value` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### actions_delete_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)

### actions_list_selected_repos_for_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `page` (integer)
- `per_page` (integer)

### actions_set_selected_repos_for_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `selected_repository_ids` (array)

### actions_add_selected_repo_to_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `repository_id` (integer)

### actions_remove_selected_repo_from_org_variable

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `repository_id` (integer)

### orgs_list_attestations

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `subject_digest` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `predicate_type` (string)

### orgs_list_blocked_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_check_blocked_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_block_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_unblock_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### campaigns_list_org_campaigns

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `page` (integer)
- `per_page` (integer)
- `direction` (string)
- `state` (string)
- `sort` (string)

### campaigns_create_campaign

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `description` (string)
- `managers` (array)
- `team_managers` (array)
- `ends_at` (string)
- `contact_link` (string)
- `code_scanning_alerts` (array)
- `generate_issues` (boolean)

### campaigns_get_campaign_summary

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `campaign_number` (integer)

### campaigns_update_campaign

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `campaign_number` (integer)
- `name` (string)
- `description` (string)
- `managers` (array)
- `team_managers` (array)
- `ends_at` (string)
- `contact_link` (string)
- `state` (string)

### campaigns_delete_campaign

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `campaign_number` (integer)

### code_scanning_list_alerts_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `tool_name` (string)
- `tool_guid` (string)
- `before` (string)
- `after` (string)
- `page` (integer)
- `per_page` (integer)
- `direction` (string)
- `state` (string)
- `sort` (string)
- `severity` (string)

### code_security_get_configurations_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `target_type` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)

### code_security_create_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `description` (string)
- `advanced_security` (string)
- `dependency_graph` (string)
- `dependency_graph_autosubmit_action` (string)
- `dependency_graph_autosubmit_action_options` (object)
- `dependabot_alerts` (string)
- `dependabot_security_updates` (string)
- `code_scanning_default_setup` (string)
- `code_scanning_default_setup_options` (object)
- `code_scanning_delegated_alert_dismissal` (string)
- `secret_scanning` (string)
- `secret_scanning_push_protection` (string)
- `secret_scanning_delegated_bypass` (string)
- `secret_scanning_delegated_bypass_options` (object)
- `secret_scanning_validity_checks` (string)
- `secret_scanning_non_provider_patterns` (string)
- `secret_scanning_generic_secrets` (string)
- `secret_scanning_delegated_alert_dismissal` (string)
- `private_vulnerability_reporting` (string)
- `enforcement` (string)

### code_security_get_default_configurations

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### code_security_detach_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_repository_ids` (array)

### code_security_get_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)

### code_security_update_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)
- `name` (string)
- `description` (string)
- `advanced_security` (string)
- `dependency_graph` (string)
- `dependency_graph_autosubmit_action` (string)
- `dependency_graph_autosubmit_action_options` (object)
- `dependabot_alerts` (string)
- `dependabot_security_updates` (string)
- `code_scanning_default_setup` (string)
- `code_scanning_default_setup_options` (object)
- `code_scanning_delegated_alert_dismissal` (string)
- `secret_scanning` (string)
- `secret_scanning_push_protection` (string)
- `secret_scanning_delegated_bypass` (string)
- `secret_scanning_delegated_bypass_options` (object)
- `secret_scanning_validity_checks` (string)
- `secret_scanning_non_provider_patterns` (string)
- `secret_scanning_generic_secrets` (string)
- `secret_scanning_delegated_alert_dismissal` (string)
- `private_vulnerability_reporting` (string)
- `enforcement` (string)

### code_security_delete_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)

### code_security_attach_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)
- `scope` (string)
- `selected_repository_ids` (array)

### code_security_set_configuration_as_default

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)
- `default_for_new_repos` (string)

### code_security_get_repositories_for_configuration

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `configuration_id` (integer)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `status` (string)

### codespaces_list_in_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_set_codespaces_access

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `visibility` (string)
- `selected_usernames` (array)

### codespaces_set_codespaces_access_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_usernames` (array)

### codespaces_delete_codespaces_access_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_usernames` (array)

### codespaces_list_org_secrets

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_get_org_public_key

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### codespaces_get_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### codespaces_create_or_update_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### codespaces_delete_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### codespaces_list_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `page` (integer)
- `per_page` (integer)

### codespaces_set_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `selected_repository_ids` (array)

### codespaces_add_selected_repo_to_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### codespaces_remove_selected_repo_from_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### copilot_get_copilot_organization_details

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### copilot_list_copilot_seats

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `page` (integer)
- `per_page` (integer)

### copilot_add_copilot_seats_for_teams

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_teams` (array)

### copilot_cancel_copilot_seat_assignment_for_teams

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_teams` (array)

### copilot_add_copilot_seats_for_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_usernames` (array)

### copilot_cancel_copilot_seat_assignment_for_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `selected_usernames` (array)

### copilot_copilot_metrics_for_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `since` (string)
- `until` (string)
- `page` (integer)
- `per_page` (integer)

### dependabot_list_alerts_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `state` (string)
- `severity` (string)
- `ecosystem` (string)
- `package` (string)
- `epss_percentage` (string)
- `has` (other)
- `scope` (string)
- `sort` (string)
- `direction` (string)
- `before` (string)
- `after` (string)
- `first` (integer)
- `last` (integer)
- `per_page` (integer)

### dependabot_list_org_secrets

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### dependabot_get_org_public_key

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### dependabot_get_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### dependabot_create_or_update_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### dependabot_delete_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### dependabot_list_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `page` (integer)
- `per_page` (integer)

### dependabot_set_selected_repos_for_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `selected_repository_ids` (array)

### dependabot_add_selected_repo_to_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### dependabot_remove_selected_repo_from_org_secret

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `repository_id` (integer)

### packages_list_docker_migration_conflicting_packages_for_organiza

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### activity_list_public_org_events

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_list_failed_invitations

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_list_webhooks

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_create_webhook

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `config` (object)
- `events` (array)
- `active` (boolean)

### orgs_get_webhook

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)

### orgs_update_webhook

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)
- `config` (object)
- `events` (array)
- `active` (boolean)
- `name` (string)

### orgs_delete_webhook

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)

### orgs_get_webhook_config_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)

### orgs_update_webhook_config_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)
- `url` (string)
- `content_type` (string)
- `secret` (string)
- `insecure_ssl` (other)

### orgs_list_webhook_deliveries

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)
- `per_page` (integer)
- `cursor` (string)

### orgs_get_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)
- `delivery_id` (integer)

### orgs_redeliver_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)
- `delivery_id` (integer)

### orgs_ping_webhook

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `hook_id` (integer)

### api_insights_get_route_stats_by_actor

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `actor_type` (string)
- `actor_id` (integer)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `page` (integer)
- `per_page` (integer)
- `direction` (string)
- `sort` (array)
- `api_route_substring` (string)

### api_insights_get_subject_stats

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `page` (integer)
- `per_page` (integer)
- `direction` (string)
- `sort` (array)
- `subject_name_substring` (string)

### api_insights_get_summary_stats

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)

### api_insights_get_summary_stats_by_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `user_id` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)

### api_insights_get_summary_stats_by_actor

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `actor_type` (string)
- `actor_id` (integer)
- `min_timestamp` (string)
- `max_timestamp` (string)

### api_insights_get_time_stats

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `timestamp_increment` (string)

### api_insights_get_time_stats_by_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `user_id` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `timestamp_increment` (string)

### api_insights_get_time_stats_by_actor

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `actor_type` (string)
- `actor_id` (integer)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `timestamp_increment` (string)

### api_insights_get_user_stats

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `user_id` (string)
- `min_timestamp` (string)
- `max_timestamp` (string)
- `page` (integer)
- `per_page` (integer)
- `direction` (string)
- `sort` (array)
- `actor_name_substring` (string)

### apps_get_org_installation

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_list_app_installations

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### interactions_get_restrictions_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### interactions_set_restrictions_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `limit` (string)
- `expiry` (string)

### interactions_remove_restrictions_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_list_pending_invitations

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `role` (string)
- `invitation_source` (string)

### orgs_create_invitation

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `invitee_id` (integer)
- `email` (string)
- `role` (string)
- `team_ids` (array)

### orgs_cancel_invitation

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `invitation_id` (integer)

### orgs_list_invitation_teams

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `invitation_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_issue_types

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_create_issue_type

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `is_enabled` (boolean)
- `description` (string)
- `color` (string)

### orgs_update_issue_type

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `issue_type_id` (integer)
- `name` (string)
- `is_enabled` (boolean)
- `description` (string)
- `color` (string)

### orgs_delete_issue_type

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `issue_type_id` (integer)

### issues_list_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `filter` (string)
- `state` (string)
- `labels` (string)
- `type` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_list_members

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `filter` (string)
- `role` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_check_membership_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_remove_member

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### codespaces_get_codespaces_for_user_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_delete_from_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `codespace_name` (string)

### codespaces_stop_in_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `codespace_name` (string)

### copilot_get_copilot_seat_details_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_get_membership_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_set_membership_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `role` (string)

### orgs_remove_membership_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### migrations_list_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `exclude` (array)

### migrations_start_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `repositories` (array)
- `lock_repositories` (boolean)
- `exclude_metadata` (boolean)
- `exclude_git_data` (boolean)
- `exclude_attachments` (boolean)
- `exclude_releases` (boolean)
- `exclude_owner_projects` (boolean)
- `org_metadata_only` (boolean)
- `exclude` (array)

### migrations_get_status_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `migration_id` (integer)
- `exclude` (array)

### migrations_download_archive_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `migration_id` (integer)

### migrations_delete_archive_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `migration_id` (integer)

### migrations_unlock_repo_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `migration_id` (integer)
- `repo_name` (string)

### migrations_list_repos_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `migration_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_org_roles

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_revoke_all_org_roles_team

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)

### orgs_assign_team_to_org_role

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `role_id` (integer)

### orgs_revoke_org_role_team

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `role_id` (integer)

### orgs_revoke_all_org_roles_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_assign_user_to_org_role

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `role_id` (integer)

### orgs_revoke_org_role_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `role_id` (integer)

### orgs_get_org_role

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `role_id` (integer)

### orgs_list_org_role_teams

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `role_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_org_role_users

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `role_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_outside_collaborators

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `filter` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_convert_member_to_outside_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)
- `async` (boolean)

### orgs_remove_outside_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### packages_list_packages_for_organization

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `package_type` (string)
- `visibility` (string)
- `page` (integer)
- `per_page` (integer)

### packages_get_package_for_organization

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)

### packages_delete_package_for_org

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)

### packages_restore_package_for_org

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)
- `token` (string)

### packages_get_all_package_versions_for_package_owned_by_org

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)
- `page` (integer)
- `per_page` (integer)
- `state` (string)

### packages_get_package_version_for_organization

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)
- `package_version_id` (integer)

### packages_delete_package_version_for_org

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)
- `package_version_id` (integer)

### packages_restore_package_version_for_org

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `org` (string)
- `package_version_id` (integer)

### orgs_list_pat_grant_requests

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `sort` (string)
- `direction` (string)
- `owner` (array)
- `repository` (string)
- `permission` (string)
- `last_used_before` (string)
- `last_used_after` (string)
- `token_id` (array)

### orgs_review_pat_grant_requests_in_bulk

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `pat_request_ids` (array)
- `action` (string)
- `reason` (string)

### orgs_review_pat_grant_request

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `pat_request_id` (integer)
- `action` (string)
- `reason` (string)

### orgs_list_pat_grant_request_repositories

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `pat_request_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_pat_grants

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `sort` (string)
- `direction` (string)
- `owner` (array)
- `repository` (string)
- `permission` (string)
- `last_used_before` (string)
- `last_used_after` (string)
- `token_id` (array)

### orgs_update_pat_accesses

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `action` (string)
- `pat_ids` (array)

### orgs_update_pat_access

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `pat_id` (integer)
- `action` (string)

### orgs_list_pat_grant_repositories

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `pat_id` (integer)
- `per_page` (integer)
- `page` (integer)

### private_registries_list_org_private_registries

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### private_registries_create_org_private_registry

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `registry_type` (string)
- `username` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### private_registries_get_org_public_key

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### private_registries_get_org_private_registry

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### private_registries_update_org_private_registry

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)
- `registry_type` (string)
- `username` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `visibility` (string)
- `selected_repository_ids` (array)

### private_registries_delete_org_private_registry

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `secret_name` (string)

### projects_list_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `state` (string)
- `per_page` (integer)
- `page` (integer)

### projects_create_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `body` (string)

### orgs_get_all_custom_properties

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_create_or_update_custom_properties

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `properties` (array)

### orgs_get_custom_property

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `custom_property_name` (string)

### orgs_create_or_update_custom_property

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `custom_property_name` (string)
- `value_type` (string)
- `required` (boolean)
- `default_value` (other)
- `description` (string)
- `allowed_values` (array)
- `values_editable_by` (string)

### orgs_remove_custom_property

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `custom_property_name` (string)

### orgs_list_custom_properties_values_for_repos

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `repository_query` (string)

### orgs_create_or_update_custom_properties_values_for_repos

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `repository_names` (array)
- `properties` (array)

### orgs_list_public_members

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_check_public_membership_for_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_set_public_membership_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### orgs_remove_public_membership_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `username` (string)

### repos_list_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `type` (string)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `description` (string)
- `homepage` (string)
- `private` (boolean)
- `visibility` (string)
- `has_issues` (boolean)
- `has_projects` (boolean)
- `has_wiki` (boolean)
- `has_downloads` (boolean)
- `is_template` (boolean)
- `team_id` (integer)
- `auto_init` (boolean)
- `gitignore_template` (string)
- `license_template` (string)
- `allow_squash_merge` (boolean)
- `allow_merge_commit` (boolean)
- `allow_rebase_merge` (boolean)
- `allow_auto_merge` (boolean)
- `delete_branch_on_merge` (boolean)
- `squash_merge_commit_title` (string)
- `squash_merge_commit_message` (string)
- `merge_commit_title` (string)
- `merge_commit_message` (string)
- `custom_properties` (object)

### repos_get_org_rulesets

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)
- `targets` (string)

### repos_create_org_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `target` (string)
- `enforcement` (string)
- `bypass_actors` (array)
- `conditions` (object)
- `rules` (array)

### repos_get_org_rule_suites

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ref` (string)
- `repository_name` (string)
- `time_period` (string)
- `actor_name` (string)
- `rule_suite_result` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_org_rule_suite

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `rule_suite_id` (integer)

### repos_get_org_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ruleset_id` (integer)

### repos_update_org_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ruleset_id` (integer)
- `name` (string)
- `target` (string)
- `enforcement` (string)
- `bypass_actors` (array)
- `conditions` (object)
- `rules` (array)

### repos_delete_org_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ruleset_id` (integer)

### orgs_get_org_ruleset_history

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ruleset_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_get_org_ruleset_version

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `ruleset_id` (integer)
- `version_id` (integer)

### secret_scanning_list_alerts_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `state` (string)
- `secret_type` (string)
- `resolution` (string)
- `sort` (string)
- `direction` (string)
- `page` (integer)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `validity` (string)
- `is_publicly_leaked` (boolean)
- `is_multi_repo` (boolean)

### security_advisories_list_org_repository_advisories

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `direction` (string)
- `sort` (string)
- `before` (string)
- `after` (string)
- `per_page` (integer)
- `state` (string)

### orgs_list_security_manager_teams

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_add_security_manager_team

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)

### orgs_remove_security_manager_team

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)

### billing_get_github_actions_billing_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### billing_get_github_packages_billing_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### billing_get_shared_storage_billing_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### hosted_compute_list_network_configurations_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### hosted_compute_create_network_configuration_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `compute_service` (string)
- `network_settings_ids` (array)

### hosted_compute_get_network_configuration_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `network_configuration_id` (string)

### hosted_compute_update_network_configuration_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `network_configuration_id` (string)
- `name` (string)
- `compute_service` (string)
- `network_settings_ids` (array)

### hosted_compute_delete_network_configuration_from_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `network_configuration_id` (string)

### hosted_compute_get_network_settings_for_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `network_settings_id` (string)

### copilot_copilot_metrics_for_team

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `since` (string)
- `until` (string)
- `page` (integer)
- `per_page` (integer)

### teams_list

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `per_page` (integer)
- `page` (integer)

### teams_create

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `name` (string)
- `description` (string)
- `maintainers` (array)
- `repo_names` (array)
- `privacy` (string)
- `notification_setting` (string)
- `permission` (string)
- `parent_team_id` (integer)

### teams_get_by_name

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)

### teams_update_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `name` (string)
- `description` (string)
- `privacy` (string)
- `notification_setting` (string)
- `permission` (string)
- `parent_team_id` (integer)

### teams_delete_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)

### teams_list_discussions_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)
- `pinned` (string)

### teams_create_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `title` (string)
- `body` (string)
- `private` (boolean)

### teams_get_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)

### teams_update_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `title` (string)
- `body` (string)

### teams_delete_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)

### teams_list_discussion_comments_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### teams_create_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `body` (string)

### teams_get_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)

### teams_update_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)
- `body` (string)

### teams_delete_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)

### reactions_list_for_team_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_team_discussion_comment_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)
- `content` (string)

### reactions_delete_for_team_discussion_comment

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `comment_number` (integer)
- `reaction_id` (integer)

### reactions_list_for_team_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_team_discussion_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `content` (string)

### reactions_delete_for_team_discussion

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `discussion_number` (integer)
- `reaction_id` (integer)

### teams_list_pending_invitations_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `per_page` (integer)
- `page` (integer)

### teams_list_members_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `role` (string)
- `per_page` (integer)
- `page` (integer)

### teams_get_membership_for_user_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `username` (string)

### teams_add_or_update_membership_for_user_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `username` (string)
- `role` (string)

### teams_remove_membership_for_user_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `username` (string)

### teams_list_projects_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `per_page` (integer)
- `page` (integer)

### teams_check_permissions_for_project_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `project_id` (integer)

### teams_add_or_update_project_permissions_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `project_id` (integer)
- `permission` (string)

### teams_remove_project_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `project_id` (integer)

### teams_list_repos_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `per_page` (integer)
- `page` (integer)

### teams_check_permissions_for_repo_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `owner` (string)
- `repo` (string)

### teams_add_or_update_repo_permissions_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `owner` (string)
- `repo` (string)
- `permission` (string)

### teams_remove_repo_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `owner` (string)
- `repo` (string)

### teams_list_child_in_org

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `team_slug` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_enable_or_disable_security_product_on_all_org_repos

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `security_product` (string)
- `enablement` (string)
- `query_suite` (string)

### projects_get_card

**Environment variables**

No environment variables required

**Input schema**

- `card_id` (integer)

### projects_update_card

**Environment variables**

No environment variables required

**Input schema**

- `card_id` (integer)
- `note` (string)
- `archived` (boolean)

### projects_delete_card

**Environment variables**

No environment variables required

**Input schema**

- `card_id` (integer)

### projects_move_card

**Environment variables**

No environment variables required

**Input schema**

- `card_id` (integer)
- `position` (string)
- `column_id` (integer)

### projects_get_column

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)

### projects_update_column

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)
- `name` (string)

### projects_delete_column

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)

### projects_list_cards

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)
- `archived_state` (string)
- `per_page` (integer)
- `page` (integer)

### projects_create_card

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)

### projects_move_column

**Environment variables**

No environment variables required

**Input schema**

- `column_id` (integer)
- `position` (string)

### projects_get

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)

### projects_update

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `name` (string)
- `body` (string)
- `state` (string)
- `organization_permission` (string)
- `private` (boolean)

### projects_delete

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)

### projects_list_collaborators

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `affiliation` (string)
- `per_page` (integer)
- `page` (integer)

### projects_add_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `username` (string)
- `permission` (string)

### projects_remove_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `username` (string)

### projects_get_permission_for_user

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `username` (string)

### projects_list_columns

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `per_page` (integer)
- `page` (integer)

### projects_create_column

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `name` (string)

### rate_limit_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### repos_get

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_update

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `description` (string)
- `homepage` (string)
- `private` (boolean)
- `visibility` (string)
- `security_and_analysis` (object)
- `has_issues` (boolean)
- `has_projects` (boolean)
- `has_wiki` (boolean)
- `is_template` (boolean)
- `default_branch` (string)
- `allow_squash_merge` (boolean)
- `allow_merge_commit` (boolean)
- `allow_rebase_merge` (boolean)
- `allow_auto_merge` (boolean)
- `delete_branch_on_merge` (boolean)
- `allow_update_branch` (boolean)
- `squash_merge_commit_title` (string)
- `squash_merge_commit_message` (string)
- `merge_commit_title` (string)
- `merge_commit_message` (string)
- `archived` (boolean)
- `allow_forking` (boolean)
- `web_commit_signoff_required` (boolean)

### repos_delete

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_list_artifacts_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)
- `name` (string)

### actions_get_artifact

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `artifact_id` (integer)

### actions_delete_artifact

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `artifact_id` (integer)

### actions_download_artifact

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `artifact_id` (integer)
- `archive_format` (string)

### actions_get_actions_cache_usage

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_get_actions_cache_list

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)
- `ref` (string)
- `key` (string)
- `sort` (string)
- `direction` (string)

### actions_delete_actions_cache_by_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `key` (string)
- `ref` (string)

### actions_delete_actions_cache_by_id

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `cache_id` (integer)

### actions_get_job_for_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `job_id` (integer)

### actions_download_job_logs_for_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `job_id` (integer)

### actions_re_run_job_for_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `job_id` (integer)
- `enable_debug_logging` (boolean)

### actions_get_custom_oidc_sub_claim_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_set_custom_oidc_sub_claim_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `use_default` (boolean)
- `include_claim_keys` (array)

### actions_list_repo_organization_secrets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### actions_list_repo_organization_variables

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### actions_get_github_actions_permissions_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_set_github_actions_permissions_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `enabled` (boolean)
- `allowed_actions` (string)

### actions_get_workflow_access_to_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_set_workflow_access_to_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `access_level` (string)

### actions_get_allowed_actions_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_set_allowed_actions_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `github_owned_allowed` (boolean)
- `verified_allowed` (boolean)
- `patterns_allowed` (array)

### actions_get_github_actions_default_workflow_permissions_reposito

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_set_github_actions_default_workflow_permissions_reposito

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `default_workflow_permissions` (string)
- `can_approve_pull_request_reviews` (boolean)

### actions_list_self_hosted_runners_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `per_page` (integer)
- `page` (integer)

### actions_list_runner_applications_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_generate_runner_jitconfig_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `runner_group_id` (integer)
- `labels` (array)
- `work_folder` (string)

### actions_create_registration_token_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_create_remove_token_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_get_self_hosted_runner_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)

### actions_delete_self_hosted_runner_from_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)

### actions_list_labels_for_self_hosted_runner_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)

### actions_add_custom_labels_to_self_hosted_runner_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)
- `labels` (array)

### actions_set_custom_labels_for_self_hosted_runner_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)
- `labels` (array)

### actions_remove_all_custom_labels_from_self_hosted_runner_for_rep

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)

### actions_remove_custom_label_from_self_hosted_runner_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `runner_id` (integer)
- `name` (string)

### actions_list_workflow_runs_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `actor` (string)
- `branch` (string)
- `event` (string)
- `status` (string)
- `per_page` (integer)
- `page` (integer)
- `created` (string)
- `exclude_pull_requests` (boolean)
- `check_suite_id` (integer)
- `head_sha` (string)

### actions_get_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `exclude_pull_requests` (boolean)

### actions_delete_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_get_reviews_for_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_approve_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_list_workflow_run_artifacts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `per_page` (integer)
- `page` (integer)
- `name` (string)

### actions_get_workflow_run_attempt

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `attempt_number` (integer)
- `exclude_pull_requests` (boolean)

### actions_list_jobs_for_workflow_run_attempt

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `attempt_number` (integer)
- `per_page` (integer)
- `page` (integer)

### actions_download_workflow_run_attempt_logs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `attempt_number` (integer)

### actions_cancel_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_review_custom_gates_for_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_force_cancel_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_list_jobs_for_workflow_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `filter` (string)
- `per_page` (integer)
- `page` (integer)

### actions_download_workflow_run_logs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_delete_workflow_run_logs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_get_pending_deployments_for_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_review_pending_deployments_for_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `environment_ids` (array)
- `state` (string)
- `comment` (string)

### actions_re_run_workflow

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `enable_debug_logging` (boolean)

### actions_re_run_workflow_failed_jobs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)
- `enable_debug_logging` (boolean)

### actions_get_workflow_run_usage

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `run_id` (integer)

### actions_list_repo_secrets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### actions_get_repo_public_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### actions_get_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### actions_create_or_update_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)

### actions_delete_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### actions_list_repo_variables

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### actions_create_repo_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `value` (string)

### actions_get_repo_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)

### actions_update_repo_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `b_name` (string)
- `value` (string)

### actions_delete_repo_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)

### actions_list_repo_workflows

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### actions_get_workflow

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)

### actions_disable_workflow

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)

### actions_create_workflow_dispatch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)
- `ref` (string)
- `inputs` (object)

### actions_enable_workflow

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)

### actions_list_workflow_runs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)
- `actor` (string)
- `branch` (string)
- `event` (string)
- `status` (string)
- `per_page` (integer)
- `page` (integer)
- `created` (string)
- `exclude_pull_requests` (boolean)
- `check_suite_id` (integer)
- `head_sha` (string)

### actions_get_workflow_usage

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `workflow_id` (other)

### repos_list_activities

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `direction` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `ref` (string)
- `actor` (string)
- `time_period` (string)
- `activity_type` (string)

### issues_list_assignees

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### issues_check_user_can_be_assigned

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `assignee` (string)

### repos_create_attestation

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `bundle` (object)

### repos_list_attestations

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `subject_digest` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `predicate_type` (string)

### repos_list_autolinks

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_create_autolink

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `key_prefix` (string)
- `url_template` (string)
- `is_alphanumeric` (boolean)

### repos_get_autolink

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `autolink_id` (integer)

### repos_delete_autolink

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `autolink_id` (integer)

### repos_check_automated_security_fixes

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_enable_automated_security_fixes

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_disable_automated_security_fixes

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_list_branches

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `protected` (boolean)
- `per_page` (integer)
- `page` (integer)

### repos_get_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_update_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `required_status_checks` (object)
- `enforce_admins` (boolean)
- `required_pull_request_reviews` (object)
- `restrictions` (object)
- `required_linear_history` (boolean)
- `allow_force_pushes` (boolean)
- `allow_deletions` (boolean)
- `block_creations` (boolean)
- `required_conversation_resolution` (boolean)
- `lock_branch` (boolean)
- `allow_fork_syncing` (boolean)

### repos_delete_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_admin_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_set_admin_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_delete_admin_branch_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_pull_request_review_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_update_pull_request_review_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `dismissal_restrictions` (object)
- `dismiss_stale_reviews` (boolean)
- `require_code_owner_reviews` (boolean)
- `required_approving_review_count` (integer)
- `require_last_push_approval` (boolean)
- `bypass_pull_request_allowances` (object)

### repos_delete_pull_request_review_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_commit_signature_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_create_commit_signature_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_delete_commit_signature_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_status_checks_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_update_status_check_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `strict` (boolean)
- `checks` (array)

### repos_remove_status_check_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_all_status_check_contexts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_add_status_check_contexts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_set_status_check_contexts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_remove_status_check_contexts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_delete_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_apps_with_access_to_protected_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_add_app_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `apps` (array)

### repos_set_app_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `apps` (array)

### repos_remove_app_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `apps` (array)

### repos_get_teams_with_access_to_protected_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_add_team_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_set_team_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_remove_team_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_get_users_with_access_to_protected_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_add_user_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `users` (array)

### repos_set_user_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `users` (array)

### repos_remove_user_access_restrictions

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `users` (array)

### repos_rename_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `new_name` (string)

### checks_create

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `head_sha` (string)
- `details_url` (string)
- `external_id` (string)
- `status` (string)
- `started_at` (string)
- `conclusion` (string)
- `completed_at` (string)
- `output` (object)
- `actions` (array)

### checks_get

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_run_id` (integer)

### checks_update

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_run_id` (integer)
- `name` (string)
- `details_url` (string)
- `external_id` (string)
- `started_at` (string)
- `status` (string)
- `conclusion` (string)
- `completed_at` (string)
- `output` (object)
- `actions` (array)

### checks_list_annotations

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_run_id` (integer)
- `per_page` (integer)
- `page` (integer)

### checks_rerequest_run

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_run_id` (integer)

### checks_create_suite

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `head_sha` (string)

### checks_set_suites_preferences

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `auto_trigger_checks` (array)

### checks_get_suite

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_suite_id` (integer)

### checks_list_for_suite

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_suite_id` (integer)
- `check_name` (string)
- `status` (string)
- `filter` (string)
- `per_page` (integer)
- `page` (integer)

### checks_rerequest_suite

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `check_suite_id` (integer)

### code_scanning_list_alerts_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tool_name` (string)
- `tool_guid` (string)
- `page` (integer)
- `per_page` (integer)
- `ref` (string)
- `pr` (integer)
- `direction` (string)
- `before` (string)
- `after` (string)
- `sort` (string)
- `state` (string)
- `severity` (string)

### code_scanning_get_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)

### code_scanning_update_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `state` (string)
- `dismissed_reason` (string)
- `dismissed_comment` (string)
- `create_request` (boolean)

### code_scanning_get_autofix

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)

### code_scanning_create_autofix

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)

### code_scanning_commit_autofix

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `target_ref` (string)
- `message` (string)

### code_scanning_list_alert_instances

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `page` (integer)
- `per_page` (integer)
- `ref` (string)
- `pr` (integer)

### code_scanning_list_recent_analyses

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tool_name` (string)
- `tool_guid` (string)
- `page` (integer)
- `per_page` (integer)
- `pr` (integer)
- `ref` (string)
- `sarif_id` (string)
- `direction` (string)
- `sort` (string)

### code_scanning_get_analysis

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `analysis_id` (integer)

### code_scanning_delete_analysis

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `analysis_id` (integer)
- `confirm_delete` (string)

### code_scanning_list_codeql_databases

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### code_scanning_get_codeql_database

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `language` (string)

### code_scanning_delete_codeql_database

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `language` (string)

### code_scanning_create_variant_analysis

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `language` (string)
- `query_pack` (string)
- `repositories` (array)
- `repository_lists` (array)
- `repository_owners` (array)

### code_scanning_get_variant_analysis

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `codeql_variant_analysis_id` (integer)

### code_scanning_get_variant_analysis_repo_task

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `codeql_variant_analysis_id` (integer)
- `repo_owner` (string)
- `repo_name` (string)

### code_scanning_get_default_setup

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### code_scanning_update_default_setup

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `runner_type` (string)
- `runner_label` (string)
- `query_suite` (string)
- `languages` (array)

### code_scanning_upload_sarif

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)
- `ref` (string)
- `sarif` (string)
- `checkout_uri` (string)
- `started_at` (string)
- `tool_name` (string)
- `validate` (boolean)

### code_scanning_get_sarif

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sarif_id` (string)

### code_security_get_configuration_for_repository

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_codeowners_errors

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### codespaces_list_in_repository_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_create_with_repo_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `location` (string)
- `geo` (string)
- `client_ip` (string)
- `machine` (string)
- `devcontainer_path` (string)
- `multi_repo_permissions_opt_out` (boolean)
- `working_directory` (string)
- `idle_timeout_minutes` (integer)
- `display_name` (string)
- `retention_period_minutes` (integer)

### codespaces_list_devcontainers_in_repository_for_authenticated_us

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_repo_machines_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `location` (string)
- `client_ip` (string)
- `ref` (string)

### codespaces_pre_flight_with_repo_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `client_ip` (string)

### codespaces_check_permissions_for_devcontainer

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `devcontainer_path` (string)

### codespaces_list_repo_secrets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### codespaces_get_repo_public_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### codespaces_get_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### codespaces_create_or_update_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)

### codespaces_delete_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### repos_list_collaborators

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `affiliation` (string)
- `permission` (string)
- `per_page` (integer)
- `page` (integer)

### repos_check_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `username` (string)

### repos_add_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `username` (string)
- `permission` (string)

### repos_remove_collaborator

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `username` (string)

### repos_get_collaborator_permission_level

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `username` (string)

### repos_list_commit_comments_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### repos_update_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `body` (string)

### repos_delete_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### reactions_list_for_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)

### reactions_delete_for_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `reaction_id` (integer)

### repos_list_commits

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sha` (string)
- `path` (string)
- `author` (string)
- `committer` (string)
- `since` (string)
- `until` (string)
- `per_page` (integer)
- `page` (integer)

### repos_list_branches_for_head_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)

### repos_list_comments_for_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_commit_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)
- `body` (string)
- `path` (string)
- `position` (integer)
- `line` (integer)

### repos_list_pull_requests_associated_with_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `page` (integer)
- `per_page` (integer)

### checks_list_for_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `check_name` (string)
- `status` (string)
- `filter` (string)
- `per_page` (integer)
- `page` (integer)
- `app_id` (integer)

### checks_list_suites_for_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `app_id` (integer)
- `check_name` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_combined_status_for_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `per_page` (integer)
- `page` (integer)

### repos_list_commit_statuses_for_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_community_profile_metrics

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_compare_commits

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `basehead` (string)
- `page` (integer)
- `per_page` (integer)

### repos_get_content

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `path` (string)
- `ref` (string)

### repos_create_or_update_file_contents

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `path` (string)
- `message` (string)
- `content` (string)
- `sha` (string)
- `branch` (string)
- `committer` (object)
- `author` (object)

### repos_delete_file

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `path` (string)
- `message` (string)
- `sha` (string)
- `branch` (string)
- `committer` (object)
- `author` (object)

### repos_list_contributors

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `anon` (string)
- `per_page` (integer)
- `page` (integer)

### dependabot_list_alerts_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `severity` (string)
- `ecosystem` (string)
- `package` (string)
- `manifest` (string)
- `epss_percentage` (string)
- `has` (other)
- `scope` (string)
- `sort` (string)
- `direction` (string)
- `page` (integer)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `first` (integer)
- `last` (integer)

### dependabot_get_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)

### dependabot_update_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `state` (string)
- `dismissed_reason` (string)
- `dismissed_comment` (string)

### dependabot_list_repo_secrets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### dependabot_get_repo_public_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### dependabot_get_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### dependabot_create_or_update_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)

### dependabot_delete_repo_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `secret_name` (string)

### dependency_graph_diff_range

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `basehead` (string)
- `name` (string)

### dependency_graph_export_sbom

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### dependency_graph_create_repository_snapshot

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `version` (integer)
- `job` (object)
- `sha` (string)
- `ref` (string)
- `detector` (object)
- `metadata` (object)
- `manifests` (object)
- `scanned` (string)

### repos_list_deployments

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sha` (string)
- `ref` (string)
- `task` (string)
- `environment` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `task` (string)
- `auto_merge` (boolean)
- `required_contexts` (array)
- `payload` (other)
- `environment` (string)
- `description` (string)
- `transient_environment` (boolean)
- `production_environment` (boolean)

### repos_get_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `deployment_id` (integer)

### repos_delete_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `deployment_id` (integer)

### repos_list_deployment_statuses

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `deployment_id` (integer)
- `per_page` (integer)
- `page` (integer)

### repos_create_deployment_status

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `deployment_id` (integer)
- `state` (string)
- `target_url` (string)
- `log_url` (string)
- `description` (string)
- `environment` (string)
- `environment_url` (string)
- `auto_inactive` (boolean)

### repos_get_deployment_status

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `deployment_id` (integer)
- `status_id` (integer)

### repos_create_dispatch_event

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `event_type` (string)
- `client_payload` (object)

### repos_get_all_environments

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_environment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)

### repos_create_or_update_environment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `wait_timer` (integer)
- `prevent_self_review` (boolean)
- `reviewers` (array)
- `deployment_branch_policy` (object)

### repos_delete_an_environment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)

### repos_list_deployment_branch_policies

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_deployment_branch_policy

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `name` (string)
- `type` (string)

### repos_get_deployment_branch_policy

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `branch_policy_id` (integer)

### repos_update_deployment_branch_policy

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `branch_policy_id` (integer)
- `name` (string)

### repos_delete_deployment_branch_policy

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `branch_policy_id` (integer)

### repos_get_all_deployment_protection_rules

**Environment variables**

No environment variables required

**Input schema**

- `environment_name` (string)
- `repo` (string)
- `owner` (string)

### repos_create_deployment_protection_rule

**Environment variables**

No environment variables required

**Input schema**

- `environment_name` (string)
- `repo` (string)
- `owner` (string)
- `integration_id` (integer)

### repos_list_custom_deployment_rule_integrations

**Environment variables**

No environment variables required

**Input schema**

- `environment_name` (string)
- `repo` (string)
- `owner` (string)
- `page` (integer)
- `per_page` (integer)

### repos_get_custom_deployment_protection_rule

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `protection_rule_id` (integer)

### repos_disable_deployment_protection_rule

**Environment variables**

No environment variables required

**Input schema**

- `environment_name` (string)
- `repo` (string)
- `owner` (string)
- `protection_rule_id` (integer)

### actions_list_environment_secrets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `per_page` (integer)
- `page` (integer)

### actions_get_environment_public_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)

### actions_get_environment_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `secret_name` (string)

### actions_create_or_update_environment_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)

### actions_delete_environment_secret

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `secret_name` (string)

### actions_list_environment_variables

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `per_page` (integer)
- `page` (integer)

### actions_create_environment_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `name` (string)
- `value` (string)

### actions_get_environment_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `environment_name` (string)
- `name` (string)

### actions_update_environment_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `environment_name` (string)
- `b_name` (string)
- `value` (string)

### actions_delete_environment_variable

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `environment_name` (string)

### activity_list_repo_events

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_list_forks

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sort` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_fork

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `organization` (string)
- `name` (string)
- `default_branch_only` (boolean)

### git_create_blob

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `content` (string)
- `encoding` (string)

### git_get_blob

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `file_sha` (string)

### git_create_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `message` (string)
- `tree` (string)
- `parents` (array)
- `author` (object)
- `committer` (object)
- `signature` (string)

### git_get_commit

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `commit_sha` (string)

### git_list_matching_refs

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### git_get_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### git_create_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `sha` (string)

### git_update_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `sha` (string)
- `force` (boolean)

### git_delete_ref

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### git_create_tag

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag` (string)
- `message` (string)
- `object` (string)
- `type` (string)
- `tagger` (object)

### git_get_tag

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag_sha` (string)

### git_create_tree

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tree` (array)
- `base_tree` (string)

### git_get_tree

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tree_sha` (string)
- `recursive` (string)

### repos_list_webhooks

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `config` (object)
- `events` (array)
- `active` (boolean)

### repos_get_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)

### repos_update_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)
- `config` (object)
- `events` (array)
- `add_events` (array)
- `remove_events` (array)
- `active` (boolean)

### repos_delete_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)

### repos_get_webhook_config_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)

### repos_update_webhook_config_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)
- `url` (string)
- `content_type` (string)
- `secret` (string)
- `insecure_ssl` (other)

### repos_list_webhook_deliveries

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)
- `per_page` (integer)
- `cursor` (string)

### repos_get_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)
- `delivery_id` (integer)

### repos_redeliver_webhook_delivery

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)
- `delivery_id` (integer)

### repos_ping_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)

### repos_test_push_webhook

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `hook_id` (integer)

### migrations_get_import_status

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### migrations_start_import

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `vcs_url` (string)
- `vcs` (string)
- `vcs_username` (string)
- `vcs_password` (string)
- `tfvc_project` (string)

### migrations_update_import

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `vcs_username` (string)
- `vcs_password` (string)
- `vcs` (string)
- `tfvc_project` (string)

### migrations_cancel_import

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### migrations_get_commit_authors

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `since` (integer)

### migrations_map_commit_author

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `author_id` (integer)
- `email` (string)
- `name` (string)

### migrations_get_large_files

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### migrations_set_lfs_preference

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `use_lfs` (string)

### apps_get_repo_installation

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### interactions_get_restrictions_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### interactions_set_restrictions_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `limit` (string)
- `expiry` (string)

### interactions_remove_restrictions_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_list_invitations

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_update_invitation

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `invitation_id` (integer)
- `permissions` (string)

### repos_delete_invitation

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `invitation_id` (integer)

### issues_list_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `milestone` (string)
- `state` (string)
- `assignee` (string)
- `type` (string)
- `creator` (string)
- `mentioned` (string)
- `labels` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### issues_create

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `title` (other)
- `body` (string)
- `assignee` (string)
- `milestone` (other)
- `labels` (array)
- `assignees` (array)
- `type` (string)

### issues_list_comments_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### issues_get_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### issues_update_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `body` (string)

### issues_delete_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### reactions_list_for_issue_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_issue_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)

### reactions_delete_for_issue_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `reaction_id` (integer)

### issues_list_events_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### issues_get_event

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `event_id` (integer)

### issues_get

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)

### issues_update

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `title` (other)
- `body` (string)
- `assignee` (string)
- `state` (string)
- `state_reason` (string)
- `milestone` (other)
- `labels` (array)
- `assignees` (array)
- `type` (string)

### issues_add_assignees

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `assignees` (array)

### issues_remove_assignees

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `assignees` (array)

### issues_check_user_can_be_assigned_to_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `assignee` (string)

### issues_list_comments

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### issues_create_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `body` (string)

### issues_list_events

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `per_page` (integer)
- `page` (integer)

### issues_list_labels_on_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `per_page` (integer)
- `page` (integer)

### issues_add_labels

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)

### issues_set_labels

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)

### issues_remove_all_labels

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)

### issues_remove_label

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `name` (string)

### issues_lock

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `lock_reason` (string)

### issues_unlock

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)

### reactions_list_for_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `content` (string)

### reactions_delete_for_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `reaction_id` (integer)

### issues_remove_sub_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `sub_issue_id` (integer)

### issues_list_sub_issues

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `per_page` (integer)
- `page` (integer)

### issues_add_sub_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `sub_issue_id` (integer)
- `replace_parent` (boolean)

### issues_reprioritize_sub_issue

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `sub_issue_id` (integer)
- `after_id` (integer)
- `before_id` (integer)

### issues_list_events_for_timeline

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `issue_number` (integer)
- `per_page` (integer)
- `page` (integer)

### repos_list_deploy_keys

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_deploy_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `title` (string)
- `key` (string)
- `read_only` (boolean)

### repos_get_deploy_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `key_id` (integer)

### repos_delete_deploy_key

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `key_id` (integer)

### issues_list_labels_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### issues_create_label

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `color` (string)
- `description` (string)

### issues_get_label

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)

### issues_update_label

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `new_name` (string)
- `color` (string)
- `description` (string)

### issues_delete_label

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)

### repos_list_languages

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### licenses_get_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### repos_merge_upstream

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)

### repos_merge

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `base` (string)
- `head` (string)
- `commit_message` (string)

### issues_list_milestones

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### issues_create_milestone

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `title` (string)
- `state` (string)
- `description` (string)
- `due_on` (string)

### issues_get_milestone

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `milestone_number` (integer)

### issues_update_milestone

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `milestone_number` (integer)
- `title` (string)
- `state` (string)
- `description` (string)
- `due_on` (string)

### issues_delete_milestone

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `milestone_number` (integer)

### issues_list_labels_for_milestone

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `milestone_number` (integer)
- `per_page` (integer)
- `page` (integer)

### activity_list_repo_notifications_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `all` (boolean)
- `participating` (boolean)
- `since` (string)
- `before` (string)
- `per_page` (integer)
- `page` (integer)

### activity_mark_repo_notifications_as_read

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `last_read_at` (string)

### repos_get_pages

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_create_pages_site

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `build_type` (string)
- `source` (object)

### repos_update_information_about_pages_site

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `cname` (string)
- `https_enforced` (boolean)
- `build_type` (string)
- `source` (other)

### repos_delete_pages_site

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_list_pages_builds

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_request_pages_build

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_latest_pages_build

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_pages_build

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `build_id` (integer)

### repos_create_pages_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `artifact_id` (number)
- `artifact_url` (string)
- `environment` (string)
- `pages_build_version` (string)
- `oidc_token` (string)

### repos_get_pages_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pages_deployment_id` (other)

### repos_cancel_pages_deployment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pages_deployment_id` (other)

### repos_get_pages_health_check

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_check_private_vulnerability_reporting

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_enable_private_vulnerability_reporting

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_disable_private_vulnerability_reporting

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### projects_list_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `per_page` (integer)
- `page` (integer)

### projects_create_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `body` (string)

### repos_get_custom_properties_values

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_create_or_update_custom_properties_values

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `properties` (array)

### pulls_list

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `head` (string)
- `base` (string)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### pulls_create

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `title` (string)
- `head` (string)
- `head_repo` (string)
- `base` (string)
- `body` (string)
- `maintainer_can_modify` (boolean)
- `draft` (boolean)
- `issue` (integer)

### pulls_list_review_comments_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### pulls_get_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### pulls_update_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `body` (string)

### pulls_delete_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)

### reactions_list_for_pull_request_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_pull_request_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `content` (string)

### reactions_delete_for_pull_request_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `comment_id` (integer)
- `reaction_id` (integer)

### pulls_get

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)

### pulls_update

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `title` (string)
- `body` (string)
- `state` (string)
- `base` (string)
- `maintainer_can_modify` (boolean)

### codespaces_create_with_pr_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `location` (string)
- `geo` (string)
- `client_ip` (string)
- `machine` (string)
- `devcontainer_path` (string)
- `multi_repo_permissions_opt_out` (boolean)
- `working_directory` (string)
- `idle_timeout_minutes` (integer)
- `display_name` (string)
- `retention_period_minutes` (integer)

### pulls_list_review_comments

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### pulls_create_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `body` (string)
- `commit_id` (string)
- `path` (string)
- `side` (string)
- `line` (integer)
- `start_line` (integer)
- `start_side` (string)
- `in_reply_to` (integer)
- `subject_type` (string)

### pulls_create_reply_for_review_comment

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `comment_id` (integer)
- `body` (string)

### pulls_list_commits

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `per_page` (integer)
- `page` (integer)

### pulls_list_files

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `per_page` (integer)
- `page` (integer)

### pulls_check_if_merged

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)

### pulls_merge

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `commit_title` (string)
- `commit_message` (string)
- `sha` (string)
- `merge_method` (string)

### pulls_list_requested_reviewers

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)

### pulls_request_reviewers

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `reviewers` (array)
- `team_reviewers` (array)

### pulls_remove_requested_reviewers

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `reviewers` (array)
- `team_reviewers` (array)

### pulls_list_reviews

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `per_page` (integer)
- `page` (integer)

### pulls_create_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `commit_id` (string)
- `body` (string)
- `event` (string)
- `comments` (array)

### pulls_get_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)

### pulls_update_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)
- `body` (string)

### pulls_delete_pending_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)

### pulls_list_comments_for_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)
- `per_page` (integer)
- `page` (integer)

### pulls_dismiss_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)
- `message` (string)
- `event` (string)

### pulls_submit_review

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `review_id` (integer)
- `body` (string)
- `event` (string)

### pulls_update_branch

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pull_number` (integer)
- `expected_head_sha` (string)

### repos_get_readme

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### repos_get_readme_in_directory

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `dir` (string)
- `ref` (string)

### repos_list_releases

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_create_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag_name` (string)
- `target_commitish` (string)
- `name` (string)
- `body` (string)
- `draft` (boolean)
- `prerelease` (boolean)
- `discussion_category_name` (string)
- `generate_release_notes` (boolean)
- `make_latest` (string)

### repos_get_release_asset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `asset_id` (integer)

### repos_update_release_asset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `asset_id` (integer)
- `name` (string)
- `label` (string)
- `state` (string)

### repos_delete_release_asset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `asset_id` (integer)

### repos_generate_release_notes

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag_name` (string)
- `target_commitish` (string)
- `previous_tag_name` (string)
- `configuration_file_path` (string)

### repos_get_latest_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_release_by_tag

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag` (string)

### repos_get_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)

### repos_update_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `tag_name` (string)
- `target_commitish` (string)
- `name` (string)
- `body` (string)
- `draft` (boolean)
- `prerelease` (boolean)
- `make_latest` (string)
- `discussion_category_name` (string)

### repos_delete_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)

### repos_list_release_assets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `per_page` (integer)
- `page` (integer)

### repos_upload_release_asset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `name` (string)
- `label` (string)

### reactions_list_for_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `content` (string)

### reactions_delete_for_release

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `release_id` (integer)
- `reaction_id` (integer)

### repos_get_branch_rules

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `branch` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_repo_rulesets

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)
- `includes_parents` (boolean)
- `targets` (string)

### repos_create_repo_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `name` (string)
- `target` (string)
- `enforcement` (string)
- `bypass_actors` (array)
- `conditions` (object)
- `rules` (array)

### repos_get_repo_rule_suites

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)
- `time_period` (string)
- `actor_name` (string)
- `rule_suite_result` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_repo_rule_suite

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `rule_suite_id` (integer)

### repos_get_repo_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ruleset_id` (integer)
- `includes_parents` (boolean)

### repos_update_repo_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ruleset_id` (integer)
- `name` (string)
- `target` (string)
- `enforcement` (string)
- `bypass_actors` (array)
- `conditions` (object)
- `rules` (array)

### repos_delete_repo_ruleset

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ruleset_id` (integer)

### repos_get_repo_ruleset_history

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ruleset_id` (integer)
- `per_page` (integer)
- `page` (integer)

### repos_get_repo_ruleset_version

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ruleset_id` (integer)
- `version_id` (integer)

### secret_scanning_list_alerts_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `state` (string)
- `secret_type` (string)
- `resolution` (string)
- `sort` (string)
- `direction` (string)
- `page` (integer)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `validity` (string)
- `is_publicly_leaked` (boolean)
- `is_multi_repo` (boolean)

### secret_scanning_get_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)

### secret_scanning_update_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `state` (string)
- `resolution` (string)
- `resolution_comment` (string)

### secret_scanning_list_locations_for_alert

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `alert_number` (integer)
- `page` (integer)
- `per_page` (integer)

### secret_scanning_create_push_protection_bypass

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `reason` (string)
- `placeholder_id` (string)

### secret_scanning_get_scan_history

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### security_advisories_list_repository_advisories

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `direction` (string)
- `sort` (string)
- `before` (string)
- `after` (string)
- `per_page` (integer)
- `state` (string)

### security_advisories_create_repository_advisory

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `summary` (string)
- `description` (string)
- `cve_id` (string)
- `vulnerabilities` (array)
- `cwe_ids` (array)
- `credits` (array)
- `severity` (string)
- `cvss_vector_string` (string)
- `start_private_fork` (boolean)

### security_advisories_create_private_vulnerability_report

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `summary` (string)
- `description` (string)
- `vulnerabilities` (array)
- `cwe_ids` (array)
- `severity` (string)
- `cvss_vector_string` (string)
- `start_private_fork` (boolean)

### security_advisories_get_repository_advisory

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ghsa_id` (string)

### security_advisories_update_repository_advisory

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ghsa_id` (string)
- `summary` (string)
- `description` (string)
- `cve_id` (string)
- `vulnerabilities` (array)
- `cwe_ids` (array)
- `credits` (array)
- `severity` (string)
- `cvss_vector_string` (string)
- `state` (string)
- `collaborating_users` (array)
- `collaborating_teams` (array)

### security_advisories_create_repository_advisory_cve_request

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ghsa_id` (string)

### security_advisories_create_fork

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ghsa_id` (string)

### activity_list_stargazers_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_code_frequency_stats

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_commit_activity_stats

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_contributors_stats

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_participation_stats

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_punch_card_stats

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_create_commit_status

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `sha` (string)
- `state` (string)
- `target_url` (string)
- `description` (string)
- `context` (string)

### activity_list_watchers_for_repo

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### activity_get_repo_subscription

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### activity_set_repo_subscription

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `subscribed` (boolean)
- `ignored` (boolean)

### activity_delete_repo_subscription

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_list_tags

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_list_tag_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_create_tag_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `pattern` (string)

### repos_delete_tag_protection

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `tag_protection_id` (integer)

### repos_download_tarball_archive

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### repos_list_teams

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per_page` (integer)
- `page` (integer)

### repos_get_all_topics

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `page` (integer)
- `per_page` (integer)

### repos_replace_all_topics

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `names` (array)

### repos_get_clones

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per` (string)

### repos_get_top_paths

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_top_referrers

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_get_views

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `per` (string)

### repos_transfer

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `new_owner` (string)
- `new_name` (string)
- `team_ids` (array)

### repos_check_vulnerability_alerts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_enable_vulnerability_alerts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_disable_vulnerability_alerts

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### repos_download_zipball_archive

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)
- `ref` (string)

### repos_create_using_template

**Environment variables**

No environment variables required

**Input schema**

- `template_owner` (string)
- `template_repo` (string)
- `owner` (string)
- `name` (string)
- `description` (string)
- `include_all_branches` (boolean)
- `private` (boolean)

### repos_list_public

**Environment variables**

No environment variables required

**Input schema**

- `since` (integer)

### search_code

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)

### search_commits

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)

### search_issues_and_pull_requests

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)
- `advanced_search` (string)

### search_labels

**Environment variables**

No environment variables required

**Input schema**

- `repository_id` (integer)
- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)

### search_repos

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)

### search_topics

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `per_page` (integer)
- `page` (integer)

### search_users

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `sort` (string)
- `order` (string)
- `per_page` (integer)
- `page` (integer)

### teams_get_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)

### teams_update_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `name` (string)
- `description` (string)
- `privacy` (string)
- `notification_setting` (string)
- `permission` (string)
- `parent_team_id` (integer)

### teams_delete_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)

### teams_list_discussions_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### teams_create_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `title` (string)
- `body` (string)
- `private` (boolean)

### teams_get_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)

### teams_update_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `title` (string)
- `body` (string)

### teams_delete_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)

### teams_list_discussion_comments_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### teams_create_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `body` (string)

### teams_get_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `comment_number` (integer)

### teams_update_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `comment_number` (integer)
- `body` (string)

### teams_delete_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `comment_number` (integer)

### reactions_list_for_team_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `comment_number` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_team_discussion_comment_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `comment_number` (integer)
- `content` (string)

### reactions_list_for_team_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `content` (string)
- `per_page` (integer)
- `page` (integer)

### reactions_create_for_team_discussion_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `discussion_number` (integer)
- `content` (string)

### teams_list_pending_invitations_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `per_page` (integer)
- `page` (integer)

### teams_list_members_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `role` (string)
- `per_page` (integer)
- `page` (integer)

### teams_get_member_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)

### teams_add_member_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)

### teams_remove_member_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)

### teams_get_membership_for_user_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)

### teams_add_or_update_membership_for_user_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)
- `role` (string)

### teams_remove_membership_for_user_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `username` (string)

### teams_list_projects_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `per_page` (integer)
- `page` (integer)

### teams_check_permissions_for_project_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `project_id` (integer)

### teams_add_or_update_project_permissions_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `project_id` (integer)
- `permission` (string)

### teams_remove_project_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `project_id` (integer)

### teams_list_repos_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `per_page` (integer)
- `page` (integer)

### teams_check_permissions_for_repo_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `owner` (string)
- `repo` (string)

### teams_add_or_update_repo_permissions_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `owner` (string)
- `repo` (string)
- `permission` (string)

### teams_remove_repo_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `owner` (string)
- `repo` (string)

### teams_list_child_legacy

**Environment variables**

No environment variables required

**Input schema**

- `team_id` (integer)
- `per_page` (integer)
- `page` (integer)

### users_get_authenticated

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### users_update_authenticated

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `email` (string)
- `blog` (string)
- `twitter_username` (string)
- `company` (string)
- `location` (string)
- `hireable` (boolean)
- `bio` (string)

### users_list_blocked_by_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_check_blocked

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_block

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_unblock

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### codespaces_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)
- `repository_id` (integer)

### codespaces_create_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### codespaces_list_secrets_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### codespaces_get_public_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### codespaces_get_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)

### codespaces_create_or_update_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)
- `encrypted_value` (string)
- `key_id` (string)
- `selected_repository_ids` (array)

### codespaces_delete_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)

### codespaces_list_repositories_for_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)

### codespaces_set_repositories_for_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)
- `selected_repository_ids` (array)

### codespaces_add_repository_for_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)
- `repository_id` (integer)

### codespaces_remove_repository_for_secret_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `secret_name` (string)
- `repository_id` (integer)

### codespaces_get_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### codespaces_update_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)
- `machine` (string)
- `display_name` (string)
- `recent_folders` (array)

### codespaces_delete_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### codespaces_export_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### codespaces_get_export_details_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)
- `export_id` (string)

### codespaces_codespace_machines_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### codespaces_publish_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)
- `name` (string)
- `private` (boolean)

### codespaces_start_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### codespaces_stop_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `codespace_name` (string)

### packages_list_docker_migration_conflicting_packages_for_authenti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### users_set_primary_email_visibility_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `visibility` (string)

### users_list_emails_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_add_email_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### users_delete_email_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### users_list_followers_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_list_followed_by_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_check_person_is_followed_by_authenticated

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_follow

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_unfollow

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_list_gpg_keys_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_create_gpg_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `armored_public_key` (string)

### users_get_gpg_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `gpg_key_id` (integer)

### users_delete_gpg_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `gpg_key_id` (integer)

### apps_list_installations_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_list_installation_repos_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)
- `per_page` (integer)
- `page` (integer)

### apps_add_repo_to_installation_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)
- `repository_id` (integer)

### apps_remove_repo_from_installation_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `installation_id` (integer)
- `repository_id` (integer)

### interactions_get_restrictions_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### interactions_set_restrictions_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `limit` (string)
- `expiry` (string)

### interactions_remove_restrictions_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### issues_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `state` (string)
- `labels` (string)
- `sort` (string)
- `direction` (string)
- `since` (string)
- `per_page` (integer)
- `page` (integer)

### users_list_public_ssh_keys_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_create_public_ssh_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `title` (string)
- `key` (string)

### users_get_public_ssh_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `key_id` (integer)

### users_delete_public_ssh_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `key_id` (integer)

### apps_list_subscriptions_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### apps_list_subscriptions_for_authenticated_user_stubbed

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### orgs_list_memberships_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `state` (string)
- `per_page` (integer)
- `page` (integer)

### orgs_get_membership_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)

### orgs_update_membership_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `org` (string)
- `state` (string)

### migrations_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### migrations_start_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `lock_repositories` (boolean)
- `exclude_metadata` (boolean)
- `exclude_git_data` (boolean)
- `exclude_attachments` (boolean)
- `exclude_releases` (boolean)
- `exclude_owner_projects` (boolean)
- `org_metadata_only` (boolean)
- `exclude` (array)
- `repositories` (array)

### migrations_get_status_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `migration_id` (integer)
- `exclude` (array)

### migrations_get_archive_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `migration_id` (integer)

### migrations_delete_archive_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `migration_id` (integer)

### migrations_unlock_repo_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `migration_id` (integer)
- `repo_name` (string)

### migrations_list_repos_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `migration_id` (integer)
- `per_page` (integer)
- `page` (integer)

### orgs_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### packages_list_packages_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `visibility` (string)
- `page` (integer)
- `per_page` (integer)

### packages_get_package_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)

### packages_delete_package_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)

### packages_restore_package_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `token` (string)

### packages_get_all_package_versions_for_package_owned_by_authentic

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `page` (integer)
- `per_page` (integer)
- `state` (string)

### packages_get_package_version_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `package_version_id` (integer)

### packages_delete_package_version_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `package_version_id` (integer)

### packages_restore_package_version_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `package_type` (string)
- `package_name` (string)
- `package_version_id` (integer)

### projects_create_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `body` (string)

### users_list_public_emails_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### repos_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `visibility` (string)
- `affiliation` (string)
- `type` (string)
- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)
- `since` (string)
- `before` (string)

### repos_create_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `description` (string)
- `homepage` (string)
- `private` (boolean)
- `has_issues` (boolean)
- `has_projects` (boolean)
- `has_wiki` (boolean)
- `has_discussions` (boolean)
- `team_id` (integer)
- `auto_init` (boolean)
- `gitignore_template` (string)
- `license_template` (string)
- `allow_squash_merge` (boolean)
- `allow_merge_commit` (boolean)
- `allow_rebase_merge` (boolean)
- `allow_auto_merge` (boolean)
- `delete_branch_on_merge` (boolean)
- `squash_merge_commit_title` (string)
- `squash_merge_commit_message` (string)
- `merge_commit_title` (string)
- `merge_commit_message` (string)
- `has_downloads` (boolean)
- `is_template` (boolean)

### repos_list_invitations_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### repos_accept_invitation_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `invitation_id` (integer)

### repos_decline_invitation_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `invitation_id` (integer)

### users_list_social_accounts_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_add_social_account_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `account_urls` (array)

### users_delete_social_account_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `account_urls` (array)

### users_list_ssh_signing_keys_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_create_ssh_signing_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `title` (string)
- `key` (string)

### users_get_ssh_signing_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `ssh_signing_key_id` (integer)

### users_delete_ssh_signing_key_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `ssh_signing_key_id` (integer)

### activity_list_repos_starred_by_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `sort` (string)
- `direction` (string)
- `per_page` (integer)
- `page` (integer)

### activity_check_repo_is_starred_by_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### activity_star_repo_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### activity_unstar_repo_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `owner` (string)
- `repo` (string)

### activity_list_watched_repos_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### teams_list_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `page` (integer)

### users_get_by_id

**Environment variables**

No environment variables required

**Input schema**

- `account_id` (integer)

### users_list

**Environment variables**

No environment variables required

**Input schema**

- `since` (integer)
- `per_page` (integer)

### users_get_by_username

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### users_list_attestations

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `subject_digest` (string)
- `per_page` (integer)
- `before` (string)
- `after` (string)
- `predicate_type` (string)

### packages_list_docker_migration_conflicting_packages_for_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### activity_list_events_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `per_page` (integer)
- `page` (integer)

### activity_list_org_events_for_authenticated_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `org` (string)
- `per_page` (integer)
- `page` (integer)

### activity_list_public_events_for_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `per_page` (integer)
- `page` (integer)

### users_list_followers_for_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `per_page` (integer)
- `page` (integer)

### users_list_following_for_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `per_page` (integer)
- `page` (integer)

### users_check_following_for_user

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `target_user` (string)
