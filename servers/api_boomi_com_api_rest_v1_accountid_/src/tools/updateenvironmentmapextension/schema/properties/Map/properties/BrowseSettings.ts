import { z } from "zod"

export const inputParamsSchema = {
  "DestinationBrowse": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `DestinationBrowse` to the tool, first call the tool `expandSchema` with \"/properties/Map/properties/BrowseSettings/properties/DestinationBrowse\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "SourceBrowse": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `SourceBrowse` to the tool, first call the tool `expandSchema` with \"/properties/Map/properties/BrowseSettings/properties/SourceBrowse\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "containerId": z.string().optional()
}