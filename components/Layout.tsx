export const Layout = ({ children, meta }: any) => {
  return (
    <div className=" flex gap-6 flex-col">
      <div className="text-green-700">{meta.title}</div>
      <div>{children}</div>
    </div>
  );
};
