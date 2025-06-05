# @open-mcp/api_sporkbos_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_sporkbos_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_sporkbos_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_sporkbos_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_sporkbos_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_sporkbos_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_sporkbos_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_sporkbos_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_sporkbos_com"],
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

### ai_feedback_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ai_context` (string)
- `team_id` (integer)

### auth_google_create

**Environment variables**

- `API_KEY`

**Input schema**

- `access_token` (string)
- `code` (string)
- `id_token` (string)

### auth_google_callback_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### auth_login_create

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `password` (string)

### auth_logout_create

**Environment variables**

- `API_KEY`

**Input schema**

- `refresh` (string)

### auth_microsoft_create

**Environment variables**

- `API_KEY`

**Input schema**

- `access_token` (string)
- `code` (string)
- `id_token` (string)

### auth_microsoft_callback_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### auth_password_change_create

**Environment variables**

- `API_KEY`

**Input schema**

- `old_password` (string)
- `new_password1` (string)
- `new_password2` (string)

### auth_password_reset_create

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)

### auth_password_reset_confirm_create

**Environment variables**

- `API_KEY`

**Input schema**

- `new_password1` (string)
- `new_password2` (string)
- `uid` (string)
- `token` (string)

### auth_password_reset_confirm_create_2

**Environment variables**

- `API_KEY`

**Input schema**

- `token` (string)
- `uidb64` (string)
- `new_password1` (string)
- `new_password2` (string)
- `uid` (string)
- `b_token` (string)
- `accepted_policies` (boolean)
- `required_reset_password` (boolean)

### auth_registration_create

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `password1` (string)
- `password2` (string)
- `accepted_policies` (boolean)

### auth_registration_resend_email_create

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)

### auth_registration_verify_email_create

**Environment variables**

- `API_KEY`

**Input schema**

- `key` (string)

### auth_token_refresh_create

**Environment variables**

No environment variables required

**Input schema**

- `access` (string)
- `refresh` (string)

### auth_token_verify_create

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)

### auth_user_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### auth_user_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team_name` (string)
- `is_siteuser` (boolean)
- `role` (string)
- `team_seats` (integer)
- `is_new_release` (boolean)
- `groups_data` (string)
- `all_teams` (string)
- `last_login` (string)
- `is_superuser` (boolean)
- `is_staff` (boolean)
- `date_joined` (string)
- `ulid` (string)
- `alt_id` (string)
- `employee_code` (string)
- `name` (string)
- `email` (string)
- `email_verified_at` (string)
- `welcome_note` (string)
- `remember_token` (string)
- `alt_email` (string)
- `phone` (string)
- `alt_phone` (string)
- `avatar` (string)
- `_timezone` (string)
- `country` (string)
- `state` (string)
- `manager_note` (string)
- `hire_date` (string)
- `term_date` (string)
- `is_active` (boolean)
- `status` (string)
- `accepted_policies` (boolean)
- `has_payment_method` (boolean)
- `eligible_for_billing` (boolean)
- `is_billed` (boolean)
- `last_billing_month` (integer)
- `last_billing_year` (integer)
- `last_active` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `team` (integer)
- `user_role` (integer)
- `position` (integer)
- `work_buddy` (integer)
- `manager` (integer)
- `last_seen_release` (integer)
- `deleted_by` (integer)
- `created_by` (integer)
- `updated_by` (integer)
- `favorite_scorecard` (integer)
- `groups` (array)
- `user_permissions` (array)

### auth_user_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team_name` (string)
- `is_siteuser` (boolean)
- `role` (string)
- `team_seats` (integer)
- `is_new_release` (boolean)
- `groups_data` (string)
- `all_teams` (string)
- `last_login` (string)
- `is_superuser` (boolean)
- `is_staff` (boolean)
- `date_joined` (string)
- `ulid` (string)
- `alt_id` (string)
- `employee_code` (string)
- `name` (string)
- `email` (string)
- `email_verified_at` (string)
- `welcome_note` (string)
- `remember_token` (string)
- `alt_email` (string)
- `phone` (string)
- `alt_phone` (string)
- `avatar` (string)
- `_timezone` (string)
- `country` (string)
- `state` (string)
- `manager_note` (string)
- `hire_date` (string)
- `term_date` (string)
- `is_active` (boolean)
- `status` (string)
- `accepted_policies` (boolean)
- `has_payment_method` (boolean)
- `eligible_for_billing` (boolean)
- `is_billed` (boolean)
- `last_billing_month` (integer)
- `last_billing_year` (integer)
- `last_active` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `team` (integer)
- `user_role` (integer)
- `position` (integer)
- `work_buddy` (integer)
- `manager` (integer)
- `last_seen_release` (integer)
- `deleted_by` (integer)
- `created_by` (integer)
- `updated_by` (integer)
- `favorite_scorecard` (integer)
- `groups` (array)
- `user_permissions` (array)

### boards_list

**Environment variables**

- `API_KEY`

**Input schema**

- `is_paginated` (boolean)
- `name` (string)
- `page_no` (integer)
- `page_size` (integer)
- `team` (number)

### boards_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `owner_data` (string)
- `is_editable` (boolean)
- `shared_users_data` (array)
- `shared_groups_data` (array)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)

### boards_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### boards_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `owner_data` (string)
- `is_editable` (boolean)
- `shared_users_data` (array)
- `shared_groups_data` (array)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)

### boards_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `owner_data` (string)
- `is_editable` (boolean)
- `shared_users_data` (array)
- `shared_groups_data` (array)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)

### boards_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### boards_contents_list

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `content_name` (string)
- `content_type` (string)
- `due_date_range_end` (string)
- `due_date_range_start` (string)
- `importance` (string)
- `name` (string)
- `order_by` (string)
- `owner` (string)
- `page_no` (integer)
- `page_size` (integer)
- `show_completed` (boolean)
- `sort_by` (string)
- `status` (string)
- `team` (number)
- `tree_view` (boolean)

### categories_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)
- `team` (number)

### categories_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `children` (array)
- `name` (string)
- `active` (boolean)
- `stage` (string)
- `team` (integer)
- `parent` (integer)

### categories_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### categories_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `children` (array)
- `name` (string)
- `active` (boolean)
- `stage` (string)
- `team` (integer)
- `parent` (integer)

### categories_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `children` (array)
- `name` (string)
- `active` (boolean)
- `stage` (string)
- `team` (integer)
- `parent` (integer)

### categories_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### categories_category_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### categories_import_categories_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)

### content_favorites_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_favourite` (boolean)
- `user` (integer)
- `content` (integer)

### content_files_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### content_files_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `file` (string)
- `content` (integer)
- `name` (string)
- `size` (string)

### content_files_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### content_files_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `content` (integer)
- `name` (string)
- `size` (string)

### content_files_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `content` (integer)
- `name` (string)
- `size` (string)

### content_files_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### content_files_download_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### content_updates_list

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (string)
- `is_paginated` (boolean)
- `page_no` (integer)
- `page_size` (integer)

