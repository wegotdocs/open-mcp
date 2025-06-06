import { z } from "zod"

export const inputParamsSchema = {
  "contactId": z.number().int(),
  "additionalAddressId": z.number().int(),
  "kind": z.enum(["EMAIL","SOCIAL","PHONE","WEBSITE","OTHER"]),
  "address": z.string(),
  "description": z.string()
}