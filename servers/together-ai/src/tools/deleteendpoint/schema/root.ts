import { z } from "zod"

export const inputParamsSchema = {
  "endpointId": z.string().describe("The ID of the endpoint to delete")
}