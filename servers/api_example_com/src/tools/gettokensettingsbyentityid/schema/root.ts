import { z } from "zod"

export const inputParamsSchema = {
  "entityId": z.string().uuid().describe("Id of user or group")
}