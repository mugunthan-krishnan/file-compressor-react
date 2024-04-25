import PropTypes from "prop-types";
import Button from "./Button";

export default function SideBar({compressClick, decompressClick}){
    return (
        <>
            <aside className="w-1/4 px-8 py-8 bg-stone-800 rounded-r-xl">
                <h1 className="text-2xl text-center font-bold uppercase mt-8 px-2 py-2 text-stone-300">File Compressor</h1>
                <div className="text-center px-8 py-8"><Button onClick={compressClick}>Compress</Button></div>
                <div className="text-center px-8 py-8"><Button onClick={decompressClick}>Decompress</Button></div>
            </aside>
        </>
    );
}

SideBar.propTypes = {
    compressClick: PropTypes.any,
    decompressClick: PropTypes.any
};