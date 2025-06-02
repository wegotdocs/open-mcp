import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The id for the user")
}