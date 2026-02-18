import type {UserHandle} from "../types";

type HandleDataProps = {
    data: UserHandle
}

function HandleData({data}: HandleDataProps) {
    return (
        <>
            {data.name}
        </>
    );
}

export default HandleData;