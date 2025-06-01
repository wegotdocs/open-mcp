import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_consulta_cep_cep_",
  "toolDescription": "Consulta CEP",
  "baseUrl": "https://h-apigateway.conectagov.np.estaleiro.serpro.gov.br/api-cep/v1",
  "path": "/consulta/cep/{cep}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "cep": "cep"
    },
    "header": {
      "x-cpf-usuario": "x-cpf-usuario"
    }
  },
  inputParamsSchema
}

export default tool