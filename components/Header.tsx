import Link from "next/link";

export default function Header() {
  return (
    // <header className={`w-full pt-10 bg-[#fff] ${scrollY > 0 && "fixed"}`}>
    <header className={`w-full pt-10 bg-[#fff] sticky top-0`}>
      <div className="flex h-20 bg-[#8967ff] text-[#fff]">
        <Link className="flex w-[25%] items-center justify-end" href="/">LOGO</Link>
        <ul className="flex w-[75%] items-center justify-evenly">
          <li className="headerItem"><Link href="/1">메뉴1</Link></li>
          <li className="headerItem"><Link href="/2">메뉴2</Link></li>
          <li className="headerItem"><Link href="/3">메뉴3</Link></li>
          <li className="headerItem"><Link href="/4">메뉴4</Link></li>
        </ul>
      </div>
    </header>
  )
}
