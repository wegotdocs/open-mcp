import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("Path of the Tool, including the name. This locates the Tool in the Humanloop filesystem and is used as as a unique identifier. For example: `folder/name` or just `name`.").optional(),
  "id": z.string().describe("ID for an existing Tool.").optional(),
  "function": z.string().optional(),
  "source_code": z.string().describe("Code source of the Tool.").optional(),
  "setup_values": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `setup_values` to the tool, first call the tool `expandSchema` with \"/properties/setup_values\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Values needed to setup the Tool, defined in JSON Schema format: https://json-schema.org/</property-description>").optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional fields to describe the Tool. Helpful to separate Tool versions from each other with details on how they were created or used.</property-description>").optional(),
  "tool_type": z.string().optional(),
  "version_name": z.string().describe("Unique identifier for this Tool version. Each Tool can only have one version with a given name.").optional(),
  "version_description": z.string().describe("Description of the Version.").optional()
}