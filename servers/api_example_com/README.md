# @open-mcp/api_example_com

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
THEHIVE_SESSION='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --THEHIVE_SESSION=$THEHIVE_SESSION \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --THEHIVE_SESSION=$THEHIVE_SESSION \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --THEHIVE_SESSION=$THEHIVE_SESSION \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"...","THEHIVE_SESSION":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

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

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### query_api

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (array)
- `excludeFields` (array)

### export_api_unstable_route

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `query` (string)
- `options` (string)

### get_export_fields_unstable_route

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `description` (string)
- `severity` (integer)
- `startDate` (integer)
- `endDate` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `access` (other)
- `customFields` (other)
- `caseTemplate` (string)
- `tasks` (array)
- `pages` (array)
- `sharingParameters` (array)
- `taskRule` (string)
- `observableRule` (string)

### get_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)

### delete_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)

### update_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `startDate` (integer)
- `endDate` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `impactStatus` (string)
- `customFields` (other)
- `taskRule` (string)
- `observableRule` (string)
- `addTags` (array)
- `removeTags` (array)

### bulk_update_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `startDate` (integer)
- `endDate` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `impactStatus` (string)
- `customFields` (other)
- `taskRule` (string)
- `observableRule` (string)
- `addTags` (array)
- `removeTags` (array)

### merge_cases

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (string)

### unlink_alert_from_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `alertId` (string)

### merge_similar_observables_of_this_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### get_linked_cases

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### delete_a_custom_field

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cfId` (string)

### import_case_from_file

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### export_case_as_archive

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `password` (string)

### apply_casetemplate_on_existing_cases

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)
- `caseTemplate` (string)
- `updateTitlePrefix` (boolean)
- `updateDescription` (boolean)
- `updateTags` (boolean)
- `updateSeverity` (boolean)
- `updateFlag` (boolean)
- `updateTlp` (boolean)
- `updatePap` (boolean)
- `updateCustomFields` (boolean)
- `importTasks` (array)
- `importPages` (array)

### change_case_owning_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `organisation` (string)
- `keepProfile` (string)
- `taskRule` (string)
- `observableRule` (string)

### manage_case_access

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `access` (other)

### get_similar_observables_between_a_case_and_another_case_or_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `alertOrCaseId` (string)

### add_link_with_another_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `type` (string)
- `b_caseId` (string)

### add_link_with_an_external_url

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `type` (string)
- `url` (string)

### delete_link_with_an_another_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `type` (string)
- `b_caseId` (string)

### delete_link_with_an_external_url

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `type` (string)
- `url` (string)

### get_all_link_types

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `type` (string)
- `source` (string)
- `sourceRef` (string)
- `externalLink` (string)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `date` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `customFields` (other)
- `summary` (string)
- `status` (string)
- `assignee` (string)
- `caseTemplate` (string)
- `observables` (array)
- `procedures` (array)

### get_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)

### delete_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)

### update_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `type` (string)
- `source` (string)
- `sourceRef` (string)
- `externalLink` (string)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `date` (integer)
- `lastSyncDate` (integer)
- `tags` (array)
- `tlp` (integer)
- `pap` (integer)
- `follow` (boolean)
- `customFields` (other)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `addTags` (array)
- `removeTags` (array)

### bulk_update_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)
- `type` (string)
- `source` (string)
- `sourceRef` (string)
- `externalLink` (string)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `date` (integer)
- `lastSyncDate` (integer)
- `tags` (array)
- `tlp` (integer)
- `pap` (integer)
- `follow` (boolean)
- `customFields` (other)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `addTags` (array)
- `removeTags` (array)

### create_case_from_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `title` (string)
- `description` (string)
- `severity` (integer)
- `startDate` (integer)
- `endDate` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `status` (string)
- `summary` (string)
- `assignee` (string)
- `customFields` (other)
- `caseTemplate` (string)
- `tasks` (array)
- `pages` (array)
- `sharingParameters` (array)
- `taskRule` (string)
- `observableRule` (string)

### follow_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)

### unfollow_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)

### merge_alert_with_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `caseId` (string)

### import_alert_observables_and_procedures_in_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `caseId` (string)

### merge_bulk_alerts_with_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `alertIds` (array)

### delete_alert_in_bulk

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)

### get_similar_observables_between_alert_and_another_alert_or_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `alertOrCaseId` (string)

### create_observable_in_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `dataType` (string)
- `b_dataType` (string)
- `data` (other)
- `message` (string)
- `startDate` (integer)
- `attachment` (other)
- `tlp` (integer)
- `pap` (integer)
- `tags` (array)
- `ioc` (boolean)
- `sighted` (boolean)
- `sightedAt` (integer)
- `ignoreSimilarity` (boolean)
- `isZip` (boolean)
- `zipPassword` (string)

### create_observable_in_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `dataType` (string)
- `b_dataType` (string)
- `data` (other)
- `message` (string)
- `startDate` (integer)
- `attachment` (other)
- `tlp` (integer)
- `pap` (integer)
- `tags` (array)
- `ioc` (boolean)
- `sighted` (boolean)
- `sightedAt` (integer)
- `ignoreSimilarity` (boolean)
- `isZip` (boolean)
- `zipPassword` (string)

### get_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)

### delete_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)

### update_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)
- `dataType` (string)
- `message` (string)
- `tlp` (integer)
- `pap` (integer)
- `tags` (array)
- `ioc` (boolean)
- `sighted` (boolean)
- `sightedAt` (integer)
- `ignoreSimilarity` (boolean)
- `addTags` (array)
- `removeTags` (array)

### update_bulk_of_observables

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)
- `dataType` (string)
- `message` (string)
- `tlp` (integer)
- `pap` (integer)
- `tags` (array)
- `ioc` (boolean)
- `sighted` (boolean)
- `sightedAt` (integer)
- `ignoreSimilarity` (boolean)
- `addTags` (array)
- `removeTags` (array)

### create_task_in_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `title` (string)
- `group` (string)
- `description` (string)
- `status` (string)
- `flag` (boolean)
- `startDate` (integer)
- `endDate` (integer)
- `order` (integer)
- `dueDate` (integer)
- `assignee` (string)
- `mandatory` (boolean)

### get_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### delete_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### update_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `title` (string)
- `group` (string)
- `description` (string)
- `status` (string)
- `flag` (boolean)
- `startDate` (integer)
- `endDate` (integer)
- `order` (integer)
- `dueDate` (integer)
- `assignee` (string)
- `mandatory` (boolean)

### update_bulk_of_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)
- `title` (string)
- `group` (string)
- `description` (string)
- `status` (string)
- `flag` (boolean)
- `startDate` (integer)
- `endDate` (integer)
- `order` (integer)
- `dueDate` (integer)
- `assignee` (string)
- `mandatory` (boolean)

### task_actions_required

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### set_task_as_required_by_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `orgId` (string)

### set_task_as_done_by_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `orgId` (string)

### create_task_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `message` (string)
- `startDate` (integer)
- `includeInTimeline` (integer)
- `attachments` (array)

### delete_task_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `logId` (string)

### update_task_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `logId` (string)
- `message` (string)
- `includeInTimeline` (integer)

### add_attachments_to_task_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `logId` (string)

### delete_attachment_from_task_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `logId` (string)
- `attachmentId` (string)

### create_a_page

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### delete_a_page

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pageId` (string)

### update_a_page

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pageId` (string)
- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### create_a_page_in_a_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### delete_a_page_in_a_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `pageId` (string)

### update_a_page_in_a_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `pageId` (string)
- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### create_comment_in_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `message` (string)

### create_comment_in_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `message` (string)

### delete_comment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)

### update_comment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `commentId` (string)
- `message` (string)

### get_case_timeline

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### create_custom_event

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `date` (integer)
- `endDate` (integer)
- `title` (string)
- `description` (string)

### delete_a_custom_event

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `eventId` (string)

### update_a_custom_event

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `eventId` (string)
- `date` (integer)
- `endDate` (integer)
- `title` (string)
- `description` (string)

### create_casetemplate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `displayName` (string)
- `titlePrefix` (string)
- `description` (string)
- `severity` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `summary` (string)
- `tasks` (array)
- `pageTemplateIds` (array)
- `customFields` (other)

### get_casetemplate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseTemplateNameOrId` (string)

### delete_casetemplate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseTemplateNameOrId` (string)

### update_casetemplate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseTemplateNameOrId` (string)
- `name` (string)
- `displayName` (string)
- `titlePrefix` (string)
- `description` (string)
- `severity` (integer)
- `tags` (array)
- `flag` (boolean)
- `tlp` (integer)
- `pap` (integer)
- `summary` (string)
- `customFields` (other)
- `tasks` (array)

### link_pagetemplates_to_a_casetemplate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseTemplateNameOrId` (string)
- `pageTemplateIds` (array)

### create_a_page_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### delete_a_page_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pageTemplateId` (string)

### update_a_page_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pageTemplateId` (string)
- `title` (string)
- `content` (string)
- `order` (integer)
- `category` (string)

### create_procedure_for_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `patternId` (string)
- `occurDate` (integer)
- `tactic` (string)
- `description` (string)

### create_several_procedures_for_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `procedures` (array)

### create_procedure_for_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `patternId` (string)
- `occurDate` (integer)
- `tactic` (string)
- `description` (string)

### create_several_procedures_for_alert

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `procedures` (array)

### delete_procedure

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `procedureId` (string)

### update_procedure

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `procedureId` (string)
- `description` (string)
- `occurDate` (integer)
- `patternId` (string)
- `tactic` (string)

### delete_procedures_in_bulk

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)

### create_dashboard

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `group` (string)
- `description` (string)
- `status` (string)
- `definition` (object)
- `version` (integer)

### get_dashboard

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)

### delete_dashboard

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)

### update_dashboard

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `title` (string)
- `group` (string)
- `description` (string)
- `definition` (object)
- `status` (string)
- `version` (integer)

### change_dashboard_ownership

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dashboardId` (string)
- `user` (string)

### add_alert_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)

### get_alert_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `attachmentId` (string)
- `If-None-Match` (string)

### delete_alert_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `attachmentId` (string)

### download_alert_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertId` (string)
- `attachmentId` (string)

### add_attachment_to_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### download_attachment_from_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `attachmentId` (string)

### get_attachment_from_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `attachmentId` (string)
- `If-None-Match` (string)

### delete_case_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `attachmentId` (string)

### download_attachment_from_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `logId` (string)
- `attachmentId` (string)

### get_attachment_from_log

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `attachmentId` (string)
- `If-None-Match` (string)

### download_attachment_from_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)
- `attachmentId` (string)
- `asZip` (boolean)

### get_attachment_from_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)
- `attachmentId` (string)
- `If-None-Match` (string)

### add_attachment_to_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attachmentId` (string)
- `If-None-Match` (string)

### delete_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attachmentId` (string)

### download_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attachmentId` (string)

### add_temporary_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### login

**Environment variables**

No environment variables required

**Input schema**

- `user` (string)
- `password` (string)
- `organisation` (string)
- `code` (string)

### logout_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### logout_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_totp_secret

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### set_totp_secret

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `code` (integer)
- `secret` (string)

### unset_totp_secret

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### unset_totp_secret_for_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `user` (string)

### get_current_password_policy

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_current_user_info

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `login` (string)
- `name` (string)
- `email` (string)
- `password` (string)
- `profile` (string)
- `organisation` (string)
- `avatar` (string)
- `type` (string)

### get_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### lock_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### update_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `name` (string)
- `organisation` (string)
- `profile` (string)
- `locked` (boolean)
- `avatar` (string)
- `email` (string)
- `defaultOrganisation` (string)
- `type` (string)

### delete_user

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `organisation` (string)

### set_user_organisations

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `organisations` (array)

### set_user_login

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `login` (string)

### set_user_password

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `password` (string)

### change_user_password

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)
- `password` (string)
- `currentPassword` (string)

### get_user_api_key

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### remove_user_api_key

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### renew_user_api_key

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### get_user_avatar

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `userId` (string)

### create_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `taskRule` (string)
- `observableRule` (string)
- `locked` (boolean)

### get_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)

### update_organisation

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)
- `name` (string)
- `description` (string)
- `taskRule` (string)
- `observableRule` (string)
- `locked` (boolean)
- `avatar` (string)

### get_organisation_avatar

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)
- `fileHash` (string)
- `If-None-Match` (string)

### link_organisations

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)
- `otherOrgId` (string)
- `linkType` (string)
- `otherLinkType` (string)

### unlink_organisations

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)
- `otherOrgId` (string)

### list_organisation_links

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)

### bulk_link_organisations

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `orgId` (string)
- `links` (array)

### list_sharing_profiles

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### list_customfields

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_customfield

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `displayName` (string)
- `group` (string)
- `description` (string)
- `type` (string)
- `mandatory` (boolean)
- `options` (array)

### delete_customfield

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customFieldId` (string)
- `force` (boolean)

### update_customfield

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customFieldId` (string)
- `displayName` (string)
- `group` (string)
- `description` (string)
- `type` (string)
- `options` (array)
- `mandatory` (boolean)

### create_alertstatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `value` (string)
- `stage` (string)
- `order` (integer)
- `description` (string)
- `colour` (string)
- `hidden` (boolean)

### delete_alertstatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### update_alertstatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `order` (integer)
- `description` (string)
- `colour` (string)
- `hidden` (boolean)

### create_casestatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `value` (string)
- `stage` (string)
- `order` (integer)
- `description` (string)
- `colour` (string)
- `hidden` (boolean)

### delete_casestatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### update_casestatus

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `order` (integer)
- `description` (string)
- `colour` (string)
- `hidden` (boolean)

### create_taxonomy

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `namespace` (string)
- `description` (string)
- `version` (integer)
- `exclusive` (boolean)
- `predicates` (array)
- `values` (array)

### import_from_zip_file

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### activate_taxonomy

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taxonomyId` (string)

### deactivate_taxonomy

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taxonomyId` (string)

### get_taxonomy

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taxonomyId` (string)

### delete_taxonomy

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taxonomyId` (string)

### create_profile

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `permissions` (array)

### get_profile

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `profileId` (string)

### delete_profile

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `profileId` (string)

### update_profile

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `profileId` (string)
- `name` (string)
- `permissions` (array)

### list_shares_of_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### set_shares_for_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `shares` (array)

### share_a_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `shares` (array)

### unshare_a_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `organisations` (array)

### list_shares_of_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)

### share_a_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `organisations` (array)

### unshare_a_task

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `taskId` (string)
- `organisations` (array)

### list_shares_of_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)

### share_an_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)
- `organisations` (array)

### unshare_an_observable

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `observableId` (string)
- `organisations` (array)

### remove_a_share_from_case

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `shareId` (string)

### update_a_share

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `shareId` (string)
- `profile` (string)

### delete_shares_by_shareid

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ids` (array)

### list_user_configuration_items

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `path` (string)

### get_user_configuration_item

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `path` (string)

### set_user_configuration_item

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `path` (string)
- `value` (other)

### update_log_level

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `packageName` (string)
- `level` (string)

### trigger_all_checks

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### trigger_integrity_check

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### trigger_global_integrity_check

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### trigger_dedup_integrity_check

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### cancel_current_integrity_check

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_check_stats

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_index_status

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### reindex_data

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### rebuild_index

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)

### repair_schema

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemaName` (string)
- `select` (string)
- `filter` (string)

### schema_info

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schemaName` (string)
- `select` (string)
- `filter` (string)

### get_check_and_index_stats

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### describe_a_model

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `model` (string)

### describe_all_models

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_current_license

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_license

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `licenseId` (string)

### list_all_licenses

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### add_license_and_activate

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `license` (string)

### activate_license

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `licenseId` (string)

### get_challenge

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_catalog_of_ttp

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `variant` (string)

### delete_a_catalog_of_ttp

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `catalogId` (string)

### update_catalog_of_ttp

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `catalogId` (string)
- `name` (string)
- `description` (string)
- `variant` (string)

### import_mitre_att_ck_file

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `url` (string)
- `catalog` (string)
- `variant` (string)

### get_pattern

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `patternId` (string)

### delete_pattern

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `patternId` (string)

### get_case_patterns

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### get_observable_type

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `typeId` (string)

### delete_observable_type

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `typeId` (string)

### create_observable_type

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `isAttachment` (boolean)

### get_platform_public_status

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_platform_status

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `verbose` (boolean)

### create_a_stream_of_audits

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_a_stream_of_audits

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `streamId` (string)

### get_flow_of_audit

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `rootId` (string)
- `count` (integer)

### create_an_action

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `responderId` (string)
- `cortexId` (string)
- `objectType` (string)
- `objectId` (string)
- `parameters` (object)
- `tlp` (integer)

### get_action_by_entity

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `entityType` (string)
- `entityId` (string)

### list_analyzers

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `range` (string)

### list_analyzers_by_type

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dataType` (string)

### get_analyzer_by_id

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerId` (string)

### create_cortex_job

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerId` (string)
- `cortexId` (string)
- `artifactId` (string)
- `parameters` (object)

### get_cortex_job

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `jobId` (string)

### get_analyzer_template_content

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerId` (string)

### import_analyzer_templates

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_analyzer_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerId` (string)
- `content` (string)

### delete_analyzer_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerTemplateId` (string)

### update_analyzer_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `analyzerTemplateId` (string)
- `content` (string)

### list_responders

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `entityType` (string)
- `entityId` (string)

### get_misp_status

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### sync_with_misp_servers

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### export_case_to_misp

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `mispName` (string)

### import_case_from_misp

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `mode` (string)
- `definition` (string)
- `description` (string)
- `config` (object)
- `types` (array)

### invoke_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `function` (string)
- `dryRun` (boolean)

### invoke_function_on_an_object

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `function` (string)
- `objectType` (string)
- `objectIdOrName` (string)
- `dryRun` (boolean)
- `sync` (boolean)

### get_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `functionId` (string)

### delete_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `functionId` (string)

### update_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `functionId` (string)
- `mode` (string)
- `definition` (string)
- `description` (string)
- `config` (object)
- `types` (array)

### test_function

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dryRun` (boolean)
- `name` (string)
- `definition` (string)
- `config` (object)
- `input` (other)

### get_documentation_for_the_context_object

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `title` (string)
- `group` (string)
- `description` (string)
- `definition` (object)
- `version` (integer)

### get_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `templateId` (string)

### delete_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)

### update_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `idOrName` (string)
- `title` (string)
- `group` (string)
- `description` (string)
- `definition` (object)
- `version` (integer)

### get_case_report_template_options

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_attachment_to_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `templateId` (string)

### get_attachment_for_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `templateId` (string)
- `attachmentId` (string)
- `If-None-Match` (string)

### delete_attachment_for_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `templateId` (string)
- `attachmentId` (string)

### download_attachment_for_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `templateId` (string)
- `attachmentId` (string)

### render_case_report_template_get_

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `format` (string)
- `caseReportTemplateId` (string)
- `caseId` (string)
- `maxElements` (integer)

### render_case_report_template

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `format` (string)
- `definition` (object)
- `caseReportTemplateId` (string)
- `caseId` (string)
- `maxElements` (integer)

### generate_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)
- `caseReportTemplateId` (string)
- `format` (string)

### upload_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `caseId` (string)

### download_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reportId` (string)

### delete_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reportId` (string)

### update_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reportId` (string)

### list_supported_formats

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### view_case_report

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reportId` (string)

### available_providers

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### add_new_config

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `mailbox` (other)
- `organisations` (array)
- `enabled` (boolean)
- `createdAt` (string)
- `alertProperties` (object)

### get_config

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configId` (string)

### update_config

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configId` (string)
- `id` (string)
- `name` (string)
- `mailbox` (other)
- `organisations` (array)
- `enabled` (boolean)
- `createdAt` (string)
- `alertProperties` (object)

### delete_config

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configId` (string)

### get_configs

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### update_configs

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `enabled` (boolean)
- `interval` (string)

### get_mailbox_folders

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `mailbox` (other)
- `organisations` (array)
- `enabled` (boolean)
- `createdAt` (string)
- `alertProperties` (object)

### gw_set_authorization_code

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### test_config

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `name` (string)
- `mailbox` (other)
- `organisations` (array)
- `enabled` (boolean)
- `createdAt` (string)
- `alertProperties` (object)

### sync

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_branding

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### set_branding

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### get_branding_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `kind` (string)
- `If-None-Match` (string)

### delete_branding_attachment

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `kind` (string)

### get_tag

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tagId` (string)

### delete_tag

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tagId` (string)

### update_tag

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tagId` (string)
- `predicate` (string)
- `description` (string)
- `colour` (string)

### get_alert_feeders

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### create_an_alert_feeder

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `method` (string)
- `url` (string)
- `interval` (object)
- `functionName` (string)
- `body` (string)
- `headers` (array)
- `enabled` (boolean)
- `auth` (other)
- `proxyConfig` (object)
- `requestTimeout` (object)
- `responseMaxSize` (integer)

### run_an_alert_feeder

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertFeederName` (string)
- `dryRun` (boolean)

### update_an_alert_feeder

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertFeederName` (string)
- `description` (string)
- `method` (string)
- `url` (string)
- `interval` (object)
- `body` (string)
- `headers` (array)
- `enabled` (boolean)
- `auth` (other)
- `proxyConfig` (object)
- `requestTimeout` (object)
- `responseMaxSize` (integer)

### delete_an_alert_feeder

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alertFeederName` (string)

### test_an_alert_feeder

**Environment variables**

- `API_KEY`
- `THEHIVE_SESSION`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `name` (string)
- `description` (string)
- `method` (string)
- `url` (string)
- `interval` (object)
- `body` (string)
- `headers` (array)
- `enabled` (boolean)
- `auth` (other)
- `proxyConfig` (object)
- `requestTimeout` (object)
- `responseMaxSize` (integer)
