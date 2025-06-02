import { z } from "zod"

export const inputParamsSchema = {
  "order": z.enum(["ASC","DESC"]).describe("List order (ascending or descending)").optional(),
  "filter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filter` to the tool, first call the tool `expandSchema` with \"/properties/filter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Parsed filter object</property-description>").optional(),
  "sort": z.enum(["id","userId","vaultAccountId","createdAt","feeLevel","appUrl","appName"]).describe("Property to sort Web3 connections by.").optional(),
  "pageSize": z.number().lte(50).describe("Amount of results to return in the next page.").optional(),
  "next": z.string().describe("Cursor to the next page").optional()
}