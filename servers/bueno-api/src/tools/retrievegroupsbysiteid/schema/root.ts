import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site")
}