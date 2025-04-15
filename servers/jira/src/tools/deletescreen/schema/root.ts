import { z } from "zod"

export const inputParamsSchema = {
  "screenId": z.number().int().describe("The ID of the screen.")
}