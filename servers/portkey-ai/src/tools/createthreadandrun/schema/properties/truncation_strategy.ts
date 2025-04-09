import { z } from "zod"

export const inputParams = {
  "type": z.enum(["auto","last_messages"]).describe("The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`."),
  "last_messages": z.number().int().gte(1).nullable().describe("The number of most recent messages from the thread when constructing the context for the run.").optional()
}