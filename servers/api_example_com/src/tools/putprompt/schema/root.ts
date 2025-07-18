import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Prompt id reference for update"),
  "name": z.string().nullable().describe("The key of the setting.").optional(),
  "description": z.string().nullable().describe("The description of the prompt.").optional(),
  "value": z.string().nullable().describe("The value of the setting.").optional(),
  "promptType": z.string().nullable().describe("The prompt type (public or private).").optional(),
  "active": z.boolean().nullable().describe("Whether the prompt is active or not.").optional()
}