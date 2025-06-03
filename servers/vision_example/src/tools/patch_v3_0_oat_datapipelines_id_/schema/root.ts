import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique alphanumeric string that identifies a data pipeline."),
  "riskLevels": z.array(z.enum(["info","low","medium","high","critical"])).describe("The severity levels to include in the results. \n\nRequests must include at least one severity level.\n").optional(),
  "hasDetail": z.boolean().describe("Parameter that allows you to retrieve detailed logs from the Observed Attack Techniques data pipeline.").optional(),
  "description": z.string().max(4000).describe("Notes or comments about the pipeline").optional(),
  "If-Match": z.string().describe("Parameter that allows you to update an existing resource.\n\nNote: To get an ETag, send a GET request to the API\n").optional()
}