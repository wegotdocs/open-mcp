import { z } from "zod"

export const toolName = `getusertaskscreatedbyme`
export const toolDescription = `Получить список созданных пользователем задач`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/user-tasks/created-by-me`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "assigneeOrder",
    "createdAtOrder",
    "deadlineOrder",
    "limit",
    "offset",
    "statusIn",
    "statusOrder",
    "triggerIn",
    "userId"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "assigneeOrder": z.enum(["asc","desc","none"]), "createdAtOrder": z.enum(["asc","desc","none"]), "deadlineOrder": z.enum(["asc","desc","none"]), "limit": z.number().int().optional(), "offset": z.number().int().optional(), "statusIn": z.array(z.enum(["Active","Terminated","Completed"])).min(1).max(2147483647), "statusOrder": z.enum(["asc","desc","none"]), "triggerIn": z.array(z.enum(["create","update","delete","import"])).min(1).max(2147483647), "userId": z.string().uuid() }).shape