import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique identifier for the tool."),
  "name": z.string().describe("Tool name.").optional(),
  "action": z.string().describe("What running the tool will do.").optional(),
  "description": z.string().describe("Tool description.").optional(),
  "success": z.boolean().describe("Did the tool run successfully?").optional(),
  "message": z.string().describe("Tool return message.").optional()
}