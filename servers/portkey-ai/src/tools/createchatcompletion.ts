import { z } from "zod"

export const toolName = `createchatcompletion`
export const toolDescription = `Chat`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/chat/completions`
export const method = `post`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "x-portkey-virtual-key",
    "value": "<mcp-env-var>X_PORTKEY_VIRTUAL_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_VIRTUAL_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-virtual-key"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "x-portkey-provider",
    "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_PROVIDER",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-provider"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "x-portkey-config",
    "value": "<mcp-env-var>X_PORTKEY_CONFIG</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_CONFIG",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-config"
  },
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "x-portkey-provider",
    "value": "<mcp-env-var>X_PORTKEY_PROVIDER</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_PROVIDER",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-provider"
  },
  {
    "key": "x-portkey-custom-host",
    "value": "<mcp-env-var>X_PORTKEY_CUSTOM_HOST</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_CUSTOM_HOST",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-custom-host"
  }
]
export const keys = {
  "query": [],
  "header": [
    "x-portkey-trace-id",
    "x-portkey-span-id",
    "x-portkey-parent-span-id",
    "x-portkey-span-name",
    "x-portkey-metadata",
    "x-portkey-cache-namespace",
    "x-portkey-cache-force-refresh"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "messages",
    "model",
    "frequency_penalty",
    "logit_bias",
    "logprobs",
    "top_logprobs",
    "max_tokens",
    "n",
    "presence_penalty",
    "response_format",
    "seed",
    "stop",
    "stream",
    "stream_options",
    "temperature",
    "top_p",
    "tools",
    "tool_choice",
    "parallel_tool_calls",
    "user"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "messages": z.array(z.object({ "content": z.string().describe("The contents of the system message."), "role": z.literal("system").describe("The role of the messages author, in this case `system`."), "name": z.string().describe("An optional name for the participant. Provides the model information to differentiate between participants of the same role.").optional() })).min(1).describe("A list of messages comprising the conversation so far. [Example Python code](https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models)."), "model": z.union([z.string(), z.enum(["gpt-4o","gpt-4o-2024-05-13","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0301","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).describe("ID of the model to use. See the [model endpoint compatibility](https://platform.openai.com/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API."), "frequency_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.\n\n[See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/text-generation/parameter-details)\n"), "logit_bias": z.record(z.number().int()).nullable().describe("Modify the likelihood of specified tokens appearing in the completion.\n\nAccepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.\n"), "logprobs": z.boolean().nullable().describe("Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`."), "top_logprobs": z.number().int().gte(0).lte(20).nullable().describe("An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used.").optional(), "max_tokens": z.number().int().nullable().describe("The maximum number of [tokens](https://platform.openai.com/tokenizer?view=bpe) that can be generated in the chat completion.\n\nThe total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.\n").optional(), "n": z.number().int().gte(1).lte(128).nullable().describe("How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs."), "presence_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.\n\n[See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/text-generation/parameter-details)\n"), "response_format": z.record(z.any()).and(z.object({ "type": z.literal("text").describe("The type of response format being defined. Always `text`.") }).describe("Default response format. Used to generate text responses.\n")).describe("An object specifying the format that the model must output.\n\nSetting to `{ \"type\": \"json_schema\", \"json_schema\": {...} }`enables Structured Outputs which ensures the model will match your\nsupplied JSON schema. Works across all the providers that support this functionality. [OpenAI & Azure OpenAI](/integrations/llms/openai/structured-outputs), [Gemini & Vertex AI](/integrations/llms/vertex-ai/controlled-generations).\n\nSetting to `{ \"type\": \"json_object\" }` enables the older JSON mode, which ensures the message the model generates is valid JSON.\n\nUsing `json_schema` is preferred for models that support it.\n").optional(), "seed": z.number().int().gte(-9223372036854776000).lte(9223372036854776000).nullable().describe("This feature is in Beta.\nIf specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.\nDeterminism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.\n").optional(), "stop": z.string().nullable().describe("Up to 4 sequences where the API will stop generating further tokens.\n"), "stream": z.boolean().nullable().describe("If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-UShttps://platform.openai.com/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).\n"), "stream_options": z.object({ "include_usage": z.boolean().describe("If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array. All other chunks will also include a `usage` field, but with a null value.\n").optional() }).nullable().describe("Options for streaming response. Only set this when you set `stream: true`.\n"), "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n\nWe generally recommend altering this or `top_p` but not both.\n"), "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or `temperature` but not both.\n"), "tools": z.array(z.object({ "type": z.literal("function").describe("The type of the tool. Currently, only `function` is supported."), "function": z.object({ "description": z.string().describe("A description of what the function does, used by the model to choose when and how to call the function.").optional(), "name": z.string().describe("The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64."), "parameters": z.record(z.any()).describe("The parameters the functions accepts, described as a JSON Schema object. See the [guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format. \n\nOmitting `parameters` defines a function with an empty parameter list.").optional() }) })).describe("A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.\n").optional(), "tool_choice": z.enum(["none","auto","required"]).describe("`none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools.\n").describe("Controls which (if any) tool is called by the model.\n`none` means the model will not call any tool and instead generates a message.\n`auto` means the model can pick between generating a message or calling one or more tools.\n`required` means the model must call one or more tools.\nSpecifying a particular tool via `{\"type\": \"function\", \"function\": {\"name\": \"my_function\"}}` forces the model to call that tool.\n\n`none` is the default when no tools are present. `auto` is the default if tools are present.\n").optional(), "parallel_tool_calls": z.boolean().describe("Whether to enable [parallel function calling](https://platform.openai.com/docs/guides/function-calling/parallel-function-calling) during tool use."), "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).\n").optional(), "x-portkey-trace-id": z.string().describe("An ID you can pass to refer to one or more requests later on. If not provided, Portkey generates a trace ID automatically for each request. [Docs](https://portkey.ai/docs/product/observability/traces)").optional(), "x-portkey-span-id": z.string().describe("An ID you can pass to refer to a span under a trace.").optional(), "x-portkey-parent-span-id": z.string().describe("Link a child span to a parent span").optional(), "x-portkey-span-name": z.string().describe("Name for the Span ID").optional(), "x-portkey-metadata": z.record(z.any()).describe("Pass any arbitrary metadata along with your request").optional(), "x-portkey-cache-namespace": z.string().describe("Partition your Portkey cache store based on custom strings, ignoring metadata and other headers").optional(), "x-portkey-cache-force-refresh": z.boolean().describe("Forces a cache refresh for your request by making a new API call and storing the updated value").optional() }).shape