import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "removeTagsAutomatically": z.boolean().optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "specifications": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "implementationName": z.string().nullable().optional(), "negate": z.boolean().optional(), "required": z.boolean().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional() }).strict()).nullable().optional()
}