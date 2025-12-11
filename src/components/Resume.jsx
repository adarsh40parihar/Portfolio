import { useEffect } from "react";
import { FaDownload, FaArrowLeft } from "react-icons/fa";

const Resume = () => {
    // Your Google Drive file ID
    const DRIVE_FILE_ID = "1AOqhf4N_HrCnumCtMeqd8_ntNEZU-uMP";
    const PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
    const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

    useEffect(() => {
        // Hide navbar when resume is open
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-navy-900 flex flex-col">
            {/* Header */}
            <div className="bg-navy-800 border-b border-navy-700 px-4 py-3 flex items-center justify-between">
                <a
                    href="/"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Back to Portfolio</span>
                </a>

                <h1 className="text-white font-semibold text-lg hidden sm:block">
                    Resume - Adarsh Singh Parihar
                </h1>

                <a
                    href={DOWNLOAD_URL}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                    <FaDownload className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                </a>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 w-full">
                <iframe
                    src={PREVIEW_URL}
                    className="w-full h-full border-0"
                    title="Resume"
                    allow="autoplay"
                />
            </div>
        </div>
    );
};

export default Resume;
