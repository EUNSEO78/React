import Profileimage from "./Profileimage";
import Profileinfo from "./Profileinfo";

function Profile() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Profileimage src="https://i.namu.wiki/i/iotqgL148yGBy8ZTTiGkRCtPOntib-DpybsYniybMpY4jbQAdLarl6JLw_IGya2L1KLM1oHK1tZLiunfsg3I4gd_dQSZSvmKHGLJwXPJcUNhM4CfP1vMHb2ONVvc3ml54MdxZ78sNvhunPODy3TfOQ.webp"></Profileimage>
      <Profileinfo name="장원영" date="August 8th, 2024"></Profileinfo>
    </div>
  );
}

export default Profile;
