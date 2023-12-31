import Image from "next/image";

const Header = () => {
    return (
        <header className="p-4 bg-primary-500 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white rounded-full">
                    <Image width={24} height={24} src="/icon-128.png" alt="icon" className="-rotate-45" />
                </div>
                <div className="font-medium flex gap-2">
                    <h1>Lawak Abah</h1>
                </div>
            </div>
            <button
                type="button"
                className="block px-4 py-1.5 bg-blue-500 text-sm rounded hover:bg-gray-600">
                Post a joke
            </button>
        </header>
    );
};

export default Header;