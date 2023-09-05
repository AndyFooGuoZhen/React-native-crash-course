import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, TouchableOpacity } from "react-native";
import { useOAuth, useSignIn} from "@clerk/clerk-expo";
import { OAuthStrategy } from "@clerk/types";
import { styles } from "./Styles"
import { useRouter } from "expo-router";

WebBrowser.maybeCompleteAuthSession();


export const useWamUpBrowser = () => {
    React.useEffect(() => {

      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }, []);
  };


export function OAuthButtons() {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWamUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    const router = useRouter();

    
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {

        await setActive({ session: createdSessionId });


      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity
      style={{ ...styles.secondaryButton, marginBottom: 20 }}
      onPress={onPress}
    >
      <Text style={styles.secondaryButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
}





