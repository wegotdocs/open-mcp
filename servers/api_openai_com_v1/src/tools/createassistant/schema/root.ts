import { z } from "zod"

export const inputParamsSchema = {
  "model": z.union([z.string(), z.enum(["o3-mini","o3-mini-2025-01-31","o1","o1-2024-12-17","gpt-4o","gpt-4o-2024-11-20","gpt-4o-2024-08-06","gpt-4o-2024-05-13","gpt-4o-mini","gpt-4o-mini-2024-07-18","gpt-4.5-preview","gpt-4.5-preview-2025-02-27","gpt-4-turbo","gpt-4-turbo-2024-04-09","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0314","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106","gpt-3.5-turbo-0125","gpt-3.5-turbo-16k-0613"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"),
  "name": z.string().max(256).nullable().describe("The name of the assistant. The maximum length is 256 characters.\n").optional(),
  "description": z.string().max(512).nullable().describe("The description of the assistant. The maximum length is 512 characters.\n").optional(),
  "instructions": z.string().max(256000).nullable().describe("The system instructions that the assistant uses. The maximum length is 256,000 characters.\n").optional(),
  "reasoning_effort": z.enum(["low","medium","high"]).nullable().describe("**o-series models only** \n\nConstrains effort on reasoning for \n[reasoning models](https://platform.openai.com/docs/guides/reasoning).\nCurrently supported values are `low`, `medium`, and `high`. Reducing\nreasoning effort can result in faster responses and fewer tokens used\non reasoning in a response.\n").optional(),
  "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: `code_interpreter`") })).max(128).describe("A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.\n").optional(),
  "tool_resources": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tool_resources` to the tool, first call the tool `expandSchema` with \"/properties/tool_resources\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.\n</property-description>").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n</property-description>").optional(),
  "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
  "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
  "response_format": z.literal("auto").describe("`auto` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.\n\nSetting to `{ \"type\": \"json_schema\", \"json_schema\": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).\n\nSetting to `{ \"type\": \"json_object\" }` enables JSON mode, which ensures the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if `finish_reason=\"length\"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.\n").optional()
}