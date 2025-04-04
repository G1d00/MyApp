import { Stack } from "expo-router";
import './globals.css';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={false} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options=
          {{
            title: 'Home',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="movies/[id]"
          options=
          {{
            headerShown: false
          }}
        />
      </Stack>
    </>
  );
}
