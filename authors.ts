export interface Author {
  id: string;
  name: string;
  bio: string;
  profile: string;
}

export const authors: Author[] = [
  {
    id: "barbi",
    name: "Barbara",
    bio: "Psicoterapeuta nomade",
    profile: "/authors/barbi.jpeg",
  },
  {
    id: "giuppi",
    name: "Giuseppe",
    bio: "Digital nomad dev",
    profile: "/authors/giuppi.jpeg",
  },
  {
    id: "slowtravelfamily",
    name: "Giuppi e Barbi",
    bio: "Coppia di nomadi digitali",
    profile: "/authors/slowtravelfamily.png",
  },
];
