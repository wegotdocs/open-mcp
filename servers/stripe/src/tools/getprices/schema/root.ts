import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().describe("Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).").optional(),
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.").optional(),
  "currency": z.string().describe("Only return prices for the given currency.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "lookup_keys": z.array(z.string().max(5000)).describe("Only return the price with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.").optional(),
  "product": z.string().max(5000).describe("Only return prices for the given product.").optional(),
  "recurring": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `recurring` to the tool, first call the tool `expandSchema` with \"/properties/recurring\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Only return prices with these recurring fields.</property-description>").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "type": z.enum(["one_time","recurring"]).describe("Only return prices of type `recurring` or `one_time`.").optional()
}