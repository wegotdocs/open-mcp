import { z } from "zod"

export const toolName = `createchatcompletion`
export const toolDescription = `/api/v1/chat/completions`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/chat/completions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [
    "Accept-Encoding"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "model",
    "messages",
    "venice_parameters",
    "frequency_penalty",
    "presence_penalty",
    "repetition_penalty",
    "n",
    "max_tokens",
    "max_temp",
    "min_temp",
    "max_completion_tokens",
    "temperature",
    "top_k",
    "top_p",
    "min_p",
    "stop",
    "stop_token_ids",
    "stream",
    "stream_options",
    "user",
    "parallel_tool_calls",
    "tools",
    "tool_choice",
    "response_format"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "model": z.string().describe("The ID of the model you wish to prompt. May also be a model trait, or a compatibility mapping. See the models endpoint for a list of models available to you.  You can use feature suffixes to enable features from the venice_parameters object. Please see \"Model Feature Suffix\" documentation for more details."), "messages": z.array(z.union([z.object({ "role": z.literal("user"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type."))]) }).describe("The user message is the input from the user. It is part of the conversation and is visible to the assistant."), z.object({ "role": z.literal("assistant"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type.")), z.any().nullable()]), "reasoning_content": z.string().nullable().optional(), "name": z.string().optional(), "tool_calls": z.array(z.any().nullable()).optional() }).describe("The assistant message contains the response from the LLM."), z.object({ "role": z.literal("tool"), "content": z.string(), "reasoning_content": z.string().nullable().optional(), "tool_calls": z.array(z.any().nullable()).optional(), "name": z.string().optional(), "tool_call_id": z.string() }).describe("The tool message is a special message that is used to call a tool. It is not part of the conversation and is not visible to the user."), z.object({ "role": z.literal("system"), "content": z.union([z.string(), z.array(z.object({ "type": z.literal("text"), "text": z.string().min(1).describe("The prompt text of the message. Must be at-least one character in length") }).strict().describe("Text message type."))]), "name": z.string().optional() }).describe("The system message is a special message that provides context to the model. It is not part of the conversation and is not visible to the user.")])).min(1).describe("A list of messages comprising the conversation so far. Depending on the model you use, different message types (modalities) are supported, like text and images. For compatibility purposes, the schema supports submitting multiple image_url messages, however, only the last image_url message will be passed to and processed by the model."), "venice_parameters": z.object({ "enable_web_search": z.enum(["auto","on","off"]).describe("Enable web search for this request. Defaults to off. On will force web search on the request. Auto will enable it based on the model's discretion. Citations will be returned either in the first chunk of a streaming result, or in the non streaming response."), "include_venice_system_prompt": z.boolean().describe("Whether to include the Venice supplied system prompts along side specified system prompts."), "character_slug": z.string().describe("The character slug of a public Venice character.").optional() }).describe("Unique parameters to Venice's API implementation.").optional(), "frequency_penalty": z.number().gte(-2).lte(2).describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim."), "presence_penalty": z.number().gte(-2).lte(2).describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics."), "repetition_penalty": z.number().gte(0).describe("The parameter for repetition penalty. 1.0 means no penalty. Values > 1.0 discourage repetition.").optional(), "n": z.number().int().describe("How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep n as 1 to minimize costs."), "max_tokens": z.number().int().describe("The maximum number of tokens that can be generated in the chat completion. This value can be used to control costs for text generated via API. This value is now deprecated in favor of max_completion_tokens.").optional(), "max_temp": z.number().gte(0).lte(2).describe("Maximum temperature value for dynamic temperature scaling.").optional(), "min_temp": z.number().gte(0).lte(2).describe("Minimum temperature value for dynamic temperature scaling.").optional(), "max_completion_tokens": z.number().int().describe("An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and reasoning tokens.").optional(), "temperature": z.number().gte(0).lte(2).describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or top_p but not both."), "top_k": z.number().int().gte(0).describe("The number of highest probability vocabulary tokens to keep for top-k-filtering.").optional(), "top_p": z.number().gte(0).lte(1).describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."), "min_p": z.number().gte(0).lte(1).describe("Sets a minimum probability threshold for token selection. Tokens with probabilities below this value are filtered out.").optional(), "stop": z.union([z.string(), z.array(z.string()).min(1).max(4), z.any().nullable()]).describe("Up to 4 sequences where the API will stop generating further tokens. Defaults to null.").optional(), "stop_token_ids": z.array(z.number()).describe("Array of token IDs where the API will stop generating further tokens.").optional(), "stream": z.boolean().describe("Whether to stream back partial progress. Defaults to false.").optional(), "stream_options": z.object({ "include_usage": z.boolean().describe("Whether to include usage information in the stream.").optional() }).optional(), "user": z.string().describe("This field is discarded on the request but is supported in the Venice API for compatibility with OpenAPI clients.").optional(), "parallel_tool_calls": z.boolean().describe("Whether to enable parallel function calling during tool use."), "tools": z.array(z.object({ "id": z.string().optional(), "type": z.string().optional(), "function": z.object({ "description": z.string().optional(), "name": z.string(), "parameters": z.record(z.any().nullable()).optional() }).strict() }).describe("A tool that can be called by the model. Currently, only functions are supported as tools.")).nullable().describe("A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for.").optional(), "tool_choice": z.union([z.object({ "type": z.string(), "function": z.object({ "name": z.string() }).strict() }).strict(), z.string()]).optional(), "response_format": z.object({ "type": z.literal("json_schema"), "json_schema": z.record(z.any().nullable()).describe("The JSON Schema that should be used to validate and format the response") }).strict().describe("Format in which the response should be returned. Currently supports JSON Schema formatting.").optional(), "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br). Only applied when stream is false.").optional() }).shape