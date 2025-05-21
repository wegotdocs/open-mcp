import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Client ID"),
  "isActive": z.boolean().describe("Is Active?")
}