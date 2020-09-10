curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"data":"my-data"}' \
  http://localhost:8080/api/v1/get-proposals

printf  "\nDone.\n"
