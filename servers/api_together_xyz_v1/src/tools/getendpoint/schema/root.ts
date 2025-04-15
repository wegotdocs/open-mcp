import { z } from "zod"

export const inputParams = {
  "endpointId": z.string().describe("The ID of the endpoint to retrieve")
}