import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hoşgeldiniz / Welcome</Title>
      <h1>Bogazdagezi.net</h1>
      <Counter />
      <p>
        Şirketimiz İstanbul'da her kişi sayısına uygun yat ve teknelerde gruplara özel yemeksiz, yemekli, kokteyl, kahvaltı eşliğinde boğaz turu hizmeti sağlıyor.
      </p>
    </main>
  );
}
