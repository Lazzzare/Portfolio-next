interface props {
  name: string;
  mode: string;
}

const Navbar = ({ name, mode }: props) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>mode</h1>
    </div>
  );
};

export default Navbar;
