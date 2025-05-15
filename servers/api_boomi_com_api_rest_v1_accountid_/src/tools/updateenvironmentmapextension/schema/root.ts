import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "Map": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Map` to the tool, first call the tool `expandSchema` with \"/properties/Map\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "environmentId": z.string().describe("The ID of the environment.").optional(),
  "extensionGroupId": z.string().describe("The ID of the multi-install integration pack to which the extensible map applies, if applicable.").optional(),
  "b_id": z.string().describe("The ID of the object. This is a conceptual ID synthesized from the IDs of the Map, Process, Multi-install integration pack \\(extensionGroupId\\), and, if applicable Environment. After obtaining this value with a QUERY operation on the [Environment Map Extensions Summary object](/api/platformapi#tag/EnvironmentMapExtensionsSummary), you can retrieve or update the extensible map by specifying the ID in a GET or UPDATE operation on this object").optional(),
  "mapId": z.string().describe("The ID of the extensible map.").optional(),
  "name": z.string().describe("The name of the extensible map. This variable includes the source object definition name and the destination object definition name, separated by a hyphen.").optional(),
  "processId": z.string().describe("The ID of the process.").optional()
}