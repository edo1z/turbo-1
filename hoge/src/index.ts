export type Hoge = {
  title: string;
  amount: number;
};

export const hoge = (h: Hoge) => {
  console.log(`title: ${h.title}, amount: ${h.amount}`);
};
