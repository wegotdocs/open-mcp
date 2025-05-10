import { z } from "zod"

export const inputParamsSchema = {
  "ignoreEpisodesWithFiles": z.boolean().optional(),
  "ignoreEpisodesWithoutFiles": z.boolean().optional(),
  "monitor": z.enum(["movieOnly","movieAndCollection","none"]).optional(),
  "searchForMovie": z.boolean().optional(),
  "addMethod": z.enum(["manual","list","collection"]).optional()
}