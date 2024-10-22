// import logo from "@/assets/logo.svg"
import logo from "../assets/react.svg"

export default function SideBarVer2() {

    function SideItem({ src, title }: { src: string, title: string }) {
        return (
            <div className="flex flex-col items-center bg-red-400 w-fit h-fit">
                <img
                    src={src}
                    alt="home logo"
                    width={15}  // 원하는 너비
                    height={50} // 원하는 높이
                    className="object-contain" // 이미지 비율 유지
                />
                <p className="text-sm text-center ">{title}</p>
            </div>
        )
    }


    return (
        <div className="flex flex-col items-center w-20 h-screen grid-cols-5 bg-green-600 ">


            <div className="w-10 h-10 mt-5 bg-gray-500 ">
                <img src={logo} alt="homelogo" />
            </div>

            <div className="flex flex-col items-center bg-gray-500 h-fit">
                <SideItem src={logo} title="홈 화면"></SideItem>
                <SideItem src={logo} title="지도 화면"></SideItem>
                <SideItem src={logo} title="커뮤니티"></SideItem>
                <SideItem src={logo} title="저장목록"></SideItem>
            </div>

            <SideItem src={logo} title="내 정보 / 로그인"></SideItem>
        </div>
    )
}