import { z } from "zod"

export const inputParams = {
  "thread_id": z.string().describe("The ID of the thread to retrieve.")
}