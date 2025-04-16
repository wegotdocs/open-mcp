import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Required. The repository in which to create the workspace. Must be in the format `projects/*/locations/*/repositories/*`."),
  "workspaceId": z.string().describe("Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.").optional(),
  "name": z.string().describe("Output only. The workspace's name.").readonly().optional()
}