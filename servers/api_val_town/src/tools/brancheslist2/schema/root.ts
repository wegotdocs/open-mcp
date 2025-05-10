import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "offset": z.number().int().gte(0).describe("Number of items to skip in order to deliver paginated results"),
  "limit": z.number().int().gte(1).lte(100).describe("Maximum items to return in each paginated response")
}