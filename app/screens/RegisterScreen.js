import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";
import Loader from "../components/Loader";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const authContext = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      authContext.setUser(true);
    }, 2000);
  };

  return (
    <>
      <Loader visible={visible} />
      <View style={styles.container}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                name="account"
                placeholder="Name"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("name")}
                autoCorrect={false}
                onChangeText={handleChange("name")}
              />
              <ErrorMessage message={errors.name} visible={touched.name} />
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
              <AppButton title="Register" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
