import { z } from "zod"

export const inputParamsSchema = {
  "siteIds": z.array(z.string().uuid()).describe("List of unique identifiers of the Sites to export Points for")
}