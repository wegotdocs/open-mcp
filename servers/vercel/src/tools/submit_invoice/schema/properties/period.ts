import { z } from "zod"

export const inputParamsSchema = {
  "start": z.string().datetime({ offset: true }),
  "end": z.string().datetime({ offset: true })
}