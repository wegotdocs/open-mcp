import { z } from "zod"

export const inputParamsSchema = {
  "resource": z.string().describe("REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field."),
  "policy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `policy` to the tool, first call the tool `expandSchema` with \"/properties/policy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.</property-description>").optional()
}