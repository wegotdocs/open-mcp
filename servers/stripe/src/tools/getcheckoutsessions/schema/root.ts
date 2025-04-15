import { z } from "zod"

export const inputParamsSchema = {
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Checkout Sessions that were created during the given date interval.").optional(),
  "customer": z.string().max(5000).describe("Only return the Checkout Sessions for the Customer specified.").optional(),
  "customer_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customer_details` to the tool, first call the tool `expandSchema` with \"/properties/customer_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Only return the Checkout Sessions for the Customer details specified.</property-description>").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "payment_intent": z.string().max(5000).describe("Only return the Checkout Session for the PaymentIntent specified.").optional(),
  "payment_link": z.string().max(5000).describe("Only return the Checkout Sessions for the Payment Link specified.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["complete","expired","open"]).describe("Only return the Checkout Sessions matching the given status.").optional(),
  "subscription": z.string().max(5000).describe("Only return the Checkout Session for the subscription specified.").optional()
}