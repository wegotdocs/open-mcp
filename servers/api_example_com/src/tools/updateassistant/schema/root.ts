import { z } from "zod"

export const inputParamsSchema = {
  "assistantId": z.string().uuid().describe("Id of the assistant to update"),
  "name": z.string().nullable().describe("Name of the assistant").optional(),
  "description": z.string().nullable().describe("Description of the assistant").optional(),
  "assistantOpenaiId": z.string().nullable().describe("Internal id of the assistant").optional(),
  "active": z.boolean().nullable().describe("Active status of the assistant").optional(),
  "resourceId": z.string().uuid().describe("ResourceId associated with the assistant").optional()
}