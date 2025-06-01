import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contratoporcpfcnpj",
  "toolDescription": "Consulta um contrato do Poder Executivo Federal pelo CPF/CNPJ do Fornecedor",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/contratos/cpf-cnpj",
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
      "cpfCnpj": "cpfCnpj",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool