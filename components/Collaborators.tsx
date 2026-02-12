"use client"

export default function Collaborators() {
    const logos = [
        { name: 'Dentsu', src: 'https://static.wixstatic.com/media/5084b6_07b8d8f53c0d47678aeb23c29b5458b0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/13.png' },
        { name: 'Mohey', src: 'https://static.wixstatic.com/media/5084b6_f4413485cf784a2db413cb1a2ebf1479~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png' },
        { name: '1 Finance', src: 'https://static.wixstatic.com/media/5084b6_26dc84b35d254ed4876e748703fe6904~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.png' },
        { name: 'Vida', src: 'https://static.wixstatic.com/media/5084b6_4b5149b11f1f49bbaa4c86b053093660~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png' },
        { name: 'Swiggy', src: 'https://static.wixstatic.com/media/5084b6_1656080bc6ed4132aa81d78b9772df18~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19.png' },
        { name: 'Rabanne', src: 'https://static.wixstatic.com/media/5084b6_3536f332402344a48334843a7a7c4174~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png' },
        { name: 'Hoegaarden', src: 'https://static.wixstatic.com/media/5084b6_0108b9c3587046068acd0c33ef51dd81~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.png' },
        { name: 'Blix Media', src: 'https://static.wixstatic.com/media/5084b6_8a5cddfe3b734ef8ba730c9d7b7bf9a9~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png' },
        { name: 'Nikon', src: 'https://static.wixstatic.com/media/5084b6_f760eb109bdb4f08b2d92e0101b6acc6~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10.png' },
        { name: 'Brides Today', src: 'https://static.wixstatic.com/media/5084b6_2f32a5b5158844c7a2743a4b473e9c2b~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/16.png' },
        { name: 'Bazaar', src: 'https://static.wixstatic.com/media/5084b6_d984c168e3164d7c9ed1d001f7942a14~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png' },
        { name: 'Adobe', src: 'https://static.wixstatic.com/media/5084b6_a093645ed7b249f7ab6aa3226930aab1~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png' },
        { name: 'Sony SAB', src: 'https://static.wixstatic.com/media/5084b6_126191a7f4684b639fa701392eca43f3~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.png' },
        { name: 'Singer', src: 'https://static.wixstatic.com/media/5084b6_b48069a617124cb2967558d03fa1c385~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12.png' },
        { name: 'Hyundai', src: 'https://static.wixstatic.com/media/5084b6_06c2b4e2a36043b5ae1bf97fc4a4792a~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png' },
        { name: 'Samsung', src: 'https://static.wixstatic.com/media/5084b6_d89bd177b4ca49f3882fa0513e28cbb7~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14.png' },
        { name: 'Layers', src: 'https://static.wixstatic.com/media/5084b6_6c2bae523e8241e3b1ecf28ed968e6bc~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17.png' },
        { name: 'WAM', src: 'https://static.wixstatic.com/media/5084b6_e8ecb83f271c4debbde746b3fd4e220a~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png' },
    ];

    const videos = [
        { src: 'https://video.wixstatic.com/video/5084b6_497a9a75dfaf47039d64b177db360613/360p/mp4/file.mp4' },
        { src: 'https://video.wixstatic.com/video/5084b6_6d2d72dd18a34506ab0e80df26f2f7f2/480p/mp4/file.mp4' },
        { src: 'https://video.wixstatic.com/video/5084b6_15997e53c67f4a88978b8d6c8434e92f/360p/mp4/file.mp4' },
        { src: 'https://video.wixstatic.com/video/5084b6_366202c08fd34d70a94dd7e20b6c3500/360p/mp4/file.mp4' },
    ];

    return (
        <div className="w-full bg-background text-foreground">
            {/* Collaborators Section */}
            <div className="w-full flex flex-col justify-center items-center py-32">
                <h1 className="w-[90%] text-6xl text-center mb-20 font-light">
                    Avenoir collaborates with brands and agencies to turn good ideas into stellar content
                </h1>
                <div className="max-w-7xl mx-auto">
                    {/* Row 1 */}
                    <div className="grid grid-cols-6 gap-12 mb-16 items-center justify-items-center">
                        {logos.slice(0, 6).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.name}
                                className="h-26 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-6 gap-12 mb-16 items-center justify-items-center">
                        {logos.slice(6, 12).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.name}
                                className="h-26 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-6 gap-12 items-center justify-items-center">
                        {logos.slice(12, 18).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.name}
                                className="h-26 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Grid Section */}
            <div className="relative w-full max-w-6xl mx-auto pb-32">
                <div className="grid grid-cols-2 gap-6 px-8">
                    {videos.map((video, index) => (
                        <div 
                            key={index} 
                            className="relative aspect-video overflow-hidden rounded-[2rem] group cursor-pointer"
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src={video.src}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-background/10 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                {/* See Our Work Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-10 py-4 bg-foreground text-background font-medium text-sm tracking-wide rounded-sm hover:bg-background hover:text-muted-foreground transition-colors duration-300 uppercase">
                        See Our Work
                    </button>
                </div>
            </div>
        </div>
    );
}