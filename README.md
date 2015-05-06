[audiolib.js](https://github.com/jussi-kalliokoski/audiolib.js) packaged for bower.

# Installation

```bash
bower install --save audiolib
```

# Build

```bash
LOCAL="$HOME/.local"
git clone https://github.com/kinetiknz/cubeb.git
cd cubeb
autoreconf --install
./configure --prefix="$LOCAL"
make
make install
cd ..
CPLUS_INCLUDE_PATH="$LOCAL/include" LDFLAGS="-L $LOCAL/lib" npm install

gulp
```