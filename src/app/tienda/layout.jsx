import Link from "next/link";

export const metadata = {
  title: "Tienda X",
};

const TiendaLayout = ({ children }) => {
  return (
    <>
      <div>layout de tiendas</div>
      <ul>
        <li>
          <Link href="/tienda/categorias">Categorias</Link>
        </li>
        <li>
          <Link href="/tienda/categorias/computadoras">Computadoras</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default TiendaLayout;
