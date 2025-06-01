import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listarfuncoesecargos",
  "toolDescription": "Código da Função ou Cargo de Confiança",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/servidores/funcoes-e-cargos",
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
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool