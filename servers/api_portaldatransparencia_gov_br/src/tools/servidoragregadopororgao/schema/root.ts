import { z } from "zod"

export const inputParamsSchema = {
  "orgaoLotacao": z.string().describe("<a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET' >Código Órgão Lotação (SIAPE)</a>").optional(),
  "orgaoExercicio": z.string().describe("<a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET' >Código Órgão Exercício (SIAPE)</a>").optional(),
  "tipoServidor": z.number().int().describe("Tipo servidor (Civil: 1; Militar: 2)").optional(),
  "tipoVinculo": z.number().int().describe("Tipo vínculo (Função: 1; Cargo: 2; Outros: 3; Militares: 4").optional(),
  "licenca": z.number().int().describe("Licença (Sim: 1; Não: 0)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}