import { z } from "zod"

export const inputParamsSchema = {
  "orgId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "otherOrgId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "linkType": z.string().min(1).max(64).optional(),
  "otherLinkType": z.string().min(1).max(64).optional()
}