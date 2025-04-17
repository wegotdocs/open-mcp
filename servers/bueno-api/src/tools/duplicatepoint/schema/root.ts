import { z } from "zod"

export const inputParamsSchema = {
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "name": z.string().describe("Name of the new duplicated Point. If not provided, the name will be the same as the original Point with a <code>(copy)</code> suffix appended.").optional(),
  "duplicateDataStreamMappings": z.boolean().describe("Boolean flag indicating if the original Point's Data Stream Mappings should be duplicated.").optional(),
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment the duplicated Point will belong to. If not provided, the duplicated Point will belong to the same Equipment as the original Point.").optional()
}