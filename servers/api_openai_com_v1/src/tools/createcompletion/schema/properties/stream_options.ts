import { z } from "zod"

export const inputParamsSchema = {
  "include_usage": z.boolean().describe("If set, an additional chunk will be streamed before the `data: [DONE]`\nmessage. The `usage` field on this chunk shows the token usage statistics\nfor the entire request, and the `choices` field will always be an empty\narray. \n\nAll other chunks will also include a `usage` field, but with a null\nvalue. **NOTE:** If the stream is interrupted, you may not receive the\nfinal usage chunk which contains the total token usage for the request.\n").optional()
}