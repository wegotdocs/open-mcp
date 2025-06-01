import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "relacaoimoveis",
  "toolDescription": "Consulta relação de imóveis",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/imoveis",
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
      "codigoOrgaoSiafiResponsavelGestao": "codigoOrgaoSiafiResponsavelGestao",
      "situacao": "situacao",
      "regiao": "regiao",
      "cep": "cep",
      "endereco": "endereco",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool