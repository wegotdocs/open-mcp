import { z } from "zod"

export const inputParams = {
  "vector_store_id": z.string().describe("The ID of the vector store that the file belongs to."),
  "file_id": z.string().describe("The ID of the file being retrieved.")
}