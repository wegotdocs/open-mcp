import { z } from "zod"

export const inputParamsSchema = {
  "redemptionCode": z.string().optional(),
  "discount": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `discount` to the tool, first call the tool `expandSchema` with \"/properties/discount\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "restrictions": z.array(z.string()).describe("Coupon restrictions").optional(),
  "redemptionsCount": z.number().int().gte(0).describe("Coupon's redemptions count").readonly().optional(),
  "status": z.enum(["issued","expired"]).describe("If coupon enabled").readonly().optional(),
  "description": z.string().describe("Your coupon description. When it is not empty this is used for invoice discount item description,\notherwise the item's description uses coupon's redemptionCode like 'Coupon \"redemptionCode\"'\n").optional(),
  "issuedTime": z.string().datetime({ offset: true }).describe("Coupon's issued time (start time)"),
  "expiredTime": z.string().datetime({ offset: true }).describe("Coupon's expire time (end time)").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}