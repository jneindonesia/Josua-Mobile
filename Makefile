include .env
export $(shell sed 's/=.*//' .env)

run-android:
	./prepare-env.sh .env.$(ENV) .env && ./run-packager.sh && sleep 1 && react-native run-android
run-android-dev:
	./prepare-env.sh .env.dev .env && rm -rf android/app/build/ASSETS && npx react-native run-android --mode=developmentDebug --appIdSuffix=dev
run-android-prod:
	./prepare-env.sh .env.prod .env && rm -rf android/app/build/ASSETS && npx react-native run-android --mode=productionDebug
change-env:
	./prepare-env.sh .env.$(envStage) .env
installation:
	npm install
prepare-generate-android:
	npm run createBundleAndroid
generate-android:
	cd android && ./gradlew clean && ./gradlew assemble$(envStage)Release
generate-bundle:
	cd android && ./gradlew bundle$(envStage)Release