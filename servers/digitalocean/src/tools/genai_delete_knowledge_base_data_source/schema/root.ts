import { z } from "zod"

export const inputParamsSchema = {
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "data_source_uuid": z.string().describe("Data source id")
}