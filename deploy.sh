./build.sh
aws ecs update-service --cluster cluster-bia-pipeline --service bia-svc-pipeline  --force-new-deployment