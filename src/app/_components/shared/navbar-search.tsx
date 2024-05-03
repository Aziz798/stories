"use client"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("story", term);
        } else {
            params.delete("story");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);
    return (
        <label className="input input-bordered flex items-center gap-2">
            <input type="text"
                className="grow"
                placeholder="Search"
                onChange={e => handleSearch(e.target.value)}
                defaultValue={searchParams.get('story')?.toString()}
            />
            <span className=""><FaSearch /></span>
        </label>
    );
}