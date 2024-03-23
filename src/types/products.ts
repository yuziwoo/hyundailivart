export type ProductThumbProps = {
  imgURL: string;
  name: string;
  brand: string;
  finalPrice: number;
  event: string[];
};

export type ProductGroupProps = {
  title: string;
  products: ProductThumbProps[];
};
