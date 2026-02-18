import type {SocialNetwork, UserHandle} from "../types";

type HandleDataProps = {
    data: UserHandle
}

function HandleData({data}: HandleDataProps) {
    const links: SocialNetwork[] = JSON.parse(data.links)
        .filter((link: SocialNetwork) => link.enabled)

    return (
        <>
            <div className="space-y-6 text-white">
                <p className="text-5xl text-center font-black"> {data.handle}</p>
                {data.image &&
                    <img className="max-w-[250px] mx-auto" src={data.image} alt=""/>}
                <p className="lg text-center font-bold"> {data.description}</p>
                <div className="mt-20 flex flex-col  gap-6">
                    {links.length ? (
                        links.map((link: SocialNetwork) => (
                            <a
                                className="bg-white px-5 py-2 flex items-center gap-5
                                rounded-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link.url} key={link.id}>
                                <img src={`/social/icon_${link.name}.svg`} alt="red social"
                                className="w-12"/>
                                <p className="text-black font-black text-xl">Visítame en
                                    <span className="capitalize"> {link.name}</span></p>
                            </a>
                        ))
                    ) : (
                        <p className="text-center text-white">No hay enlaces en este
                            perfil</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default HandleData;