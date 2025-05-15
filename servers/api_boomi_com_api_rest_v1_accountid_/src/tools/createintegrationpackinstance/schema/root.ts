import { z } from "zod"

export const inputParamsSchema = {
  "ProcessId": z.array(z.object({ "name": z.string().describe("The name of the process.").optional(), "originalProcessId": z.string().describe("A unique ID assigned by the system when the process is created.").optional(), "wrapperProcessId": z.string().describe("A unique ID assigned to each process associated with multi-install integration packs. A `wrapperProcessId` is generated when an IntegrationPackInstance is installed or created. \n\n >**Note:** The `wrapperProcessId` will not be returned for the single-install integration pack while making API calls, as it is only generated for the multi-install integration packs.").optional() })).describe("A list of process IDs associated with the integration pack instance").optional(),
  "id": z.string().describe("A unique ID assigned by the system to the installed instance of the integration pack. This field populates only if you install the integration pack in the requesting account.").optional(),
  "integrationPackId": z.string().describe("A unique ID assigned by the system to the integration pack.").optional(),
  "integrationPackOverrideName": z.string().describe("The name of the installed instance of the integration pack. You can set this value only in the case of multi-install integration packs; its purpose is to distinguish between instances.").optional()
}