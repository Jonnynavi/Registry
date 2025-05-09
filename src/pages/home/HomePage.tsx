import type { HomeLoaderResult } from "./homeLoader";
import { Link, useLoaderData } from "react-router-dom";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((pkg) => {
    return(
      <div key={pkg.name} className="flex flex-col justify-between gap-3 border rounded shadow p-4 border-gray-200">
        <div className="flex flex-col gap-1 bordr-bottom border-gray-200 ">
          <div className="font-bold text-center">{pkg.name}</div>
          <div className="text-sm text-gray-500">{pkg.description}</div>
          <div className="text-sm text-gray-500">{pkg.maintainers.length} maintainers</div>
        </div>
        <Link to={`/packages/${pkg.name}`} className="border rounded border-gray-900 text-center">
          View Package
        </Link>
      </div>
    )
  });


  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl fond-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
        The Package manager for Javascript. Search and view packages.
        </p>  
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
