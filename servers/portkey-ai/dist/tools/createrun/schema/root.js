import { z } from "zod";
export const inputParams = {
    "thread_id": z.string().describe("The ID of the thread to run."),
    "assistant_id": z.string().describe("The ID of the [assistant](https://platform.openai.com/docs/api-reference/assistants) to use to execute this run."),
    "model": z.union([z.string(), z.enum(["gpt-4o", "gpt-4o-2024-05-13", "gpt-4-turbo", "gpt-4-turbo-2024-04-09", "gpt-4-0125-preview", "gpt-4-turbo-preview", "gpt-4-1106-preview", "gpt-4-vision-preview", "gpt-4", "gpt-4-0314", "gpt-4-0613", "gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-0613", "gpt-3.5-turbo", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-0613", "gpt-3.5-turbo-1106", "gpt-3.5-turbo-0125", "gpt-3.5-turbo-16k-0613"])]).nullable().describe("The ID of the [Model](https://platform.openai.com/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.").optional(),
    "instructions": z.string().nullable().describe("Overrides the [instructions](https://platform.openai.com/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis.").optional(),
    "additional_instructions": z.string().nullable().describe("Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions.").optional(),
    "additional_messages": z.array(z.object({ "role": z.enum(["user", "assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"), "content": z.string().describe("The text contents of the message."), "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: `code_interpreter`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(), "metadata": z.record(z.any()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n").optional() }).strict()).nullable().describe("Adds additional messages to the thread before creating the run.").optional(),
    "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: `code_interpreter`") })).max(20).nullable().describe("Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.").optional(),
    "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.\n</property-description>").optional(),
    "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n").optional(),
    "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or temperature but not both.\n").optional(),
    "stream": z.boolean().nullable().describe("If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.\n").optional(),
    "max_prompt_tokens": z.number().int().gte(256).nullable().describe("The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.\n").optional(),
    "max_completion_tokens": z.number().int().gte(256).nullable().describe("The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.\n").optional(),
    "truncation_strategy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `truncation_strategy` to the tool, first call the tool `expandSchema` with \"/properties/truncation_strategy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run.</property-description>").optional(),
    "tool_choice": z.enum(["none", "auto", "required"]).describe("`none` means the model will not call any tools and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools before responding to the user.\n").nullable().describe("Controls which (if any) tool is called by the model.\n`none` means the model will not call any tools and instead generates a message.\n`auto` is the default value and means the model can pick between generating a message or calling one or more tools.\n`required` means the model must call one or more tools before responding to the user.\nSpecifying a particular tool like `{\"type\": \"file_search\"}` or `{\"type\": \"function\", \"function\": {\"name\": \"my_function\"}}` forces the model to call that tool.\n").optional(),
    "parallel_tool_calls": z.boolean().describe("Whether to enable [parallel function calling](https://platform.openai.com/docs/guides/function-calling/parallel-function-calling) during tool use.").optional(),
    "response_format": z.enum(["none", "auto"]).describe("`auto` is the default value\n").nullable().describe("Specifies the format that the model must output. Compatible with [GPT-4o](https://platform.openai.com/docs/models/gpt-4o), [GPT-4 Turbo](https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.\n\nSetting to `{ \"type\": \"json_object\" }` enables JSON mode, which guarantees the message the model generates is valid JSON.\n\n**Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly \"stuck\" request. Also note that the message content may be partially cut off if `finish_reason=\"length\"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.\n").optional()
};
