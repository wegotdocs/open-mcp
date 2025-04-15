import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The workflow invocation's name."),
  "pageSize": z.number().int().describe("Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.").optional()
}