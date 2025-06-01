import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cartao",
  "toolDescription": "Consulta os registros de Cartões de Pagamento",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/cartoes",
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
      "mesExtratoInicio": "mesExtratoInicio",
      "mesExtratoFim": "mesExtratoFim",
      "dataTransacaoInicio": "dataTransacaoInicio",
      "dataTransacaoFim": "dataTransacaoFim",
      "tipoCartao": "tipoCartao",
      "codigoOrgao": "codigoOrgao",
      "cpfPortador": "cpfPortador",
      "cpfCnpjFavorecido": "cpfCnpjFavorecido",
      "valorDe": "valorDe",
      "valorAte": "valorAte",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool