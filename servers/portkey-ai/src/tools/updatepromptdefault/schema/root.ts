import { z } from "zod"

export const inputParams = {
  "promptId": z.string(),
  "version": z.number().describe("Version Number to set as default")
}