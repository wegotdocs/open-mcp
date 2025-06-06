import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_6",
  "toolDescription": "Create contact",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/contacts",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "assignedTo": "assignedTo",
      "assignedToTeam": "assignedToTeam",
      "title": "title",
      "name": "name",
      "surname": "surname",
      "company": "company",
      "address": "address",
      "notes": "notes",
      "identcard": "identcard",
      "email": "email",
      "mobile": "mobile",
      "telephone": "telephone",
      "fax": "fax",
      "web": "web",
      "language": "language",
      "country": "country",
      "archived": "archived",
      "typeBuyer": "typeBuyer",
      "typeCollaborator": "typeCollaborator",
      "typeDeveloper": "typeDeveloper",
      "typeLawyer": "typeLawyer",
      "typeOwner": "typeOwner",
      "typeServiceco": "typeServiceco",
      "typeTenantLong": "typeTenantLong",
      "typeTenantShort": "typeTenantShort",
      "sentBy": "sentBy",
      "sentTo": "sentTo",
      "lawyer": "lawyer",
      "source": "source",
      "sourceDetails": "sourceDetails",
      "leadStatus": "leadStatus",
      "saleStage": "saleStage",
      "tags": "tags",
      "allowAutoEmailDealAlert": "allowAutoEmailDealAlert",
      "allowAutoEmailMarketing": "allowAutoEmailMarketing"
    }
  },
  inputParamsSchema
}

export default tool