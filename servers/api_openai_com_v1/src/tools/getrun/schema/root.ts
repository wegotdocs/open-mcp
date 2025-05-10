import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) that was run."),
  "run_id": z.string().describe("The ID of the run to retrieve.")
}