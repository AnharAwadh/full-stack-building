import axios from "axios";

const client = axios.create({
  baseURL: "https://builderproject.herokuapp.com/api/v1",
});

let cerdeintal = null;
cerdeintal = JSON.parse(localStorage.getItem("user"));

const setCerdeintal = ({ username, password }) => {
  cerdeintal = {};
  cerdeintal.username = username;
  cerdeintal.password = password;
  localStorage.setItem("user", JSON.stringify(cerdeintal));
};

export const logout = () => {
  cerdeintal = null;
  localStorage.removeItem("user");
  window.location.reload();
};

export const getNameInfoName = () => {
  return cerdeintal.username;
};

export const isUserLogin = () => {
  return !!cerdeintal;
};

export const login = ({ username, password }) => {
  return client
    .post(
      "/myuser/login",
      {},
      {
        headers: {
          Authorization: `Basic ${window.btoa(username + ":" + password)}`,
        },
      }
    )
    .then((response) => {
      if (response.status == 200) {
        setCerdeintal({ username, password });
        return Promise.resolve(200);
      }
    });
};

export const getUserInfo = () => {
  return client
    .get("/myuser/getuser", {
      headers: {
        Authorization: `Basic ${window.btoa(
          cerdeintal.username + ":" + cerdeintal.password
        )}`,
      },
    })
    .then((response) => {
      if (response.status == 200) {
        return Promise.resolve(response.data);
      }
    });
};

export const getpovider = (providerType) => {
  return client
    .get(`/myuser/providers/${providerType}`, {
      headers: {
        Authorization: `Basic ${window.btoa(
          cerdeintal.username + ":" + cerdeintal.password
        )}`,
      },
    })
    .then((response) => {
      if (response.status == 200) {
        return Promise.resolve(response.data);
      }
    });
};

export const getAvailableAppoinment = (userId) => {
  return client
    .get(`/appointment/get-appointment-available/${userId}`, {
      headers: {
        Authorization: `Basic ${window.btoa(
          cerdeintal.username + ":" + cerdeintal.password
        )}`,
      },
    })
    .then((response) => {
      if (response.status == 201) {
        return Promise.resolve(response.data);
      }
    });
};

export const bookAppoint = (appointId) => {
  return client
    .post(
      `/appointment/addappointment/${appointId}`,
      {},
      {
        headers: {
          Authorization: `Basic ${window.btoa(
            cerdeintal.username + ":" + cerdeintal.password
          )}`,
        },
      }
    )
    .then((response) => {
      if (response.status == 201) {
        return Promise.resolve(response.data);
      }
    });
};

export const updateUser = ({ firstName, lastName, phonenumber }) => {
  return client
    .put(
      "/myuser/edite",
      { firstName, lastName, phonenumber },
      {
        headers: {
          Authorization: `Basic ${window.btoa(
            cerdeintal.username + ":" + cerdeintal.password
          )}`,
        },
      }
    )
    .then((response) => {
      if (response.status == 200) {
        return Promise.resolve(response.status);
      }
    });
};

export const register = ({
  firstName,
  lastName,
  phonenumber,
  role,
  email,
  password,
}) => {
  return client
    .post("/myuser/register", {
      myuser: {
        firstName,
        lastName,
        phonenumber,
      },
      account: {
        role,
        email,
        password,
      },
    })
    .then((response) => {
      if (response.status == 201) {
        return Promise.resolve(201);
      }
    });
};
