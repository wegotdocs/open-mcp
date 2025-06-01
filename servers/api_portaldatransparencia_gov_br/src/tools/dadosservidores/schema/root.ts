import { z } from "zod"

export const inputParamsSchema = {
  "tipoServidor": z.number().int().describe("Tipo do Servidor (Civil=1 ou Militar=2)").optional(),
  "situacaoServidor": z.number().int().describe("Situação do Servidor (Ativo=1, Inativo=2 ou Pensionista=3)").optional(),
  "cpf": z.string().describe("CPF do Servidor").optional(),
  "nome": z.string().describe("Nome do Servidor").optional(),
  "codigoFuncaoCargo": z.string().describe("<a href='/swagger-ui.html#!/Servidores32do32Poder32Executivo32Federal/listarFuncoesECargosUsingGET' >Código da Função ou Cargo de Confiança</a>").optional(),
  "orgaoServidorExercicio": z.string().describe("<a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET' >Código Órgão Exercício (SIAPE)</a>").optional(),
  "orgaoServidorLotacao": z.string().describe("<a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET' >Código Órgão Lotação (SIAPE)</a>").optional(),
  "pagina": z.number().int().describe("Página consultada")
}