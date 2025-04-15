import { z } from "zod"

export const inputParamsSchema = {
  "entityId": z.string().describe("The entity ID of the workflow.")
}