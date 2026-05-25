export default function Buttonicon3(){
    return(
    <div className="flex flex-col gap-10 items-center">
      <button>
        <img
          src="settings.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
      </button>
      <button>
        <img src="users.svg" alt="" className="w-6 h-6 brightness-0 invert" />
      </button>
      <button className="pb-13">
        <img src="logout.svg" alt="" className="w-6 h-6 brightness-0 invert" />
      </button>
    </div>
    );
};