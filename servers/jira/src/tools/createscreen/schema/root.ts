import { z } from "zod"

export const inputParams = {
  "description": z.string().describe("The description of the screen. The maximum length is 255 characters.").optional(),
  "name": z.string().describe("The name of the screen. The name must be unique. The maximum length is 255 characters.")
}