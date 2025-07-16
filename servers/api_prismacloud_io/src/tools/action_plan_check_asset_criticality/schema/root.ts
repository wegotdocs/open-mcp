import { z } from "zod"

export const inputParamsSchema = {
  "asset-id": z.string().describe("asset id"),
  "x-redlock-auth": z.string().describe("Authorize using Authentication token")
}