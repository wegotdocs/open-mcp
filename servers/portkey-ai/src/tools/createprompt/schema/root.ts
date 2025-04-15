import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "collection_id": z.string().describe("UUID or slug of the collection"),
  "string": z.string().describe("Prompt template in string format"),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Parameters for the prompt</property-description>"),
  "functions": z.array(z.any()).describe("Functions for the prompt").optional(),
  "tools": z.array(z.any()).describe("Tools for the prompt").optional(),
  "tool_choice": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tool_choice` to the tool, first call the tool `expandSchema` with \"/properties/tool_choice\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Tool Choice for the prompt</property-description>").optional(),
  "model": z.string().describe("The model to use for the prompt").optional(),
  "virtual_key": z.string().describe("The virtual key to use for the prompt").optional(),
  "version_description": z.string().describe("The description of the prompt version").optional(),
  "template_metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `template_metadata` to the tool, first call the tool `expandSchema` with \"/properties/template_metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Metadata for the prompt</property-description>").optional()
}