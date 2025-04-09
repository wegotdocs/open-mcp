import { z } from "zod"

export const inputParams = {
  "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.").optional()
}