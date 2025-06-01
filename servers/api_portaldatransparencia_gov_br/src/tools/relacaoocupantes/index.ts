import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "relacaoocupantes",
  "toolDescription": "Consulta relação de ocupantes",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/permissionarios",
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
      "codigoOrgaoResponsavelGestaoSiafi": "codigoOrgaoResponsavelGestaoSiafi",
      "descricaoOrgaoOcupante": "descricaoOrgaoOcupante",
      "cpfOcupante": "cpfOcupante",
      "dataInicioOcupacao": "dataInicioOcupacao",
      "dataFimOcupacao": "dataFimOcupacao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool