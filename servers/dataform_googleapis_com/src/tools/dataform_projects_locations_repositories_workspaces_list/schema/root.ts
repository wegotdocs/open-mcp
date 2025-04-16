import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Required. The repository in which to list workspaces. Must be in the format `projects/*/locations/*/repositories/*`."),
  "filter": z.string().describe("Optional. Filter for the returned list.").optional(),
  "orderBy": z.string().describe("Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.").optional(),
  "pageSize": z.number().int().describe("Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.").optional()
}