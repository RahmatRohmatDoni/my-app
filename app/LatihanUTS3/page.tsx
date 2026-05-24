export default function dashboard4(){
    return(
        <section className="h-screen bg-cyan-100 flex items-center justify-center">
            <div className="bg-gray-100 w-[1500px] h-[1000px] rounded-4xl flex flex-row">
                <div className="bg-cyan-600 w-[135px] h-[1000px] rounded-bl-4xl rounded-tl-4xl pt-10 flex flex-col gap-10">
                    <div className="pl-9">
                        <img src="nurse.svg" alt="" className="w-15"/>
                    </div>
                    <div>
                        <div className="flex gap-10">
                            <div className="border-l-5 border-green-400 flex gap-10">‎ </div>
                            <button className="flex items-center justify-center">
                                    <img src="category.svg" alt="" className="w-10 h-10 brightness-0 invert"/>
                            </button>
                        </div>
                    </div>
                    <div className="pl-10 flex flex-col gap-10">
                        <button>
                            <img src="users.svg" alt="" className="w-10 h-10 brightness-0 invert" />
                        </button>
                        <button>
                            <img src="photo-alt.svg" alt="" className="w-10 h-10 brightness-0 invert"/>
                        </button>
                        <button>
                            <img src="file.svg" alt="" className="w-10 h-10 brightness-0 invert"/>
                        </button>
                        <button>
                            <img src="calendar-week.svg" alt="" className="w-10 h-10 brightness-0 invert"/>
                        </button>
                        <button>
                            <img src="folder.svg" alt="" className="w-10 h-10 brightness-0 invert"/>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-100 w-[1365px] h-[1000px] rounded-tr-4xl rounded-br-4xl flex flex-col gap-2">
                    <div className="bg-gray-100 w-[1365px] h-[100px] pt-18 pl-10 flex flex-row rounded-tr-4xl">
                        <div>
                            <button className="flex gap-1">
                                <img src="arrow-narrow-left.svg" alt="" />
                                <p className="text-gray-400 font-bold">Back To Dashboard</p>
                            </button>
                        </div>
                        <div className="flex ml-auto pr-10 gap-5">
                            <button>
                                <img src="bell.svg" alt="" />
                            </button>
                            <div className="flex items-center justify-center">
                                <img src="gibran.svg" alt="" className="w-10 h-10"/>
                            </div>
                            <p className="text-black flex items-center justify-center font-bold">Gibran Rakabuming Raka</p>
                            <button className="flex items-center justify-center">
                                <img src="caret-down.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-100 w-[1365px] h-[50px] flex items-center pl-10">
                        <p className="text-black font-bold text-3xl">Current Appointment</p>
                    </div>
                    <div className="flex">
                    <div className="bg-gray-100 w-[490px] h-[848px] pl-10 pt-8 flex flex-row gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="bg-white w-[450px] h-[350px] rounded-4x pt-10">
                                <div className="flex flex-col items-center justify-center gap-5">
                                    <div>
                                        <img src="gibran2.svg" alt="" className="w-25 h-30 rounded-4xl"/>
                                    </div>
                                    <div>
                                        <p className="text-black font-bold">Gibran Rakabuming Raka</p>
                                        <p className="text-gray-400 font-bold flex items-center justify-center">Age: 39</p>
                                    </div>
                                    <button className="bg-green-400 w-25 h-10 rounded-3xl">
                                        <p className="text-white">Update</p>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white w-[450px] h-[420px] rounded-4xl p-8 flex flex-col gap-7">
                                <div>
                                    <p className="text-black font-bold text-xl">Information</p>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        <li className="text-black font-bold">Gender:<span className="ml-10 text-gray-400 font-bold">Male</span></li>
                                        <li className="text-black font-bold">Blood Type:<span className="ml-3 text-gray-400 font-bold">B+(Positive)</span></li>
                                        <li className="text-black font-bold">Allergies:<span className="ml-7 text-gray-400 font-bold">Milk, Nut</span></li>
                                        <li className="text-black font-bold">Diseases:<span className="ml-7 text-gray-400 font-bold">Diabetes, Blood Disorders</span></li>
                                        <li className="text-black font-bold">Height:<span className="ml-13 text-gray-400 font-bold">170cm</span></li>
                                        <li className="text-black font-bold">Weight:<span className="ml-12 text-gray-400 font-bold">65kg</span></li>
                                        <li className="text-black font-bold">Patient ID:<span className="ml-7 text-gray-400 font-bold">208898786</span></li>
                                        <li className="text-black font-bold">Last Visit:<span className="ml-7 text-gray-400 font-bold">25 Oktober 2026</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="bg-gray-100 w-[875px] h-[848px] rounded-br-4xl pl-5 pt-8 flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div className="bg-white w-[263px] h-[250px] rounded-4xl pt-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-center">
                                        <img src="heart.svg" alt="" className="w-17 h-17"/>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-black font-bold">Heart Rate</p>
                                        <div className="flex">
                                            <p className="text-black font-bold text-5xl">80</p>
                                            <p className="text-black font-bold flex items-end">bpm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-[263px] h-[250px] rounded-4xl pt-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-center">
                                        <img src="temperature.svg" alt="" className="w-17 h-17"/>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-black font-bold">Body Temperature</p>
                                        <div className="flex">
                                            <p className="text-black font-bold text-5xl">36.5</p>
                                            <p className="text-black font-bold flex items-end">*c</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-[263px] h-[250px] rounded-4xl pt-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-center">
                                        <img src="temperature-plus.svg" alt="" className="w-17 h-17"/>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-black font-bold">Glucose</p>
                                        <div className="flex">
                                            <p className="text-black font-bold text-5xl">100</p>
                                            <p className="text-black font-bold flex items-end">mg/dl</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white w-[830px] h-[200px] rounded-4xl pt-5 pl-8 flex flex-col gap-7">
                                    <div>
                                        <p className="text-black font-bold text-xl">Test Reports:</p>
                                    </div>
                                    <div className="flex flex-row gap-5">
                                        <div className="flex flex-row items-center gap-10">
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="bg-blue-100 w-18 h-18 flex items-center justify-center rounded-2xl">
                                                    <img src="clipboard-text.svg" alt="" className="w-10 h-10"/>
                                                </div>
                                                <div>
                                                    <p className="text-black font-bold">CT Scan-Full Body</p>
                                                    <p className="text-gray-400 font-bold">12 Februari 2026</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="bg-yellow-100 w-18 h-18 flex items-center justify-center rounded-2xl">
                                                    <img src="clipboard-text.svg" alt="" className="w-10 h-10"/>
                                                </div>
                                                <div>
                                                    <p className="text-black font-bold">Creatine Kinasi T</p>
                                                    <p className="text-gray-400 font-bold">12 Februari 2026</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="bg-red-100 w-18 h-18 flex items-center justify-center rounded-2xl">
                                                    <img src="clipboard-text.svg" alt="" className="w-10 h-10"/>
                                                </div>
                                                <div>
                                                    <p className="text-black font-bold">Eye Fluorescein Test</p>
                                                    <p className="text-gray-400 font-bold">12 Februari 2026</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                 <div className="bg-white w-[835px] h-[300px] rounded-4xl pl-8 py-8 flex flex-col gap-3">
                                            <p className="text-black font-bold text-xl">Prescriptions</p>
                                            <div>
                                                <p className="text-green-300 w-193 h-20 border border-dashed flex items-center justify-center">+ Add a prescription</p>
                                            </div>
                                            <div className="grid grid-cols-3 gap-x-46">
                                                <p className="text-gray-400 font-bold">Prescription</p>
                                                <p className="text-gray-400 font-bold">Date</p>
                                                <p className="text-gray-400 font-bold">Duration</p>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div className="grid grid-cols-3 gap-x-46 items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src="file.svg" alt="" className="w-8 h-8"/>
                                                        <p className="text-black font-bold">Heart Diseases</p>
                                                    </div>
                                                    <p className="text-gray-400 font-bold">25 Oktober 2026</p>
                                                    <p className="text-gray-400 font-bold">3 Months</p>
                                                </div>
                                                <div className="grid grid-cols-3 gap-x-46 items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src="file.svg" alt="" className="w-8 h-8"/>
                                                        <p className="text-black font-bold">Skin Care</p>
                                                    </div>
                                                    <p className="text-gray-400 font-bold">8 Agustus 2026</p>
                                                    <p className="text-gray-400 font-bold">2 Months</p>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}   