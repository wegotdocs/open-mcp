import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("Path of the Flow, including the name. This locates the Flow in the Humanloop filesystem and is used as as a unique identifier. For example: `folder/name` or just `name`.").optional(),
  "id": z.string().describe("ID for an existing Flow.").optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A key-value object identifying the Flow Version.</property-description>"),
  "version_name": z.string().describe("Unique name for the Flow version. Version names must be unique for a given Flow.").optional(),
  "version_description": z.string().describe("Description of the version, e.g., the changes made in this version.").optional()
}