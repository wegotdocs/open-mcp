import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("User ID"),
  "status": z.boolean().describe("New status of the user")
}