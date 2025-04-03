import { z } from "zod"

export const toolName = `getusertasksassignedtome`
export const toolDescription = `Получить список назначенных на пользователя задач`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/user-tasks/assigned-to-me`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "createdAtOrder",
    "deadlineOrder",
    "initiatorOrder",
    "limit",
    "offset",
    "statusIn",
    "statusOrder",
    "triggerIn",
    "userId"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "createdAtOrder": z.enum(["asc","desc","none"]), "deadlineOrder": z.enum(["asc","desc","none"]), "initiatorOrder": z.enum(["asc","desc","none"]), "limit": z.number().int().optional(), "offset": z.number().int().optional(), "statusIn": z.array(z.enum(["Active","Terminated","Completed"])).min(1).max(2147483647), "statusOrder": z.enum(["asc","desc","none"]), "triggerIn": z.array(z.enum(["create","update","delete","import"])).min(1).max(2147483647), "userId": z.string().uuid() }).shape