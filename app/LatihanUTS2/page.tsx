export default function dashboard2(){
    return(
        <section className="h-screen bg-gray-400 flex flex-col justify-center items-center">
             <div className="bg-gray-100 w-300 h-230 rounded-b-2xl rounded-tr-2xl flex flex-row rounded-ss-2xl">
                <div>   
                    <div className="bg-blue-400 w-50 h-251 p-4 rounded-ss-2xl rounded-bl-2xl flex flex-col gap-91">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-center">
                                <p className="text-3xl">CLINIK</p>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="calendar-week.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Schedule</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="briefcase-2.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Employees</p>
                                </div>
                            </div>
                            <div className="flex gap-4 bg-white/50 rounded-2xl w-37 h-6">
                                <div className="flex items-center p-1">
                                    <img src="users.svg" alt="" className="w-4 h-4 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Patients</p>
                                </div>
                            </div>                        
                            <div className="flex gap-4">
                                <div>
                                    <img src="calendar-week.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Schedule Visits</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="chart-line.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Statistics</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="file-analytics.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Reports</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="currency-dollar.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Price</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src="door.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Cabinets</p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white"/>
                            <div className="flex gap-4">
                                <div>
                                    <img src="settings.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-white text-xs">Settings</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gradient-to-br from-blue-400 to-blue-300 p-5 rounded-2xl border w-42 h-45 flex flex-col gap-2">
                                <div className="flex justify-center">
                                    <p className="text-xs font-bold">Upgrade To PRO</p>
                                </div>
                                <div>
                                    <p className="text-xs text-center ">improve your development process and start doing more with Clinik PRO!s</p>
                                </div>
                                <div className="border rounded-2xl w-31 h-9 p-1 flex flex items-center justify-center">
                                    <p className="text-xs">UPGRADE TO PRO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>  
                        <div className="flex flex-col">
                            <div className="bg-gray-100 w-250 h-15 rounded-tr-2xl p-5 flex flex-row gap-3">
                                <div className="flex items-center justify-center">
                                    <img src="menu-2.svg" alt="" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-black text-2xl font-bold">Patient Profile</p>
                                </div>
                                <div className="flex gap-2 ml-auto">
                                <p className="text-black">DENMED</p>
                                    <div>
                                        <img src="chevron-compact-down.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="stroke-straight.svg" alt="" className="rotate-131"/>
                                    </div>
                                    <p className="text-black">EN</p>
                                    <div>
                                        <img src="stroke-straight.svg" alt="" className="rotate-131"/>
                                    </div>
                                    <div>
                                        <img src="bell.svg" alt="" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="gibran.svg" alt="" className="w-10 h-10"/>
                                    </div>                                
                                </div>
                            </div>
                            <hr className="border-t-2 border-gray-300"/>
                            <div className="p-5 flex">
                                <div className="ml-auto flex gap-3">
                                    <div className="rounded-full border border-blue-400 w-20 h-10 flex justify-around">
                                        <p className="text-blue-400 flex items-center justify-center">PRINT</p>
                                    </div>
                                    <div className="bg-blue-400 rounded-full border border-blue-400 w-20 flex justify-around">
                                        <p className="text-white flex items-center justify-center">EDIT</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t-2 border-gray-300"/>
                            <div>
                                <div className="bg-gray-100 p-5 w-250 h-80 flex gap-3">
                                        <div className="bg-white p-5 h-80 rounded-2xl flex flex-col gap-3">
                                            <div className="flex items-center justify-around">
                                                <img src="gibran.svg" alt="" className="w-40 h-40"/>
                                            </div>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="text-black text-2xl font-bold">Gibran</p>
                                                <p className="text-black text-2xl font-bold">Rakabuming Raka</p>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <p className="text-gray-400">gibranrakabumingraka@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl p-5 h-80 w-100 flex flex-col gap-4">
                                            <div className="flex gap-3">
                                                <p className="text-black text-2xl">General Information</p>
                                                <div className="flex items-center justify-center">
                                                    <img src="pencil.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="flex gap-10">
                                                <p className="text-gray-400">Date of birth:</p>
                                                <p className="text-black">23/07/1998</p>
                                            </div>
                                            <hr className="border-t-2 border-gray-300"/>
                                            <div className="flex gap-17">
                                                <p className="text-gray-400">Address:</p>
                                                <p className="text-black">JL.Mt Haryono 2</p>    
                                            </div>
                                            <hr className="border-t-2 border-gray-300"/>  
                                            <div className="flex">
                                                <p className="text-gray-400">Registration Date:</p>
                                                <p className="text-black">Senin, May 20</p>
                                            </div>  
                                        </div>
                                        <div className="bg-white rounded-2xl p-5 h-75 w-100 flex flex-col">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-3">
                                                    <p className="text-black text-2xl">Anamnesis</p>
                                                    <div className="flex items-center justify-center">
                                                        <img src="pencil.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-18">
                                                    <p className="text-gray-400">Allergies:</p>
                                                    <p className="text-black">Nuts, Pollen</p>
                                                </div>
                                                <hr className="border-t-2 border-gray-300"/>
                                                <div className="flex gap-2">
                                                    <p className="text-gray-400">Chronic Diseases:</p>
                                                    <p className="text-black">Asthma</p>
                                                </div>
                                                <hr className="border-t-2 border-gray-300"/>
                                                <div className="flex gap-13">
                                                    <p className="text-gray-400">Blood Type:</p>
                                                    <p className="text-black">B+</p>
                                                </div>
                                                <hr className="border-t-2 border-gray-300"/>
                                                <div className="flex gap-20">
                                                    <p className="text-gray-400">Injuries:</p>
                                                    <p className="text-black">Corona Virus</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-gray-100 p-5 w-[1000px] h-135 flex gap-3 rounded-br-2xl">
                                    <div className="bg-white flex-1 rounded-2xl p-5 flex flex-col gap-5">
                                        <div className="flex gap-13">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-blue-400">Future Visits (2)</p>
                                                    <div className="flex flex-col">
                                                    <hr className="border-t-2 border-blue-400"/> 
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-black">Post Visits (15)</p>
                                            <p className="text-black">Planned Treatments</p>
                                        </div>
                                        <div className="bg-purple-100 p-5 rounded-e-2xl border-l-4 border-purple-400">
                                            <div className="grid grid-cols-4 gap-6">
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">11.00-12.30</p>
                                                    <p className="text-black font-bold">26 May 2026</p>
                                                </div>
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">Service:</p>
                                                    <p className="text-black">Treatment</p>
                                                    <p className="text-black">And Cleaning</p>
                                                    <p className="text-black">Of Canals</p>
                                                </div>
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">Doctor:</p>
                                                    <p className="text-purple-400">Tirta Liverpool</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs">Status</p>
                                                    <div className="flex gap-2">
                                                        <div className="bg-blue-400 rounded-full px-4 py-1 inline-flex items-center justify-center">
                                                            <p className="text-white text-sm">Scheduled</p>
                                                        </div>
                                                        <p className="text-black">:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-purple-100 p-5 rounded-e-2xl border-l-4 border-purple-400">
                                            <div className="grid grid-cols-4 gap-6">
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">11.00-12.30</p>
                                                    <p className="text-black font-bold">26 May 2026</p>
                                                </div>
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">Service:</p>
                                                    <p className="text-black">Treatment</p>
                                                    <p className="text-black">And Cleaning</p>
                                                    <p className="text-black">Of Canals</p>
                                                </div>
                                                <div className="border-r border-gray-400 pr-6">
                                                    <p className="text-gray-400 text-xs">Doctor:</p>
                                                    <p className="text-purple-400">Tirta Liverpool</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs">Status</p>
                                                    <div className="flex gap-2">
                                                        <div className="bg-blue-400 rounded-full px-4 py-1 inline-flex items-center justify-center">
                                                            <p className="text-white text-sm">Scheduled</p>
                                                        </div>
                                                        <p className="text-black">:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 w-[320px]">
                                        <div className="bg-white flex-1 rounded-2xl p-5 flex flex-col gap-5">
                                            <div className="flex">
                                                <p className="text-black font-bold text-2xl">Files</p>
                                                <div className="rounded-full border border-blue-400 w-30 h-7 flex justify-around ml-auto">
                                                    <p className="text-blue-400 flex items-center justify-center">DOWNLOAD</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-gray-400">Check Up Result.pdf</p>
                                                        <div className="ml-auto">
                                                            <p className="text-gray-400">123Kb</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-blue-400">Check Up Result.pdf</p>
                                                        <div className="ml-auto">
                                                            <div className="flex">
                                                                <img src="download.svg" alt="" />
                                                                <img src="xbox-x.svg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-gray-400">Medical Prescriptions.pdf</p>
                                                        <div className="ml-auto">
                                                            <p className="text-gray-400">123Kb</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-gray-400">Check Up Result.pdf</p>
                                                        <div className="ml-auto">
                                                            <p className="text-gray-400">123Kb</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white flex-1 rounded-2xl p-5 flex flex-col gap-5">
                                            <div className="flex">
                                                <p className="text-black font-bold text-2xl">Notes</p>
                                                <div className="rounded-full border border-blue-400 w-30 h-7 flex justify-around ml-auto">
                                                    <p className="text-blue-400 flex items-center justify-center">DOWNLOAD</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-gray-400">Note 31.06.23.pdf</p>
                                                        <div className="ml-auto">
                                                            <p className="text-gray-400">123Kb</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img src="file.svg" alt="" className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-gray-400">Note 23.06.23.pdf</p>
                                                        <div className="ml-auto">
                                                            <p className="text-gray-400">123Kb</p>
                                                        </div>
                                                    </div>
                                                </div>
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
};