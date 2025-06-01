import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dadospeps",
  "toolDescription": "Consulta PEPs",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/peps",
  "method": "get",
  "security": [
    {
      "key": "chave-api-dados",
      "value": "<mcp-env-var>CHAVE_API_DADOS</mcp-env-var>",
      "in": "header",
      "envVarName": "CHAVE_API_DADOS"
    }
  ],
  "paramsMap": {
    "query": {
      "cpf": "cpf",
      "nome": "nome",
      "descricaoFuncao": "descricaoFuncao",
      "orgaoServidorLotacao": "orgaoServidorLotacao",
      "dataInicioExercicioDe": "dataInicioExercicioDe",
      "datInicioExercicioAte": "datInicioExercicioAte",
      "dataFimExercicioDe": "dataFimExercicioDe",
      "datFimExercicioAte": "datFimExercicioAte",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool