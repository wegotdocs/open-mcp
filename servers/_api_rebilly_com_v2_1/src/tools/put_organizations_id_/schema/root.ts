import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "createdTime": z.string().datetime({ offset: true }).describe("Read-only timestamp, automatically assigned on back-end.").readonly().optional(),
  "updatedTime": z.string().optional(),
  "name": z.string().max(60).describe("The organization name"),
  "address": z.string().max(60).describe("The organization street address").optional(),
  "address2": z.string().max(60).describe("The organization street address").optional(),
  "city": z.string().max(45).describe("The organization city").optional(),
  "region": z.string().max(45).describe("The organization region (state)").optional(),
  "country": z.string().regex(new RegExp("^[A-Z]{2}$")).describe("The organization country ISO Alpha-2 code"),
  "postalCode": z.string().max(10).describe("The organization postal code").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}