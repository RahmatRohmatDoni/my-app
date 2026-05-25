export default function Buttonproduct() {
  return (
    <div className="flex flex-col gap-8">
      <button className="flex items-center gap-3">
        <img
          src="circle-plus.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Add Organisation</p>
      </button>
      <button className="flex items-center gap-3">
        <img src="package.svg" alt="" className="w-6 h-6 brightness-0 invert" />
        <p className="text-gray-300">My Products</p>
        <div className="bg-orange-400 w-6 h-6 flex items-center justify-center rounded-4xl ml-auto">
          <p className="text-white">4</p>
        </div>
      </button>
      <button className="flex items-center gap-3 pb-6">
        <img
          src="stack-back.svg"
          alt=""
          className="w-6 h-6 brightness-0 invert"
        />
        <p className="text-gray-300">Stock</p>
      </button>
    </div>
  );
}
