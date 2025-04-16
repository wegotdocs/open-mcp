import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the thread the run and run steps belong to."),
  "run_id": z.string().describe("The ID of the run the run steps belong to."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n").optional(),
  "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
  "before": z.string().describe("A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
  "include[]": z.array(z.literal("step_details.tool_calls[*].file_search.results[*].content")).describe("A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n").optional()
}