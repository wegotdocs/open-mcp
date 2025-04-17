import { z } from "zod"

export const inputParamsSchema = {
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "name": z.string().describe("Name of the new duplicated Equipment. If not provided, the name will be the same as the original Equipment with a <code>(copy)</code> suffix appended.").optional(),
  "duplicatePoints": z.boolean().describe("Boolean flag indicating if the original Equipment's Points should be duplicated.").optional(),
  "duplicateDataStreamMappings": z.boolean().describe("Boolean flag indicating if the original Point's Data Stream Mappings should be duplicated. (Irrelevant if duplicatePoints is <code>false</code>.)").optional(),
  "groupId": z.string().uuid().describe("Unique identifier of the Group the duplicated Equipment will belong to. If not provided, the duplicated Equipment will belong to the same Group as the original Equipment.").optional()
}