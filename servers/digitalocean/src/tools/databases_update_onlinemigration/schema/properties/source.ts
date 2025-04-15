import { z } from "zod"

export const inputParamsSchema = {
  "host": z.string().describe("The FQDN pointing to the database cluster's current primary node.").optional(),
  "port": z.number().int().describe("The port on which the database cluster is listening.").optional(),
  "dbname": z.string().describe("The name of the default database.").optional(),
  "username": z.string().describe("The default user for the database.").optional(),
  "password": z.string().describe("The randomly generated password for the default user.").optional()
}