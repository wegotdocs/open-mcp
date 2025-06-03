import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(36).describe("Displays information about the specified submission")
}