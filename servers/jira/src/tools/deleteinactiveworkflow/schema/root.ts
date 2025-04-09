import { z } from "zod"

export const inputParams = {
  "entityId": z.string().describe("The entity ID of the workflow.")
}