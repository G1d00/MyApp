import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (<Stack> 
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
  );}
