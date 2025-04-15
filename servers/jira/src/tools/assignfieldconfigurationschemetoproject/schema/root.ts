import { z } from "zod"

export const inputParamsSchema = {
  "fieldConfigurationSchemeId": z.string().describe("The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.").optional(),
  "projectId": z.string().describe("The ID of the project.")
}