import { z } from "zod"

export const inputParams = {
  "promptPartialId": z.string(),
  "version": z.number().describe("Version Number to set as default")
}