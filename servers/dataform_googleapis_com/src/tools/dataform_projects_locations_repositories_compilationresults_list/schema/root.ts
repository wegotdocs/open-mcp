import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Required. The repository in which to list compilation results. Must be in the format `projects/*/locations/*/repositories/*`."),
  "pageSize": z.number().int().describe("Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.").optional()
}