import Image from "next/image";
import serviceImg from "@/assets/total/service-hero.png";
import project1 from '@/assets/project/1.png'
import project2 from '@/assets/project/2.png'
import project3 from '@/assets/project/3.png'

export default function Service() {
  return (
    <div>
      <section className="hero container relative z-[-1] overflow-hidden">
        <div className="py-10 lg:pt-40">
          <div className="relative z-[10]">
            <h1 className="text-[27px] font-bold mb-[20px] leading-[30px] max-w-[330px] lg:text-[40px] lg:max-w-[500px] lg:leading-[45px]">Tajribamiz davomida<br /> <span className="font-[200]">turli xil hajmdagi</span><br /> <span className="text-main-color">IT loyihalarini</span><br />ishga tushira oldik</h1>
            <button className="lg:flex px-3 py-2 rounded-[8px] bg-accent-color hover:bg-[#4200dbe0] duration-300 cursor-pointer mb-[40px] lg:mb-20">Xizmatlar haqida</button> 
          </div>
          <div className="overflow-hidden pt-40">
            <Image width={400} height={300} className="absolute z-[1] bottom-[-20px] w-full max-w-[400px] sm:max-w-[600px] right-0 lg:max-w-[800px] lg:right-[-100]" src={serviceImg} alt="Laptop image"/>
          </div>
        </div>
      </section>
      <section className="container">
        <ul className="grid gap-y-15">
              <li className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-5 gap-y-2 lg:gap-10">
                <Image className="w-full max-w-[600px] rounded mb-4 md:h-[100%] md:mb-0 object-cover lg:rounded-[12px]" width={600} height={600} src={project1} alt="" />
                <div className="">
                  <h4 className="font-[600] text-[20px] mb-4 md:mb-2">Tourmad loyihasi</h4>
                  <p className="font-[300] text-[16px] leading-[20px] mb-5">
                    Tourmad - O'zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o'zida bir necha service larni o'z ichiga jamlagan bo'lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko'plab xizmarlarni o'z ichiga oladi. Bundan tashqari saytdan o'zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko'satish qancha ekanligini ko'rishingiz va o'zingiz uchun oldindan buyurtma qilishingiz mumkin.
                  </p>
                  <button className="lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyihani ko'rish</button> 
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-5 gap-y-2 lg:gap-10">
                <Image className="w-full max-w-[600px] rounded mb-4 md:h-[100%] md:mb-0 object-cover lg:rounded-[12px] lg:order-2" width={600} height={600} src={project2} alt="" />
                <div className="lg:order-1 lg:text-right">
                  <h4 className="font-[600] text-[20px] mb-4 md:mb-2">ProRun loyihasi</h4>
                  <p className="font-[300] text-[16px] leading-[20px] mb-5">
                    ProRun.uz - bu saytda tez-tez bo'lib o'tadigan yugurish bo'yicha musobaqalar bo'lib o'tadi va siz saytdan ro' yxatdan o'tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin.
                    Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo'lgani bois ularga va boshqa qatnashchilarga ro'yxatdan o'tishni oson qilish uchun yangi web ilova ishlab chiqildi.
                  </p>
                  <button className="lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer lg:ml-auto">Loyihani ko'rish</button> 
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-5 gap-y-2 lg:gap-10">
                <Image className="w-full max-w-[600px] rounded mb-4 md:h-[100%] md:mb-0 object-cover lg:rounded-[12px]" width={600} height={600} src={project3} alt="" />
                <div className="">
                  <h4 className="font-[600] text-[20px] mb-4 md:mb-2">Xalq trans loyihasi</h4>
                  <p className="font-[300] text-[16px] leading-[20px] mb-5">
                    Bu yerda esa yana koproq malumotlar berilishi kerak.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  </p>
                  <button className="lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyihani ko'rish</button> 
                </div>
              </li>
        </ul>
      </section>
    </div>
  )
}



