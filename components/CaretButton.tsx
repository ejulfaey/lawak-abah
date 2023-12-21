type Props = {
    onClick: () => void;
    children: React.ReactNode;
    direction: string;
}

const CaretButton = ({ onClick, children, direction }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${direction} invisible lg:visible absolute top-[calc(50%-20px)] z-20 p-2 text-gray-300`}>
            {children}
        </button>
    );
};

export default CaretButton;