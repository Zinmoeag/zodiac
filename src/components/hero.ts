import '../style/zodiacCircle.css'


export const hero: string = `
  <div class="w-full h-full flex items-center justify-center">
    <a class="absolute text-white left-4 top-4 text-yellow-200" href="/#sharmal">ရှာမယ် ></a>
    <div class="w-fit">
        <div class="flex items-center justify-center">
            <h3 class="text-yellow-200 text-4xl absolute dancing-script appear text-center zodiac-text">Zodiac</h3> 
            <div id="circle">
              
            </div>
        </div>
</div>
  </div>
`;

export class zodiacTemplate{
  constructor(private rootEl:HTMLUListElement){
    this.rootEl.classList.add("circle")
    this.rootEl.style.setProperty("--total","12")
  }

  render(i: number, image: string, name: string){
    const li = document.createElement("li");
    li.setAttribute("data_name", name)
    li.style.setProperty("--i",String(i))
    li.classList.add("stat","flex","items-center","justify-center","bg-transparent","backdrop-blur-md","border-[0.1rem]","border-white","hover:bg-yellow-100","overflow-hidden", "cursor-pointer");
    const img = document.createElement("img");
    img.src = image;
    img.setAttribute("data_name", name);

    li.append(img);

    this.rootEl.append(li)
  }
}


