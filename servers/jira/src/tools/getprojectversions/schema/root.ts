import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.").optional()
}