import { z } from "zod"

export const inputParamsSchema = {
  "pokemon_id": z.string().regex(new RegExp("^\\d+$"))
}