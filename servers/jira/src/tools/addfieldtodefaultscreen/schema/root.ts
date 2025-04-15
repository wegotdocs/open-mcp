import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the field.")
}