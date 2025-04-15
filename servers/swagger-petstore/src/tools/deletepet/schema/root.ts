import { z } from "zod"

export const inputParamsSchema = {
  "petId": z.number().int().describe("Pet id to delete"),
  "api_key": z.string().optional()
}