export interface IPropsFilter {
  options: { text: string; value: string }[];
  activeSort: string;
}
export interface IPropsModal {
  visible: boolean;
}
export interface IPropsProduct {
  image: string;
  title: string;
  rating: number;
  price: number;
  id: string;
}
export interface IPropsSearchBar {
  placeholder: string;
}
