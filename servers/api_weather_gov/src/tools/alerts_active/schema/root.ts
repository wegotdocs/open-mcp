import { z } from "zod"

export const inputParamsSchema = {
  "status": z.array(z.enum(["actual","exercise","system","test","draft"])).describe("Status (actual, exercise, system, test, draft)").optional(),
  "message_type": z.array(z.enum(["alert","update","cancel"])).describe("Message type (alert, update, cancel)").optional(),
  "event": z.array(z.string().regex(new RegExp("^[A-Za-z0-9 ]+$"))).describe("Event name").optional(),
  "code": z.array(z.string().regex(new RegExp("^\\w{3}$"))).describe("Event code").optional(),
  "area": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("State/territory code or marine area code\nThis parameter is incompatible with the following parameters: point, region, region_type, zone\n").optional(),
  "point": z.string().regex(new RegExp("^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$")).describe("Point (latitude,longitude)\nThis parameter is incompatible with the following parameters: area, region, region_type, zone\n").optional(),
  "region": z.array(z.enum(["AL","AT","GL","GM","PA","PI"]).describe("Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n")).describe("Marine region code\nThis parameter is incompatible with the following parameters: area, point, region_type, zone\n").optional(),
  "region_type": z.enum(["land","marine"]).describe("Region type (land or marine)\nThis parameter is incompatible with the following parameters: area, point, region, zone\n").optional(),
  "zone": z.array(z.string().regex(new RegExp("^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\\d{3}$")).describe("UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n")).describe("Zone ID (forecast or county)\nThis parameter is incompatible with the following parameters: area, point, region, region_type\n").optional(),
  "urgency": z.array(z.enum(["Immediate","Expected","Future","Past","Unknown"])).describe("Urgency (immediate, expected, future, past, unknown)").optional(),
  "severity": z.array(z.enum(["Extreme","Severe","Moderate","Minor","Unknown"])).describe("Severity (extreme, severe, moderate, minor, unknown)").optional(),
  "certainty": z.array(z.enum(["Observed","Likely","Possible","Unlikely","Unknown"])).describe("Certainty (observed, likely, possible, unlikely, unknown)").optional()
}