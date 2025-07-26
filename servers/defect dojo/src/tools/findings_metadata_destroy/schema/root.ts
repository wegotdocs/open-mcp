import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "name": z.number().int().describe("name of the metadata to retrieve. If name is empty, return all the                                     metadata associated with the finding")
}