import Sidebar from "../../components/sidebar/Sidebar";

import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home