import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./SearchLoader";
import PackageListItme from "../../components/PackageListItem";
export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResult = searchResults.map((result) => {
    return <PackageListItme pack={result} key={result.name}></PackageListItme>;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>{" "}
      <div className="space-y-4 mt-4 ">{renderedResult}</div>
    </div>
  );
}
