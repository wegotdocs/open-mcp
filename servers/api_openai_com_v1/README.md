# @open-mcp/api_openai_com_v1

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_openai_com_v1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_openai_com_v1 \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add api_openai_com_v1 \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_openai_com_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_openai_com_v1"],
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

### listassistants

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}
```

### createassistant

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.string(), z.enum(["o3-mini","o3-mini-2025-01-31","o1","o1-2024-12-17","gpt-4o","gpt-4o-2024-11-20","gpt-4o-2024-08-06","gpt-4o-2024-05-13","gpt-4o-mini","gpt-4o-mini-2024-07-18","gpt-4.5-preview","gpt-4.5-preview-2025-02-27","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"),
  "name": z.string().max(256).nullable().describe("The name of the assistant. The maximum length is 256 characters.\n").optional(),
  "description": z.string().max(512).nullable().describe("The description of the assistant. The maximum length is 512 characters.\n").optional(),
  "instructions": z.string().max(256000).nullable().describe("The system instructions that the assistant uses. The maximum length is 256,000 characters.\n").optional(),
  "reasoning_effort": z.enum(["low","medium","high"]).nullable().describe("**o-series models only** \n\nConstrains effort on reasoning for \n[reasoning models](https://platform.openai.com/docs/guides/reasoning).\nCurrently supported values are \`low\`, \`medium\`, and \`high\`. Reducing\nreasoning effort can result in faster responses and fewer tokens used\non reasoning in a response.\n").optional(),
  "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).max(128).describe("A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types \`code_interpreter\`, \`file_search\`, or \`function\`.\n").optional(),
  "tool_resources": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the \`code_interpreter\` tool requires a list of file IDs, while the \`file_search\` tool requires a list of vector store IDs.\n").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
  "response_format": z.literal("auto").describe("\`auto\` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since \`gpt-3.5-turbo-1106\`.\n\nSetting to \`{ \"type\": \"json_schema\", \"json_schema\": {...} }\` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).\n\nSetting to \`{ \"type\": \"json_object\" }\` enables JSON mode, which ensures the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if \`finish_reason=\"length\"\`, which indicates the generation exceeded \`max_tokens\` or the conversation exceeded the max context length.\n").optional()
}
```

### getassistant

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "assistant_id": z.string().describe("The ID of the assistant to retrieve.")
}
```

### modifyassistant

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "assistant_id": z.string().describe("The ID of the assistant to modify."),
  "model": z.union([z.string(), z.enum(["o3-mini","o3-mini-2025-01-31","o1","o1-2024-12-17","gpt-4o","gpt-4o-2024-11-20","gpt-4o-2024-08-06","gpt-4o-2024-05-13","gpt-4o-mini","gpt-4o-mini-2024-07-18","gpt-4.5-preview","gpt-4.5-preview-2025-02-27","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n").optional(),
  "reasoning_effort": z.enum(["low","medium","high"]).nullable().describe("**o-series models only** \n\nConstrains effort on reasoning for \n[reasoning models](https://platform.openai.com/docs/guides/reasoning).\nCurrently supported values are \`low\`, \`medium\`, and \`high\`. Reducing\nreasoning effort can result in faster responses and fewer tokens used\non reasoning in a response.\n").optional(),
  "name": z.string().max(256).nullable().describe("The name of the assistant. The maximum length is 256 characters.\n").optional(),
  "description": z.string().max(512).nullable().describe("The description of the assistant. The maximum length is 512 characters.\n").optional(),
  "instructions": z.string().max(256000).nullable().describe("The system instructions that the assistant uses. The maximum length is 256,000 characters.\n").optional(),
  "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).max(128).describe("A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types \`code_interpreter\`, \`file_search\`, or \`function\`.\n").optional(),
  "tool_resources": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the \`code_interpreter\` tool requires a list of file IDs, while the \`file_search\` tool requires a list of vector store IDs.\n").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
  "response_format": z.literal("auto").describe("\`auto\` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since \`gpt-3.5-turbo-1106\`.\n\nSetting to \`{ \"type\": \"json_schema\", \"json_schema\": {...} }\` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).\n\nSetting to \`{ \"type\": \"json_object\" }\` enables JSON mode, which ensures the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if \`finish_reason=\"length\"\`, which indicates the generation exceeded \`max_tokens\` or the conversation exceeded the max context length.\n").optional()
}
```

### deleteassistant

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "assistant_id": z.string().describe("The ID of the assistant to delete.")
}
```

### createspeech

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.string(), z.enum(["tts-1","tts-1-hd","gpt-4o-mini-tts"])]).describe("One of the available [TTS models](/docs/models#tts): \`tts-1\`, \`tts-1-hd\` or \`gpt-4o-mini-tts\`.\n"),
  "input": z.string().max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."),
  "instructions": z.string().max(4096).describe("Control the voice of your generated audio with additional instructions. Does not work with \`tts-1\` or \`tts-1-hd\`.").optional(),
  "voice": z.union([z.string(), z.enum(["alloy","ash","ballad","coral","echo","fable","onyx","nova","sage","shimmer","verse"])]).describe("The voice to use when generating the audio. Supported voices are \`alloy\`, \`ash\`, \`ballad\`, \`coral\`, \`echo\`, \`fable\`, \`onyx\`, \`nova\`, \`sage\`, \`shimmer\`, and \`verse\`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options)."),
  "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in. Supported formats are \`mp3\`, \`opus\`, \`aac\`, \`flac\`, \`wav\`, and \`pcm\`.").optional(),
  "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from \`0.25\` to \`4.0\`. \`1.0\` is the default.").optional()
}
```

