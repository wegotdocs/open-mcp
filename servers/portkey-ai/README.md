# @open-mcp/portkey-ai

## Installing

First set the environment variables as shell variables:

```bash
X_PORTKEY_API_KEY='...'
API_KEY='...'
X_PORTKEY_CONFIG='...'
X_PORTKEY_CUSTOM_HOST='...'
X_PORTKEY_PROVIDER='...'
X_PORTKEY_VIRTUAL_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add portkey-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_PORTKEY_API_KEY=$X_PORTKEY_API_KEY \
  --API_KEY=$API_KEY \
  --X_PORTKEY_CONFIG=$X_PORTKEY_CONFIG \
  --X_PORTKEY_CUSTOM_HOST=$X_PORTKEY_CUSTOM_HOST \
  --X_PORTKEY_PROVIDER=$X_PORTKEY_PROVIDER \
  --X_PORTKEY_VIRTUAL_KEY=$X_PORTKEY_VIRTUAL_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add portkey-ai \
  .cursor/mcp.json \
  --X_PORTKEY_API_KEY=$X_PORTKEY_API_KEY \
  --API_KEY=$API_KEY \
  --X_PORTKEY_CONFIG=$X_PORTKEY_CONFIG \
  --X_PORTKEY_CUSTOM_HOST=$X_PORTKEY_CUSTOM_HOST \
  --X_PORTKEY_PROVIDER=$X_PORTKEY_PROVIDER \
  --X_PORTKEY_VIRTUAL_KEY=$X_PORTKEY_VIRTUAL_KEY
```

### Other

```bash
npx @open-mcp/config add portkey-ai \
  /path/to/client/config.json \
  --X_PORTKEY_API_KEY=$X_PORTKEY_API_KEY \
  --API_KEY=$API_KEY \
  --X_PORTKEY_CONFIG=$X_PORTKEY_CONFIG \
  --X_PORTKEY_CUSTOM_HOST=$X_PORTKEY_CUSTOM_HOST \
  --X_PORTKEY_PROVIDER=$X_PORTKEY_PROVIDER \
  --X_PORTKEY_VIRTUAL_KEY=$X_PORTKEY_VIRTUAL_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "portkey-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/portkey-ai"],
      "env": {"X_PORTKEY_API_KEY":"...","API_KEY":"...","X_PORTKEY_CONFIG":"...","X_PORTKEY_CUSTOM_HOST":"...","X_PORTKEY_PROVIDER":"...","X_PORTKEY_VIRTUAL_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `X_PORTKEY_API_KEY`
- `API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

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

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### servers_chat_completions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createchatcompletion

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `messages` (array)
- `model` (other)
- `frequency_penalty` (number)
- `logit_bias` (object)
- `logprobs` (boolean)
- `top_logprobs` (integer)
- `max_tokens` (integer)
- `n` (integer)
- `presence_penalty` (number)
- `response_format` (object)
- `seed` (integer)
- `stop` (other)
- `stream` (boolean)
- `stream_options` (object)
- `thinking` (object)
- `temperature` (number)
- `top_p` (number)
- `tools` (array)
- `tool_choice` (other)
- `parallel_tool_calls` (boolean)
- `user` (string)
- `x-portkey-trace-id` (string)
- `x-portkey-span-id` (string)
- `x-portkey-parent-span-id` (string)
- `x-portkey-span-name` (string)
- `x-portkey-metadata` (object)
- `x-portkey-cache-namespace` (string)
- `x-portkey-cache-force-refresh` (boolean)

### servers_completions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createcompletion

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `model` (other)
- `prompt` (other)
- `best_of` (integer)
- `echo` (boolean)
- `frequency_penalty` (number)
- `logit_bias` (object)
- `logprobs` (integer)
- `max_tokens` (integer)
- `n` (integer)
- `presence_penalty` (number)
- `seed` (integer)
- `stop` (other)
- `stream` (boolean)
- `stream_options` (object)
- `suffix` (string)
- `temperature` (number)
- `top_p` (number)
- `user` (string)

### servers_collections

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_collections

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspace_id` (string)
- `name` (string)
- `parent_collection_id` (string)

### get_collections

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspace_id` (string)
- `current_page` (integer)
- `page_size` (integer)
- `search` (string)

