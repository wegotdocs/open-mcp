import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "forceReimportTemplate": z.boolean().describe("This property if true will force reimport the template data. Setting it false is\na noop.").optional(),
  "githubSigninEnabled": z.boolean().describe("Enables the global Sign In With Github for the organization.").optional(),
  "gitlabSigninEnabled": z.boolean().describe("Enables the global Sign In With Gitlab for the organization.").optional(),
  "googleSigninEnabled": z.boolean().describe("Enables the global Sign In With Google for the organization.").optional(),
  "huggingfaceSigninEnabled": z.boolean().describe("Enables the global Sign In With Huggingface for the organization.").optional(),
  "mode": z.enum(["Trial","TrialEmployees","TrialApps","Pilot","Normal","NormalEmployees","NormalApps","Blocked","Dead"]).describe("The mode of the organization.").optional(),
  "name": z.string().describe("The name of the organization."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "reimportTemplate": z.boolean().describe("This is an internal property used to decide if the org template needs to be\nreimported.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s). If set it will\nconfigure the complete subject of the admin api authorization, ignoring anything\npassed in claims.").optional(),
  "type": z.enum(["Full","Single"]).describe("The type of organization. Either Full or Single. Full represents an organization\nthat will need to onboard additional users, while Single represents a single\nuser account.").optional()
}