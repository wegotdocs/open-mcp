import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid().describe("User Id")
}