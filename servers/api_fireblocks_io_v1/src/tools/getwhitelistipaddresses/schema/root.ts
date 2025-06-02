import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The ID of the api user")
}