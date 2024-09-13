import {
  Brilliance,
  Footer,
  Hero,
  Nav,
  Services,
  Simple,
  Testimonials,
} from "./sections";
import Subscribe from "./sections/Subscribe";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="padding ">
        <Hero />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Brilliance />
      </section>
      <section className="padding">
        <Simple />
      </section>
      <section className="padding mb-20 ">
        <Testimonials />
      </section>
      <section className="padding">
        <Subscribe className='' />
      </section>
      <section className="padding bg-primary">
        <Footer />
      </section>
    </main>
  );
}
