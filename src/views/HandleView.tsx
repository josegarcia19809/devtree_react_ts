import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getUserByHandle} from "../api/DevTreeAPI.ts";


function HandleView() {
    const params = useParams();
    const handle = params.handle!;
    const {data, error, isLoading} = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ["handle", handle],
        retry:1
    });
    return (
        <></>
    );
}

export default HandleView;