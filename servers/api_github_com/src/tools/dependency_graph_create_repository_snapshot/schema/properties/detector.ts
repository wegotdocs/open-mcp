import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the detector used."),
  "version": z.string().describe("The version of the detector used."),
  "url": z.string().describe("The url of the detector used.")
}