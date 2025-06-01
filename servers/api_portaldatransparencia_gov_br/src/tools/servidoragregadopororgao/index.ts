import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "servidoragregadopororgao",
  "toolDescription": "Consulta de servidores agregados por órgão",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/servidores/por-orgao",
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
      "orgaoLotacao": "orgaoLotacao",
      "orgaoExercicio": "orgaoExercicio",
      "tipoServidor": "tipoServidor",
      "tipoVinculo": "tipoVinculo",
      "licenca": "licenca",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool