interface props {
  name: string;
  mode: string;
}

const Navbar = ({ name, mode }: props) => {
  return (
    <div className="w-full flex flex-row justify-between">
      <h1>{name}</h1>
      <h1>{mode}</h1>
    </div>
  );
};

export default Navbar;
