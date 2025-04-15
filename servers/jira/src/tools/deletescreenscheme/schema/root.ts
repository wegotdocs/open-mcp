import { z } from "zod"

export const inputParamsSchema = {
  "screenSchemeId": z.string().describe("The ID of the screen scheme.")
}