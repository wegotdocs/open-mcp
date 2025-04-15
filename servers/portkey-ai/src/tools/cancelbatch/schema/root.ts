import { z } from "zod"

export const inputParamsSchema = {
  "batch_id": z.string().describe("The ID of the batch to cancel.")
}