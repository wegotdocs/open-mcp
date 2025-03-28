# @open-mcp/api_openai_com_v1

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_openai_com_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_openai_com_v1"],
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

### listassistants

### createassistant

### getassistant

### modifyassistant

### deleteassistant

### createspeech

### createtranscription

### createtranslation

### createbatch

### listbatches

### retrievebatch

### cancelbatch

### listchatcompletions

### createchatcompletion

### getchatcompletion

### updatechatcompletion

### deletechatcompletion

### getchatcompletionmessages

### createcompletion

### createembedding

### listfiles

### createfile

### deletefile

### retrievefile

### downloadfile

### listfinetuningcheckpointpermissions

### createfinetuningcheckpointpermission

### deletefinetuningcheckpointpermission

### createfinetuningjob

### listpaginatedfinetuningjobs

### retrievefinetuningjob

### cancelfinetuningjob

### listfinetuningjobcheckpoints

### listfinetuningevents

### createimageedit

### createimage

### createimagevariation

### listmodels

### retrievemodel

### deletemodel

### createmoderation

### admin_api_keys_list

### admin_api_keys_create

### admin_api_keys_get

### admin_api_keys_delete

### list_audit_logs

### usage_costs

### list_invites

### inviteuser

### retrieve_invite

### delete_invite

### list_projects

### create_project

### retrieve_project

### modify_project

### list_project_api_keys

### retrieve_project_api_key

### delete_project_api_key

### archive_project

### list_project_rate_limits

### update_project_rate_limits

### list_project_service_accounts

### create_project_service_account

### retrieve_project_service_account

### delete_project_service_account

### list_project_users

### create_project_user

### retrieve_project_user

### modify_project_user

### delete_project_user

### usage_audio_speeches

### usage_audio_transcriptions

### usage_code_interpreter_sessions

### usage_completions

### usage_embeddings

### usage_images

### usage_moderations

### usage_vector_stores

### list_users

### retrieve_user

### modify_user

### delete_user

### create_realtime_session

### create_realtime_transcription_session

### createresponse

### getresponse

### deleteresponse

### listinputitems

### createthread

### createthreadandrun

### getthread

### modifythread

### deletethread

### listmessages

### createmessage

### getmessage

### modifymessage

### deletemessage

### listruns

### createrun

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_openai_com_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_openai_com_v1`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
