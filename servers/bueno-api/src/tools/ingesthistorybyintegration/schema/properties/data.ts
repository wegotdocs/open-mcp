import { z } from "zod"

export const inputParamsSchema = {
  "<insert-timestamp>": z.array(z.object({ "streamId": z.string().describe("The stream ID of the Data Stream this History is being written to").optional(), "val": z.union([z.number().describe("Value to be written"), z.string().describe("Value to be written")]).describe("Value to be written").optional() }).describe("Single history record for ingestion")).optional()
}