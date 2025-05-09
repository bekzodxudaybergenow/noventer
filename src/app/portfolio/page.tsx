import Image from "next/image";
import portfolio from "@/assets/total/portfolio-hero.png";
import portfolioBG from "@/assets/total/page.jpg";

export default function Portfolio() {
  return (
    <div>
      <section className="hero container relative z-[-1] overflow-hidden">
        <div className="py-10 lg:pt-40">
          <div className="relative z-[10]">
            <h1 className="text-[27px] font-bold mb-[20px] leading-[30px] max-w-[330px] lg:text-[40px] lg:max-w-[500px] lg:leading-[45px]">Har bir xizmat turini<br /> <span className="font-[200]">har bir mijoz uchun</span><br /> <span className="text-main-color">alohida ahamiyatli  </span><br />deb yondoshamiz !</h1>
            <button className="lg:flex px-3 py-2 rounded-[8px] bg-accent-color hover:bg-[#4200dbe0] duration-300 cursor-pointer mb-[40px] lg:mb-20">Xizmatlar haqida</button> 
          </div>
          <div className="overflow-hidden pt-40">
            <Image width={400} height={300} className="absolute z-[1] bottom-[-20px] w-full max-w-[400px] sm:max-w-[600px] right-0 lg:max-w-[800px] lg:right-[-100]" src={portfolio} alt="Laptop image"/>
          </div>
        </div>
      </section>
      <section className="container grid gap-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="p-5 lg:p-10">
            <h2 className="text-[26px] font-bold mb-6">Landing sahifalar</h2>
            <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-2">
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Qisqa va ta'sirli</h4>
                <p className="text-[14px]">Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.</p>
              </div>
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Maqsadli</h4>
                <p className="text-[14px]">Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.</p>
              </div>
              <div className="max-w-[260px]">
                  <h4 className="font-[500] text-[20px]">Tez yuklanuvchi</h4>
                  <p className="text-[14px]">Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.</p>
              </div>
            </div>
            <p className="mb-6">
              Texnik vazifa tayyorlab berish: 1 kun
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)
              Veb Dizayn: 10-15 soatlik mehnat.
            </p>
            <button className="hidden lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyiha bormi?</button> 
          </div>
          <Image width={600} height={600} className="w-full max-w-[600px] max-h-[600px] object-cover md:ml-[70px]" src={portfolioBG} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="p-5 lg:p-10">
            <h2 className="text-[26px] font-bold mb-6">Landing sahifalar</h2>
            <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-2">
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Qisqa va ta'sirli</h4>
                <p className="text-[14px]">Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.</p>
              </div>
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Maqsadli</h4>
                <p className="text-[14px]">Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.</p>
              </div>
              <div className="max-w-[260px]">
                  <h4 className="font-[500] text-[20px]">Tez yuklanuvchi</h4>
                  <p className="text-[14px]">Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.</p>
              </div>
            </div>
            <p className="mb-6">
              Texnik vazifa tayyorlab berish: 1 kun
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)
              Veb Dizayn: 10-15 soatlik mehnat.
            </p>
            <button className="hidden lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyiha bormi?</button> 
          </div>
          <Image width={600} height={600} className="w-full max-w-[600px] max-h-[600px] object-cover md:ml-[70px]" src={portfolioBG} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="p-5 lg:p-10">
            <h2 className="text-[26px] font-bold mb-6">Landing sahifalar</h2>
            <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-2">
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Qisqa va ta'sirli</h4>
                <p className="text-[14px]">Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.</p>
              </div>
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Maqsadli</h4>
                <p className="text-[14px]">Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.</p>
              </div>
              <div className="max-w-[260px]">
                  <h4 className="font-[500] text-[20px]">Tez yuklanuvchi</h4>
                  <p className="text-[14px]">Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.</p>
              </div>
            </div>
            <p className="mb-6">
              Texnik vazifa tayyorlab berish: 1 kun
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)
              Veb Dizayn: 10-15 soatlik mehnat.
            </p>
            <button className="hidden lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyiha bormi?</button> 
          </div>
          <Image width={600} height={600} className="w-full max-w-[600px] max-h-[600px] object-cover md:ml-[70px]" src={portfolioBG} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="p-5 lg:p-10">
            <h2 className="text-[26px] font-bold mb-6">Landing sahifalar</h2>
            <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-2">
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Qisqa va ta'sirli</h4>
                <p className="text-[14px]">Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.</p>
              </div>
              <div className="max-w-[260px]">
                <h4 className="font-[500] text-[20px]">Maqsadli</h4>
                <p className="text-[14px]">Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.</p>
              </div>
              <div className="max-w-[260px]">
                  <h4 className="font-[500] text-[20px]">Tez yuklanuvchi</h4>
                  <p className="text-[14px]">Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.</p>
              </div>
            </div>
            <p className="mb-6">
              Texnik vazifa tayyorlab berish: 1 kun
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)
              Veb Dizayn: 10-15 soatlik mehnat.
            </p>
            <button className="hidden lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyiha bormi?</button> 
          </div>
          <Image width={600} height={600} className="w-full max-w-[600px] max-h-[600px] object-cover md:ml-[70px]" src={portfolioBG} alt="" />
        </div>
      </section>
    </div>
  )
}
