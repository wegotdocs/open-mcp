import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "release_name": z.string(),
  "suspend": z.boolean().describe("True to suspend, False to resume")
}