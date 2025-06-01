import { z } from "zod"

export const inputParamsSchema = {
  "cpfSancionado": z.string().describe("CPF do sancionado").optional(),
  "nomeSancionado": z.string().describe("Nome do sancionado").optional(),
  "orgaoLotacao": z.string().describe("Órgão de lotação").optional(),
  "dataPublicacaoInicio": z.string().describe("Data publicação início (DD/MM/AAAA)").optional(),
  "dataPublicacaoFim": z.string().describe("Data publicação fim (DD/MM/AAAA)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}