import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "planId": z.string(),
  "websiteId": z.string(),
  "uriPath": z.string().describe("Your own custom uri path for this Checkout Page. It will be appended to checkout url https://checkout.rebilly.com/website/"),
  "name": z.string().describe("Checkout page name"),
  "isActive": z.boolean().describe("If checkout page active").optional(),
  "redirectUrl": z.string().describe("Checkout page url").optional(),
  "redirectTimeout": z.number().int().describe("Checkout page redirect timeout").optional(),
  "allowCustomCustomerId": z.boolean().describe("If to enable your own customer ID in requests").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}