import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "recursosrecebidos",
  "toolDescription": "Recebimento de recursos por favorecido",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/recursos-recebidos",
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
      "mesAnoInicio": "mesAnoInicio",
      "mesAnoFim": "mesAnoFim",
      "nomeFavorecido": "nomeFavorecido",
      "codigoFavorecido": "codigoFavorecido",
      "tipoFavorecido": "tipoFavorecido",
      "uf": "uf",
      "codigoIBGE": "codigoIBGE",
      "orgaoSuperior": "orgaoSuperior",
      "orgao": "orgao",
      "unidadeGestora": "unidadeGestora",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool