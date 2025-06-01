import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "emendas",
  "toolDescription": "Consulta as emendas parlamentares",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/emendas",
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
      "codigoEmenda": "codigoEmenda",
      "numeroEmenda": "numeroEmenda",
      "nomeAutor": "nomeAutor",
      "tipoEmenda": "tipoEmenda",
      "ano": "ano",
      "codigoFuncao": "codigoFuncao",
      "codigoSubfuncao": "codigoSubfuncao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool