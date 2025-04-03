import { z } from "zod"

export const toolName = `deleteglossarytermworkflowtrigger`
export const toolDescription = `Delete GlossaryTermWorkflowTrigger`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/triggers/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("User Id"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape