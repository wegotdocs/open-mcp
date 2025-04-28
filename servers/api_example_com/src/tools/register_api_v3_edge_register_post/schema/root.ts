import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "data": z.string().describe("Registration data after encryption")
}