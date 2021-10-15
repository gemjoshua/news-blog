import { AppBar } from "./Appbar";
import Showcase from "./Showcase";
import { Meta } from "./Meta";

export const Layout = ({ children }) => (
  <>
    <Meta />
    <AppBar />
    <div className="Layout">
      <Showcase />
      <main className="Main">{children}</main>
    </div>
  </>
);
