import { Wrapper } from "../components";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <Wrapper classes={"py-6"}>
        <p className="text-xl text-center">© {year} Fortune Uchegbu. All rights reserved.</p>
      </Wrapper>
    </footer>
  )
}

export default Footer;
