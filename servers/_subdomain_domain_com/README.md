# @open-mcp/_subdomain_domain_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "_subdomain_domain_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_subdomain_domain_com"],
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

### listassigneefieldassignablegroupsandagentssearch

### listassigneefieldassignablegroups

### listassigneefieldassignablegroupagents

### getsourcesbytarget

### showaccountsettings

### updateaccountsettings

### createtrialaccount

### verifysubdomainavailability

### parameters_api_v2_activities

### listactivities

### parameters_api_v2_activities_activity_id_

### showactivity

### countactivities

### reportchannelbackerror

### pushcontenttosupport

### validatetoken

### showattachment

### updateattachment

### listauditlogs

### parameters_api_v2_audit_logs_audit_log_id_

### showauditlog

### exportauditlogs

### parameters_api_v2_autocomplete_tags

### autocompletetags

### listautomations

### createautomation

### parameters_api_v2_automations_automation_id_

### showautomation

### updateautomation

### deleteautomation

### listactiveautomations

### bulkdeleteautomations

### parameters_api_v2_automations_search

### searchautomations

### updatemanyautomations

### listbookmarks

### createbookmark

### parameters_api_v2_bookmarks_bookmark_id_

### deletebookmark

### listbrands

### createbrand

### showbrand

### updatebrand

### deletebrand

### checkhostmappingvalidityforexistingbrand

### checkhostmappingvalidity

### listmonitoredtwitterhandles

### parameters_api_v2_channels_twitter_monitored_twitter_handles_mon

### showmonitoredtwitterhandle

### createticketfromtweet

### parameters_api_v2_channels_twitter_tickets_comment_id_statuses

### gettingtwicketstatus

### openticketinagentbrowser

### openusersprofileinagentbrowser

### createticketorvoicemailticket

### parameters_api_v2_chat_file_redactions_ticket_id_

### redactchatcommentattachment

### parameters_api_v2_chat_redactions_ticket_id_

### redactchatcomment

### parameters_api_v2_comment_redactions_ticket_comment_id_

### redactticketcommentinagentworkspace

### listcustomobjects

### createcustomobject

### showcustomobject

### updatecustomobject

### deletecustomobject

### listcustomobjectfields

### createcustomobjectfield

### showcustomobjectfield

### updatecustomobjectfield

### deletecustomobjectfield

### reordercustomobjectfields

### customobjectrecordbulkjobs

### customobjectfieldslimit

### listcustomobjectrecords

### createcustomobjectrecord

### upsertcustomobjectrecordbyexternalidorname

### deletecustomobjectrecordbyexternalidorname

### showcustomobjectrecord

### updatecustomobjectrecord

### deletecustomobjectrecord

### autocompletecustomobjectrecordsearch

### countcustomobjectrecords

### searchcustomobjectrecords

### filteredsearchcustomobjectrecords

### parameters_api_v2_custom_objects_custom_object_key_triggers

### listobjecttriggers

### createobjecttrigger

### parameters_api_v2_custom_objects_custom_object_key_triggers_trig

### getobjecttrigger

### updateobjecttrigger

### deleteobjecttrigger

### parameters_api_v2_custom_objects_custom_object_key_triggers_acti

### listactiveobjecttriggers

### parameters_api_v2_custom_objects_custom_object_key_triggers_defi

### listobjecttriggersdefinitions

### parameters_api_v2_custom_objects_custom_object_key_triggers_dest

### deletemanyobjecttriggers

### parameters_api_v2_custom_objects_custom_object_key_triggers_sear

### searchobjecttriggers

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/_subdomain_domain_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/_subdomain_domain_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
