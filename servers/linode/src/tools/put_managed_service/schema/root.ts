import { z } from "zod"

export const inputParams = {
  "address": z.string().min(3).max(100).describe("The URL at which this Service is monitored. URL parameters such as `?no-cache=1` are preserved. URL fragments/anchors such as `#monitor` are __not__ preserved.").optional(),
  "body": z.string().min(0).max(100).nullable().describe("What to expect to find in the response body for the Service to be considered up.").optional(),
  "consultation_group": z.string().min(0).max(50).describe("The group of ManagedContacts who should be notified or consulted with when an Issue is detected.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Managed Service was created.").readonly().optional(),
  "credentials": z.array(z.number().int()).describe("An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.").optional(),
  "id": z.number().int().describe("__Read-only__ This Service's unique ID.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_ \\.]{3,64}")).min(3).max(64).describe("The label for this Service. This is for display purposes only.").optional(),
  "notes": z.string().nullable().describe("Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.").optional(),
  "region": z.string().nullable().describe("The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.").optional(),
  "service_type": z.enum(["url","tcp"]).describe("How this Service is monitored.").optional(),
  "status": z.enum(["disabled","pending","ok","problem"]).describe("__Read-only__ The current status of this Service.").readonly().optional(),
  "timeout": z.number().int().gte(1).lte(255).describe("How long to wait, in seconds, for a response before considering the Service to be down.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Managed Service was last updated.").readonly().optional()
}