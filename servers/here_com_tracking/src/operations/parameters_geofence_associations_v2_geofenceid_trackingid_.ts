import { z } from "zod"

export const toolName = `parameters_geofence_associations_v2_geofenceid_trackingid_`
export const toolDescription = ``
export const baseUrl = `https://tracking.api.here.com`
export const path = `/geofence-associations/v2/{geofenceId}/{trackingId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape