import { z } from "zod"

export const toolName = `updatepartner`
export const toolDescription = `Update a partner`
export const baseUrl = `https://api.billingo.hu/v3`
export const path = `/partners/{id}`
export const method = `put`
export const security = [
  {
    "key": "X-API-KEY",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-API-KEY"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.number().int() }).optional(), "body": z.object({ "account_number": z.string().optional(), "address": z.object({ "address": z.string(), "city": z.string(), "country_code": z.enum(["","AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XA","XB","XK","YE","YT","ZA","ZM","ZW"]), "post_code": z.string() }), "emails": z.array(z.string()).optional(), "general_ledger_number": z.string().optional(), "iban": z.string().optional(), "name": z.string(), "phone": z.string().optional(), "swift": z.string().optional(), "taxcode": z.string().optional() }).optional() }).shape