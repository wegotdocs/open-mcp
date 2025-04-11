import { z } from "zod"

export const inputParams = {
  "time": z.string().datetime({ offset: true }).describe("Timestamp of requested observation")
}