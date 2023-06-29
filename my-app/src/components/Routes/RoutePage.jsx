import { Route, Routes } from "react-router-dom";

import { Home } from "../Home/Home";
import { SearchPage } from "../pages/Search/Search";
import { VideoPage } from "../pages/Video/Video";
import { AccountPage } from "../pages/Account/Account";

export const RoutesPages = () => {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/video" element={<VideoPage />} />
        <Route exact path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
};