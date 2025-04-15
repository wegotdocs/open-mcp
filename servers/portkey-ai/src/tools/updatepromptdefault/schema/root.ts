import { z } from "zod"

export const inputParamsSchema = {
  "promptId": z.string(),
  "version": z.number().describe("Version Number to set as default")
}