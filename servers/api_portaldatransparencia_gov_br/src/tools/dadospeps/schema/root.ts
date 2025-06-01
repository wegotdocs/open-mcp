import { z } from "zod"

export const inputParamsSchema = {
  "cpf": z.string().describe("CPF do Servidor").optional(),
  "nome": z.string().describe("Nome do Servidor").optional(),
  "descricaoFuncao": z.string().describe("Descrição da Função").optional(),
  "orgaoServidorLotacao": z.string().describe("<a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET' >Código Órgão Lotação (SIAPE)</a>").optional(),
  "dataInicioExercicioDe": z.string().describe("Data início do exercício, período inicial (DD/MM/AAAA)").optional(),
  "datInicioExercicioAte": z.string().describe("Data início do exercício, período final (DD/MM/AAAA)").optional(),
  "dataFimExercicioDe": z.string().describe("Data fim do exercício, período inicial (DD/MM/AAAA)").optional(),
  "datFimExercicioAte": z.string().describe("Data fim do exercício, período final (DD/MM/AAAA)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}