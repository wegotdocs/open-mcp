import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.number().int().describe("client id to delete")
}