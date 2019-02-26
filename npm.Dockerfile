FROM node:carbon

RUN apt-get update && apt-get install -y sudo git-core curl libfreetype6 fontconfig netcat

RUN mkdir -p /jsapp
ADD ./jsapp/package.json /jsapp/package.json
WORKDIR /jsapp
RUN npm install -g npm
RUN npm install -g rollup
RUN npm install
ADD ./jsapp.command.sh /jsapp.command.sh

CMD ["/bin/bash"]
