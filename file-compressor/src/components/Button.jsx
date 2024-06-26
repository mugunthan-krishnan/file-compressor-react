import PropTypes from "prop-types";

export default function Button({children, ...props}){
    return (
        <>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 text-stone-50 hover:bg-slate-500 hover:text-stone-100"
            {...props}
            >
                {children}
            </button>
        </>
    );
}
Button.propTypes = {
    children: PropTypes.any
};