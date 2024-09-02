import { NavLink } from "react-router-dom";
const allRooms = ({ data }) => {
    return (
        <div className="bg-[#F0F5FA] pb-10">
            <div className="p-8 text-[#2f4a69] text-3xl text-center">
                Наші доступні номери
            </div>
            <div className="flex flex-wrap gap-24 w-3/4 mx-auto justify-center bg-[#F0F5FA]">
                {
                    data.map((item, key) => {
                        return (
                            <div key={key}>
                                <NavLink to={`/rooms/${item.id}`}>
                                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={item.image} alt=""/>
                                    <p className="text-[#ABABAB] text-sm py-2">{item.name}</p>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default allRooms;