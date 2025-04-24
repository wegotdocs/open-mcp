import { z } from "zod"

export const inputParamsSchema = {
  "response_id": z.string().describe("The ID of the response to retrieve input items for."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between\n1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("The order to return the input items in. Default is `asc`.\n- `asc`: Return the input items in ascending order.\n- `desc`: Return the input items in descending order.\n").optional(),
  "after": z.string().describe("An item ID to list items after, used in pagination.\n").optional(),
  "before": z.string().describe("An item ID to list items before, used in pagination.\n").optional()
}