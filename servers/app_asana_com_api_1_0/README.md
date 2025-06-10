# @open-mcp/app_asana_com_api_1_0

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "app_asana_com_api_1_0": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/app_asana_com_api_1_0@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/app_asana_com_api_1_0@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add app_asana_com_api_1_0 \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "app_asana_com_api_1_0": {
      "command": "npx",
      "args": ["-y", "@open-mcp/app_asana_com_api_1_0"],
      "env": {"API_KEY":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### parameters_allocations_allocation_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deleteallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_allocations

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getallocations

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `parent` (string)
- `assignee` (string)
- `workspace` (string)
- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createallocation

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_attachments_attachment_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getattachment

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### deleteattachment

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_attachments

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getattachmentsforobject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `parent` (string)
- `opt_fields` (array)

### createattachmentforobject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces_workspace_gid_audit_log_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getauditlogevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_batch

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createbatchrequest

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_custom_field_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getcustomfieldsettingsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolios_portfolio_gid_custom_field_settings

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getcustomfieldsettingsforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_custom_fields

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_custom_fields_custom_field_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatecustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deletecustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_workspaces_workspace_gid_custom_fields

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getcustomfieldsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_custom_fields_custom_field_gid_enum_options

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createenumoptionforcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_custom_fields_custom_field_gid_enum_options_insert

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### insertenumoptionforcustomfield

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_enum_options_enum_option_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### updateenumoption

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_custom_types

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getcustomtypes

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_goal_relationships_goal_relationship_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getgoalrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updategoalrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### getgoalrelationships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_pretty` (boolean)
- `limit` (integer)
- `offset` (string)
- `supported_goal` (string)
- `resource_subtype` (string)
- `opt_fields` (array)

### parameters_goals_goal_gid_addsupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addsupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_goals_goal_gid_removesupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removesupportingrelationship

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_goals_goal_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getgoal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updategoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deletegoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_goals

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getgoals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `portfolio` (string)
- `project` (string)
- `task` (string)
- `is_workspace_level` (boolean)
- `team` (string)
- `workspace` (string)
- `time_periods` (array)
- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### creategoal

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_goals_goal_gid_setmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### creategoalmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_goals_goal_gid_setmetriccurrentvalue

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### updategoalmetric

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_goals_goal_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_goals_goal_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_goals_goal_gid_parentgoals

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getparentgoalsforgoal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_jobs_job_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getjob

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getmemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `parent` (string)
- `member` (string)
- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (string)

### parameters_memberships_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### updatemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### deletemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_organization_exports

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createorganizationexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_organization_exports_organization_export_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getorganizationexport

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolio_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getportfoliomemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolio_memberships_portfolio_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getportfoliomembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolios_portfolio_gid_portfolio_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getportfoliomembershipsforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolios

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getportfolios

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `workspace` (string)
- `owner` (string)
- `opt_fields` (array)

### createportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_portfolios_portfolio_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getportfolio

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deleteportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_portfolios_portfolio_gid_items

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getitemsforportfolio

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_portfolios_portfolio_gid_additem

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### additemforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_portfolios_portfolio_gid_removeitem

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removeitemforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_portfolios_portfolio_gid_addcustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addcustomfieldsettingforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_portfolios_portfolio_gid_removecustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removecustomfieldsettingforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_portfolios_portfolio_gid_addmembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addmembersforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_portfolios_portfolio_gid_removemembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removemembersforportfolio

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_project_briefs_project_brief_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deleteprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_projects_project_gid_project_briefs

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createprojectbrief

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_project_memberships_project_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectmembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_projects_project_gid_project_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectmembershipsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_project_statuses_project_status_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### deleteprojectstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_projects_project_gid_project_statuses

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectstatusesforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `project_gid` (string)
- `opt_pretty` (boolean)
- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createprojectstatusforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_project_templates_project_template_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojecttemplate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### deleteprojecttemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_project_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojecttemplates

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `workspace` (string)
- `team` (string)
- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### parameters_teams_team_gid_project_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojecttemplatesforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### parameters_project_templates_project_template_gid_instantiatepro

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### instantiateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojects

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `workspace` (string)
- `team` (string)
- `archived` (boolean)
- `opt_fields` (array)

### createproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_projects_project_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deleteproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_projects_project_gid_duplicate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### duplicateproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_tasks_task_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_teams_team_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectsforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `archived` (boolean)
- `opt_fields` (array)

### createprojectforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_workspaces_workspace_gid_projects

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getprojectsforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `archived` (boolean)
- `opt_fields` (array)

### createprojectforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_projects_project_gid_addcustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addcustomfieldsettingforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_removecustomfieldsetting

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removecustomfieldsettingforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_projects_project_gid_task_counts

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettaskcountsforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_projects_project_gid_addmembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addmembersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_removemembers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removemembersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addfollowersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removefollowersforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_saveastemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### projectsaveastemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_rule_triggers_rule_trigger_gid_run

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### triggerrule

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_sections_section_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getsection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatesection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### deletesection

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_projects_project_gid_sections

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getsectionsforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createsectionforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_sections_section_gid_addtask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addtaskforsection

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_projects_project_gid_sections_insert

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### insertsectionforproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_status_updates_status_update_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getstatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### deletestatus

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_status_updates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getstatusesforobject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `parent` (string)
- `created_since` (string)
- `opt_fields` (array)

### createstatusforobject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_stories_story_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getstory

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatestory

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### deletestory

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_tasks_task_gid_stories

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getstoriesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createstoryfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `workspace` (string)
- `opt_fields` (array)

### createtag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_tags_tag_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deletetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_tasks_task_gid_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettagsfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces_workspace_gid_tags

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettagsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createtagforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_task_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasktemplates

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `project` (string)
- `opt_fields` (array)

### parameters_task_templates_task_template_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasktemplate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### deletetasktemplate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_task_templates_task_template_gid_instantiatetask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### instantiatetask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `assignee` (string)
- `project` (string)
- `section` (string)
- `workspace` (string)
- `completed_since` (string)
- `modified_since` (string)
- `opt_fields` (array)

### createtask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_tasks_task_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### deletetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_tasks_task_gid_duplicate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### duplicatetask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_projects_project_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasksforproject

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_sections_section_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasksforsection

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_tags_tag_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasksfortag

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_user_task_lists_user_task_list_gid_tasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettasksforusertasklist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_tasks_task_gid_subtasks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getsubtasksfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createsubtaskfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_tasks_task_gid_setparent

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### setparentfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_tasks_task_gid_dependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getdependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_tasks_task_gid_adddependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### adddependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_removedependencies

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removedependenciesfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_dependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getdependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_tasks_task_gid_adddependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### adddependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_removedependents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removedependentsfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_addproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addprojectfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_removeproject

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removeprojectfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_addtag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addtagfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_removetag

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removetagfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_tasks_task_gid_addfollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addfollowersfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_tasks_task_gid_removefollowers

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removefollowerfortask

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_workspaces_workspace_gid_tasks_custom_id_custom_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettaskforcustomid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_workspaces_workspace_gid_tasks_search

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### searchtasksforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_team_memberships_team_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteammembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteammemberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `team` (string)
- `user` (string)
- `workspace` (string)
- `opt_fields` (array)

### parameters_teams_team_gid_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteammembershipsforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_team_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteammembershipsforuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `workspace` (string)
- `opt_fields` (array)

### parameters_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### createteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_teams_team_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (string)

### parameters_workspaces_workspace_gid_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteamsforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_teams

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getteamsforuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_teams_team_gid_adduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### adduserforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_teams_team_gid_removeuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removeuserforteam

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_time_periods_time_period_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettimeperiod

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_time_periods

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettimeperiods

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `start_on` (string)
- `end_on` (string)
- `workspace` (string)
- `opt_fields` (array)

### parameters_tasks_task_gid_time_tracking_entries

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettimetrackingentriesfortask

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `opt_fields` (array)

### createtimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_time_tracking_entries_time_tracking_entry_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### gettimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatetimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### deletetimetrackingentry

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_workspaces_workspace_gid_typeahead

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### typeaheadforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_user_task_lists_user_task_list_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusertasklist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_user_task_list

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusertasklistforuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_favorites

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getfavoritesforuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_teams_team_gid_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusersforteam

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces_workspace_gid_users

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusersforworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_webhooks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getwebhooks

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `workspace` (string)
- `resource` (string)
- `opt_fields` (array)

### createwebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_webhooks_webhook_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getwebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updatewebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### deletewebhook

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### parameters_workspace_memberships_workspace_membership_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspacemembership

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_users_user_gid_workspace_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspacemembershipsforuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces_workspace_gid_workspace_memberships

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspacemembershipsforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspaces

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### parameters_workspaces_workspace_gid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspace

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)

### updateworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_workspaces_workspace_gid_adduser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### adduserforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `opt_fields` (array)
- `data` (object)

### parameters_workspaces_workspace_gid_removeuser

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### removeuserforworkspace

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

- `data` (object)

### parameters_workspaces_workspace_gid_events

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getworkspaceevents

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

No input parameters
