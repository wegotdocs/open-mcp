# @open-mcp/together-ai

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "together-ai": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/together-ai@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/together-ai@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add together-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add together-ai \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add together-ai \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "together-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/together-ai"],
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

### chat_completions

**Environment variables**

- `API_KEY`

**Input schema**

- `messages` (array)
- `model` (other)
- `max_tokens` (integer)
- `stop` (array)
- `temperature` (number)
- `top_p` (number)
- `top_k` (integer)
- `context_length_exceeded_behavior` (string)
- `repetition_penalty` (number)
- `stream` (boolean)
- `logprobs` (integer)
- `echo` (boolean)
- `n` (integer)
- `min_p` (number)
- `presence_penalty` (number)
- `frequency_penalty` (number)
- `logit_bias` (object)
- `seed` (integer)
- `function_call` (other)
- `response_format` (object)
- `tools` (array)
- `tool_choice` (other)
- `safety_model` (string)

### completions

**Environment variables**

- `API_KEY`

**Input schema**

- `prompt` (string)
- `model` (string)
- `max_tokens` (integer)
- `stop` (array)
- `temperature` (number)
- `top_p` (number)
- `top_k` (integer)
- `repetition_penalty` (number)
- `stream` (boolean)
- `logprobs` (integer)
- `echo` (boolean)
- `n` (integer)
- `safety_model` (string)
- `min_p` (number)
- `presence_penalty` (number)
- `frequency_penalty` (number)
- `logit_bias` (object)
- `seed` (integer)

### embeddings

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (string)
- `input` (other)

### models

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### uploadmodel

**Environment variables**

- `API_KEY`

**Input schema**

- `model_name` (string)
- `model_source` (string)
- `hf_token` (string)
- `description` (string)

### getjob

**Environment variables**

- `API_KEY`

**Input schema**

- `jobId` (string)

### listjobs

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_images_generations

**Environment variables**

- `API_KEY`

**Input schema**

- `prompt` (string)
- `model` (string)
- `steps` (integer)
- `image_url` (string)
- `seed` (integer)
- `n` (integer)
- `height` (integer)
- `width` (integer)
- `negative_prompt` (string)
- `response_format` (string)
- `guidance` (number)
- `output_format` (string)
- `image_loras` (array)

### get_files

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### delete_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_files_id_content

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### post_fine_tunes

**Environment variables**

- `API_KEY`

**Input schema**

- `training_file` (string)
- `validation_file` (string)
- `model` (string)
- `n_epochs` (integer)
- `n_checkpoints` (integer)
- `n_evals` (integer)
- `batch_size` (other)
- `learning_rate` (number)
- `lr_scheduler` (object)
- `warmup_ratio` (number)
- `max_grad_norm` (number)
- `weight_decay` (number)
- `suffix` (string)
- `wandb_api_key` (string)
- `wandb_base_url` (string)
- `wandb_project_name` (string)
- `wandb_name` (string)
- `train_on_inputs` (boolean)
- `training_method` (object)
- `training_type` (object)
- `from_checkpoint` (string)

### get_fine_tunes

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_fine_tunes_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_fine_tunes_id_events

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### get_finetune_download

**Environment variables**

- `API_KEY`

**Input schema**

- `ft_id` (string)
- `checkpoint_step` (integer)
- `checkpoint` (string)
- `output` (string)

### post_fine_tunes_id_cancel

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### rerank

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (string)
- `query` (string)
- `documents` (other)
- `top_n` (integer)
- `return_documents` (boolean)
- `rank_fields` (array)

### audio_speech

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (other)
- `input` (string)
- `voice` (other)
- `response_format` (string)
- `language` (string)
- `response_encoding` (string)
- `sample_rate` (number)
- `stream` (boolean)

### listendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `type` (string)

### createendpoint

**Environment variables**

- `API_KEY`

**Input schema**

- `display_name` (string)
- `model` (string)
- `hardware` (string)
- `autoscaling` (object)
- `disable_prompt_cache` (boolean)
- `disable_speculative_decoding` (boolean)
- `state` (string)
- `inactive_timeout` (integer)

### getendpoint

**Environment variables**

- `API_KEY`

**Input schema**

- `endpointId` (string)

### updateendpoint

**Environment variables**

- `API_KEY`

**Input schema**

- `endpointId` (string)
- `display_name` (string)
- `state` (string)
- `autoscaling` (object)
- `inactive_timeout` (integer)

### deleteendpoint

**Environment variables**

- `API_KEY`

**Input schema**

- `endpointId` (string)

### listhardware

**Environment variables**

- `API_KEY`

**Input schema**

- `model` (string)

### tci_execute

**Environment variables**

- `API_KEY`

**Input schema**

- `code` (string)
- `files` (array)
- `language` (other)
- `session_id` (string)

### sessions_list

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters
