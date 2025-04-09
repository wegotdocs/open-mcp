import { z } from "zod"

export const inputParams = {
  "categoryReview": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `categoryReview` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/requests/properties/categoryReview\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "documentationReview": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `documentationReview` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/requests/properties/documentationReview\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "messages": z.array(z.object({ "message": z.string() })).optional()
}