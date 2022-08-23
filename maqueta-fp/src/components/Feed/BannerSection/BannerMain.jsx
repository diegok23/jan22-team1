import {Panel} from './Banner.style'
import SearchMain from "./Search-section/SearchMain";
import TextBanner from "./TextBanner";

function Banner() {
  return (
      <Panel>
       <TextBanner/>
       <SearchMain/>
      </Panel> 
  );
}

export default Banner;