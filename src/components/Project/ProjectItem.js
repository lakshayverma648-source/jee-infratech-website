import Image from "next/image"

const ProjectItem = ({ data, type, isActive }) => {
    return (
        <>
            {/* STYLE DEFAULT */}
            {type === 'style-default' && (
                <div className="projects_link block relative group cursor-default">
                    
                    <div className="projects_thumb overflow-hidden aspect-[3/4]">
                        <Image
                            width={2000}
                            height={2000}
                            src={data.image}
                            className="h-full object-cover duration-500 ease-in-out group-hover:scale-110"
                            alt={data.title}
                        />
                    </div>

                    <div className="projects_info flex flex-col gap-2 mt-5">
                        <strong className="projects_name heading6">
                            {data.title}
                        </strong>
                    </div>
                </div>
            )}

            {/* STYLE TWO */}
            {type === 'style-two' && (
                <div className="projects_link block relative aspect-[3/4] group cursor-default">
                    
                    <Image
                        width={2000}
                        height={2000}
                        src={data.image}
                        className="h-full object-cover duration-500 ease-in-out group-hover:scale-110"
                        alt={data.title}
                    />

                    <div className="projects_info flex flex-col items-center justify-center gap-3 absolute top-5 right-5 bottom-5 left-5 px-8 bg-dark bg-opacity-80 text-white opacity-100 scale-100">
                        <strong className="projects_name heading6 text-center">
                            {data.title}
                        </strong>
                    </div>
                </div>
            )}

            {/* STYLE THREE */}
            {type === 'style-three' && (
                <div className={`projects_link block md:p-8 p-7 bg-dark text-white ${isActive}`}>
                    <strong className="projects_name mt-3 heading5 line-clamp-1">
                        {data.title}
                    </strong>
                </div>
            )}

            {/* STYLE FOUR */}
            {type === 'style-four' && (
                <div className="projects_item">
                    
                    <div className="projects_link block overflow-hidden relative group cursor-default">
                        
                        <Image
                            width={2000}
                            height={2000}
                            src={data.image}
                            className="duration-500 ease-in-out group-hover:scale-105"
                            alt={data.title}
                        />

                        <div className="projects_info md:absolute md:bottom-8 md:left-8 md:w-[65%] p-8 bg-white">
                            <strong className="projects_name mt-3 heading4 line-clamp-1 break-all">
                                {data.title}
                            </strong>

                            <p className="projects_desc mt-4 text-variant1 line-clamp-2">
                                {data.desc}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectItem