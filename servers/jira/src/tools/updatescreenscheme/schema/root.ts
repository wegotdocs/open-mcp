import { z } from "zod"

export const inputParams = {
  "screenSchemeId": z.string().describe("The ID of the screen scheme."),
  "description": z.string().describe("The description of the screen scheme. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen scheme. The name must be unique. The maximum length is 255 characters.").optional(),
  "screens": z.string().optional()
}