### createtranscription

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createtranslation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createbatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "input_file_id": z.string().describe("The ID of an uploaded file that contains requests for the new batch.\n\nSee [upload file](/docs/api-reference/files/create) for how to upload a file.\n\nYour input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose \`batch\`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.\n"),
  "endpoint": z.enum(["/v1/responses","/v1/chat/completions","/v1/embeddings","/v1/completions"]).describe("The endpoint to be used for all requests in the batch. Currently \`/v1/responses\`, \`/v1/chat/completions\`, \`/v1/embeddings\`, and \`/v1/completions\` are supported. Note that \`/v1/embeddings\` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch."),
  "completion_window": z.literal("24h").describe("The time frame within which the batch should be processed. Currently only \`24h\` is supported."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### listbatches

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional()
}
```

### retrievebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "batch_id": z.string().describe("The ID of the batch to retrieve.")
}
```

### cancelbatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "batch_id": z.string().describe("The ID of the batch to cancel.")
}
```

### listchatcompletions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("The model used to generate the Chat Completions.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(),
  "after": z.string().describe("Identifier for the last chat completion from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of Chat Completions to retrieve.").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order for Chat Completions by timestamp. Use \`asc\` for ascending order or \`desc\` for descending order. Defaults to \`asc\`.").optional()
}
```

### createchatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getchatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "completion_id": z.string().describe("The ID of the chat completion to retrieve.")
}
```

### updatechatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "completion_id": z.string().describe("The ID of the chat completion to update."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n")
}
```

### deletechatcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "completion_id": z.string().describe("The ID of the chat completion to delete.")
}
```

### getchatcompletionmessages

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "completion_id": z.string().describe("The ID of the chat completion to retrieve messages from."),
  "after": z.string().describe("Identifier for the last message from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of messages to retrieve.").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order for messages by timestamp. Use \`asc\` for ascending order or \`desc\` for descending order. Defaults to \`asc\`.").optional()
}
```

### createcompletion

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.string(), z.enum(["gpt-3.5-turbo-instruct","davinci-002","babbage-002"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"),
  "prompt": z.string().nullable().describe("The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.\n\nNote that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.\n"),
  "best_of": z.number().int().gte(0).lte(20).nullable().describe("Generates \`best_of\` completions server-side and returns the \"best\" (the one with the highest log probability per token). Results cannot be streamed.\n\nWhen used with \`n\`, \`best_of\` controls the number of candidate completions and \`n\` specifies how many to return – \`best_of\` must be greater than \`n\`.\n\n**Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for \`max_tokens\` and \`stop\`.\n").optional(),
  "echo": z.boolean().nullable().describe("Echo back the prompt in addition to the completion\n").optional(),
  "frequency_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.\n\n[See more information about frequency and presence penalties.](/docs/guides/text-generation)\n").optional(),
  "logit_bias": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nModify the likelihood of specified tokens appearing in the completion.\n\nAccepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.\n\nAs an example, you can pass \`{\"50256\": -100}\` to prevent the <|endoftext|> token from being generated.\n").optional(),
  "logprobs": z.number().int().gte(0).lte(5).nullable().describe("Include the log probabilities on the \`logprobs\` most likely output tokens, as well the chosen tokens. For example, if \`logprobs\` is 5, the API will return a list of the 5 most likely tokens. The API will always return the \`logprob\` of the sampled token, so there may be up to \`logprobs+1\` elements in the response.\n\nThe maximum value for \`logprobs\` is 5.\n").optional(),
  "max_tokens": z.number().int().gte(0).nullable().describe("The maximum number of [tokens](/tokenizer) that can be generated in the completion.\n\nThe token count of your prompt plus \`max_tokens\` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.\n").optional(),
  "n": z.number().int().gte(1).lte(128).nullable().describe("How many completions to generate for each prompt.\n\n**Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for \`max_tokens\` and \`stop\`.\n").optional(),
  "presence_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.\n\n[See more information about frequency and presence penalties.](/docs/guides/text-generation)\n").optional(),
  "seed": z.number().int().nullable().describe("If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same \`seed\` and parameters should return the same result.\n\nDeterminism is not guaranteed, and you should refer to the \`system_fingerprint\` response parameter to monitor changes in the backend.\n").optional(),
  "stop": z.string().nullable().nullable().describe("Up to 4 sequences where the API will stop generating further tokens. The\nreturned text will not contain the stop sequence.\n").optional(),
  "stream": z.boolean().nullable().describe("Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a \`data: [DONE]\` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).\n").optional(),
  "stream_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptions for streaming response. Only set this when you set \`stream: true\`.\n").optional(),
  "suffix": z.string().nullable().describe("The suffix that comes after a completion of inserted text.\n\nThis parameter is only supported for \`gpt-3.5-turbo-instruct\`.\n").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n\nWe generally recommend altering this or \`top_p\` but not both.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or \`temperature\` but not both.\n").optional(),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).\n").optional()
}
```

### createembedding

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "input": z.string().describe("The string that will be turned into an embedding.").describe("Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for \`text-embedding-ada-002\`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.\n"),
  "model": z.union([z.string(), z.enum(["text-embedding-ada-002","text-embedding-3-small","text-embedding-3-large"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"),
  "encoding_format": z.enum(["float","base64"]).describe("The format to return the embeddings in. Can be either \`float\` or [\`base64\`](https://pypi.org/project/pybase64/).").optional(),
  "dimensions": z.number().int().gte(1).describe("The number of dimensions the resulting output embeddings should have. Only supported in \`text-embedding-3\` and later models.\n").optional(),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).\n").optional()
}
```

### listfiles

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "purpose": z.string().describe("Only return files with the given purpose.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}
```

### createfile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### deletefile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "file_id": z.string().describe("The ID of the file to use for this request.")
}
```

### retrievefile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "file_id": z.string().describe("The ID of the file to use for this request.")
}
```

### downloadfile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "file_id": z.string().describe("The ID of the file to use for this request.")
}
```

### listfinetuningcheckpointpermissions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to get permissions for.\n"),
  "project_id": z.string().describe("The ID of the project to get permissions for.").optional(),
  "after": z.string().describe("Identifier for the last permission ID from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of permissions to retrieve.").optional(),
  "order": z.enum(["ascending","descending"]).describe("The order in which to retrieve permissions.").optional()
}
```

### createfinetuningcheckpointpermission

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to create a permission for.\n"),
  "project_ids": z.array(z.string()).describe("The project identifiers to grant access to.")
}
```

### deletefinetuningcheckpointpermission

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint permission to delete.\n")
}
```

