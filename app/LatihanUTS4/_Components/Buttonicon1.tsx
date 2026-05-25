export default function Buttonicon1() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <button>
        <img
          src="category.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
      </button>
      <button className="relative">
        <img
          src="screen-share.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
      </button>
      <button>
        <img
          src="credit-card-pay.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
      </button>
      <button>
        <img src="basket.svg" alt="" className="w-6 h-6 brightness-0 invert" />
      </button>
      <button className="pb-8">
        <img
          src="category-2.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
      </button>
    </div>
  );
}
