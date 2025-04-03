import { z } from "zod"

export const toolName = `getspecificglossarytermworkflowtriggerversion`
export const toolDescription = `Get a version of GlossaryTermWorkflowTrigger`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/triggers/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("GlossaryTermWorkflowTrigger Id"), "version": z.string().describe("GlossaryTermWorkflowTrigger version number in the form `major`.`minor`") }).shape