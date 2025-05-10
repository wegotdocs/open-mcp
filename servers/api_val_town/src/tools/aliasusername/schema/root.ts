import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username of the user who you are looking for")
}