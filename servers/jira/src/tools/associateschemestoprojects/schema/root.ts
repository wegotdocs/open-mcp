import { z } from "zod"

export const inputParamsSchema = {
  "oldToNewSecurityLevelMappings": z.array(z.object({ "newLevelId": z.string().describe("The new issue security level ID. Providing null will clear the assigned old level from issues."), "oldLevelId": z.string().describe("The old issue security level ID. Providing null will remap all issues without any assigned levels.") }).strict()).describe("The list of scheme levels which should be remapped to new levels of the issue security scheme.").optional(),
  "projectId": z.string().describe("The ID of the project."),
  "schemeId": z.string().describe("The ID of the issue security scheme. Providing null will clear the association with the issue security scheme.")
}