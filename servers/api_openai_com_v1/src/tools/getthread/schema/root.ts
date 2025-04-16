import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().describe("The ID of the thread to retrieve.")
}