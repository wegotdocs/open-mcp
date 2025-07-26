import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this cred_ user."),
  "prefetch": z.array(z.enum(["environment","notes"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}