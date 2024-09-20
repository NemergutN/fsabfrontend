// We import components from other files like this
import FortuneGenerator from "./components/FortuneGenerator";

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <div>
      <center>
        <h1> Fortune Generator!!!!</h1>
      </center>
      <FortuneGenerator>
      </FortuneGenerator>
    </div>
  );
}