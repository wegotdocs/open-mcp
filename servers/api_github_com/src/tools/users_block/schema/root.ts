import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The handle for the GitHub user account.")
}