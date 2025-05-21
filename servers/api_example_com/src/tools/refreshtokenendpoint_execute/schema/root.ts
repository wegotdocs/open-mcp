import { z } from "zod"

export const inputParamsSchema = {
  "refreshToken": z.string().describe("Refresh Token")
}