### servers_collections_collectionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### parameters_collections_collectionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_collections_collectionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### put_collections_collectionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `name` (string)

### delete_collections_collectionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### servers_labels

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createlabel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `organisation_id` (string)
- `workspace_id` (string)
- `name` (string)
- `description` (string)
- `color_code` (string)

### listlabels

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `organisation_id` (string)
- `workspace_id` (string)
- `search` (string)
- `current_page` (integer)
- `page_size` (integer)

### servers_labels_labelid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getlabel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `labelId` (string)
- `organisation_id` (string)
- `workspace_id` (string)

### updatelabel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `labelId` (string)
- `name` (string)
- `description` (string)
- `color_code` (string)

### deletelabel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `labelId` (string)

### servers_prompts

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createprompt

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `name` (string)
- `collection_id` (string)
- `string` (string)
- `parameters` (object)
- `functions` (array)
- `tools` (array)
- `tool_choice` (object)
- `model` (string)
- `virtual_key` (string)
- `version_description` (string)
- `template_metadata` (object)

### listprompts

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `collection_id` (string)
- `workspace_id` (string)
- `current_page` (integer)
- `page_size` (integer)
- `search` (string)

### servers_prompts_promptid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getprompt

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)

### updateprompt

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)
- `name` (string)
- `collection_id` (string)
- `string` (string)
- `parameters` (object)
- `model` (string)
- `virtual_key` (string)
- `version_description` (string)
- `functions` (array)
- `tools` (array)
- `tool_choice` (object)
- `is_raw_template` (integer)
- `prompt_metadata` (object)

### deleteprompt

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)

### servers_prompts_promptid_versions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getpromptversions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)

### servers_prompts_promptid_versions_versionid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getpromptbyversion

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)
- `versionId` (string)

### updatepromptversion

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)
- `versionId` (string)
- `label_id` (string)

### servers_prompts_promptid_makedefault

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### updatepromptdefault

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)
- `version` (number)

### servers_prompts_partials

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createpromptpartial

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspace_id` (string)
- `name` (string)
- `string` (string)
- `version_description` (string)

### listpromptpartials

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `collection_id` (string)

### servers_prompts_partials_promptpartialid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getpromptpartial

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptPartialId` (string)

### updatepromptpartial

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptPartialId` (string)
- `name` (string)
- `string` (string)
- `description` (string)
- `status` (string)

### deletepromptpartial

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptPartialId` (string)

### servers_prompts_partials_promptpartialid_versions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getpromptpartialversions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptPartialId` (string)

### servers_prompts_partials_promptpartialid_makedefault

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### updatepromptpartialdefault

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptPartialId` (string)
- `version` (number)

### servers_prompts_promptid_completions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createpromptcompletion

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)

### servers_prompts_promptid_render

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createpromptrender

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `promptId` (string)

### servers_images_generations

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createimage

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `prompt` (string)
- `model` (other)
- `n` (integer)
- `quality` (string)
- `response_format` (string)
- `size` (string)
- `style` (string)
- `user` (string)

### servers_images_edits

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createimageedit

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### servers_images_variations

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createimagevariation

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### servers_embeddings

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createembedding

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `input` (other)
- `model` (other)
- `encoding_format` (string)
- `dimensions` (integer)
- `user` (string)

### servers_audio_speech

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createspeech

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `model` (other)
- `input` (string)
- `voice` (string)
- `response_format` (string)
- `speed` (number)

### servers_audio_transcriptions

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createtranscription

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### servers_audio_translations

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createtranslation

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### servers_files

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listfiles

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `purpose` (string)

### createfile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### servers_files_file_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### deletefile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `file_id` (string)

### retrievefile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `file_id` (string)

### servers_files_file_id_content

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### downloadfile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `file_id` (string)

### servers_fine_tuning_jobs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createfinetuningjob

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### listpaginatedfinetuningjobs

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `after` (string)
- `limit` (integer)

### servers_fine_tuning_jobs_fine_tuning_job_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### retrievefinetuningjob

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `fine_tuning_job_id` (string)

### servers_fine_tuning_jobs_fine_tuning_job_id_events

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listfinetuningevents

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `fine_tuning_job_id` (string)
- `after` (string)
- `limit` (integer)

### servers_fine_tuning_jobs_fine_tuning_job_id_cancel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### cancelfinetuningjob

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `fine_tuning_job_id` (string)

### servers_fine_tuning_jobs_fine_tuning_job_id_checkpoints

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listfinetuningjobcheckpoints

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `fine_tuning_job_id` (string)
- `after` (string)
- `limit` (integer)

### listmodels

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### retrievemodel

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `model` (string)

### deletemodel

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `model` (string)

### servers_moderations

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createmoderation

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `input` (other)
- `model` (other)

### servers_assistants

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listassistants

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)

### createassistant

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `model` (other)
- `name` (string)
- `description` (string)
- `instructions` (string)
- `tools` (array)
- `tool_resources` (object)
- `metadata` (object)
- `temperature` (number)
- `top_p` (number)
- `response_format` (other)

### servers_assistants_assistant_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getassistant

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `assistant_id` (string)

### modifyassistant

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `assistant_id` (string)
- `model` (other)
- `name` (string)
- `description` (string)
- `instructions` (string)
- `tools` (array)
- `tool_resources` (object)
- `metadata` (object)
- `temperature` (number)
- `top_p` (number)
- `response_format` (other)

### deleteassistant

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `assistant_id` (string)

### servers_responses

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createresponse

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### servers_responses_response_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getresponse

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `response_id` (string)
- `include` (array)

### deleteresponse

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `response_id` (string)

### servers_responses_response_id_input_items

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listinputitems

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `response_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)

### servers_threads

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createthread

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `messages` (array)
- `tool_resources` (object)
- `metadata` (object)

### servers_threads_thread_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getthread

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)

### modifythread

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `tool_resources` (object)
- `metadata` (object)

### deletethread

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)

### servers_threads_thread_id_messages

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listmessages

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)
- `run_id` (string)

### createmessage

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `role` (string)
- `content` (other)
- `attachments` (array)
- `metadata` (object)

### servers_threads_thread_id_messages_message_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getmessage

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `message_id` (string)

### modifymessage

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `message_id` (string)
- `metadata` (object)

### deletemessage

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `message_id` (string)

### servers_threads_runs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createthreadandrun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `assistant_id` (string)
- `thread` (object)
- `model` (other)
- `instructions` (string)
- `tools` (array)
- `tool_resources` (object)
- `metadata` (object)
- `temperature` (number)
- `top_p` (number)
- `stream` (boolean)
- `max_prompt_tokens` (integer)
- `max_completion_tokens` (integer)
- `truncation_strategy` (object)
- `tool_choice` (other)
- `parallel_tool_calls` (boolean)
- `response_format` (other)

### servers_threads_thread_id_runs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listruns

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)

### createrun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `assistant_id` (string)
- `model` (other)
- `instructions` (string)
- `additional_instructions` (string)
- `additional_messages` (array)
- `tools` (array)
- `metadata` (object)
- `temperature` (number)
- `top_p` (number)
- `stream` (boolean)
- `max_prompt_tokens` (integer)
- `max_completion_tokens` (integer)
- `truncation_strategy` (object)
- `tool_choice` (other)
- `parallel_tool_calls` (boolean)
- `response_format` (other)

### servers_threads_thread_id_runs_run_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getrun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)

### modifyrun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)
- `metadata` (object)

### servers_threads_thread_id_runs_run_id_submit_tool_outputs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### submittoolouputstorun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)
- `tool_outputs` (array)
- `stream` (boolean)

### servers_threads_thread_id_runs_run_id_cancel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### cancelrun

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)

### servers_threads_thread_id_runs_run_id_steps

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listrunsteps

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)

### servers_threads_thread_id_runs_run_id_steps_step_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### getrunstep

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `thread_id` (string)
- `run_id` (string)
- `step_id` (string)

### listvectorstores

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)

### createvectorstore

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `file_ids` (array)
- `name` (string)
- `expires_after` (object)
- `chunking_strategy` (object)
- `metadata` (object)

### getvectorstore

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)

### modifyvectorstore

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `name` (string)
- `expires_after` (object)
- `metadata` (object)

### deletevectorstore

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)

