import { z } from "zod"

export const inputParams = {
  "scopes": z.array(z.string())
}