import { z } from "zod"

export const inputParamsSchema = {
  "newPassword": z.string().describe("New password")
}