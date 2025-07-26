import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().min(1).max(500).describe("Brief description of preset.").optional(),
  "notes": z.string().max(2000).nullable().describe("Description of what needs to be tested or setting up environment for testing").optional(),
  "scope": z.string().max(800).describe("Scope of Engagement testing, IP's/Resources/URL's)").optional(),
  "product": z.number().int(),
  "test_type": z.array(z.number().int()).optional(),
  "network_locations": z.array(z.number().int()).optional()
}