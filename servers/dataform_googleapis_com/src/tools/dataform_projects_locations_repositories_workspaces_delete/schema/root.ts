import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The workspace resource's name."),
  "force": z.boolean().describe("If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)").optional()
}