import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import ImageList from "../components/ImageList";
import { Formik } from "formik";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";

const Category = [
  { title: "Grocery", value: 1, name: "apps", backgroundColor: "red" },
  { title: "Phones", value: 2, name: "email", backgroundColor: "green" },
  { title: "Camera", value: 3, name: "lock", backgroundColor: "blue" },
];
export default function ListingEditScreen() {
  const [imageUris, setImageUris] = useState([]);
  const [category, setCategory] = useState();
  const location = useLocation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
  });

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        description: "",
      }}
      onSubmit={() => console.log(location)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <View>
          <ImageList
            imageUris={imageUris}
            onAddImage={(uri) => handleAdd(uri)}
            onRemoveImage={(uri) => handleRemove(uri)}
          />

          <AppTextInput
            placeholder="Title"
            onChangeText={handleChange("title")}
            onBlur={() => setFieldTouched("title")}
          />
          <ErrorMessage message={errors.title} visible={touched.title} />
          <AppTextInput
            placeholder="Price"
            onChangeText={handleChange("price")}
            keyboardType="number-pad"
            onBlur={() => setFieldTouched("price")}
          />
          <ErrorMessage message={errors.price} visible={touched.price} />
          <AppPicker
            column={Category.length}
            placeholder="Category"
            selectedItem={category}
            items={Category}
            onSelectItem={(item) => setCategory(item)}
          />
          <AppTextInput
            placeholder="Description"
            onChangeText={handleChange("description")}
            onBlur={() => setFieldTouched("description")}
          />
          <ErrorMessage
            message={errors.description}
            visible={touched.description}
          />
          <AppButton title="POST" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({});
