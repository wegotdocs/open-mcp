import { z } from "zod"

export const inputParams = {
  "vector_store_ids": z.array(z.string()).max(1).describe("Overrides the [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.\n").optional()
}