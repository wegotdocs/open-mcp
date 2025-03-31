import { z } from "zod"

export const toolName = `dynamicmodulesresource_removemodules_delete`
export const toolDescription = `Remove modules`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/app/module/dynamic`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "q_moduleKey": z.array(z.string()).describe("The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.\nFor example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.\nNonexistent keys are ignored.").optional() }).shape