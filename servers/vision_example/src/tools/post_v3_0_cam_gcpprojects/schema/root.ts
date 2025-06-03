import { z } from "zod"

export const inputParamsSchema = {
  "workloadIdentityPoolId": z.string().max(254).describe("The ID of the Google Cloud workload identity pool."),
  "oidcProviderId": z.string().max(254).describe("The ID of the Google Cloud OpenID Connect (OIDC) provider."),
  "serviceAccountId": z.string().max(254).describe("The ID of the Google Cloud service account."),
  "projectNumber": z.string().max(30).describe("The GCP project number."),
  "name": z.string().max(254).describe("The name of the Google Cloud project to be used in Cloud Accounts."),
  "description": z.string().max(254).describe("The description of the Google Cloud project.\nIf there is no description, the field is empty.\n").optional(),
  "gcpRegion": z.enum(["us-west1","us-west2","us-west3","us-west4","us-central1","us-east1","us-east4","northamerica-northeast1","southamerica-east1","europe-west1","europe-west2","europe-west3","europe-west6","europe-central2","asia-south1","asia-southeast1","asia-southeast2","asia-east1","asia-east","asia-northeast1","asia-northeast2","asia-northeast3","australia-southeast1"]).describe("The region where Cloud Accounts is deployed."),
  "features": z.array(z.object({ "id": z.literal("cloud-sentry").describe("The ID of the feature."), "regions": z.array(z.string().max(254)).describe("The regions where the features are deployed.\n\nDefault: All Cloud Accounts supported regions, depending on how the feature stack filters the regions.\n").optional() })).describe("The list of selected features and the corresponding regions for deployment.\n").optional()
}