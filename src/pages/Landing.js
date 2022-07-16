import React from "react";
import { Button, Navbar } from "@material-tailwind/react";
import { Logo, main } from "../components/index";

const Landing = () => {
  return (
    <main>
      <nav className=" flex flex-col justify-between items-center mx-auto max-w-screen-xl">
        <Navbar>
          <Logo />
        </Navbar>
        <div className=" flex justify-center items-center max-w-6xl">
          {/* info */}
          <div className=" flex flex-col justify-around items-start info">
            <div className="p-10 mt-10">
              <h1>
                job <span>tracking </span> app
              </h1>
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores, quae consequuntur maiores alias veniam reiciendis
                atque odit voluptatem. Aspernatur eaque tempora sit deleniti,
                amet voluptatum!
              </p>

              <Button className="btn btn-hero p-10 mt-10">
                Login/Register
              </Button>
            </div>
          </div>
          <div>
            <img src={main} alt="job hunt" className="img main-img md:hidden" />
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Landing;
