import { z } from "zod"

export const inputParamsSchema = {
  "enableCustomCss": z.boolean().describe("Enable the use of CSS in form"),
  "allowAnonymous": z.boolean().describe("Allow Anonymous access to Form Settings"),
  "enablePlugins": z.boolean().describe("Enable the use of form plugins in form"),
  "enableAuthTaskFormsRedirect": z.boolean().describe("Enable redirecting all Authenticated Task forms into My Nintex"),
  "localizationAndTranslation": z.string(),
  "enableAiFormGenerator": z.boolean().describe("Enable the use of AI form generator in form"),
  "enableFormPdfConverter": z.boolean().describe("Enable the use of form pdf converter in form"),
  "Authorization": z.string().describe("Bearer Token should belong to admin role")
}