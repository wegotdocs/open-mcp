import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the workflow."),
  "b_id": z.string().readonly().optional(),
  "name": z.string(),
  "active": z.boolean().readonly().optional(),
  "createdAt": z.string().datetime({ offset: true }).readonly().optional(),
  "updatedAt": z.string().datetime({ offset: true }).readonly().optional(),
  "nodes": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "webhookId": z.string().optional(), "disabled": z.boolean().optional(), "notesInFlow": z.boolean().optional(), "notes": z.string().optional(), "type": z.string().optional(), "typeVersion": z.number().optional(), "executeOnce": z.boolean().optional(), "alwaysOutputData": z.boolean().optional(), "retryOnFail": z.boolean().optional(), "maxTries": z.number().optional(), "waitBetweenTries": z.number().optional(), "onError": z.string().optional(), "position": z.array(z.number()).optional(), "parameters": z.record(z.any()).optional(), "credentials": z.record(z.any()).optional(), "createdAt": z.string().datetime({ offset: true }).readonly().optional(), "updatedAt": z.string().datetime({ offset: true }).readonly().optional() }).strict()),
  "connections": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `connections` to the tool, first call the tool `expandSchema` with \"/properties/connections\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settings` to the tool, first call the tool `expandSchema` with \"/properties/settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "staticData": z.union([z.string().nullable(), z.record(z.any()).nullable()]).optional(),
  "tags": z.array(z.object({ "id": z.string().readonly().optional(), "name": z.string(), "createdAt": z.string().datetime({ offset: true }).readonly().optional(), "updatedAt": z.string().datetime({ offset: true }).readonly().optional() }).strict()).readonly().optional()
}