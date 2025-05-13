import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "code": z.string().optional(),
  "name": z.string().optional(),
  "priority": z.number().int().optional(),
  "enabled": z.boolean().optional(),
  "warehouseCodes": z.array(z.string()).optional(),
  "ownerCodes": z.array(z.string()).optional(),
  "customerOrderTypes": z.array(z.string()).optional(),
  "productCriterion": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `productCriterion` to the tool, first call the tool `expandSchema` with \"/properties/productCriterion\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "batchAttributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `batchAttributes` to the tool, first call the tool `expandSchema` with \"/properties/batchAttributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "putAwayDirection": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `putAwayDirection` to the tool, first call the tool `expandSchema` with \"/properties/putAwayDirection\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}