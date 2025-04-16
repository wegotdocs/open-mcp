import { z } from "zod"

export const inputParamsSchema = {
  "movieFileIds": z.array(z.number().int()).nullable().optional(),
  "languages": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional() }).strict()).nullable().optional(),
  "quality": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `quality` to the tool, first call the tool `expandSchema` with \"/properties/quality\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "edition": z.string().nullable().optional(),
  "releaseGroup": z.string().nullable().optional(),
  "sceneName": z.string().nullable().optional(),
  "indexerFlags": z.number().int().nullable().optional()
}