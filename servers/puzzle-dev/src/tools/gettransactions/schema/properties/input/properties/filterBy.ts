import { z } from "zod"

export const inputParams = {
  "accountIds": z.array(z.record(z.any())).optional(),
  "startDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/filterBy/properties/startDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "endDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/filterBy/properties/endDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "vendorIds": z.array(z.record(z.any())).optional(),
  "coaKeys": z.array(z.string()).optional(),
  "status": z.enum(["Finalized","NotFinalized","NotCategorized"]).optional()
}