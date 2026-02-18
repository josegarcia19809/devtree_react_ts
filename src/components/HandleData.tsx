import type {UserHandle} from "../types";

type HandleDataProps = {
    data: UserHandle
}

function HandleData({data}: HandleDataProps) {
    return (
        <>
            <div className="space-y-6 text-white">
                <p className="text-5xl text-center "> {data.handle}</p>
            </div>
        </>
    );
}

export default HandleData;