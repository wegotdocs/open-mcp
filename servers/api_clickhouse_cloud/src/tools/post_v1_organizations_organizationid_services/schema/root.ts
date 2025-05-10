import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that will own the service."),
  "name": z.string().describe("Name of the service. Alphanumerical string with whitespaces up to 50 characters.").optional(),
  "provider": z.enum(["aws","gcp","azure"]).describe("Cloud provider").optional(),
  "region": z.enum(["ap-south-1","ap-southeast-1","eu-central-1","eu-west-1","eu-west-2","us-east-1","us-east-2","us-west-2","ap-southeast-2","ap-northeast-1","me-central-1","us-east1","us-central1","europe-west4","asia-southeast1","eastus","eastus2","westus3","germanywestcentral"]).describe("Service region.").optional(),
  "ipAccessList": z.array(z.any()).describe("List of IP addresses allowed to access the service").optional(),
  "minReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Minimum total memory of each replica during auto-scaling in Gb. Must be a multiple of 4 and greater than or equal to 8.").optional(),
  "maxReplicaMemoryGb": z.number().multipleOf(4).gte(8).lte(236).describe("Maximum total memory of each replica during auto-scaling in Gb.  Must be a multiple of 4 and lower than or equal to 120* for non paid services or 236* for paid services.* - maximum replica size subject to cloud provider hardware availability in your selected region. ").optional(),
  "numReplicas": z.number().gte(1).lte(20).describe("Number of replicas for the service. The number of replicas must be between 2 and 20 for the first service in a warehouse. Services that are created in an existing warehouse can have a number of replicas as low as 1. Further restrictions may apply based on your organization's tier. It defaults to 1 for the BASIC tier and 3 for the SCALE and ENTERPRISE tiers.").optional(),
  "idleScaling": z.boolean().describe("When set to true the service is allowed to scale down to zero when idle. True by default.").optional(),
  "idleTimeoutMinutes": z.number().describe("Set minimum idling timeout (in minutes). Must be >= 5 minutes.").optional(),
  "isReadonly": z.boolean().describe("True if this service is read-only. It can only be read-only if a dataWarehouseId is provided.").optional(),
  "dataWarehouseId": z.string().describe("Data warehouse containing this service").optional(),
  "backupId": z.string().uuid().describe("Optional backup ID used as an initial state for the new service. When used the region and the tier of the new instance must be the same as the values of the original instance.").optional(),
  "encryptionKey": z.string().describe("Optional customer provided disk encryption key").optional(),
  "encryptionAssumedRoleIdentifier": z.string().describe("Optional role to use for disk encryption").optional(),
  "privatePreviewTermsChecked": z.boolean().describe("Accept the private preview terms and conditions. It is only needed when creating the first service in the organization in case of a private preview").optional(),
  "releaseChannel": z.enum(["default","fast"]).describe("Select fast if you want to get new ClickHouse releases as soon as they are available. You'll get new features faster, but with a higher risk of bugs. This feature is only available for production services.").optional(),
  "byocId": z.string().describe("This is the ID returned after setting up a region for Bring Your Own Cloud (BYOC). When the byocId parameter is specified, the minReplicaMemoryGb and the maxReplicaGb parameters are required too, with values included among the following sizes: 28, 60, 124, 188, 252, 380.").optional(),
  "hasTransparentDataEncryption": z.boolean().describe("True if the service should have the Transparent Data Encryption (TDE) enabled. TDE is only available for ENTERPRISE organizations tiers and can only be enabled at service creation.").optional(),
  "endpoints": z.array(z.any()).describe("List of service endpoints to enable or disable").optional()
}