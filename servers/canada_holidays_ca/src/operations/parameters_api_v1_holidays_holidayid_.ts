import { z } from "zod"

export const toolName = `parameters_api_v1_holidays_holidayid_`
export const toolDescription = ``
export const baseUrl = `https://canada-holidays.ca`
export const path = `/api/v1/holidays/{holidayId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape