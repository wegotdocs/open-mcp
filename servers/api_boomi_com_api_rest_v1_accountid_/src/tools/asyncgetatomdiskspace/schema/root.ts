import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the Runtime cloud attachment.")
}