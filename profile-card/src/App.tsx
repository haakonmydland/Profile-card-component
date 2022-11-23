import "./App.css";
import { Card } from "./Card";
import ppf from "./assets/image-victor.jpg";
import headerImg from "./assets/bg-pattern-card.svg";

function App() {
  return (
    <div className="App">
      <Card
        HeaderImage={headerImg}
        ProfileImage={ppf}
        Name="Victor Crest"
        Age={26}
        Location="London"
        Followers={80000}
        Likes={803000}
        Photos={1400}
      />
    </div>
  );
}

export default App;
