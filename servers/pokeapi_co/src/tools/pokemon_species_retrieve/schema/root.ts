import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("This parameter can be a string or an integer.")
}