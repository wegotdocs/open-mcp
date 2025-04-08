import { z } from "zod"

export const toolName = `images_update`
export const toolDescription = `Update an Image`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/images/{image_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "image_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "distribution",
    "description"
  ]
}
export const flatMap = {}

export const inputParams = {
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image."),
  "name": z.string().describe("The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.").optional(),
  "distribution": z.enum(["Arch Linux","CentOS","CoreOS","Debian","Fedora","Fedora Atomic","FreeBSD","Gentoo","openSUSE","RancherOS","Rocky Linux","Ubuntu","Unknown"]).describe("The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.").optional(),
  "description": z.string().describe("An optional free-form text field to describe an image.").optional()
}