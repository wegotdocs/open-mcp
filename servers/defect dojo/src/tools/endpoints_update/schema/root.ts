import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this endpoint."),
  "tags": z.array(z.string().min(1)).optional(),
  "protocol": z.string().max(20).nullable().describe("The communication protocol/scheme such as 'http', 'ftp', 'dns', etc.").optional(),
  "userinfo": z.string().max(500).nullable().describe("User info as 'alice', 'bob', etc.").optional(),
  "host": z.string().max(500).nullable().describe("The host name or IP address. It must not include the port number. For example '127.0.0.1', 'localhost', 'yourdomain.com'.").optional(),
  "port": z.number().int().gte(-2147483648).lte(2147483647).nullable().describe("The network port associated with the endpoint.").optional(),
  "path": z.string().max(500).nullable().describe("The location of the resource, it must not start with a '/'. For example endpoint/420/edit").optional(),
  "query": z.string().max(1000).nullable().describe("The query string, the question mark should be omitted.For example 'group=4&team=8'").optional(),
  "fragment": z.string().max(500).nullable().describe("The fragment identifier which follows the hash mark. The hash mark should be omitted. For example 'section-13', 'paragraph-2'.").optional(),
  "product": z.number().int().nullable().optional()
}