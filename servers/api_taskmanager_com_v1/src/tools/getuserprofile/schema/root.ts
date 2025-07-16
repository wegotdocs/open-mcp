import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().uuid().describe("ID of the user")
}