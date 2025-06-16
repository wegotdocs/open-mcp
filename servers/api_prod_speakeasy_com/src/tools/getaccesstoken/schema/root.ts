import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().describe("The workspace ID")
}