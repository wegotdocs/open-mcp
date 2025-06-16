import { z } from "zod"

export const inputParamsSchema = {
  "automount": z.boolean().describe("Auto-mount Volume after attach. `server` must be provided.").optional(),
  "format": z.string().describe("Format Volume after creation. One of: `xfs`, `ext4`").optional(),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n</property-description>").optional(),
  "location": z.string().describe("Location to create the Volume in (can be omitted if Server is specified)").optional(),
  "name": z.string().describe("Name of the volume"),
  "server": z.number().int().describe("Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)").optional(),
  "size": z.number().int().describe("Size of the Volume in GB")
}