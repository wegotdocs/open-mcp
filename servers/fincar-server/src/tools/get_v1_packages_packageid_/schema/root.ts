import { z } from "zod"

export const inputParamsSchema = {
  "packageId": z.number().int().describe("ID of the package to retrieve")
}