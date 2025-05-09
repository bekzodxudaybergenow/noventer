import Image from "next/image";
import laptop from '@/assets/hero/laptop1.png';
import bgShadow from '@/assets/hero/bg-shadow.png';
import shadow2 from '@/assets/total/shadow2.png';
import info1 from '@/assets/hero/1.svg';
import info2 from '@/assets/hero/2.svg';
import info3 from '@/assets/hero/3.svg';
import info4 from '@/assets/hero/4.svg';
import about1 from '@/assets/about/1.jpg';
import about2 from '@/assets/about/2.jpg';
import about3 from '@/assets/about/3.jpg';
import project1 from '@/assets/project/1.png'
import project2 from '@/assets/project/2.png'
import project3 from '@/assets/project/3.png'
import service1 from '@/assets/service/1.svg';
import service2 from '@/assets/service/2.svg';
import service3 from '@/assets/service/3.svg';
import service4 from '@/assets/service/4.svg';
import service5 from '@/assets/service/5.svg';
import service6 from '@/assets/service/6.svg';
import service7 from '@/assets/service/7.svg';
import service8 from '@/assets/service/8.svg';
import service9 from '@/assets/service/9.svg';

export default function Home() {
  return (
    <main>
      <section className="hero container relative z-[-1]">
        <div className="py-10 lg:pt-40">
          <div className="relative z-[10]">
            <h1 className="text-[27px] font-bold mb-[20px] leading-[30px] max-w-[330px] lg:text-[40px] lg:max-w-[500px] lg:leading-[45px]">Yuqori sifatdagi<br /> <span className="font-[200]">aniqlikka asoslanib</span><br /> <span className="text-main-color">istalgan turdagi</span><br /> dasturlarni tayyorlaymiz</h1>
            <button className="lg:flex px-3 py-2 rounded-[8px] bg-accent-color hover:bg-[#4200dbe0] duration-300 cursor-pointer mb-[40px] lg:mb-20">Xizmatlar haqida</button> 
            <ul className="grid grid-cols-2 gap-2 max-w-[400px] lg:grid-cols-4 lg:max-w-[100%] lg:gap-x-10">
              <li className="flex items-center gap-x-1.5 px-3 py-3 rounded-[8px] bg-white/20 backdrop-blur-sm lg:p-5 lg:gap-x-7">
                <Image className="w-[30px]" src={info2} alt="" />
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-bold">7+ yillik</h4>
                  <p className="text-[10px]">Umumiy tajriba</p>
                </div>
              </li>
              <li className="flex items-center gap-x-1.5 px-3 py-3 rounded-[8px] bg-white/20 backdrop-blur-sm lg:p-5 lg:gap-x-7">
                <Image className="w-[30px]" src={info1} alt="" />
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-bold">5+ </h4>
                  <p className="text-[10px]">Yirik loyihalar</p>
                </div>
              </li>
              <li className="flex items-center gap-x-1.5 px-3 py-3 rounded-[8px] bg-white/20 backdrop-blur-sm lg:p-5 lg:gap-x-7">
                <Image className="w-[30px]" src={info3} alt="" />
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-bold">8+ </h4>
                  <p className="text-[10px]">Xizmat turlari</p>
                </div>
              </li>
              <li className="flex items-center gap-x-1.5 px-3 py-3 rounded-[8px] bg-white/20 backdrop-blur-sm lg:p-5 lg:gap-x-7">
                <Image className="w-[30px]" src={info4} alt="" />
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-bold">100%</h4>
                  <p className="text-[10px]">Xavsizlik</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden">
            <Image width={400} height={300} className="absolute z-[1] bottom-0 w-full max-w-[400px] sm:max-w-[600px] right-0 lg:max-w-[800px]" src={laptop} alt="Laptop image"/>
            <Image width={500} height={300} className="hidden absolute z-[-1] w-full max-w-[500px] bottom-0 opacity-[.1] lg:block right-15" src={bgShadow} alt="Background shadow image"/>
            <Image width={600} height={600} className="hidden absolute bottom-0 w-full max-w-[600px] lg:block right-[20px] lg:bottom-[20px] opacity-[.4]" src={shadow2} alt="Shadow image"/>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="bg-accent-color px-[10px] py-4 mb-8 xl:px-[5%] xl:py-8">
          <h2 className="text-[30px] font-bold leading-[30px] xl:text-[42px] mb-2">Biz haqimizda</h2>
          <p>Qisqacha ma'lumot</p>
        </div>
        <div className="container">
          <ul className="grid grid-cols-1 gap-8 mx-3 sm:grid-cols-2 md:grid-cols-2 md:mx-0 lg:grid-cols-3">
            <li className="rounded-[8px] bg-white/10 backdrop-blur-sm overflow-hidden">
              <Image className="w-full" width={300} height={300} src={about1} alt="" />
              <div className="pt-5 pb-12 px-4 xl:px-6">
                <h2 className="font-[600] text-[26px]">Boshlanishi</h2>
                <p className="font-[400] leading-[20px] text-[16px] xl:pr-20">Biz --dan boshladik va-- larnioldimizga maqsad qilib qo'ydik</p>
              </div>
            </li>
            <li className="rounded-[8px] bg-white/10 backdrop-blur-sm overflow-hidden">
              <Image className="w-full" width={300} height={300} src={about2} alt="" />
              <div className="pt-5 pb-12 px-4 xl:px-6">
                <h2 className="font-[600] text-[26px]">Uzoq muddatli loyihalar</h2>
                <p className="font-[400] leading-[20px] text-[16px] xl:pr-12">Tajribamiz davomida umumiy hisobda -- loyiha uchun -- muddatda ishlab topshirdik</p>
              </div>
            </li>
            <li className="rounded-[8px] bg-white/10 backdrop-blur-sm overflow-hidden">
              <Image className="w-full" width={300} height={300} src={about3} alt="" />
              <div className="pt-5 pb-12 px-4 xl:px-6">
                <h2 className="font-[600] text-[26px]">Jamoamiz kengaymoqda</h2>
                <p className="font-[400] leading-[20px] text-[16px] xl:pr-12">Jamoamiz safi esa tobora kengaymoqcha. Boshida - kishidan boshlangan faoliyatimiz hozirda - kishi bilan davom etmoqda</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="project">
        <div className="container">
          <div className="flex flex-col justify-center items-center px-[10px] mt-15 mb-8 xl:py-8">
            <h2 className="text-[30px] font-bold leading-[30px] xl:text-[42px] mb-2">Loyihalarimiz</h2>
            <p>biz haqimizda gapirdin</p>
          </div>
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
        </div>
      </section>
      <section className="service">
        <div className="container">
        <div className="flex flex-col justify-center items-center px-[10px] mt-15 mb-8 xl:py-8">
          <h2 className="text-[30px] font-bold leading-[30px] xl:text-[42px] mb-2">Xizmat turlari</h2>
          <p className="text-center text-[14px]">Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
        </div>
          <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm mb-4">
                <Image width={40} height={40} src={service1} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Landing sahifa</h2>
              <p className="text-center text-[14px] leading-[18px]">Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan</p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service2} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Korporative web-sayt</h2>
              <p className="text-center text-[14px] leading-[18px]">Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
              </p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service3} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Online do'kon</h2>
              <p className="text-center text-[14px] leading-[18px]">Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To'lov tizimlari va mahsulotni boshqarish tizimi mavjud.
              </p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service4} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">CRM tizimi</h2>
              <p className="text-center text-[14px] leading-[18px]">
                Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan foal ishlaydigan tashkilotlar
              </p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service5} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Portfolio saytlari</h2>
              <p className="text-center text-[14px] leading-[18px]">Shaxsiy yoki kompaniya ishlarini ko'rsatish. Freelancerlik yoki ijodkorlar uchun o'z ishlarini targ'ib qilishda</p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service6} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Blog sahifalar</h2>
              <p className="text-center text-[14px] leading-[18px]">O'z fikrlari, yangiliklari yoki ma'lumotlarini o'rtoqlashish. Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun</p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service7} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Ta'lim platformasi</h2>
              <p className="text-center text-[14px] leading-[18px]">Ta'lim kurslari, videodarsliklar yoki online testlar uchun. O'quv muassasalari yoki online dars beruvchi kompaniyalar uchun</p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service8} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">ERP platformasi</h2>
              <p className="text-center text-[14px] leading-[18px]">ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'mitdir. U tashkilotning moliyaviy, ishlab chiqarish, logistika, kadrlar boshqaruvi va boshqa bo'limlarini avtomatlashtirish uchun</p>
            </li>
            <li className="flex flex-col items-center px-6 pt-8 pb-14 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-[#5A00DB] duration-800 cursor-pointer hover:bg-accent-color">
              <div className="px-6 py-5 rounded-[8px] bg-white/10 backdrop-blur-sm hover:bg-white/50 mb-4">
                <Image width={40} height={40} src={service9} alt="" />
              </div>
              <h2 className="font-[600] text-[26px] mb-2">Alohida loyiha?</h2>
              <p className="text-center text-[14px] leading-[18px]">Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizga yangi startap g'oya mavjud bo'lsa biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz. G'oyadan boshlab ishlash uchun tayyor dasturgacha shakllantiramiz</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}