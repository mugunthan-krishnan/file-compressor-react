import Button from "./Button";
import FileUpload from "./FileUpload";

export default function Compress(){
    return (
        <>
            <div className="w-2/3 px-8 py-8 text-center">
                <h2 className="text-2xl font-bold mt-8 px-2 py-2 text-stone-800">Compress Files</h2>
                <hr className="px-2 py-4 border-stone-800"></hr>
                <FileUpload label="To compress"/>
                <div className="mt-8 text-center">
                    <p className="py-10 font-bold text-green-600">File compressed!!!</p>
                    <div className="space-x-8">
                        <Button>Download ZIP File</Button>
                        <Button>Download Log File</Button>
                    </div>
                </div>
            </div>
        </>
    );
}