import ButtonAccount from "./_components/ButtonAccount";
import ButtonGeneral from "./_components/ButtonGeneral";
import ButtonMainMenu from "./_components/ButtonMainMenu";

export default function navbar() {
  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center">
      <div className="bg-blue-950 w-[250px] h-[620px] rounded-4xl pt-8 pl-5">
        <div className="flex flex-col gap-5">
          <div className="pl-3">
            <p className="text-3xl text-white font-bold">CodingLab</p>
          </div>
          <div className="flex flex-col gap-5 pl-3">
            <p className="text-white font-bold">Main Menu</p>
            <div className="flex flex-col gap-10">
            <ButtonMainMenu />
            </div>
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
