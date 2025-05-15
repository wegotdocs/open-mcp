import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("The ID of the Runtime.").optional(),
  "environmentId": z.string().describe("The ID of the environment.").optional(),
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the Runtime and environment IDs.").optional()
}