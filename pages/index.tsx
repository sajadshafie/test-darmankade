import type { NextPage } from "next";
import HeaderBaby from "../components/children/Headerbaby";
import LinkPage from "../components/Global/Link";
import Header from "../components/Layout/Header";
import Search from '../components/children/Search'
import DoctorRender from "../components/children/DoctorRender";
const Home: NextPage = () => {
  return (
    <div className="full-container">
      <Header />
      <HeaderBaby />
      <Search count={20}/>
      <DoctorRender/>
    </div>
  );
};

export default Home;
