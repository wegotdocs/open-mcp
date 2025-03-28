# @open-mcp/api_portkey_ai_v1

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_portkey_ai_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_portkey_ai_v1"],
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

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_portkey_ai_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_portkey_ai_v1`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
