export default function Welcome({ hero }: any) {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            {/* BACKGROUND */}
            <div className="fixed inset-0 -z-20" />

            {/* CONTENT */}
            <div
                className="relative z-10 min-h-screen bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/landing.png')",
                    backgroundSize: 'cover', // 🔥 ini yang bikin full
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
                    <div className="url ">
                        <img src="/images/kaki.png" alt="kaki" />
                    </div>
                    <h1 className="font-highrise text-xl font-light text-[#E4CB8A]">
                        WELCOME TO OUR SITE
                    </h1>

                    <h2 className="max-w-9xl font-highrise mt-4 text-7xl font-black tracking-tighter text-white">
                        SORRY, WEBSITE <br />
                        MASIH DALAM <br />
                        TAHAP PENGEMBANGAN.
                    </h2>

                    <h1 className="font-highrise mt-4 text-xl font-light text-[#E4CB8A]">
                        THANK YOU
                    </h1>
                    <div className="url ">
                        <img src="/images/kaki.png" alt="kaki" />
                    </div>  
                </div>
            </div>
        </div>
    );
}
