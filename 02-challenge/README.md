# Challenge

Create a node script (`script.ts`) that will make a JSON HTTP `POST` request to `http://hello-world-sf-app.herokuapp.com/submit`.

Two properties must be present in the payload - `name` and `email`. For example:

```
Content-Type: application/json

{"name":"Blake Embrey","email":"blake.embrey@mulesoft.com"}
```

## Notes

You can install `ts-node` with `typescript` to execute node scripts without compiling.
