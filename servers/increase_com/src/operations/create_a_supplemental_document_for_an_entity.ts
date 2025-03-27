import { z } from "zod"

export const toolName = `create_a_supplemental_document_for_an_entity`
export const toolDescription = `Create a supplemental document for an Entity`
export const baseUrl = `https://api.increase.com`
export const path = `/entities/{entity_id}/supplemental_documents`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "entity_id": z.string().describe("The identifier of the Entity to retrieve.") }).optional(), "body": z.object({ "file_id": z.string().describe("The identifier of the File containing the document.") }).optional() }).shape