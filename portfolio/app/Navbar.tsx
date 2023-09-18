interface props {
  name: string;
}

const Navbar = ({ name }: props) => {
  return <div>{name}</div>;
};

export default Navbar;
