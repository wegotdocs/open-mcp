import { z } from "zod"

export const inputParamsSchema = {
  "ProcessStatusId": z.string().uuid()
}