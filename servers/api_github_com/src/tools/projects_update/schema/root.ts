import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "name": z.string().describe("Name of the project").optional(),
  "body": z.string().nullable().describe("Body of the project").optional(),
  "state": z.string().describe("State of the project; either 'open' or 'closed'").optional(),
  "organization_permission": z.enum(["read","write","admin","none"]).describe("The baseline permission that all organization members have on this project").optional(),
  "private": z.boolean().describe("Whether or not this project can be seen by everyone.").optional()
}