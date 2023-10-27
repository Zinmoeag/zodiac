export type zodiactype = {
    Angry : string,
    Character: string,
    Dates: string,
    Element : string,
    ElementImageUrl : string,
    Id:number,
    LifePurpose: string,
    Loyal: string,
    MyanmarMonth: string,
    Name: string,
    PrettyFeatures: string,
    RepresentativeFlower: string,
    Traits: {
      name : string,
      percentage: number,
    }[],
    ZodiacSign2ImageUrl: string,
    ZodiacSignImageUrl: string,
};
export type ZodiacListType = zodiactype[]


export type userZodiactype = {
    Angry : string,
    Character: string,
    Dates: string,
    Element : string,
    ElementImageUrl : string,
    Id:number,
    LifePurpose: string,
    Loyal: string,
    MyanmarMonth: string,
    Name: string,
    PrettyFeatures: string,
    RepresentativeFlower: string,
    Traits: {
      name : string,
      percentage: number,
    }[],
    ZodiacSign2ImageUrl: string,
    ZodiacSignImageUrl: string,
    chineseZodiac : string | null,
};

export type progressType = {
  name : string;
  percentage: number;
}

export type elementType = {
  name : string;
  img : string;
}

export type infoObjectType = {
  name : string,
  date : string,
  MyanmarMonth: string,
  Element: string,
  chineseZodiac : string | null,
  img : string,
  traits : progressType[],
}

export type contentType = {
  title: string;
  content: string;
}

export type contentlistType = contentType[]



