import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the issue resolution."),
  "replaceWith": z.string().describe("The ID of the issue resolution that will replace the currently selected resolution.")
}