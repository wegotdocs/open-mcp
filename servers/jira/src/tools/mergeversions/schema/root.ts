import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the version to delete."),
  "moveIssuesTo": z.string().describe("The ID of the version to merge into.")
}