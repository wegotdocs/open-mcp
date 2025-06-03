import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("ID of the user")
}