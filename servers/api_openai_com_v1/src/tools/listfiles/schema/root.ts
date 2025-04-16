import { z } from "zod"

export const inputParamsSchema = {
  "purpose": z.string().describe("Only return files with the given purpose.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional()
}