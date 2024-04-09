import { Container } from "@/components/ui";
import Logo from "@/components/logo";

export default function Navbar() {
  return (
    <nav className="bg-secondary h-16 md:h-20 xl:h-24 flex items-center">
      <Container className="xl:px-11">
        <Logo />
      </Container>
    </nav>
  );
}
