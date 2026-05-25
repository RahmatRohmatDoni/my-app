export default function Buttonadmin() {
  return (
    <div className="flex flex-col gap-8">
      <button className="flex items-center gap-3">
        <img
          src="settings.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Acount Setup</p>
      </button>
      <button className="flex items-center gap-3">
        <img src="users.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-gray-300">Manage Users</p>
      </button>
      <button className="flex items-center gap-3 pb-6">
        <img src="logout.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-gray-300">Logout</p>
      </button>
    </div>
  );
}
