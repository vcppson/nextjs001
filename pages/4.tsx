export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-5xl py-56 border-b-4 border-b-gray-500 text-center my-8">이미지 4</div>
      <div className="flex flex-col w-[500px] h-[500px] space-y-2 py-10">
        <div className="flex-1 flex w-full h-24 border-2 border-black">
          <div className="w-[75%] h-full border-r-2 border-black"></div>
          <div className="w-[25%] h-full"></div>
        </div>
        <div className="flex-1 flex w-full h-24 border-2 border-black">
          <div className="w-[25%] h-full border-r-2 border-black"></div>
          <div className="w-[75%] h-full"></div>
        </div>
        <div className="flex-1 flex w-full h-24 border-2 border-black">
          <div className="w-[50%] h-full border-r-2 border-black"></div>
          <div className="w-[50%] h-full"></div>
        </div>
      </div>
    </div>
  )
}