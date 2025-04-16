import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("Required. The repository in which to list release configs. Must be in the format `projects/*/locations/*/repositories/*`."),
  "pageSize": z.number().int().describe("Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.").optional(),
  "pageToken": z.string().describe("Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.").optional()
}