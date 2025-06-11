import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "type": z.enum(["ACTION","SCRIPT"]).describe("Type").optional(),
  "b_id": z.number().int().describe("Script identifier").optional(),
  "uid": z.string().uuid().describe("Built-in action identifier").optional(),
  "parameters": z.string().describe("Action/Script parameters").optional(),
  "runAs": z.string().describe("Credential role/identifier").optional()
}