import PageHeader from "../PageHeader";
import { useState } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const Account = () => {
  const [activeTab, setActiveTab] = useState("sign-in");

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <>
      <PageHeader pageTitle="Account" />
      <section className="login-tabs">
        <div className="container mx-auto my-12 py-12">
          <div className="tabs-listing">
            <nav className="mb-12">
              <div
                className="nav nav-tabs flex justify-center border-b border-gray-200 mb-4"
                id="nav-tab"
                role="tablist"
              >
                <button
                  onClick={() => handleTabChange("sign-in")}
                  className={`nav-link account-tab ${
                    activeTab === "sign-in" ? "active" : ""
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => handleTabChange("sign-up")}
                  className={`nav-link account-tab ${
                    activeTab === "sign-up" ? "active" : ""
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </nav>
            <div className="tab-content">
              {activeTab === "sign-in" && (
                <SignIn />
              )}
              {activeTab === "sign-up" && (
                <SignUp />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
