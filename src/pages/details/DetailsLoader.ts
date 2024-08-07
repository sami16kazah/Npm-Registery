import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import type { PackageDetails } from "../../api/types/PackageDetails";
export interface DetailsLoaderResult {
  details: PackageDetails;
}
export async function DetailsLoader({
  params,
}: {
  params: Params;
}): Promise<DetailsLoaderResult> {
  const { name } = params;
  if (!name) {
    throw new Error("Name must be provided");
  }
  const details = await getPackage(name);
  return {
    details,
  };
}
