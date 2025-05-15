import { z } from "zod"

export const inputParamsSchema = {
  "branchName": z.string().describe("The name of the branch on which you want to create a packaged component."),
  "componentId": z.string().describe("The ID of the component.The **component ID** is available on the **Revision History** dialog, which you can access from the **Build** page in the user interface."),
  "componentType": z.string().describe("The type of component: <br />-   certificate<br />-   customlibrary<br />-   flowservice<br />-   process<br />-   processroute<br />-   tpgroup<br />-   webservice"),
  "componentVersion": z.number().int().describe("When you save the component configuration change on the **Build** tab, this is the assigned Revision History number. You can find the component version in the **Revision History** dialog, which you can access from the **Build** page in the service.").optional(),
  "createdBy": z.string().describe("The user ID of the person who created the packaged component."),
  "createdDate": z.string().datetime({ offset: true }).describe("The creation date and time of the packaged component."),
  "deleted": z.boolean().optional(),
  "fullyPubliclyConsumable": z.boolean().optional(),
  "notes": z.string().describe("Notes that describe the packaged component."),
  "packageId": z.string().describe("The ID of the packaged component."),
  "packageVersion": z.string().describe("The user-defined version of the packaged component. Generates a value automatically based on the component's revision number if you do not specify a packaged component version."),
  "shareable": z.boolean().describe("\\(For processes and API Service components only\\) Identifies whether you can share the packaged component in the **Process Library** or as part of an integration pack. \n\n >**Note:** You cannot share processes that contain **Process Route** components in the **Process Library** or as part of an integration pack.").optional()
}