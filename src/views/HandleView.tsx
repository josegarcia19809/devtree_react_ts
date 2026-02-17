import {Navigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getUserByHandle} from "../api/DevTreeAPI.ts";


function HandleView() {
    const params = useParams();
    const handle = params.handle!;
    const {data, error, isLoading} = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ["handle", handle],
        retry: 1
    });

    if (isLoading) {
        return <div className="text-center text-white">Loading...</div>;
    }
    if (error) {
        return <Navigate to={'/404'}/>
    }
    return (
        <></>
    );
}

export default HandleView;