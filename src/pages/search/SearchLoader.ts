import { SearchPackages } from "../../api/queries/searchPackages";
import type { PackageSummery } from "../../api/types/PackageSummery";
export interface SearchLoaderResult {
  searchResults: PackageSummery[];
}
export async function SearchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("term must be provided !");
  }
  const results = await SearchPackages(term);
  return {
    searchResults: results,
  };
}
