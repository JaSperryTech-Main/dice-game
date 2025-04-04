import DicePage from '../components/Game/DicePage.jsx';
import DisplayBar from '../components/Game/DisplayBar.jsx';

const Home = () => {
  return (
    <main className="bg-[#e0f7fa] m-0 flex content-center items-center min-h-screen h-full">
      <DisplayBar />
      <DicePage />
    </main>
  );
};

export default Home;
