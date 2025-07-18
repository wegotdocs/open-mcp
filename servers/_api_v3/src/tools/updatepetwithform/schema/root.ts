import { z } from "zod"

export const inputParamsSchema = {
  "petId": z.number().int().describe("ID of pet that needs to be updated"),
  "name": z.string().describe("Name of pet that needs to be updated").optional(),
  "status": z.string().describe("Status of pet that needs to be updated").optional()
}