import "./Mc.css";
import pp2 from "./pp2.jpg.jpg";
import DnD from "./DnD.jpg";
import tea from "./tea.gif";
import code from "./code.jpg";
function Mc() {
  return (
    <div className="Mc">
      <img className="pp" src={pp2} alt="profile picture" />
      <h1 className="h1">Hello.</h1>
      <p className="p1">
        I'm a Computer Science student at JUET Interested particularly in
        Competitive Coding and Web development{" "}
      </p>
      <hr></hr>
      <div className="skills">
        <h2 className="h2">My Skills</h2>
        <div className="skills-row">
          <img className="dndi" src={DnD} alt=" code image"></img>
          <h3 className="dnd">Design n Development</h3>
          <p className="p2">
            I started to code when i was in my high school.Recently Web
            Development attracted me and i am gaining experience with each day
            passing.
          </p>
        </div>
        <div className="skills-row">
          <img className="teai" src={tea} alt="tea image"></img>
          <h3 className="tea">Brewing Tea</h3>
          <p className="p2">
            I loves tea a lot,many a times i dont even count the number of cups
            i drink.Moreover i'm also a good tea maker and especially my mother
            is my big fan in this regard.
          </p>
        </div>
        <div className="skills-row">
          <img className="codei" src={code} alt="code image"></img>
          <h3 className="code">Coding</h3>
          <p className="p2">
            Truly speaking i loves to code,i got introduced to coding in my 9th
            standard and i feel good doing it.I loves to learn different
            computer languages presently i know c , c++ , python.I look ahead a
            good competitive coding career and i am already working for it.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default Mc;
