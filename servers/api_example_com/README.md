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

### get_user_agent_runs_me_agent_runs_get

### get_user_agent_run_me_agent_runs_run_id_get

### get_api_keys_me_api_keys_get

### post_create_api_key_me_api_keys_post

### get_default_api_key_me_api_keys_default_get

### get_api_key_me_api_keys_api_key_id_get

### delete_api_key_me_api_keys_api_key_id_delete

### billing_information_me_billing_get

### get_tools_me_build_your_own_tool_get

### create_tool_me_build_your_own_tool_post

### get_tool_me_build_your_own_tool_byot_tool_id_get

### update_tool_me_build_your_own_tool_byot_tool_id_put

### submit_for_review_me_build_your_own_tool_byot_tool_id_submit_for

### run_tool_me_build_your_own_tool_run_post

### get_bundles_me_bundles_get

### create_bundle_me_bundles_post

### get_bundle_me_bundles_bundle_id_get

### update_bundle_me_bundles_bundle_id_put

### delete_bundle_me_bundles_bundle_id_delete

### get_bundle_tools_me_bundles_bundle_id_tools_get

### add_tool_to_bundle_request_me_bundles_bundle_id_tools_post

### remove_tool_from_bundle_request_me_bundles_bundle_id_tools_tool_

### get_all_chats_me_chats_get

### create_chat_me_chats_post

### get_chat_me_chats_chat_id_get

### edit_chat_me_chats_chat_id_put

### del_chat_me_chats_chat_id_delete

### get_chat_og_metadata_me_chats_chat_id_og_get

### clone_chat_me_chats_chat_id_clone_post

### get_user_credits_me_credits_get

### get_user_logs_me_executions_get

### get_user_log_by_id_me_executions_log_id_get

### stripe_webhook_me_stripe_webhook_post

### get_schedule_list_me_schedules_get

### create_schedule_me_schedules_post

### get_onboarding_schedule_me_schedules_onboarding_get

### text_to_cron_me_schedules_text_to_cron_get

### get_schedule_by_id_me_schedules_schedule_id_get

### edit_schedule_me_schedules_schedule_id_put

### del_schedule_me_schedules_schedule_id_delete

### get_tool_votes_me_tool_id_votes_get

### get_tool_vote_me_tool_id_upvote_get

### create_tool_vote_me_tool_id_upvote_post

### del_tool_vote_me_tool_id_upvote_delete

### get_available_tools_me_tools_get

### get_available_tool_me_tools_tool_id_get

### get_user_me_get

### get_installed_tools_me_user_tools_get

### install_tool_me_user_tools_post

### get_installed_tool_me_user_tools_tool_id_get

### delete_installed_tool_me_user_tools_tool_id_delete

### fetch_redemption_count_me_vip_get

### redeem_code_me_vip_post

### get_all_agent_runs_v1_agent_runs_get

### create_agent_run_v1_agent_runs_post

### get_agent_run_v1_agent_runs_run_id_get

### put_agent_run_v1_agent_runs_run_id_put

### get_tools_endpoint_v1_get_tools_post

### get_users_endpoint_v1_users_get

### run_tools_endpoint_v1_run_tools_post

### get_schedule_list_v1_schedules_get

### create_schedule_v1_schedules_post

### text_to_cron_v1_schedules_text_to_cron_get

### get_schedule_by_id_v1_schedules_schedule_id_get

### edit_schedule_v1_schedules_schedule_id_put

### del_schedule_v1_schedules_schedule_id_delete

### create_agent_run_from_schedule_backoffice_agent_runs_from_schedu

### post_create_api_key_backoffice_api_keys_post

### post_create_bundle_backoffice_users_user_id_bundles_post

### get_bundles_backoffice_users_user_id_bundles_get

### post_create_bundle_backoffice_users_user_id_bundles_bundle_id_pu

### get_bundles_backoffice_users_user_id_bundles_bundle_id_delete

### get_user_credits_request_backoffice_users_user_id_credits_get

### create_user_credits_request_backoffice_users_user_id_credits_pos

### update_user_credits_request_backoffice_users_user_id_credits_put

### post_reset_credit_allowance_backoffice_users_reset_credit_allowa

### proxy_to_customerio_backoffice_events_post

### create_run_backoffice_onboarding_runs_post

### get_active_schedules_backoffice_schedules_get

### fetch_tools_route_backoffice_tools_get

### create_tool_route_backoffice_tools_post

### fetch_tool_route_backoffice_tools_tool_id_get

### delete_tool_route_backoffice_tools_tool_id_delete

### update_tool_route_backoffice_tools_tool_id_put

### get_installed_tools_backoffice_users_user_id_tools_get

### post_install_tool_backoffice_users_user_id_tools_post

### get_installed_tool_backoffice_users_user_id_tools_tool_id_get

### get_user_route_backoffice_users_user_id_get

### get_user_by_email_route_backoffice_users_by_email_email_get

### create_user_route_backoffice_users_post

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
