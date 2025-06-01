import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "despesasporplanoorcamentario",
  "toolDescription": "Consulta Plano orçamentário",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/plano-orcamentario",
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
      "codPlanoOrcamentario": "codPlanoOrcamentario",
      "descPlanoOrcamentario": "descPlanoOrcamentario",
      "codPOIdentfAcompanhamento": "codPOIdentfAcompanhamento",
      "ano": "ano",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool