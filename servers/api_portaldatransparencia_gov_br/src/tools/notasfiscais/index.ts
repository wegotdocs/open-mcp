import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "notasfiscais",
  "toolDescription": "Consulta todas as notas fiscais eletrônicas (NFe´s) do Poder Executivo Federal",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/notas-fiscais",
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
      "cnpjEmitente": "cnpjEmitente",
      "codigoOrgao": "codigoOrgao",
      "nomeProduto": "nomeProduto",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool