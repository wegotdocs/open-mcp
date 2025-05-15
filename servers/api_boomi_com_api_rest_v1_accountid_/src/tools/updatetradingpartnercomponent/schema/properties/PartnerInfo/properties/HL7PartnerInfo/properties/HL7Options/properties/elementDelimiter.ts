import { z } from "zod"

export const inputParamsSchema = {
  "delimiterSpecial": z.string().optional(),
  "delimiterValue": z.enum(["stardelimited","commadelimited","tabdelimited","tickdelimited","bardelimited","plusdelimited","colondelimited","caratdelimited","ampersanddelimited","bytecharacter","othercharacter"]).optional()
}