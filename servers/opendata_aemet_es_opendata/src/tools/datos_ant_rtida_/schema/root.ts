import { z } from "zod"

export const inputParamsSchema = {
  "fechaIniStr": z.string().describe("Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)"),
  "fechaFinStr": z.string().describe("Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)"),
  "identificacion": z.string().describe(" | Identificacion | Estación |\n|----------|----------|\n| 89064      | Estación Meteorológica Juan Carlos I   |\n| 89064R      | Estación Radiométrica Juan Carlos I|\n| 89064RA  | Estación Radiométrica Juan Carlos I (hasta 08/03/2007)) |\n| 89070  | Estación Meteorológica Gabriel de Castilla   ")
}