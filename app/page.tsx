import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Menu from "./components/Menu";
import HowToOrder from "./components/HowToOrder";
import DeliveryPayment from "./components/DeliveryPayment";
import OperationalHours from "./components/OperationalHours";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <WhyChooseUs />
      <Menu />
      <HowToOrder />
      <DeliveryPayment />
      <OperationalHours />
      <Footer />
    </main>
  );
}
