# @open-mcp/venice-ai

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "venice-ai": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/venice-ai@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/venice-ai@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add venice-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add venice-ai \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add venice-ai \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "venice-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/venice-ai"],
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

### createchatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

- `frequency_penalty` (number)
- `logprobs` (boolean)
- `max_completion_tokens` (integer)
- `max_temp` (number)
- `max_tokens` (integer)
- `messages` (array)
- `min_p` (number)
- `min_temp` (number)
- `model` (string)
- `n` (integer)
- `presence_penalty` (number)
- `repetition_penalty` (number)
- `seed` (integer)
- `stop` (other)
- `stop_token_ids` (array)
- `stream` (boolean)
- `stream_options` (object)
- `temperature` (number)
- `top_k` (integer)
- `top_p` (number)
- `user` (string)
- `venice_parameters` (object)
- `parallel_tool_calls` (boolean)
- `response_format` (other)
- `tool_choice` (other)
- `tools` (array)
- `Accept-Encoding` (string)

### generateimage

**Environment variables**

- `API_KEY`

**Input schema**

- `cfg_scale` (number)
- `embed_exif_metadata` (boolean)
- `format` (string)
- `height` (integer)
- `hide_watermark` (boolean)
- `inpaint` (object)
- `lora_strength` (integer)
- `model` (string)
- `negative_prompt` (string)
- `prompt` (string)
- `return_binary` (boolean)
- `safe_mode` (boolean)
- `seed` (integer)
- `steps` (integer)
- `style_preset` (string)
- `width` (integer)
- `Accept-Encoding` (string)

### simplegenerateimage

**Environment variables**

- `API_KEY`

**Input schema**

- `background` (string)
- `model` (string)
- `moderation` (string)
- `n` (integer)
- `output_compression` (integer)
- `output_format` (string)
- `prompt` (string)
- `quality` (string)
- `response_format` (string)
- `size` (string)
- `style` (string)
- `user` (string)
- `Accept-Encoding` (string)

### upscaleimage

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_image_styles

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### listmodels

**Environment variables**

- `API_KEY`

**Input schema**

- `type` (other)

### listmodeltraits

**Environment variables**

- `API_KEY`

**Input schema**

- `type` (string)

### listmodelcompatibilitymapping

**Environment variables**

- `API_KEY`

**Input schema**

- `type` (string)

### getapikeys

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### deleteapikey

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### createapikey

**Environment variables**

- `API_KEY`

**Input schema**

- `apiKeyType` (string)
- `consumptionLimit` (object)
- `description` (string)
- `expiresAt` (other)

### getapikeyratelimits

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getapikeyratelimitlogs

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getapikeygenerateweb3key

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postapikeygenerateweb3key

**Environment variables**

No environment variables required

**Input schema**

- `apiKeyType` (string)
- `consumptionLimit` (object)
- `description` (string)
- `expiresAt` (other)
- `address` (string)
- `signature` (string)
- `token` (string)

### listcharacters

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createembedding

**Environment variables**

- `API_KEY`

**Input schema**

- `dimensions` (integer)
- `encoding_format` (string)
- `input` (other)
- `model` (other)
- `user` (string)
- `Accept-Encoding` (string)

### createspeech

**Environment variables**

- `API_KEY`

**Input schema**

- `input` (string)
- `model` (string)
- `response_format` (string)
- `speed` (number)
- `streaming` (boolean)
- `voice` (string)

### getbillingusage

**Environment variables**

- `API_KEY`

**Input schema**

- `currency` (string)
- `endDate` (string)
- `limit` (integer)
- `page` (integer)
- `sortOrder` (string)
- `startDate` (string)
- `Accept` (string)
