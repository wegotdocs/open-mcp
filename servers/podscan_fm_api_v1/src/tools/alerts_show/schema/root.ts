import { z } from "zod"

export const inputParams = {
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string")
}