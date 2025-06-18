import { z } from "zod"

export const inputParamsSchema = {
  "filesSize": z.number().int().nullable(),
  "numOfFiles": z.number().int().nullable(),
  "status": z.enum(["uploading","completed","cancelled","failed"]).nullable()
}