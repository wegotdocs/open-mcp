import { z } from "zod"

export const inputParamsSchema = {
  "resource": z.string().describe("REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field."),
  "permissions": z.array(z.string()).describe("The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).").optional()
}