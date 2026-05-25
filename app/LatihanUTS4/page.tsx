import Buttonicon3 from "./_Components/Buttonicon3";
import Buttonaccount from "./_Components/Buttonaccount";
import Buttonadmin from "./_Components/Buttonadmin";
import Buttonicon1 from "./_Components/Buttonicon1";
import Buttonicon2 from "./_Components/Buttonicon2";
import Buttonproduct from "./_Components/Buttonproduct";

export default function LatihanUTS5(){
    return(
        <section className="h-screen bg-white flex items-center justify-center">
            <div className="flex gap-10">
                <div className="bg-black h-[1000px] w-[250px] p-5 rounded-2xl">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <div>
                                <img src="moon.svg" alt="" className="w-8 h-8 brightness-0 invert"/>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="text-white font-bold">Acount</p>
                                < Buttonaccount />
                            </div>
                        </div>
                        <hr className="border-t-2 border-gray-200"/>
                        <div>
                            <div className="flex flex-col gap-5">
                                <p className="text-white font-bold">Product</p>
                                < Buttonproduct />
                            </div>
                        </div>
                        <hr className="border-t-2 border-gray-200"/>
                        <div>
                            <div className="flex flex-col gap-5">
                                <p className="text-white font-bold">Admin</p>
                                < Buttonadmin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black h-[1000px] w-[100px] p-5 rounded-2xl flex flex-col gap-15">
                    <div>
                        <div className="bg-orange-400 w-13 h-12 flex items-center justify-center rounded-2xl">
                            <img src="moon.svg" alt="" className="w-8 h-8 brightness-0 invert"/>
                        </div>
                    </div>
                    <div>
                        < Buttonicon1 />
                        <hr className="border-t-2 border-gray-200 pb-20"/>
                        < Buttonicon2 />
                        <hr className="border-t-2 border-gray-200 pb-19"/>
                        < Buttonicon3 />
                    </div>
                </div>
            </div>
        </section>
    );
};