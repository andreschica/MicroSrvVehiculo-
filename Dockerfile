FROM node:16.13.1-alpine
RUN addgroup achica && adduser -S -G achica achica
USER achica
RUN mkdir -p /home/achica/MicroservicioVehiculos/node_modules && chown -R achica:achica /home/achica/MicroservicioVehiculos

WORKDIR /home/achica/MicroservicioVehiculos

COPY --chown=achica:node package*.json ./

RUN npm install

ENV API_URL=http://api.myapp.com/
ENV LOG_LEVEL=debug
#Mysqlconfig
ENV HOST=dbvehicles.mysql.database.azure.com
ENV USERDB=vehiculos@dbvehicles
ENV PASSWORDDB=s64uDzmdb9rNoMPI
ENV DB=Vehiculos
ENV DIALECT=mysql
ENV PORDB=3306
ENV POOLMAX=5
ENV POOLMIN=0
ENV POOLACQUIRE=30000
ENV POOLIDLE=10000
#aplication
ENV PORT=4000
ENV KAFKAHOST=pkc-419q3.us-east4.gcp.confluent.cloud:9092
ENV KAFKAUSER=KB5WZ5H5NCCHY5GS
ENV KAFKAKEY=7vCbYaWev/ihq92d0w4kRnk+/i2Q2DuYzDpkH82FJU+S9DAuBiIUm5jj1wEIX7DE
ENV MODULES_CACHE=0

COPY --chown=achica:node . .

EXPOSE 4000

CMD [ "npm", "start" ]
