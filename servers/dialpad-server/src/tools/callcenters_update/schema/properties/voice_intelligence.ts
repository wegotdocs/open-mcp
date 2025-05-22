import { z } from "zod"

export const inputParamsSchema = {
  "allow_pause": z.boolean().nullable().describe("Allow individual users to start and stop Vi during calls. Default is True.").optional(),
  "auto_start": z.boolean().nullable().describe("Auto start Vi for this call center. Default is True.").optional()
}