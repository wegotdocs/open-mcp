import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("ID of user to impersonate")
}