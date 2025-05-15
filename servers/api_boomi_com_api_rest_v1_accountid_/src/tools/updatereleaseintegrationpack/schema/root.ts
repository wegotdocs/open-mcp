import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "ReleasePackagedComponents": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ReleasePackagedComponents` to the tool, first call the tool `expandSchema` with \"/properties/ReleasePackagedComponents\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "b_id": z.string().describe("The ID of the integration pack.").optional(),
  "installationType": z.enum(["SINGLE","MULTI"]).describe("The type of integration pack. Possible values:\n\n- SINGLE — single attachment \n- MULTI — multiple attachment").optional(),
  "name": z.string().describe("The name of the integration pack.").optional(),
  "releaseOnDate": z.string().describe("Date for future release of integration pack. \nDate Format: yyyy-MM-dd").optional(),
  "releaseSchedule": z.enum(["IMMEDIATELY","RELEASE_ON_SPECIFIED_DATE"]).describe("Specify the type of release schedule for the integration pack. Possible values:\n- IMMEDIATELY — for immediate release\n- RELEASE_ON_SPECIFIED_DATE — for future release").optional(),
  "releaseStatusUrl": z.string().describe("The complete endpoint URL used to make a second call to the ReleaseIntegrationPackStatus object. \nIt is provided for your convenience in the `releaseStatusUrl` field of the initial POST response.").optional(),
  "requestId": z.string().describe("A unique ID assigned by the system to the integration pack release request.").optional()
}