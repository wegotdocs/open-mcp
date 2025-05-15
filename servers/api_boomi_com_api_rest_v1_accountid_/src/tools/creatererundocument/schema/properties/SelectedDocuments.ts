import { z } from "zod"

export const inputParamsSchema = {
  "Document": z.array(z.object({ "genericConnectorRecordId": z.string().optional() })).optional()
}