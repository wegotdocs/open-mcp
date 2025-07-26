import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this regulation."),
  "name": z.string().min(1).max(128).describe("The name of the regulation."),
  "acronym": z.string().min(1).max(20).describe("A shortened representation of the name."),
  "category": z.enum(["privacy","finance","education","medical","corporate","security","government","other"]).describe("The subject of the regulation.\n\n* `privacy` - Privacy\n* `finance` - Finance\n* `education` - Education\n* `medical` - Medical\n* `corporate` - Corporate\n* `security` - Security\n* `government` - Government\n* `other` - Other"),
  "jurisdiction": z.string().min(1).max(64).describe("The territory over which the regulation applies."),
  "description": z.string().describe("Information about the regulation's purpose.").optional(),
  "reference": z.string().url().max(200).describe("An external URL for more information.").optional()
}