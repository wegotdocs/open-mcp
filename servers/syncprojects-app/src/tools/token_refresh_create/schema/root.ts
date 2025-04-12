import { z } from "zod"

export const inputParams = {
  "access": z.string().readonly(),
  "refresh": z.string()
}