### content_updates_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mentioned_users` (array)
- `note` (string)
- `flag` (string)
- `content` (integer)

### content_updates_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### content_updates_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mentioned_users` (array)
- `note` (string)
- `flag` (string)
- `content` (integer)

### content_updates_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mentioned_users` (array)
- `note` (string)
- `flag` (string)
- `content` (integer)

### content_updates_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### contents_list

**Environment variables**

- `API_KEY`

**Input schema**

- `board` (integer)
- `content_type` (string)
- `due_date_after` (string)
- `due_date_at` (string)
- `due_date_before` (string)
- `due_date_match_all` (boolean)
- `due_date_not_at` (string)
- `importance_contains` (string)
- `importance_ends_with` (string)
- `importance_equals` (string)
- `importance_match_all` (boolean)
- `importance_not_contains` (string)
- `importance_not_equals` (string)
- `importance_starts_with` (string)
- `is_board_content` (boolean)
- `is_matrix` (boolean)
- `is_paginated` (boolean)
- `metric_status` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `owner` (string)
- `page_no` (integer)
- `page_size` (integer)
- `priority_label_contains` (string)
- `priority_label_ends_with` (string)
- `priority_label_equals` (string)
- `priority_label_match_all` (boolean)
- `priority_label_not_contains` (string)
- `priority_label_not_equals` (string)
- `priority_label_starts_with` (string)
- `progress_contains` (string)
- `progress_ends_with` (string)
- `progress_equals` (string)
- `progress_match_all` (boolean)
- `progress_not_contains` (string)
- `progress_not_equals` (string)
- `progress_starts_with` (string)
- `scorecard` (integer)
- `sort_by` (string)
- `stage_contains` (string)
- `stage_ends_with` (string)
- `stage_equals` (string)
- `stage_match_all` (boolean)
- `stage_not_contains` (string)
- `stage_not_equals` (string)
- `stage_starts_with` (string)
- `start_date_after` (string)
- `start_date_at` (string)
- `start_date_before` (string)
- `start_date_match_all` (boolean)
- `start_date_not_at` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `team` (integer)
- `visibility_contains` (string)
- `visibility_ends_with` (string)
- `visibility_equals` (string)
- `visibility_match_all` (boolean)
- `visibility_not_contains` (string)
- `visibility_not_equals` (string)
- `visibility_starts_with` (string)

### contents_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_pages` (array)
- `children` (array)
- `files` (array)
- `is_favourite` (boolean)
- `mark_children_complete` (boolean)
- `mark_children_cancel` (boolean)
- `owner_data` (string)
- `collaborators` (array)
- `parent_data` (string)
- `category_name` (string)
- `latest_result` (string)
- `metric_collaborators_details` (array)
- `name` (string)
- `description` (string)
- `stage` (string)
- `content_type` (string)
- `start_date` (string)
- `due_date` (string)
- `id_number` (string)
- `priority` (integer)
- `urgency` (string)
- `importance` (string)
- `status` (string)
- `progress` (string)
- `pace` (string)
- `skill` (integer)
- `knowledge_level` (string)
- `difficulty_level` (string)
- `hours` (integer)
- `frequency` (string)
- `workload` (integer)
- `views` (integer)
- `guide_type` (string)
- `flag` (string)
- `visibility` (string)
- `ignore_in_performance` (boolean)
- `required_all_learn` (boolean)
- `can_self_learn` (boolean)
- `is_template` (boolean)
- `is_deleted` (boolean)
- `recurring_type` (string)
- `recurring_interval` (integer)
- `version` (string)
- `is_full_day` (boolean)
- `unit_of_measure` (string)
- `calculation` (other)
- `result_accuracy` (other)
- `timeframe` (other)
- `orientation` (other)
- `metric_status` (other)
- `ceiling` (string)
- `high` (string)
- `target` (string)
- `medium` (string)
- `low` (string)
- `floor` (string)
- `team` (integer)
- `owner` (integer)
- `board` (integer)
- `parent` (integer)
- `performance_type` (integer)
- `content_category` (integer)
- `collaborators_users` (array)
- `collaborators_groups` (array)
- `collaborators_positions` (array)
- `shared_users` (array)
- `shared_groups` (array)
- `required_positions_learn` (array)
- `tags` (array)
- `linked_contents` (array)
- `shared_positions` (array)
- `related_contents` (array)
- `metric_shared_users` (array)
- `metric_shared_groups` (array)
- `metric_shared_positions` (array)

### contents_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `team` (integer)

### contents_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_pages` (array)
- `children` (array)
- `files` (array)
- `is_favourite` (boolean)
- `mark_children_complete` (boolean)
- `mark_children_cancel` (boolean)
- `owner_data` (string)
- `collaborators` (array)
- `parent_data` (string)
- `category_name` (string)
- `latest_result` (string)
- `metric_collaborators_details` (array)
- `name` (string)
- `description` (string)
- `stage` (string)
- `content_type` (string)
- `start_date` (string)
- `due_date` (string)
- `id_number` (string)
- `priority` (integer)
- `urgency` (string)
- `importance` (string)
- `status` (string)
- `progress` (string)
- `pace` (string)
- `skill` (integer)
- `knowledge_level` (string)
- `difficulty_level` (string)
- `hours` (integer)
- `frequency` (string)
- `workload` (integer)
- `views` (integer)
- `guide_type` (string)
- `flag` (string)
- `visibility` (string)
- `ignore_in_performance` (boolean)
- `required_all_learn` (boolean)
- `can_self_learn` (boolean)
- `is_template` (boolean)
- `is_deleted` (boolean)
- `recurring_type` (string)
- `recurring_interval` (integer)
- `version` (string)
- `is_full_day` (boolean)
- `unit_of_measure` (string)
- `calculation` (other)
- `result_accuracy` (other)
- `timeframe` (other)
- `orientation` (other)
- `metric_status` (other)
- `ceiling` (string)
- `high` (string)
- `target` (string)
- `medium` (string)
- `low` (string)
- `floor` (string)
- `team` (integer)
- `owner` (integer)
- `board` (integer)
- `parent` (integer)
- `performance_type` (integer)
- `content_category` (integer)
- `collaborators_users` (array)
- `collaborators_groups` (array)
- `collaborators_positions` (array)
- `shared_users` (array)
- `shared_groups` (array)
- `required_positions_learn` (array)
- `tags` (array)
- `linked_contents` (array)
- `shared_positions` (array)
- `related_contents` (array)
- `metric_shared_users` (array)
- `metric_shared_groups` (array)
- `metric_shared_positions` (array)