### createfinetuningjob

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.string(), z.enum(["babbage-002","davinci-002","gpt-3.5-turbo","gpt-4o-mini"])]).describe("The name of the model to fine-tune. You can select one of the\n[supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).\n"),
  "training_file": z.string().describe("The ID of an uploaded file that contains training data.\n\nSee [upload file](/docs/api-reference/files/create) for how to upload a file.\n\nYour dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose \`fine-tune\`.\n\nThe contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.\n\nSee the [fine-tuning guide](/docs/guides/fine-tuning) for more details.\n"),
  "suffix": z.string().min(1).max(64).nullable().describe("A string of up to 64 characters that will be added to your fine-tuned model name.\n\nFor example, a \`suffix\` of \"custom-model-name\" would produce a model name like \`ft:gpt-4o-mini:openai:custom-model-name:7p4lURel\`.\n").optional(),
  "validation_file": z.string().nullable().describe("The ID of an uploaded file that contains validation data.\n\nIf you provide this file, the data is used to generate validation\nmetrics periodically during fine-tuning. These metrics can be viewed in\nthe fine-tuning results file.\nThe same data should not be present in both train and validation files.\n\nYour dataset must be formatted as a JSONL file. You must upload your file with the purpose \`fine-tune\`.\n\nSee the [fine-tuning guide](/docs/guides/fine-tuning) for more details.\n").optional(),
  "integrations": z.array(z.object({ "type": z.literal("wandb").describe("The type of integration to enable. Currently, only \"wandb\" (Weights and Biases) is supported.\n"), "wandb": z.object({ "project": z.string().describe("The name of the project that the new run will be created under.\n"), "name": z.string().nullable().describe("A display name to set for the run. If not set, we will use the Job ID as the name.\n").optional(), "entity": z.string().nullable().describe("The entity to use for the run. This allows you to set the team or username of the WandB user that you would\nlike associated with the run. If not set, the default entity for the registered WandB API key is used.\n").optional(), "tags": z.array(z.string()).describe("A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some\ndefault tags are generated by OpenAI: \"openai/finetune\", \"openai/{base-model}\", \"openai/{ftjob-abcdef}\".\n").optional() }).describe("The settings for your integration with Weights and Biases. This payload specifies the project that\nmetrics will be sent to. Optionally, you can set an explicit display name for your run, add tags\nto your run, and set a default entity (team, username, etc) to be associated with your run.\n") })).nullable().describe("A list of integrations to enable for your fine-tuning job.").optional(),
  "seed": z.number().int().gte(0).lte(2147483647).nullable().describe("The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.\nIf a seed is not specified, one will be generated for you.\n").optional(),
  "method": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe method used for fine-tuning.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### listpaginatedfinetuningjobs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "after": z.string().describe("Identifier for the last job from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of fine-tuning jobs to retrieve.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptional metadata filter. To filter, use the syntax \`metadata[k]=v\`. Alternatively, set \`metadata=null\` to indicate no metadata.\n").optional()
}
```

### retrievefinetuningjob

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job.\n")
}
```

### cancelfinetuningjob

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to cancel.\n")
}
```

### listfinetuningjobcheckpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get checkpoints for.\n"),
  "after": z.string().describe("Identifier for the last checkpoint ID from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of checkpoints to retrieve.").optional()
}
```

### listfinetuningevents

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get events for.\n"),
  "after": z.string().describe("Identifier for the last event from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of events to retrieve.").optional()
}
```

### createimageedit

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createimage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "prompt": z.string().describe("A text description of the desired image(s). The maximum length is 1000 characters for \`dall-e-2\` and 4000 characters for \`dall-e-3\`."),
  "model": z.union([z.string(), z.enum(["dall-e-2","dall-e-3"])]).nullable().describe("The model to use for image generation.").optional(),
  "n": z.number().int().gte(1).lte(10).nullable().describe("The number of images to generate. Must be between 1 and 10. For \`dall-e-3\`, only \`n=1\` is supported.").optional(),
  "quality": z.enum(["standard","hd"]).describe("The quality of the image that will be generated. \`hd\` creates images with finer details and greater consistency across the image. This param is only supported for \`dall-e-3\`.").optional(),
  "response_format": z.enum(["url","b64_json"]).nullable().describe("The format in which the generated images are returned. Must be one of \`url\` or \`b64_json\`. URLs are only valid for 60 minutes after the image has been generated.").optional(),
  "size": z.enum(["256x256","512x512","1024x1024","1792x1024","1024x1792"]).nullable().describe("The size of the generated images. Must be one of \`256x256\`, \`512x512\`, or \`1024x1024\` for \`dall-e-2\`. Must be one of \`1024x1024\`, \`1792x1024\`, or \`1024x1792\` for \`dall-e-3\` models.").optional(),
  "style": z.enum(["vivid","natural"]).nullable().describe("The style of the generated images. Must be one of \`vivid\` or \`natural\`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for \`dall-e-3\`.").optional(),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).\n").optional()
}
```

### createimagevariation

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
{}
```

### retrievemodel

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("The ID of the model to use for this request")
}
```

### deletemodel

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("The model to delete")
}
```

### createmoderation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "input": z.string().describe("A string of text to classify for moderation.").describe("Input (or inputs) to classify. Can be a single string, an array of strings, or\nan array of multi-modal input objects similar to other models.\n"),
  "model": z.union([z.string(), z.enum(["omni-moderation-latest","omni-moderation-2024-09-26","text-moderation-latest","text-moderation-stable"])]).describe("The content moderation model you would like to use. Learn more in\n[the moderation guide](/docs/guides/moderation), and learn about\navailable models [here](/docs/models#moderation).\n").optional()
}
```

### admin_api_keys_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "after": z.string().nullable().describe("Return keys with IDs that come after this ID in the pagination order.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order results by creation time, ascending or descending.").optional(),
  "limit": z.number().int().describe("Maximum number of keys to return.").optional()
}
```

### admin_api_keys_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string()
}
```

### admin_api_keys_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "key_id": z.string().describe("The ID of the API key.")
}
```

### admin_api_keys_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "key_id": z.string().describe("The ID of the API key to be deleted.")
}
```

### list_audit_logs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "effective_at": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nReturn only events whose \`effective_at\` (Unix seconds) is in this range.").optional(),
  "project_ids[]": z.array(z.string()).describe("Return only events for these projects.").optional(),
  "event_types[]": z.array(z.enum(["api_key.created","api_key.updated","api_key.deleted","invite.sent","invite.accepted","invite.deleted","login.succeeded","login.failed","logout.succeeded","logout.failed","organization.updated","project.created","project.updated","project.archived","service_account.created","service_account.updated","service_account.deleted","rate_limit.updated","rate_limit.deleted","user.added","user.updated","user.deleted"]).describe("The event type.")).describe("Return only events with a \`type\` in one of these values. For example, \`project.created\`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object).").optional(),
  "actor_ids[]": z.array(z.string()).describe("Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.").optional(),
  "actor_emails[]": z.array(z.string()).describe("Return only events performed by users with these emails.").optional(),
  "resource_ids[]": z.array(z.string()).describe("Return only events performed on these targets. For example, a project ID updated.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}
```

### usage_costs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.literal("1d").describe("Width of each time bucket in response. Currently only \`1d\` is supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only costs for these projects.").optional(),
  "group_by": z.array(z.enum(["project_id","line_item"])).describe("Group the costs by the specified fields. Support fields include \`project_id\`, \`line_item\` and any combination of them.").optional(),
  "limit": z.number().int().describe("A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### list_invites

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}
```

### inviteuser

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "email": z.string().describe("Send an email to this address"),
  "role": z.enum(["reader","owner"]).describe("\`owner\` or \`reader\`"),
  "projects": z.array(z.object({ "id": z.string().describe("Project's public ID"), "role": z.enum(["member","owner"]).describe("Project membership role") })).describe("An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior.").optional()
}
```

### retrieve_invite

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invite_id": z.string().describe("The ID of the invite to retrieve.")
}
```

### delete_invite

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invite_id": z.string().describe("The ID of the invite to delete.")
}
```

### list_projects

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "include_archived": z.boolean().describe("If \`true\` returns all projects including those that have been \`archived\`. Archived projects are not included by default.").optional()
}
```

### create_project

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The friendly name of the project, this name appears in reports.")
}
```

### retrieve_project

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project.")
}
```

### modify_project

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "name": z.string().describe("The updated name of the project, this name appears in reports.")
}
```

### list_project_api_keys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}
```

### retrieve_project_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "key_id": z.string().describe("The ID of the API key.")
}
```

### delete_project_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "key_id": z.string().describe("The ID of the API key.")
}
```

### archive_project

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project.")
}
```

### list_project_rate_limits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. The default is 100.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}
```

### update_project_rate_limits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "rate_limit_id": z.string().describe("The ID of the rate limit."),
  "max_requests_per_1_minute": z.number().int().describe("The maximum requests per minute.").optional(),
  "max_tokens_per_1_minute": z.number().int().describe("The maximum tokens per minute.").optional(),
  "max_images_per_1_minute": z.number().int().describe("The maximum images per minute. Only relevant for certain models.").optional(),
  "max_audio_megabytes_per_1_minute": z.number().int().describe("The maximum audio megabytes per minute. Only relevant for certain models.").optional(),
  "max_requests_per_1_day": z.number().int().describe("The maximum requests per day. Only relevant for certain models.").optional(),
  "batch_1_day_max_input_tokens": z.number().int().describe("The maximum batch input tokens per day. Only relevant for certain models.").optional()
}
```

### list_project_service_accounts

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}
```

### create_project_service_account

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "name": z.string().describe("The name of the service account being created.")
}
```

### retrieve_project_service_account

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "service_account_id": z.string().describe("The ID of the service account.")
}
```

### delete_project_service_account

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "service_account_id": z.string().describe("The ID of the service account.")
}
```

### list_project_users

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}
```

### create_project_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "user_id": z.string().describe("The ID of the user."),
  "role": z.enum(["owner","member"]).describe("\`owner\` or \`member\`")
}
```

### retrieve_project_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "user_id": z.string().describe("The ID of the user.")
}
```

### modify_project_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "user_id": z.string().describe("The ID of the user."),
  "role": z.enum(["owner","member"]).describe("\`owner\` or \`member\`")
}
```

### delete_project_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().describe("The ID of the project."),
  "user_id": z.string().describe("The ID of the user.")
}
```

### usage_audio_speeches

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_audio_transcriptions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_code_interpreter_sessions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "group_by": z.array(z.literal("project_id")).describe("Group the usage data by the specified fields. Support fields include \`project_id\`.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_completions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "batch": z.boolean().describe("If \`true\`, return batch jobs only. If \`false\`, return non-batch jobs only. By default, return both.\n").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model","batch"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\`, \`batch\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_embeddings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_images

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "sources": z.array(z.enum(["image.generation","image.edit","image.variation"])).describe("Return only usages for these sources. Possible values are \`image.generation\`, \`image.edit\`, \`image.variation\` or any combination of them.").optional(),
  "sizes": z.array(z.enum(["256x256","512x512","1024x1024","1792x1792","1024x1792"])).describe("Return only usages for these image sizes. Possible values are \`256x256\`, \`512x512\`, \`1024x1024\`, \`1792x1792\`, \`1024x1792\` or any combination of them.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model","size","source"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\`, \`size\`, \`source\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_moderations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "user_ids": z.array(z.string()).describe("Return only usage for these users.").optional(),
  "api_key_ids": z.array(z.string()).describe("Return only usage for these API keys.").optional(),
  "models": z.array(z.string()).describe("Return only usage for these models.").optional(),
  "group_by": z.array(z.enum(["project_id","user_id","api_key_id","model"])).describe("Group the usage data by the specified fields. Support fields include \`project_id\`, \`user_id\`, \`api_key_id\`, \`model\` or any combination of them.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### usage_vector_stores

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "start_time": z.number().int().describe("Start time (Unix seconds) of the query time range, inclusive."),
  "end_time": z.number().int().describe("End time (Unix seconds) of the query time range, exclusive.").optional(),
  "bucket_width": z.enum(["1m","1h","1d"]).describe("Width of each time bucket in response. Currently \`1m\`, \`1h\` and \`1d\` are supported, default to \`1d\`.").optional(),
  "project_ids": z.array(z.string()).describe("Return only usage for these projects.").optional(),
  "group_by": z.array(z.literal("project_id")).describe("Group the usage data by the specified fields. Support fields include \`project_id\`.").optional(),
  "limit": z.number().int().describe("Specifies the number of buckets to return.\n- \`bucket_width=1d\`: default: 7, max: 31\n- \`bucket_width=1h\`: default: 24, max: 168\n- \`bucket_width=1m\`: default: 60, max: 1440\n").optional(),
  "page": z.string().describe("A cursor for use in pagination. Corresponding to the \`next_page\` field from the previous response.").optional()
}
```

### list_users

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "emails": z.array(z.string()).describe("Filter by the email address of users.").optional()
}
```

### retrieve_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "user_id": z.string().describe("The ID of the user.")
}
```

### modify_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "user_id": z.string().describe("The ID of the user."),
  "role": z.enum(["owner","reader"]).describe("\`owner\` or \`reader\`")
}
```

### delete_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "user_id": z.string().describe("The ID of the user.")
}
```

### create_realtime_session

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "modalities": z.any().describe("The set of modalities the model can respond with. To disable audio,\nset this to [\"text\"].\n").optional(),
  "model": z.enum(["gpt-4o-realtime-preview","gpt-4o-realtime-preview-2024-10-01","gpt-4o-realtime-preview-2024-12-17","gpt-4o-mini-realtime-preview","gpt-4o-mini-realtime-preview-2024-12-17"]).describe("The Realtime model used for this session.\n").optional(),
  "instructions": z.string().describe("The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. \"be extremely succinct\", \"act friendly\", \"here are examples of good  responses\") and on audio behavior (e.g. \"talk quickly\", \"inject emotion  into your voice\", \"laugh frequently\"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.\n\nNote that the server sets default instructions which will be used if this  field is not set and are visible in the \`session.created\` event at the  start of the session.\n").optional(),
  "voice": z.union([z.string(), z.enum(["alloy","ash","ballad","coral","echo","fable","onyx","nova","sage","shimmer","verse"])]).describe("The voice the model uses to respond. Voice cannot be changed during the \nsession once the model has responded with audio at least once. Current \nvoice options are \`alloy\`, \`ash\`, \`ballad\`, \`coral\`, \`echo\`, \`fable\`,\n\`onyx\`, \`nova\`, \`sage\`, \`shimmer\`, and \`verse\`.\n").optional(),
  "input_audio_format": z.enum(["pcm16","g711_ulaw","g711_alaw"]).describe("The format of input audio. Options are \`pcm16\`, \`g711_ulaw\`, or \`g711_alaw\`.\nFor \`pcm16\`, input audio must be 16-bit PCM at a 24kHz sample rate, \nsingle channel (mono), and little-endian byte order.\n").optional(),
  "output_audio_format": z.enum(["pcm16","g711_ulaw","g711_alaw"]).describe("The format of output audio. Options are \`pcm16\`, \`g711_ulaw\`, or \`g711_alaw\`.\nFor \`pcm16\`, output audio is sampled at a rate of 24kHz.\n").optional(),
  "input_audio_transcription": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for input audio transcription, defaults to off and can be  set to \`null\` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.\n").optional(),
  "turn_detection": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for turn detection, ether Server VAD or Semantic VAD. This can be set to \`null\` to turn off, in which case the client must manually trigger model response.\nServer VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.\nSemantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with \"uhhm\", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.\n").optional(),
  "input_audio_noise_reduction": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for input audio noise reduction. This can be set to \`null\` to turn off.\nNoise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.\nFiltering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.\n").optional(),
  "tools": z.array(z.object({ "type": z.literal("function").describe("The type of the tool, i.e. \`function\`.").optional(), "name": z.string().describe("The name of the function.").optional(), "description": z.string().describe("The description of the function, including guidance on when and how \nto call it, and guidance about what to tell the user when calling \n(if anything).\n").optional(), "parameters": z.record(z.any()).describe("Parameters of the function in JSON Schema.").optional() })).describe("Tools (functions) available to the model.").optional(),
  "tool_choice": z.string().describe("How the model chooses tools. Options are \`auto\`, \`none\`, \`required\`, or \nspecify a function.\n").optional(),
  "temperature": z.number().describe("Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.\n").optional(),
  "max_response_output_tokens": z.number().int().describe("Maximum number of output tokens for a single assistant response,\ninclusive of tool calls. Provide an integer between 1 and 4096 to\nlimit output tokens, or \`inf\` for the maximum available tokens for a\ngiven model. Defaults to \`inf\`.\n").optional()
}
```

### create_realtime_transcription_session

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "modalities": z.any().describe("The set of modalities the model can respond with. To disable audio,\nset this to [\"text\"].\n").optional(),
  "input_audio_format": z.enum(["pcm16","g711_ulaw","g711_alaw"]).describe("The format of input audio. Options are \`pcm16\`, \`g711_ulaw\`, or \`g711_alaw\`.\nFor \`pcm16\`, input audio must be 16-bit PCM at a 24kHz sample rate, \nsingle channel (mono), and little-endian byte order.\n").optional(),
  "input_audio_transcription": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.\n").optional(),
  "turn_detection": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for turn detection, ether Server VAD or Semantic VAD. This can be set to \`null\` to turn off, in which case the client must manually trigger model response.\nServer VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.\nSemantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with \"uhhm\", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.\n").optional(),
  "input_audio_noise_reduction": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for input audio noise reduction. This can be set to \`null\` to turn off.\nNoise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.\nFiltering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.\n").optional(),
  "include": z.array(z.string()).describe("The set of items to include in the transcription. Current available items are:\n- \`item.input_audio_transcription.logprobs\`\n").optional()
}
```

### createresponse

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getresponse

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "response_id": z.string().describe("The ID of the response to retrieve."),
  "include": z.array(z.enum(["file_search_call.results","message.input_image.image_url","computer_call_output.output.image_url"]).describe("Specify additional output data to include in the model response. Currently\nsupported values are:\n- \`file_search_call.results\`: Include the search results of\n  the file search tool call.\n- \`message.input_image.image_url\`: Include image urls from the input message.\n- \`computer_call_output.output.image_url\`: Include image urls from the computer call output.\n")).describe("Specify additional output data to include in the response. Currently\nsupported values are:\n- \`file_search_call.results\`: Include the search results of\n  the file search tool call.\n- \`message.input_image.image_url\`: Include image urls from the input message.\n- \`computer_call_output.output.image_url\`: Include image urls from the computer call output.\n").optional()
}
```

### deleteresponse

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "response_id": z.string().describe("The ID of the response to delete.")
}
```

### listinputitems

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "response_id": z.string().describe("The ID of the response to retrieve input items for."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between\n1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("The order to return the input items in. Default is \`asc\`.\n- \`asc\`: Return the input items in ascending order.\n- \`desc\`: Return the input items in descending order.\n").optional(),
  "after": z.string().describe("An item ID to list items after, used in pagination.\n").optional(),
  "before": z.string().describe("An item ID to list items before, used in pagination.\n").optional()
}
```

### createthread

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- \`user\`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- \`assistant\`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"), "content": z.string().describe("The text contents of the message."), "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).strict()).describe("A list of [messages](/docs/api-reference/messages) to start the thread with.").optional(),
  "tool_resources": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the \`code_interpreter\` tool requires a list of file IDs, while the \`file_search\` tool requires a list of vector store IDs.\n").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### createthreadandrun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "assistant_id": z.string().describe("The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run."),
  "thread": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nOptions to create a new thread. If no thread is provided when running a \nrequest, an empty thread will be created.\n").optional(),
  "model": z.union([z.string(), z.enum(["gpt-4o","gpt-4o-2024-11-20","gpt-4o-2024-08-06","gpt-4o-2024-05-13","gpt-4o-mini","gpt-4o-mini-2024-07-18","gpt-4.5-preview","gpt-4.5-preview-2025-02-27","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).nullable().describe("The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.").optional(),
  "instructions": z.string().nullable().describe("Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis.").optional(),
  "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).max(20).nullable().describe("Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.").optional(),
  "tool_resources": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the \`code_interpreter\` tool requires a list of file IDs, while the \`file_search\` tool requires a list of vector store IDs.\n").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
  "stream": z.boolean().nullable().describe("If \`true\`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a \`data: [DONE]\` message.\n").optional(),
  "max_prompt_tokens": z.number().int().gte(256).nullable().describe("The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status \`incomplete\`. See \`incomplete_details\` for more info.\n").optional(),
  "max_completion_tokens": z.number().int().gte(256).nullable().describe("The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status \`incomplete\`. See \`incomplete_details\` for more info.\n").optional(),
  "truncation_strategy": z.string().optional(),
  "tool_choice": z.string().optional(),
  "parallel_tool_calls": z.boolean().describe("Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use.").optional(),
  "response_format": z.literal("auto").describe("\`auto\` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since \`gpt-3.5-turbo-1106\`.\n\nSetting to \`{ \"type\": \"json_schema\", \"json_schema\": {...} }\` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).\n\nSetting to \`{ \"type\": \"json_object\" }\` enables JSON mode, which ensures the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if \`finish_reason=\"length\"\`, which indicates the generation exceeded \`max_tokens\` or the conversation exceeded the max context length.\n").optional()
}
```

### getthread

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to retrieve.")
}
```

### modifythread

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to modify. Only the \`metadata\` can be modified."),
  "tool_resources": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the \`code_interpreter\` tool requires a list of file IDs, while the \`file_search\` tool requires a list of vector store IDs.\n").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### deletethread

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to delete.")
}
```

### listmessages

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) the messages belong to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
  "run_id": z.string().describe("Filter messages by the run ID that generated them.\n").optional()
}
```

### createmessage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) to create a message for."),
  "role": z.enum(["user","assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- \`user\`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- \`assistant\`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"),
  "content": z.string().describe("The text contents of the message."),
  "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### getmessage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) to which this message belongs."),
  "message_id": z.string().describe("The ID of the message to retrieve.")
}
```

### modifymessage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to which this message belongs."),
  "message_id": z.string().describe("The ID of the message to modify."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### deletemessage

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to which this message belongs."),
  "message_id": z.string().describe("The ID of the message to delete.")
}
```

### listruns

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread the run belongs to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}
```

### createrun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to run."),
  "include[]": z.array(z.literal("step_details.tool_calls[*].file_search.results[*].content")).describe("A list of additional fields to include in the response. Currently the only supported value is \`step_details.tool_calls[*].file_search.results[*].content\` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n").optional(),
  "assistant_id": z.string().describe("The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run."),
  "model": z.union([z.string(), z.enum(["o3-mini","o3-mini-2025-01-31","o1","o1-2024-12-17","gpt-4o","gpt-4o-2024-11-20","gpt-4o-2024-08-06","gpt-4o-2024-05-13","gpt-4o-mini","gpt-4o-mini-2024-07-18","gpt-4.5-preview","gpt-4.5-preview-2025-02-27","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).nullable().describe("The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.").optional(),
  "reasoning_effort": z.enum(["low","medium","high"]).nullable().describe("**o-series models only** \n\nConstrains effort on reasoning for \n[reasoning models](https://platform.openai.com/docs/guides/reasoning).\nCurrently supported values are \`low\`, \`medium\`, and \`high\`. Reducing\nreasoning effort can result in faster responses and fewer tokens used\non reasoning in a response.\n").optional(),
  "instructions": z.string().nullable().describe("Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis.").optional(),
  "additional_instructions": z.string().nullable().describe("Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions.").optional(),
  "additional_messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- \`user\`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- \`assistant\`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"), "content": z.string().describe("The text contents of the message."), "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).strict()).nullable().describe("Adds additional messages to the thread before creating the run.").optional(),
  "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: \`code_interpreter\`") })).max(20).nullable().describe("Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
  "stream": z.boolean().nullable().describe("If \`true\`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a \`data: [DONE]\` message.\n").optional(),
  "max_prompt_tokens": z.number().int().gte(256).nullable().describe("The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status \`incomplete\`. See \`incomplete_details\` for more info.\n").optional(),
  "max_completion_tokens": z.number().int().gte(256).nullable().describe("The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status \`incomplete\`. See \`incomplete_details\` for more info.\n").optional(),
  "truncation_strategy": z.string().optional(),
  "tool_choice": z.string().optional(),
  "parallel_tool_calls": z.boolean().describe("Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use.").optional(),
  "response_format": z.literal("auto").describe("\`auto\` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since \`gpt-3.5-turbo-1106\`.\n\nSetting to \`{ \"type\": \"json_schema\", \"json_schema\": {...} }\` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).\n\nSetting to \`{ \"type\": \"json_object\" }\` enables JSON mode, which ensures the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if \`finish_reason=\"length\"\`, which indicates the generation exceeded \`max_tokens\` or the conversation exceeded the max context length.\n").optional()
}
```

### getrun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) that was run."),
  "run_id": z.string().describe("The ID of the run to retrieve.")
}
```

### modifyrun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) that was run."),
  "run_id": z.string().describe("The ID of the run to modify."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### cancelrun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to which this run belongs."),
  "run_id": z.string().describe("The ID of the run to cancel.")
}
```

### listrunsteps

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread the run and run steps belong to."),
  "run_id": z.string().describe("The ID of the run the run steps belong to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
  "include[]": z.array(z.literal("step_details.tool_calls[*].file_search.results[*].content")).describe("A list of additional fields to include in the response. Currently the only supported value is \`step_details.tool_calls[*].file_search.results[*].content\` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n").optional()
}
```

### getrunstep

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the thread to which the run and run step belongs."),
  "run_id": z.string().describe("The ID of the run to which the run step belongs."),
  "step_id": z.string().describe("The ID of the run step to retrieve."),
  "include[]": z.array(z.literal("step_details.tool_calls[*].file_search.results[*].content")).describe("A list of additional fields to include in the response. Currently the only supported value is \`step_details.tool_calls[*].file_search.results[*].content\` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n").optional()
}
```

### submittoolouputstorun

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) to which this run belongs."),
  "run_id": z.string().describe("The ID of the run that requires the tool output submission."),
  "tool_outputs": z.array(z.object({ "tool_call_id": z.string().describe("The ID of the tool call in the \`required_action\` object within the run object the output is being submitted for.").optional(), "output": z.string().describe("The output of the tool call to be submitted to continue the run.").optional() })).describe("A list of tools for which the outputs are being submitted."),
  "stream": z.boolean().nullable().describe("If \`true\`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a \`data: [DONE]\` message.\n").optional()
}
```

### createupload

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "filename": z.string().describe("The name of the file to upload.\n"),
  "purpose": z.enum(["assistants","batch","fine-tune","vision"]).describe("The intended purpose of the uploaded file.\n\nSee the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).\n"),
  "bytes": z.number().int().describe("The number of bytes in the file you are uploading.\n"),
  "mime_type": z.string().describe("The MIME type of the file.\n\nThis must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.\n")
}
```

### cancelupload

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "upload_id": z.string().describe("The ID of the Upload.\n")
}
```

### completeupload

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "upload_id": z.string().describe("The ID of the Upload.\n"),
  "part_ids": z.array(z.string()).describe("The ordered list of Part IDs.\n"),
  "md5": z.string().describe("The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.\n").optional()
}
```

### adduploadpart

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "upload_id": z.string().describe("The ID of the Upload.\n")
}
```

### listvectorstores

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}
```

### createvectorstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "file_ids": z.array(z.string()).max(500).describe("A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like \`file_search\` that can access files.").optional(),
  "name": z.string().describe("The name of the vector store.").optional(),
  "expires_after": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe expiration policy for a vector store.").optional(),
  "chunking_strategy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe chunking strategy used to chunk the file(s). If not set, will use the \`auto\` strategy. Only applicable if \`file_ids\` is non-empty.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### getvectorstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store to retrieve.")
}
```

### modifyvectorstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store to modify."),
  "name": z.string().nullable().describe("The name of the vector store.").optional(),
  "expires_after": z.string().optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional()
}
```

### deletevectorstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store to delete.")
}
```

### createvectorstorefilebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store for which to create a File Batch.\n"),
  "file_ids": z.array(z.string()).min(1).max(500).describe("A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like \`file_search\` that can access files."),
  "chunking_strategy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe chunking strategy used to chunk the file(s). If not set, will use the \`auto\` strategy.").optional(),
  "attributes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be \nuseful for storing additional information about the object in a structured \nformat, and querying for objects via API or the dashboard. Keys are strings \nwith a maximum length of 64 characters. Values are strings with a maximum \nlength of 512 characters, booleans, or numbers.\n").optional()
}
```

### getvectorstorefilebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the file batch belongs to."),
  "batch_id": z.string().describe("The ID of the file batch being retrieved.")
}
```

### cancelvectorstorefilebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the file batch belongs to."),
  "batch_id": z.string().describe("The ID of the file batch to cancel.")
}
```

### listfilesinvectorstorebatch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the files belong to."),
  "batch_id": z.string().describe("The ID of the file batch that the files belong to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
  "filter": z.enum(["in_progress","completed","failed","cancelled"]).describe("Filter by file status. One of \`in_progress\`, \`completed\`, \`failed\`, \`cancelled\`.").optional()
}
```

### listvectorstorefiles

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the files belong to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the \`created_at\` timestamp of the objects. \`asc\` for ascending order and \`desc\` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. \`after\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. \`before\` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
  "filter": z.enum(["in_progress","completed","failed","cancelled"]).describe("Filter by file status. One of \`in_progress\`, \`completed\`, \`failed\`, \`cancelled\`.").optional()
}
```

### createvectorstorefile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store for which to create a File.\n"),
  "file_id": z.string().describe("A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like \`file_search\` that can access files."),
  "chunking_strategy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe chunking strategy used to chunk the file(s). If not set, will use the \`auto\` strategy.").optional(),
  "attributes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be \nuseful for storing additional information about the object in a structured \nformat, and querying for objects via API or the dashboard. Keys are strings \nwith a maximum length of 64 characters. Values are strings with a maximum \nlength of 512 characters, booleans, or numbers.\n").optional()
}
```

### getvectorstorefile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the file belongs to."),
  "file_id": z.string().describe("The ID of the file being retrieved.")
}
```

### deletevectorstorefile

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store that the file belongs to."),
  "file_id": z.string().describe("The ID of the file to delete.")
}
```

### updatevectorstorefileattributes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store the file belongs to."),
  "file_id": z.string().describe("The ID of the file to update attributes."),
  "attributes": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSet of 16 key-value pairs that can be attached to an object. This can be \nuseful for storing additional information about the object in a structured \nformat, and querying for objects via API or the dashboard. Keys are strings \nwith a maximum length of 64 characters. Values are strings with a maximum \nlength of 512 characters, booleans, or numbers.\n")
}
```

### retrievevectorstorefilecontent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store."),
  "file_id": z.string().describe("The ID of the file within the vector store.")
}
```

### searchvectorstore

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vector_store_id": z.string().describe("The ID of the vector store to search."),
  "query": z.string().describe("A query string for a search"),
  "rewrite_query": z.boolean().describe("Whether to rewrite the natural language query for vector search.").optional(),
  "max_num_results": z.number().int().gte(1).lte(50).describe("The maximum number of results to return. This number should be between 1 and 50 inclusive.").optional(),
  "filters": z.object({ "type": z.enum(["eq","ne","gt","gte","lt","lte"]).describe("Specifies the comparison operator: \`eq\`, \`ne\`, \`gt\`, \`gte\`, \`lt\`, \`lte\`.\n- \`eq\`: equals\n- \`ne\`: not equal\n- \`gt\`: greater than\n- \`gte\`: greater than or equal\n- \`lt\`: less than\n- \`lte\`: less than or equal\n"), "key": z.string().describe("The key to compare against the value."), "value": z.string().describe("The value to compare against the attribute key; supports string, number, or boolean types.") }).strict().describe("A filter used to compare a specified attribute key to a given value using a defined comparison operation.\n").describe("A filter to apply based on file attributes.").optional(),
  "ranking_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRanking options for search.").optional()
}
```
