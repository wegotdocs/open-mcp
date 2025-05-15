import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the Runtime and environment IDs.")
}