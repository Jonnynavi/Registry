import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
    pack: PackageSummary;

}

function packListItem({pack} :PackageListItemProps){

    const renderedKeywords = pack.keywords.map((keyword, index) => {

        return (
            <div key={index} className="border py-0.5 px-1 text-xs bg-slate-200 rounded border-gray-200">
                {keyword}
            </div>
        )
    });

    return (
        <div className="border p-4 rounded flex justify-between items-center border-gray-200">
            <div className="flex flex-col gap-2">
                <Link to = {`/packages/${pack.name}`} className="text-lg font-bold">
                    {pack.name}
                </Link>
                <p className="text-sm text-gray-500">{pack.description}</p>
                <div className="flex gap-1">
                    {renderedKeywords}
                </div>
            </div>
            <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-lg">
                View
            </Link>
        </div>
    )

}

export default packListItem;