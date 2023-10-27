console.clear();

import './input.css'
import {hero,zodiacTemplate} from './components/hero'
import { sharmal } from './components/sharmal'
import { show } from './components/show'
import {zodiacJson} from './data/zodiacData'
import {Horoscope} from './utilities/zodiac'
import {zodiactype, ZodiacListType} from './types/types'
const {ZodiacSignsDetail} = zodiacJson;
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
  
const getZodiac = (list: ZodiacListType, userZodiac: string) => {
      const zodic = list.find((item: zodiactype) : boolean  => item.Name.includes(userZodiac))
      return zodic
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <section id="hero" class="h-[100vh] flex flex-col items-center justify-center"></section>
        <section id="sharmal" class="h-[100vh] flex flex-col items-center justify-center"></section>
        <section id="shows" class="bg-gradient-to-b from-gray-900 to-blue-900 md:px-10 md:py-10 px-4 py-4 show hidden"></section>
       
`
document.querySelector<HTMLDivElement>("#hero")!.innerHTML = hero;
const showSection = document.querySelector("#shows") as HTMLDivElement;
const UserZodiac = new show(showSection);

const circle = document.querySelector("#circle") as HTMLUListElement;

//creating zodiac list into circle
for(let i = 0; i < ZodiacSignsDetail.length; i++){
  new zodiacTemplate(circle).render(i+1,`/assets/${ZodiacSignsDetail[i].ZodiacSignImageUrl}`, ZodiacSignsDetail[i].Name);
}

const stat = document.querySelectorAll(".stat") as NodeListOf<Element>;
stat.forEach((element: Element) => {
  element.addEventListener("click",(e: Event) => {
    e.stopPropagation();

    const element = e.target as HTMLDListElement;
    try{
      const zodiacSign = element.getAttribute("data_name")!;
      const userZodiacObj = getZodiac(ZodiacSignsDetail, zodiacSign)!;

      UserZodiac.render(userZodiacObj, {chineseZodiac: null})
      showSection.scrollIntoView({
          behavior: 'smooth', 
          block: 'start',    
      });


    }catch{
      dateError.innerHTML = "Invalid Format"
    }
  })
})


setTimeout(() => {
  circle.classList.add("active")
}, 1000);


//sharmal secton
const sharmalSection = document.querySelector("#sharmal")!
sharmalSection.innerHTML = sharmal;
const dateInput = document.querySelector("#date-input") as HTMLInputElement;
const dateSubmitBtn = document.querySelector("#date-submit") as HTMLButtonElement;
const dateError = document.querySelector("#date-error") as HTMLParagraphElement;

const picker = new Pikaday({
    field: dateInput,
    yearRange: [1900, new Date().getFullYear()],
    showYearDropdown: true,
    firstDay: 1,
});

dateSubmitBtn.addEventListener('click', (e:Event) =>{
  e.preventDefault()
  try{
    const birthDate = new Date(dateInput.value);
    const HoroscopeObj = new Horoscope(birthDate)
    const zodiacSign = HoroscopeObj.getHoroscope();
    dateError.innerHTML = ""

    const userZodiacObj = getZodiac(ZodiacSignsDetail, zodiacSign)!;
    const chineseZodiacSign = HoroscopeObj.getChineseZodiac();
    UserZodiac.render(userZodiacObj,{chineseZodiac : chineseZodiacSign})

    showSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',    
    });


  }catch{
    dateError.innerHTML = "Invalid Format"
  }
})