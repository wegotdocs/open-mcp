import { z } from "zod"

export const inputParamsSchema = {
  "format": z.enum(["json","yaml"]).optional(),
  "lang": z.enum(["cs","da","de","en","es","fr","it","ja","nl","pl","pt","ru","tr","uk","zh"]).optional()
}