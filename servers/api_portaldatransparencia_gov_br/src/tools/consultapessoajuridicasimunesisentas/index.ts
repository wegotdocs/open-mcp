import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "consultapessoajuridicasimunesisentas",
  "toolDescription": "Consulta Pessoas Jurídicas Imunes e Isentas",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/renuncias-fiscais-empresas-imunes-isentas",
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
      "nomeSiglaUF": "nomeSiglaUF",
      "codigoIbge": "codigoIbge",
      "cnpj": "cnpj",
      "beneficiarioNomeFantasia": "beneficiarioNomeFantasia",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool