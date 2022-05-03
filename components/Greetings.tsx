interface GreetingsProps {
  name: string;
}

export const Greetings = ({ name }: GreetingsProps) => {
  return <div className="bg-red-600 text-white">Good morning {name}</div>;
};
