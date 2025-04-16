import { z } from "zod"

export const inputParamsSchema = {
  "workspace": z.string().describe("Required. The workspace's name.")
}