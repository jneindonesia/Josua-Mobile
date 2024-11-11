#!/bin/sh
cd /home/webhook/mobile-app/{name_project}/android
tmpVersionCode=`awk -F'versionName ' '{print $2}' ./app/build.gradle | cat | tr -d " \t\n\r\""`
mv ./app/build/outputs/apk/production/release/app-production-release.apk "../{name_application}-v$tmpVersionCode.apk"
curl -X POST \
  'https://apiv3.jne.co.id:20443/prod/be-appmanager/api/uploads' \
  -H 'Accept: /' \
  -H 'User-Agent: Thunder Client (https://www.thunderclient.io)' \
  --form 'projectId="{projectId}"' \
  --form 'username="appmanager"' \
  --form 'apiKey="JNE2jayalah"' \
  --form 'type="android"' \
  --form "file=@/home/webhook/mobile-app/{name_project}/{name_application}-v$tmpVersionCode.apk"
rm "../{name_application}-v$tmpVersionCode.apk"
echo "Success Uploaded"