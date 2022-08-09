FROM nginx:1.12-alpine as deploy
COPY build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