### listvectorstorefiles

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)
- `filter` (string)

### createvectorstorefile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `file_id` (string)
- `chunking_strategy` (object)

### getvectorstorefile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `file_id` (string)

### deletevectorstorefile

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `file_id` (string)

### createvectorstorefilebatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `file_ids` (array)
- `chunking_strategy` (object)

### getvectorstorefilebatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `batch_id` (string)

### cancelvectorstorefilebatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `batch_id` (string)

### listfilesinvectorstorebatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `vector_store_id` (string)
- `batch_id` (string)
- `limit` (integer)
- `order` (string)
- `after` (string)
- `before` (string)
- `filter` (string)

### servers_batches

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createbatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

No input parameters

### listbatches

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `after` (string)
- `limit` (integer)

### servers_batches_batch_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### retrievebatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `batch_id` (string)

### servers_batches_batch_id_cancel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### cancelbatch

**Environment variables**

- `API_KEY`
- `X_PORTKEY_API_KEY`
- `X_PORTKEY_CONFIG`
- `X_PORTKEY_CUSTOM_HOST`
- `X_PORTKEY_PROVIDER`
- `X_PORTKEY_VIRTUAL_KEY`

**Input schema**

- `batch_id` (string)

### servers_configs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### listconfigs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createconfig

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `name` (string)
- `config` (object)
- `isDefault` (integer)
- `workspace_id` (string)

### servers_configs_slug_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### deleteconfig

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)

### getconfig

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)

### updateconfig

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)
- `name` (string)
- `config` (object)
- `status` (string)

### servers_feedback

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### createfeedback

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `trace_id` (string)
- `value` (integer)
- `weight` (number)
- `metadata` (object)

### servers_feedback_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### updatefeedback

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `id` (string)
- `value` (integer)
- `weight` (number)
- `metadata` (object)

### servers_virtual_keys

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_virtual_keys

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_virtual_keys

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `name` (string)
- `provider` (string)
- `key` (string)
- `note` (string)
- `apiVersion` (string)
- `resourceName` (string)
- `deploymentName` (string)
- `workspace_id` (string)
- `deploymentConfig` (array)
- `usage_limits` (object)
- `rate_limits` (object)
- `expires_at` (string)

### servers_virtual_keys_slug_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_virtual_keys_slug_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)

### put_virtual_keys_slug_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)
- `name` (string)
- `key` (string)
- `note` (string)
- `deploymentConfig` (array)
- `usage_limits` (object)

### delete_virtual_keys_slug_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `slug` (string)

### servers_admin_users_invites

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### invites_create

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `email` (string)
- `workspaces` (array)
- `role` (string)
- `workspace_api_key_details` (object)

### get_admin_users_invites

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `pageSize` (integer)
- `currentPage` (integer)
- `role` (string)
- `email` (string)
- `status` (string)

### servers_admin_users_invites_inviteid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_admin_users_invites_inviteid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `inviteId` (string)

### delete_admin_users_invites_inviteid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `inviteId` (string)

### servers_admin_users_invites_inviteid_resend

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_admin_users_invites_inviteid_resend

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `inviteId` (string)

### servers_admin_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_admin_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `pageSize` (integer)
- `currentPage` (integer)
- `role` (string)
- `email` (string)
- `x-portkey-api-key` (string)

### servers_admin_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_admin_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `userId` (string)

### delete_admin_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `userId` (string)

### put_admin_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `userId` (string)
- `role` (string)

### servers_admin_workspaces_workspaceid_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_admin_workspaces_workspaceid_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `users` (array)

### get_admin_workspaces_workspaceid_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `current_page` (number)
- `page_size` (number)
- `role` (string)
- `email` (string)

### servers_admin_workspaces_workspaceid_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### put_admin_workspaces_workspaceid_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `userId` (string)
- `role` (string)

### delete_admin_workspaces_workspaceid_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `userId` (string)

### get_admin_workspaces_workspaceid_users_userid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `userId` (string)

### servers_admin_workspaces

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_admin_workspaces

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `name` (string)
- `description` (string)
- `defaults` (object)
- `users` (array)

### get_admin_workspaces

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `page_size` (integer)
- `current_page` (integer)

### servers_admin_workspaces_workspaceid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### put_admin_workspaces_workspaceid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)
- `name` (string)
- `description` (string)
- `defaults` (object)

### get_admin_workspaces_workspaceid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)

### delete_admin_workspaces_workspaceid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspaceId` (string)

### servers_logs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_logs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### servers_logs_exports_exportid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_logs_exports_exportid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `exportId` (string)

### put_logs_exports_exportid_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `exportId` (string)
- `workspace_id` (string)
- `filters` (object)
- `requested_data` (array)

### servers_logs_exports

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_logs_exports

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspace_id` (string)

### post_logs_exports

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `workspace_id` (string)
- `filters` (object)
- `requested_data` (array)

### servers_logs_exports_exportid_start

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_logs_exports_exportid_start

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `exportId` (string)

### servers_logs_exports_exportid_cancel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_logs_exports_exportid_cancel

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `exportId` (string)

### servers_logs_exports_exportid_download

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_logs_exports_exportid_download

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `exportId` (string)

### servers_audit_logs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_audit_logs

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `start_time` (string)
- `end_time` (string)
- `organisation_id` (string)
- `method` (string)
- `uri` (string)
- `request_id` (string)
- `user_id` (string)
- `user_type` (string)
- `workspace_id` (string)
- `response_status_code` (integer)
- `resource_type` (string)
- `action` (string)
- `client_ip` (string)
- `country` (string)
- `current_page` (integer)
- `page_size` (integer)

### servers_api_keys_type_sub_type_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### post_api_keys_type_sub_type_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `type` (string)
- `sub-type` (string)
- `name` (string)
- `description` (string)
- `workspace_id` (string)
- `user_id` (string)
- `rate_limits` (array)
- `usage_limits` (object)
- `scopes` (array)
- `defaults` (object)
- `alert_emails` (array)
- `expires_at` (string)

### servers_api_keys

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_api_keys

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `page_size` (integer)
- `current_page` (integer)
- `workspace_id` (string)

### servers_api_keys_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### put_api_keys_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `rate_limits` (array)
- `usage_limits` (object)
- `scopes` (array)
- `defaults` (object)
- `alert_emails` (array)

### get_api_keys_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `id` (string)

### delete_api_keys_id_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `id` (string)

### servers_analytics_graphs_requests

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_requests

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_cost

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_cost

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_latency

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_latency

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_tokens

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_tokens

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_users_requests

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_users_requests

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_errors

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_errors

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_errors_rate

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_errors_rate

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_errors_stacks

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_errors_stacks

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_errors_status_codes

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_errors_status_codes

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_requests_rescued

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_requests_rescued

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_cache_hit_rate

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_cache_hit_rate

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_cache_latency

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_cache_latency

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_feedbacks

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_feedbacks

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_feedbacks_scores

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_feedbacks_scores

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_feedbacks_weighted

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_feedbacks_weighted

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_graphs_feedbacks_ai_models

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_graphs_feedbacks_ai_models

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_summary_cache

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_summary_cache

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_groups_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_groups_users

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `current_page` (integer)
- `page_size` (integer)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_groups_ai_models

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_groups_ai_models

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `current_page` (integer)
- `page_size` (integer)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)

### servers_analytics_groups_metadata_metadatakey_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

No input parameters

### get_analytics_groups_metadata_metadatakey_

**Environment variables**

- `X_PORTKEY_API_KEY`

**Input schema**

- `metadataKey` (string)
- `time_of_generation_min` (string)
- `time_of_generation_max` (string)
- `total_units_min` (integer)
- `total_units_max` (integer)
- `cost_min` (number)
- `cost_max` (number)
- `prompt_token_min` (integer)
- `prompt_token_max` (integer)
- `completion_token_min` (integer)
- `completion_token_max` (integer)
- `status_code` (string)
- `weighted_feedback_min` (number)
- `weighted_feedback_max` (number)
- `virtual_keys` (string)
- `configs` (string)
- `workspace_slug` (string)
- `api_key_ids` (string)
- `current_page` (integer)
- `page_size` (integer)
- `metadata` (string)
- `ai_org_model` (string)
- `trace_id` (string)
- `span_id` (string)
- `prompt_slug` (string)
