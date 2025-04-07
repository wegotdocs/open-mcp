import { z } from "zod"

export const toolName = `launchinstance`
export const toolDescription = `Launch instances`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/instance-operations/launch`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
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
  "path": [],
  "cookie": [],
  "body": [
    "region_name",
    "instance_type_name",
    "ssh_key_names",
    "file_system_names",
    "name",
    "image",
    "user_data"
  ]
}
export const flatMap = {}

export const inputParams = {
  "region_name": z.enum(["europe-central-1","asia-south-1","australia-east-1","me-west-1","asia-northeast-1","asia-northeast-2","us-east-1","us-west-2","us-west-1","us-south-1","us-west-3","us-midwest-1","us-east-2","us-south-2","us-south-3","us-east-3","us-midwest-2","test-east-1","test-west-1"]).describe("The region into which you want to launch the instance."),
  "instance_type_name": z.string().describe("The type of instance you want to launch. To retrieve a list of available instance types, see\n[List available instance types](#get-/api/v1/instance-types)."),
  "ssh_key_names": z.array(z.string()).describe("The names of the SSH keys you want to use to provide access to the instance.\nCurrently, exactly one SSH key must be specified."),
  "file_system_names": z.array(z.string()).describe("The names of the filesystems you want to attach to the instance.\nCurrently, you can attach only one filesystem during instance creation.\nBy default, no filesystems are attached.").optional(),
  "name": z.string().min(0).max(64).describe("The name you want to assign to your instance. Must be 64 characters or fewer.").optional(),
  "image": z.union([z.object({ "id": z.string() }).describe("Specifies the image to use by its unique identifier."), z.object({ "family": z.string().describe("The family name of the image.") }).describe("Specifies the image to use by its family name.")]).describe("The machine image you want to use. Defaults to the latest Lambda Stack image.").optional(),
  "user_data": z.string().describe("An instance configuration string specified in a valid\n[cloud-init user-data](https://cloudinit.readthedocs.io/en/latest/explanation/format.html)\nformat. You can use this field to configure your instance on launch. The\nuser data string must be plain text and cannot exceed 1MB in size.").optional()
}