import { CitySearch } from "./(hero-section)";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
        <div className="flex items-center justify-center h-52 md:h-60 xl:h-72">
          <CitySearch />
        </div>
      </section>
    </main>
  );
}
