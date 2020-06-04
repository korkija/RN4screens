package com.rn4screens;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this
import android.os.Bundle; // import this
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import android.content.Intent;
import android.net.Uri;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

@Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.launch_screen); //роняет приложение
        Intent intent = getIntent();
        String action = intent.getAction();
        Uri data = intent.getData();
    }

  @Override
  protected String getMainComponentName() {
    return "RN4screens";
  }
}
