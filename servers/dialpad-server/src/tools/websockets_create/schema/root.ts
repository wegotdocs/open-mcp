import { z } from "zod"

export const inputParamsSchema = {
  "secret": z.string().nullable().describe("[single-line only]\n\nWebsocket's signature secret that's used to confirm the validity of the request.").optional()
}