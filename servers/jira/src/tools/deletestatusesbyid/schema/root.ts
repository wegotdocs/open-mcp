import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items `1`, Max items `50`")
}