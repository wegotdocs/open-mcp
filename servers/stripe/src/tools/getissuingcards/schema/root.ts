import { z } from "zod"

export const inputParamsSchema = {
  "cardholder": z.string().max(5000).describe("Only return cards belonging to the Cardholder with the provided ID.").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return cards that were issued during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "exp_month": z.number().int().describe("Only return cards that have the given expiration month.").optional(),
  "exp_year": z.number().int().describe("Only return cards that have the given expiration year.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "last4": z.string().max(5000).describe("Only return cards that have the given last four digits.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "personalization_design": z.string().max(5000).optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["active","canceled","inactive"]).describe("Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.").optional(),
  "type": z.enum(["physical","virtual"]).describe("Only return cards that have the given type. One of `virtual` or `physical`.").optional()
}