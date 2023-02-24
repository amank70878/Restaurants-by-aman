import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, CreateItem } from "./components";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import { firebase__auth } from "./firebaseConfig";
import { Home } from "./pages";
import { getAllFoodItems } from "./utils/firebaseFunctions";

const App = () => {
  // eslint-disable-next-line
  const [{ user, foodItems }, dispatch] = useStateValue();

  useEffect(() => {
    const unSub = firebase__auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: actionType.SET_USER,
          user: userAuth.providerData[0],
        });
      }
    });

    return unSub; // eslint-disable-next-line
  }, [dispatch]);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <AnimatePresence>
        <>
          <Header />
          <div className="pt-24 md:pt-24 bg-primary">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="CreateItem/" element={<CreateItem />} />
            </Routes>
          </div>
        </>
      </AnimatePresence>
    </>
  );
};

export default App;
