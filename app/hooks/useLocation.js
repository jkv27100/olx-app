import { useState, useEffect } from "react";
import * as Location from "expo-location";
export default function useLocation() {
  const [location, setLocation] = useState();
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  return location;
}
