import { z } from "zod"

export const toolName = `sendclientlog`
export const toolDescription = `Send client log`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/logs/client`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.any().optional() }).shape