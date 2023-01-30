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
    profile: "barbi_ddclcn.jpg",
  },
  {
    id: "giuppi",
    name: "Giuseppe",
    bio: "Digital nomad dev",
    profile: "giuppi_xaqcqp.jpg",
  },
  {
    id: "slowtravelfamily",
    name: "Giuppi e Barbi",
    bio: "Coppia di nomadi digitali",
    profile: "slowtravelfamily_toqhtk.png",
  },
];
