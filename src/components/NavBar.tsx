
const NavBar = () => {
    return (
        <nav className="bg-[#f4f6f8]">
            <div className="flex justify-between pt-6 pb-4 px-72">
                <h1 className=" text-2xl font-semibold font-sans">Mohamed</h1>
                <div className="">
                    <ul className="flex gap-x-4 font-semibold">
                        <li>About</li>
                        <li>Service</li>
                        <li>Skill</li>
                        <li>Service</li>
                        <li>Skill</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;