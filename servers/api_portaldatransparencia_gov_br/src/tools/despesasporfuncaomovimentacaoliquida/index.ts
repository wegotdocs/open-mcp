import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "despesasporfuncaomovimentacaoliquida",
  "toolDescription": "Consulta de movimentação líquida anual das despesas do Poder Executivo Federal pela classificação funcional programática",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/por-funcional-programatica/movimentacao-liquida",
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
      "ano": "ano",
      "funcao": "funcao",
      "subfuncao": "subfuncao",
      "programa": "programa",
      "acao": "acao",
      "grupoDespesa": "grupoDespesa",
      "elementoDespesa": "elementoDespesa",
      "modalidadeAplicacao": "modalidadeAplicacao",
      "idPlanoOrcamentario": "idPlanoOrcamentario",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool