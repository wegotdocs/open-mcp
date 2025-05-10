import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "credentials": z.union([z.object({ "password": z.string(), "username": z.string() }), z.object({}), z.object({ "clientId": z.string(), "clientSecret": z.string(), "scope": z.string(), "tokenEndpoint": z.string() })]),
  "info": z.union([z.null(), z.string()]).optional(),
  "name": z.string()
}