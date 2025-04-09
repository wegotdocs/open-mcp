# @open-mcp/venice-ai

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/venice-ai add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/venice-ai add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/venice-ai add-to-client /path/to/client/config.json
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

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/venice-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/venice-ai`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### createchatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("The ID of the model you wish to prompt. May also be a model trait, or a compatibility mapping. See the models endpoint for a list of models available to you.  You can use feature suffixes to enable features from the venice_parameters object. Please see \"Model Feature Suffix\" documentation for more details."),
  "messages": z.array(z.union([z.object({ "role": z.literal("user"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type."))]) }).describe("The user message is the input from the user. It is part of the conversation and is visible to the assistant."), z.object({ "role": z.literal("assistant"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type.")), z.any().nullable()]), "reasoning_content": z.string().nullable().optional(), "name": z.string().optional(), "tool_calls": z.array(z.any().nullable()).optional() }).describe("The assistant message contains the response from the LLM."), z.object({ "role": z.literal("tool"), "content": z.string(), "reasoning_content": z.string().nullable().optional(), "tool_calls": z.array(z.any().nullable()).optional(), "name": z.string().optional(), "tool_call_id": z.string() }).describe("The tool message is a special message that is used to call a tool. It is not part of the conversation and is not visible to the user."), z.object({ "role": z.literal("system"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type."))]), "name": z.string().optional() }).describe("The system message is a special message that provides context to the model. It is not part of the conversation and is not visible to the user.")])).min(1).describe("A list of messages comprising the conversation so far. Depending on the model you use, different message types (modalities) are supported, like text and images. For compatibility purposes, the schema supports submitting multiple image_url messages, however, only the last image_url message will be passed to and processed by the model."),
  "venice_parameters": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUnique parameters to Venice's API implementation.").optional(),
  "frequency_penalty": z.number().gte(-2).lte(2).describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.").optional(),
  "presence_penalty": z.number().gte(-2).lte(2).describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.").optional(),
  "repetition_penalty": z.number().gte(0).describe("The parameter for repetition penalty. 1.0 means no penalty. Values > 1.0 discourage repetition.").optional(),
  "n": z.number().int().describe("How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs.").optional(),
  "max_tokens": z.number().int().describe("The maximum number of tokens that can be generated in the chat completion. This value can be used to control costs for text generated via API. This value is now deprecated in favor of max_completion_tokens.").optional(),
  "max_temp": z.number().gte(0).lte(2).describe("Maximum temperature value for dynamic temperature scaling.").optional(),
  "min_temp": z.number().gte(0).lte(2).describe("Minimum temperature value for dynamic temperature scaling.").optional(),
  "max_completion_tokens": z.number().int().describe("An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and reasoning tokens.").optional(),
  "temperature": z.number().gte(0).lte(2).describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or top_p but not both.").optional(),
  "top_k": z.number().int().gte(0).describe("The number of highest probability vocabulary tokens to keep for top-k-filtering.").optional(),
  "top_p": z.number().gte(0).lte(1).describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.").optional(),
  "min_p": z.number().gte(0).lte(1).describe("Sets a minimum probability threshold for token selection. Tokens with probabilities below this value are filtered out.").optional(),
  "stop": z.union([z.string(), z.array(z.string()).min(1).max(4), z.any().nullable()]).describe("Up to 4 sequences where the API will stop generating further tokens. Defaults to null.").optional(),
  "stop_token_ids": z.array(z.number()).describe("Array of token IDs where the API will stop generating further tokens.").optional(),
  "stream": z.boolean().describe("Whether to stream back partial progress. Defaults to false.").optional(),
  "stream_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "user": z.string().describe("This field is discarded on the request but is supported in the Venice API for compatibility with OpenAPI clients.").optional(),
  "parallel_tool_calls": z.boolean().describe("Whether to enable parallel function calling during tool use.").optional(),
  "tools": z.array(z.object({ "id": z.string().optional(), "type": z.string().optional(), "function": z.object({ "description": z.string().optional(), "name": z.string(), "parameters": z.record(z.any().nullable()).optional() }).strict() }).describe("A tool that can be called by the model. Currently, only functions are supported as tools.")).nullable().describe("A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for.").optional(),
  "tool_choice": z.union([z.object({ "type": z.string(), "function": z.object({ "name": z.string() }).strict() }).strict(), z.string()]).optional(),
  "response_format": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFormat in which the response should be returned. Currently supports JSON Schema formatting.").optional(),
  "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br). Only applied when stream is false.").optional()
}
```

### generateimage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("The model to use for image generation."),
  "prompt": z.string().min(1).max(1500).describe("The description for the image. Character limit is model specific and is listed in the promptCharacterLimit setting in the model list endpoint."),
  "negative_prompt": z.string().max(1500).describe("A description of what should not be in the image. Character limit is model specific and is listed in the promptCharacterLimit constraint in the model list endpoint.").optional(),
  "style_preset": z.string().describe("An image style to apply to the image. Visit https://docs.venice.ai/apiv1imagegenerate for more details.").optional(),
  "height": z.number().int().gt(0).lte(1280).describe("Height of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint.").optional(),
  "width": z.number().int().gt(0).lte(1280).describe("Width of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint.").optional(),
  "steps": z.number().int().gt(0).lte(50).describe("Number of inference steps. The following models have reduced max steps from the global max: flux-dev: 30 max steps, flux-dev-uncensored: 30 max steps, stable-diffusion-3.5: 30 max steps, stable-diffusion-3.5-rev2: 30 max steps. These constraints are exposed in the model list endpoint for each model.").optional(),
  "cfg_scale": z.number().gt(0).lte(20).describe("CFG scale parameter. Higher values lead to more adherence to the prompt.").optional(),
  "seed": z.number().int().gte(-999999999).lte(999999999).describe("Random seed for generation. If not provided, a random seed will be used.").optional(),
  "lora_strength": z.number().int().gte(0).lte(100).describe("Lora strength for the model. Only applies if the model uses additional Loras.").optional(),
  "safe_mode": z.boolean().describe("Whether to use safe mode. If enabled, this will blur images that are classified as having adult content.").optional(),
  "return_binary": z.boolean().describe("Whether to return binary image data instead of base64.").optional(),
  "hide_watermark": z.boolean().describe("Whether to hide the Venice watermark. Venice may ignore this parameter for certain generated content.").optional(),
  "format": z.enum(["webp","png"]).describe("The image format to return. WebP are smaller and optimized for web use. PNG are higher quality but larger in file size. NOTE: This currently defaults to PNG but will change in the future to WebP. If you wish to receive PNGs, ensure your API call specifies the format.").optional(),
  "embed_exif_metadata": z.boolean().describe("Embed prompt generation information into the image's EXIF metadata.").optional(),
  "inpaint": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br). Only applied when return_binary is false.").optional()
}
```

### upscaleimage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_image_styles

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### listmodels

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.union([z.enum(["image","text","embedding","tts"]), z.enum(["all","code"])]).describe("Filter models by type. Use \"all\" to get all model types.").optional()
}
```

### listmodeltraits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.enum(["image","text","embedding","tts"]).describe("Filter models by type.").optional()
}
```

### listmodelcompatibilitymapping

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.enum(["image","text","embedding","tts"]).describe("Filter models by type.").optional()
}
```

### getapikeys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### deleteapikey

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the API key to delete").optional()
}
```

### createapikeys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "description": z.string().describe("The API Key description"),
  "apiKeyType": z.enum(["ADMIN","INFERENCE"]).describe("The API Key type. Admin keys have full access to the API while inference keys are only able to call inference endpoints."),
  "expiresAt": z.union([z.literal(""), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$"))]).describe("The API Key expiration date. If not provided, the key will not expire.").optional(),
  "consumptionLimit": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe API Key consumption limits for each epoch.")
}
```

### getapikeyratelimits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getapikeyratelimitlogs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getapikeygenerateweb3key

**Environment variables**



**Input schema**

```ts
{}
```

### postapikeygenerateweb3key

**Environment variables**



**Input schema**

```ts
{
  "description": z.string().describe("The API Key description").optional(),
  "apiKeyType": z.enum(["ADMIN","INFERENCE"]).describe("The API Key type. Admin keys have full access to the API while inference keys are only able to call inference endpoints."),
  "expiresAt": z.union([z.literal(""), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$"))]).describe("The API Key expiration date. If not provided, the key will not expire.").optional(),
  "consumptionLimit": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe API Key consumption limits for each epoch."),
  "signature": z.string().describe("The token, signed with the wallet's private key"),
  "token": z.string().describe("The token obtained from https://api.venice.ai/api/v1/api_keys/generate_web3_key"),
  "address": z.string().describe("The wallet's address")
}
```

### listcharacters

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createspeech

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.literal("tts-kokoro").describe("The model ID of a Venice TTS model.").optional(),
  "input": z.string().min(1).max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."),
  "voice": z.enum(["af_alloy","af_aoede","af_bella","af_heart","af_jadzia","af_jessica","af_kore","af_nicole","af_nova","af_river","af_sarah","af_sky","am_adam","am_echo","am_eric","am_fenrir","am_liam","am_michael","am_onyx","am_puck","am_santa","bf_alice","bf_emma","bf_lily","bm_daniel","bm_fable","bm_george","bm_lewis","ef_dora","em_alex","em_santa","ff_siwis","hf_alpha","hf_beta","hm_omega","hm_psi","if_sara","im_nicola","jf_alpha","jf_gongitsune","jf_nezumi","jf_tebukuro","jm_kumo","pf_dora","pm_alex","pm_santa","zf_xiaobei","zf_xiaoni","zf_xiaoxiao","zf_xiaoyi","zm_yunjian","zm_yunxi","zm_yunxia","zm_yunyang"]).describe("The voice to use when generating the audio.").optional(),
  "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in.").optional(),
  "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from 0.25 to 4.0. 1.0 is the default.").optional(),
  "streaming": z.boolean().describe("Should the content stream back sentence by sentence or be processed and returned as a complete audio file.").optional()
}
```
