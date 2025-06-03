import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Connector's primary identifier")
}