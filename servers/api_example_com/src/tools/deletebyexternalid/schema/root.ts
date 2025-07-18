import { z } from "zod"

export const inputParamsSchema = {
  "externalId": z.string().describe("Document External Id")
}