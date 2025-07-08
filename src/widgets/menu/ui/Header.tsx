import { Logo, MenuButton, PlusButton } from '@/assets/icons'

export default function Header() {
  return (
    <header className="w-screen h-[44px] absolute top-0 bg-gray-100/40 flex px-4 items-center justify-between">
      <button className="text-2xl font-bold flex items-center gap-1 outline-none cursor-pointer">
        <img src={Logo} alt="logo" className="size-6" />
        yummmjin
      </button>
      <div className="flex items-center gap-2">
        <button className="size-[36px] grid place-items-center rounded-lg hover:bg-gray-100 outline-none cursor-pointer">
          <img src={PlusButton} alt="plus" className="size-6" />
        </button>
        <button className="size-[36px] grid place-items-center rounded-lg hover:bg-gray-100 outline-none cursor-pointer">
          <img src={MenuButton} alt="menu" className="size-6" />
        </button>
      </div>
    </header>
  )
}
