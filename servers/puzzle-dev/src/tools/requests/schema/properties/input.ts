import { z } from "zod"

export const inputParams = {
  "companyId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `companyId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/companyId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "statuses": z.array(z.enum(["Cancelled","Completed","Open"])).optional(),
  "transactionIds": z.array(z.record(z.any())).optional(),
  "types": z.array(z.enum(["CategoryReview","Documentation","Message","Integration"])).optional(),
  "requestedUserIds": z.array(z.record(z.any())).optional(),
  "requestedByUserIds": z.array(z.record(z.any())).optional(),
  "startDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/startDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "endDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/endDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}