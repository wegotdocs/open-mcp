import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "compliances": z.array(z.string()).describe("The list of compliance provided by the domain.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataResidency": z.array(z.string()).describe("The user data storage location.").optional(),
  "dataSharing": z.boolean().describe("Does the provider share user data with 3rd party or services.").optional(),
  "dataSharingConsent": z.boolean().describe("Does the provider share user data with consent with 3rd party or services.").optional(),
  "description": z.string().describe("A brief description about the AI domain and what services it provides.").optional(),
  "domain": z.string().describe("The domain of the AI provider."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "isAIDomain": z.boolean().describe("Flag to say if the domain is a AI domain or not.").optional(),
  "models": z.array(z.string()).describe("List of AI models used by the domain.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providerName": z.string().describe("The name of the main provider.").optional(),
  "providerRetentionPolicies": z.array(z.object({ "description": z.string().describe("Description of the data retention policy for the subscription type.").optional(), "duration": z.string().describe("The duration of time the data retention policy applies to the subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined.") }).describe("Represents data retention policy for a given subscription type.")).describe("The data retention policies by the domain for each type of users.").optional(),
  "providerTrainingPolicies": z.array(z.object({ "description": z.string().describe("Description of the data usage policy for a subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined."), "useData": z.boolean().describe("User Data usage to train or improve the models based on the subscription type.").optional() }).describe("Represents provider data usage policy for a given subscription type.")).describe("Does the provider use user data for training its model.").optional(),
  "riskExplanation": z.string().describe("A Markdown formatted string explaining the risk score.").optional(),
  "riskScore": z.number().describe("The risk score for the domain."),
  "thirdPartyModelUsage": z.boolean().describe("Does provider use third party model.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}