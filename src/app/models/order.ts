export class Order {
  id!: number;
  userId!: number;
  products!: OrderProduct[];
  userName!: string;
  email!: string;
  address!: string;
}

export class OrderProduct {
  productId!: number;
  variantId!: number;
  quantity!: number;
}
