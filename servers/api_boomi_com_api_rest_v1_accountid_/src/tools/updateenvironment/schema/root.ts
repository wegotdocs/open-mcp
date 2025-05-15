import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID assigned by the system to the environment."),
  "classification": z.enum(["PROD","TEST"]).describe("\\(Optional\\) For accounts with Unlimited environment support, the type of environment.The choices are PROD \\(Production\\) and TEST. The environment classification determines the type of license used when deploying a process to the environment. The default classification is PROD.<br />You can assign the value TEST only if the requesting account has Test Connection Licensing enabled.<br />You can set the classification only when you add an environment. You cannot change the classification later.<br />Environments added prior to the January 2014 release have their classification set to PROD. \n\n >**Note:** The classification field is invalid for requests from accounts with Basic environment support because all environments are production environments.").optional(),
  "b_id": z.string().describe("A unique ID assigned by the system to the environment.").optional(),
  "name": z.string().describe("A user-defined name for the environment.").optional(),
  "parentAccount": z.string().optional(),
  "parentEnvironment": z.string().optional()
}