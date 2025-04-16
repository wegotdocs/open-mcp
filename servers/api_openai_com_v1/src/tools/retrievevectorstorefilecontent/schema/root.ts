import { z } from "zod"

export const inputParamsSchema = {
  "vector_store_id": z.string().describe("The ID of the vector store."),
  "file_id": z.string().describe("The ID of the file within the vector store.")
}