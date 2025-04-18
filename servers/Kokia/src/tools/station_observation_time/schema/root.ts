import { z } from "zod"

export const inputParamsSchema = {
  "time": z.string().datetime({ offset: true }).describe("Timestamp of requested observation")
}