import { searchPackages } from '../../api/queries/searchpackages';
import type { PackageSummary } from '../../api/types/packageSummary';

export interface SearchLoaderResult {
    searchResults: PackageSummary[];
}


export async function searchLoader({request}: {request: Request}): Promise<SearchLoaderResult>{
    const {searchParams} = new URL(request.url);
    const term = searchParams.get('term');

    if(!term){
        throw new Error('Search Term Must be Provided');
    }

    const result = await searchPackages(term);
    

    return {
        searchResults: result,
    };
    
}