import { z } from "zod"

export const inputParamsSchema = {
  "promptPartialId": z.string(),
  "version": z.number().describe("Version Number to set as default")
}