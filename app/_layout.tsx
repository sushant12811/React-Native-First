import { Stack } from "expo-router"; //
import './globals.css'

export default function RootLayout() { // default root layout - highest navigation structure.
  return <Stack>            //Stack navigator- manages multiple screens inside it.
    <Stack.Screen           //This is a single Screen name ("tabs")and options helps not to show header in that screen
      name = "(tabs)"
      options = {{
        headerShown : false
      }}
    />

    <Stack.Screen    //This is a single Screen name ("movie/[id]")and options helps not to show header in that screen
    name = "movie/[id]"
    options = {{
      headerShown : false
    }}
    />

  </Stack>;
}

/*
We are setting up navigation for expo-router
Expo router is a file-based router for react-native - Similar to Next.js for web
It automatically turns files and folder into screens and routes.

 */