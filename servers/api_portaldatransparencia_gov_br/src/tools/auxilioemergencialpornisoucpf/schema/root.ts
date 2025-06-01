import { z } from "zod"

export const inputParamsSchema = {
  "codigoBeneficiario": z.string().describe("CPF/NIS Beneficiário").optional(),
  "codigoResponsavelFamiliar": z.string().describe("CPF/NIS Responsável Familiar").optional(),
  "pagina": z.number().int().describe("Página consultada")
}