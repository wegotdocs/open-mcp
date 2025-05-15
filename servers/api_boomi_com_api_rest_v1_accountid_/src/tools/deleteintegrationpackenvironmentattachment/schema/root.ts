import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The conceptual Integration Pack Environment Attachment object ID")
}