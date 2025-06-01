import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "despesasporfuncaomovimentacaoliquida_1",
  "toolDescription": "Consulta de movimentação líquida mensal das despesas do Poder Executivo Federal pela classificação funcional programática",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/coronavirus/movimento-liquido-despesa",
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
      "mesAnoLancamento": "mesAnoLancamento",
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