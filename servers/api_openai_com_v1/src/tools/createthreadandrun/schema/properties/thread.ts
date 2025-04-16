import { z } from "zod"

export const inputParamsSchema = {
  "messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The role of the entity that is creating the message. Allowed values include:\n- `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.\n- `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.\n"), "content": z.string().describe("The text contents of the message."), "attachments": z.array(z.object({ "file_id": z.string().describe("The ID of the file to attach to the message.").optional(), "tools": z.array(z.object({ "type": z.literal("code_interpreter").describe("The type of tool being defined: `code_interpreter`") })).describe("The tools to add this file to.").optional() })).nullable().describe("A list of files attached to the message, and the tools they should be added to.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).strict()).describe("A list of [messages](/docs/api-reference/messages) to start the thread with.").optional(),
  "tool_resources": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tool_resources` to the tool, first call the tool `expandSchema` with \"/properties/thread/properties/tool_resources\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.\n</property-description>").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/thread/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n</property-description>").optional()
}