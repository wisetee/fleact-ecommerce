import { Icon } from "@iconify/react/dist/iconify.js";

const SignUp = () => {
  return (
    <div className="lg:w-3/5 mx-auto">
      <p className="mb-0">Sign-up With Social</p>
      <hr className="my-1" />
      <div className="grid md:grid-cols-2 mt-6 mb-12">
        <div className="grid mx-3 my-2">
          <a href="#" className="btn-outline-dark px-12 py-6">
            <div className="flex flex-wrap justify-center items-center">
              <Icon
                icon="ion:logo-google"
                className="signup-social-icon me-2 text-xl"
              />
              <p className="mb-0 pt-1">Google</p>
            </div>
          </a>
        </div>
        <div className="grid mx-3 my-2">
          <a href="#" className="btn-outline-dark px-12 py-6">
            <div className="flex flex-wrap justify-center items-center">
              <Icon
                icon="ion:logo-facebook"
                className="signup-social-icon me-2 text-xl"
              />
              <p className="mb-0 pt-1">Facebook</p>
            </div>
          </a>
        </div>
      </div>

      <p className="mb-0">Or Sign-Up With Email</p>
      <hr className="my-1" />

      <form id="form1" className="form-group flex-wrap ">
        <div className="form-input my-6">
          <input
            type="text"
            id="exampleInputName"
            name="email"
            placeholder="Your full name"
            className="form-control  w-full mb-3 p-6"
          />
          <input
            type="text"
            id="exampleInputEmail1"
            name="email"
            placeholder="Your email address"
            className="form-control  w-full mb-3 p-6"
          />
          <input
            type="password"
            id="inputPassword1"
            placeholder="Set your password"
            className="form-control  w-full mb-3 p-6"
            aria-describedby="passwordHelpBlock"
          />
          <input
            type="password"
            id="inputPassword2"
            placeholder="Retype your password"
            className="form-control  w-full mb-3 p-6"
            aria-describedby="passwordHelpBlock"
          />

          <label className="py-3 flex flex-wrap justify-between">
            <div>
              <input type="checkbox" required="" className="mr-1" />
              <span className="label-body ">Remember Me</span>
            </div>

            <div id="passwordHelpBlock" className="form-text ">
              <a href="#" className="text-primary  fw-bold">
                {" "}
                Forgot Password?
              </a>
            </div>
          </label>
          <div className="grid my-4">
            <a href="#" className="btn-dark text-center">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
