APK file - 
You can find APK file at RN4screens/android/app/release/

TEST deepLinking on Emulator

adb shell am start -W -a android.intent.action.VIEW -d "rn4screens://welcome" com.rn4screens

adb shell am start -W -a android.intent.action.VIEW -d "rn4screens://settings" com.rn4screens

adb shell am start -W -a android.intent.action.VIEW -d "https://rn4screens.com/settings" com.rn4screens

adb shell am start -W -a android.intent.action.VIEW -d "https://rn4screens.com/welcome" com.rn4screens

TEST deepLinking on Device

<a href="rn4screens://settings">rn4screens://settings</a>

<a href="rn4screens://welcome">rn4screens://welcome</a>

<a href="https://rn4screens.com/welcome">https://rn4screens.com/welcome</a>

<a href="https://rn4screens.com/welcome">https://rn4screens.com/welcome</a>
