import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("Takes in the token from a previous call to return a result.")
}