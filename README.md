# Codebase Mobile

Codebase Mobile is a project aimed at building a mobile application using React Native with Typescript. This codebase provides a basic framework that can be used as a starting point for developing responsive and interactive mobile applications.

The project is developed using various modern technologies and libraries within the React Native ecosystem. With this codebase, you can quickly start developing mobile applications that run on both iOS and Android platforms.

## Features

- Navigation management using React Navigation.
- User state management using Redux.
- Ready-to-use UI components with responsive styling.
- Integration with APIs through the Axios library and React Query.
- Code linting and formatting configuration with ESLint.

## Requirement
```bash
1. Nodejs >=18
2. NDK Version 26.1.10909125
3. Java Version 17
```

## Installation

Here are the steps to install and run the project locally:

#### 1. Clone the repository:

```bash
git clone https://github.com/jneindonesia/Codebase-Mobile-TS.git Name-Project
```

#### 2. Navigate to the project directory:

```bash
cd Name-Project
```

#### 3. Install dependencies:

```bash
npm install
```

#### 4. Run the application on an Android emulator:

```
make run-android-prod // run android enviroment production
make run-android-dev // run android enviroment development
```

#### 5. Run the application on an iOS simulator:

```
npx react-native run-ios
```

## How to Change ENV

```
make change-env envStage=prod
```

note: envStage can contain (`dev/prod`)

## How to Build Android

```
make generate-android envStage=Production // output apk
make generate-bundle envStage=Production // output aab
```

note: envStage can contain (`Development/Production`)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.example file

`ENV`
`API_BASE_URL`

## Additional config
Create local.properties in the Android folder

- Mac
```bash
sdk.dir=/Users/{username_pc}/Library/Android/sdk
ndk.dir=/Users/{username_pc}/Library/Android/sdk/ndk/26.1.10909125
```

- Windows
```bash
sdk.dir=C:\\Users\\{username_pc}\\AppData\\Local\\Android\\sdk
ndk.dir=C:\\Users\\{username_pc}\\AppData\\Local\\Android\\sdk\\ndk\\26.1.10909125
```

## Usage

- Create new components in the **app/design-system** directory.
- Manage application state using Redux in the **app/redux** directory.
- Create view pages and business logic in the **app/screens** directory.
- Create services in the **app/data/remote** directory

You can also customize the project configuration, modify the UI theme, add new functionality, and expand the features according to your needs.

## Contributing

Contributions are welcome and appreciated! If you would like to contribute to this project, You can report bugs, suggest new features, or submit code improvements.

## Authors

- [@Alan Nugraha](https://www.github.com/alan-nugraha)

## License

[MIT](https://github.com/jneindonesia/Codebase-Mobile-TS/blob/master/LICENSE)
