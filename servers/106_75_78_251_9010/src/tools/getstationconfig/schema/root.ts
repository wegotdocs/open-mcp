import { z } from "zod"

export const inputParamsSchema = {
  "workStationId": z.number().int()
}