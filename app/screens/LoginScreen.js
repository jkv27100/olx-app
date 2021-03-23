import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../auth/validate";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = (loginInfo) => {
    const isUser = authApi.validate(loginInfo);
    if (!isUser) setLoginFailed(true);
    setLoginFailed(false);
    authContext.setUser(true);
  };

  return (
    <View style={styles.container}>
      <ErrorMessage
        message="Email or Password is wrong "
        visible={loginFailed}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={() => setFieldTouched("email")}
              autoCorrect={false}
              onChangeText={handleChange("email")}
            />
            <ErrorMessage message={errors.email} visible={touched.email} />
            <AppTextInput
              name="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched("password")}
              secureTextEntry
              onChangeText={handleChange("password")}
            />

            <ErrorMessage
              message={errors.password}
              visible={touched.password}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
