export default function ButtonMainMenu() {
  return (
    <div className="flex  flex-col gap-5 pl-4">
      <button className="flex flex-row gap-4">
        <img
          src="category.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-white font-bold">Dashboard</p>
      </button>
      <button className="flex flex-row gap-4">
        <img src="report.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-white font-bold">Overview</p>
      </button>
      <button className="flex flex-row gap-4">
        <img
          src="device-analytics.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-white font-bold">Dashboard</p>
      </button>
    </div>
  );
}
