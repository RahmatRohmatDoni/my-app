export default function Buttonaccount() {
  return (
    <div className="flex flex-col gap-8">
      <button className="flex items-center gap-3">
        <img
          src="category.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Overview</p>
      </button>
      <button className="flex items-center gap-3">
        <img
          src="screen-share.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Hire Freelancer</p>
        <div className="bg-orange-400 w-6 h-6 flex items-center justify-center rounded-4xl ml-auto">
          <p className="text-white">4</p>
        </div>
      </button>
      <button className="flex items-center gap-3">
        <img
          src="credit-card-pay.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Payment</p>
      </button>
      <button className="flex items-center gap-3">
        <img src="basket.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-gray-300">My Order</p>
      </button>
      <button className="flex items-center gap-3 pb-6">
        <img
          src="category-2.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Admin Setting</p>
      </button>
    </div>
  );
}
