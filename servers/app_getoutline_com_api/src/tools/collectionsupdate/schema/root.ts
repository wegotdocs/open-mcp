import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "name": z.string().optional(),
  "description": z.string().describe("A brief description of the collection, markdown supported.").optional(),
  "permission": z.enum(["read","read_write"]).optional(),
  "icon": z.string().describe("A string that represents an icon in the outline-icons package or an emoji").optional(),
  "color": z.string().describe("A hex color code for the collection icon").optional(),
  "sharing": z.boolean().describe("Whether public sharing of documents is allowed").optional()
}