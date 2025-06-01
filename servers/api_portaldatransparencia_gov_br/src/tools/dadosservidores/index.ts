import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dadosservidores",
  "toolDescription": "Consulta todos servidores do Poder Executivo Federal",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/servidores",
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
      "tipoServidor": "tipoServidor",
      "situacaoServidor": "situacaoServidor",
      "cpf": "cpf",
      "nome": "nome",
      "codigoFuncaoCargo": "codigoFuncaoCargo",
      "orgaoServidorExercicio": "orgaoServidorExercicio",
      "orgaoServidorLotacao": "orgaoServidorLotacao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool