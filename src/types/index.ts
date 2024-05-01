interface IBanner {
  heading: string;
  subheading: string;
  imageUrl: string;
  _id: string;
}

interface ISectionOne {
  heading: string;
  subheading: string;
  imageUrl: string;
  _id: string;
}

interface ISectionTwo {
  heading: string;
  subheading: string;
  imageUrl: string;
  _id: string;
}

export interface IContent {
  banner?: IBanner;
  sectionOne?: ISectionOne;
  sectionTwo?: ISectionTwo;
}
