import { z } from "zod"

export const inputParamsSchema = {
  "petId": z.number().int().describe("ID of pet to return")
}