import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-5xl py-56 border-b-4 border-b-gray-500 text-center my-8">메인 이미지</div>
      <div className="py-20">
        <Carousel>
          <div className="w-full text-center">1</div>
          <div className="w-full text-center">2</div>
          <div className="w-full text-center">3</div>
          <div className="w-full text-center">4</div>
          {/* <div className="w-full text-center">123</div>
          <div className="w-full text-center">15t563</div>
          <div className="w-full text-center">CC</div> */}
        </Carousel>
      </div>
    </div>
  );
}
