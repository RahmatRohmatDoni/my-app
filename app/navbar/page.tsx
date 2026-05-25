import ButtonAccount from "./_components/ButtonAccount";
import ButtonGeneral from "./_components/ButtonGeneral";
import ButtonMainMenu from "./_components/ButtonMainMenu";

export default function navbar() {
  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center">
      <div className="bg-blue-950 w-[300px] h-[670px] rounded-4xl pt-8 pl-5">
        <div className="flex flex-col gap-9">
          <div className="pl-3 flex gap-4">
            <div>
              <img src="gibran.svg" alt="" className="w-13 h-13"/>
            </div>
            <p className="text-3xl text-white font-bold flex items-center">CodingLab</p>
          </div>
          <div className="flex flex-col gap-5 pl-3">
            <p className="text-white font-bold">Main Menu</p>
            <ButtonMainMenu />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold pl-3">General</p>
            <ButtonGeneral />
          </div>
          <div className="flex flex-col gap-5 pl-3">
            <p className="text-white font-bold">General</p>
            <ButtonAccount />
          </div>
        </div>
      </div>
    </section>
  );
}
