import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.")
}