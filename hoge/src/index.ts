import { aAddB } from "a";

export type Hoge = {
  title: string;
  amount: number;
};

export const hoge = (h: Hoge): number => {
  console.log(`title: ${h.title}, amount: ${h.amount}`);
  const result = aAddB();
  return result;
};
