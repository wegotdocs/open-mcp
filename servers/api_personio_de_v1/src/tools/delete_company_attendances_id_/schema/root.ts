import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("ID of the attendance period to delete")
}