import { z } from "zod"

export const inputParams = {
  "email": z.string(),
  "password": z.string(),
  "access": z.string().readonly(),
  "refresh": z.string().readonly()
}