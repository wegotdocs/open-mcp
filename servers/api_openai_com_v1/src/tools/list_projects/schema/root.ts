import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "include_archived": z.boolean().describe("If `true` returns all projects including those that have been `archived`. Archived projects are not included by default.").optional()
}