import { makeObservable, observable, action, runInAction } from "mobx";
import { publicAxios } from "config/axios";
import { privatePaths, publicPaths } from "routes";

class AdminStore {
  isLoadingLogin = false;

  constructor() {
    makeObservable(this, {
      isLoadingLogin: observable.ref,
      login: action,
      logout: action,
    });
  }

  login = ({ payload, navigate }) => {
    runInAction(() => {
      this.isLoadingLogin = true;
    });

    publicAxios
      .post("/auth/access-token", payload)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.token);

        navigate &&
          navigate(privatePaths.adminPanel, {
            replace: true,
          });

        runInAction(() => {
          this.isLoadingLogin = false;
        });
      })
      .catch(() => {
        toast.error("Login was failed");
        runInAction(() => {
          this.isLoadingLogin = false;
        });
      });
  };

  logout = ({ navigate }) => {
    localStorage.clear();
    navigate && navigate(publicPaths.admin, { replace: true });
  };
}

export default new AdminStore();
