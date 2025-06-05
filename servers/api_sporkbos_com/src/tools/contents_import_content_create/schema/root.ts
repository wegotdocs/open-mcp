import { z } from "zod"

export const inputParamsSchema = {
  "team": z.number().int().describe("Filter recipients by a specific team ID"),
  "file": z.string().url(),
  "user_timezone": z.string()
}