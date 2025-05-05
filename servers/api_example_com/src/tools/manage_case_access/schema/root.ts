import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "access": z.object({ "_kind": z.literal("OrganisationAccessKind") })
}