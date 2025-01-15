import { View, Text } from "react-native";

const Login = () => {
  return (
    <>
      <View>
        <form onSubmit={(f) => f}>
          <input placeholder="username" type="text" />
          <input placeholder="password" type="password" />
          <button>Login</button>
        </form>
      </View>
    </>
  );
};

export default Login;
