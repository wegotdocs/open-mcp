import { z } from "zod"

export const inputParamsSchema = {
  "country": z.enum(["BRA","CHL","COL"]).describe("Código do país (ISO 3166-1 alpha-3)"),
  "year": z.string().regex(new RegExp("^[0-9]{4}$")).describe("Ano para consulta (formato YYYY). Se não informado, usa o ano atual").optional()
}