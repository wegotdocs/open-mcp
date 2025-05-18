import { z } from "zod"

export const inputParamsSchema = {
  "topicCategories": z.array(z.string()).describe("A list of Wikipedia URLs that describe the channel's content.").optional()
}