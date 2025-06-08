import { z } from "zod"

export const inputParamsSchema = {
  "fechaIniStr": z.string().describe("Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)"),
  "fechaFinStr": z.string().describe("Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)")
}