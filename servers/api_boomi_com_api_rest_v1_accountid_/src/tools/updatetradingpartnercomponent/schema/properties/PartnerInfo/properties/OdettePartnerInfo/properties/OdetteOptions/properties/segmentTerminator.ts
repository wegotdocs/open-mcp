import { z } from "zod"

export const inputParamsSchema = {
  "segmentTerminatorSpecial": z.string().optional(),
  "segmentTerminatorValue": z.enum(["newline","singlequote","tilde","carriagereturn","bytecharacter","othercharacter"]).optional()
}