import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().max(5000).describe("The ID of the customer whose quotes will be retrieved.").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["accepted","canceled","draft","open"]).describe("The status of the quote.").optional(),
  "test_clock": z.string().max(5000).describe("Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.").optional()
}