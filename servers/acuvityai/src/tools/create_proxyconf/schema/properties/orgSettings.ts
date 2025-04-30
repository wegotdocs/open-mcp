import { z } from "zod"

export const inputParamsSchema = {
  "CA": z.string().describe("The Certificate authority to use to validate user certificates in PEM format.").optional(),
  "CACommonNames": z.array(z.string()).describe("The currently used Certificate authorities's Common Name.").readonly().optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessPolicy": z.string().describe("The rego policy that decides if the incoming request can access the\nprovider. If this empty, the dynamic policy transpiled from\nAccessPolicies API objects will be used by Apexes. If set however,\neverything computed by API objects are ignored and this becomes the final\npolicy.").optional(),
  "allowSupportAccess": z.boolean().describe("When enabled, an API authorization will be created in your\norganization to allow the Support Team to access your organization in\nread-only fashion to help you with any issue you might have.\nDisable it again to remove the permissions.").optional(),
  "askConsent": z.boolean().describe("Ask the user of web applications for consent before accessing a monitored\nprovider, using an html splash screen the first time they connect. If\nthis is not set, the users of the providers can still figure out the\nprovider is monitored. This is a courtesy and not a security feature.").optional(),
  "assignPolicy": z.string().describe("The rego policy that decides in which team an user should be in. The team\nwill be passed to the accessPolicy. If this empty, the dynamic policy\ntranspiled from AssignPolicies API objects will be used by Apexes. If set\nhowever, everything computed by API objects are ignored and this becomes\nthe final policy.").optional(),
  "contentPolicy": z.string().describe("The policy that decides how to handle the request content, once access\nhas been granted by accessPolicy and the content analysis was performed.\nIf this empty, the dynamic policy transpiled from AccessPolicies API\nobjects will be used by Apexes. If set however, everything computed by\nAPI objects are ignored and this becomes the final policy.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "disableURLDiscovery": z.boolean().describe("If true, it disables discovering of the visited URLs.").optional(),
  "fingerprints": z.array(z.string()).describe("the fingerprint of the cas in the chain.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "profile": z.string().describe("A few sentences about the organization. The description must be short\nand detailed. It will be used by the inference engine to decide if the content\nsent by the users are relevant to your company.").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providersWithoutConsent": z.array(z.string()).describe("The providers which do not request employees' consent.").optional(),
  "safeUsageURL": z.string().describe("A link to the AI Safe Usage Document for the organization. \nIf provided, it is presented in the consent banner to the employees.").optional(),
  "storeInputFiles": z.boolean().describe("If set, files uploaded by the users will be stored.").optional(),
  "storeOutputFiles": z.boolean().describe("If set, files sent to the users will be stored.").optional(),
  "subjectKeyIDs": z.array(z.string()).describe("the IDs of the subject keys of the cas in the chain.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useRegoCodeOnly": z.boolean().describe("If true, it uses Rego code to define team assignment, provider access and\ncontent policies.").optional()
}