import { z } from "zod"

export const inputParams = {
  "labelId": z.string().uuid().describe("ID of the label to retrieve"),
  "organisation_id": z.string().uuid().describe("ID of the organisation").optional(),
  "workspace_id": z.string().describe("ID or slug of the workspace").optional()
}