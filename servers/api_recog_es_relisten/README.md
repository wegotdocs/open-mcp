# @open-mcp/api_recog_es_relisten

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_recog_es_relisten": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_recog_es_relisten@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_recog_es_relisten@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_recog_es_relisten \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_recog_es_relisten \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_recog_es_relisten \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_recog_es_relisten": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_recog_es_relisten"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### create_feedback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `resultid` (string)
- `audio` (other)
- `transcription` (other)
- `anamnesis` (other)
- `fields` (other)
- `comments` (string)
- `extraFields` (object)

### get_history_history_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `per_page` (integer)
- `last_evaluated_key` (other)
- `reverse` (boolean)
- `field` (other)

### get_result_by_id_results_result_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result_id` (string)

### update_result_by_id_results_result_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result_id` (string)
- `reviewTime` (integer)
- `answers` (object)
- `multiAnswers` (object)
- `title` (other)

### get_hl7_result_by_id_results_result_id_hl7_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result_id` (string)

### generate_result_notes_results_result_id_generate_notes_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result_id` (string)
- `lang` (string)
- `langCult` (string)
- `specialty` (string)
- `subSpecialty` (string)
- `subSubSpecialty` (string)
- `isMulti` (boolean)
- `consultationType` (string)
- `userRole` (string)

### retry_retry_result_id_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result_id` (string)

### upload_file_upload_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `resultid` (other)
- `lang` (string)
- `langCult` (string)
- `country` (string)
- `specialty` (string)
- `subSpecialty` (string)
- `subSubSpecialty` (string)
- `consultationType` (string)
- `initialContext` (other)
- `isMulti` (boolean)
- `contentType` (string)
- `errorCode` (other)
- `tags` (other)

### upload_partial_file_upload_partial_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `resultid` (other)
- `lang` (string)
- `langCult` (string)
- `country` (string)
- `specialty` (string)
- `subSpecialty` (string)
- `subSubSpecialty` (string)
- `consultationType` (string)
- `initialContext` (other)
- `isMulti` (boolean)
- `contentType` (string)
- `errorCode` (other)
- `tags` (other)
- `groupId` (string)

### upload_async_file_upload_async_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `resultid` (other)
- `lang` (string)
- `langCult` (string)
- `country` (string)
- `specialty` (string)
- `subSpecialty` (string)
- `subSubSpecialty` (string)
- `consultationType` (string)
- `initialContext` (other)
- `isMulti` (boolean)
- `contentType` (string)
- `errorCode` (other)
- `tags` (other)
- `callbackUrl` (string)

### get_request_request_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `result` (object)

### upload_dictation_dictation_upload_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contentType` (string)

### create_dictation_dictation_process_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)
- `lang` (string)

### realtime_dictation_dictation_process_real_time_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)
- `lang` (string)
- `transcription` (string)
- `formattedTranscription` (string)
- `healthCenterGroup` (string)
