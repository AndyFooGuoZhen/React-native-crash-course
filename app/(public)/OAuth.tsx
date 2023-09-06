import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, TouchableOpacity } from "react-native";
import { UseOAuthFlowParams, useOAuth, useSignIn} from "@clerk/clerk-expo";
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


export function OAuthButtons(OAuthStrategy : UseOAuthFlowParams) {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWamUpBrowser();

  const OAuthStrat = OAuthStrategy.strategy.toString();
  let OAuthDisplayText = ""

  if(OAuthStrat == "oauth_google"){
    OAuthDisplayText = "Google";
  }else if(OAuthStrat == "oauth_facebook"){
    OAuthDisplayText = "Facebook";
  }else if(OAuthStrat == "oauth_apple"){
    OAuthDisplayText = "Apple";
  }

  const { startOAuthFlow } = useOAuth(OAuthStrategy);

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
      <Text style={styles.secondaryButtonText}>Login with {OAuthDisplayText}</Text>
    </TouchableOpacity>
  );
}





