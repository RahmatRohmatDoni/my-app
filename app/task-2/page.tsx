export default function BelajarPage(){
    return(
        <section className="h-screen bg-white flex flex-col justify-center items-center gap-4">
            <div className="flex gap-4">
                <div className="bg-[#e3f6fb] p-6 w-96 h-60 rounded-4xl flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="pallete" />
                        <p className="font-sans text-black">Design</p>  
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="font-sans font-bold text-2xl text-black mb-1">Adobe Photoshop</p>
                            <p className="font-sans text-black">in 3 days</p>
                        </div>
                        <div className="flex items-center">
                            <img src="jusufkalla.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="prabowo.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="ferdysambo.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="tambahan1.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#e9f9e6] p-6 w-96 h-60 rounded-4xl flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src="terminal-2.svg" alt="terminal" />
                        <p className="font-sans text-black">AI</p>
                        <img src="star.svg" alt="star" className="ml-auto"/>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                        <p className="font-sans font-bold text-2xl text-black">Dall·E 2, Midjourney,</p>
                        <p className="font-sans font-bold text-2xl text-black mb-1">Stable Difusion</p>
                        <p className="font-sans text-black">in 5 days</p>
                        </div>
                        <div className="flex items-center">
                            <img src="gibran.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="jokowi.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="pigai.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="tambahan2.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="bg-[#e9e5fb] p-6 rounded-4xl w-63 h-55 flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="palette" />
                        <p className="font-sans text-black">Design</p>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-2xl text-black mb-1">Figma</p>
                        <p className="font-sans text-black">8 hours ago</p>
                    </div>
                </div>
                <div className="bg-[#fde8e1] p-6 rounded-4xl w-63 h-55 flex flex-col justify-between">
                    <div     className="flex gap-3">
                        <img src="code.svg" alt="code" />
                        <p className="font-sans text-black">Coding</p>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-2xl text-black mb-1">Python</p>
                        <p className="font-sans text-black">2 days ago</p>
                    </div>
                </div>
                <div className="bg-[#fde3e9] p-6 rounded-4xl w-63 h-55 flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="palette" />
                        <p className="font-sans text-black">Design</p>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-xl text-black mb-1   ">Sketch</p>
                        <p className="font-sans text-black">4 Days ago</p>
                    </div>
                </div>
            </div>
        </section>
    );
};