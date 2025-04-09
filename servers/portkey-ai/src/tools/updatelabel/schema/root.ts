import { z } from "zod"

export const inputParams = {
  "labelId": z.string().uuid().describe("ID of the label to update"),
  "name": z.string().regex(new RegExp("^(?!latest$)(?!default$)(?!\\d+$)[a-zA-Z0-9_-]*[^@\\s]?[a-zA-Z0-9_-]*$")).describe("Name of the label").optional(),
  "description": z.string().describe("Description of the label").optional(),
  "color_code": z.string().describe("Color code for the label").optional()
}