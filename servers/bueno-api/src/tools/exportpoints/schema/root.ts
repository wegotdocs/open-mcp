import { z } from "zod"

export const inputParamsSchema = {
  "siteIds": z.array(z.string().uuid()).describe("List of unique identifiers of the Sites to export Points for"),
  "includeDataStreamMappings": z.boolean().describe("Boolean parameter to determine whether the Point Data Stream Mappings will be included in the CSV export").optional()
}