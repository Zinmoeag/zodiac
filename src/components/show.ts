import {
	zodiactype, 
	userZodiactype, 
	progressType, 
	elementType, 
	infoObjectType, 
	contentType, 
	contentlistType
} from '../types/types'

export class show {
	private root: HTMLDivElement;
	private element: elementType[] = [
		{name: "Air", img:`./assets/images/elements/air.png`},
		{name: "Earth", img:`./assets/images/elements/earth.png`},
		{name: "Fire", img:`./assets/images/elements/fire.png`},
		{name: "Water", img:`./assets/images/elements/water.png`},
	]

	constructor(root:HTMLDivElement){
		this.root = root;
	}

	setText(title:string, name: string) : HTMLParagraphElement{
		let paraEl = document.createElement("p");
		paraEl.classList.add("text-yellow-200")
		paraEl.innerHTML = title + " - " + name ;
		return paraEl;
	}

	setElement(userElement : string) {

		const element = this.element.filter((element:elementType) => element.name === userElement)[0]
		const container = document.createElement("div");
		const title = document.createElement("h3");
		const img = document.createElement("img");

		container.classList.add("text-yellow-800","my-10","dancing-script", "border-blue-800", "border-t-2", "border-b-2", 'bg-white')
		title.innerHTML = "Element"
		title.classList.add("text-2xl", "px-4")
		img.src = element.img;
		img.classList.add("w-[60%]","mx-auto")

		container.append(title, img)

		return container;
	}

	setInfoTitle(info: infoObjectType): HTMLDivElement{

		let infoTitleElement = document.createElement("div");
		infoTitleElement.classList.add("pb-4", "dancing-script",);
		infoTitleElement.id = "show-title";

		let nameEl = document.createElement("h3");
		nameEl.classList.add("uppercase", "font-bold", "text-yellow-200", "text-3xl")
		nameEl.innerHTML = info.name;
		let dateEl = this.setText("Date", info.date);
		let mmMonthEl = this.setText("Myanmar Month", info.MyanmarMonth);

		if(info.chineseZodiac){
			let chineseZodiac = this.setText("Chinese Zodiac", info.chineseZodiac)
			infoTitleElement.append(chineseZodiac)
		}
		infoTitleElement.prepend(nameEl,dateEl,mmMonthEl)
		return infoTitleElement;
	}

	setInfoImage(imageSrc: string): HTMLDivElement{
		let imgContainer = document.createElement("div");
		let img = document.createElement("img");
		img.src = `./assets/`+imageSrc
		imgContainer.append(img)

		return imgContainer;
	}

	setContentItem(content: contentType){
		let contentItemContainer = document.createElement("div");
		contentItemContainer.classList.add("md:px-10", "px-2", "text-white", "py-4")
		contentItemContainer.id = "show-character";

		let contentTitle = document.createElement("h3");
		contentTitle.classList.add("text-2xl","text-yellow-600","text-justify");
		contentTitle.innerHTML = content.title

		let contentText = document.createElement("p");
		contentText.innerHTML = content.content;

		contentItemContainer.append(contentTitle,contentText)

		return contentItemContainer;
	}

	setProgressContainer(data: progressType[]){
		let container = document.createElement("div");

		data.forEach((item: progressType) => {
			let progressBar = document.createElement("div");
			let wrappedEl = document.createElement("div");
			wrappedEl.classList.add("my-4")
			let name = document.createElement("h3");
			name.classList.add("text-yellow-200")


			name.innerHTML = item.name;

			progressBar.classList.add("progress-bar");
			progressBar.style.setProperty("--bar",String(item.percentage)+"%")
			wrappedEl.append(name,progressBar)
			container.append(wrappedEl);
		})

		return container;

	}

	build(userZodiac: userZodiactype): HTMLDivElement{
		let layoutElement = document.createElement("div");
		layoutElement.classList.add("flex", "flex-col", "lg:flex-row");

		const userZodiacInfo = {
			name : userZodiac.Name,
			date : userZodiac.Dates,
			MyanmarMonth: userZodiac.MyanmarMonth,
			Element: userZodiac.Element,
			img : userZodiac.ZodiacSign2ImageUrl,
			traits : userZodiac.Traits,
			chineseZodiac : userZodiac.chineseZodiac,
		}

		const userZodiacContent:contentlistType = [
			{title: "Character" ,content: userZodiac.Character},
			{title: "Life Purpose" ,content: userZodiac.LifePurpose},
			{title: "Loyal" ,content: userZodiac.Loyal},
			{title: "Angry" ,content: userZodiac.Angry},
			{title: "Pretty Features" ,content: userZodiac.PrettyFeatures},
			{title: "Representative Flower" ,content: userZodiac.RepresentativeFlower},
		]
		
		const infoContainer = this.buildInfo(userZodiacInfo);
		const contentContainer = this.buildContentContainter(userZodiacContent);

		layoutElement.append(infoContainer, contentContainer)
		return layoutElement;
	}

	buildInfo(zodiacInfo: infoObjectType){
		let infoContainer = document.createElement("div");
		infoContainer.classList.add("md:w-[25rem]","w-100")
		infoContainer.id = "show-id"
		// this.infoContainer = infoContainer;

		let infoImg = this.setInfoImage(zodiacInfo.img)
		let elementEl = this.setElement(zodiacInfo.Element);
		let infoTitleContainer = this.setInfoTitle(zodiacInfo)
		let progressContainer = this.setProgressContainer(zodiacInfo.traits)
		infoContainer.append(infoTitleContainer, infoImg, progressContainer, elementEl)

		return infoContainer;
	}

	buildContentContainter(contentList: contentlistType): HTMLDivElement{
		let contentContainer = document.createElement("div");
		contentContainer.classList.add("flex-1");
		contentContainer.id = "show-content";

		contentList.forEach((content: contentType) => {
			contentContainer.append(this.setContentItem(content))
		})

		return contentContainer;
	}

	clearRender(){
		this.root.innerHTML = "";
		this.root.classList.add("hidden");

		return false;
	}

	render(userZodiac: zodiactype, chineseZodiac:{chineseZodiac: string | null}){
			this.root.classList.remove("hidden");

			let zodiacObj = {
				...userZodiac,
				...chineseZodiac	
			}

			this.root.innerHTML = this.build(zodiacObj).outerHTML;
			return true;
	}

}