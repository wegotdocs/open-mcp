import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "despesaspororgao",
  "toolDescription": "Consulta as despesas dos órgão do Poder Executivo Federal",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/por-orgao",
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
      "ano": "ano",
      "orgaoSuperior": "orgaoSuperior",
      "orgao": "orgao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool