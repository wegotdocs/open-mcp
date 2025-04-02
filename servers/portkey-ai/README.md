# @open-mcp/portkey-ai

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/portkey-ai add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/portkey-ai add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/portkey-ai add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/portkey-ai add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "portkey-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/portkey-ai"],
      "env": {"X_PORTKEY_API_KEY":"...","X_PORTKEY_VIRTUAL_KEY":"...","API_KEY":"...","X_PORTKEY_PROVIDER":"...","X_PORTKEY_CONFIG":"...","X_PORTKEY_CUSTOM_HOST":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `X_PORTKEY_API_KEY`
- `X_PORTKEY_VIRTUAL_KEY`
- `API_KEY`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`

## Tools

### createchatcompletion

### createcompletion

### createpromptcompletion

### createpromptrender

### createimage

### createimageedit

### createimagevariation

### createembedding

### createspeech

### createtranscription

### createtranslation

### listfiles

### createfile

### deletefile

### retrievefile

### downloadfile

### createfinetuningjob

### listpaginatedfinetuningjobs

### retrievefinetuningjob

### listfinetuningevents

### cancelfinetuningjob

### listfinetuningjobcheckpoints

### listmodels

### retrievemodel

### deletemodel

### createmoderation

### listassistants

### createassistant

### getassistant

### modifyassistant

### deleteassistant

### createthread

### getthread

### modifythread

### deletethread

### listmessages

### createmessage

### getmessage

### modifymessage

### deletemessage

### createthreadandrun

### listruns

### createrun

### getrun

### modifyrun

### submittoolouputstorun

### cancelrun

### listrunsteps

### getrunstep

### listvectorstores

### createvectorstore

### getvectorstore

### modifyvectorstore

### deletevectorstore

### listvectorstorefiles

### createvectorstorefile

### getvectorstorefile

### deletevectorstorefile

### createvectorstorefilebatch

### getvectorstorefilebatch

### cancelvectorstorefilebatch

### listfilesinvectorstorebatch

### createbatch

### listbatches

### retrievebatch

### cancelbatch

### listconfigs

### createconfig

### getconfig

### updateconfig

### createfeedback

### updatefeedback

### get_virtual_keys

### post_virtual_keys

### get_virtual_keys_slug_

### put_virtual_keys_slug_

### delete_virtual_keys_slug_

### invites_create

### get_admin_users_invites

### get_admin_users_invites_inviteid_

### delete_admin_users_invites_inviteid_

### post_admin_users_invites_inviteid_resend

### get_admin_users

### get_admin_users_userid_

### delete_admin_users_userid_

### put_admin_users_userid_

### post_admin_workspaces_workspaceid_users

### get_admin_workspaces_workspaceid_users

### put_admin_workspaces_workspaceid_users_userid_

### delete_admin_workspaces_workspaceid_users_userid_

### get_admin_workspaces_workspaceid_users_userid_

### post_admin_workspaces

### get_admin_workspaces

### put_admin_workspaces_workspaceid_

### get_admin_workspaces_workspaceid_

### delete_admin_workspaces_workspaceid_

### post_logs

### get_logs_exports_exportid_

### put_logs_exports_exportid_

### get_logs_exports

### post_logs_exports

### post_logs_exports_exportid_start

### post_logs_exports_exportid_cancel

### get_logs_exports_exportid_download

### post_api_keys_type_sub_type_

### get_api_keys

### put_api_keys_id_

### get_api_keys_id_

### delete_api_keys_id_

### get_analytics_graphs_requests

### get_analytics_graphs_cost

### get_analytics_graphs_latency

### get_analytics_graphs_tokens

### get_analytics_graphs_users

### get_analytics_graphs_users_requests

### get_analytics_graphs_errors

### get_analytics_graphs_errors_rate

### get_analytics_graphs_errors_stacks

### get_analytics_graphs_errors_status_codes

### get_analytics_graphs_requests_rescued

### get_analytics_graphs_cache_hit_rate

### get_analytics_graphs_cache_latency

### get_analytics_graphs_feedbacks

### get_analytics_graphs_feedbacks_scores

### get_analytics_graphs_feedbacks_weighted

### get_analytics_graphs_feedbacks_ai_models

### get_analytics_summary_cache

### get_analytics_groups_users

### get_analytics_groups_ai_models

### get_analytics_groups_metadata_metadatakey_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/portkey-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/portkey-ai`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
