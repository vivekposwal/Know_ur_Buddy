import './Tc.css'
import cloud from './cloud.jpg'
import tree from './tree.jpg'
import grass from './grass.jpg'
import bird from './bird.jpg'
function Tc()
{
    return(
    <div className="Tc">
        <img className="b1" src={bird} alt="bird"/>
        <img className="c1" src={cloud} alt="cloud" />
        <img className="c2" src={cloud} alt="cloud"/>
        <h1>I'm Vivek</h1>
        <p>a <span>pro</span>grammer</p>
        <img className="tree1" src={tree} alt="tree"/>
        <img className="tree2" src={tree} alt="tree"/>
        <img className="grass" src={grass} alt="tree"/>
    </div>
    );
}
export default Tc;