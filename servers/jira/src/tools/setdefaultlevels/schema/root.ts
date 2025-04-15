import { z } from "zod"

export const inputParamsSchema = {
  "defaultValues": z.array(z.object({ "defaultLevelId": z.string().describe("The ID of the issue security level to set as default for the specified scheme. Providing null will reset the default level."), "issueSecuritySchemeId": z.string().describe("The ID of the issue security scheme to set default level for.") }).catchall(z.any()).describe("Details of scheme and new default level.")).describe("List of objects with issue security scheme ID and new default level ID.")
}