import type { PackageSummery } from "../types/PackageSummery";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export async function SearchPackages(term: string): Promise<PackageSummery[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  const data: SearchResponse = await res.json();
  return data.objects.map((searchResult) => {
    return {
      name: searchResult.package.name,
      version: searchResult.package.version,
      description: searchResult.package.description,
      keywords: searchResult.package.keywords,
    };
  });
}
