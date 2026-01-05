import "./QuickLinks.css";
const quickLinks = [
    { name: "BISE Sargodha", url: "https://bisesargodha.edu.pk", logo: "/images/bise sgd.jpg" },
    { name: "University of Sargodha", url: "https://uos.edu.pk", logo: "/images/uos.jpg" },
    { name: "HEC", url: "https://hec.gov.pk", logo: "/images/hec.jpg" },
    { name: "OCAS", url: "https://ocas.punjab.gov.pk/", logo: "/images/ocas.jpg" },
];

const QuickLinks = () => {
    return (
        <section className="w-full bg-gray-50 py-12 new flex justify-center"> {/* Added vertical padding for better look */}
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading Container - centered */}
                <div className="flex flex-col items-center">
                    <h2 className="text-center title-text h2-margin">
                        QUICK LINKS
                    </h2>
                    {/* The Underline */}
                    <div className="w-16 h-1 bg-green-500 mt-10"></div>
                </div>

                {/* Links Grid - Fixed the 'j' in justify-items-center */}
                <div className=" links-margin grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {quickLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center p-4 w-full max-w-[280px] h-24"
                        >
                            <img
                                src={link.logo}
                                alt={link.name}
                                className="h-14 w-full object-contain grayscale hover:grayscale-0 transition"
                            />
                           
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default QuickLinks;