import { z } from "zod"

export const inputParamsSchema = {
  "isDisabled": z.boolean(),
  "Authorization": z.string()
}