### contents_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_pages` (array)
- `children` (array)
- `files` (array)
- `is_favourite` (boolean)
- `mark_children_complete` (boolean)
- `mark_children_cancel` (boolean)
- `owner_data` (string)
- `collaborators` (array)
- `parent_data` (string)
- `category_name` (string)
- `latest_result` (string)
- `metric_collaborators_details` (array)
- `is_page_edited` (boolean)
- `required_relearning` (boolean)
- `reschedule_confirmation` (boolean)
- `name` (string)
- `description` (string)
- `stage` (string)
- `content_type` (string)
- `start_date` (string)
- `due_date` (string)
- `id_number` (string)
- `priority` (integer)
- `urgency` (string)
- `importance` (string)
- `status` (string)
- `progress` (string)
- `pace` (string)
- `skill` (integer)
- `knowledge_level` (string)
- `difficulty_level` (string)
- `hours` (integer)
- `frequency` (string)
- `workload` (integer)
- `views` (integer)
- `guide_type` (string)
- `flag` (string)
- `visibility` (string)
- `ignore_in_performance` (boolean)
- `required_all_learn` (boolean)
- `can_self_learn` (boolean)
- `is_template` (boolean)
- `is_deleted` (boolean)
- `recurring_type` (string)
- `recurring_interval` (integer)
- `version` (string)
- `is_full_day` (boolean)
- `unit_of_measure` (string)
- `calculation` (other)
- `result_accuracy` (other)
- `timeframe` (other)
- `orientation` (other)
- `metric_status` (other)
- `ceiling` (string)
- `high` (string)
- `target` (string)
- `medium` (string)
- `low` (string)
- `floor` (string)
- `team` (integer)
- `owner` (integer)
- `board` (integer)
- `parent` (integer)
- `performance_type` (integer)
- `content_category` (integer)
- `collaborators_users` (array)
- `collaborators_groups` (array)
- `collaborators_positions` (array)
- `shared_users` (array)
- `shared_groups` (array)
- `required_positions_learn` (array)
- `tags` (array)
- `linked_contents` (array)
- `shared_positions` (array)
- `related_contents` (array)
- `metric_shared_users` (array)
- `metric_shared_groups` (array)
- `metric_shared_positions` (array)

### contents_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_change_type_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `content_type` (string)
- `guide_type` (string)

### contents_clone_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_delete_results_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_feedbacks_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_history_list

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_mark_children_complete_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_metric_result_chart_list

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `board` (integer)
- `content_type` (string)
- `due_date_after` (string)
- `due_date_at` (string)
- `due_date_before` (string)
- `due_date_match_all` (boolean)
- `due_date_not_at` (string)
- `importance_contains` (string)
- `importance_ends_with` (string)
- `importance_equals` (string)
- `importance_match_all` (boolean)
- `importance_not_contains` (string)
- `importance_not_equals` (string)
- `importance_starts_with` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `owner` (string)
- `priority_label_contains` (string)
- `priority_label_ends_with` (string)
- `priority_label_equals` (string)
- `priority_label_match_all` (boolean)
- `priority_label_not_contains` (string)
- `priority_label_not_equals` (string)
- `priority_label_starts_with` (string)
- `progress_contains` (string)
- `progress_ends_with` (string)
- `progress_equals` (string)
- `progress_match_all` (boolean)
- `progress_not_contains` (string)
- `progress_not_equals` (string)
- `progress_starts_with` (string)
- `sort_by` (string)
- `stage_contains` (string)
- `stage_ends_with` (string)
- `stage_equals` (string)
- `stage_match_all` (boolean)
- `stage_not_contains` (string)
- `stage_not_equals` (string)
- `stage_starts_with` (string)
- `start_date_after` (string)
- `start_date_at` (string)
- `start_date_before` (string)
- `start_date_match_all` (boolean)
- `start_date_not_at` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `team` (integer)
- `visibility_contains` (string)
- `visibility_ends_with` (string)
- `visibility_equals` (string)
- `visibility_match_all` (boolean)
- `visibility_not_contains` (string)
- `visibility_not_equals` (string)
- `visibility_starts_with` (string)

### contents_peer_feedbacks_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_peer_feedbacks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `content_peer_feedbacks` (array)
- `share` (string)
- `is_annonymous` (boolean)

### contents_reorder_pages_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `pages` (array)

### contents_reset_result_create

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### contents_content_recipients_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)

### contents_content_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### contents_import_content_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)
- `user_timezone` (string)

### contents_import_knowledge_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)

### contents_learning_report_details_list

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (string)
- `learning_status` (string)
- `team` (integer)
- `user` (integer)

### contents_links_list

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (string)
- `content_type` (string)
- `link_type` (string)
- `name` (string)
- `team` (integer)

### contents_my_work_list

**Environment variables**

- `API_KEY`

**Input schema**

- `board` (integer)
- `content_type` (string)
- `due_date_after` (string)
- `due_date_at` (string)
- `due_date_before` (string)
- `due_date_match_all` (boolean)
- `due_date_not_at` (string)
- `due_date_range_end` (string)
- `due_date_range_start` (string)
- `importance_contains` (string)
- `importance_ends_with` (string)
- `importance_equals` (string)
- `importance_match_all` (boolean)
- `importance_not_contains` (string)
- `importance_not_equals` (string)
- `importance_starts_with` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `owner` (string)
- `page_no` (integer)
- `page_size` (integer)
- `priority_label_contains` (string)
- `priority_label_ends_with` (string)
- `priority_label_equals` (string)
- `priority_label_match_all` (boolean)
- `priority_label_not_contains` (string)
- `priority_label_not_equals` (string)
- `priority_label_starts_with` (string)
- `progress_contains` (string)
- `progress_ends_with` (string)
- `progress_equals` (string)
- `progress_match_all` (boolean)
- `progress_not_contains` (string)
- `progress_not_equals` (string)
- `progress_starts_with` (string)
- `show_completed` (boolean)
- `sort_by` (string)
- `stage_contains` (string)
- `stage_ends_with` (string)
- `stage_equals` (string)
- `stage_match_all` (boolean)
- `stage_not_contains` (string)
- `stage_not_equals` (string)
- `stage_starts_with` (string)
- `start_date_after` (string)
- `start_date_at` (string)
- `start_date_before` (string)
- `start_date_match_all` (boolean)
- `start_date_not_at` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `team` (integer)
- `visibility_contains` (string)
- `visibility_ends_with` (string)
- `visibility_equals` (string)
- `visibility_match_all` (boolean)
- `visibility_not_contains` (string)
- `visibility_not_equals` (string)
- `visibility_starts_with` (string)

### contents_my_work_content_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `board` (integer)
- `content` (integer)
- `name` (string)
- `show_completed` (boolean)

### contents_parent_content_options_list

**Environment variables**

- `API_KEY`

**Input schema**

- `board` (integer)
- `content_type` (string)
- `due_date_after` (string)
- `due_date_at` (string)
- `due_date_before` (string)
- `due_date_match_all` (boolean)
- `due_date_not_at` (string)
- `importance_contains` (string)
- `importance_ends_with` (string)
- `importance_equals` (string)
- `importance_match_all` (boolean)
- `importance_not_contains` (string)
- `importance_not_equals` (string)
- `importance_starts_with` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `owner` (string)
- `priority_label_contains` (string)
- `priority_label_ends_with` (string)
- `priority_label_equals` (string)
- `priority_label_match_all` (boolean)
- `priority_label_not_contains` (string)
- `priority_label_not_equals` (string)
- `priority_label_starts_with` (string)
- `progress_contains` (string)
- `progress_ends_with` (string)
- `progress_equals` (string)
- `progress_match_all` (boolean)
- `progress_not_contains` (string)
- `progress_not_equals` (string)
- `progress_starts_with` (string)
- `sort_by` (string)
- `stage_contains` (string)
- `stage_ends_with` (string)
- `stage_equals` (string)
- `stage_match_all` (boolean)
- `stage_not_contains` (string)
- `stage_not_equals` (string)
- `stage_starts_with` (string)
- `start_date_after` (string)
- `start_date_at` (string)
- `start_date_before` (string)
- `start_date_match_all` (boolean)
- `start_date_not_at` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `team` (integer)
- `visibility_contains` (string)
- `visibility_ends_with` (string)
- `visibility_equals` (string)
- `visibility_match_all` (boolean)
- `visibility_not_contains` (string)
- `visibility_not_equals` (string)
- `visibility_starts_with` (string)

### contents_parking_lot_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)

### contents_update_required_knowledge_create

**Environment variables**

- `API_KEY`

**Input schema**

- `position` (integer)
- `content_states` (array)

### contents_user_knowledges_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `team` (integer)

### contents_user_learnings_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)

### country_states_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `country` (string)

### demographics_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### demographics_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `family_status` (string)
- `gender` (string)
- `race` (string)
- `religion` (string)
- `sexual_orientation` (string)
- `veteran` (string)
- `birth_date` (string)
- `user` (integer)

### demographics_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### demographics_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `family_status` (string)
- `gender` (string)
- `race` (string)
- `religion` (string)
- `sexual_orientation` (string)
- `veteran` (string)
- `birth_date` (string)
- `user` (integer)

### demographics_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `family_status` (string)
- `gender` (string)
- `race` (string)
- `religion` (string)
- `sexual_orientation` (string)
- `veteran` (string)
- `birth_date` (string)
- `user` (integer)

### demographics_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### events_list

**Environment variables**

- `API_KEY`

**Input schema**

- `end` (string)
- `is_paginated` (boolean)
- `page_no` (integer)
- `page_size` (integer)
- `start` (string)
- `team` (integer)

### events_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `shared_with` (array)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `description` (string)
- `start_at` (string)
- `end_at` (string)
- `is_full_day_event` (boolean)
- `is_team_event` (boolean)
- `is_deleted` (boolean)
- `created_by` (integer)
- `updated_by` (integer)
- `deleted_by` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### events_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### events_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `shared_with` (array)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `description` (string)
- `start_at` (string)
- `end_at` (string)
- `is_full_day_event` (boolean)
- `is_team_event` (boolean)
- `is_deleted` (boolean)
- `created_by` (integer)
- `updated_by` (integer)
- `deleted_by` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### events_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)
- `id` (integer)
- `shared_with` (array)
- `b_ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `description` (string)
- `start_at` (string)
- `end_at` (string)
- `is_full_day_event` (boolean)
- `is_team_event` (boolean)
- `is_deleted` (boolean)
- `created_by` (integer)
- `updated_by` (integer)
- `deleted_by` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### events_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `ulid` (string)

### events_recipients_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)

### feedbacks_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### feedbacks_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_title` (string)
- `content_type` (string)
- `performance_type_name` (string)
- `performance_type_icon` (string)
- `recipient_data` (array)
- `type` (string)
- `share` (string)
- `rating` (string)
- `comment` (string)
- `is_annonymous` (boolean)
- `flag` (string)
- `team` (integer)
- `performance_type` (integer)
- `recipient` (integer)
- `created_by_manager` (integer)
- `recipient_manager` (integer)
- `created_by_position` (integer)
- `recipient_position` (integer)
- `created_by_position_level` (integer)
- `recipient_position_level` (integer)
- `content` (integer)
- `users` (array)

### feedbacks_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### feedbacks_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_title` (string)
- `content_type` (string)
- `performance_type_name` (string)
- `performance_type_icon` (string)
- `recipient_data` (array)
- `type` (string)
- `share` (string)
- `rating` (string)
- `comment` (string)
- `is_annonymous` (boolean)
- `flag` (string)
- `team` (integer)
- `performance_type` (integer)
- `recipient` (integer)
- `created_by_manager` (integer)
- `recipient_manager` (integer)
- `created_by_position` (integer)
- `recipient_position` (integer)
- `created_by_position_level` (integer)
- `recipient_position_level` (integer)
- `content` (integer)
- `users` (array)

### feedbacks_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_title` (string)
- `content_type` (string)
- `performance_type_name` (string)
- `performance_type_icon` (string)
- `recipient_data` (array)
- `type` (string)
- `share` (string)
- `rating` (string)
- `comment` (string)
- `is_annonymous` (boolean)
- `flag` (string)
- `team` (integer)
- `performance_type` (integer)
- `recipient` (integer)
- `created_by_manager` (integer)
- `recipient_manager` (integer)
- `created_by_position` (integer)
- `recipient_position` (integer)
- `created_by_position_level` (integer)
- `recipient_position_level` (integer)
- `content` (integer)
- `users` (array)

### feedbacks_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### feedbacks_report_details_list

**Environment variables**

- `API_KEY`

**Input schema**

- `feedback_role` (string)
- `feedback_type` (string)
- `feedback_types` (string)
- `team` (integer)
- `user` (integer)

### groups_list

**Environment variables**

- `API_KEY`

**Input schema**

- `is_paginated` (boolean)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `owner` (string)
- `page_no` (integer)
- `page_size` (integer)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `team` (number)

### groups_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `positions` (array)
- `users` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `type` (string)
- `status` (string)
- `team` (integer)
- `owner` (integer)

### groups_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### groups_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `positions` (array)
- `users` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `type` (string)
- `status` (string)
- `team` (integer)
- `owner` (integer)

### groups_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `positions` (array)
- `users` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `type` (string)
- `status` (string)
- `team` (integer)
- `owner` (integer)

### groups_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### groups_group_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### groups_import_groups_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)

### information_links_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_location` (string)

### information_links_logs_list

**Environment variables**

- `API_KEY`

**Input schema**

- `information_link` (string)
- `user` (string)

### information_links_logs_create

**Environment variables**

- `API_KEY`

**Input schema**

- `information_link` (string)
- `user` (string)

### information_links_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### information_links_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `page_location` (string)
- `is_visible` (boolean)
- `title` (string)
- `description` (string)
- `video_link` (string)

### information_links_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `page_location` (string)
- `is_visible` (boolean)
- `title` (string)
- `description` (string)
- `video_link` (string)

### learns_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (integer)

### learns_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_skill` (integer)
- `content_difficulty` (string)
- `content_hours` (integer)
- `content_knowledge_level` (string)
- `user_country` (string)
- `user_state` (string)
- `flag` (string)
- `was_required` (boolean)
- `content_version` (string)
- `team` (integer)
- `content` (integer)
- `user` (integer)
- `user_position` (integer)

### learns_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### learns_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_skill` (integer)
- `content_difficulty` (string)
- `content_hours` (integer)
- `content_knowledge_level` (string)
- `user_country` (string)
- `user_state` (string)
- `flag` (string)
- `was_required` (boolean)
- `content_version` (string)
- `team` (integer)
- `content` (integer)
- `user` (integer)
- `user_position` (integer)

### learns_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_skill` (integer)
- `content_difficulty` (string)
- `content_hours` (integer)
- `content_knowledge_level` (string)
- `user_country` (string)
- `user_state` (string)
- `flag` (string)
- `was_required` (boolean)
- `content_version` (string)
- `team` (integer)
- `content` (integer)
- `user` (integer)
- `user_position` (integer)

### learns_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### message_list

**Environment variables**

- `API_KEY`

**Input schema**

- `is_draft` (boolean)
- `page_no` (integer)
- `page_size` (integer)
- `subject` (string)
- `team` (number)

### message_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `shared_with` (array)
- `is_email` (boolean)
- `is_sms` (boolean)
- `is_notification` (boolean)
- `subject` (string)
- `body` (string)
- `is_team_event` (boolean)
- `schedule_option` (string)
- `scheduled_datetime` (string)
- `is_draft` (boolean)
- `is_sent` (boolean)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### message_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### message_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `shared_with` (array)
- `is_email` (boolean)
- `is_sms` (boolean)
- `is_notification` (boolean)
- `subject` (string)
- `body` (string)
- `is_team_event` (boolean)
- `schedule_option` (string)
- `scheduled_datetime` (string)
- `is_draft` (boolean)
- `is_sent` (boolean)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### message_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `shared_with` (array)
- `is_email` (boolean)
- `is_sms` (boolean)
- `is_notification` (boolean)
- `subject` (string)
- `body` (string)
- `is_team_event` (boolean)
- `schedule_option` (string)
- `scheduled_datetime` (string)
- `is_draft` (boolean)
- `is_sent` (boolean)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `shared_positions` (array)

### message_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### message_clone_message_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### metric_result_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (number)

### metric_result_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `result` (string)
- `date` (string)
- `note` (string)
- `team` (integer)
- `content` (integer)
- `created_at` (string)
- `updated_at` (string)

### metric_result_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### metric_result_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `result` (string)
- `date` (string)
- `note` (string)
- `team` (integer)
- `content` (integer)
- `created_at` (string)
- `updated_at` (string)

### metric_result_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `result` (string)
- `date` (string)
- `note` (string)
- `team` (integer)
- `content` (integer)
- `created_at` (string)
- `updated_at` (string)

### metric_result_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### metric_result_import_metric_results_create

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (integer)
- `team` (integer)
- `file` (string)

### metric_result_metric_results_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### notifications_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `recipient` (integer)
- `team` (integer)

### notifications_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `note` (string)
- `flag` (string)
- `read_at` (string)
- `is_read` (boolean)
- `ttl` (string)
- `link` (string)
- `purpose` (string)
- `related_info` (other)
- `team` (integer)
- `recipient` (integer)

### notifications_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### notifications_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `note` (string)
- `flag` (string)
- `read_at` (string)
- `is_read` (boolean)
- `ttl` (string)
- `link` (string)
- `purpose` (string)
- `related_info` (other)
- `team` (integer)
- `recipient` (integer)

### notifications_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `title` (string)
- `note` (string)
- `flag` (string)
- `read_at` (string)
- `is_read` (boolean)
- `ttl` (string)
- `link` (string)
- `purpose` (string)
- `related_info` (other)
- `team` (integer)
- `recipient` (integer)

### notifications_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### notifications_mark_as_read_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### notifications_delete_all_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `recipient` (integer)
- `team` (integer)

### notifications_mark_all_as_read_create

**Environment variables**

- `API_KEY`

**Input schema**

- `recipient` (integer)
- `team` (integer)

### pages_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (integer)

### pages_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `order` (integer)
- `note` (string)
- `due_date` (string)
- `start_time` (string)
- `duration` (integer)
- `icon` (string)
- `color` (string)
- `flag` (string)
- `is_template` (boolean)
- `team` (integer)
- `content` (integer)

### pages_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### pages_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `order` (integer)
- `note` (string)
- `due_date` (string)
- `start_time` (string)
- `duration` (integer)
- `icon` (string)
- `color` (string)
- `flag` (string)
- `is_template` (boolean)
- `team` (integer)
- `content` (integer)

### pages_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `order` (integer)
- `note` (string)
- `due_date` (string)
- `start_time` (string)
- `duration` (integer)
- `icon` (string)
- `color` (string)
- `flag` (string)
- `is_template` (boolean)
- `team` (integer)
- `content` (integer)

### pages_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### performance_snapshots_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### performance_snapshots_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `number` (string)
- `start_date` (string)
- `end_date` (string)
- `performance_start_date` (string)
- `performance_end_date` (string)
- `required_all_users` (boolean)
- `team` (integer)
- `users` (array)

### performance_snapshots_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### performance_snapshots_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `number` (string)
- `start_date` (string)
- `end_date` (string)
- `performance_start_date` (string)
- `performance_end_date` (string)
- `required_all_users` (boolean)
- `team` (integer)
- `users` (array)

### performance_snapshots_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `number` (string)
- `start_date` (string)
- `end_date` (string)
- `performance_start_date` (string)
- `performance_end_date` (string)
- `required_all_users` (boolean)
- `team` (integer)
- `users` (array)

### performance_snapshots_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### performance_types_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)
- `status` (string)
- `team` (integer)

### performance_types_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `feedback_count` (integer)
- `name` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `description` (string)
- `team` (integer)

### performance_types_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### performance_types_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `feedback_count` (integer)
- `name` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `description` (string)
- `team` (integer)

### performance_types_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `feedback_count` (integer)
- `name` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `description` (string)
- `team` (integer)

### performance_types_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### policy_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### policy_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### policy_accept_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `accepted_at` (string)
- `accepted_policies` (boolean)
- `user` (integer)

### position_files_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### position_files_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `file` (string)
- `position` (integer)
- `name` (string)
- `size` (string)

### position_files_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### position_files_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `position` (integer)
- `name` (string)
- `size` (string)

### position_files_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `position` (integer)
- `name` (string)
- `size` (string)

### position_files_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### position_files_download_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### position_levels_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `status` (string)
- `team` (integer)

### position_levels_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `type` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `order` (integer)
- `team` (integer)

### position_levels_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### position_levels_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `type` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `order` (integer)
- `team` (integer)

### position_levels_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `type` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `order` (integer)
- `team` (integer)

### position_levels_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### positions_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `position_level` (integer)
- `status` (string)
- `team` (integer)

### positions_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `required_knowledge` (array)
- `position_parent_data` (string)
- `skills` (string)
- `required_learning` (string)
- `position_group_data` (string)
- `job_description_data` (string)
- `files` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `team` (integer)
- `position_level` (integer)
- `parent` (integer)
- `job_description` (integer)

### positions_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### positions_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `required_knowledge` (array)
- `position_parent_data` (string)
- `skills` (string)
- `required_learning` (string)
- `position_group_data` (string)
- `job_description_data` (string)
- `files` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `team` (integer)
- `position_level` (integer)
- `parent` (integer)
- `job_description` (integer)

### positions_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `required_knowledge` (array)
- `position_parent_data` (string)
- `skills` (string)
- `required_learning` (string)
- `position_group_data` (string)
- `job_description_data` (string)
- `files` (array)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)
- `status` (string)
- `team` (integer)
- `position_level` (integer)
- `parent` (integer)
- `job_description` (integer)

### positions_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### positions_import_positions_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)
- `delete_all_positions` (boolean)

### positions_position_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### releases_list

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### releases_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_editable` (boolean)
- `title` (string)
- `description` (string)
- `video_link` (string)
- `release_date` (string)
- `is_published` (boolean)

### releases_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### releases_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_editable` (boolean)
- `title` (string)
- `description` (string)
- `video_link` (string)
- `release_date` (string)
- `is_published` (boolean)

### releases_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_editable` (boolean)
- `title` (string)
- `description` (string)
- `video_link` (string)
- `release_date` (string)
- `is_published` (boolean)

### schema_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `format` (string)
- `lang` (string)

### scorecard_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)
- `team` (number)

### scorecard_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_favorite` (string)
- `name` (string)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `contents` (array)

### scorecard_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### scorecard_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_favorite` (string)
- `name` (string)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `contents` (array)

### scorecard_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_favorite` (string)
- `name` (string)
- `status` (string)
- `description` (string)
- `share` (string)
- `owner` (integer)
- `team` (integer)
- `shared_users` (array)
- `shared_groups` (array)
- `contents` (array)

### scorecard_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### scorecard_add_metrics_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `content_ids` (array)

### scorecard_remove_metric_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `content` (integer)

### scorecard_reorder_contents_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `category_id` (integer)
- `contents` (array)

### scorecard_default_favorite_create

**Environment variables**

- `API_KEY`

**Input schema**

- `scorecard` (integer)
- `team` (integer)
- `is_favorite` (boolean)

### skill_favorites_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_favorite` (boolean)
- `user` (integer)
- `skill` (integer)

### skill_files_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### skill_files_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `file` (string)
- `skill` (integer)
- `name` (string)
- `size` (string)

### skill_files_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skill_files_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `skill` (integer)
- `name` (string)
- `size` (string)

### skill_files_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `file` (string)
- `skill` (integer)
- `name` (string)
- `size` (string)

### skill_files_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skill_files_download_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skill_training_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (number)

### skill_training_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `users` (array)
- `skills` (array)
- `level` (string)
- `trainer_name` (string)
- `date_of_training` (string)
- `note` (string)
- `state` (string)
- `position` (string)
- `trainer` (integer)

### skill_training_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)

### skill_training_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `users` (array)
- `skills` (array)
- `level` (string)
- `trainer_name` (string)
- `date_of_training` (string)
- `note` (string)
- `state` (string)
- `position` (string)
- `trainer` (integer)

### skill_training_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `users` (array)
- `skills` (array)
- `level` (string)
- `trainer_name` (string)
- `date_of_training` (string)
- `note` (string)
- `state` (string)
- `position` (string)
- `trainer` (integer)

### skill_training_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skill_training_export_skill_training_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `current_skill_only` (boolean)
- `team` (integer)

### skill_training_import_skill_training_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)

### skill_training_skill_trainers_list

**Environment variables**

- `API_KEY`

**Input schema**

- `skill` (string)
- `team` (number)

### skill_training_skill_training_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### skills_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)
- `stage` (string)
- `team` (number)

### skills_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `files` (array)
- `is_favourite` (boolean)
- `linked_positions` (array)
- `name` (string)
- `stage` (string)
- `difficulty` (string)
- `id_number` (string)
- `description` (string)
- `learn_frequency` (string)
- `recurring_interval` (integer)
- `active` (boolean)
- `beginner_hours` (integer)
- `intermediate_hours` (integer)
- `advanced_hours` (integer)
- `master_hours` (integer)
- `team` (integer)
- `category` (integer)

### skills_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)

### skills_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `files` (array)
- `is_favourite` (boolean)
- `linked_positions` (array)
- `name` (string)
- `stage` (string)
- `difficulty` (string)
- `id_number` (string)
- `description` (string)
- `learn_frequency` (string)
- `recurring_interval` (integer)
- `active` (boolean)
- `beginner_hours` (integer)
- `intermediate_hours` (integer)
- `advanced_hours` (integer)
- `master_hours` (integer)
- `team` (integer)
- `category` (integer)

### skills_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `files` (array)
- `is_favourite` (boolean)
- `linked_positions` (array)
- `name` (string)
- `stage` (string)
- `difficulty` (string)
- `id_number` (string)
- `description` (string)
- `learn_frequency` (string)
- `recurring_interval` (integer)
- `active` (boolean)
- `beginner_hours` (integer)
- `intermediate_hours` (integer)
- `advanced_hours` (integer)
- `master_hours` (integer)
- `team` (integer)
- `category` (integer)

### skills_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skills_clone_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### skills_history_list

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `name` (string)
- `stage` (string)
- `team` (number)

### skills_bulk_skill_position_link_create

**Environment variables**

- `API_KEY`

**Input schema**

- `position` (integer)
- `skills` (array)

### skills_import_skills_create

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)
- `file` (string)

### skills_skill_position_link_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `is_linked` (boolean)
- `skill` (integer)
- `position` (integer)

### skills_skill_template_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### skills_skill_training_by_user_skill_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `skill` (integer)
- `user` (integer)

### skills_skill_report_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `group` (string)
- `order_by` (string)
- `sort_by` (string)
- `team` (integer)
- `view_by` (string)

### skills_skill_report_details_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `skill` (string)
- `team` (integer)
- `user` (integer)
- `view_by` (string)

### subscriptions_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (integer)
- `type` (string)

### subscriptions_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `filled_seats` (integer)
- `type` (string)
- `seats` (integer)
- `price_per_seat` (integer)
- `subscribed_at` (string)
- `expired_at` (string)
- `note` (string)
- `team` (integer)

### subscriptions_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### subscriptions_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `filled_seats` (integer)
- `type` (string)
- `seats` (integer)
- `price_per_seat` (integer)
- `subscribed_at` (string)
- `expired_at` (string)
- `note` (string)
- `team` (integer)

### subscriptions_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `filled_seats` (integer)
- `type` (string)
- `seats` (integer)
- `price_per_seat` (integer)
- `subscribed_at` (string)
- `expired_at` (string)
- `note` (string)
- `team` (integer)

### subscriptions_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### supports_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### supports_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `type` (string)
- `title` (string)
- `note` (string)
- `resolution` (string)
- `status` (string)
- `importance` (string)
- `flag` (string)
- `read_at` (string)
- `resolved_at` (string)
- `submission_url` (string)
- `team` (integer)
- `issuer` (integer)
- `support_staff` (integer)
- `resolved_by` (integer)

### supports_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### supports_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `type` (string)
- `title` (string)
- `note` (string)
- `resolution` (string)
- `status` (string)
- `importance` (string)
- `flag` (string)
- `read_at` (string)
- `resolved_at` (string)
- `submission_url` (string)
- `team` (integer)
- `issuer` (integer)
- `support_staff` (integer)
- `resolved_by` (integer)

### supports_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `type` (string)
- `title` (string)
- `note` (string)
- `resolution` (string)
- `status` (string)
- `importance` (string)
- `flag` (string)
- `read_at` (string)
- `resolved_at` (string)
- `submission_url` (string)
- `team` (integer)
- `issuer` (integer)
- `support_staff` (integer)
- `resolved_by` (integer)

### supports_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### tags_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `status` (string)
- `team` (integer)

### tags_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_count` (integer)
- `name` (string)
- `status` (string)
- `color` (string)
- `team` (integer)

### tags_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### tags_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_count` (integer)
- `name` (string)
- `status` (string)
- `color` (string)
- `team` (integer)

### tags_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `content_count` (integer)
- `name` (string)
- `status` (string)
- `color` (string)
- `team` (integer)

### tags_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_fee_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### team_fee_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `engagement_fee` (string)
- `owner_fee` (string)
- `admin_fee` (string)
- `hr_fee` (string)
- `manager_fee` (string)
- `employee_fee` (string)
- `staff_fee` (string)
- `guest_fee` (string)
- `team` (integer)

### team_fee_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_fee_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `engagement_fee` (string)
- `owner_fee` (string)
- `admin_fee` (string)
- `hr_fee` (string)
- `manager_fee` (string)
- `employee_fee` (string)
- `staff_fee` (string)
- `guest_fee` (string)
- `team` (integer)

### team_fee_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `engagement_fee` (string)
- `owner_fee` (string)
- `admin_fee` (string)
- `hr_fee` (string)
- `manager_fee` (string)
- `employee_fee` (string)
- `staff_fee` (string)
- `guest_fee` (string)
- `team` (integer)

### team_fee_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_settings_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### team_settings_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `id_prefix` (string)
- `team` (integer)

### team_settings_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_settings_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `id_prefix` (string)
- `team` (integer)

### team_settings_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `id_prefix` (string)
- `team` (integer)

### team_settings_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_updates_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `team` (integer)

### team_updates_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)
- `note` (string)
- `created_by` (string)
- `created_at` (string)

### team_updates_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### team_updates_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `team` (integer)
- `note` (string)
- `created_by` (string)
- `created_at` (string)

### team_updates_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `team` (integer)
- `note` (string)
- `created_by` (string)
- `created_at` (string)

### team_updates_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)

### teams_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `owner` (object)
- `logo` (string)
- `is_sandbox` (boolean)
- `team_fee` (object)
- `name` (string)
- `description` (string)
- `phone` (string)
- `alt_phone` (string)
- `website` (string)
- `address` (string)
- `city` (string)
- `country` (string)
- `state` (string)
- `zip` (integer)
- `_timezone` (string)
- `industry` (string)
- `is_active` (boolean)
- `status` (string)
- `deactivate_reason` (string)
- `welcome_note` (string)
- `customer_note` (string)
- `deactivation_scheduled_at` (string)
- `company_founded` (string)

### teams_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `owner` (object)
- `logo` (string)
- `is_sandbox` (boolean)
- `team_fee` (object)
- `name` (string)
- `description` (string)
- `phone` (string)
- `alt_phone` (string)
- `website` (string)
- `address` (string)
- `city` (string)
- `country` (string)
- `state` (string)
- `zip` (integer)
- `_timezone` (string)
- `industry` (string)
- `is_active` (boolean)
- `status` (string)
- `deactivate_reason` (string)
- `welcome_note` (string)
- `customer_note` (string)
- `deactivation_scheduled_at` (string)
- `company_founded` (string)

### teams_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `owner` (object)
- `logo` (string)
- `is_sandbox` (boolean)
- `team_fee` (object)
- `name` (string)
- `description` (string)
- `phone` (string)
- `alt_phone` (string)
- `website` (string)
- `address` (string)
- `city` (string)
- `country` (string)
- `state` (string)
- `zip` (integer)
- `_timezone` (string)
- `industry` (string)
- `is_active` (boolean)
- `status` (string)
- `deactivate_reason` (string)
- `welcome_note` (string)
- `customer_note` (string)
- `deactivation_scheduled_at` (string)
- `company_founded` (string)

### teams_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_content_report_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `order_by` (string)
- `sort_by` (string)

### teams_deactivate_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `deactivate_reason` (string)

### teams_feedback_report_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `creators` (string)
- `end` (string)
- `feedback_types` (string)
- `order_by` (string)
- `performance_types` (string)
- `recipients` (string)
- `sort_by` (string)
- `start` (string)
- `users` (string)

### teams_learning_report_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `order_by` (string)
- `sort_by` (string)
- `view_by` (string)

### teams_mention_users_list

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `content` (integer)

### teams_payment_method_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `payment_method_id` (string)

### teams_payments_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_reorder_position_levels_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `position_levels` (array)

### teams_save_cards_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_team_positions_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_team_updates_list

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `name` (string)

### teams_transfer_ownership_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `user` (integer)

### teams_upload_user_file_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### teams_upload_users_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `file` (string)

### teams_users_list

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `hire_date_after` (string)
- `hire_date_at` (string)
- `hire_date_before` (string)
- `hire_date_match_all` (boolean)
- `hire_date_not_at` (string)
- `is_paginated` (boolean)
- `last_active_after` (string)
- `last_active_at` (string)
- `last_active_before` (string)
- `last_active_match_all` (boolean)
- `last_active_not_at` (string)
- `manager` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `page_no` (integer)
- `page_size` (integer)
- `position_contains` (string)
- `position_ends_with` (string)
- `position_equals` (string)
- `position_match_all` (boolean)
- `position_not_contains` (string)
- `position_not_equals` (string)
- `position_starts_with` (string)
- `show_deactivated` (boolean)
- `sort_by` (string)
- `status` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `term_date_after` (string)
- `term_date_at` (string)
- `term_date_before` (string)
- `term_date_match_all` (boolean)
- `term_date_not_at` (string)
- `user_role_contains` (string)
- `user_role_ends_with` (string)
- `user_role_equals` (string)
- `user_role_match_all` (boolean)
- `user_role_not_contains` (string)
- `user_role_not_equals` (string)
- `user_role_starts_with` (string)

### teams_users_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `hire_date_after` (string)
- `hire_date_at` (string)
- `hire_date_before` (string)
- `hire_date_match_all` (boolean)
- `hire_date_not_at` (string)
- `is_paginated` (boolean)
- `last_active_after` (string)
- `last_active_at` (string)
- `last_active_before` (string)
- `last_active_match_all` (boolean)
- `last_active_not_at` (string)
- `manager` (string)
- `name` (string)
- `name_contains` (string)
- `name_ends_with` (string)
- `name_equals` (string)
- `name_match_all` (boolean)
- `name_not_contains` (string)
- `name_not_equals` (string)
- `name_starts_with` (string)
- `order_by` (string)
- `page_no` (integer)
- `page_size` (integer)
- `position_contains` (string)
- `position_ends_with` (string)
- `position_equals` (string)
- `position_match_all` (boolean)
- `position_not_contains` (string)
- `position_not_equals` (string)
- `position_starts_with` (string)
- `show_deactivated` (boolean)
- `sort_by` (string)
- `status` (string)
- `status_contains` (string)
- `status_ends_with` (string)
- `status_equals` (string)
- `status_match_all` (boolean)
- `status_not_contains` (string)
- `status_not_equals` (string)
- `status_starts_with` (string)
- `term_date_after` (string)
- `term_date_at` (string)
- `term_date_before` (string)
- `term_date_match_all` (boolean)
- `term_date_not_at` (string)
- `user_role_contains` (string)
- `user_role_ends_with` (string)
- `user_role_equals` (string)
- `user_role_match_all` (boolean)
- `user_role_not_contains` (string)
- `user_role_not_equals` (string)
- `user_role_starts_with` (string)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `avatar` (string)
- `workload` (integer)
- `user_demographics` (string)
- `alt_id` (string)
- `team` (string)
- `user_role` (string)
- `role` (string)
- `position` (string)
- `b_manager` (string)
- `welcome_note` (string)
- `manager_note` (string)
- `hire_date` (string)
- `term_date` (string)
- `has_payment_method` (boolean)
- `last_login` (string)
- `is_superuser` (boolean)
- `is_staff` (boolean)
- `date_joined` (string)
- `employee_code` (string)
- `b_name` (string)
- `email` (string)
- `email_verified_at` (string)
- `remember_token` (string)
- `alt_email` (string)
- `phone` (string)
- `alt_phone` (string)
- `_timezone` (string)
- `country` (string)
- `state` (string)
- `is_active` (boolean)
- `b_status` (string)
- `accepted_policies` (boolean)
- `eligible_for_billing` (boolean)
- `is_billed` (boolean)
- `last_billing_month` (integer)
- `last_billing_year` (integer)
- `last_active` (string)
- `work_buddy` (integer)
- `last_seen_release` (integer)
- `favorite_scorecard` (integer)
- `groups` (array)
- `user_permissions` (array)

### teams_get_user_teams_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### teams_payment_method_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `payment_method_id` (string)

### teams_set_default_card_create

**Environment variables**

- `API_KEY`

**Input schema**

- `payment_method_id` (string)

### teams_update_card_create

**Environment variables**

- `API_KEY`

**Input schema**

- `payment_method_id` (string)
- `billing_details` (object)

### user_moods_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)
- `user` (integer)

### user_moods_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mood` (integer)
- `comment` (string)
- `user` (integer)

### user_moods_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### user_moods_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mood` (integer)
- `comment` (string)
- `user` (integer)

### user_moods_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `mood` (integer)
- `comment` (string)
- `user` (integer)

### user_moods_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### user_roles_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### user_roles_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)

### user_roles_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### user_roles_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)

### user_roles_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `name` (string)
- `description` (string)
- `icon` (string)
- `colour` (string)

### user_roles_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### user_settings_list

**Environment variables**

- `API_KEY`

**Input schema**

- `page_no` (integer)
- `page_size` (integer)

### user_settings_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `team` (integer)
- `user` (integer)

### user_settings_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### user_settings_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `team` (integer)
- `user` (integer)

### user_settings_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `team` (integer)
- `user` (integer)

### user_settings_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### users_list

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `page_no` (integer)
- `page_size` (integer)

### users_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)

### users_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `avatar` (string)
- `workload` (integer)
- `user_demographics` (string)
- `alt_id` (string)
- `team` (string)
- `user_role` (string)
- `role` (string)
- `position` (string)
- `manager` (string)
- `welcome_note` (string)
- `manager_note` (string)
- `hire_date` (string)
- `term_date` (string)
- `has_payment_method` (boolean)
- `last_login` (string)
- `is_superuser` (boolean)
- `is_staff` (boolean)
- `date_joined` (string)
- `employee_code` (string)
- `name` (string)
- `email` (string)
- `email_verified_at` (string)
- `remember_token` (string)
- `alt_email` (string)
- `phone` (string)
- `alt_phone` (string)
- `_timezone` (string)
- `country` (string)
- `state` (string)
- `is_active` (boolean)
- `status` (string)
- `accepted_policies` (boolean)
- `eligible_for_billing` (boolean)
- `is_billed` (boolean)
- `last_billing_month` (integer)
- `last_billing_year` (integer)
- `last_active` (string)
- `work_buddy` (integer)
- `last_seen_release` (integer)
- `favorite_scorecard` (integer)
- `groups` (array)
- `user_permissions` (array)

### users_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `created_by` (string)
- `updated_by` (string)
- `deleted_by` (string)
- `ulid` (string)
- `created_at` (string)
- `updated_at` (string)
- `deleted_at` (string)
- `user_demographics` (string)
- `avatar` (string)
- `last_login` (string)
- `is_superuser` (boolean)
- `is_staff` (boolean)
- `date_joined` (string)
- `alt_id` (string)
- `employee_code` (string)
- `name` (string)
- `email` (string)
- `email_verified_at` (string)
- `welcome_note` (string)
- `remember_token` (string)
- `alt_email` (string)
- `phone` (string)
- `alt_phone` (string)
- `_timezone` (string)
- `country` (string)
- `state` (string)
- `manager_note` (string)
- `hire_date` (string)
- `term_date` (string)
- `is_active` (boolean)
- `status` (string)
- `accepted_policies` (boolean)
- `has_payment_method` (boolean)
- `eligible_for_billing` (boolean)
- `is_billed` (boolean)
- `last_billing_month` (integer)
- `last_billing_year` (integer)
- `last_active` (string)
- `user_role` (integer)
- `position` (integer)
- `work_buddy` (integer)
- `manager` (integer)
- `last_seen_release` (integer)
- `favorite_scorecard` (integer)
- `groups` (array)
- `user_permissions` (array)

### users_destroy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### users_activate_team_create

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)

### users_calender_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `end` (string)
- `is_meeting` (boolean)
- `start` (string)
- `team` (integer)

### users_dashboard_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)

### users_last_seen_release_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### users_reactivate_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)

### users_update_message_preferences_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `team` (integer)
- `receive_by_email` (boolean)
- `receive_by_sms_text` (boolean)

### users_bulk_update_message_preferences_partial_update

**Environment variables**

- `API_KEY`

**Input schema**

- `user_preferences` (array)

### users_me_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### users_role_permissions_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `team` (integer)

### users_team_message_preferences_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `team` (integer)

### users_user_email_retrieve

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `is_team_form` (boolean)
