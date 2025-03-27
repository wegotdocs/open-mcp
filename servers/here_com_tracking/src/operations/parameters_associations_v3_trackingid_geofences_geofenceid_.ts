import { z } from "zod"

export const toolName = `parameters_associations_v3_trackingid_geofences_geofenceid_`
export const toolDescription = ``
export const baseUrl = `https://tracking.api.here.com`
export const path = `/associations/v3/{trackingId}/geofences/{geofenceId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape