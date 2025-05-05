import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "shares": z.array(z.object({ "organisation": z.string().describe("Name or id of the organisation"), "share": z.boolean().describe("If true, new observables and tasks will also be shared to the organisation"), "profile": z.string().min(1).max(64).describe("Profile used to define the permissions of the organisation members"), "taskRule": z.string().min(1).max(64).describe("Sharing rule to apply to the tasks, can be manual or autoShare"), "observableRule": z.string().min(1).max(64).describe("Sharing rule to apply to the observables, can be manual or autoShare") })).optional()
}