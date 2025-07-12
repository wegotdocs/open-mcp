import { z } from "zod"

export const inputParamsSchema = {
  "prefix_list_uuid": z.string(),
  "cidr": z.string()
}