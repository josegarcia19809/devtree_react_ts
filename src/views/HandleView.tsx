import {Navigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getUserByHandle} from "../api/DevTreeAPI.ts";
import HandleData from "../components/HandleData.tsx";


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
    if (data) return <HandleData data={data}/>;
}

export default HandleView;