import './App.css';
import Menu from './CP/components/menu';
import Bai3 from './CP/components/Bai3'
import Bai2 from './CP/components/B2';
import StateClass from './CP/components/stateCl';
import StateFunction from './CP/components/stateFn';
import ChartBar from './CP/components/ChartBar';
import ChartBar1 from './CP/components/ChartBar1';
import Profile from './CP/components/Profile';
import SocialBlock from './CP/components/SocialBlock';
import Person from './CP/components/Person';
import Block4 from './CP/components/Block4';
import Bai1 from './Homework3/Bai1';
import Bai2HW from './Homework3/Bai2';
 

function App() {
  return (
    <>
    {/* <Menu></Menu>
    <Bai2></Bai2>
    <Bai3></Bai3> */}
    {/* <StateClass></StateClass>
    <StateFunction></StateFunction> */}
    <ChartBar>ChartBar1</ChartBar>
    <ChartBar1 text="BANDWIDTH" color1="red" colors="pink" percentage="20%"></ChartBar1>
    <ChartBar1 text="STORAGE" color1="blue" colors="aqua" percentage="50%"></ChartBar1>
    <ChartBar1 text="USERS" color1="green" colors="greenyellow" percentage="70%"></ChartBar1>
    <ChartBar1 text="VISITORS" color1="gold" colors="yellow" percentage="30%"></ChartBar1>
    <ChartBar1 text="EMAILS" color1="indigo" colors="violet" percentage="45%"></ChartBar1>
    <ChartBar1 text="BASIC" color1="hotpink" colors="pink" percentage="80%"></ChartBar1>
    <ChartBar1 text="OTHERS" color1="royalblue" colors="cyan" percentage="37%"></ChartBar1>

    <Profile iconName='bi bi-star' text="HTML" percentage={70} color="greenyellow"></Profile>
    <Profile iconName='bi bi-star' text="CSS" percentage={55} color="yellow"></Profile>
    <Profile iconName='bi bi-star' text="PHP" percentage={40} color="violet"></Profile>
    <Profile iconName='bi bi-star' text="Java" percentage={80} color="pink"></Profile>
    <Profile iconName='bi bi-star' text=".Net" percentage={50} color="cyan"></Profile>

    <div style={{display:'flex'}}>
      <SocialBlock text='Facebook' color='blue' iconName='FaFacebookF' total="5,000,000" unit="Likes"/>
      <SocialBlock text='Twitter' color='aqua' iconName='FaTwitter' total="40,000" unit="Tweets"/>
      <SocialBlock text='Google' color='orange' iconName='FaGooglePlusSquare' total="4,60,000" unit="Plus"/>
      <SocialBlock text='Pinterest' color='red' iconName='FaPinterestP' total="34,000" unit="Pins"/>
    </div>

    <div style={{display:'flex'}}>
    <Block4 total="24,599" unit="TODAY'S"></Block4>
    <Block4 total="15,699" unit="YESTERDAY'S"></Block4>
    <Block4 total="1,24,599" unit="TOTAL DOWLOADS"></Block4>
    <Block4 total="$54,599" unit="CURRENT INCOME"></Block4>
    </div>
    

    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>

    <Bai1></Bai1>
    <Bai2HW></Bai2HW>

      {/* <JSX></JSX> */}
      {/* <ES6></ES6> */}
    </>
  );
}

export default App;

