import { z } from "zod";
export const inputParams = {
    "spec": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `spec` to the tool, first call the tool `expandSchema` with \"/properties/spec\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The desired configuration of an application.</property-description>"),
    "project_id": z.string().describe("The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project.").optional(),
    "Accept": z.enum(["application/json", "application/yaml"]).describe("The content-type that should be used by the response. By default, the response will be `application/json`. `application/yaml` is also supported.").optional(),
    "Content-Type": z.enum(["application/json", "application/yaml"]).describe("The content-type used for the request. By default, the requests are assumed to use `application/json`. `application/yaml` is also supported.").optional()
};
