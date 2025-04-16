import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "source": z.enum(["unknown","cam","telesync","telecine","workprint","dvd","tv","webdl","webrip","bluray"]).optional(),
  "resolution": z.number().int().optional(),
  "modifier": z.enum(["none","regional","screener","rawhd","brdisk","remux"]).optional()
}