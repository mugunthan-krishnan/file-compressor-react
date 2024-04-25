import PropTypes from "prop-types";

export default function FileUpload({label}){
    return <div className="items-center">
        <label htmlFor="fileupload" className="ml-20 text-xs md:text-base rounded-md text-stone-900 font-bold">{label}</label>
        <input type="file" name="fileupload" className="px-10 rounded-md"/>
    </div>
}

FileUpload.propTypes = {
    label: PropTypes.string.isRequired
};