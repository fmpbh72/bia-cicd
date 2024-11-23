./build.sh
aws ecs update-service --cluster biaplan10dews2 --service svcbiaplan10dews2  --force-new-deployment