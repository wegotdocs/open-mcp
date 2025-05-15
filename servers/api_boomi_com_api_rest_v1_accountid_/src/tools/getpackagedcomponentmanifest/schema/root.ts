import { z } from "zod"

export const inputParamsSchema = {
  "packageId": z.string().describe("The ID of the packaged component.")
}