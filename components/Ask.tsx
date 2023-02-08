import { useRef } from "react"

export default function Ask() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumRef = useRef<HTMLInputElement>(null);
  const businessRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = () => {
    
  }

  return (
    <div className="flex h-[300px] bg-gray-200 justify-center">
      <div className="w-[60%] h-full flex items-center">
        <div className="flex-1 flex flex-col">
          <div className="title">Title</div>
          <div className="contents">contents</div>
        </div>
        <div className="flex-1 flex justify-center">
          <form className="flex flex-col w-[400px] space-y-3">
            <input
              className="askInputItem"
              type="text"
              placeholder="이름"
              required
              ref={nameRef}
            />

            <input
              className="askInputItem"
              type="text"
              placeholder="전화번호"
              required
              ref={phoneNumRef}
            />

            <select
              className="askInputItem"
              ref={businessRef}
              required
            >
              <option>업종1</option>
              <option>업종2</option>
              <option>업종3</option>
            </select>
            
            <input 
              className="h-[50px] bg-[#f13046] text-[#fff] text-xl font-black"
              type="submit"
              value="신청"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
