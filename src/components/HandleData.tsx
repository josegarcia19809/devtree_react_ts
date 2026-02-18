import type {UserHandle} from "../types";

type HandleDataProps = {
    data: UserHandle
}

function HandleData({data}: HandleDataProps) {
    return (
        <>
            <div className="space-y-6 text-white">
                <p className="text-5xl text-center font-black"> {data.handle}</p>
                {data.image &&
                    <img className="max-w-[250px] mx-auto" src={data.image} alt=""/>}
                <p className="lg text-center font-bold"> {data.description}</p>
            </div>
        </>
    );
}

export default HandleData;