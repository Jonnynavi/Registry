import type { PackageDetails } from "../../api/types/packageDetails";
import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";

interface DetailsLoaderResult {
    params: Params;
}

export interface PackageDetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({params}: DetailsLoaderResult): Promise<PackageDetailsLoaderResult> {
    const {name} = params;

    if(!name){
        throw new Error('Package Name Must be Provided');
    }

    const details = await getPackage(name);


    return {
        details,
    };
}