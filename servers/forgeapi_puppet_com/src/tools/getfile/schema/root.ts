import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.string().describe("Module release filename to be downloaded (e.g. \"puppetlabs-apache-2.0.0.tar.gz\")")
}