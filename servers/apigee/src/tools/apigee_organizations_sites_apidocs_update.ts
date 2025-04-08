import { z } from "zod"

export const toolName = `apigee_organizations_sites_apidocs_update`
export const toolDescription = `Updates a catalog item.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "sitesId",
    "apidocsId"
  ],
  "cookie": [],
  "body": [
    "requireCallbackUrl",
    "imageUrl",
    "siteId",
    "visibility",
    "categoryIds",
    "anonAllowed",
    "modified",
    "description",
    "edgeAPIProductName",
    "id",
    "published",
    "title",
    "apiProductName"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "apidocsId": z.string(),
  "requireCallbackUrl": z.boolean().describe("Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).").optional(),
  "imageUrl": z.string().describe("Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for [image files stored in the portal](/apigee/docs/api-platform/publish/portal/portal-files\"), for example, `/files/book-tree.jpg`. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by [content security policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083 characters.").optional(),
  "siteId": z.string().describe("Output only. The ID of the parent portal.").readonly().optional(),
  "visibility": z.boolean().describe("Optional. DEPRECATED: use the `published` field instead").optional(),
  "categoryIds": z.array(z.string()).describe("Optional. The IDs of the API categories to which this catalog item belongs.").optional(),
  "anonAllowed": z.boolean().describe("Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.").optional(),
  "modified": z.string().describe("Output only. Time the catalog item was last modified in milliseconds since epoch.").readonly().optional(),
  "description": z.string().describe("Optional. Description of the catalog item. Max length is 10,000 characters.").optional(),
  "edgeAPIProductName": z.string().describe("Optional. Immutable. DEPRECATED: use the `apiProductName` field instead").optional(),
  "id": z.string().describe("Output only. The ID of the catalog item.").readonly().optional(),
  "published": z.boolean().describe("Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the `anonAllowed` flag.").optional(),
  "title": z.string().describe("Required. The user-facing name of the catalog item. `title` must be a non-empty string with a max length of 255 characters.").optional(),
  "apiProductName": z.string().describe("Required. Immutable. The `name` field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product.").optional()
}