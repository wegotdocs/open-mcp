import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "ssh_key": z.string()
}