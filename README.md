# Freenit Frontend

### [Tutorial](https://github.com/freenit-framework/frontend-tutorial)

This repo will be downloaded on `yarn create freenit <project>` and it will be cleaned up for your project. For example `name.ini` will contain the name you provided as `<project>`.

### Shell Scripts
To star development:
```
bin/init.sh
bin/devel.sh
```
If you use it with the backend, run it like this:
```
env BACKEND_URL=<url> bin/devel.sh
```

To run tests:
```
bin/init.sh
bin/test.sh
```

### CBSD/Reggae
To start development:
```
echo DEVEL_MODE=YES >vars.mk
make devel
```
To run it with the backend, consider running it with [Freenit Project](https://github.com/freenit-framework/freenit)

To run tests:
```
echo DEVEL_MODE=YES >vars.mk
make test
```
