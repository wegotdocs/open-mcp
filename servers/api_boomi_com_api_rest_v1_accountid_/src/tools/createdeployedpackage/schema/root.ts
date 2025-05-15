import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().describe("Identifies if the packaged component is actively deployed.").optional(),
  "branchName": z.string().optional(),
  "componentId": z.string().describe("The ID of the component. You can use the `componentId` to create and deploy a new packaged component. The **component ID** is available in the **Revision History** dialog, which you can access from the **Build** page in the user interface.").optional(),
  "componentType": z.string().describe("The type of component: <br />-   certificate<br />-   customlibrary<br />-   flowservice<br />-   process<br />-   processroute<br />-   tpgroup<br />-   webservice").optional(),
  "componentVersion": z.number().int().describe("The Revision History number assigned to each saved configuration change made to a component on the **Build** tab. The component version is available in the **Revision History** dialog, which you can access from the **Build** page in the service.").optional(),
  "deployedBy": z.string().describe("The user ID of the user who deployed the packaged component.").optional(),
  "deployedDate": z.string().datetime({ offset: true }).describe("The date and time you deployed the packaged component.").optional(),
  "deploymentId": z.string().describe("The ID of the deployment.").optional(),
  "environmentId": z.string().describe("The ID of the environment.").optional(),
  "listenerStatus": z.enum(["RUNNING","PAUSED"]).describe("\\(Optional, for packaged listener processes only\\) The status of a listener process as RUNNING or PAUSED. If you do not specify `listenerStatus` \\(or you specify an invalid value\\), the current status remains unchanged. By default, the deployment of listener processes are in a running state.<br />**Important:** This field is only available for the CREATE operation. To retrieve the status of deployed listeners, use the [Listener Status object](/api/platformapi#tag/ListenerStatus).").optional(),
  "message": z.string().describe("This tag is returned with the following message only when a successful additional deployment is performed after utilizing all the available connections in the account for CREATE operation: \n\n ``` <bns:message>Your packaged components were successfully deployed. You have exceeded the usage count in your current connection licenses by 15. Contact a Boomi representative to purchase a higher connection licenses count.</bns:message> ```").optional(),
  "notes": z.string().describe("Notes that describe the deployment.").optional(),
  "packageId": z.string().describe("The ID of the packaged component. You can use `packageId` to deploy an existing packaged component. The packaged component ID is available from the:<br />-   Packaged Component object<br />-   The **Packaged Component Details** page on the **Deploy** \\> **Packaged Components** page in the user interface.").optional(),
  "packageVersion": z.string().describe("The user-defined version of the packaged component.").optional(),
  "version": z.number().int().describe("The version number generated automatically for a deployment.").optional()
}