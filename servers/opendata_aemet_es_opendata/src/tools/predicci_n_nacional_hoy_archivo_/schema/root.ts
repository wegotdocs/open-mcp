import { z } from "zod"

export const inputParamsSchema = {
  "fecha": z.string().describe("Fecha en formato (AAAA-MM-DD)")
}