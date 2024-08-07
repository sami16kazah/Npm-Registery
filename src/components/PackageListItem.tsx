import type { PackageSummery } from "../api/types/PackageSummery";
import { Link } from "react-router-dom";
interface PackageListItemProps {
  pack: PackageSummery;
}
export default function PackageListItme({ pack }: PackageListItemProps) {
  const rendredKeyWords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="border-b py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });
  return (
    <div className="border p-4 rounded flex  justify-between items-center">
      <div className="flex flex-col gap-2 ">
        <Link
          to={`/packages/${pack.name}`}
          className="text-xl font-bold text-black"
        >{pack.name}</Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex gap-1">{rendredKeyWords}</div>
      </div>
      <div className="mr-6">
        <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-lg">
        View </Link>
      </div>
    </div>
  );
}
