import { z } from "zod"

export const inputParamsSchema = {
  "fechaIniStr": z.string().describe("Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)"),
  "fechaFinStr": z.string().describe("Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)"),
  "idema": z.string().describe("Indicativo climatológico de la EMA. Puede introducir varios indicativos separados por comas (,)")
}