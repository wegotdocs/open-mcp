import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique identifier for the setting.").optional(),
  "label": z.string().describe("A human readable label for the setting used in interfaces.").optional(),
  "description": z.string().describe("A human readable description for the setting used in interfaces.").optional(),
  "type": z.enum(["text","email","number","color","password","textarea","select","multiselect","radio","image_width","checkbox","class","order"]).describe("Type of setting.").optional(),
  "value": z.string().describe("Setting value.").optional(),
  "default": z.string().describe("Default value for the setting.").optional(),
  "tip": z.string().describe("Additional help text shown to the user about the setting.").optional(),
  "placeholder": z.string().describe("Placeholder text to be displayed in text inputs.").optional()
}