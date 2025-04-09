import { z } from "zod"

export const inputParams = {
  "batch_id": z.string().describe("The ID of the batch to retrieve.")
}