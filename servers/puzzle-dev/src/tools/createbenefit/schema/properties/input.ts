import { z } from "zod"

export const inputParams = {
  "companyId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `companyId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/companyId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "nativeId": z.string(),
  "name": z.string(),
  "description": z.string(),
  "type": z.enum(["medical","dental","vision","retirement","commuter","disability","life_insurance","other_non_taxable","other_taxable","unknown_benefit","student_loan"]),
  "isPreTax": z.boolean()
}