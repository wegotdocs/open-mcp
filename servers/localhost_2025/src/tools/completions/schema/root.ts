import { z } from "zod"

export const inputParamsSchema = {
  "model": z.string(),
  "messages": z.array(z.object({ "role": z.string(), "content": z.string().nullable().optional() })),
  "frequency_penalty": z.number().int(),
  "n": z.number().int(),
  "presence_penalty": z.number().int(),
  "stream": z.boolean(),
  "temperature": z.number().int(),
  "top_p": z.number().int()
}