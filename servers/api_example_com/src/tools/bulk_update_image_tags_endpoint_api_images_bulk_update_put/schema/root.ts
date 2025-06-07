import { z } from "zod"

export const inputParamsSchema = {
  "updates": z.array(z.object({ "service_name": z.string().describe("Name of the service to update"), "new_tag": z.string().describe("New tag to set"), "tag_type": z.union([z.string(), z.null()]).describe("Type of tag (version, sha, branch, latest)").optional() }).describe("Request model for updating a single image tag")).describe("List of image updates to perform"),
  "commit_to_git": z.boolean().describe("Whether to commit changes to git").optional()
}