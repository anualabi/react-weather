import { Container } from "@/components/ui";
import Logo from "@/components/logo";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center bg-secondary md:h-20 xl:h-24">
      <Container className="xl:px-11">
        <Logo />
      </Container>
    </nav>
  );
}
