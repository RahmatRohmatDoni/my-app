export default function ButtonAccount() {
  return (
    <div className="flex  flex-col gap-5 pl-4">
      <button className="flex flex-row gap-4">
        <img
          src="user-circle.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-white font-bold">Profile</p>
      </button>
      <button className="flex flex-row gap-4">
        <img
          src="settings.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-white font-bold">Settings</p>
      </button>
    </div>
  );
}
