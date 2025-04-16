import { z } from "zod"

export const inputParamsSchema = {
  "vector_store_id": z.string().describe("The ID of the vector store that the file batch belongs to."),
  "batch_id": z.string().describe("The ID of the file batch to cancel.")
}