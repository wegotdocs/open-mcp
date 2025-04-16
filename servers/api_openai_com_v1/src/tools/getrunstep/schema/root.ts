import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the thread to which the run and run step belongs."),
  "run_id": z.string().describe("The ID of the run to which the run step belongs."),
  "step_id": z.string().describe("The ID of the run step to retrieve."),
  "include[]": z.array(z.literal("step_details.tool_calls[*].file_search.results[*].content")).describe("A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n").optional()
}