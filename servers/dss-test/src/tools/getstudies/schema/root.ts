import { z } from "zod"

export const inputParamsSchema = {
  "institution": z.string().uuid().describe("Institution id querystring parameter").optional(),
  "institutions[]": z.array(z.string()).describe("List of institution ids").optional(),
  "institutionLegacy": z.string().uuid().describe("Institution Legacy id querystring parameter").optional(),
  "institutionsLegacy[]": z.array(z.string()).describe("List of institution legacy ids").optional(),
  "dicomStudyId": z.string().describe("Study id from dicom").optional(),
  "patientId": z.string().describe("Patient id from dicom").optional(),
  "modality": z.string().describe("modality query string parameter").optional(),
  "source": z.string().describe("source query string parameter").optional(),
  "studyInstanceUid": z.string().describe("Study Instance Uid from dicom").optional(),
  "limit": z.number().int().describe("limit items to return on pagination").optional(),
  "page": z.number().int().describe("page number to return on pagination").optional(),
  "date": z.string().describe("study creation date on dss").optional(),
  "accessionNumber": z.string().describe("accession number from dicom").optional(),
  "storageArea[]": z.array(z.string()).describe("storage area that where the resources are stored").optional()
}