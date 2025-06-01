import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ceis",
  "toolDescription": "Consulta os registros do CEIS por CNPJ ou CPF Sancionado/Órgão Sancionador/Período",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/ceis",
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
      "codigoSancionado": "codigoSancionado",
      "nomeSancionado": "nomeSancionado",
      "orgaoSancionador": "orgaoSancionador",
      "dataInicialSancao": "dataInicialSancao",
      "dataFinalSancao": "dataFinalSancao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool