import { z } from "zod"

export const inputParamsSchema = {
  "processStatusId": z.string().uuid().describe("Id for identify processStatus")
}