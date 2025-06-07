import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "catalog": z.string().describe("Catalog name").optional()
}