import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "locationCode": z.string().optional(),
  "locationType": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `locationType` to the tool, first call the tool `expandSchema` with \"/properties/locationType\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "warehouseAreaId": z.number().int().optional(),
  "warehouseCode": z.string().optional()
}