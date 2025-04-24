import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().describe("The ID of the project."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. The default is 100.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional()
}