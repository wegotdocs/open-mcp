import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remuneracoesservidores",
  "toolDescription": "Consulta remunerações de um servidor do Poder Executivo Federal pelo CPF ou idServidorAposentadoPensionista e mês/ano",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/servidores/remuneracao",
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
      "id": "id",
      "cpf": "cpf",
      "mesAno": "mesAno",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool