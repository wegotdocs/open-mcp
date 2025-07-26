import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this engagement_ presets."),
  "prefetch": z.array(z.enum(["network_locations","product","test_type"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}