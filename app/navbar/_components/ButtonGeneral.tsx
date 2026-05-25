export default function ButtonGeneral() {
  return (
    <div className="flex  flex-col gap-5">
      <div className="flex flex-row gap-4 bg-white w-64 h-11 items-center rounded-2xl pl-7">
        <button className="flex gap-4">
          <img src="folder.svg" alt="" className="w-6 h-6" />
          <p className="text-black font-bold">Projects</p>
        </button>
      </div>
      <button className="flex flex-row gap-4 pl-7">
        <img src="users.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-white font-bold">Groups</p>
      </button>
      <button className="flex flex-row gap-4 pl-7">
        <img src="flag.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-white font-bold">Reports</p>
      </button>
    </div>
  );
}
