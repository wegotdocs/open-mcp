import { z } from "zod"

export const inputParams = {
  "team": z.string().describe("The ID of the team")
}