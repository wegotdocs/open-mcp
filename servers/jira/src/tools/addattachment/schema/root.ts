import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue that attachments are added to.")
}