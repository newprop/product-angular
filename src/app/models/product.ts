export class Product {
  id!: number;
  name!: string;
  brand!: string;
  type!: string;
  variants!: Variant[];
}

export class Variant {
  id!: number;
  color!: string;
  specification!: string;
  size!: string;
}

