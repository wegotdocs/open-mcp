import { z } from "zod"

export const inputParamsSchema = {
  "networkId": z.string().describe("The ID of the network"),
  "isDiscoverable": z.boolean()
}