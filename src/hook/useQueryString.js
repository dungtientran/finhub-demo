import { useSearchParams } from "react-router-dom";

 const useQueryString = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsObj = Object.fromEntries([...searchParams]);
    return searchParamsObj
}

export default useQueryString