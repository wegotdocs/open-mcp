import { z } from "zod"

export const inputParamsSchema = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "description": z.string().describe("The description of the screen. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen. The name must be unique. The maximum length is 255 characters.").optional()
}