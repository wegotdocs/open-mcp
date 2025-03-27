import { z } from "zod"

export const toolName = `post_hub_documents`
export const toolDescription = `Add a document (this document is analyzed to be saved in the correct folder and correct space)`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/hub/documents`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "Accounting": z.object({ "AccountedOn": z.string().optional(), "Workbook": z.enum(["customer","provider","bank","cashWoucher","fiscal","insurance","social","other","permanent"]).optional(), "YearMonth": z.string().optional() }).optional(), "AddContractAllowed": z.boolean().optional(), "Author": z.string().optional(), "Comment": z.string().optional(), "Date": z.string().optional(), "File": z.object({ "Content64Encoded": z.string().optional(), "Name": z.string().optional() }), "Title": z.string() }).optional() }).shape