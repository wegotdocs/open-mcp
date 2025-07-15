# @open-mcp/float-test-davi

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "float-test-davi": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/float-test-davi@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/float-test-davi@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add float-test-davi \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add float-test-davi \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add float-test-davi \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "float-test-davi": {
      "command": "npx",
      "args": ["-y", "@open-mcp/float-test-davi"],
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

### getdepartments

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `per-page` (integer)

### adddepartment

**Environment variables**

No environment variables required

**Input schema**

- `department_id` (integer)
- `parent_id` (integer)
- `name` (string)

### getdepartment

**Environment variables**

No environment variables required

**Input schema**

- `department_id` (integer)

### deletedepartment

**Environment variables**

No environment variables required

**Input schema**

- `department_id` (integer)

### updatedepartment

**Environment variables**

No environment variables required

**Input schema**

- `department_id` (integer)

### getreportpeople

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `people_id` (integer)

### getreportprojects

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `project_id` (integer)

### getprojects

**Environment variables**

No environment variables required

**Input schema**

- `project_code` (string)
- `client_id` (integer)
- `active` (integer)
- `nonBillable` (integer)
- `status` (integer)
- `tag_name` (string)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)
- `expand` (string)

### addproject

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `name` (string)
- `project_code` (string)
- `client_id` (integer)
- `color` (string)
- `notes` (string)
- `tags` (array)
- `budget_type` (integer)
- `budget_total` (number)
- `budget_per_phase` (integer)
- `budget_priority` (integer)
- `default_hourly_rate` (string)
- `non_billable` (integer)
- `status` (integer)
- `tentative` (integer)
- `locked_task_list` (integer)
- `active` (integer)
- `project_manager` (integer)
- `all_pms_schedule` (integer)
- `created` (string)
- `modified` (string)
- `start_date` (string)
- `end_date` (string)

### getproject

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `expand` (string)

### deleteproject

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)

### updateproject

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `expand` (string)

### getphases

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `active` (integer)
- `nonBillable` (integer)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)
- `expand` (string)

### addphase

**Environment variables**

No environment variables required

**Input schema**

- `phase_id` (integer)
- `project_id` (integer)
- `name` (string)
- `color` (string)
- `notes` (string)
- `start_date` (string)
- `end_date` (string)
- `budget_total` (number)
- `default_hourly_rate` (string)
- `non_billable` (integer)
- `status` (integer)
- `tentative` (integer)
- `active` (integer)
- `created` (string)
- `modified` (string)

### getphase

**Environment variables**

No environment variables required

**Input schema**

- `phase_id` (integer)
- `expand` (string)

### deletephase

**Environment variables**

No environment variables required

**Input schema**

- `phase_id` (integer)

### updatephase

**Environment variables**

No environment variables required

**Input schema**

- `phase_id` (integer)
- `expand` (string)

### getprojecttasks

**Environment variables**

No environment variables required

**Input schema**

- `project_id` (integer)
- `billable` (integer)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `fields` (array)

### addprojecttask

**Environment variables**

No environment variables required

**Input schema**

- `task_meta_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `task_name` (string)
- `billable` (integer)
- `budget` (number)
- `count_tasks` (integer)
- `count_logged_time` (integer)
- `created` (string)
- `modified` (string)

### getprojecttask

**Environment variables**

No environment variables required

**Input schema**

- `project_task_id` (integer)

### deleteprojecttask

**Environment variables**

No environment variables required

**Input schema**

- `project_task_id` (integer)

### updateprojecttask

**Environment variables**

No environment variables required

**Input schema**

- `project_task_id` (integer)
- `task_meta_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `task_name` (string)
- `billable` (integer)
- `budget` (number)
- `count_tasks` (integer)
- `count_logged_time` (integer)
- `created` (string)
- `modified` (string)

### mergeprojecttasks

**Environment variables**

No environment variables required

**Input schema**

- `task_meta_ids` (array)
- `task_name` (string)
- `billable` (integer)

### getpeople

**Environment variables**

No environment variables required

**Input schema**

- `active` (integer)
- `department_id` (integer)
- `email` (string)
- `people_type_id` (integer)
- `employee_type_id` (integer)
- `tag_name` (string)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)
- `expand` (string)

### addperson

**Environment variables**

No environment variables required

**Input schema**

- `expand` (string)
- `people_id` (integer)
- `name` (string)
- `email` (string)
- `job_title` (string)
- `role_id` (integer)
- `department` (object)
- `notes` (string)
- `avatar_file` (string)
- `auto_email` (integer)
- `employee_type` (integer)
- `work_days_hours` (array)
- `active` (integer)
- `people_type_id` (integer)
- `tags` (array)
- `start_date` (string)
- `end_date` (string)
- `default_hourly_rate` (string)
- `region_id` (integer)
- `created` (string)
- `modified` (string)
- `contracts` (array)
- `account` (object)
- `managers` (array)

### getperson

**Environment variables**

No environment variables required

**Input schema**

- `people_id` (integer)
- `expand` (string)

### deleteperson

**Environment variables**

No environment variables required

**Input schema**

- `people_id` (integer)

### updateperson

**Environment variables**

No environment variables required

**Input schema**

- `people_id` (integer)
- `expand` (string)

### getroles

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `per-page` (integer)
- `expand` (string)

### addrole

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `name` (string)
- `default_hourly_rate` (string)
- `created` (string)
- `created_by` (integer)
- `modified` (string)
- `modified_by` (integer)
- `cost_rate_history` (array)
- `people_ids` (array)
- `people_count` (integer)

### getrole

**Environment variables**

No environment variables required

**Input schema**

- `role_id` (integer)
- `expand` (string)

### deleterole

**Environment variables**

No environment variables required

**Input schema**

- `role_id` (integer)

### updaterole

**Environment variables**

No environment variables required

**Input schema**

- `role_id` (integer)
- `expand` (string)

### gettasks

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `task_meta_id` (integer)
- `people_id` (integer)
- `start_date` (string)
- `end_date` (string)
- `billable` (integer)
- `status` (integer)
- `repeat_state` (integer)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)
- `expand` (string)

### addtask

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (integer)
- `root_task_id` (integer)
- `parent_task_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `start_date` (string)
- `end_date` (string)
- `start_time` (string)
- `hours` (number)
- `people_id` (integer)
- `people_ids` (array)
- `status` (integer)
- `billable` (integer)
- `name` (string)
- `task_meta_id` (integer)
- `notes` (string)
- `repeat_state` (integer)
- `repeat_end_date` (string)
- `created_by` (integer)
- `created` (string)
- `modified_by` (integer)
- `modified` (string)

### gettask

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (integer)

### deletetask

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (integer)

### updatetask

**Environment variables**

No environment variables required

**Input schema**

- `task_id` (integer)

### getclients

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `per-page` (integer)

### addclient

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)
- `name` (string)

### getclient

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)

### deleteclient

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)

### updateclient

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)

### getaccounts

**Environment variables**

No environment variables required

**Input schema**

- `expand` (string)
- `page` (integer)
- `per-page` (integer)

### getaccount

**Environment variables**

No environment variables required

**Input schema**

- `account_id` (integer)
- `expand` (string)

### getpublicholidays

**Environment variables**

No environment variables required

**Input schema**

- `year` (string)
- `region` (integer)
- `start_date` (string)
- `end_date` (string)
- `page` (integer)
- `per-page` (integer)

### getpublicholiday

**Environment variables**

No environment variables required

**Input schema**

- `public_holiday_id` (integer)
- `year` (string)
- `start_date` (string)
- `end_date` (string)

### getholidays

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `per-page` (integer)

### addholiday

**Environment variables**

No environment variables required

**Input schema**

- `holiday_id` (integer)
- `name` (string)
- `date` (string)
- `end_date` (string)

### getholiday

**Environment variables**

No environment variables required

**Input schema**

- `holiday_id` (integer)

### deleteholiday

**Environment variables**

No environment variables required

**Input schema**

- `holiday_id` (integer)

### updateholiday

**Environment variables**

No environment variables required

**Input schema**

- `holiday_id` (integer)

### addloggedtime

**Environment variables**

No environment variables required

**Input schema**

- `logged_time_id` (string)
- `people_id` (integer)
- `date` (string)
- `reference_date` (string)
- `hours` (number)
- `billable` (integer)
- `notes` (string)
- `project_id` (integer)
- `phase_id` (integer)
- `task_id` (integer)
- `task_name` (string)
- `task_meta_id` (integer)
- `locked` (integer)
- `locked_date` (string)
- `created` (string)
- `created_by` (integer)
- `modified` (string)
- `modified_by` (integer)

### getloggedtimes

**Environment variables**

No environment variables required

**Input schema**

- `people_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `task_meta_id` (integer)
- `start_date` (string)
- `end_date` (string)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)

### getloggedtime

**Environment variables**

No environment variables required

**Input schema**

- `logged_time_id` (string)

### updateloggedtime

**Environment variables**

No environment variables required

**Input schema**

- `logged_time_id` (string)
- `b_logged_time_id` (string)
- `people_id` (integer)
- `date` (string)
- `reference_date` (string)
- `hours` (number)
- `billable` (integer)
- `notes` (string)
- `project_id` (integer)
- `phase_id` (integer)
- `task_id` (integer)
- `task_name` (string)
- `task_meta_id` (integer)
- `locked` (integer)
- `locked_date` (string)
- `created` (string)
- `created_by` (integer)
- `modified` (string)
- `modified_by` (integer)

### deleteloggedtime

**Environment variables**

No environment variables required

**Input schema**

- `logged_time_id` (string)

### getmilestones

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (integer)
- `project_id` (integer)
- `phase_id` (integer)
- `page` (integer)
- `per-page` (integer)

### addmilestone

**Environment variables**

No environment variables required

**Input schema**

- `milestone_id` (integer)
- `name` (string)
- `project_id` (integer)
- `phase_id` (integer)
- `date` (string)
- `end_date` (string)
- `created` (string)
- `modified` (string)

### getmilestone

**Environment variables**

No environment variables required

**Input schema**

- `milestone_id` (integer)

### deletemilestone

**Environment variables**

No environment variables required

**Input schema**

- `milestone_id` (integer)

### updatemilestone

**Environment variables**

No environment variables required

**Input schema**

- `milestone_id` (integer)

### gettimeoffs

**Environment variables**

No environment variables required

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `full_day` (integer)
- `status` (integer)
- `timeoff_type_id` (integer)
- `page` (integer)
- `per-page` (integer)
- `sort` (string)
- `modified_since` (string)
- `fields` (array)

### addtimeoff

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_id` (integer)
- `timeoff_type_id` (integer)
- `start_date` (string)
- `end_date` (string)
- `start_time` (string)
- `hours` (number)
- `timeoff_notes` (string)
- `repeat_state` (integer)
- `status` (integer)
- `repeat_end` (string)
- `full_day` (integer)
- `people_ids` (array)
- `created` (string)
- `modified` (string)
- `modified_by` (integer)
- `created_by` (integer)

### gettimeoff

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_id` (integer)

### deletetimeoff

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_id` (integer)

### updatetimeoff

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_id` (integer)

### gettimeofftypes

**Environment variables**

No environment variables required

**Input schema**

- `active` (integer)
- `page` (integer)
- `per-page` (integer)

### addtimeofftype

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_type_id` (integer)
- `timeoff_type_name` (string)
- `color` (string)
- `active` (integer)
- `created_by` (integer)

### gettimeofftype

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_type_id` (integer)

### updatetimeofftype

**Environment variables**

No environment variables required

**Input schema**

- `timeoff_type_id` (integer)

### getstatuses

**Environment variables**

No environment variables required

**Input schema**

- `people_id` (integer)
- `start_date` (string)
- `end_date` (string)
- `status_type_id` (integer)
- `page` (integer)
- `per-page` (integer)
- `fields` (array)

### addstatus

**Environment variables**

No environment variables required

**Input schema**

- `status_id` (integer)
- `status_type_id` (integer)
- `people_id` (integer)
- `status_name` (string)
- `start_date` (string)
- `end_date` (string)
- `repeat_state` (integer)
- `repeat_end_date` (string)
- `created` (string)
- `modified` (string)
- `created_by` (integer)
- `modified_by` (integer)

### getstatus

**Environment variables**

No environment variables required

**Input schema**

- `status_id` (integer)

### deletestatus

**Environment variables**

No environment variables required

**Input schema**

- `status_id` (integer)

### updatestatus

**Environment variables**

No environment variables required

**Input schema**

- `status_id` (integer)
