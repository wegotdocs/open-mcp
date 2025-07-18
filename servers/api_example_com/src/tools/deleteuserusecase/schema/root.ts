import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("User use case ID")
}