import { z } from "zod"

export const inputParamsSchema = {
  "orgId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "links": z.array(z.object({ "toOrganisation": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"), "avatar": z.string().optional(), "linkType": z.string().min(1).max(64), "otherLinkType": z.string().min(1).max(64) })).optional()
}