import { z } from "zod"

export const inputParamsSchema = {
  "packageName": z.string(),
  "level": z.enum(["ALL","TRACE","DEBUG","INFO","WARN","ERROR","OFF"])
}